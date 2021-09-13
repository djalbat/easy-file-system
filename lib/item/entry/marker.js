"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entry = _interopRequireDefault(require("../../item/entry"));
var _marker = _interopRequireDefault(require("../../svg/entryItem/marker"));
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
var MarkerEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(MarkerEntryItem, EntryItem);
    function MarkerEntryItem() {
        _classCallCheck(this, MarkerEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryItem).apply(this, arguments));
    }
    _createClass(MarkerEntryItem, [
        {
            key: "getMarkerSVG",
            value: function getMarkerSVG() {
                var _constructor = this.constructor, MarkerSVG = _constructor.MarkerSVG;
                return MarkerSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var MarkerSVG = this.getMarkerSVG();
                return(/*#__PURE__*/ React.createElement(MarkerSVG, null));
            }
        }
    ]);
    return MarkerEntryItem;
}(_entry.default);
_defineProperty(MarkerEntryItem, "MarkerSVG", _marker.default);
_defineProperty(MarkerEntryItem, "defaultProperties", {
    className: "marker"
});
exports.default = MarkerEntryItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuaW1wb3J0IE1hcmtlclNWRyBmcm9tIFwiLi4vLi4vc3ZnL2VudHJ5SXRlbS9tYXJrZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VyRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgZ2V0TWFya2VyU1ZHKCkge1xuICAgIGNvbnN0IHsgTWFya2VyU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIE1hcmtlclNWRztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgTWFya2VyU1ZHID0gdGhpcy5nZXRNYXJrZXJTVkcoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxNYXJrZXJTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBNYXJrZXJTVkcgPSBNYXJrZXJTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZXJcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsTUFBa0I7SUFDbEIsT0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsZUFBZTtjQUFmLGVBQWU7YUFBZixlQUFlOzhCQUFmLGVBQWU7Z0VBQWYsZUFBZTs7aUJBQWYsZUFBZTs7WUFDbEMsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWTtvQkFDWSxZQUFnQixRQUFYLFdBQVcsRUFBOUIsU0FBUyxHQUFLLFlBQWdCLENBQTlCLFNBQVM7dUJBRVYsU0FBUzs7OztZQUdsQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLFNBQVMsUUFBUSxZQUFZO3lEQUloQyxTQUFTOzs7O1dBWkssZUFBZTtFQUhkLE1BQWtCO2dCQUduQixlQUFlLEdBaUIzQixTQUFTLEdBbkJJLE9BQTRCO2dCQUU3QixlQUFlLEdBbUIzQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O2tCQXBCRixlQUFlIn0=