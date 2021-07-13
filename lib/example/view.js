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
var REMOVE_ONLY = _index.options.REMOVE_ONLY;
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
                    REMOVE_ONLY: REMOVE_ONLY
                }, explorer1 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler,
                    options: options
                }), explorer2 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler
                });
                explorer1.addDirectoryPath("directory1");
                explorer2.addDirectoryPath("directory2");
                explorer1.addFilePath("directory1/file1.txt");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBvcHRpb25zLCBFeHBsb3JlciwgUnViYmlzaEJpbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgUkVNT1ZFX09OTFkgfSA9IG9wdGlvbnM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBvcHRpb25zID0ge1xuICBcdCAgICAgICAgUkVNT1ZFX09OTFlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cGxvcmVyMSA9XG5cbiAgICAgICAgICAgIDxFeHBsb3JlciBvbk1vdmU9e21vdmVIYW5kbGVyfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuXG4gICAgICAgICAgLFxuICAgICAgICAgIGV4cGxvcmVyMiA9XG5cbiAgICAgICAgICAgIDxFeHBsb3JlciBvbk1vdmU9e21vdmVIYW5kbGVyfSAvPlxuXG4gICAgICAgICAgO1xuXG4gICAgZXhwbG9yZXIxLmFkZERpcmVjdG9yeVBhdGgoXCJkaXJlY3RvcnkxXCIpO1xuICAgIGV4cGxvcmVyMi5hZGREaXJlY3RvcnlQYXRoKFwiZGlyZWN0b3J5MlwiKTtcbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2ZpbGUxLnR4dFwiKTtcbiAgICBleHBsb3JlcjIuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkyL2ZpbGUyLnR4dFwiKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICAgIDxSdWJiaXNoQmluLz5cblxuICAgICAgLFxuICAgICAgZXhwbG9yZXIxLFxuICAgICAgZXhwbG9yZXIyXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMTByZW07XG4gICAgICBcbmA7XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKHBhdGhNYXBzLCBkb25lKSB7XG4gIC8vL1xuXG4gIGRvbmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICAvLy9cblxuICBkb25lKCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFZ0IsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EyQ3pCLCtCQUkvQjs7Ozs7OztJQTdDUSxXQUFXLEdBRjJCLE1BQVUsU0FFaEQsV0FBVztJQUViLElBQUk7Y0FBSixJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJO2dFQUFKLElBQUk7O2lCQUFKLElBQUk7O1lBQ1IsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTixPQUFPO29CQUNMLFdBQVcsRUFBWCxXQUFXO21CQUVaLFNBQVMscUNBVDJCLE1BQVU7b0JBV2xDLE1BQU0sRUFBRSxXQUFXO29CQUFFLE9BQU8sRUFBRSxPQUFPO29CQUdqRCxTQUFTLHFDQWQyQixNQUFVO29CQWdCbEMsTUFBTSxFQUFFLFdBQVc7O2dCQUlyQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUMsVUFBWTtnQkFDdkMsU0FBUyxDQUFDLGdCQUFnQixFQUFDLFVBQVk7Z0JBQ3ZDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsb0JBQXNCO2dCQUM1QyxTQUFTLENBQUMsV0FBVyxFQUFDLG9CQUFzQjs7c0RBdkJGLE1BQVU7b0JBOEJsRCxTQUFTO29CQUNULFNBQVM7Ozs7O1dBM0JULElBQUk7bUJBTmMsS0FBTTtnQkFNeEIsSUFBSSxHQWdDRCxPQUFPLElBQUcsR0FBSztnQkFoQ2xCLElBQUksR0FrQ0QsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxJQUFNOzttQkEzQ0MsY0FBaUIsVUErQ2QsSUFBSTs7U0FNcEIsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJO0lBQ2pDLEVBQUcsQUFBSCxDQUFHO0lBRUgsSUFBSTs7U0FHRyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUk7SUFDbkMsRUFBRyxBQUFILENBQUc7SUFFSCxJQUFJIn0=