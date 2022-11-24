"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameEntryItemDiv;
    }
});
var _svg = /*#__PURE__*/ _interopRequireDefault(require("../../../../button/svg"));
var _background = /*#__PURE__*/ _interopRequireDefault(require("../../../../div/background"));
var _name = /*#__PURE__*/ _interopRequireDefault(require("../../../../div/item/entry/name"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var DirectoryNameEntryItemDiv = /*#__PURE__*/ function(NameEntryItemDiv) {
    _inherits(DirectoryNameEntryItemDiv, NameEntryItemDiv);
    var _super = _createSuper(DirectoryNameEntryItemDiv);
    function DirectoryNameEntryItemDiv() {
        _classCallCheck(this, DirectoryNameEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "toggleButtonMouseDownHandler", function(event, element) {
            var parentElement = _this.getParentElement(), directoryNameDragEntryItem = parentElement; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        _defineProperty(_assertThisInitialized(_this), "nameButtonDoubleClickHandler", function(event, element) {
            var parentElement = _this.getParentElement(), directoryNameDragEntryItem = parentElement; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        return _this;
    }
    _createClass(DirectoryNameEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameButton = _this_properties.NameButton, ToggleButton = _this_properties.ToggleButton, DirectoryNameSVG = _this_properties.DirectoryNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onMouseDown: this.toggleButtonMouseDownHandler
                    }),
                    /*#__PURE__*/ React.createElement(_svg.default, {
                        onClick: this.svgButtonClickHandler
                    }, /*#__PURE__*/ React.createElement(DirectoryNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(NameInput, {
                        onChange: this.nameInputChangeHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return DirectoryNameEntryItemDiv;
}(_name.default);
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9uYW1lL2RpcmVjdG9yeS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNWR0J1dHRvbiBmcm9tIFwiLi4vLi4vLi4vLi4vYnV0dG9uL3N2Z1wiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uLy4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGV4dGVuZHMgTmFtZUVudHJ5SXRlbURpdiB7XG4gIHRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBwYXJlbnRFbGVtZW50OyAvLy9cblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnRvZ2dsZSgpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBuYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVJbnB1dCwgTmFtZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uLCBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvZ2dsZUJ1dHRvbiBvbk1vdXNlRG93bj17dGhpcy50b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyfSAvPixcbiAgICAgIDxTVkdCdXR0b24gb25DbGljaz17dGhpcy5zdmdCdXR0b25DbGlja0hhbmRsZXJ9ID5cbiAgICAgICAgPERpcmVjdG9yeU5hbWVTVkcvPlxuICAgICAgPC9TVkdCdXR0b24+LFxuICAgICAgPE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17dGhpcy5uYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lQnV0dG9uPixcbiAgICAgIDxOYW1lSW5wdXQgb25DaGFuZ2U9e3RoaXMubmFtZUlucHV0Q2hhbmdlSGFuZGxlcn0gPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZUlucHV0PixcbiAgICAgIDxCYWNrZ3JvdW5kRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnlcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwidG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJnZXRQYXJlbnRFbGVtZW50IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJuYW1lIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJvbk1vdXNlRG93biIsIlNWR0J1dHRvbiIsIm9uQ2xpY2siLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJvbkRvdWJsZUNsaWNrIiwib25DaGFuZ2UiLCJuYW1lSW5wdXRDaGFuZ2VIYW5kbGVyIiwiQmFja2dyb3VuZERpdiIsIk5hbWVFbnRyeUl0ZW1EaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0RBSkM7K0RBQ0k7eURBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJDLCtDQUFBQSxnQ0FBK0IsU0FBQ0MsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxNQUFNO1lBRWpDTCxNQUFNTSxlQUFlO1FBQ3ZCO1FBRUFDLCtDQUFBQSxnQ0FBK0IsU0FBQ1AsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxNQUFNO1lBRWpDTCxNQUFNTSxlQUFlO1FBQ3ZCOzs7aUJBakJtQlI7O1lBbUJuQlUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUF3RSxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBL0VDLE9BQWdFLGlCQUFoRUEsTUFBTUMsWUFBMEQsaUJBQTFEQSxXQUFXQyxhQUErQyxpQkFBL0NBLFlBQVlDLGVBQW1DLGlCQUFuQ0EsY0FBY0MsbUJBQXFCLGlCQUFyQkE7Z0JBRW5ELE9BQVE7a0NBRU4sb0JBQUNEO3dCQUFhRSxhQUFhLElBQUksQ0FBQ2hCLDRCQUE0Qjs7a0NBQzVELG9CQUFDaUIsWUFBUzt3QkFBQ0MsU0FBUyxJQUFJLENBQUNDLHFCQUFxQjtxQ0FDNUMsb0JBQUNKO2tDQUVILG9CQUFDRjt3QkFBV08sZUFBZSxJQUFJLENBQUNaLDRCQUE0Qjt1QkFDekRHO2tDQUVILG9CQUFDQzt3QkFBVVMsVUFBVSxJQUFJLENBQUNDLHNCQUFzQjt1QkFDN0NYO2tDQUVILG9CQUFDWSxtQkFBYTtpQkFFZjtZQUNIOzs7V0FyQ21CeEI7RUFBa0N5QixhQUFnQjtBQXVDckUsZ0JBdkNtQnpCLDJCQXVDWjBCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=