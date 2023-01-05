"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeOut = exports.fadeIn = void 0;
var _reactNative = require("react-native");
var fadeIn = function fadeIn(anim) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Will change fadeAnim value to 1 in 5 seconds
  _reactNative.Animated.timing(anim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true
  }).start(func);
};
exports.fadeIn = fadeIn;
var fadeOut = function fadeOut(anim) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Will change fadeAnim value to 0 in 3 seconds
  _reactNative.Animated.timing(anim, {
    toValue: 0,
    duration: 500,
    delay: 2300,
    useNativeDriver: true
  }).start(func);
};
exports.fadeOut = fadeOut;