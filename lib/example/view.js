"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
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
var REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION = _index.options.REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION, DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION = _index.options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION;
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
                var options = {
                    REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION: REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION,
                    DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION: DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION
                }, explorer1 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler,
                    onOpen: openHandler,
                    reference: "explorer-1",
                    options: options
                }), explorer2 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler,
                    onOpen: openHandler,
                    reference: "explorer-2",
                    ignoredReferences: [
                        "explorer-1"
                    ]
                });
                explorer1.addFilePath("directory1/directory3/file1.txt");
                explorer2.addFilePath("directory2/file2.txt");
                return [
                    /*#__PURE__*/ React.createElement(_index.RubbishBin, {
                        onRemove: removeHandler,
                        ignoredReferences: [
                            "explorer-2"
                        ]
                    }),
                    explorer1,
                    explorer2
                ];
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
function openHandler(filePath) {
    console.log("open", filePath);
}
function moveHandler(pathMaps, done) {
    console.log("move", JSON.stringify(pathMaps, null, "  "));
    done();
}
function removeHandler(pathMaps, done) {
    console.log("remove", JSON.stringify(pathMaps, null, "  "));
    done();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBvcHRpb25zLCBFeHBsb3JlciwgUnViYmlzaEJpbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFU19PUFRJT04sXG4gICAgICAgIERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIH0gPSBvcHRpb25zO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OLFxuICAgICAgICAgICAgRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT05cbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cGxvcmVyMSA9XG5cbiAgICAgICAgICAgIDxFeHBsb3JlciBvbk1vdmU9e21vdmVIYW5kbGVyfSBvbk9wZW49e29wZW5IYW5kbGVyfSByZWZlcmVuY2U9XCJleHBsb3Jlci0xXCIgb3B0aW9ucz17b3B0aW9uc30gLz5cblxuICAgICAgICAgICxcbiAgICAgICAgICBleHBsb3JlcjIgPVxuXG4gICAgICAgICAgICA8RXhwbG9yZXIgb25Nb3ZlPXttb3ZlSGFuZGxlcn0gb25PcGVuPXtvcGVuSGFuZGxlcn0gcmVmZXJlbmNlPVwiZXhwbG9yZXItMlwiIGlnbm9yZWRSZWZlcmVuY2VzPXtbIFwiZXhwbG9yZXItMVwiIF19IC8+XG5cbiAgICAgICAgICA7XG5cbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2RpcmVjdG9yeTMvZmlsZTEudHh0XCIpO1xuXG4gICAgZXhwbG9yZXIyLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5Mi9maWxlMi50eHRcIik7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17cmVtb3ZlSGFuZGxlcn0gaWdub3JlZFJlZmVyZW5jZXM9e1sgXCJleHBsb3Jlci0yXCIgXX0gLz5cblxuICAgICAgLFxuICAgICAgZXhwbG9yZXIxLFxuICAgICAgZXhwbG9yZXIyXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMTByZW07XG4gICAgICBcbmA7XG5cbmZ1bmN0aW9uIG9wZW5IYW5kbGVyKGZpbGVQYXRoKSB7XG4gIGNvbnNvbGUubG9nKFwib3BlblwiLCBmaWxlUGF0aClcbn1cblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIocGF0aE1hcHMsIGRvbmUpIHtcbiAgY29uc29sZS5sb2coXCJtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gIGRvbmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICBjb25zb2xlLmxvZyhcInJlbW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICBkb25lKCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFZ0IsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E0Q3pCLCtCQUkvQjs7Ozs7OztJQTlDUSxzQ0FBc0MsR0FGQSxNQUFVLFNBRWhELHNDQUFzQyxFQUN0Qyx5Q0FBeUMsR0FISCxNQUFVLFNBR2hELHlDQUF5QztJQUUzQyxJQUFJO2NBQUosSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTtnRUFBSixJQUFJOztpQkFBSixJQUFJOztZQUNSLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ04sT0FBTztvQkFDSixzQ0FBc0MsRUFBdEMsc0NBQXNDO29CQUN0Qyx5Q0FBeUMsRUFBekMseUNBQXlDO21CQUUzQyxTQUFTLHFDQVgyQixNQUFVO29CQWFsQyxNQUFNLEVBQUUsV0FBVztvQkFBRSxNQUFNLEVBQUUsV0FBVztvQkFBRSxTQUFTLEdBQUMsVUFBWTtvQkFBQyxPQUFPLEVBQUUsT0FBTztvQkFHN0YsU0FBUyxxQ0FoQjJCLE1BQVU7b0JBa0JsQyxNQUFNLEVBQUUsV0FBVztvQkFBRSxNQUFNLEVBQUUsV0FBVztvQkFBRSxTQUFTLEdBQUMsVUFBWTtvQkFBQyxpQkFBaUI7eUJBQUksVUFBWTs7O2dCQUlwSCxTQUFTLENBQUMsV0FBVyxFQUFDLCtCQUFpQztnQkFFdkQsU0FBUyxDQUFDLFdBQVcsRUFBQyxvQkFBc0I7O3NEQXhCRixNQUFVO3dCQTRCcEMsUUFBUSxFQUFFLGFBQWE7d0JBQUUsaUJBQWlCOzZCQUFJLFVBQVk7OztvQkFHeEUsU0FBUztvQkFDVCxTQUFTOzs7OztXQTNCVCxJQUFJO21CQVBjLEtBQU07Z0JBT3hCLElBQUksR0FnQ0QsT0FBTyxJQUFHLEdBQUs7Z0JBaENsQixJQUFJLEdBa0NELGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7bUJBNUNDLGNBQWlCLFVBZ0RkLElBQUk7O1NBTXBCLFdBQVcsQ0FBQyxRQUFRO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLEVBQUMsSUFBTSxHQUFFLFFBQVE7O1NBR3JCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSTtJQUNqQyxPQUFPLENBQUMsR0FBRyxFQUFDLElBQU0sR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEdBQUUsRUFBSTtJQUV2RCxJQUFJOztTQUdHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSTtJQUNuQyxPQUFPLENBQUMsR0FBRyxFQUFDLE1BQVEsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEdBQUUsRUFBSTtJQUV6RCxJQUFJIn0=