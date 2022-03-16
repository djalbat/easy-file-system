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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uL2Rpdi9lbnRyeUl0ZW1cIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZG91YmxlQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHBhcmVudEVsZW1lbnQ7IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0udG9nZ2xlKCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lQnV0dG9uLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyID0gdGhpcy50b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uTW91c2VEb3duPXt0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyfSAvPixcbiAgICAgIDxEaXJlY3RvcnlOYW1lU1ZHLz4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXtkb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlciIsImNoaWxkRWxlbWVudHMiLCJuYW1lIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbkRvdWJsZUNsaWNrIiwiQmFja2dyb3VuZERpdiIsIkVudHJ5SXRlbURpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFeUIsR0FBcUIsQ0FBckIsVUFBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsV0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs4REFIaEQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQUtlLEdBQUssQ0FBQ0EseUJBQXlCLGlCQUEvQixRQUFRO3NEQUx2Qjs7YUFLcUJBLHlCQUF5Qjt3REFMOUM7Ozs7O1lBTUVDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUdDLFFBQVEsR0FBSyxJQUFJLENBQUNDLFVBQVUsQ0FBNUJELFFBQVE7Z0JBRWhCLE1BQU0sQ0FBQ0EsUUFBUTtZQUNqQixDQUFDOzs7WUFFREUsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEMsR0FBSyxDQUFDQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLDBCQUEwQixHQUFHRixhQUFhLEVBQUUsRUFBRyxBQUFILENBQUc7Z0JBRXJERSwwQkFBMEIsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBRXBDTCxLQUFLLENBQUNNLGVBQWUsRUFBRSxDQUFDO1lBQzFCLENBQUM7OztZQUVEQyxHQUE0QixFQUE1QkEsQ0FBNEI7bUJBQTVCQSxRQUFRLENBQVJBLDRCQUE0QixDQUFDUCxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxHQUFLLENBQUNDLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsMEJBQTBCLEdBQUdGLGFBQWEsRUFBRSxFQUFHLEFBQUgsQ0FBRztnQkFFckRFLDBCQUEwQixDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFFcENMLEtBQUssQ0FBQ00sZUFBZSxFQUFFLENBQUM7WUFDMUIsQ0FBQzs7O1lBRURFLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQXdELFdBQWUsR0FBZixJQUFJLENBQUNWLFVBQVUsRUFBcEVXLElBQUksR0FBaUQsV0FBZSxDQUFwRUEsSUFBSSxFQUFFQyxVQUFVLEdBQXFDLFdBQWUsQ0FBOURBLFVBQVUsRUFBRUMsWUFBWSxHQUF1QixXQUFlLENBQWxEQSxZQUFZLEVBQUVDLGdCQUFnQixHQUFLLFdBQWUsQ0FBcENBLGdCQUFnQixFQUNsREwsNEJBQTRCLEdBQUcsSUFBSSxDQUFDQSw0QkFBNEIsQ0FBQ00sSUFBSSxDQUFDLElBQUksR0FDMUVkLGtCQUFrQixHQUFHLElBQUksQ0FBQ0Esa0JBQWtCLENBQUNjLElBQUksQ0FBQyxJQUFJO2dCQUU1RCxNQUFNLENBQUUsQ0FBQztzREFFTkYsWUFBWTt3QkFBQ0csV0FBVyxFQUFFUCw0QkFBNEI7O3NEQUN0REssZ0JBQWdCO3NEQUNoQkYsVUFBVTt3QkFBQ0ssYUFBYSxFQUFFaEIsa0JBQWtCO3VCQUMxQ1UsSUFBSTtzREFFTk8sV0FBYTtnQkFFaEIsQ0FBQztZQUNILENBQUM7O01BN0NIOztFQUt1REMsVUFBWTtrQkFBOUN0Qix5QkFBeUIsQUFMOUM7Z0JBS3FCQSx5QkFBeUIsRUEwQ3JDdUIsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQWdCO0FBQzdCLENBQUMsQ0FqREgifQ==