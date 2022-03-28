"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _index = require("../index");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "childElements",
            value: function childElements() {
                var explorer1 = /*#__PURE__*/ React.createElement(_explorer.default, {
                    onMove: moveHandler,
                    onOpen: openHandler,
                    reference: "explorer-1"
                }), explorer2 = /*#__PURE__*/ React.createElement(_explorer.default, {
                    onMove: moveHandler,
                    onOpen: openHandler,
                    reference: "explorer-2",
                    ignoredReferences: [
                        "explorer-1"
                    ]
                });
                explorer1.addFilePath("directory1/file1.txt");
                explorer1.addFilePath("directory1/file2.txt");
                explorer1.addFilePath("directory1/file3.txt");
                explorer2.addFilePath("directory2/file4.txt");
                explorer2.addFilePath("directory2/directory3/file5.txt");
                explorer2.removeFilePath("directory2/directory3/file4.txt", true);
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
exports.default = View;
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBSdWJiaXNoQmluIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEV4cGxvcmVyIGZyb20gXCIuL2V4cGxvcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlcjEgPVxuXG4gICAgICAgICAgICA8RXhwbG9yZXIgb25Nb3ZlPXttb3ZlSGFuZGxlcn0gb25PcGVuPXtvcGVuSGFuZGxlcn0gcmVmZXJlbmNlPVwiZXhwbG9yZXItMVwiIC8+XG5cbiAgICAgICAgICAsXG4gICAgICAgICAgZXhwbG9yZXIyID1cblxuICAgICAgICAgICAgPEV4cGxvcmVyIG9uTW92ZT17bW92ZUhhbmRsZXJ9IG9uT3Blbj17b3BlbkhhbmRsZXJ9IHJlZmVyZW5jZT1cImV4cGxvcmVyLTJcIiBpZ25vcmVkUmVmZXJlbmNlcz17WyBcImV4cGxvcmVyLTFcIiBdfSAvPlxuXG4gICAgICAgICAgO1xuXG4gICAgZXhwbG9yZXIxLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMS50eHRcIik7XG4gICAgZXhwbG9yZXIxLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMi50eHRcIik7XG4gICAgZXhwbG9yZXIxLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMy50eHRcIik7XG5cbiAgICBleHBsb3JlcjIuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkyL2ZpbGU0LnR4dFwiKTtcbiAgICBleHBsb3JlcjIuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkyL2RpcmVjdG9yeTMvZmlsZTUudHh0XCIpO1xuXG4gICAgZXhwbG9yZXIyLnJlbW92ZUZpbGVQYXRoKFwiZGlyZWN0b3J5Mi9kaXJlY3RvcnkzL2ZpbGU0LnR4dFwiLCB0cnVlKVxuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgICAgPFJ1YmJpc2hCaW4gb25SZW1vdmU9e3JlbW92ZUhhbmRsZXJ9IGlnbm9yZWRSZWZlcmVuY2VzPXtbIFwiZXhwbG9yZXItMlwiIF19IC8+XG5cbiAgICAgICxcbiAgICAgIGV4cGxvcmVyMSxcbiAgICAgIGV4cGxvcmVyMlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gb3BlbkhhbmRsZXIoZmlsZVBhdGgpIHtcbiAgY29uc29sZS5sb2coXCJvcGVuXCIsIGZpbGVQYXRoKVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKHBhdGhNYXBzLCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gIGRvbmUoKTtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiY2hpbGRFbGVtZW50cyIsImV4cGxvcmVyMSIsIkV4cGxvcmVyIiwib25Nb3ZlIiwibW92ZUhhbmRsZXIiLCJvbk9wZW4iLCJvcGVuSGFuZGxlciIsInJlZmVyZW5jZSIsImV4cGxvcmVyMiIsImlnbm9yZWRSZWZlcmVuY2VzIiwiYWRkRmlsZVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsIlJ1YmJpc2hCaW4iLCJvblJlbW92ZSIsInJlbW92ZUhhbmRsZXIiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZmlsZVBhdGgiLCJjb25zb2xlIiwibG9nIiwicGF0aE1hcHMiLCJkb25lIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVXLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUVILElBQUEsTUFBVSxXQUFWLFVBQVUsQ0FBQTtBQUVoQixJQUFBLFNBQVksa0NBQVosWUFBWSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLElBQUksaUJBd0N0QixBQXhDWTs7O2FBQU1BLElBQUk7Ozs7OztZQUN2QkMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2YsSUFBTUMsU0FBUyxpQkFFTixvQkFBQ0MsU0FBUSxRQUFBO29CQUFDQyxNQUFNLEVBQUVDLFdBQVc7b0JBQUVDLE1BQU0sRUFBRUMsV0FBVztvQkFBRUMsU0FBUyxFQUFDLFlBQVk7a0JBQUcsRUFHL0VDLFNBQVMsaUJBRVAsb0JBQUNOLFNBQVEsUUFBQTtvQkFBQ0MsTUFBTSxFQUFFQyxXQUFXO29CQUFFQyxNQUFNLEVBQUVDLFdBQVc7b0JBQUVDLFNBQVMsRUFBQyxZQUFZO29CQUFDRSxpQkFBaUIsRUFBRTt3QkFBRSxZQUFZO3FCQUFFO2tCQUFJLEFBRW5IO2dCQUVQUixTQUFTLENBQUNTLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUM5Q1QsU0FBUyxDQUFDUyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDOUNULFNBQVMsQ0FBQ1MsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBRTlDRixTQUFTLENBQUNFLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUM5Q0YsU0FBUyxDQUFDRSxXQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFFekRGLFNBQVMsQ0FBQ0csY0FBYyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQztnQkFFakUsT0FBUTtrQ0FFSixvQkFBQ0MsTUFBVSxXQUFBO3dCQUFDQyxRQUFRLEVBQUVDLGFBQWE7d0JBQUVMLGlCQUFpQixFQUFFOzRCQUFFLFlBQVk7eUJBQUU7c0JBQUk7b0JBRzlFUixTQUFTO29CQUNUTyxTQUFTO2lCQUVWLENBQUU7YUFDSjs7OztDQU9GLGtCQXRDaUNPLEtBQU8sUUFBQSxFQXNDeEM7a0JBdENvQmhCLElBQUk7QUFpQ3ZCLGdCQWpDbUJBLElBQUksRUFpQ2hCaUIsU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkFuQ21CakIsSUFBSSxFQW1DaEJrQixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztBQUdKLFNBQVNaLFdBQVcsQ0FBQ2EsUUFBUSxFQUFFO0lBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVGLFFBQVEsQ0FBQztDQUM5QjtBQUVELFNBQVNmLFdBQVcsQ0FBQ2tCLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQ25DSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVHLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXpEQyxJQUFJLEVBQUUsQ0FBQztDQUNSO0FBRUQsU0FBU1QsYUFBYSxDQUFDUSxRQUFRLEVBQUVDLElBQUksRUFBRTtJQUNyQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUzREMsSUFBSSxFQUFFLENBQUM7Q0FDUiJ9