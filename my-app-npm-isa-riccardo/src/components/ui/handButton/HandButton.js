import React from "react"
import PropTypes from "prop-types"
import useResponsive from "../../hooks/useResponsive"

import { Animated, Pressable, Image, StyleSheet, View } from "react-native"

function HandButton(props) {
  let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 1.2];
  const scale = animation.interpolate({inputRange, outputRange});

  function press(e) {
    if (!!props.callbackPress) {
      props.callbackPress(e)
    }
  }
  
  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start(onPressOut);
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
   
      <Animated.View style={[
        styles.buttonContainer,
        {transform: [{scale}]},
        props.active && onPressIn(),

      ]}>
        <Pressable
          style={[
            styles.handButton,
          ]}
          disabled={props.disabled}
          onPress={press}
          // onPressIn={onPressIn}
          // onPressOut={onPressOut}
        >
          <Image style={styles.handIcon} source={props.hand} />
        </Pressable>
      </Animated.View>
    
  )
}

HandButton.propTypes = {
  hand: PropTypes.node.isRequired,
  callbackPress: PropTypes.func,
  disabled: PropTypes.bool,
  growAnim: PropTypes.object,
  active: PropTypes.bool
}

HandButton.defaultProps = {
  callbackPress: undefined,
  disabled: false,
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 80,
    width: 80,
    margin: 10
  },
  handButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "orange",
    borderWidth: 4,
    backgroundColor: "black",
  },

  handIcon: {
    width: 30,
    height: 30,
  },
})

export default HandButton
