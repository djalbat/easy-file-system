"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rubbishBin = _interopRequireDefault(require("../../div/rubbishBin"));
var _open = _interopRequireDefault(require("../../svg/rubbishBin/open"));
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
var OpenRubbishBinDiv = /*#__PURE__*/ function(RubbishBinDiv) {
    _inherits(OpenRubbishBinDiv, RubbishBinDiv);
    function OpenRubbishBinDiv() {
        _classCallCheck(this, OpenRubbishBinDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(OpenRubbishBinDiv).apply(this, arguments));
    }
    _createClass(OpenRubbishBinDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement(_open.default, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showOpenRubbishBinDiv = this.show.bind(this), hideOpenRubbishBinDiv = this.hide.bind(this);
                return {
                    showOpenRubbishBinDiv: showOpenRubbishBinDiv,
                    hideOpenRubbishBinDiv: hideOpenRubbishBinDiv
                };
            }
        }
    ]);
    return OpenRubbishBinDiv;
}(_rubbishBin.default);
_defineProperty(OpenRubbishBinDiv, "tagName", "div");
_defineProperty(OpenRubbishBinDiv, "defaultProperties", {
    className: "open"
});
exports.default = OpenRubbishBinDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnViYmlzaEJpbkRpdiBmcm9tIFwiLi4vLi4vZGl2L3J1YmJpc2hCaW5cIlxuaW1wb3J0IE9wZW5SdWJiaXNoQmluU1ZHIGZyb20gXCIuLi8uLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5SdWJiaXNoQmluRGl2IGV4dGVuZHMgUnViYmlzaEJpbkRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPE9wZW5SdWJiaXNoQmluU1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dPcGVuUnViYmlzaEJpbkRpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhpZGVPcGVuUnViYmlzaEJpbkRpdiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93T3BlblJ1YmJpc2hCaW5EaXYsXG4gICAgICBoaWRlT3BlblJ1YmJpc2hCaW5EaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm9wZW5cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWMsV0FBc0I7SUFDbEIsS0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEMsaUJBQWlCO2NBQWpCLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztpQkFBakIsaUJBQWlCOztZQUNwQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO3lEQUhlLEtBQTJCOzs7O1lBV3ZELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wscUJBQXFCLFFBQVEsSUFBSSxDQUFDLElBQUksUUFDdEMscUJBQXFCLFFBQVEsSUFBSSxDQUFDLElBQUk7O29CQUcxQyxxQkFBcUIsRUFBckIscUJBQXFCO29CQUNyQixxQkFBcUIsRUFBckIscUJBQXFCOzs7OztXQWZOLGlCQUFpQjtFQUhaLFdBQXNCO2dCQUczQixpQkFBaUIsR0FtQjdCLE9BQU8sSUFBRyxHQUFLO2dCQW5CSCxpQkFBaUIsR0FxQjdCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7a0JBdEJBLGlCQUFpQiJ9