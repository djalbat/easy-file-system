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
            explorer.selectOrDeselectDragEntryItem(dragEntryItem);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgbW91c2VEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGV4cGxvcmVyLnNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkRvdWJsZUNsaWNrKHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkRvdWJsZUNsaWNrKHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm5hbWVcIixcbiAgICBcIk5hbWVTcGFuXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRyYWdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW1EaXYiLCJtb3VzZURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJnZXREcmFnRW50cnlJdGVtIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJkaWRNb3VudCIsIm9uTW91c2VEb3duIiwib25Eb3VibGVDbGljayIsImRvdWJsZUNsaWNrSGFuZGxlciIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VEb3duIiwib2ZmRG91YmxlQ2xpY2siLCJFbnRyeUl0ZW1EaXYiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLGlDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLG9CQUFtQixTQUFDQyxPQUFPQztZQUN6QixJQUFNQyxXQUFXLE1BQUtDLFdBQVcsSUFDM0JDLGdCQUFnQixNQUFLQyxnQkFBZ0I7WUFFM0NILFNBQVNJLDZCQUE2QixDQUFDRjtRQUN6Qzs7O2tCQU5tQk47O1lBUW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDVCxnQkFBZ0I7Z0JBRXRDLElBQUksQ0FBQ1UsYUFBYSxDQUFDLElBQUksQ0FBQ0Msa0JBQWtCO1lBQzVDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2IsZ0JBQWdCO2dCQUV2QyxJQUFJLENBQUNjLGNBQWMsQ0FBQyxJQUFJLENBQUNILGtCQUFrQjtZQUM3Qzs7O1dBbEJtQlo7RUFBeUJnQixjQUFZO0FBb0J4RCxpQkFwQm1CaEIsa0JBb0JaaUIscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGlCQXpCbUJqQixrQkF5QlprQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9