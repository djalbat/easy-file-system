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
            directoryNameDragEntryItem.doubleClick(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRHJhZ0VudHJ5SXRlbURpdiB7XG4gIHRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZG91YmxlQ2xpY2soKTsgLy8vXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lU3BhbiwgVG9nZ2xlQnV0dG9uLCBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvZ2dsZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8RGlyZWN0b3J5TmFtZVNWRy8+LFxuICAgICAgPE5hbWVTcGFuPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZVNwYW4+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlRvZ2dsZUJ1dHRvblwiLFxuICAgIFwiRGlyZWN0b3J5TmFtZVNWR1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1EaXYiLCJ0b2dnbGVCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZG91YmxlQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsIm5hbWUiLCJOYW1lU3BhbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJvbkNsaWNrIiwiRHJhZ0VudHJ5SXRlbURpdiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsOENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSw0QkFBMkIsU0FBQ0MsT0FBT0M7WUFDakMsSUFBTUMsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ0MsNkJBQTZCRixlQUFlLEdBQUc7WUFFckRFLDJCQUEyQkMsV0FBVyxJQUFJLEdBQUc7WUFFN0NMLE1BQU1NLGVBQWU7UUFDdkI7OztrQkFSbUJSOztZQVVuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQTJELG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUFsRUMsT0FBbUQsaUJBQW5EQSxNQUFNQyxXQUE2QyxpQkFBN0NBLFVBQVVDLGVBQW1DLGlCQUFuQ0EsY0FBY0MsbUJBQXFCLGlCQUFyQkE7Z0JBRXRDLE9BQVE7a0NBRU4sb0JBQUNEO3dCQUFhRSxTQUFTLElBQUksQ0FBQ2Qsd0JBQXdCOztrQ0FDcEQsb0JBQUNhO2tDQUNELG9CQUFDRixnQkFDRUQ7aUJBR0o7WUFDSDs7O1dBdEJtQlg7RUFBc0NnQixhQUFnQjtBQXdCekUsaUJBeEJtQmhCLCtCQXdCWmlCLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0Q7QUFFRCxpQkE3Qm1CakIsK0JBNkJaa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==