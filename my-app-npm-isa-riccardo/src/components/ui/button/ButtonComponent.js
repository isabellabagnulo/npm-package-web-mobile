import React from "react"
import PropTypes from "prop-types"
import { Pressable, Text, StyleSheet } from 'react-native'
import useResponsive from "../../hooks/useResponsive"

import {commonStyles} from '../../style/commonStyle'

function ButtonComponent(props) {
  let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

  function press(e) {
    if (!!props.callbackPress) {
      props.callbackPress(e)
    }
  }

  function longPress(e) {
    if (!!props.callbackLongPress) {
      props.callbackLongPress(e)
    }
  }

  return(
    <>
      <Pressable
        disabled={props.disabled}
        style={[
          styles.button, isDesktop ? styles.buttonDesktop : styles.buttonMobile ,
          {backgroundColor: props.bgColor},
          props.addStyles,
        ]}
        onPress={press}
        onLongPress={longPress}
      >
        <Text style={[
          styles.buttonLabel, isDesktop ? styles.buttonLabelDesktop : styles.buttonLabelMobile,
          {color: props.textColor}
        ]}>{props.label}</Text>
      </Pressable> 
    </>
  )
}

ButtonComponent.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  callbackPress: PropTypes.func,
  callbackLongPress: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  addStyles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  disabled: PropTypes.bool
}

ButtonComponent.defaultProps = {
  label: "",
  callbackPress: undefined,
  callbackLongPress: undefined,
  bgColor: "#fff",
  textColor: "#000",
  addStyles: {},
  disabled: false
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonMobile: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonDesktop: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 15,
    marginHorizontal: 10
  },
  buttonLabel: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabelMobile: {
    fontSize: 18,
  },
  buttonLabelDesktop: {
    fontSize: 22
  }
});

export default ButtonComponent
