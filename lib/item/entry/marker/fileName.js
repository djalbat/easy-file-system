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
var FileNameMarkerEntryItem = /*#__PURE__*/ function(MarkerEntryItem) {
    _inherits(FileNameMarkerEntryItem, MarkerEntryItem);
    function FileNameMarkerEntryItem() {
        _classCallCheck(this, FileNameMarkerEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameMarkerEntryItem).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJNYXJrZXJFbnRyeUl0ZW0iLCJuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lIiwiRklMRV9OQU1FX0RSQUdfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJkcmFnRW50cnlJdGVtIiwiYmVmb3JlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwibmFtZSIsImdldE5hbWUiLCJkcmFnRW50cnlJdGVtTmFtZSIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBNEIsQ0FBNUIsT0FBNEI7QUFFZCxHQUF5QixDQUF6QixLQUF5QjtBQUNrQixHQUFnQixDQUFoQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRix1QkFBdUIsaUJBQTdCLFFBQVE7Y0FBRix1QkFBdUI7YUFBdkIsdUJBQXVCOzhCQUF2Qix1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7aUJBQXZCLHVCQUF1Qjs7WUFDMUMsR0FBUSxFQUFSLENBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkIsR0FBRyxDQUFDLE1BQU07Z0JBRVYsR0FBSyxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxPQUFPO2dCQUUvQyxNQUFNLENBQUUsaUJBQWlCO29CQUN2QixJQUFJLENBVDJFLE1BQWdCO3dCQVU3RixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ25CLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxPQUFPO3dCQUUvQyxNQUFNLE9BZDRCLEtBQXlCLDRCQWN4QixJQUFJLEVBQUUsaUJBQWlCO3dCQUUxRCxLQUFLO29CQUVQLElBQUksQ0FqQjJFLE1BQWdCO3dCQWtCN0YsTUFBTSxHQUFHLEtBQUs7d0JBRWQsS0FBSzs7Z0JBR1QsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7V0F0QmtCLHVCQUF1QjtFQUxoQixPQUE0QjtnQkFLbkMsdUJBQXVCLEVBd0JuQyxDQUFJLE9BMUJ3RSxNQUFnQjtnQkFFaEYsdUJBQXVCLEVBMEJuQyxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUM7a0JBNUJrQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9tYXJrZXJcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZXh0ZW5kcyBNYXJrZXJFbnRyeUl0ZW0ge1xuICBpc0JlZm9yZShkcmFnRW50cnlJdGVtKSB7XG4gICAgbGV0IGJlZm9yZTtcblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGRyYWdFbnRyeUl0ZW1OYW1lKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG4gICAgICAgIGJlZm9yZSA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBiZWZvcmU7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9NQVJLRVJfVFlQRTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iXX0=