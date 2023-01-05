"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useResponsive3 = _interopRequireDefault(require("../../hooks/useResponsive"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function HandButton(props) {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 4),
    Mobile = _useResponsive2[0],
    Desktop = _useResponsive2[1],
    isMobile = _useResponsive2[2],
    isDesktop = _useResponsive2[3];
  var animation = new _reactNative.Animated.Value(0);
  var inputRange = [0, 1];
  var outputRange = [1, 1.2];
  var scale = animation.interpolate({
    inputRange: inputRange,
    outputRange: outputRange
  });
  function press(e) {
    if (!!props.callbackPress) {
      props.callbackPress(e);
    }
  }
  var onPressIn = function onPressIn() {
    _reactNative.Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true
    }).start(onPressOut);
  };
  var onPressOut = function onPressOut() {
    _reactNative.Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.buttonContainer, {
      transform: [{
        scale: scale
      }]
    }, props.active && onPressIn()]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.handButton],
    disabled: props.disabled,
    onPress: press
    // onPressIn={onPressIn}
    // onPressOut={onPressOut}
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.handIcon,
    source: props.hand
  })));
}
HandButton.propTypes = {
  hand: _propTypes.default.node.isRequired,
  callbackPress: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  growAnim: _propTypes.default.object,
  active: _propTypes.default.bool
};
HandButton.defaultProps = {
  callbackPress: undefined,
  disabled: false
};
var styles = _reactNative.StyleSheet.create({
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
    backgroundColor: "black"
  },
  handIcon: {
    width: 30,
    height: 30
  }
});
var _default = HandButton;
exports.default = _default;