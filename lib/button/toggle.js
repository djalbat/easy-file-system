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
const _easy = require("easy");
const _up = /*#__PURE__*/ _interop_require_default(require("../svg/toggle/up"));
const _down = /*#__PURE__*/ _interop_require_default(require("../svg/toggle/down"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ToggleButton extends _easy.Button {
    expand() {
        this.hideUpToggleSVG();
        this.showDownToggleSVG();
    }
    collapse() {
        this.showUpToggleSVG();
        this.hideDownToggleSVG();
    }
    childElements() {
        const { UpToggleSVG, DownToggleSVG } = this.constructor;
        return [
            /*#__PURE__*/ React.createElement(UpToggleSVG, null),
            /*#__PURE__*/ React.createElement(DownToggleSVG, null)
        ];
    }
    parentContext() {
        const expandToggleButton = this.expand.bind(this), collapseToggleButton = this.collapse.bind(this); ///
        return {
            expandToggleButton,
            collapseToggleButton
        };
    }
    initialise() {
        this.assignContext();
    }
    static UpToggleSVG = _up.default;
    static DownToggleSVG = _down.default;
    static defaultProperties = {
        className: "toggle"
    };
}
const _default = (0, _easywithstyle.default)(ToggleButton)`

  cursor: pointer;
  outline: none;
  background: transparent;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVXBUb2dnbGVTVkcgZnJvbSBcIi4uL3N2Zy90b2dnbGUvdXBcIjtcbmltcG9ydCBEb3duVG9nZ2xlU1ZHIGZyb20gXCIuLi9zdmcvdG9nZ2xlL2Rvd25cIjtcblxuY2xhc3MgVG9nZ2xlQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuaGlkZVVwVG9nZ2xlU1ZHKCk7XG4gICAgdGhpcy5zaG93RG93blRvZ2dsZVNWRygpO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5zaG93VXBUb2dnbGVTVkcoKTtcbiAgICB0aGlzLmhpZGVEb3duVG9nZ2xlU1ZHKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgVXBUb2dnbGVTVkcsIERvd25Ub2dnbGVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFVwVG9nZ2xlU1ZHLz4sXG4gICAgICA8RG93blRvZ2dsZVNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlQnV0dG9uID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY29sbGFwc2VUb2dnbGVCdXR0b24gPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZXhwYW5kVG9nZ2xlQnV0dG9uLFxuICAgICAgY29sbGFwc2VUb2dnbGVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgVXBUb2dnbGVTVkcgPSBVcFRvZ2dsZVNWRztcblxuICBzdGF0aWMgRG93blRvZ2dsZVNWRyA9IERvd25Ub2dnbGVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2dnbGVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVG9nZ2xlQnV0dG9uKWBcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiVG9nZ2xlQnV0dG9uIiwiQnV0dG9uIiwiZXhwYW5kIiwiaGlkZVVwVG9nZ2xlU1ZHIiwic2hvd0Rvd25Ub2dnbGVTVkciLCJjb2xsYXBzZSIsInNob3dVcFRvZ2dsZVNWRyIsImhpZGVEb3duVG9nZ2xlU1ZHIiwiY2hpbGRFbGVtZW50cyIsIlVwVG9nZ2xlU1ZHIiwiRG93blRvZ2dsZVNWRyIsInBhcmVudENvbnRleHQiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJiaW5kIiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzREE7OztlQUFBOzs7c0VBcERzQjtzQkFFQzsyREFFQzs2REFDRTs7Ozs7O0FBRTFCLE1BQU1BLHFCQUFxQkMsWUFBTTtJQUMvQkMsU0FBUztRQUNQLElBQUksQ0FBQ0MsZUFBZTtRQUNwQixJQUFJLENBQUNDLGlCQUFpQjtJQUN4QjtJQUVBQyxXQUFXO1FBQ1QsSUFBSSxDQUFDQyxlQUFlO1FBQ3BCLElBQUksQ0FBQ0MsaUJBQWlCO0lBQ3hCO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztRQUV2RCxPQUFROzBCQUVOLG9CQUFDRDswQkFDRCxvQkFBQ0M7U0FFRjtJQUNIO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLHFCQUFxQixJQUFJLENBQUNWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksR0FDMUNDLHVCQUF1QixJQUFJLENBQUNULFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRTNELE9BQVE7WUFDTkQ7WUFDQUU7UUFDRjtJQUNGO0lBRUFDLGFBQWE7UUFDWCxJQUFJLENBQUNDLGFBQWE7SUFDcEI7SUFFQSxPQUFPUCxjQUFjQSxXQUFXLENBQUM7SUFFakMsT0FBT0MsZ0JBQWdCQSxhQUFhLENBQUM7SUFFckMsT0FBT08sb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CLGFBQWEsQ0FBQzs7Ozs7O0FBTXZDLENBQUMifQ==