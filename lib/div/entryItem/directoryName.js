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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var DirectoryNameEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(DirectoryNameEntryItemDiv, EntryItemDiv);
    function DirectoryNameEntryItemDiv() {
        _classCallCheck(this, DirectoryNameEntryItemDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameEntryItemDiv).apply(this, arguments));
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
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameEntryItemDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uL2Rpdi9lbnRyeUl0ZW1cIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZG91YmxlQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHBhcmVudEVsZW1lbnQ7IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0udG9nZ2xlKCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lQnV0dG9uLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyID0gdGhpcy50b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uTW91c2VEb3duPXt0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyfSAvPixcbiAgICAgIDxEaXJlY3RvcnlOYW1lU1ZHLz4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXtkb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlciIsImNoaWxkRWxlbWVudHMiLCJuYW1lIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbkRvdWJsZUNsaWNrIiwiZGVmYXVsdFBy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