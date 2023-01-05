"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _useResponsive3 = _interopRequireDefault(require("../../hooks/useResponsive"));
var _commonStyle = require("../../style/commonStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ButtonComponent(props) {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 4),
    Mobile = _useResponsive2[0],
    Desktop = _useResponsive2[1],
    isMobile = _useResponsive2[2],
    isDesktop = _useResponsive2[3];
  function press(e) {
    if (!!props.callbackPress) {
      props.callbackPress(e);
    }
  }
  function longPress(e) {
    if (!!props.callbackLongPress) {
      props.callbackLongPress(e);
    }
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: props.disabled,
    style: [styles.button, isDesktop ? styles.buttonDesktop : styles.buttonMobile, {
      backgroundColor: props.bgColor
    }, props.addStyles],
    onPress: press,
    onLongPress: longPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.buttonLabel, isDesktop ? styles.buttonLabelDesktop : styles.buttonLabelMobile, {
      color: props.textColor
    }]
  }, props.label)));
}
ButtonComponent.propTypes = {
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  callbackPress: _propTypes.default.func,
  callbackLongPress: _propTypes.default.func,
  bgColor: _propTypes.default.string,
  textColor: _propTypes.default.string,
  addStyles: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  disabled: _propTypes.default.bool
};
ButtonComponent.defaultProps = {
  label: "",
  callbackPress: undefined,
  callbackLongPress: undefined,
  bgColor: "#fff",
  textColor: "#000",
  addStyles: {},
  disabled: false
};
var styles = _reactNative.StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonMobile: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10
  },
  buttonDesktop: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 15,
    marginHorizontal: 10
  },
  buttonLabel: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLabelMobile: {
    fontSize: 18
  },
  buttonLabelDesktop: {
    fontSize: 22
  }
});
var _default = ButtonComponent;
exports.default = _default;