"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entryItem = _interopRequireDefault(require("../../div/entryItem"));
var _background = _interopRequireDefault(require("../../div/background"));
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
}(_entryItem.default);
exports.default = DirectoryNameEntryItemDiv;
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uL2Rpdi9lbnRyeUl0ZW1cIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZG91YmxlQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHBhcmVudEVsZW1lbnQ7IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0udG9nZ2xlKCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lQnV0dG9uLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyID0gdGhpcy50b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uTW91c2VEb3duPXt0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyfSAvPixcbiAgICAgIDxEaXJlY3RvcnlOYW1lU1ZHLz4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXtkb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJwcm9wZXJ0aWVzIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImdldFBhcmVudEVsZW1lbnQiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInRvZ2dsZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIiLCJjaGlsZEVsZW1lbnRzIiwibmFtZSIsIk5hbWVCdXR0b24iLCJUb2dnbGVCdXR0b24iLCJEaXJlY3RvcnlOYW1lU1ZHIiwiYmluZCIsIm9uTW91c2VEb3duIiwib25Eb3VibGVDbGljayIsIkJhY2tncm91bmREaXYiLCJFbnRyeUl0ZW1EaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVZLElBQUEsVUFBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ3BCLElBQUEsV0FBc0Isa0NBQXRCLHNCQUFzQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLHlCQUF5QixpQkNMM0MsQURLWTs7O2FBQU1BLHlCQUF5Qjs7Ozs7O1lBQzVDQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixJQUFNLEFBQUVDLFFBQVEsR0FBSyxJQUFJLENBQUNDLFVBQVUsQ0FBNUJELFFBQVEsQUFBb0IsQUFBQztnQkFFckMsT0FBT0EsUUFBUSxDQUFDO2FBQ2pCOzs7WUFFREUsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJBLFNBQUFBLGtCQUFrQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDakMsSUFBTUMsYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLDBCQUEwQixHQUFHRixhQUFhLEFBQUMsRUFBQyxHQUFHO2dCQUVyREUsMEJBQTBCLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUVwQ0wsS0FBSyxDQUFDTSxlQUFlLEVBQUUsQ0FBQzthQUN6Qjs7O1lBRURDLEdBQTRCLEVBQTVCQSw4QkFBNEI7bUJBQTVCQSxTQUFBQSw0QkFBNEIsQ0FBQ1AsS0FBSyxFQUFFQyxPQUFPLEVBQUU7Z0JBQzNDLElBQU1DLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEVBQ3ZDQywwQkFBMEIsR0FBR0YsYUFBYSxBQUFDLEVBQUMsR0FBRztnQkFFckRFLDBCQUEwQixDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFFcENMLEtBQUssQ0FBQ00sZUFBZSxFQUFFLENBQUM7YUFDekI7OztZQUVERSxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUE2RCxXQUFlLEdBQWYsSUFBSSxDQUFDVixVQUFVLEVBQXBFVyxJQUFJLEdBQWlELFdBQWUsQ0FBcEVBLElBQUksRUFBRUMsVUFBVSxHQUFxQyxXQUFlLENBQTlEQSxVQUFVLEVBQUVDLFlBQVksR0FBdUIsV0FBZSxDQUFsREEsWUFBWSxFQUFFQyxnQkFBZ0IsR0FBSyxXQUFlLENBQXBDQSxnQkFBZ0IsRUFDbERMLDRCQUE0QixHQUFHLElBQUksQ0FBQ0EsNEJBQTRCLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDM0VkLGtCQUFrQixHQUFHLElBQUksQ0FBQ0Esa0JBQWtCLENBQUNjLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztnQkFFOUQsT0FBUTtrQ0FFTixvQkFBQ0YsWUFBWTt3QkFBQ0csV0FBVyxFQUFFUCw0QkFBNEI7c0JBQUk7a0NBQzNELG9CQUFDSyxnQkFBZ0IsT0FBRTtrQ0FDbkIsb0JBQUNGLFVBQVU7d0JBQUNLLGFBQWEsRUFBRWhCLGtCQUFrQjt1QkFDMUNVLElBQUksQ0FDTTtrQ0FDYixvQkFBQ08sV0FBYSxRQUFBLE9BQUU7aUJBRWpCLENBQUU7YUFDSjs7OztDQUtGLENBN0NzREMsVUFBWSxRQUFBLENBNkNsRTtrQkE3Q29CdEIseUJBQXlCO0FBMEM1QyxnQkExQ21CQSx5QkFBeUIsRUEwQ3JDdUIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxnQkFBZ0I7Q0FDNUIsQ0FBQyJ9