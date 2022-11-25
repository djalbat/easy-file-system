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
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameButton = _this_properties.NameButton, FileNameSVG = _this_properties.FileNameSVG, onNameChange = _this_properties.onNameChange, onNameCancel = _this_properties.onNameCancel, onSVGButtonClick = _this_properties.onSVGButtonClick, changeHandler = onNameChange, cancelHandler = onNameCancel, svgButtonClickHandler = onSVGButtonClick; ///
                return [
                    /*#__PURE__*/ React.createElement(_svg.default, {
                        onClick: svgButtonClickHandler
                    }, /*#__PURE__*/ React.createElement(FileNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(NameInput, {
                        onChange: changeHandler,
                        onCancel: cancelHandler
                    }, name),
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
    "FileNameSVG",
    "onNameChange",
    "onNameCancel",
    "onSVGButtonClick"
]);
_defineProperty(FileNameEntryItemDiv, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9maWxlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNWR0J1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL3N2Z1wiO1xuaW1wb3J0IEVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnlcIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZUVudHJ5SXRlbURpdiBleHRlbmRzIEVudHJ5SXRlbURpdiB7XG4gIG5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5nZXREcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTtcdC8vL1xuXG4gICAgZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgTmFtZUlucHV0LCBOYW1lQnV0dG9uLCBGaWxlTmFtZVNWRywgb25OYW1lQ2hhbmdlLCBvbk5hbWVDYW5jZWwsIG9uU1ZHQnV0dG9uQ2xpY2sgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25OYW1lQ2hhbmdlLCAvLy9cbiAgICAgICAgICBjYW5jZWxIYW5kbGVyID0gb25OYW1lQ2FuY2VsLCAvLy9cbiAgICAgICAgICBzdmdCdXR0b25DbGlja0hhbmRsZXIgPSBvblNWR0J1dHRvbkNsaWNrOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U1ZHQnV0dG9uIG9uQ2xpY2s9e3N2Z0J1dHRvbkNsaWNrSGFuZGxlcn0gPlxuICAgICAgICA8RmlsZU5hbWVTVkcvPlxuICAgICAgPC9TVkdCdXR0b24+LFxuICAgICAgPE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17dGhpcy5uYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lQnV0dG9uPixcbiAgICAgIDxOYW1lSW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uQ2FuY2VsPXtjYW5jZWxIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lSW5wdXQ+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJOYW1lSW5wdXRcIixcbiAgICBcIk5hbWVCdXR0b25cIixcbiAgICBcIkZpbGVOYW1lU1ZHXCIsXG4gICAgXCJvbk5hbWVDaGFuZ2VcIixcbiAgICBcIm9uTmFtZUNhbmNlbFwiLFxuICAgIFwib25TVkdCdXR0b25DbGlja1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlTmFtZUVudHJ5SXRlbURpdiIsIm5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsImdldERyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJuYW1lIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsIkZpbGVOYW1lU1ZHIiwib25OYW1lQ2hhbmdlIiwib25OYW1lQ2FuY2VsIiwib25TVkdCdXR0b25DbGljayIsImNoYW5nZUhhbmRsZXIiLCJjYW5jZWxIYW5kbGVyIiwic3ZnQnV0dG9uQ2xpY2tIYW5kbGVyIiwiU1ZHQnV0dG9uIiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJvbkNoYW5nZSIsIm9uQ2FuY2VsIiwiQmFja2dyb3VuZERpdiIsIkVudHJ5SXRlbURpdiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3dEQUpDOzBEQUNHOytEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ25CQywrQ0FBQUEsZ0NBQStCLFNBQUNDLE9BQU9DLFNBQVk7WUFDakQsSUFBTUMsV0FBVyxNQUFLQyxXQUFXLElBQzNCQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyx3QkFBd0JGLGVBQWUsR0FBRztZQUVoREYsU0FBU0sseUJBQXlCLENBQUNEO1lBRW5DTixNQUFNUSxlQUFlO1FBQ3ZCOzs7aUJBVG1CVjs7WUFXbkJXLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBbUcsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQTFHQyxPQUEyRixpQkFBM0ZBLE1BQU1DLFlBQXFGLGlCQUFyRkEsV0FBV0MsYUFBMEUsaUJBQTFFQSxZQUFZQyxjQUE4RCxpQkFBOURBLGFBQWFDLGVBQWlELGlCQUFqREEsY0FBY0MsZUFBbUMsaUJBQW5DQSxjQUFjQyxtQkFBcUIsaUJBQXJCQSxrQkFDeEVDLGdCQUFnQkgsY0FDaEJJLGdCQUFnQkgsY0FDaEJJLHdCQUF3Qkgsa0JBQWtCLEdBQUc7Z0JBRW5ELE9BQVE7a0NBRU4sb0JBQUNJLFlBQVM7d0JBQUNDLFNBQVNGO3FDQUNsQixvQkFBQ047a0NBRUgsb0JBQUNEO3dCQUFXVSxlQUFlLElBQUksQ0FBQ3hCLDRCQUE0Qjt1QkFDekRZO2tDQUVILG9CQUFDQzt3QkFBVVksVUFBVU47d0JBQWVPLFVBQVVOO3VCQUMzQ1I7a0NBRUgsb0JBQUNlLG1CQUFhO2lCQUVmO1lBQ0g7OztXQS9CbUI1QjtFQUE2QjZCLGNBQVk7QUFpQzVELGdCQWpDbUI3QixzQkFpQ1o4QixxQkFBb0I7SUFDekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELGdCQTNDbUI5QixzQkEyQ1orQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9