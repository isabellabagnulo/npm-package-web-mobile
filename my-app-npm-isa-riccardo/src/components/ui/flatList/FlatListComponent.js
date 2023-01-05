import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import PropTypes from "prop-types"
import useResponsive from "../../hooks/useResponsive"
import { commonStyles } from "../../style/commonStyle"

function FlatListComponent(props) {
  let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

  const Item = ({ name, wins }) => (
    <View style={styles.item}>
      <Text
        style={[
          commonStyles.paragraph,
          isDesktop
            ? commonStyles.paragraphDesktop
            : commonStyles.paragraphMobile,
        ]}
      >{`${name} : ${wins}`}</Text>
    </View>
  )

  const renderItem = ({ item }) => {
    return <Item name={item.name} wins={item.wins} />
  }

  return (
    <View style={[styles.container, props.addStyle]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={props.list.sort((a, b) => a.wins > b.wins ? -1 : 1)}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 20,
    borderWidth: 3,
    borderRadius: 3,
    padding: 20,
    borderColor: "orange",
  },
  item: {
    paddingVertical: 4,
  },
})

FlatListComponent.propTypes = {
  list: PropTypes.array,
}
FlatListComponent.defaultProps = {
  list: [],
}

export default FlatListComponent
