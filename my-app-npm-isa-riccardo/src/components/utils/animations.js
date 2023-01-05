import { Animated, Easing } from "react-native"

export const fadeIn = (anim, func = null) => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(anim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true
  }).start(func);
}

export const fadeOut = (anim, func = null) => {
  // Will change fadeAnim value to 0 in 3 seconds
  Animated.timing(anim, {
    toValue: 0,
    duration: 500,
    delay: 2300,
    useNativeDriver: true
  }).start(func);
}