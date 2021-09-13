"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _styles = require("../../styles");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  fill: none;\n  width: auto;\n  height: ",
        ";\n  stroke: #000000;\n  display: inline;\n  margin-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameEntryItemSVG = /*#__PURE__*/ function(Element) {
    _inherits(DirectoryNameEntryItemSVG, Element);
    function DirectoryNameEntryItemSVG() {
        _classCallCheck(this, DirectoryNameEntryItemSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameEntryItemSVG).apply(this, arguments));
    }
    _createClass(DirectoryNameEntryItemSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 168,32 v 22 h 26 V 38 h -26"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 166,32 h 12 l 6,6"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 169,35 h 11"
                })));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showDirectoryNameEntryItemSVG = this.show.bind(this), hideDirectoryNameEntryItemSVG = this.hide.bind(this); ///
                return {
                    showDirectoryNameEntryItemSVG: showDirectoryNameEntryItemSVG,
                    hideDirectoryNameEntryItemSVG: hideDirectoryNameEntryItemSVG
                };
            }
        }
    ]);
    return DirectoryNameEntryItemSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(DirectoryNameEntryItemSVG, "tagName", "svg");
_defineProperty(DirectoryNameEntryItemSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "165 25 32 32",
    className: "directory-name"
});
var _default = (0, _easyWithStyle).default(DirectoryNameEntryItemSVG)(_templateObject(), _styles.entryItemSVGHeight, _styles.dragEntryItemSVGMarginRight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWUuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsImVudHJ5SXRlbVNWR0hlaWdodCIsImRyYWdFbnRyeUl0ZW1TVkdNYXJnaW5SaWdodCIsIkRpcmVjdG9yeU5hbWVFbnRyeUl0ZW1TVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0RpcmVjdG9yeU5hbWVFbnRyeUl0ZW1TVkciLCJzaG93IiwiYmluZCIsImhpZGVEaXJlY3RvcnlOYW1lRW50cnlJdGVtU1ZHIiwiaGlkZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRWtDLEdBQWMsQ0FBZCxPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1DMUIsNkNBSTFDO1NBQXFCLDJEQUdmO1NBQThCLGtDQUc5Qzs7Ozs7OztJQTNDTSx5QkFBeUIsaUJBQS9CLFFBQVE7Y0FBRix5QkFBeUI7YUFBekIseUJBQXlCOzhCQUF6Qix5QkFBeUI7Z0VBQXpCLHlCQUF5Qjs7aUJBQXpCLHlCQUF5Qjs7WUFDN0IsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sb0NBRUgsQ0FBQyw0Q0FDQyxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsNkJBQStCO3VEQUM3RCxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsbUJBQXFCO3VEQUNuRCxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsYUFBZTs7WUFJcEQsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ25ELDZCQUE2QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRS9ELE1BQU0sQ0FBRSxDQUFDO29CQUNQLDZCQUE2QixFQUE3Qiw2QkFBNkI7b0JBQzdCLDZCQUE2QixFQUE3Qiw2QkFBNkI7Z0JBQy9CLENBQUM7WUFDSCxDQUFDOzs7V0FyQkcseUJBQXlCO21CQUpQLEtBQU07Z0JBSXhCLHlCQUF5QixHQXVCdEIsT0FBTyxJQUFHLEdBQUs7Z0JBdkJsQix5QkFBeUIsR0F5QnRCLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsS0FBSyxHQUFFLEVBQUk7SUFDWCxNQUFNLEdBQUUsRUFBSTtJQUNaLE9BQU8sR0FBRSxZQUFjO0lBQ3ZCLFNBQVMsR0FBRSxjQUFnQjtBQUM3QixDQUFDO21CQXBDbUIsY0FBaUIsVUF1Q2QseUJBQXlCLHFCQW5DYyxPQUFjLHFCQUFkLE9BQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBlbnRyeUl0ZW1TVkdIZWlnaHQsIGRyYWdFbnRyeUl0ZW1TVkdNYXJnaW5SaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgRGlyZWN0b3J5TmFtZUVudHJ5SXRlbVNWRyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTY4LDMyIHYgMjIgaCAyNiBWIDM4IGggLTI2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE2NiwzMiBoIDEyIGwgNiw2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE2OSwzNSBoIDExXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dEaXJlY3RvcnlOYW1lRW50cnlJdGVtU1ZHID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVEaXJlY3RvcnlOYW1lRW50cnlJdGVtU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RGlyZWN0b3J5TmFtZUVudHJ5SXRlbVNWRyxcbiAgICAgIGhpZGVEaXJlY3RvcnlOYW1lRW50cnlJdGVtU1ZHXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjMyXCIsXG4gICAgdmlld0JveDogXCIxNjUgMjUgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXJlY3RvcnlOYW1lRW50cnlJdGVtU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke2VudHJ5SXRlbVNWR0hlaWdodH07XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6ICR7ZHJhZ0VudHJ5SXRlbVNWR01hcmdpblJpZ2h0fTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl19