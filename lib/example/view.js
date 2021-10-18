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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
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
                    _ignoredReferences: [
                        "explorer-1"
                    ]
                });
                explorer1.addFilePath("directory1/directory3/file1.txt");
                explorer1.addFilePath("directory1/directory3/file2.txt");
                explorer1.addFilePath("directory1/directory3/file3.txt");
                explorer2.addFilePath("directory2/file4.txt");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsIm9wdGlvbnMiLCJFeHBsb3JlciIsIlJ1YmJpc2hCaW4iLCJSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTiIsIkRSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIiwiVmlldyIsImNoaWxkRWxlbWVudHMiLCJleHBsb3JlcjEiLCJvbk1vdmUiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsIm9wZW5IYW5kbGVyIiwicmVmZXJlbmNlIiwiZXhwbG9yZXIyIiwiX2lnbm9yZWRSZWZlcmVuY2VzIiwiYWRkRmlsZVBhdGgiLCJvblJlbW92ZSIsInJlbW92ZUhhbmRsZXIiLCJpZ25vcmVkUmVmZXJlbmNlcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImZpbGVQYXRoIiwiY29uc29sZSIsImxvZyIsInBhdGhNYXBzIiwiZG9uZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUVnQixHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUE4Q3pCLENBSS9COzs7Ozs7O0FBaERBLEdBQUssQ0FBRyxzQ0FBc0MsR0FGQSxNQUFVLFNBRWhELHNDQUFzQyxFQUN0Qyx5Q0FBeUMsR0FISCxNQUFVLFNBR2hELHlDQUF5QztJQUUzQyxJQUFJLGlCQUFWLFFBQVE7Y0FBRixJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJO2dFQUFKLElBQUk7O2lCQUFKLElBQUk7O1lBQ1IsR0FBYSxFQUFiLENBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNoQixHQUFLLENBQUMsT0FBTyxHQUFHLENBQUM7b0JBQ1Isc0NBQXNDLEVBQXRDLHNDQUFzQztvQkFDdEMseUNBQXlDLEVBQXpDLHlDQUF5QztnQkFDM0MsQ0FBQyxFQUNELFNBQVMscUNBWDJCLE1BQVU7b0JBYWxDLE1BQU0sRUFBRSxXQUFXO29CQUFFLE1BQU0sRUFBRSxXQUFXO29CQUFFLFNBQVMsRUFBQyxDQUFZO29CQUFDLE9BQU8sRUFBRSxPQUFPO29CQUc3RixTQUFTLHFDQWhCMkIsTUFBVTtvQkFrQmxDLE1BQU0sRUFBRSxXQUFXO29CQUFFLE1BQU0sRUFBRSxXQUFXO29CQUFFLFNBQVMsRUFBQyxDQUFZO29CQUFDLGtCQUFrQixFQUFFLENBQUM7d0JBQUMsQ0FBWTtvQkFBQyxDQUFDOztnQkFJdkgsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFpQztnQkFDdkQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFpQztnQkFDdkQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFpQztnQkFFdkQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFzQjtnQkFFNUMsTUFBTSxDQUFFLENBQUM7c0RBNUJpQyxNQUFVO3dCQThCcEMsUUFBUSxFQUFFLGFBQWE7d0JBQUUsaUJBQWlCLEVBQUUsQ0FBQzs0QkFBQyxDQUFZO3dCQUFDLENBQUM7O29CQUcxRSxTQUFTO29CQUNULFNBQVM7Z0JBRVgsQ0FBQztZQUNILENBQUM7OztXQWhDRyxJQUFJO21CQVBjLEtBQU07Z0JBT3hCLElBQUksRUFrQ0QsQ0FBTyxVQUFHLENBQUs7Z0JBbENsQixJQUFJLEVBb0NELENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQU07QUFDbkIsQ0FBQzttQkEvQ21CLGNBQWlCLFVBa0RkLElBQUk7O1NBTXBCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQU0sT0FBRSxRQUFRO0FBQzlCLENBQUM7U0FFUSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBTSxPQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFJO0lBRXZELElBQUk7QUFDTixDQUFDO1NBRVEsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQVEsU0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBSTtJQUV6RCxJQUFJO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgb3B0aW9ucywgRXhwbG9yZXIsIFJ1YmJpc2hCaW4gfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OLFxuICAgICAgICBEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZX09QVElPTiB9ID0gb3B0aW9ucztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTixcbiAgICAgICAgICAgIERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHBsb3JlcjEgPVxuXG4gICAgICAgICAgICA8RXhwbG9yZXIgb25Nb3ZlPXttb3ZlSGFuZGxlcn0gb25PcGVuPXtvcGVuSGFuZGxlcn0gcmVmZXJlbmNlPVwiZXhwbG9yZXItMVwiIG9wdGlvbnM9e29wdGlvbnN9IC8+XG5cbiAgICAgICAgICAsXG4gICAgICAgICAgZXhwbG9yZXIyID1cblxuICAgICAgICAgICAgPEV4cGxvcmVyIG9uTW92ZT17bW92ZUhhbmRsZXJ9IG9uT3Blbj17b3BlbkhhbmRsZXJ9IHJlZmVyZW5jZT1cImV4cGxvcmVyLTJcIiBfaWdub3JlZFJlZmVyZW5jZXM9e1sgXCJleHBsb3Jlci0xXCIgXX0gLz5cblxuICAgICAgICAgIDtcblxuICAgIGV4cGxvcmVyMS5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTEvZGlyZWN0b3J5My9maWxlMS50eHRcIik7XG4gICAgZXhwbG9yZXIxLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9kaXJlY3RvcnkzL2ZpbGUyLnR4dFwiKTtcbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2RpcmVjdG9yeTMvZmlsZTMudHh0XCIpO1xuXG4gICAgZXhwbG9yZXIyLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5Mi9maWxlNC50eHRcIik7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17cmVtb3ZlSGFuZGxlcn0gaWdub3JlZFJlZmVyZW5jZXM9e1sgXCJleHBsb3Jlci0yXCIgXX0gLz5cblxuICAgICAgLFxuICAgICAgZXhwbG9yZXIxLFxuICAgICAgZXhwbG9yZXIyXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMTByZW07XG4gICAgICBcbmA7XG5cbmZ1bmN0aW9uIG9wZW5IYW5kbGVyKGZpbGVQYXRoKSB7XG4gIGNvbnNvbGUubG9nKFwib3BlblwiLCBmaWxlUGF0aClcbn1cblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIocGF0aE1hcHMsIGRvbmUpIHtcbiAgY29uc29sZS5sb2coXCJtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gIGRvbmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICBjb25zb2xlLmxvZyhcInJlbW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICBkb25lKCk7XG59XG4iXX0=