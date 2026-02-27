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
class OpenRubbishBinSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 100,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 106,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "m 76,30 v 32 l 2,2 h 32 l 2,-2 V 30"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "m 72,24 h 44"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "m 84,24 -2,-8 h 24 l -2,8"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:3.77953",
            d: "m 74,30 h 40"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 82,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 88,34 V 60"
        }), /*#__PURE__*/ React.createElement("path", {
            style: "stroke-width:2.83465",
            d: "M 94,34 V 60"
        }));
    }
    parentContext() {
        const showOpenRubbishBinSVG = this.show.bind(this), hideOpenRubbishBinSVG = this.hide.bind(this); ///
        return {
            showOpenRubbishBinSVG,
            hideOpenRubbishBinSVG
        };
    }
    static tagName = "svg";
    static defaultProperties = {
        width: "60",
        height: "60",
        viewBox: "64 10 60 60",
        className: "open-rubbish-bin"
    };
}
const _default = (0, _easywithstyle.default)(OpenRubbishBinSVG)`

  fill: none;
  height: ${_styles.rubbishBinSVGHeight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi8uLi9zdmdcIjtcblxuaW1wb3J0IHsgcnViYmlzaEJpblNWR0hlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgT3BlblJ1YmJpc2hCaW5TVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMTAwLDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gMTA2LDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gNzYsMzAgdiAzMiBsIDIsMiBoIDMyIGwgMiwtMiBWIDMwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6My43Nzk1M1wiIGQ9XCJtIDcyLDI0IGggNDRcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gODQsMjQgLTIsLTggaCAyNCBsIC0yLDhcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDozLjc3OTUzXCIgZD1cIm0gNzQsMzAgaCA0MFwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjIuODM0NjVcIiBkPVwiTSA4MiwzNCBWIDYwXCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6Mi44MzQ2NVwiIGQ9XCJNIDg4LDM0IFYgNjBcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDoyLjgzNDY1XCIgZD1cIk0gOTQsMzQgViA2MFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93T3BlblJ1YmJpc2hCaW5TVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZU9wZW5SdWJiaXNoQmluU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93T3BlblJ1YmJpc2hCaW5TVkcsXG4gICAgICBoaWRlT3BlblJ1YmJpc2hCaW5TVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiNjBcIixcbiAgICBoZWlnaHQ6IFwiNjBcIixcbiAgICB2aWV3Qm94OiBcIjY0IDEwIDYwIDYwXCIsXG4gICAgY2xhc3NOYW1lOiBcIm9wZW4tcnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoT3BlblJ1YmJpc2hCaW5TVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIGhlaWdodDogJHtydWJiaXNoQmluU1ZHSGVpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk9wZW5SdWJiaXNoQmluU1ZHIiwiU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dPcGVuUnViYmlzaEJpblNWRyIsInNob3ciLCJiaW5kIiwiaGlkZU9wZW5SdWJiaXNoQmluU1ZHIiwiaGlkZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInJ1YmJpc2hCaW5TVkdIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStDQTs7O2VBQUE7OztzRUE3Q3NCOzREQUVOO3dCQUVvQjs7Ozs7O0FBRXBDLE1BQU1BLDBCQUEwQkMsWUFBRztJQUNqQ0MsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztZQUFLQyxPQUFNO1lBQXVCQyxHQUFFOzBCQUNyQyxvQkFBQ0Y7WUFBS0MsT0FBTTtZQUF1QkMsR0FBRTswQkFDckMsb0JBQUNGO1lBQUtDLE9BQU07WUFBdUJDLEdBQUU7MEJBQ3JDLG9CQUFDRjtZQUFLQyxPQUFNO1lBQXVCQyxHQUFFOzBCQUNyQyxvQkFBQ0Y7WUFBS0MsT0FBTTtZQUF1QkMsR0FBRTswQkFDckMsb0JBQUNGO1lBQUtDLE9BQU07WUFBdUJDLEdBQUU7MEJBQ3JDLG9CQUFDRjtZQUFLQyxPQUFNO1lBQXVCQyxHQUFFOzBCQUNyQyxvQkFBQ0Y7WUFBS0MsT0FBTTtZQUF1QkMsR0FBRTswQkFDckMsb0JBQUNGO1lBQUtDLE9BQU07WUFBdUJDLEdBQUU7O0lBSTNDO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLHdCQUF3QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDM0NDLHdCQUF3QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO1FBRXZELE9BQVE7WUFDTkY7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0UsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNuQixrQkFBa0IsQ0FBQzs7O1VBR2xDLEVBQUVvQiwyQkFBbUIsQ0FBQzs7QUFFaEMsQ0FBQyJ9