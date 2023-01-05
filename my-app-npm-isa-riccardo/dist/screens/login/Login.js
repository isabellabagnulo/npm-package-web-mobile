"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useResponsive3 = _interopRequireDefault(require("../../hooks/useResponsive"));
var _reactRedux = require("react-redux");
var _userDuck = require("../../redux/ducks/userDuck");
var _InputBox = _interopRequireDefault(require("../../ui/inputBox/InputBox"));
var _ButtonComponent = _interopRequireDefault(require("../../ui/button/ButtonComponent"));
var _commonStyle = require("../../style/commonStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var name = "";
var email = "";
console.log("obj login", name, email);
function Login(props) {
  var _useState = (0, _react.useState)({
      errorName: false,
      errorEmail: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 4),
    Mobile = _useResponsive2[0],
    Desktop = _useResponsive2[1],
    isMobile = _useResponsive2[2],
    isDesktop = _useResponsive2[3];
  function getName(e) {
    name = e;
  }
  function getEmail(e) {
    email = e;
  }
  function startGame() {
    // setState({
    //     ...state,
    //     errorName: checkText(obj.name)

    // })
    // if(!checkText(obj.name) && !checkEmail(obj.email)){
    //     props.storage(obj)
    //     props.goTo()
    // }

    dispatch((0, _userDuck.setUser)({
      user: {
        name: name,
        email: email
      }
    }));
    props.goTo();
  }

  // const checkText = (value) => {
  //     const re = /^[a-z ,.'-]+$/i;
  //     let ok = re.exec(value);
  //     return !!ok ? true : false;
  // }
  // const checkEmail = (email) => {
  //     const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //     let ok = re.exec(email);
  //     return !!ok ? true : false;
  // }

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.login, _commonStyle.commonStyles.screenContainer, isDesktop ? styles.loginDesktop : styles.loginMobile]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.header
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyle.commonStyles.h1, isDesktop ? _commonStyle.commonStyles.h1Desktop : _commonStyle.commonStyles.h1Mobile]
  }, "Morra cinese"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyle.commonStyles.paragraph, isDesktop ? _commonStyle.commonStyles.paragraphDesktop : _commonStyle.commonStyles.paragraphMobile]
  }, "Inserisci il nome e la mail per giocare")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.form, isDesktop ? styles.formDesktop : styles.formMobile]
  }, /*#__PURE__*/_react.default.createElement(_InputBox.default, {
    placeholder: "Nome",
    callbackInput: getName
  }), /*#__PURE__*/_react.default.createElement(_InputBox.default, {
    placeholder: "Email",
    callbackInput: getEmail
  }), /*#__PURE__*/_react.default.createElement(_ButtonComponent.default, {
    label: "Start",
    textColor: "#fff",
    callbackPress: startGame,
    addStyles: styles.buttonLogin
  })));
}
Login.propTypes = {
  goTo: _propTypes.default.func
};
Login.defaultProps = {
  goTo: undefined
};
var styles = _reactNative.StyleSheet.create({
  login: {
    alignItems: "center",
    justifyContent: "center"
  },
  loginMobile: {
    padding: 20
  },
  loginDesktop: {
    padding: 100
  },
  header: {
    alignItems: "center",
    paddingBottom: 50
  },
  buttonLogin: {
    borderWidth: 4,
    borderColor: "orange",
    backgroundColor: "orange"
  }
});
var _default = Login;
exports.default = _default;