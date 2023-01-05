"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _useResponsive3 = _interopRequireDefault(require("../../hooks/useResponsive"));
var _ButtonComponent = _interopRequireDefault(require("../../ui/button/ButtonComponent"));
var _rules = _interopRequireDefault(require("../../utils/rules"));
var _ModalComponent = _interopRequireDefault(require("../../ui/modal/ModalComponent"));
var _HandButton = _interopRequireDefault(require("../../ui/handButton/HandButton"));
var _rock = _interopRequireDefault(require("../../assets/images/rock.png"));
var _paper = _interopRequireDefault(require("../../assets/images/paper.png"));
var _scissor = _interopRequireDefault(require("../../assets/images/scissor.png"));
var _animations = require("../../utils/animations");
var _commonStyle = require("../../style/commonStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var randomMove = 0;
var lastMove = 0;
function Game(props) {
  var _state$result, _state$result2, _state$result3, _state$result4;
  var _useState = (0, _react.useState)({
      moves: {
        user: null,
        cpu: null
      },
      points: {
        user: 0,
        cpu: 0
      },
      attempts: 0,
      result: {},
      openModal: false,
      buttonDisabled: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.userDuck.user;
  });
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 4),
    Mobile = _useResponsive2[0],
    Desktop = _useResponsive2[1],
    isMobile = _useResponsive2[2],
    isDesktop = _useResponsive2[3];
  var fadeAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  var animation = new _reactNative.Animated.Value(0);
  var inputRange = [0, 1];
  var outputRange = [1, 0.8];
  var scale = animation.interpolate({
    inputRange: inputRange,
    outputRange: outputRange
  });
  // console.log("growAnim",fadeAnim)

  var onPressIn = function onPressIn() {
    _reactNative.Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };
  var onPressOut = function onPressOut() {
    _reactNative.Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  };
  var getRandomMove = function getRandomMove() {
    randomMove = Math.floor(Math.random() * 3);
    if (lastMove !== randomMove) {
      lastMove = randomMove;
    } else {
      randomMove = getRandomMove();
    }
    return randomMove;
  };
  var closeModal = function closeModal() {
    console.log("state closeModal", state);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      moves: {
        user: null,
        cpu: null
      },
      points: {
        user: state.points.user + state.result.userPoint,
        cpu: state.points.cpu + state.result.cpuPoint
      },
      openModal: false,
      buttonDisabled: false
    }));
  };

  //end Game
  (0, _react.useEffect)(function () {
    console.log("useEffect state", state);
    if (state.attempts === 3 && !state.openModal) {
      var points = state.points;
      setState({
        moves: {
          user: null,
          cpu: null
        },
        points: {
          user: 0,
          cpu: 0
        },
        attempts: 0,
        openModal: false,
        buttonDisabled: false
      });
      props.endGame(points);
    } else if (state.attempts !== 0 && state.openModal) {
      (0, _animations.fadeIn)(fadeAnim, openModal);
    } else {
      console.log("ciao");
    }
  }, [state.openModal]);
  var openModal = function openModal() {
    (0, _animations.fadeOut)(fadeAnim, closeModal);
  };
  var getMove = function getMove(e) {
    return function () {
      var randomMove = getRandomMove();
      var result = _rules.default[e][randomMove];
      setState(_objectSpread(_objectSpread({}, state), {}, {
        attempts: state.attempts + 1,
        moves: {
          user: e,
          cpu: randomMove
        },
        result: result,
        buttonDisabled: true,
        openModal: true
      }));
    };
  };

  // function animation() {
  //   console.log("growAnim",fadeAnim)
  //   growth(growAnim)
  // }

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, _commonStyle.commonStyles.screenContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardPlayer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyle.commonStyles.paragraph, isDesktop ? _commonStyle.commonStyles.paragraphDesktop : _commonStyle.commonStyles.paragraphMobile, {
      paddingBottom: 20
    }]
  }, "CPU"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.buttonContainer
  }, /*#__PURE__*/_react.default.createElement(_HandButton.default, {
    hand: _paper.default,
    disabled: state.buttonDisabled,
    growAnim: animation,
    active: state.moves.cpu === 0
  }), /*#__PURE__*/_react.default.createElement(_HandButton.default, {
    hand: _scissor.default,
    disabled: state.buttonDisabled,
    growAnim: animation,
    active: state.moves.cpu === 1
  }), /*#__PURE__*/_react.default.createElement(_HandButton.default, {
    hand: _rock.default,
    disabled: state.buttonDisabled,
    growAnim: animation,
    active: state.moves.cpu === 2
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.score
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.scoreText
  }, state.points.cpu, " - ", state.points.user)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardPlayer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.buttonContainer
  }, /*#__PURE__*/_react.default.createElement(_HandButton.default, {
    hand: _paper.default,
    disabled: state.buttonDisabled,
    active: state.moves.user === 0,
    callbackPress: getMove(0)
  }), /*#__PURE__*/_react.default.createElement(_HandButton.default, {
    hand: _scissor.default,
    disabled: state.buttonDisabled,
    active: state.moves.user === 1,
    callbackPress: getMove(1)
  }), /*#__PURE__*/_react.default.createElement(_HandButton.default, {
    hand: _rock.default,
    disabled: state.buttonDisabled,
    active: state.moves.user === 2,
    callbackPress: getMove(2)
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyle.commonStyles.paragraph, {
      paddingTop: 20
    }]
  }, user === null || user === void 0 ? void 0 : user.name)), /*#__PURE__*/_react.default.createElement(_ModalComponent.default, {
    fadeAnim: fadeAnim,
    isOpen: state.openModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_commonStyle.commonStyles.modalText, isDesktop ? _commonStyle.commonStyles.modalTextDesktop : _commonStyle.commonStyles.modalTextMobile, (state === null || state === void 0 ? void 0 : (_state$result = state.result) === null || _state$result === void 0 ? void 0 : _state$result.label) === "Hai perso" ? {
      color: "red"
    } : (state === null || state === void 0 ? void 0 : (_state$result2 = state.result) === null || _state$result2 === void 0 ? void 0 : _state$result2.label) === "Hai vinto" ? {
      color: "green"
    } : {}]
  }, state === null || state === void 0 ? void 0 : (_state$result3 = state.result) === null || _state$result3 === void 0 ? void 0 : _state$result3.label), !!(state !== null && state !== void 0 && (_state$result4 = state.result) !== null && _state$result4 !== void 0 && _state$result4.gif) && /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: {
      height: 150,
      width: 150
    },
    resizeMode: "contain",
    source: state.result.gif
  })));
}
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around"
  },
  cardPlayer: {
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  score: {
    borderColor: "orange",
    borderWidth: 4,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  scoreText: {
    fontSize: 30,
    color: "white"
  }
});
Game.propTypes = {
  endGame: _propTypes.default.func
};
Game.defaultProps = {
  endGame: undefined
};
var _default = Game;
exports.default = _default;