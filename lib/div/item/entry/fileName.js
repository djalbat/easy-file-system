"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameEntryItemDiv;
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
var FileNameEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(FileNameEntryItemDiv, EntryItemDiv);
    var _super = _createSuper(FileNameEntryItemDiv);
    function FileNameEntryItemDiv() {
        _classCallCheck(this, FileNameEntryItemDiv);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameEntryItemDiv, [
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
}(_entry.default);
_defineProperty(FileNameEntryItemDiv, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9maWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnlcIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZUVudHJ5SXRlbURpdiBleHRlbmRzIEVudHJ5SXRlbURpdiB7XG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGRvdWJsZUNsaWNrSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBwYXJlbnRFbGVtZW50O1x0Ly8vXG5cbiAgICBleHBsb3Jlci5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lQnV0dG9uLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRvdWJsZUNsaWNrSGFuZGxlciA9IHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEZpbGVOYW1lU1ZHLz4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXtkb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGVOYW1lRW50cnlJdGVtRGl2IiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwibmFtZSIsIk5hbWVCdXR0b24iLCJGaWxlTmFtZVNWRyIsImJpbmQiLCJvbkRvdWJsZUNsaWNrIiwiQmFja2dyb3VuZERpdiIsIkVudHJ5SXRlbURpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFLUUEsb0JBQW9COzs7MERBSGhCLHlCQUF5QjsrREFDeEIseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLG9CQUFvQixpQkFBMUI7OzthQUFNQSxvQkFBb0I7Ozs7OztZQUN2Q0MsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBTSxBQUFFQyxRQUFRLEdBQUssSUFBSSxDQUFDQyxVQUFVLENBQTVCRCxRQUFRLEFBQW9CLEFBQUM7Z0JBRXJDLE9BQU9BLFFBQVEsQ0FBQzthQUNqQjs7O1lBRURFLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQWxCQSxTQUFBQSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUU7Z0JBQ2pDLElBQU1KLFFBQVEsR0FBRyxJQUFJLENBQUNELFdBQVcsRUFBRSxFQUM3Qk0sYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLHFCQUFxQixHQUFHRixhQUFhLEFBQUMsRUFBQyxHQUFHO2dCQUVoREwsUUFBUSxDQUFDUSx5QkFBeUIsQ0FBQ0QscUJBQXFCLENBQUMsQ0FBQztnQkFFMURKLEtBQUssQ0FBQ00sZUFBZSxFQUFFLENBQUM7YUFDekI7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUEwQyxXQUFlLEdBQWYsSUFBSSxDQUFDVCxVQUFVLEVBQWpEVSxJQUFJLEdBQThCLFdBQWUsQ0FBakRBLElBQUksRUFBRUMsVUFBVSxHQUFrQixXQUFlLENBQTNDQSxVQUFVLEVBQUVDLFdBQVcsR0FBSyxXQUFlLENBQS9CQSxXQUFXLEVBQy9CWCxrQkFBa0IsR0FBRyxJQUFJLENBQUNBLGtCQUFrQixDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7Z0JBRTlELE9BQVE7a0NBRU4sb0JBQUNELFdBQVcsT0FBRTtrQ0FDZCxvQkFBQ0QsVUFBVTt3QkFBQ0csYUFBYSxFQUFFYixrQkFBa0I7dUJBQzFDUyxJQUFJLENBQ007a0NBQ2Isb0JBQUNLLFdBQWEsUUFBQSxPQUFFO2lCQUVqQixDQUFFO2FBQ0o7Ozs7Q0FLRixDQW5DaURDLE1BQVksUUFBQSxDQW1DN0Q7QUFIQyxnQkFoQ21CbkIsb0JBQW9CLEVBZ0NoQ29CLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsV0FBVztDQUN2QixDQUFDIn0=