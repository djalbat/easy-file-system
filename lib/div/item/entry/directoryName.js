"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entry = _interopRequireDefault(require("../../../div/item/entry"));
var _background = _interopRequireDefault(require("../../../div/background"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var DirectoryNameEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(DirectoryNameEntryItemDiv, EntryItemDiv);
    var _super = _createSuper(DirectoryNameEntryItemDiv);
    function DirectoryNameEntryItemDiv() {
        _classCallCheck(this, DirectoryNameEntryItemDiv);
        return _super.apply(this, arguments);
    }
    _createClass(DirectoryNameEntryItemDiv, [
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this.properties.explorer;
                return explorer;
            }
        },
        {
            key: "doubleClickHandler",
            value: function doubleClickHandler(event, element) {
                var parentElement = this.getParentElement(), directoryNameDragEntryItem = parentElement; ///
                directoryNameDragEntryItem.toggle();
                event.stopPropagation();
            }
        },
        {
            key: "toggleButtonMouseDownHandler",
            value: function toggleButtonMouseDownHandler(event, element) {
                var parentElement = this.getParentElement(), directoryNameDragEntryItem = parentElement; ///
                directoryNameDragEntryItem.toggle();
                event.stopPropagation();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, NameButton = _properties.NameButton, ToggleButton = _properties.ToggleButton, DirectoryNameSVG = _properties.DirectoryNameSVG, toggleButtonMouseDownHandler = this.toggleButtonMouseDownHandler.bind(this), doubleClickHandler = this.doubleClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onMouseDown: toggleButtonMouseDownHandler
                    }),
                    /*#__PURE__*/ React.createElement(DirectoryNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: doubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return DirectoryNameEntryItemDiv;
}(_entry.default);
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameEntryItemDiv;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBFbnRyeUl0ZW1EaXYge1xuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBkb3VibGVDbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBwYXJlbnRFbGVtZW50OyAvLy9cblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnRvZ2dsZSgpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLnRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxUb2dnbGVCdXR0b24gb25Nb3VzZURvd249e3RvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXJ9IC8+LFxuICAgICAgPERpcmVjdG9yeU5hbWVTVkcvPixcbiAgICAgIDxOYW1lQnV0dG9uIG9uRG91YmxlQ2xpY2s9e2RvdWJsZUNsaWNrSGFuZGxlcn0gPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZUJ1dHRvbj4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlciIsImNoaWxkRWxlbWVudHMiLCJuYW1lIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbkRvdWJsZUNsaWNrIiwiQmFja2dyb3VuZERpdiIsIkVudHJ5SXRlbURpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVksSUFBQSxNQUF5QixrQ0FBekIseUJBQXlCLEVBQUE7QUFDeEIsSUFBQSxXQUF5QixrQ0FBekIseUJBQXlCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEseUJBQXlCLGlCQ0wzQyxBREtZOzs7YUFBTUEseUJBQXlCOzs7Ozs7WUFDNUNDLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU0sQUFBRUMsUUFBUSxHQUFLLElBQUksQ0FBQ0MsVUFBVSxDQUE1QkQsUUFBUSxBQUFvQixBQUFDO2dCQUVyQyxPQUFPQSxRQUFRLENBQUM7YUFDakI7OztZQUVERSxHQUFrQixFQUFsQkEsb0JBQWtCO21CQUFsQkEsU0FBQUEsa0JBQWtCLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFO2dCQUNqQyxJQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRSxFQUN2Q0MsMEJBQTBCLEdBQUdGLGFBQWEsQUFBQyxFQUFDLEdBQUc7Z0JBRXJERSwwQkFBMEIsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBRXBDTCxLQUFLLENBQUNNLGVBQWUsRUFBRSxDQUFDO2FBQ3pCOzs7WUFFREMsR0FBNEIsRUFBNUJBLDhCQUE0QjttQkFBNUJBLFNBQUFBLDRCQUE0QixDQUFDUCxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDM0MsSUFBTUMsYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLDBCQUEwQixHQUFHRixhQUFhLEFBQUMsRUFBQyxHQUFHO2dCQUVyREUsMEJBQTBCLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUVwQ0wsS0FBSyxDQUFDTSxlQUFlLEVBQUUsQ0FBQzthQUN6Qjs7O1lBRURFLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQTZELFdBQWUsR0FBZixJQUFJLENBQUNWLFVBQVUsRUFBcEVXLElBQUksR0FBaUQsV0FBZSxDQUFwRUEsSUFBSSxFQUFFQyxVQUFVLEdBQXFDLFdBQWUsQ0FBOURBLFVBQVUsRUFBRUMsWUFBWSxHQUF1QixXQUFlLENBQWxEQSxZQUFZLEVBQUVDLGdCQUFnQixHQUFLLFdBQWUsQ0FBcENBLGdCQUFnQixFQUNsREwsNEJBQTRCLEdBQUcsSUFBSSxDQUFDQSw0QkFBNEIsQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUMzRWQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ2MsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO2dCQUU5RCxPQUFRO2tDQUVOLG9CQUFDRixZQUFZO3dCQUFDRyxXQUFXLEVBQUVQLDRCQUE0QjtzQkFBSTtrQ0FDM0Qsb0JBQUNLLGdCQUFnQixPQUFFO2tDQUNuQixvQkFBQ0YsVUFBVTt3QkFBQ0ssYUFBYSxFQUFFaEIsa0JBQWtCO3VCQUMxQ1UsSUFBSSxDQUNNO2tDQUNiLG9CQUFDTyxXQUFhLFFBQUEsT0FBRTtpQkFFakIsQ0FBRTthQUNKOzs7O0NBS0YsQ0E3Q3NEQyxNQUFZLFFBQUEsQ0E2Q2xFO0FBSEMsZ0JBMUNtQnRCLHlCQUF5QixFQTBDckN1QixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLGdCQUFnQjtDQUM1QixDQUFDO2tCQTVDaUJ4Qix5QkFBeUIifQ==