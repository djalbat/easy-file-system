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
            var explorer = _this.getExplorer(), dragEntryItem = _this.getDragEntryItem(), fileNameDragEntryItem = dragEntryItem; ///
            explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
            event.stopPropagation();
        });
        return _this;
    }
    _createClass(FileNameEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameButton = _this_properties.NameButton, FileNameSVG = _this_properties.FileNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(_svg.default, null, /*#__PURE__*/ React.createElement(FileNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(NameInput, null, name),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return FileNameEntryItemDiv;
}(_entry.default);
_defineProperty(FileNameEntryItemDiv, "ignoredProperties", [
    "name",
    "NameInput",
    "NameButton",
    "FileNameSVG"
]);
_defineProperty(FileNameEntryItemDiv, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9maWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNWR0J1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL3N2Z1wiO1xuaW1wb3J0IEVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnlcIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZUVudHJ5SXRlbURpdiBleHRlbmRzIEVudHJ5SXRlbURpdiB7XG4gIG5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5nZXREcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTtcdC8vL1xuXG4gICAgZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgTmFtZUlucHV0LCBOYW1lQnV0dG9uLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxTVkdCdXR0b24+XG4gICAgICAgIDxGaWxlTmFtZVNWRy8+XG4gICAgICA8L1NWR0J1dHRvbj4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXt0aGlzLm5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPE5hbWVJbnB1dD5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVJbnB1dD4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm5hbWVcIixcbiAgICBcIk5hbWVJbnB1dFwiLFxuICAgIFwiTmFtZUJ1dHRvblwiLFxuICAgIFwiRmlsZU5hbWVTVkdcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZU5hbWVFbnRyeUl0ZW1EaXYiLCJuYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJnZXREcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk5hbWVJbnB1dCIsIk5hbWVCdXR0b24iLCJGaWxlTmFtZVNWRyIsIlNWR0J1dHRvbiIsIm9uRG91YmxlQ2xpY2siLCJCYWNrZ3JvdW5kRGl2IiwiRW50cnlJdGVtRGl2IiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0RBSkM7MERBQ0c7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJDLCtDQUFBQSxnQ0FBK0IsU0FBQ0MsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxXQUFXLE1BQUtDLFdBQVcsSUFDM0JDLGdCQUFnQixNQUFLQyxnQkFBZ0IsSUFDckNDLHdCQUF3QkYsZUFBZSxHQUFHO1lBRWhERixTQUFTSyx5QkFBeUIsQ0FBQ0Q7WUFFbkNOLE1BQU1RLGVBQWU7UUFDdkI7OztpQkFUbUJWOztZQVduQlcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFxRCxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBNURDLE9BQTZDLGlCQUE3Q0EsTUFBTUMsWUFBdUMsaUJBQXZDQSxXQUFXQyxhQUE0QixpQkFBNUJBLFlBQVlDLGNBQWdCLGlCQUFoQkE7Z0JBRXJDLE9BQVE7a0NBRU4sb0JBQUNDLFlBQVMsc0JBQ1Isb0JBQUNEO2tDQUVILG9CQUFDRDt3QkFBV0csZUFBZSxJQUFJLENBQUNqQiw0QkFBNEI7dUJBQ3pEWTtrQ0FFSCxvQkFBQ0MsaUJBQ0VEO2tDQUVILG9CQUFDTSxtQkFBYTtpQkFFZjtZQUNIOzs7V0E1Qm1CbkI7RUFBNkJvQixjQUFZO0FBOEI1RCxnQkE5Qm1CcEIsc0JBOEJacUIscUJBQW9CO0lBQ3pCO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxnQkFyQ21CckIsc0JBcUNac0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==