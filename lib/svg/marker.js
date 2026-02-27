"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
const _styles = require("../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkerSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:6",
            d: "m 93,60 h 30"
        }));
    }
    static tagName = "svg";
    static defaultProperties = {
        width: "32",
        height: "32",
        viewBox: "92 43 32 32",
        className: "marker"
    };
}
const _default = (0, _easywithstyle.default)(MarkerSVG)`

  fill: none;
  height: ${_styles.markerSVGHeight};
  display: inline;
  margin-left: ${_styles.markerSVGMarginLeft};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi9zdmdcIjtcblxuaW1wb3J0IHsgbWFya2VyU1ZHSGVpZ2h0LCBtYXJrZXJTVkdNYXJnaW5MZWZ0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNYXJrZXJTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo2XCIgZD1cIm0gOTMsNjAgaCAzMFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInN2Z1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogXCIzMlwiLFxuICAgIGhlaWdodDogXCIzMlwiLFxuICAgIHZpZXdCb3g6IFwiOTIgNDMgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwibWFya2VyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtlclNWRylgXG5cbiAgZmlsbDogbm9uZTtcbiAgaGVpZ2h0OiAke21hcmtlclNWR0hlaWdodH07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6ICR7bWFya2VyU1ZHTWFyZ2luTGVmdH07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJNYXJrZXJTVkciLCJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtYXJrZXJTVkdIZWlnaHQiLCJtYXJrZXJTVkdNYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2QkE7OztlQUFBOzs7c0VBM0JzQjs0REFFTjt3QkFFcUM7Ozs7OztBQUVyRCxNQUFNQSxrQkFBa0JDLFlBQUc7SUFDekJDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7WUFBS0MsT0FBTTtZQUFpQkMsR0FBRTs7SUFJckM7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsVUFBVSxDQUFDOzs7VUFHMUIsRUFBRWMsdUJBQWUsQ0FBQzs7ZUFFYixFQUFFQywyQkFBbUIsQ0FBQzs7QUFFckMsQ0FBQyJ9