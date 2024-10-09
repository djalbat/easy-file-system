"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameMarkerEntryItem;
    }
});
var _marker = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/marker"));
var _entryTypes = require("../../../entryTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var DirectoryNameMarkerEntryItem = /*#__PURE__*/ function(MarkerEntryItem) {
    _inherits(DirectoryNameMarkerEntryItem, MarkerEntryItem);
    function DirectoryNameMarkerEntryItem() {
        _class_call_check(this, DirectoryNameMarkerEntryItem);
        return _call_super(this, DirectoryNameMarkerEntryItem, arguments);
    }
    _create_class(DirectoryNameMarkerEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(dragEntryItem) {
                var before;
                var dragEntryItemType = dragEntryItem.getType();
                switch(dragEntryItemType){
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                        before = true;
                        break;
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        var name = this.getName(), dragEntryItemName = dragEntryItem.getName();
                        before = name.localeCompare(dragEntryItemName) < 0;
                        break;
                }
                return before;
            }
        }
    ]);
    return DirectoryNameMarkerEntryItem;
}(_marker.default);
_define_property(DirectoryNameMarkerEntryItem, "type", _entryTypes.DIRECTORY_NAME_MARKER_ENTRY_TYPE);
_define_property(DirectoryNameMarkerEntryItem, "defaultProperties", {
    className: "directory-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2VyRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L21hcmtlclwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2VudHJ5VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBleHRlbmRzIE1hcmtlckVudHJ5SXRlbSB7XG4gIGlzQmVmb3JlKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBsZXQgYmVmb3JlO1xuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAoZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcbiAgICAgICAgYmVmb3JlID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGRyYWdFbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBiZWZvcmU7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImRyYWdFbnRyeUl0ZW0iLCJiZWZvcmUiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImdldE5hbWUiLCJkcmFnRW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJNYXJrZXJFbnRyeUl0ZW0iLCJ0eXBlIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NkRBSk87MEJBRWdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEFBQU1BLDZDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxhQUFhO2dCQUNwQixJQUFJQztnQkFFSixJQUFNQyxvQkFBb0JGLGNBQWNHLE9BQU87Z0JBRS9DLE9BQVFEO29CQUNOLEtBQUtFLHFDQUF5Qjt3QkFDNUJILFNBQVM7d0JBRVQ7b0JBRUYsS0FBS0ksMENBQThCO3dCQUNqQyxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsb0JBQW9CUixjQUFjTyxPQUFPO3dCQUUvQ04sU0FBVUssS0FBS0csYUFBYSxDQUFDRCxxQkFBcUI7d0JBRWxEO2dCQUNKO2dCQUVBLE9BQU9QO1lBQ1Q7OztXQXRCbUJIO0VBQXFDWSxlQUFlO0FBd0J2RSxpQkF4Qm1CWiw4QkF3QlphLFFBQU9DLDRDQUFnQztBQUU5QyxpQkExQm1CZCw4QkEwQlplLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=