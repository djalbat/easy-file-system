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
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameButton = _this_properties.NameButton, ToggleButton = _this_properties.ToggleButton, DirectoryNameSVG = _this_properties.DirectoryNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onMouseDown: this.toggleButtonMouseDownHandler
                    }),
                    /*#__PURE__*/ React.createElement(_svg.default, null, /*#__PURE__*/ React.createElement(DirectoryNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(NameInput, null, name),
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
    "DirectoryNameSVG"
]);
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU1ZHQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vc3ZnXCI7XG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBFbnRyeUl0ZW1EaXYge1xuICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0RHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0udG9nZ2xlKCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lSW5wdXQsIE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxUb2dnbGVCdXR0b24gb25Nb3VzZURvd249e3RoaXMudG9nZ2xlQnV0dG9uTW91c2VEb3duSGFuZGxlcn0gLz4sXG4gICAgICA8U1ZHQnV0dG9uPlxuICAgICAgICA8RGlyZWN0b3J5TmFtZVNWRy8+XG4gICAgICA8L1NWR0J1dHRvbj4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXt0aGlzLm5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPE5hbWVJbnB1dD5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVJbnB1dD4sXG4gICAgICA8QmFja2dyb3VuZERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm5hbWVcIixcbiAgICBcIk5hbWVJbnB1dFwiLFxuICAgIFwiTmFtZUJ1dHRvblwiLFxuICAgIFwiVG9nZ2xlQnV0dG9uXCIsXG4gICAgXCJEaXJlY3RvcnlOYW1lU1ZHXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiIsInRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwibmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlciIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk5hbWVJbnB1dCIsIk5hbWVCdXR0b24iLCJUb2dnbGVCdXR0b24iLCJEaXJlY3RvcnlOYW1lU1ZHIiwib25Nb3VzZURvd24iLCJTVkdCdXR0b24iLCJvbkRvdWJsZUNsaWNrIiwiQmFja2dyb3VuZERpdiIsIkVudHJ5SXRlbURpdiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3dEQUpDOzBEQUNHOytEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ25CQywrQ0FBQUEsZ0NBQStCLFNBQUNDLE9BQU9DLFNBQVk7WUFDakQsSUFBTUMsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ0MsNkJBQTZCRixlQUFlLEdBQUc7WUFFckRFLDJCQUEyQkMsTUFBTTtZQUVqQ0wsTUFBTU0sZUFBZTtRQUN2QjtRQUVBQywrQ0FBQUEsZ0NBQStCLFNBQUNQLE9BQU9DLFNBQVk7WUFDakQsSUFBTUMsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ0MsNkJBQTZCRixlQUFlLEdBQUc7WUFFckRFLDJCQUEyQkMsTUFBTTtZQUVqQ0wsTUFBTU0sZUFBZTtRQUN2Qjs7O2lCQWpCbUJSOztZQW1CbkJVLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBd0UsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQS9FQyxPQUFnRSxpQkFBaEVBLE1BQU1DLFlBQTBELGlCQUExREEsV0FBV0MsYUFBK0MsaUJBQS9DQSxZQUFZQyxlQUFtQyxpQkFBbkNBLGNBQWNDLG1CQUFxQixpQkFBckJBO2dCQUVuRCxPQUFRO2tDQUVOLG9CQUFDRDt3QkFBYUUsYUFBYSxJQUFJLENBQUNoQiw0QkFBNEI7O2tDQUM1RCxvQkFBQ2lCLFlBQVMsc0JBQ1Isb0JBQUNGO2tDQUVILG9CQUFDRjt3QkFBV0ssZUFBZSxJQUFJLENBQUNWLDRCQUE0Qjt1QkFDekRHO2tDQUVILG9CQUFDQyxpQkFDRUQ7a0NBRUgsb0JBQUNRLG1CQUFhO2lCQUVmO1lBQ0g7OztXQXJDbUJwQjtFQUFrQ3FCLGNBQVk7QUF1Q2pFLGdCQXZDbUJyQiwyQkF1Q1pzQixxQkFBb0I7SUFDekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsZ0JBL0NtQnRCLDJCQStDWnVCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=