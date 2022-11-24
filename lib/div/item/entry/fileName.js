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
var _svg = /*#__PURE__*/ _interopRequireDefault(require("../../../button/svg"));
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "nameButtonDoubleClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), parentElement = _this.getParentElement(), fileNameDragEntryItem = parentElement; ///
            explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
            event.stopPropagation();
        });
        _defineProperty(_assertThisInitialized(_this), "svgButtonClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), parentElement = _this.getParentElement(), dragEntryItem = parentElement; ///
            explorer.selectDragEntryItem(dragEntryItem);
            event.stopPropagation();
        });
        return _this;
    }
    _createClass(FileNameEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameButton = _this_properties.NameButton, FileNameSVG = _this_properties.FileNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(_svg.default, {
                        onClick: this.svgButtonClickHandler
                    }, /*#__PURE__*/ React.createElement(FileNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9maWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNWR0J1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL3N2Z1wiO1xuaW1wb3J0IEVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnlcIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZUVudHJ5SXRlbURpdiBleHRlbmRzIEVudHJ5SXRlbURpdiB7XG4gIG5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDtcdC8vL1xuXG4gICAgZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBzdmdCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGV4cGxvcmVyLnNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lQnV0dG9uLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxTVkdCdXR0b24gb25DbGljaz17dGhpcy5zdmdCdXR0b25DbGlja0hhbmRsZXJ9ID5cbiAgICAgICAgPEZpbGVOYW1lU1ZHLz5cbiAgICAgIDwvU1ZHQnV0dG9uPixcbiAgICAgIDxOYW1lQnV0dG9uIG9uRG91YmxlQ2xpY2s9e3RoaXMubmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlcn0gPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZUJ1dHRvbj4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZU5hbWVFbnRyeUl0ZW1EaXYiLCJuYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInBhcmVudEVsZW1lbnQiLCJnZXRQYXJlbnRFbGVtZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsInN2Z0J1dHRvbkNsaWNrSGFuZGxlciIsImRyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJuYW1lIiwiTmFtZUJ1dHRvbiIsIkZpbGVOYW1lU1ZHIiwiU1ZHQnV0dG9uIiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJCYWNrZ3JvdW5kRGl2IiwiRW50cnlJdGVtRGl2IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3dEQUpDOzBEQUNHOytEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ25CQywrQ0FBQUEsZ0NBQStCLFNBQUNDLE9BQU9DLFNBQVk7WUFDakQsSUFBTUMsV0FBVyxNQUFLQyxXQUFXLElBQzNCQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyx3QkFBd0JGLGVBQWUsR0FBRztZQUVoREYsU0FBU0sseUJBQXlCLENBQUNEO1lBRW5DTixNQUFNUSxlQUFlO1FBQ3ZCO1FBRUFDLCtDQUFBQSx5QkFBd0IsU0FBQ1QsT0FBT0MsU0FBWTtZQUMxQyxJQUFNQyxXQUFXLE1BQUtDLFdBQVcsSUFDM0JDLGdCQUFnQixNQUFLQyxnQkFBZ0IsSUFDckNLLGdCQUFnQk4sZUFBZ0IsR0FBRztZQUV6Q0YsU0FBU1MsbUJBQW1CLENBQUNEO1lBRTdCVixNQUFNUSxlQUFlO1FBQ3ZCOzs7aUJBbkJtQlY7O1lBcUJuQmMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUEwQyxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBakRDLE9BQWtDLGlCQUFsQ0EsTUFBTUMsYUFBNEIsaUJBQTVCQSxZQUFZQyxjQUFnQixpQkFBaEJBO2dCQUUxQixPQUFRO2tDQUVOLG9CQUFDQyxZQUFTO3dCQUFDQyxTQUFTLElBQUksQ0FBQ1QscUJBQXFCO3FDQUM1QyxvQkFBQ087a0NBRUgsb0JBQUNEO3dCQUFXSSxlQUFlLElBQUksQ0FBQ3BCLDRCQUE0Qjt1QkFDekRlO2tDQUVILG9CQUFDTSxtQkFBYTtpQkFFZjtZQUNIOzs7V0FuQ21CdEI7RUFBNkJ1QixjQUFZO0FBcUM1RCxnQkFyQ21CdkIsc0JBcUNad0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==