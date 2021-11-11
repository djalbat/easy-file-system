"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _marker = _interopRequireDefault(require("../../../item/entry/marker"));
var _types = require("../../../types");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var DirectoryNameMarkerEntryItem = /*#__PURE__*/ function(MarkerEntryItem) {
    _inherits(DirectoryNameMarkerEntryItem, MarkerEntryItem);
    var _super = _createSuper(DirectoryNameMarkerEntryItem);
    function DirectoryNameMarkerEntryItem() {
        _classCallCheck(this, DirectoryNameMarkerEntryItem);
        return _super.apply(this, arguments);
    }
    _createClass(DirectoryNameMarkerEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(dragEntryItem) {
                var before;
                var dragEntryItemType = dragEntryItem.getType();
                switch(dragEntryItemType){
                    case _types.FILE_NAME_DRAG_TYPE:
                        before = true;
                        break;
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
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
_defineProperty(DirectoryNameMarkerEntryItem, "type", _types.DIRECTORY_NAME_MARKER_TYPE);
_defineProperty(DirectoryNameMarkerEntryItem, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameMarkerEntryItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2VyRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L21hcmtlclwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZXh0ZW5kcyBNYXJrZXJFbnRyeUl0ZW0ge1xuICBpc0JlZm9yZShkcmFnRW50cnlJdGVtKSB7XG4gICAgbGV0IGJlZm9yZTtcblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG4gICAgICAgIGJlZm9yZSA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFOlxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgICAgYmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShkcmFnRW50cnlJdGVtTmFtZSkgPCAwKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYmVmb3JlO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJkcmFnRW50cnlJdGVtIiwiYmVmb3JlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwibmFtZSIsImdldE5hbWUiLCJkcmFnRW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQTRCLENBQTVCLE9BQTRCO0FBRWtDLEdBQWdCLENBQWhCLE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyRkEsNEJBQTRCLGlCQUFsQyxRQUFRO2NBQUZBLDRCQUE0Qjs4QkFBNUJBLDRCQUE0QjthQUE1QkEsNEJBQTRCOzhCQUE1QkEsNEJBQTRCOzs7aUJBQTVCQSw0QkFBNEI7O1lBQy9DQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkIsR0FBRyxDQUFDQyxNQUFNO2dCQUVWLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUdGLGFBQWEsQ0FBQ0csT0FBTztnQkFFL0MsTUFBTSxDQUFFRCxpQkFBaUI7b0JBQ3ZCLElBQUksQ0FUZ0YsTUFBZ0I7d0JBVWxHRCxNQUFNLEdBQUcsSUFBSTt3QkFFYixLQUFLO29CQUVQLElBQUksQ0FkZ0YsTUFBZ0I7d0JBZWxHLEdBQUssQ0FBQ0csSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsaUJBQWlCLEdBQUdOLGFBQWEsQ0FBQ0ssT0FBTzt3QkFFL0NKLE1BQU0sR0FBSUcsSUFBSSxDQUFDRyxhQUFhLENBQUNELGlCQUFpQixJQUFJLENBQUM7d0JBRW5ELEtBQUs7O2dCQUdULE1BQU0sQ0FBQ0wsTUFBTTtZQUNmLENBQUM7OztXQXRCa0JILDRCQUE0QjtFQUpyQixPQUE0QjtnQkFJbkNBLDRCQUE0QixFQXdCeENVLENBQUksT0ExQjZFLE1BQWdCO2dCQUVyRlYsNEJBQTRCLEVBMEJ4Q1csQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQWdCO0FBQzdCLENBQUM7a0JBNUJrQlosNEJBQTRCIn0=