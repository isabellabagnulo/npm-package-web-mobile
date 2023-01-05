"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = exports.initUser = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var setUser = function setUser(user) {
  return function (dispatch) {
    try {
      return dispatch(setUserAction(user));
    } catch (e) {
      return console.error(e.message);
    }
  };
};
exports.setUser = setUser;
var initUser = function initUser() {
  return function (dispatch) {
    try {
      return dispatch(initUserAction());
    } catch (e) {
      return console.error(e.message);
    }
  };
};
exports.initUser = initUser;
var userDuck = (0, _toolkit.createSlice)({
  name: 'userDuck',
  initialState: {
    user: {}
  },
  reducers: {
    setUserAction: function setUserAction(state, action) {
      state.user = action.payload.user;
    },
    initUserAction: function initUserAction(state, action) {
      state.user = {};
    }
  }
});
var _default = userDuck.reducer;
exports.default = _default;
var _userDuck$actions = userDuck.actions,
  setUserAction = _userDuck$actions.setUserAction,
  initUserAction = _userDuck$actions.initUserAction;