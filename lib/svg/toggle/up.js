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
const _svg = /*#__PURE__*/ _interop_require_default(require("../../svg"));
const _styles = require("../../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class UpToggleSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:1px",
            d: "m 264,50 -14,7 V 44 Z"
        }));
    }
    parentContext() {
        const showUpToggleSVG = this.show.bind(this), hideUpToggleSVG = this.hide.bind(this); ///
        return {
            showUpToggleSVG,
            hideUpToggleSVG
        };
    }
    static tagName = "svg";
    static defaultProperties = {
        width: "32",
        height: "32",
        viewBox: "240 30 32 32",
        className: "up-toggle"
    };
}
const _default = (0, _easywithstyle.default)(UpToggleSVG)`

  height: ${_styles.toggleSVGHeight};
  margin-right: ${_styles.toggleSVGPaddingRight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL3VwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi8uLi9zdmdcIjtcblxuaW1wb3J0IHsgdG9nZ2xlU1ZHSGVpZ2h0LCB0b2dnbGVTVkdQYWRkaW5nUmlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFVwVG9nZ2xlU1ZHIGV4dGVuZHMgU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6MXB4XCIgZD1cIm0gMjY0LDUwIC0xNCw3IFYgNDQgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93VXBUb2dnbGVTVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZVVwVG9nZ2xlU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VXBUb2dnbGVTVkcsXG4gICAgICBoaWRlVXBUb2dnbGVTVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjI0MCAzMCAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJ1cC10b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVXBUb2dnbGVTVkcpYFxuXG4gIGhlaWdodDogJHt0b2dnbGVTVkdIZWlnaHR9O1xuICBtYXJnaW4tcmlnaHQ6ICR7dG9nZ2xlU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlVwVG9nZ2xlU1ZHIiwiU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dVcFRvZ2dsZVNWRyIsInNob3ciLCJiaW5kIiwiaGlkZVVwVG9nZ2xlU1ZHIiwiaGlkZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInRvZ2dsZVNWR0hlaWdodCIsInRvZ2dsZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUNBOzs7ZUFBQTs7O3NFQXJDc0I7NERBRU47d0JBRXVDOzs7Ozs7QUFFdkQsTUFBTUEsb0JBQW9CQyxZQUFHO0lBQzNCQyxnQkFBZ0I7UUFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO1lBQUtDLE9BQU07WUFBbUJDLEdBQUU7O0lBSXZDO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGtCQUFrQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDckNDLGtCQUFrQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRWpELE9BQVE7WUFDTkY7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0UsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNuQixZQUFZLENBQUM7O1VBRTVCLEVBQUVvQix1QkFBZSxDQUFDO2dCQUNaLEVBQUVDLDZCQUFxQixDQUFDOztBQUV4QyxDQUFDIn0=