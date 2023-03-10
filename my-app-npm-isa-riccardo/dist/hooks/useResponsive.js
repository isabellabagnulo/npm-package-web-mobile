"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactResponsive = require("react-responsive");
var useResponsive = function useResponsive() {
  var Desktop = function Desktop(_ref) {
    var children = _ref.children;
    var isNotMobile = (0, _reactResponsive.useMediaQuery)({
      minWidth: 992
    });
    return isNotMobile ? children : null;
  };
  var Mobile = function Mobile(_ref2) {
    var children = _ref2.children;
    var isMobile = (0, _reactResponsive.useMediaQuery)({
      maxWidth: 991
    });
    return isMobile ? children : null;
  };
  var isMobile = (0, _reactResponsive.useMediaQuery)({
    maxWidth: 991
  });
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 992
  });
  return [Mobile, Desktop, isMobile, isDesktop];
};
var _default = useResponsive;
exports.default = _default;