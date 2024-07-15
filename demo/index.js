"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _default(props) {
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    "inherit-class": "feedback"
  }, props, {
    className: "feedback"
  }), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "head",
    className: "feedback-head"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "title red",
    className: "feedback-head-title feedback-head-red"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "child",
    className: "feedback-head-title-child"
  })), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "avatar",
    className: "feedback-head-avatar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "body",
    className: "feedback-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "charts",
    className: "feedback-body-charts"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "line",
    className: 'line1'
  }), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "pie",
    className: "feedback-body-charts-pie"
  })), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "table",
    className: "feedback-body-table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "thead",
    className: "feedback-body-table-thead"
  }), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "tbody",
    className: "feedback-body-table-tbody"
  })), /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": ""
  })), [1, 2, 3].map(i => /*#__PURE__*/_react.default.createElement("div", {
    "inherit-class": "map",
    className: "feedback-map"
  })));
}