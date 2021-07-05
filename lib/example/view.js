"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _explorer = _interopRequireDefault(require("./explorer"));
var _index = require("../index");
var _marker = _interopRequireDefault(require("../svg/marker"));
var _fileName = _interopRequireDefault(require("../svg/fileName"));
var _directoryName = _interopRequireDefault(require("../svg/directoryName"));
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
                // const explorer =
                //
                //         <Explorer onMove={moveHandler} />
                //
                //       ,
                //       rubbishBin =
                //
                //         <RubbishBin onRemove={removeHandler} />
                //
                //       ;
                //
                // explorer.addFilePath("directory/file.txt");
                return [
                    /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(_directoryName.default, null), /*#__PURE__*/ React.createElement(_fileName.default, null), /*#__PURE__*/ React.createElement(_marker.default, null))
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRXhwbG9yZXIgZnJvbSBcIi4vZXhwbG9yZXJcIjtcblxuaW1wb3J0IHsgUnViYmlzaEJpbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBNYXJrZXJTVkcgZnJvbSBcIi4uL3N2Zy9tYXJrZXJcIjtcbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdC8vIGNvbnN0IGV4cGxvcmVyID1cbiAgICAvL1xuICAgIC8vICAgICAgICAgPEV4cGxvcmVyIG9uTW92ZT17bW92ZUhhbmRsZXJ9IC8+XG4gICAgLy9cbiAgICAvLyAgICAgICAsXG4gICAgLy8gICAgICAgcnViYmlzaEJpbiA9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIDxSdWJiaXNoQmluIG9uUmVtb3ZlPXtyZW1vdmVIYW5kbGVyfSAvPlxuICAgIC8vXG4gICAgLy8gICAgICAgO1xuICAgIC8vXG5cdFx0Ly8gZXhwbG9yZXIuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkvZmlsZS50eHRcIik7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGRpdj5cbiAgICAgICAgPERpcmVjdG9yeU5hbWVTVkcvPlxuICAgICAgICA8RmlsZU5hbWVTVkcvPlxuICAgICAgICA8TWFya2VyU1ZHLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDEwcmVtO1xuICAgICAgXG5gO1xuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICAvLy9cblxuICBkb25lKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIocGF0aE1hcHMsIGRvbmUpIHtcbiAgLy8vXG5cbiAgZG9uZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRVQsU0FBWTtJQUVOLE1BQVU7SUFFZixPQUFlO0lBQ2IsU0FBaUI7SUFDWixjQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtQ3BCLCtCQUkvQjs7Ozs7OztJQXJDTSxJQUFJO2NBQUosSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTtnRUFBSixJQUFJOztpQkFBSixJQUFJOztZQUNSLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7Z0JBQ1osRUFBbUIsQUFBbkIsaUJBQW1CO2dCQUNsQixFQUFFO2dCQUNGLEVBQTRDLEFBQTVDLDBDQUE0QztnQkFDNUMsRUFBRTtnQkFDRixFQUFVLEFBQVYsUUFBVTtnQkFDVixFQUFxQixBQUFyQixtQkFBcUI7Z0JBQ3JCLEVBQUU7Z0JBQ0YsRUFBa0QsQUFBbEQsZ0RBQWtEO2dCQUNsRCxFQUFFO2dCQUNGLEVBQVUsQUFBVixRQUFVO2dCQUNWLEVBQUU7Z0JBQ0osRUFBOEMsQUFBOUMsNENBQThDOzt1REFJekMsR0FBRywyQ0FuQm1CLGNBQXNCLG1EQUQzQixTQUFpQixtREFEbkIsT0FBZTs7Ozs7V0FJL0IsSUFBSTttQkFWYyxLQUFNO2dCQVV4QixJQUFJLEdBMEJELE9BQU8sSUFBRyxHQUFLO2dCQTFCbEIsSUFBSSxHQTRCRCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O21CQXpDQyxjQUFpQixVQTZDZCxJQUFJOztTQU1wQixXQUFXLENBQUMsUUFBUSxFQUFFLElBQUk7SUFDakMsRUFBRyxBQUFILENBQUc7SUFFSCxJQUFJOztTQUdHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSTtJQUNuQyxFQUFHLEFBQUgsQ0FBRztJQUVILElBQUkifQ==