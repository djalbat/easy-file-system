"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameDragEntryItemDiv;
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
var FileNameDragEntryItemDiv = /*#__PURE__*/ function(DragEntryItemDiv) {
    _inherits(FileNameDragEntryItemDiv, DragEntryItemDiv);
    var _super = _create_super(FileNameDragEntryItemDiv);
    function FileNameDragEntryItemDiv() {
        _class_call_check(this, FileNameDragEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "doubleClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), dragEntryItem = _this.getDragEntryItem(), fileNameDragEntryItem = dragEntryItem; ///
            explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
        });
        return _this;
    }
    _create_class(FileNameDragEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameSpan = _this_properties.NameSpan, FileNameSVG = _this_properties.FileNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(FileNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameSpan, null, name)
                ];
            }
        }
    ]);
    return FileNameDragEntryItemDiv;
}(_drag.default);
_define_property(FileNameDragEntryItemDiv, "ignoredProperties", [
    "FileNameSVG"
]);
_define_property(FileNameDragEntryItemDiv, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRHJhZ0VudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZHJhZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBEcmFnRW50cnlJdGVtRGl2IHtcbiAgZG91YmxlQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0RHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07XHQvLy9cblxuICAgIGV4cGxvcmVyLm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lU3BhbiwgRmlsZU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8RmlsZU5hbWVTVkcvPixcbiAgICAgIDxOYW1lU3Bhbj5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVTcGFuPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJGaWxlTmFtZVNWR1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbURpdiIsImRvdWJsZUNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsIm5hbWUiLCJOYW1lU3BhbiIsIkZpbGVOYW1lU1ZHIiwiRHJhZ0VudHJ5SXRlbURpdiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsc0JBQXFCLFNBQUNDLE9BQU9DO1lBQzNCLElBQU1DLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ0Msd0JBQXdCRixlQUFlLEdBQUc7WUFFaERGLFNBQVNLLHlCQUF5QixDQUFDRDtRQUNyQzs7O2tCQVBtQlI7O1lBU25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBd0MsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQS9DQyxPQUFnQyxpQkFBaENBLE1BQU1DLFdBQTBCLGlCQUExQkEsVUFBVUMsY0FBZ0IsaUJBQWhCQTtnQkFFeEIsT0FBUTtrQ0FFTixvQkFBQ0E7a0NBQ0Qsb0JBQUNELGdCQUNFRDtpQkFHSjtZQUNIOzs7V0FwQm1CWjtFQUFpQ2UsYUFBZ0I7QUFzQnBFLGlCQXRCbUJmLDBCQXNCWmdCLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBMUJtQmhCLDBCQTBCWmlCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=