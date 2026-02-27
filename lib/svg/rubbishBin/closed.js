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
class ClosedRubbishBinSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 40,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 46,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "m 16,30 v 32 l 2,2 h 32 l 2,-2 V 30"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "M 12,30 H 56"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "m 24,30 -2,-8 h 24 l -2,8"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 22,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 28,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 34,34 V 60"
        }));
    }
    parentContext() {
        const showClosedRubbishBinSVG = this.show.bind(this), hideClosedRubbishBinSVG = this.hide.bind(this); ///
        return {
            showClosedRubbishBinSVG,
            hideClosedRubbishBinSVG
        };
    }
    static defaultProperties = {
        width: "60",
        height: "60",
        viewBox: "4 10 60 60",
        className: "closed-rubbish-bin"
    };
}
const _default = (0, _easywithstyle.default)(ClosedRubbishBinSVG)`

  fill: none;
  height: ${_styles.rubbishBinSVGHeight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTVkcgZnJvbSBcIi4uLy4uL3N2Z1wiO1xuXG5pbXBvcnQgeyBydWJiaXNoQmluU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBDbG9zZWRSdWJiaXNoQmluU1ZHIGV4dGVuZHMgU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDQwLDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gNDYsMzQgViA2MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwibSAxNiwzMCB2IDMyIGwgMiwyIGggMzIgbCAyLC0yIFYgMzBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIk0gMTIsMzAgSCA1NlwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjMuNzc5NTNcIiBkPVwibSAyNCwzMCAtMiwtOCBoIDI0IGwgLTIsOFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSAyMiwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDI4LDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMzQsMzQgViA2MFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93Q2xvc2VkUnViYmlzaEJpblNWRyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkcsXG4gICAgICBoaWRlQ2xvc2VkUnViYmlzaEJpblNWR1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjYwXCIsXG4gICAgaGVpZ2h0OiBcIjYwXCIsXG4gICAgdmlld0JveDogXCI0IDEwIDYwIDYwXCIsXG4gICAgY2xhc3NOYW1lOiBcImNsb3NlZC1ydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDbG9zZWRSdWJiaXNoQmluU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICBoZWlnaHQ6ICR7cnViYmlzaEJpblNWR0hlaWdodH07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJDbG9zZWRSdWJiaXNoQmluU1ZHIiwiU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwic2hvdyIsImJpbmQiLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInJ1YmJpc2hCaW5TVkdIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRDQTs7O2VBQUE7OztzRUExQ3NCOzREQUVOO3dCQUVvQjs7Ozs7O0FBRXBDLE1BQU1BLDRCQUE0QkMsWUFBRztJQUNuQ0MsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztZQUFLQyxPQUFNO1lBQXVCQyxHQUFFOzBCQUNyQyxvQkFBQ0Y7WUFBS0MsT0FBTTtZQUF1QkMsR0FBRTswQkFDckMsb0JBQUNGO1lBQUtDLE9BQU07WUFBdUJDLEdBQUU7MEJBQ3JDLG9CQUFDRjtZQUFLQyxPQUFNO1lBQXVCQyxHQUFFOzBCQUNyQyxvQkFBQ0Y7WUFBS0MsT0FBTTtZQUF1QkMsR0FBRTswQkFDckMsb0JBQUNGO1lBQUtDLE9BQU07WUFBdUJDLEdBQUU7MEJBQ3JDLG9CQUFDRjtZQUFLQyxPQUFNO1lBQXVCQyxHQUFFOzBCQUNyQyxvQkFBQ0Y7WUFBS0MsT0FBTTtZQUF1QkMsR0FBRTs7SUFJM0M7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM3Q0MsMEJBQTBCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFFekQsT0FBUTtZQUNORjtZQUNBRztRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxvQkFBb0I7UUFDekJDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbEIsb0JBQW9CLENBQUM7OztVQUdwQyxFQUFFbUIsMkJBQW1CLENBQUM7O0FBRWhDLENBQUMifQ==