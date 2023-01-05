"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonStyles = void 0;
var _reactNative = require("react-native");
var ScreenHeight = _reactNative.Dimensions.get("window").height;
var commonStyles = _reactNative.StyleSheet.create({
  screenContainer: {
    minHeight: ScreenHeight,
    flex: 1,
    backgroundColor: "black",
    padding: 20
  },
  h1: {
    color: "white",
    paddingBottom: 20
  },
  h1Mobile: {
    fontSize: 30
  },
  h1Desktop: {
    fontSize: 100
  },
  h2: {
    color: "white"
  },
  h2Mobile: {
    fontSize: 20
  },
  h2Desktop: {
    fontSize: 60
  },
  paragraph: {
    color: "white"
  },
  paragraphMobile: {
    fontSize: 16
  },
  paragraphDesktop: {
    fontSize: 20
  },
  modalText: {
    color: "black"
  },
  modalTextMobile: {
    fontSize: 24
  },
  modalTextDesktop: {
    fontSize: 40
  }
});
exports.commonStyles = commonStyles;