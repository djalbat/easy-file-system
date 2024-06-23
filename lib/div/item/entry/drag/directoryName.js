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
var _drag = /*#__PURE__*/ _interop_require_default(require("../../../../div/item/entry/drag"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var DirectoryNameDragEntryItemDiv = /*#__PURE__*/ function(DragEntryItemDiv) {
    _inherits(DirectoryNameDragEntryItemDiv, DragEntryItemDiv);
    var _super = _create_super(DirectoryNameDragEntryItemDiv);
    function DirectoryNameDragEntryItemDiv() {
        _class_call_check(this, DirectoryNameDragEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "toggleButtonClickHandler", function(event, element) {
            var dragEntryItem = _this.getDragEntryItem(), directoryNameDragEntryItem = dragEntryItem; ///
            directoryNameDragEntryItem.doubleClick(event, element); ///
            event.stopPropagation();
        });
        return _this;
    }
    _create_class(DirectoryNameDragEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameSpan = _this_properties.NameSpan, ToggleButton = _this_properties.ToggleButton, DirectoryNameSVG = _this_properties.DirectoryNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onClick: this.toggleButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(DirectoryNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameSpan, null, name)
                ];
            }
        }
    ]);
    return DirectoryNameDragEntryItemDiv;
}(_drag.default);
_define_property(DirectoryNameDragEntryItemDiv, "ignoredProperties", [
    "ToggleButton",
    "DirectoryNameSVG"
]);
_define_property(DirectoryNameDragEntryItemDiv, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRHJhZ0VudHJ5SXRlbURpdiB7XG4gIHRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZG91YmxlQ2xpY2soZXZlbnQsIGVsZW1lbnQpOyAvLy9cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVTcGFuLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9nZ2xlQnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxEaXJlY3RvcnlOYW1lU1ZHLz4sXG4gICAgICA8TmFtZVNwYW4+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lU3Bhbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiVG9nZ2xlQnV0dG9uXCIsXG4gICAgXCJEaXJlY3RvcnlOYW1lU1ZHXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiIsInRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbnRyeUl0ZW0iLCJnZXREcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk5hbWVTcGFuIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIm9uQ2xpY2siLCJEcmFnRW50cnlJdGVtRGl2IiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSw4Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLDRCQUEyQixTQUFDQyxPQUFPQztZQUNqQyxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyw2QkFBNkJGLGVBQWUsR0FBRztZQUVyREUsMkJBQTJCQyxXQUFXLENBQUNMLE9BQU9DLFVBQVUsR0FBRztZQUUzREQsTUFBTU0sZUFBZTtRQUN2Qjs7O2tCQVJtQlI7O1lBVW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBMkQsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQWxFQyxPQUFtRCxpQkFBbkRBLE1BQU1DLFdBQTZDLGlCQUE3Q0EsVUFBVUMsZUFBbUMsaUJBQW5DQSxjQUFjQyxtQkFBcUIsaUJBQXJCQTtnQkFFdEMsT0FBUTtrQ0FFTixvQkFBQ0Q7d0JBQWFFLFNBQVMsSUFBSSxDQUFDZCx3QkFBd0I7O2tDQUNwRCxvQkFBQ2E7a0NBQ0Qsb0JBQUNGLGdCQUNFRDtpQkFHSjtZQUNIOzs7V0F0Qm1CWDtFQUFzQ2dCLGFBQWdCO0FBd0J6RSxpQkF4Qm1CaEIsK0JBd0JaaUIscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGlCQTdCbUJqQiwrQkE2QlprQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9