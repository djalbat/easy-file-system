"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _explorer = _interopRequireDefault(require("./explorer"));
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
        "\n\n  padding: 10rem;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element1) {
    _inherits(View, Element1);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                var explorer1 = /*#__PURE__*/ React.createElement(_explorer.default, {
                    label: 1,
                    onMove: moveHandler1
                }), explorer2 = /*#__PURE__*/ React.createElement(_explorer.default, {
                    label: 2,
                    onMove: moveHandler2
                });
                explorer1.addFilePath("directory1/file3.txt");
                explorer2.addFilePath("file4.txt");
                explorer2.addDirectoryPath("directory2");
                return [
                    explorer1,
                    explorer2
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
function moveHandler1(pathMaps, done) {
    ///
    done();
}
function moveHandler2(pathMaps, done) {
    ///
    done();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRXhwbG9yZXIgZnJvbSBcIi4vZXhwbG9yZXJcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyMSA9XG5cbiAgICAgICAgICAgIDxFeHBsb3JlciBsYWJlbD17MX0gb25Nb3ZlPXttb3ZlSGFuZGxlcjF9IC8+XG5cbiAgICAgICAgICAsXG4gICAgICAgICAgZXhwbG9yZXIyID1cblxuICAgICAgICAgICAgPEV4cGxvcmVyIGxhYmVsPXsyfSBvbk1vdmU9e21vdmVIYW5kbGVyMn0gLz5cblxuICAgICAgICAgIDtcblxuXHRcdGV4cGxvcmVyMS5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTEvZmlsZTMudHh0XCIpO1xuXHRcdGV4cGxvcmVyMi5hZGRGaWxlUGF0aChcImZpbGU0LnR4dFwiKTtcbiAgICBleHBsb3JlcjIuYWRkRGlyZWN0b3J5UGF0aChcImRpcmVjdG9yeTJcIik7XG5cbiAgICByZXR1cm4gKFtcbiAgICAgIGV4cGxvcmVyMSxcbiAgICAgIGV4cGxvcmVyMlxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMTByZW07XG4gICAgICBcbmA7XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyMShwYXRoTWFwcywgZG9uZSkge1xuICAvLy9cblxuICBkb25lKCk7XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyMihwYXRoTWFwcywgZG9uZSkge1xuICAvLy9cblxuICBkb25lKCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFVCxTQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9DRiwrQkFJL0I7Ozs7Ozs7SUF0Q00sSUFBSTtjQUFKLElBQUk7YUFBSixJQUFJOzhCQUFKLElBQUk7Z0VBQUosSUFBSTs7aUJBQUosSUFBSTs7WUFDUixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNOLFNBQVMscUNBSkcsU0FBWTtvQkFNWCxLQUFLLEVBQUUsQ0FBQztvQkFBRSxNQUFNLEVBQUUsWUFBWTtvQkFHMUMsU0FBUyxxQ0FURSxTQUFZO29CQVdYLEtBQUssRUFBRSxDQUFDO29CQUFFLE1BQU0sRUFBRSxZQUFZOztnQkFJbEQsU0FBUyxDQUFDLFdBQVcsRUFBQyxvQkFBc0I7Z0JBQzVDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsU0FBVztnQkFDL0IsU0FBUyxDQUFDLGdCQUFnQixFQUFDLFVBQVk7O29CQUdyQyxTQUFTO29CQUNULFNBQVM7Ozs7O1lBSWIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSCxhQUFhOzs7O1dBeEJoQixJQUFJO21CQUpjLEtBQU07Z0JBSXhCLElBQUksR0EyQkQsT0FBTyxJQUFHLEdBQUs7Z0JBM0JsQixJQUFJLEdBNkJELGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7bUJBcENDLGNBQWlCLFVBd0NkLElBQUk7O1NBTXBCLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSTtJQUNsQyxFQUFHLEFBQUgsQ0FBRztJQUVILElBQUk7O1NBR0csWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJO0lBQ2xDLEVBQUcsQUFBSCxDQUFHO0lBRUgsSUFBSSJ9