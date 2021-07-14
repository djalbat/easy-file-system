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
var DRAG_INTO_RUBBISH_BIN_ONLY = _index.options.DRAG_INTO_RUBBISH_BIN_ONLY, DRAG_INTO_TOPMOST_DIRECTORIES_ONLY = _index.options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY;
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
                    DRAG_INTO_RUBBISH_BIN_ONLY: DRAG_INTO_RUBBISH_BIN_ONLY,
                    DRAG_INTO_TOPMOST_DIRECTORIES_ONLY: DRAG_INTO_TOPMOST_DIRECTORIES_ONLY
                }, explorer1 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler,
                    options: options
                }), explorer2 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler
                });
                explorer1.addDirectoryPath("directory1");
                // explorer1.addFilePath("directory1/directory2/file1.txt");
                explorer2.addDirectoryPath("directory2");
                explorer2.addFilePath("directory2/file2.txt");
                return [
                    /*#__PURE__*/ React.createElement(_index.RubbishBin, null),
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
function moveHandler(pathMaps, done) {
    ///
    done();
}
function removeHandler(pathMaps, done) {
    ///
    done();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBvcHRpb25zLCBFeHBsb3JlciwgUnViYmlzaEJpbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgRFJBR19JTlRPX1JVQkJJU0hfQklOX09OTFksIERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFkgfSA9IG9wdGlvbnM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBvcHRpb25zID0ge1xuICBcdCAgICAgICAgRFJBR19JTlRPX1JVQkJJU0hfQklOX09OTFksXG4gICAgICAgICAgICBEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHBsb3JlcjEgPVxuXG4gICAgICAgICAgICA8RXhwbG9yZXIgb25Nb3ZlPXttb3ZlSGFuZGxlcn0gb3B0aW9ucz17b3B0aW9uc30gLz5cblxuICAgICAgICAgICxcbiAgICAgICAgICBleHBsb3JlcjIgPVxuXG4gICAgICAgICAgICA8RXhwbG9yZXIgb25Nb3ZlPXttb3ZlSGFuZGxlcn0gLz5cblxuICAgICAgICAgIDtcblxuICAgIGV4cGxvcmVyMS5hZGREaXJlY3RvcnlQYXRoKFwiZGlyZWN0b3J5MVwiKTtcbiAgICAvLyBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2RpcmVjdG9yeTIvZmlsZTEudHh0XCIpO1xuXG4gICAgZXhwbG9yZXIyLmFkZERpcmVjdG9yeVBhdGgoXCJkaXJlY3RvcnkyXCIpO1xuICAgIGV4cGxvcmVyMi5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTIvZmlsZTIudHh0XCIpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgICAgPFJ1YmJpc2hCaW4vPlxuXG4gICAgICAsXG4gICAgICBleHBsb3JlcjEsXG4gICAgICBleHBsb3JlcjJcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxMHJlbTtcbiAgICAgIFxuYDtcblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIocGF0aE1hcHMsIGRvbmUpIHtcbiAgLy8vXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKHBhdGhNYXBzLCBkb25lKSB7XG4gIC8vL1xuXG4gIGRvbmUoKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVnQixNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTZDekIsK0JBSS9COzs7Ozs7O0lBL0NRLDBCQUEwQixHQUZZLE1BQVUsU0FFaEQsMEJBQTBCLEVBQUUsa0NBQWtDLEdBRnhCLE1BQVUsU0FFcEIsa0NBQWtDO0lBRWhFLElBQUk7Y0FBSixJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJO2dFQUFKLElBQUk7O2lCQUFKLElBQUk7O1lBQ1IsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTixPQUFPO29CQUNMLDBCQUEwQixFQUExQiwwQkFBMEI7b0JBQ3pCLGtDQUFrQyxFQUFsQyxrQ0FBa0M7bUJBRXBDLFNBQVMscUNBVjJCLE1BQVU7b0JBWWxDLE1BQU0sRUFBRSxXQUFXO29CQUFFLE9BQU8sRUFBRSxPQUFPO29CQUdqRCxTQUFTLHFDQWYyQixNQUFVO29CQWlCbEMsTUFBTSxFQUFFLFdBQVc7O2dCQUlyQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUMsVUFBWTtnQkFDdkMsRUFBNEQsQUFBNUQsMERBQTREO2dCQUU1RCxTQUFTLENBQUMsZ0JBQWdCLEVBQUMsVUFBWTtnQkFDdkMsU0FBUyxDQUFDLFdBQVcsRUFBQyxvQkFBc0I7O3NEQXpCRixNQUFVO29CQWdDbEQsU0FBUztvQkFDVCxTQUFTOzs7OztXQTdCVCxJQUFJO21CQU5jLEtBQU07Z0JBTXhCLElBQUksR0FrQ0QsT0FBTyxJQUFHLEdBQUs7Z0JBbENsQixJQUFJLEdBb0NELGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7bUJBN0NDLGNBQWlCLFVBaURkLElBQUk7O1NBTXBCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSTtJQUNqQyxFQUFHLEFBQUgsQ0FBRztJQUVILElBQUk7O1NBR0csYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJO0lBQ25DLEVBQUcsQUFBSCxDQUFHO0lBRUgsSUFBSSJ9