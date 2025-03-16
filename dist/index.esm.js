import * as React from 'react';

var _circle;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgCircle1 = function SvgCircle1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10
  })));
};

export { SvgCircle1 as Circle1 };
//# sourceMappingURL=index.esm.js.map
