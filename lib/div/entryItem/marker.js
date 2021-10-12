"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _entryItem = _interopRequireDefault(require("../../div/entryItem"));
var _background = _interopRequireDefault(require("../../div/background"));
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
var MarkerEntryItemDiv = /*#__PURE__*/ function(EntryItemDiv) {
    _inherits(MarkerEntryItemDiv, EntryItemDiv);
    function MarkerEntryItemDiv() {
        _classCallCheck(this, MarkerEntryItemDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryItemDiv).apply(this, arguments));
    }
    _createClass(MarkerEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, MarkerSVG = _properties.MarkerSVG;
                return [
                    /*#__PURE__*/ React.createElement(MarkerSVG, null),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return MarkerEntryItemDiv;
}(_entryItem.default);
_defineProperty(MarkerEntryItemDiv, "defaultProperties", {
    className: "file-name"
});
exports.default = MarkerEntryItemDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnlJdGVtL21hcmtlci5qcyJdLCJuYW1lcyI6WyJFbnRyeUl0ZW1EaXYiLCJCYWNrZ3JvdW5kRGl2IiwiTWFya2VyRW50cnlJdGVtRGl2IiwiY2hpbGRFbGVtZW50cyIsIk1hcmtlclNWRyIsInByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFxQixDQUFyQixVQUFxQjtBQUNwQixHQUFzQixDQUF0QixXQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQixrQkFBa0IsaUJBQXhCLFFBQVE7Y0FBRixrQkFBa0I7YUFBbEIsa0JBQWtCOzhCQUFsQixrQkFBa0I7Z0VBQWxCLGtCQUFrQjs7aUJBQWxCLGtCQUFrQjs7WUFDckMsR0FBYSxFQUFiLENBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBaUIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQTdCLFNBQVMsR0FBSyxXQUFlLENBQTdCLFNBQVM7Z0JBRWpCLE1BQU0sQ0FBRSxDQUFDO3NEQUVOLFNBQVM7c0RBUlUsV0FBc0I7Z0JBVzVDLENBQUM7WUFDSCxDQUFDOzs7V0FWa0Isa0JBQWtCO0VBSGQsVUFBcUI7Z0JBR3pCLGtCQUFrQixFQVk5QixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFXO0FBQ3hCLENBQUM7a0JBZGtCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi9kaXYvZW50cnlJdGVtXCI7XG5pbXBvcnQgQmFja2dyb3VuZERpdiBmcm9tIFwiLi4vLi4vZGl2L2JhY2tncm91bmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VyRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE1hcmtlclNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNYXJrZXJTVkcvPixcbiAgICAgIDxCYWNrZ3JvdW5kRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIl19