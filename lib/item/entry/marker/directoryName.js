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
var DirectoryNameMarkerEntryItem = /*#__PURE__*/ function(MarkerEntryItem) {
    _inherits(DirectoryNameMarkerEntryItem, MarkerEntryItem);
    function DirectoryNameMarkerEntryItem() {
        _classCallCheck(this, DirectoryNameMarkerEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameMarkerEntryItem).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lLmpzIl0sIm5hbWVzIjpbIk1hcmtlckVudHJ5SXRlbSIsIkZJTEVfTkFNRV9EUkFHX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImRyYWdFbnRyeUl0ZW0iLCJiZWZvcmUiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwibG9jYWxlQ29tcGFyZSIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBNEIsQ0FBNUIsT0FBNEI7QUFFa0MsR0FBZ0IsQ0FBaEIsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckYsNEJBQTRCLGlCQUFsQyxRQUFRO2NBQUYsNEJBQTRCO2FBQTVCLDRCQUE0Qjs4QkFBNUIsNEJBQTRCO2dFQUE1Qiw0QkFBNEI7O2lCQUE1Qiw0QkFBNEI7O1lBQy9DLEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxNQUFNO2dCQUVWLEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsT0FBTztnQkFFL0MsTUFBTSxDQUFFLGlCQUFpQjtvQkFDdkIsSUFBSSxDQVRnRixNQUFnQjt3QkFVbEcsTUFBTSxHQUFHLElBQUk7d0JBRWIsS0FBSztvQkFFUCxJQUFJLENBZGdGLE1BQWdCO3dCQWVsRyxHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ25CLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxPQUFPO3dCQUUvQyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDO3dCQUVuRCxLQUFLOztnQkFHVCxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztXQXRCa0IsNEJBQTRCO0VBSnJCLE9BQTRCO2dCQUluQyw0QkFBNEIsR0F3QnhDLElBQUksR0ExQjZFLE1BQWdCO2dCQUVyRiw0QkFBNEIsR0EwQnhDLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLGNBQWdCO0FBQzdCLENBQUM7a0JBNUJrQiw0QkFBNEIifQ==