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
            var parentElement = _this.getParentElement(), directoryNameDragEntryItem = parentElement; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        _defineProperty(_assertThisInitialized(_this), "nameButtonDoubleClickHandler", function(event, element) {
            var parentElement = _this.getParentElement(), directoryNameDragEntryItem = parentElement; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        _defineProperty(_assertThisInitialized(_this), "nameInputChangeHandler", function(event, element) {
            debugger;
        });
        _defineProperty(_assertThisInitialized(_this), "svgButtonClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), parentElement = _this.getParentElement(), dragEntryItem = parentElement; ///
            explorer.selectDragEntryItem(dragEntryItem);
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
                    /*#__PURE__*/ React.createElement(_svg.default, {
                        onClick: this.svgButtonClickHandler
                    }, /*#__PURE__*/ React.createElement(DirectoryNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(NameInput, {
                        onChange: this.nameInputChangeHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return DirectoryNameEntryItemDiv;
}(_entry.default);
_defineProperty(DirectoryNameEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU1ZHQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vc3ZnXCI7XG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuaW1wb3J0IEJhY2tncm91bmREaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9iYWNrZ3JvdW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBFbnRyeUl0ZW1EaXYge1xuICB0b2dnbGVCdXR0b25Nb3VzZURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gcGFyZW50RWxlbWVudDsgLy8vXG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS50b2dnbGUoKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHBhcmVudEVsZW1lbnQ7IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0udG9nZ2xlKCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG5hbWVJbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3ZnQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBwYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBleHBsb3Jlci5zZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgTmFtZUlucHV0LCBOYW1lQnV0dG9uLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLnRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXJ9IC8+LFxuICAgICAgPFNWR0J1dHRvbiBvbkNsaWNrPXt0aGlzLnN2Z0J1dHRvbkNsaWNrSGFuZGxlcn0gPlxuICAgICAgICA8RGlyZWN0b3J5TmFtZVNWRy8+XG4gICAgICA8L1NWR0J1dHRvbj4sXG4gICAgICA8TmFtZUJ1dHRvbiBvbkRvdWJsZUNsaWNrPXt0aGlzLm5hbWVCdXR0b25Eb3VibGVDbGlja0hhbmRsZXJ9ID5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVCdXR0b24+LFxuICAgICAgPE5hbWVJbnB1dCBvbkNoYW5nZT17dGhpcy5uYW1lSW5wdXRDaGFuZ2VIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lSW5wdXQ+LFxuICAgICAgPEJhY2tncm91bmREaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiIsInRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwibmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlciIsIm5hbWVJbnB1dENoYW5nZUhhbmRsZXIiLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsInNlbGVjdERyYWdFbnRyeUl0ZW0iLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsIm5hbWUiLCJOYW1lSW5wdXQiLCJOYW1lQnV0dG9uIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIm9uTW91c2VEb3duIiwiU1ZHQnV0dG9uIiwib25DbGljayIsIm9uRG91YmxlQ2xpY2siLCJvbkNoYW5nZSIsIkJhY2tncm91bmREaXYiLCJFbnRyeUl0ZW1EaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0RBSkM7MERBQ0c7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJDLCtDQUFBQSxnQ0FBK0IsU0FBQ0MsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxNQUFNO1lBRWpDTCxNQUFNTSxlQUFlO1FBQ3ZCO1FBRUFDLCtDQUFBQSxnQ0FBK0IsU0FBQ1AsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxNQUFNO1lBRWpDTCxNQUFNTSxlQUFlO1FBQ3ZCO1FBRUFFLCtDQUFBQSwwQkFBeUIsU0FBQ1IsT0FBT0MsU0FBWTtZQUMzQyxRQUFRO1FBQ1Y7UUFFQVEsK0NBQUFBLHlCQUF3QixTQUFDVCxPQUFPQyxTQUFZO1lBQzFDLElBQU1TLFdBQVcsTUFBS0MsV0FBVyxJQUMzQlQsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ1MsZ0JBQWdCVixlQUFnQixHQUFHO1lBRXpDUSxTQUFTRyxtQkFBbUIsQ0FBQ0Q7WUFFN0JaLE1BQU1NLGVBQWU7UUFDdkI7OztpQkEvQm1CUjs7WUFpQ25CZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUF3RSxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBL0VDLE9BQWdFLGlCQUFoRUEsTUFBTUMsWUFBMEQsaUJBQTFEQSxXQUFXQyxhQUErQyxpQkFBL0NBLFlBQVlDLGVBQW1DLGlCQUFuQ0EsY0FBY0MsbUJBQXFCLGlCQUFyQkE7Z0JBRW5ELE9BQVE7a0NBRU4sb0JBQUNEO3dCQUFhRSxhQUFhLElBQUksQ0FBQ3RCLDRCQUE0Qjs7a0NBQzVELG9CQUFDdUIsWUFBUzt3QkFBQ0MsU0FBUyxJQUFJLENBQUNkLHFCQUFxQjtxQ0FDNUMsb0JBQUNXO2tDQUVILG9CQUFDRjt3QkFBV00sZUFBZSxJQUFJLENBQUNqQiw0QkFBNEI7dUJBQ3pEUztrQ0FFSCxvQkFBQ0M7d0JBQVVRLFVBQVUsSUFBSSxDQUFDakIsc0JBQXNCO3VCQUM3Q1E7a0NBRUgsb0JBQUNVLG1CQUFhO2lCQUVmO1lBQ0g7OztXQW5EbUI1QjtFQUFrQzZCLGNBQVk7QUFxRGpFLGdCQXJEbUI3QiwyQkFxRFo4QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9