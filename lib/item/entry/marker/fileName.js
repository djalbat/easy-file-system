"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _marker = _interopRequireDefault(require("../../../item/entry/marker"));
var _name = require("../../../utilities/name");
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
var FileNameMarkerEntryItem = /*#__PURE__*/ function(MarkerEntryItem) {
    _inherits(FileNameMarkerEntryItem, MarkerEntryItem);
    var _super = _createSuper(FileNameMarkerEntryItem);
    function FileNameMarkerEntryItem() {
        _classCallCheck(this, FileNameMarkerEntryItem);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameMarkerEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(dragEntryItem) {
                var before;
                var dragEntryItemType = dragEntryItem.getType();
                switch(dragEntryItemType){
                    case _types.FILE_NAME_DRAG_TYPE:
                        var name = this.getName(), dragEntryItemName = dragEntryItem.getName();
                        before = (0, _name).nameIsBeforeEntryItemName(name, dragEntryItemName);
                        break;
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        before = false;
                        break;
                }
                return before;
            }
        }
    ]);
    return FileNameMarkerEntryItem;
}(_marker.default);
_defineProperty(FileNameMarkerEntryItem, "type", _types.FILE_NAME_MARKER_TYPE);
_defineProperty(FileNameMarkerEntryItem, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameMarkerEntryItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9tYXJrZXJcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZXh0ZW5kcyBNYXJrZXJFbnRyeUl0ZW0ge1xuICBpc0JlZm9yZShkcmFnRW50cnlJdGVtKSB7XG4gICAgbGV0IGJlZm9yZTtcblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGRyYWdFbnRyeUl0ZW1OYW1lKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG4gICAgICAgIGJlZm9yZSA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBiZWZvcmU7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9NQVJLRVJfVFlQRTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImRyYWdFbnRyeUl0ZW0iLCJiZWZvcmUiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUE0QixDQUE1QixPQUE0QjtBQUVkLEdBQXlCLENBQXpCLEtBQXlCO0FBQ2tCLEdBQWdCLENBQWhCLE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRkEsdUJBQXVCLGlCQUE3QixRQUFRO2NBQUZBLHVCQUF1Qjs4QkFBdkJBLHVCQUF1QjthQUF2QkEsdUJBQXVCOzhCQUF2QkEsdUJBQXVCOzs7aUJBQXZCQSx1QkFBdUI7O1lBQzFDQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkIsR0FBRyxDQUFDQyxNQUFNO2dCQUVWLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUdGLGFBQWEsQ0FBQ0csT0FBTztnQkFFL0MsTUFBTSxDQUFFRCxpQkFBaUI7b0JBQ3ZCLElBQUksQ0FUMkUsTUFBZ0I7d0JBVTdGLEdBQUssQ0FBQ0UsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsaUJBQWlCLEdBQUdOLGFBQWEsQ0FBQ0ssT0FBTzt3QkFFL0NKLE1BQU0sT0FkNEIsS0FBeUIsNEJBY3hCRyxJQUFJLEVBQUVFLGlCQUFpQjt3QkFFMUQsS0FBSztvQkFFUCxJQUFJLENBakIyRSxNQUFnQjt3QkFrQjdGTCxNQUFNLEdBQUcsS0FBSzt3QkFFZCxLQUFLOztnQkFHVCxNQUFNLENBQUNBLE1BQU07WUFDZixDQUFDOzs7V0F0QmtCSCx1QkFBdUI7RUFMaEIsT0FBNEI7Z0JBS25DQSx1QkFBdUIsRUF3Qm5DUyxDQUFJLE9BMUJ3RSxNQUFnQjtnQkFFaEZULHVCQUF1QixFQTBCbkNVLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUM7a0JBNUJrQlgsdUJBQXVCIn0=