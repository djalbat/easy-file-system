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
var _entry = /*#__PURE__*/ _interopRequireDefault(require("../../../div/item/entry"));
var _background = /*#__PURE__*/ _interopRequireDefault(require("../../../div/background"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBFbnRyeUl0ZW1EaXYge1xuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBkb3VibGVDbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBwYXJlbnRFbGVtZW50OyAvLy9cblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnRvZ2dsZSgpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLnRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxUb2dnbGVCdXR0b24gb25Nb3VzZURvd249e3RvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXJ9IC8+LFxuICAgICAgPERpcmVjdG9yeU5hbWVTVkcvPixcbiAgICAgIDxOYW1lQnV0dG9uIG9uRG91YmxlQ2xpY2s9e2RvdWJsZUNsaWNrSGFuZGxlcn0gPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZUJ1dHRvbj4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlciIsImNoaWxkRWxlbWVudHMiLCJuYW1lIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbkRvdWJsZUNsaWNrIiwiQmFja2dyb3VuZERpdiIsIkVudHJ5SXRlbURpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFLUUEseUJBQXlCOzs7MERBSHJCLHlCQUF5QjsrREFDeEIseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLHlCQUF5QixpQkFBL0I7OzthQUFNQSx5QkFBeUI7Ozs7OztZQUM1Q0MsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBTSxBQUFFQyxRQUFRLEdBQUssSUFBSSxDQUFDQyxVQUFVLENBQTVCRCxRQUFRLEFBQW9CLEFBQUM7Z0JBRXJDLE9BQU9BLFFBQVEsQ0FBQzthQUNqQjs7O1lBRURFLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQWxCQSxTQUFBQSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUU7Z0JBQ2pDLElBQU1DLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEVBQ3ZDQywwQkFBMEIsR0FBR0YsYUFBYSxBQUFDLEVBQUMsR0FBRztnQkFFckRFLDBCQUEwQixDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFFcENMLEtBQUssQ0FBQ00sZUFBZSxFQUFFLENBQUM7YUFDekI7OztZQUVEQyxHQUE0QixFQUE1QkEsOEJBQTRCO21CQUE1QkEsU0FBQUEsNEJBQTRCLENBQUNQLEtBQUssRUFBRUMsT0FBTyxFQUFFO2dCQUMzQyxJQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRSxFQUN2Q0MsMEJBQTBCLEdBQUdGLGFBQWEsQUFBQyxFQUFDLEdBQUc7Z0JBRXJERSwwQkFBMEIsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBRXBDTCxLQUFLLENBQUNNLGVBQWUsRUFBRSxDQUFDO2FBQ3pCOzs7WUFFREUsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBNkQsV0FBZSxHQUFmLElBQUksQ0FBQ1YsVUFBVSxFQUFwRVcsSUFBSSxHQUFpRCxXQUFlLENBQXBFQSxJQUFJLEVBQUVDLFVBQVUsR0FBcUMsV0FBZSxDQUE5REEsVUFBVSxFQUFFQyxZQUFZLEdBQXVCLFdBQWUsQ0FBbERBLFlBQVksRUFBRUMsZ0JBQWdCLEdBQUssV0FBZSxDQUFwQ0EsZ0JBQWdCLEVBQ2xETCw0QkFBNEIsR0FBRyxJQUFJLENBQUNBLDRCQUE0QixDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzNFZCxrQkFBa0IsR0FBRyxJQUFJLENBQUNBLGtCQUFrQixDQUFDYyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7Z0JBRTlELE9BQVE7a0NBRU4sb0JBQUNGLFlBQVk7d0JBQUNHLFdBQVcsRUFBRVAsNEJBQTRCO3NCQUFJO2tDQUMzRCxvQkFBQ0ssZ0JBQWdCLE9BQUU7a0NBQ25CLG9CQUFDRixVQUFVO3dCQUFDSyxhQUFhLEVBQUVoQixrQkFBa0I7dUJBQzFDVSxJQUFJLENBQ007a0NBQ2Isb0JBQUNPLFdBQWEsUUFBQSxPQUFFO2lCQUVqQixDQUFFO2FBQ0o7Ozs7Q0FLRixDQTdDc0RDLE1BQVksUUFBQSxDQTZDbEU7QUFIQyxnQkExQ21CdEIseUJBQXlCLEVBMENyQ3VCLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsZ0JBQWdCO0NBQzVCLENBQUMifQ==