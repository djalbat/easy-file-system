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
class DownToggleSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:1px",
            d: "m 222,54 -7,-14 h 14 z"
        }));
    }
    parentContext() {
        const showDownToggleSVG = this.show.bind(this), hideDownToggleSVG = this.hide.bind(this); ///
        return {
            showDownToggleSVG,
            hideDownToggleSVG
        };
    }
    static defaultProperties = {
        width: "32",
        height: "32",
        viewBox: "206 26 32 32",
        className: "down-toggle"
    };
}
const _default = (0, _easywithstyle.default)(DownToggleSVG)`

  height: ${_styles.toggleSVGHeight};
  padding-right: ${_styles.toggleSVGPaddingRight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9nZ2xlL2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTVkcgZnJvbSBcIi4uLy4uL3N2Z1wiO1xuXG5pbXBvcnQgeyB0b2dnbGVTVkdIZWlnaHQsIHRvZ2dsZVNWR1BhZGRpbmdSaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgRG93blRvZ2dsZVNWRyBleHRlbmRzIFNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjFweFwiIGQ9XCJtIDIyMiw1NCAtNywtMTQgaCAxNCB6XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dEb3duVG9nZ2xlU1ZHID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVEb3duVG9nZ2xlU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RG93blRvZ2dsZVNWRyxcbiAgICAgIGhpZGVEb3duVG9nZ2xlU1ZHXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjIwNiAyNiAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJkb3duLXRvZ2dsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEb3duVG9nZ2xlU1ZHKWBcblxuICBoZWlnaHQ6ICR7dG9nZ2xlU1ZHSGVpZ2h0fTtcbiAgcGFkZGluZy1yaWdodDogJHt0b2dnbGVTVkdQYWRkaW5nUmlnaHR9O1xuICBcbmA7XG5cbiJdLCJuYW1lcyI6WyJEb3duVG9nZ2xlU1ZHIiwiU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dEb3duVG9nZ2xlU1ZHIiwic2hvdyIsImJpbmQiLCJoaWRlRG93blRvZ2dsZVNWRyIsImhpZGUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInRvZ2dsZVNWR0hlaWdodCIsInRvZ2dsZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUNBOzs7ZUFBQTs7O3NFQW5Dc0I7NERBRU47d0JBRXVDOzs7Ozs7QUFFdkQsTUFBTUEsc0JBQXNCQyxZQUFHO0lBQzdCQyxnQkFBZ0I7UUFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO1lBQUtDLE9BQU07WUFBbUJDLEdBQUU7O0lBSXZDO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLG9CQUFvQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdkNDLG9CQUFvQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRW5ELE9BQVE7WUFDTkY7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0Usb0JBQW9CO1FBQ3pCQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2xCLGNBQWMsQ0FBQzs7VUFFOUIsRUFBRW1CLHVCQUFlLENBQUM7aUJBQ1gsRUFBRUMsNkJBQXFCLENBQUM7O0FBRXpDLENBQUMifQ==