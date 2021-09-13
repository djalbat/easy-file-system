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
        "\n\n  fill:none;\n  width: auto;\n  height: ",
        ";\n  stroke:#000000;\n  display: inline;\n  margin-left: ",
        ";\n  margin-right: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameEntryItemSVG = /*#__PURE__*/ function(Element) {
    _inherits(FileNameEntryItemSVG, Element);
    function FileNameEntryItemSVG() {
        _classCallCheck(this, FileNameEntryItemSVG);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameEntryItemSVG).apply(this, arguments));
    }
    _createClass(FileNameEntryItemSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 142,34 v 8 h 8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 128,34 v 26 h 22 V 42 l -8,-8 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 143,40 h 3"
                })));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showFileNameEntryItemSVG = this.show.bind(this), hideFileNameEntryItemSVG = this.hide.bind(this); ///
                return {
                    showFileNameEntryItemSVG: showFileNameEntryItemSVG,
                    hideFileNameEntryItemSVG: hideFileNameEntryItemSVG
                };
            }
        }
    ]);
    return FileNameEntryItemSVG;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(FileNameEntryItemSVG, "tagName", "svg");
_defineProperty(FileNameEntryItemSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "121 31 32 32",
    className: "file-name"
});
var _default = (0, _easyWithStyle).default(FileNameEntryItemSVG)(_templateObject(), _styles.entryItemSVGHeight, _styles.fileNameEntryItemSVGMarginLeft, _styles.dragEntryItemSVGMarginRight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvZW50cnlJdGVtL2ZpbGVOYW1lLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJlbnRyeUl0ZW1TVkdIZWlnaHQiLCJkcmFnRW50cnlJdGVtU1ZHTWFyZ2luUmlnaHQiLCJmaWxlTmFtZUVudHJ5SXRlbVNWR01hcmdpbkxlZnQiLCJGaWxlTmFtZUVudHJ5SXRlbVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicGF0aCIsInN0eWxlIiwiZCIsInBhcmVudENvbnRleHQiLCJzaG93RmlsZU5hbWVFbnRyeUl0ZW1TVkciLCJzaG93IiwiYmluZCIsImhpZGVGaWxlTmFtZUVudHJ5SXRlbVNWRyIsImhpZGUiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVrRSxHQUFjLENBQWQsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtQy9ELDRDQUlyQztTQUFxQix5REFHaEI7U0FBaUMsbUJBQ2hDO1NBQThCLGtDQUc5Qzs7Ozs7OztJQTVDTSxvQkFBb0IsaUJBQTFCLFFBQVE7Y0FBRixvQkFBb0I7YUFBcEIsb0JBQW9COzhCQUFwQixvQkFBb0I7Z0VBQXBCLG9CQUFvQjs7aUJBQXBCLG9CQUFvQjs7WUFDeEIsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sb0NBRUgsQ0FBQyw0Q0FDQyxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsZ0JBQWtCO3VEQUNoRCxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsaUNBQW1DO3VEQUNqRSxJQUFJO29CQUFDLEtBQUssR0FBQyxjQUFnQjtvQkFBQyxDQUFDLEdBQUMsWUFBYzs7WUFJbkQsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQzlDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTFELE1BQU0sQ0FBRSxDQUFDO29CQUNQLHdCQUF3QixFQUF4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QixFQUF4Qix3QkFBd0I7Z0JBQzFCLENBQUM7WUFDSCxDQUFDOzs7V0FyQkcsb0JBQW9CO21CQUpGLEtBQU07Z0JBSXhCLG9CQUFvQixHQXVCakIsT0FBTyxJQUFHLEdBQUs7Z0JBdkJsQixvQkFBb0IsR0F5QmpCLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsS0FBSyxHQUFFLEVBQUk7SUFDWCxNQUFNLEdBQUUsRUFBSTtJQUNaLE9BQU8sR0FBRSxZQUFjO0lBQ3ZCLFNBQVMsR0FBRSxTQUFXO0FBQ3hCLENBQUM7bUJBcENtQixjQUFpQixVQXVDZCxvQkFBb0IscUJBbkNtRCxPQUFjLHFCQUFkLE9BQWMsaUNBQWQsT0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgZW50cnlJdGVtU1ZHSGVpZ2h0LCBkcmFnRW50cnlJdGVtU1ZHTWFyZ2luUmlnaHQsIGZpbGVOYW1lRW50cnlJdGVtU1ZHTWFyZ2luTGVmdCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgRmlsZU5hbWVFbnRyeUl0ZW1TVkcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE0MiwzNCB2IDggaCA4XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDEyOCwzNCB2IDI2IGggMjIgViA0MiBsIC04LC04IHpcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTQzLDQwIGggM1wiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RmlsZU5hbWVFbnRyeUl0ZW1TVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZUZpbGVOYW1lRW50cnlJdGVtU1ZHID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RmlsZU5hbWVFbnRyeUl0ZW1TVkcsXG4gICAgICBoaWRlRmlsZU5hbWVFbnRyeUl0ZW1TVkdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzdmdcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgd2lkdGg6IFwiMzJcIixcbiAgICBoZWlnaHQ6IFwiMzJcIixcbiAgICB2aWV3Qm94OiBcIjEyMSAzMSAzMiAzMlwiLFxuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShGaWxlTmFtZUVudHJ5SXRlbVNWRylgXG5cbiAgZmlsbDpub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAke2VudHJ5SXRlbVNWR0hlaWdodH07XG4gIHN0cm9rZTojMDAwMDAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAke2ZpbGVOYW1lRW50cnlJdGVtU1ZHTWFyZ2luTGVmdH07XG4gIG1hcmdpbi1yaWdodDogJHtkcmFnRW50cnlJdGVtU1ZHTWFyZ2luUmlnaHR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXX0=