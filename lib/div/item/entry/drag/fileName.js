"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameDragEntryItemDiv;
    }
});
var _drag = /*#__PURE__*/ _interopRequireDefault(require("../../../../div/item/entry/drag"));
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
var FileNameDragEntryItemDiv = /*#__PURE__*/ function(DragEntryItemDiv) {
    _inherits(FileNameDragEntryItemDiv, DragEntryItemDiv);
    var _super = _createSuper(FileNameDragEntryItemDiv);
    function FileNameDragEntryItemDiv() {
        _classCallCheck(this, FileNameDragEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "doubleClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), dragEntryItem = _this.getDragEntryItem(), fileNameDragEntryItem = dragEntryItem; ///
            explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
        });
        return _this;
    }
    _createClass(FileNameDragEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameSpan = _this_properties.NameSpan, FileNameSVG = _this_properties.FileNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(FileNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameSpan, null, name)
                ];
            }
        }
    ]);
    return FileNameDragEntryItemDiv;
}(_drag.default);
_defineProperty(FileNameDragEntryItemDiv, "ignoredProperties", [
    "FileNameSVG"
]);
_defineProperty(FileNameDragEntryItemDiv, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRHJhZ0VudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZHJhZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBEcmFnRW50cnlJdGVtRGl2IHtcbiAgZG91YmxlQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0RHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07XHQvLy9cblxuICAgIGV4cGxvcmVyLm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lU3BhbiwgRmlsZU5hbWVTVkcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8RmlsZU5hbWVTVkcvPixcbiAgICAgIDxOYW1lU3Bhbj5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVTcGFuPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJGaWxlTmFtZVNWR1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsImdldERyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJuYW1lIiwiTmFtZVNwYW4iLCJGaWxlTmFtZVNWRyIsIkRyYWdFbnRyeUl0ZW1EaXYiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5REFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNuQkMsK0NBQUFBLHNCQUFxQixTQUFDQyxPQUFPQyxTQUFZO1lBQ3ZDLElBQU1DLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ0Msd0JBQXdCRixlQUFlLEdBQUc7WUFFaERGLFNBQVNLLHlCQUF5QixDQUFDRDtRQUNyQzs7O2lCQVBtQlI7O1lBU25CVSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQXdDLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUEvQ0MsT0FBZ0MsaUJBQWhDQSxNQUFNQyxXQUEwQixpQkFBMUJBLFVBQVVDLGNBQWdCLGlCQUFoQkE7Z0JBRXhCLE9BQVE7a0NBRU4sb0JBQUNBO2tDQUNELG9CQUFDRCxnQkFDRUQ7aUJBR0o7WUFDSDs7O1dBcEJtQlo7RUFBaUNlLGFBQWdCO0FBc0JwRSxnQkF0Qm1CZiwwQkFzQlpnQixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGdCQTFCbUJoQiwwQkEwQlppQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9