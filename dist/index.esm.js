import { jsx } from 'react/jsx-runtime';
import * as React from 'react';

var _path$2;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgPerson1 = function SvgPerson1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "Person1_svg__size-6",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"
  })));
};

const Person1 = ({
  size = 24,
  ...props
}) => {
  return jsx(SvgPerson1, {
    width: size,
    height: size,
    ...props
  });
};

var _path$1;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgHouse1 = function SvgHouse1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "House1_svg__size-6",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
  })));
};

const House1 = ({
  size = 24,
  ...props
}) => {
  return jsx(SvgHouse1, {
    width: size,
    height: size,
    ...props
  });
};

var _circle;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgCircle1 = function SvgCircle1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10
  })));
};

const Circle1 = ({
  size = 24,
  ...props
}) => {
  return jsx(SvgCircle1, {
    width: size,
    height: size,
    ...props
  });
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgBell1 = function SvgBell1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "Bell1_svg__size-6",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.857 17.082a23.9 23.9 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
  })));
};

const Bell1 = ({
  size = 24,
  ...props
}) => {
  return jsx(SvgBell1, {
    width: size,
    height: size,
    ...props
  });
};

export { Bell1, Circle1, House1, Person1 };
//# sourceMappingURL=index.esm.js.map
