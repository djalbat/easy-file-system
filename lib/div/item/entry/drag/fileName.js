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
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameSpan = _this_properties.NameSpan, FileNameSVG = _this_properties.FileNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(FileNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameSpan, null, name),
                    /*#__PURE__*/ React.createElement(NameInput, null, name)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRHJhZ0VudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZHJhZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBEcmFnRW50cnlJdGVtRGl2IHtcbiAgZG91YmxlQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0RHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07XHQvLy9cblxuICAgIGV4cGxvcmVyLm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lSW5wdXQsIE5hbWVTcGFuLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxGaWxlTmFtZVNWRy8+LFxuICAgICAgPE5hbWVTcGFuPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZVNwYW4+LFxuICAgICAgPE5hbWVJbnB1dD5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWVJbnB1dD5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiRmlsZU5hbWVTVkdcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJnZXREcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk5hbWVJbnB1dCIsIk5hbWVTcGFuIiwiRmlsZU5hbWVTVkciLCJEcmFnRW50cnlJdGVtRGl2IiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eURBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx5Q0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJDLCtDQUFBQSxzQkFBcUIsU0FBQ0MsT0FBT0MsU0FBWTtZQUN2QyxJQUFNQyxXQUFXLE1BQUtDLFdBQVcsSUFDM0JDLGdCQUFnQixNQUFLQyxnQkFBZ0IsSUFDckNDLHdCQUF3QkYsZUFBZSxHQUFHO1lBRWhERixTQUFTSyx5QkFBeUIsQ0FBQ0Q7UUFDckM7OztpQkFQbUJSOztZQVNuQlUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFtRCxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBMURDLE9BQTJDLGlCQUEzQ0EsTUFBTUMsWUFBcUMsaUJBQXJDQSxXQUFXQyxXQUEwQixpQkFBMUJBLFVBQVVDLGNBQWdCLGlCQUFoQkE7Z0JBRW5DLE9BQVE7a0NBRU4sb0JBQUNBO2tDQUNELG9CQUFDRCxnQkFDRUY7a0NBRUgsb0JBQUNDLGlCQUNFRDtpQkFHSjtZQUNIOzs7V0F2Qm1CWjtFQUFpQ2dCLGFBQWdCO0FBeUJwRSxnQkF6Qm1CaEIsMEJBeUJaaUIscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxnQkE3Qm1CakIsMEJBNkJaa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==