"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// variabili
var matrix = new Array();
matrix[0] = new Array();
matrix[1] = new Array();
matrix[2] = new Array();
matrix[0][0] = {
  userLabel: "ha scelto carta",
  cpuLabel: "CPU ha scelto carta",
  label: "Pareggio",
  gif: require("../assets/images/paper.gif"),
  userPoint: 0,
  cpuPoint: 0
};
matrix[0][1] = {
  userLabel: "ha scelto carta",
  cpuLabel: "CPU ha scelto forbice",
  label: "Hai perso",
  gif: require("../assets/images/paperLoser.gif"),
  userPoint: 0,
  cpuPoint: 1
};
matrix[0][2] = {
  userLabel: "ha scelto carta",
  cpuLabel: "CPU ha scelto sasso",
  label: "Hai vinto",
  gif: require("../assets/images/rockLoser.gif"),
  userPoint: 1,
  cpuPoint: 0
};
matrix[1][0] = {
  userLabel: "ha scelto forbice",
  cpuLabel: "CPU ha scelto carta",
  label: "Hai vinto",
  gif: require("../assets/images/paperLoser.gif"),
  userPoint: 1,
  cpuPoint: 0
};
matrix[1][1] = {
  userLabel: "ha scelto forbice",
  cpuLabel: "CPU ha scelto forbice",
  label: "Pareggio",
  gif: require("../assets/images/scissor.gif"),
  userPoint: 0,
  cpuPoint: 0
};
matrix[1][2] = {
  userLabel: "ha scelto forbice",
  cpuLabel: "CPU ha scelto sasso",
  label: "Hai perso",
  gif: require("../assets/images/scissorLoser.gif"),
  userPoint: 0,
  cpuPoint: 1
};
matrix[2][0] = {
  userLabel: "ha scelto sasso",
  cpuLabel: "CPU ha scelto carta",
  label: "Hai perso",
  gif: require("../assets/images/rockLoser.gif"),
  userPoint: 0,
  cpuPoint: 1
};
matrix[2][1] = {
  userLabel: "ha scelto sasso",
  cpuLabel: "CPU ha scelto forbice",
  label: "Hai vinto",
  gif: require("../assets/images/scissorLoser.gif"),
  userPoint: 1,
  cpuPoint: 0
};
matrix[2][2] = {
  userLabel: "ha scelto sasso",
  cpuLabel: "CPU ha scelto sasso",
  label: "Pareggio",
  gif: require("../assets/images/rock.gif"),
  userPoint: 0,
  cpuPoint: 0
};
var _default = matrix;
exports.default = _default;