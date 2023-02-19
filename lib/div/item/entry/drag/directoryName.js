"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameDragEntryItemDiv;
    }
});
var _drag = /*#__PURE__*/ _interopRequireDefault(require("../../../../div/item/entry/drag"));
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
var DirectoryNameDragEntryItemDiv = /*#__PURE__*/ function(DragEntryItemDiv) {
    _inherits(DirectoryNameDragEntryItemDiv, DragEntryItemDiv);
    var _super = _createSuper(DirectoryNameDragEntryItemDiv);
    function DirectoryNameDragEntryItemDiv() {
        _classCallCheck(this, DirectoryNameDragEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "toggleButtonMouseDownHandler", function(event, element) {
            var dragEntryItem = _this.getDragEntryItem(), directoryNameDragEntryItem = dragEntryItem; ///
            directoryNameDragEntryItem.toggle();
            event.stopPropagation();
        });
        _defineProperty(_assertThisInitialized(_this), "doubleClickHandler", function(event, element) {
            var dragEntryItem = _this.getDragEntryItem(), directoryNameDragEntryItem = dragEntryItem; ///
            directoryNameDragEntryItem.toggle();
        });
        return _this;
    }
    _createClass(DirectoryNameDragEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameSpan = _this_properties.NameSpan, ToggleButton = _this_properties.ToggleButton, DirectoryNameSVG = _this_properties.DirectoryNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onMouseDown: this.toggleButtonMouseDownHandler
                    }),
                    /*#__PURE__*/ React.createElement(DirectoryNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameSpan, null, name)
                ];
            }
        }
    ]);
    return DirectoryNameDragEntryItemDiv;
}(_drag.default);
_defineProperty(DirectoryNameDragEntryItemDiv, "ignoredProperties", [
    "ToggleButton",
    "DirectoryNameSVG"
]);
_defineProperty(DirectoryNameDragEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRHJhZ0VudHJ5SXRlbURpdiB7XG4gIHRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gdGhpcy5nZXREcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnRvZ2dsZSgpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkb3VibGVDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gdGhpcy5nZXREcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnRvZ2dsZSgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVTcGFuLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uTW91c2VEb3duPXt0aGlzLnRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXJ9IC8+LFxuICAgICAgPERpcmVjdG9yeU5hbWVTVkcvPixcbiAgICAgIDxOYW1lU3Bhbj5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVTcGFuPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJUb2dnbGVCdXR0b25cIixcbiAgICBcIkRpcmVjdG9yeU5hbWVTVkdcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiIsInRvZ2dsZUJ1dHRvbk1vdXNlRG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJuYW1lIiwiTmFtZVNwYW4iLCJUb2dnbGVCdXR0b24iLCJEaXJlY3RvcnlOYW1lU1ZHIiwib25Nb3VzZURvd24iLCJEcmFnRW50cnlJdGVtRGl2IiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eURBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSw4Q0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJDLCtDQUFBQSxnQ0FBK0IsU0FBQ0MsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxNQUFNO1lBRWpDTCxNQUFNTSxlQUFlO1FBQ3ZCO1FBRUFDLCtDQUFBQSxzQkFBcUIsU0FBQ1AsT0FBT0MsU0FBWTtZQUN2QyxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxNQUFNO1FBQ25DOzs7aUJBZm1CUDs7WUFpQm5CVSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQTJELG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUFsRUMsT0FBbUQsaUJBQW5EQSxNQUFNQyxXQUE2QyxpQkFBN0NBLFVBQVVDLGVBQW1DLGlCQUFuQ0EsY0FBY0MsbUJBQXFCLGlCQUFyQkE7Z0JBRXRDLE9BQVE7a0NBRU4sb0JBQUNEO3dCQUFhRSxhQUFhLElBQUksQ0FBQ2YsNEJBQTRCOztrQ0FDNUQsb0JBQUNjO2tDQUNELG9CQUFDRixnQkFDRUQ7aUJBR0o7WUFDSDs7O1dBN0JtQlo7RUFBc0NpQixhQUFnQjtBQStCekUsZ0JBL0JtQmpCLCtCQStCWmtCLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0Q7QUFFRCxnQkFwQ21CbEIsK0JBb0NabUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==