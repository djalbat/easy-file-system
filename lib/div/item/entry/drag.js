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
            console.log("mouse down!", element);
            explorer.selectOrDeselectDragEntryItem(dragEntryItem);
        });
        return _this;
    }
    _create_class(DragEntryItemDiv, [
        {
            key: "didMount",
            value: function didMount() {
                console.log("did mount...");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgbW91c2VEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGNvbnNvbGUubG9nKFwibW91c2UgZG93biFcIiwgZWxlbWVudClcblxuICAgIGV4cGxvcmVyLnNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJkaWQgbW91bnQuLi5cIilcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25Eb3VibGVDbGljayh0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZEb3VibGVDbGljayh0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJOYW1lU3BhblwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcmFnXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEcmFnRW50cnlJdGVtRGl2IiwibW91c2VEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbSIsImRpZE1vdW50Iiwib25Nb3VzZURvd24iLCJvbkRvdWJsZUNsaWNrIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwid2lsbFVubW91bnQiLCJvZmZNb3VzZURvd24iLCJvZmZEb3VibGVDbGljayIsIkVudHJ5SXRlbURpdiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsb0JBQW1CLFNBQUNDLE9BQU9DO1lBQ3pCLElBQU1DLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsZ0JBQWdCLE1BQUtDLGdCQUFnQjtZQUUzQ0MsUUFBUUMsR0FBRyxDQUFDLGVBQWVOO1lBRTNCQyxTQUFTTSw2QkFBNkIsQ0FBQ0o7UUFDekM7OztrQkFSbUJOOztZQVVuQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFSCxRQUFRQyxHQUFHLENBQUM7Z0JBRVosSUFBSSxDQUFDRyxXQUFXLENBQUMsSUFBSSxDQUFDWCxnQkFBZ0I7Z0JBRXRDLElBQUksQ0FBQ1ksYUFBYSxDQUFDLElBQUksQ0FBQ0Msa0JBQWtCO1lBQzVDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2YsZ0JBQWdCO2dCQUV2QyxJQUFJLENBQUNnQixjQUFjLENBQUMsSUFBSSxDQUFDSCxrQkFBa0I7WUFDN0M7OztXQXRCbUJkO0VBQXlCa0IsY0FBWTtBQXdCeEQsaUJBeEJtQmxCLGtCQXdCWm1CLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0Q7QUFFRCxpQkE3Qm1CbkIsa0JBNkJab0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==