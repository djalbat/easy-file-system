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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
var MarkerEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(MarkerEntryItem, EntryItem);
    var _super = _createSuper(MarkerEntryItem);
    function MarkerEntryItem() {
        _classCallCheck(this, MarkerEntryItem);
        return _super.apply(this, arguments);
    }
    _createClass(MarkerEntryItem, [
        {
            key: "getMarkerSVG",
            value: function getMarkerSVG() {
                var _$MarkerSVG = this.constructor.MarkerSVG;
                return _$MarkerSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _$MarkerSVG = this.getMarkerSVG();
                return /*#__PURE__*/ React.createElement(_marker1.default, {
                    MarkerSVG: _$MarkerSVG
                });
            }
        }
    ]);
    return MarkerEntryItem;
}(_entry.default);
exports.default = MarkerEntryItem;
_defineProperty(MarkerEntryItem, "MarkerSVG", _marker.default);
_defineProperty(MarkerEntryItem, "defaultProperties", {
    className: "marker"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuaW1wb3J0IE1hcmtlclNWRyBmcm9tIFwiLi4vLi4vc3ZnL21hcmtlclwiO1xuaW1wb3J0IE1hcmtlckVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vZGl2L2VudHJ5SXRlbS9tYXJrZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VyRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgZ2V0TWFya2VyU1ZHKCkge1xuICAgIGNvbnN0IHsgTWFya2VyU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIE1hcmtlclNWRztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgTWFya2VyU1ZHID0gdGhpcy5nZXRNYXJrZXJTVkcoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxNYXJrZXJFbnRyeUl0ZW1EaXYgTWFya2VyU1ZHPXtNYXJrZXJTVkd9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIE1hcmtlclNWRyA9IE1hcmtlclNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1hcmtlclwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTWFya2VyRW50cnlJdGVtIiwiZ2V0TWFya2VyU1ZHIiwiTWFya2VyU1ZHIiwiY29uc3RydWN0b3IiLCJjaGlsZEVsZW1lbnRzIiwiTWFya2VyRW50cnlJdGVtRGl2IiwiRW50cnlJdGVtIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFrQixDQUFsQixNQUFrQjtBQUNsQixHQUFrQixDQUFsQixPQUFrQjtBQUNULEdBQTRCLENBQTVCLFFBQTRCOzs7Ozs7Ozs7Ozs7Ozs7OERBSjNEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxHQUFLLENBQUNBLGVBQWUsaUJBQXJCLFFBQVE7eUNBTnZCOzthQU1xQkEsZUFBZTs4Q0FOcEM7Ozs7O1lBT0VDLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxHQUFLLENBQUdDLFdBQVMsR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBOUJELFNBQVM7Z0JBRWpCLE1BQU0sQ0FBQ0EsV0FBUztZQUNsQixDQUFDOzs7WUFFREUsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ0YsV0FBUyxHQUFHLElBQUksQ0FBQ0QsWUFBWTtnQkFFbkMsTUFBTSxtQ0FFSEksUUFBa0I7b0JBQUNILFNBQVMsRUFBRUEsV0FBUzs7WUFHNUMsQ0FBQzs7TUFyQkg7O0VBTTZDSSxNQUFTO2tCQUFqQ04sZUFBZSxBQU5wQztnQkFNcUJBLGVBQWUsRUFpQjNCRSxDQUFTLFlBQUdBLE9BQVMsU0F2QjlCO2dCQU1xQkYsZUFBZSxFQW1CM0JPLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFRO0FBQ3JCLENBQUMsQ0EzQkgifQ==