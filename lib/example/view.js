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
var REMOVE_EMPTY_PARENT_DIRECTORIES = _index.options.REMOVE_EMPTY_PARENT_DIRECTORIES, DRAG_INTO_TOPMOST_DIRECTORIES_ONLY = _index.options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY;
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
                    REMOVE_EMPTY_PARENT_DIRECTORIES: REMOVE_EMPTY_PARENT_DIRECTORIES,
                    DRAG_INTO_TOPMOST_DIRECTORIES_ONLY: DRAG_INTO_TOPMOST_DIRECTORIES_ONLY
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBvcHRpb25zLCBFeHBsb3JlciwgUnViYmlzaEJpbiB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFUyxcbiAgICAgICAgRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWSB9ID0gb3B0aW9ucztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTLFxuICAgICAgICAgICAgRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwbG9yZXIxID1cblxuICAgICAgICAgICAgPEV4cGxvcmVyIG9uTW92ZT17bW92ZUhhbmRsZXJ9IG9uT3Blbj17b3BlbkhhbmRsZXJ9IHJlZmVyZW5jZT1cImV4cGxvcmVyLTFcIiBvcHRpb25zPXtvcHRpb25zfSAvPlxuXG4gICAgICAgICAgLFxuICAgICAgICAgIGV4cGxvcmVyMiA9XG5cbiAgICAgICAgICAgIDxFeHBsb3JlciBvbk1vdmU9e21vdmVIYW5kbGVyfSBvbk9wZW49e29wZW5IYW5kbGVyfSByZWZlcmVuY2U9XCJleHBsb3Jlci0yXCIgaWdub3JlZFJlZmVyZW5jZXM9e1sgXCJleHBsb3Jlci0xXCIgXX0gLz5cblxuICAgICAgICAgIDtcblxuICAgIGV4cGxvcmVyMS5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTEvZGlyZWN0b3J5My9maWxlMS50eHRcIik7XG5cbiAgICBleHBsb3JlcjIuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkyL2ZpbGUyLnR4dFwiKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICAgIDxSdWJiaXNoQmluIG9uUmVtb3ZlPXtyZW1vdmVIYW5kbGVyfSBpZ25vcmVkUmVmZXJlbmNlcz17WyBcImV4cGxvcmVyLTJcIiBdfSAvPlxuXG4gICAgICAsXG4gICAgICBleHBsb3JlcjEsXG4gICAgICBleHBsb3JlcjJcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxMHJlbTtcbiAgICAgIFxuYDtcblxuZnVuY3Rpb24gb3BlbkhhbmRsZXIoZmlsZVBhdGgpIHtcbiAgY29uc29sZS5sb2coXCJvcGVuXCIsIGZpbGVQYXRoKVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKHBhdGhNYXBzLCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gIGRvbmUoKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVnQixNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTRDekIsK0JBSS9COzs7Ozs7O0lBOUNRLCtCQUErQixHQUZPLE1BQVUsU0FFaEQsK0JBQStCLEVBQy9CLGtDQUFrQyxHQUhJLE1BQVUsU0FHaEQsa0NBQWtDO0lBRXBDLElBQUk7Y0FBSixJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJO2dFQUFKLElBQUk7O2lCQUFKLElBQUk7O1lBQ1IsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTixPQUFPO29CQUNKLCtCQUErQixFQUEvQiwrQkFBK0I7b0JBQy9CLGtDQUFrQyxFQUFsQyxrQ0FBa0M7bUJBRXBDLFNBQVMscUNBWDJCLE1BQVU7b0JBYWxDLE1BQU0sRUFBRSxXQUFXO29CQUFFLE1BQU0sRUFBRSxXQUFXO29CQUFFLFNBQVMsR0FBQyxVQUFZO29CQUFDLE9BQU8sRUFBRSxPQUFPO29CQUc3RixTQUFTLHFDQWhCMkIsTUFBVTtvQkFrQmxDLE1BQU0sRUFBRSxXQUFXO29CQUFFLE1BQU0sRUFBRSxXQUFXO29CQUFFLFNBQVMsR0FBQyxVQUFZO29CQUFDLGlCQUFpQjt5QkFBSSxVQUFZOzs7Z0JBSXBILFNBQVMsQ0FBQyxXQUFXLEVBQUMsK0JBQWlDO2dCQUV2RCxTQUFTLENBQUMsV0FBVyxFQUFDLG9CQUFzQjs7c0RBeEJGLE1BQVU7d0JBNEJwQyxRQUFRLEVBQUUsYUFBYTt3QkFBRSxpQkFBaUI7NkJBQUksVUFBWTs7O29CQUd4RSxTQUFTO29CQUNULFNBQVM7Ozs7O1dBM0JULElBQUk7bUJBUGMsS0FBTTtnQkFPeEIsSUFBSSxHQWdDRCxPQUFPLElBQUcsR0FBSztnQkFoQ2xCLElBQUksR0FrQ0QsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxJQUFNOzttQkE1Q0MsY0FBaUIsVUFnRGQsSUFBSTs7U0FNcEIsV0FBVyxDQUFDLFFBQVE7SUFDM0IsT0FBTyxDQUFDLEdBQUcsRUFBQyxJQUFNLEdBQUUsUUFBUTs7U0FHckIsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsSUFBTSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRSxFQUFJO0lBRXZELElBQUk7O1NBR0csYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLEVBQUMsTUFBUSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRSxFQUFJO0lBRXpELElBQUkifQ==