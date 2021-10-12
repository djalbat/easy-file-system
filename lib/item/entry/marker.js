"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entry = _interopRequireDefault(require("../../item/entry"));
var _marker = _interopRequireDefault(require("../../svg/marker"));
var _marker1 = _interopRequireDefault(require("../../div/entryItem/marker"));
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
                return(/*#__PURE__*/ React.createElement(_marker1.default, {
                    MarkerSVG: MarkerSVG
                }));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJuYW1lcyI6WyJFbnRyeUl0ZW0iLCJNYXJrZXJTVkciLCJNYXJrZXJFbnRyeUl0ZW1EaXYiLCJNYXJrZXJFbnRyeUl0ZW0iLCJnZXRNYXJrZXJTVkciLCJjb25zdHJ1Y3RvciIsImNoaWxkRWxlbWVudHMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFrQixDQUFsQixNQUFrQjtBQUNsQixHQUFrQixDQUFsQixPQUFrQjtBQUNULEdBQTRCLENBQTVCLFFBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRDLGVBQWUsaUJBQXJCLFFBQVE7Y0FBRixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlO2dFQUFmLGVBQWU7O2lCQUFmLGVBQWU7O1lBQ2xDLEdBQVksRUFBWixDQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLEdBQUcsQ0FBQztnQkFDZCxHQUFLLENBQWlCLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQTlCLFNBQVMsR0FBSyxZQUFnQixDQUE5QixTQUFTO2dCQUVqQixNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7WUFFRCxHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWTtnQkFFbkMsTUFBTSxtQ0FacUIsUUFBNEI7b0JBY2pDLFNBQVMsRUFBRSxTQUFTOztZQUc1QyxDQUFDOzs7V0Fma0IsZUFBZTtFQUpkLE1BQWtCO2dCQUluQixlQUFlLEVBaUIzQixDQUFTLFlBcEJJLE9BQWtCO2dCQUduQixlQUFlLEVBbUIzQixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFRO0FBQ3JCLENBQUM7a0JBckJrQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBNYXJrZXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy9tYXJrZXJcIjtcbmltcG9ydCBNYXJrZXJFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uL2Rpdi9lbnRyeUl0ZW0vbWFya2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlckVudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIGdldE1hcmtlclNWRygpIHtcbiAgICBjb25zdCB7IE1hcmtlclNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBNYXJrZXJTVkc7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IE1hcmtlclNWRyA9IHRoaXMuZ2V0TWFya2VyU1ZHKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TWFya2VyRW50cnlJdGVtRGl2IE1hcmtlclNWRz17TWFya2VyU1ZHfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBNYXJrZXJTVkcgPSBNYXJrZXJTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZXJcIlxuICB9O1xufVxuIl19