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
var DirectoryNameEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(DirectoryNameEntryItemDiv, EntryItemDiv);
    var _super = _createSuper(DirectoryNameEntryItemDiv);
    function DirectoryNameEntryItemDiv() {
        _classCallCheck(this, DirectoryNameEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "toggleButtonMouseDownHandler", function(event, element) {
            var dragEntryItem = _this.getDragEntryItem(), directoryNameDragEntryItem = dragEntryItem; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        _defineProperty(_assertThisInitialized(_this), "nameButtonDoubleClickHandler", function(event, element) {
            var dragEntryItem = _this.getDragEntryItem(), directoryNameDragEntryItem = dragEntryItem; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        return _this;
    }
    _createClass(DirectoryNameEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameButton = _this_properties.NameButton, ToggleButton = _this_properties.ToggleButton, DirectoryNameSVG = _this_properties.DirectoryNameSVG, onNameChange = _this_properties.onNameChange, onNameCancel = _this_properties.onNameCancel, onSVGButtonClick = _this_properties.onSVGButtonClick, changeHandler = onNameChange, cancelHandler = onNameCancel, svgButtonClickHandler = onSVGButtonClick; ///
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onMouseDown: this.toggleButtonMouseDownHandler
                    }),
                    /*#__PURE__*/ React.createElement(_svg.default, {
                        onClick: svgButtonClickHandler
                    }, /*#__PURE__*/ React.createElement(DirectoryNameSVG, null)),
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
    return DirectoryNameEntryItemDiv;
}(_entry.default);
_defineProperty(DirectoryNameEntryItemDiv, "ignoredProperties", [
    "name",
    "NameInput",
    "NameButton",
    "ToggleButton",
    "DirectoryNameSVG",
    "onNameChange",
    "onNameCancel",
    "onSVGButtonClick"
]);
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU1ZHQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vc3ZnXCI7XG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBFbnRyeUl0ZW1EaXYge1xuICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0RHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0udG9nZ2xlKCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lSW5wdXQsIE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRywgb25OYW1lQ2hhbmdlLCBvbk5hbWVDYW5jZWwsIG9uU1ZHQnV0dG9uQ2xpY2sgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25OYW1lQ2hhbmdlLCAvLy9cbiAgICAgICAgICBjYW5jZWxIYW5kbGVyID0gb25OYW1lQ2FuY2VsLCAvLy9cbiAgICAgICAgICBzdmdCdXR0b25DbGlja0hhbmRsZXIgPSBvblNWR0J1dHRvbkNsaWNrOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLnRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXJ9IC8+LFxuICAgICAgPFNWR0J1dHRvbiBvbkNsaWNrPXtzdmdCdXR0b25DbGlja0hhbmRsZXJ9ID5cbiAgICAgICAgPERpcmVjdG9yeU5hbWVTVkcvPlxuICAgICAgPC9TVkdCdXR0b24+LFxuICAgICAgPE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17dGhpcy5uYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lQnV0dG9uPixcbiAgICAgIDxOYW1lSW5wdXQgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uQ2FuY2VsPXtjYW5jZWxIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lSW5wdXQ+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJOYW1lSW5wdXRcIixcbiAgICBcIk5hbWVCdXR0b25cIixcbiAgICBcIlRvZ2dsZUJ1dHRvblwiLFxuICAgIFwiRGlyZWN0b3J5TmFtZVNWR1wiLFxuICAgIFwib25OYW1lQ2hhbmdlXCIsXG4gICAgXCJvbk5hbWVDYW5jZWxcIixcbiAgICBcIm9uU1ZHQnV0dG9uQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwidG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbnRyeUl0ZW0iLCJnZXREcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJuYW1lIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJvbk5hbWVDaGFuZ2UiLCJvbk5hbWVDYW5jZWwiLCJvblNWR0J1dHRvbkNsaWNrIiwiY2hhbmdlSGFuZGxlciIsImNhbmNlbEhhbmRsZXIiLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJvbk1vdXNlRG93biIsIlNWR0J1dHRvbiIsIm9uQ2xpY2siLCJvbkRvdWJsZUNsaWNrIiwib25DaGFuZ2UiLCJvbkNhbmNlbCIsIkJhY2tncm91bmREaXYiLCJFbnRyeUl0ZW1EaXYiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt3REFKQzswREFDRzsrREFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLDBDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNuQkMsK0NBQUFBLGdDQUErQixTQUFDQyxPQUFPQyxTQUFZO1lBQ2pELElBQU1DLGdCQUFnQixNQUFLQyxnQkFBZ0IsSUFDckNDLDZCQUE2QkYsZUFBZSxHQUFHO1lBRXJERSwyQkFBMkJDLE1BQU07WUFFakNMLE1BQU1NLGVBQWU7UUFDdkI7UUFFQUMsK0NBQUFBLGdDQUErQixTQUFDUCxPQUFPQyxTQUFZO1lBQ2pELElBQU1DLGdCQUFnQixNQUFLQyxnQkFBZ0IsSUFDckNDLDZCQUE2QkYsZUFBZSxHQUFHO1lBRXJERSwyQkFBMkJDLE1BQU07WUFFakNMLE1BQU1NLGVBQWU7UUFDdkI7OztpQkFqQm1CUjs7WUFtQm5CVSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQXNILG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUE3SEMsT0FBOEcsaUJBQTlHQSxNQUFNQyxZQUF3RyxpQkFBeEdBLFdBQVdDLGFBQTZGLGlCQUE3RkEsWUFBWUMsZUFBaUYsaUJBQWpGQSxjQUFjQyxtQkFBbUUsaUJBQW5FQSxrQkFBa0JDLGVBQWlELGlCQUFqREEsY0FBY0MsZUFBbUMsaUJBQW5DQSxjQUFjQyxtQkFBcUIsaUJBQXJCQSxrQkFDM0ZDLGdCQUFnQkgsY0FDaEJJLGdCQUFnQkgsY0FDaEJJLHdCQUF3Qkgsa0JBQWtCLEdBQUc7Z0JBRW5ELE9BQVE7a0NBRU4sb0JBQUNKO3dCQUFhUSxhQUFhLElBQUksQ0FBQ3RCLDRCQUE0Qjs7a0NBQzVELG9CQUFDdUIsWUFBUzt3QkFBQ0MsU0FBU0g7cUNBQ2xCLG9CQUFDTjtrQ0FFSCxvQkFBQ0Y7d0JBQVdZLGVBQWUsSUFBSSxDQUFDakIsNEJBQTRCO3VCQUN6REc7a0NBRUgsb0JBQUNDO3dCQUFVYyxVQUFVUDt3QkFBZVEsVUFBVVA7dUJBQzNDVDtrQ0FFSCxvQkFBQ2lCLG1CQUFhO2lCQUVmO1lBQ0g7OztXQXhDbUI3QjtFQUFrQzhCLGNBQVk7QUEwQ2pFLGdCQTFDbUI5QiwyQkEwQ1orQixxQkFBb0I7SUFDekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsZ0JBckRtQi9CLDJCQXFEWmdDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=