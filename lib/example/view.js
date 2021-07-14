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
var DRAG_INTO_RUBBISH_BIN_ONLY = _index.options.DRAG_INTO_RUBBISH_BIN_ONLY, REMOVE_EMPTY_PARENT_DIRECTORIES = _index.options.REMOVE_EMPTY_PARENT_DIRECTORIES, DRAG_INTO_TOPMOST_DIRECTORIES_ONLY = _index.options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY;
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
                    REMOVE_EMPTY_PARENT_DIRECTORIES: REMOVE_EMPTY_PARENT_DIRECTORIES,
                    DRAG_INTO_TOPMOST_DIRECTORIES_ONLY: DRAG_INTO_TOPMOST_DIRECTORIES_ONLY
                }, explorer1 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler,
                    options: options
                }), explorer2 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler
                });
                explorer1.addFilePath("directory1/directory3/file1.txt");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBvcHRpb25zLCBFeHBsb3JlciwgUnViYmlzaEJpbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgRFJBR19JTlRPX1JVQkJJU0hfQklOX09OTFksXG4gICAgICAgIFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMsXG4gICAgICAgIERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFkgfSA9IG9wdGlvbnM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBvcHRpb25zID0ge1xuICBcdCAgICAgICAgRFJBR19JTlRPX1JVQkJJU0hfQklOX09OTFksXG4gICAgICAgICAgICBSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTLFxuICAgICAgICAgICAgRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwbG9yZXIxID1cblxuICAgICAgICAgICAgPEV4cGxvcmVyIG9uTW92ZT17bW92ZUhhbmRsZXJ9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG5cbiAgICAgICAgICAsXG4gICAgICAgICAgZXhwbG9yZXIyID1cblxuICAgICAgICAgICAgPEV4cGxvcmVyIG9uTW92ZT17bW92ZUhhbmRsZXJ9IC8+XG5cbiAgICAgICAgICA7XG5cbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2RpcmVjdG9yeTMvZmlsZTEudHh0XCIpO1xuXG4gICAgZXhwbG9yZXIyLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5Mi9maWxlMi50eHRcIik7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgICA8UnViYmlzaEJpbi8+XG5cbiAgICAgICxcbiAgICAgIGV4cGxvcmVyMSxcbiAgICAgIGV4cGxvcmVyMlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDEwcmVtO1xuICAgICAgXG5gO1xuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICAvLy9cblxuICBkb25lKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIocGF0aE1hcHMsIGRvbmUpIHtcbiAgLy8vXG5cbiAgZG9uZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRWdCLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBOEN6QiwrQkFJL0I7Ozs7Ozs7SUFoRFEsMEJBQTBCLEdBRlksTUFBVSxTQUVoRCwwQkFBMEIsRUFDMUIsK0JBQStCLEdBSE8sTUFBVSxTQUdoRCwrQkFBK0IsRUFDL0Isa0NBQWtDLEdBSkksTUFBVSxTQUloRCxrQ0FBa0M7SUFFcEMsSUFBSTtjQUFKLElBQUk7YUFBSixJQUFJOzhCQUFKLElBQUk7Z0VBQUosSUFBSTs7aUJBQUosSUFBSTs7WUFDUixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNOLE9BQU87b0JBQ0wsMEJBQTBCLEVBQTFCLDBCQUEwQjtvQkFDekIsK0JBQStCLEVBQS9CLCtCQUErQjtvQkFDL0Isa0NBQWtDLEVBQWxDLGtDQUFrQzttQkFFcEMsU0FBUyxxQ0FiMkIsTUFBVTtvQkFlbEMsTUFBTSxFQUFFLFdBQVc7b0JBQUUsT0FBTyxFQUFFLE9BQU87b0JBR2pELFNBQVMscUNBbEIyQixNQUFVO29CQW9CbEMsTUFBTSxFQUFFLFdBQVc7O2dCQUlyQyxTQUFTLENBQUMsV0FBVyxFQUFDLCtCQUFpQztnQkFFdkQsU0FBUyxDQUFDLFdBQVcsRUFBQyxvQkFBc0I7O3NEQTFCRixNQUFVO29CQWlDbEQsU0FBUztvQkFDVCxTQUFTOzs7OztXQTVCVCxJQUFJO21CQVJjLEtBQU07Z0JBUXhCLElBQUksR0FpQ0QsT0FBTyxJQUFHLEdBQUs7Z0JBakNsQixJQUFJLEdBbUNELGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsSUFBTTs7bUJBOUNDLGNBQWlCLFVBa0RkLElBQUk7O1NBTXBCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSTtJQUNqQyxFQUFHLEFBQUgsQ0FBRztJQUVILElBQUk7O1NBR0csYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJO0lBQ25DLEVBQUcsQUFBSCxDQUFHO0lBRUgsSUFBSSJ9