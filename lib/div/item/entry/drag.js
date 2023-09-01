"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DragEntryItemDiv;
    }
});
var _entry = /*#__PURE__*/ _interop_require_default(require("../../../div/item/entry"));
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
var DragEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(DragEntryItemDiv, EntryItemDiv);
    var _super = _create_super(DragEntryItemDiv);
    function DragEntryItemDiv() {
        _class_call_check(this, DragEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "mouseDownHandler", function(event, element) {
            var explorer = _this.getExplorer(), dragEntryItem = _this.getDragEntryItem();
            explorer.selectDragEntryItem(dragEntryItem);
        });
        return _this;
    }
    _create_class(DragEntryItemDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.onMouseDown(this.mouseDownHandler);
                this.onDoubleClick(this.doubleClickHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offMouseDown(this.mouseDownHandler);
                this.offDoubleClick(this.doubleClickHandler);
            }
        }
    ]);
    return DragEntryItemDiv;
}(_entry.default);
_define_property(DragEntryItemDiv, "ignoredProperties", [
    "name",
    "NameSpan"
]);
_define_property(DragEntryItemDiv, "defaultProperties", {
    className: "drag"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgbW91c2VEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGV4cGxvcmVyLnNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRG91YmxlQ2xpY2sodGhpcy5kb3VibGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRG91YmxlQ2xpY2sodGhpcy5kb3VibGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibmFtZVwiLFxuICAgIFwiTmFtZVNwYW5cIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJhZ1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbURpdiIsIm1vdXNlRG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsImdldERyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwiZGlkTW91bnQiLCJvbk1vdXNlRG93biIsIm9uRG91YmxlQ2xpY2siLCJkb3VibGVDbGlja0hhbmRsZXIiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlRG93biIsIm9mZkRvdWJsZUNsaWNrIiwiRW50cnlJdGVtRGl2IiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NERBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJDLGtEQUFBQSxvQkFBbUIsU0FBQ0MsT0FBT0M7WUFDekIsSUFBTUMsV0FBVyxNQUFLQyxXQUFXLElBQzNCQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCO1lBRTNDSCxTQUFTSSxtQkFBbUIsQ0FBQ0Y7UUFDL0I7OztrQkFObUJOOztZQVFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ1QsZ0JBQWdCO2dCQUV0QyxJQUFJLENBQUNVLGFBQWEsQ0FBQyxJQUFJLENBQUNDLGtCQUFrQjtZQUM1Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNiLGdCQUFnQjtnQkFFdkMsSUFBSSxDQUFDYyxjQUFjLENBQUMsSUFBSSxDQUFDSCxrQkFBa0I7WUFDN0M7OztXQWxCbUJaO0VBQXlCZ0IsY0FBWTtBQW9CeEQsaUJBcEJtQmhCLGtCQW9CWmlCLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0Q7QUFFRCxpQkF6Qm1CakIsa0JBeUJaa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==