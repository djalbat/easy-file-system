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
var FileNameEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(FileNameEntryItemDiv, EntryItemDiv);
    function FileNameEntryItemDiv() {
        _classCallCheck(this, FileNameEntryItemDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameEntryItemDiv).apply(this, arguments));
    }
    _createClass(FileNameEntryItemDiv, [
        {
            key: "getExplorer",
            value: function getExplorer() {
                var _properties = this.properties, explorer = _properties.explorer;
                return explorer;
            }
        },
        {
            key: "doubleClickHandler",
            value: function doubleClickHandler(event, element) {
                var explorer = this.getExplorer(), parentElement = this.getParentElement(), fileNameDragEntryItem = parentElement; ///
                explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
                event.stopPropagation();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, NameButton = _properties.NameButton, FileNameSVG = _properties.FileNameSVG, doubleClickHandler = this.doubleClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(FileNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: doubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return FileNameEntryItemDiv;
}(_entryItem.default);
_defineProperty(FileNameEntryItemDiv, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameEntryItemDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL2ZpbGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi9kaXYvZW50cnlJdGVtXCI7XG5pbXBvcnQgQmFja2dyb3VuZERpdiBmcm9tIFwiLi4vLi4vZGl2L2JhY2tncm91bmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBFbnRyeUl0ZW1EaXYge1xuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBkb3VibGVDbGlja0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDtcdC8vL1xuXG4gICAgZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgTmFtZUJ1dHRvbiwgRmlsZU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxGaWxlTmFtZVNWRy8+LFxuICAgICAgPE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17ZG91YmxlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lQnV0dG9uPixcbiAgICAgIDxCYWNrZ3JvdW5kRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZpbGVOYW1lRW50cnlJdGVtRGl2IiwiZ2V0RXhwbG9yZXIiLCJwcm9wZXJ0aWVzIiwiZXhwbG9yZXIiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwibmFtZSIsIk5hbWVCdXR0b24iLCJGaWxlTmFtZVNWRyIsImJpbmQiLCJvbkRvdWJsZUNsaWNrIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBcUIsQ0FBckIsVUFBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsV0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0JBLG9CQUFvQixpQkFBMUIsUUFBUTtjQUFGQSxvQkFBb0I7YUFBcEJBLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjtnRUFBcEJBLG9CQUFvQjs7aUJBQXBCQSxvQkFBb0I7O1lBQ3ZDQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFnQixXQUFlLEdBQWYsSUFBSSxDQUFDQyxVQUFVLEVBQTVCQyxRQUFRLEdBQUssV0FBZSxDQUE1QkEsUUFBUTtnQkFFaEIsTUFBTSxDQUFDQSxRQUFRO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFrQixFQUFsQkEsQ0FBa0I7bUJBQWxCQSxRQUFRLENBQVJBLGtCQUFrQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxHQUFLLENBQUNILFFBQVEsR0FBRyxJQUFJLENBQUNGLFdBQVcsSUFDM0JNLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MscUJBQXFCLEdBQUdGLGFBQWEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRWhESixRQUFRLENBQUNPLHlCQUF5QixDQUFDRCxxQkFBcUI7Z0JBRXhESixLQUFLLENBQUNNLGVBQWU7WUFDdkIsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQXFDLFdBQWUsR0FBZixJQUFJLENBQUNWLFVBQVUsRUFBakRXLElBQUksR0FBOEIsV0FBZSxDQUFqREEsSUFBSSxFQUFFQyxVQUFVLEdBQWtCLFdBQWUsQ0FBM0NBLFVBQVUsRUFBRUMsV0FBVyxHQUFLLFdBQWUsQ0FBL0JBLFdBQVcsRUFDL0JYLGtCQUFrQixHQUFHLElBQUksQ0FBQ0Esa0JBQWtCLENBQUNZLElBQUksQ0FBQyxJQUFJO2dCQUU1RCxNQUFNLENBQUUsQ0FBQztzREFFTkQsV0FBVztzREFDWEQsVUFBVTt3QkFBQ0csYUFBYSxFQUFFYixrQkFBa0I7dUJBQzFDUyxJQUFJO3NEQTNCYSxXQUFzQjtnQkErQjVDLENBQUM7WUFDSCxDQUFDOzs7V0E5QmtCYixvQkFBb0I7RUFIaEIsVUFBcUI7Z0JBR3pCQSxvQkFBb0IsRUFnQ2hDa0IsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVc7QUFDeEIsQ0FBQztrQkFsQ2tCbkIsb0JBQW9CIn0=