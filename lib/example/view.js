"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
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
                var explorer1 = /*#__PURE__*/ React.createElement(_index.Explorer, {
                    onMove: moveHandler,
                    onOpen: openHandler,
                    reference: "explorer-1"
                }), explorer2 = /*#__PURE__*/ React.createElement(_index.Explorer, {
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
                explorer1.onSelect(function(path, selected) {
                    explorer2.deselectAllPaths();
                });
                explorer2.onSelect(function(path, selected) {
                    explorer1.deselectAllPaths();
                });
                return [
                    /*#__PURE__*/ React.createElement(_easy.Button, {
                        onClick: function(event, element) {
                            clickHandler(explorer1, explorer2);
                        }
                    }, "Edit selected"),
                    /*#__PURE__*/ React.createElement("br", null),
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
function clickHandler(explorer1, explorer2) {
    explorer1.editSelectedPath();
    explorer2.editSelectedPath();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEV4cGxvcmVyLCBSdWJiaXNoQmluIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyMSA9XG5cbiAgICAgICAgICAgIDxFeHBsb3JlciBvbk1vdmU9e21vdmVIYW5kbGVyfSBvbk9wZW49e29wZW5IYW5kbGVyfSByZWZlcmVuY2U9XCJleHBsb3Jlci0xXCIgLz5cblxuICAgICAgICAgICxcbiAgICAgICAgICBleHBsb3JlcjIgPVxuXG4gICAgICAgICAgICA8RXhwbG9yZXIgb25Nb3ZlPXttb3ZlSGFuZGxlcn0gb25PcGVuPXtvcGVuSGFuZGxlcn0gcmVmZXJlbmNlPVwiZXhwbG9yZXItMlwiIGlnbm9yZWRSZWZlcmVuY2VzPXtbIFwiZXhwbG9yZXItMVwiIF19IC8+XG5cbiAgICAgICAgICA7XG5cbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2ZpbGUxLnR4dFwiKTtcbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2ZpbGUyLnR4dFwiKTtcbiAgICBleHBsb3JlcjEuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2ZpbGUzLnR4dFwiKTtcblxuICAgIGV4cGxvcmVyMi5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTIvZmlsZTQudHh0XCIpO1xuICAgIGV4cGxvcmVyMi5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTIvZGlyZWN0b3J5My9maWxlNS50eHRcIik7XG5cbiAgICBleHBsb3JlcjIucmVtb3ZlRmlsZVBhdGgoXCJkaXJlY3RvcnkyL2RpcmVjdG9yeTMvZmlsZTQudHh0XCIsIHRydWUpO1xuXG4gICAgZXhwbG9yZXIxLm9uU2VsZWN0KChwYXRoLCBzZWxlY3RlZCkgPT4ge1xuICAgICAgZXhwbG9yZXIyLmRlc2VsZWN0QWxsUGF0aHMoKTtcbiAgICB9KTtcblxuICAgIGV4cGxvcmVyMi5vblNlbGVjdCgocGF0aCwgc2VsZWN0ZWQpID0+IHtcbiAgICAgIGV4cGxvcmVyMS5kZXNlbGVjdEFsbFBhdGhzKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcihleHBsb3JlcjEsIGV4cGxvcmVyMik7XG4gICAgICAgIH19PlxuICAgICAgICAgIEVkaXQgc2VsZWN0ZWRcbiAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICA8YnIvPixcbiAgICAgICAgPFJ1YmJpc2hCaW4gb25SZW1vdmU9e3JlbW92ZUhhbmRsZXJ9IGlnbm9yZWRSZWZlcmVuY2VzPXtbIFwiZXhwbG9yZXItMlwiIF19IC8+XG5cbiAgICAgICxcbiAgICAgIGV4cGxvcmVyMSxcbiAgICAgIGV4cGxvcmVyMlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gb3BlbkhhbmRsZXIoZmlsZVBhdGgpIHtcbiAgY29uc29sZS5sb2coXCJvcGVuXCIsIGZpbGVQYXRoKVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihwYXRoTWFwcywgZG9uZSkge1xuICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgZG9uZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKHBhdGhNYXBzLCBkb25lKSB7XG4gIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gIGRvbmUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV4cGxvcmVyMSwgZXhwbG9yZXIyKSB7XG4gIGV4cGxvcmVyMS5lZGl0U2VsZWN0ZWRQYXRoKCk7XG4gIGV4cGxvcmVyMi5lZGl0U2VsZWN0ZWRQYXRoKCk7XG59Il0sIm5hbWVzIjpbIlZpZXciLCJjaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXIxIiwiRXhwbG9yZXIiLCJvbk1vdmUiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsIm9wZW5IYW5kbGVyIiwicmVmZXJlbmNlIiwiZXhwbG9yZXIyIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJhZGRGaWxlUGF0aCIsInJlbW92ZUZpbGVQYXRoIiwib25TZWxlY3QiLCJwYXRoIiwic2VsZWN0ZWQiLCJkZXNlbGVjdEFsbFBhdGhzIiwiQnV0dG9uIiwib25DbGljayIsImV2ZW50IiwiZWxlbWVudCIsImNsaWNrSGFuZGxlciIsImJyIiwiUnViYmlzaEJpbiIsIm9uUmVtb3ZlIiwicmVtb3ZlSGFuZGxlciIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJmaWxlUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJwYXRoTWFwcyIsImRvbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiZWRpdFNlbGVjdGVkUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7b0JBSlc7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLHFCQXNEbEIsQUF0RFk7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2YsSUFBTUMsMEJBRUcsb0JBQUNDLGVBQVE7b0JBQUNDLFFBQVFDO29CQUFhQyxRQUFRQztvQkFBYUMsV0FBVTtvQkFHaEVDLDBCQUVFLG9CQUFDTixlQUFRO29CQUFDQyxRQUFRQztvQkFBYUMsUUFBUUM7b0JBQWFDLFdBQVU7b0JBQWFFLG1CQUFtQjt3QkFBRTtxQkFBYzs7Z0JBSXRIUixVQUFVUyxXQUFXLENBQUM7Z0JBQ3RCVCxVQUFVUyxXQUFXLENBQUM7Z0JBQ3RCVCxVQUFVUyxXQUFXLENBQUM7Z0JBRXRCRixVQUFVRSxXQUFXLENBQUM7Z0JBQ3RCRixVQUFVRSxXQUFXLENBQUM7Z0JBRXRCRixVQUFVRyxjQUFjLENBQUMsbUNBQW1DLElBQUk7Z0JBRWhFVixVQUFVVyxRQUFRLENBQUMsU0FBQ0MsTUFBTUMsVUFBYTtvQkFDckNOLFVBQVVPLGdCQUFnQjtnQkFDNUI7Z0JBRUFQLFVBQVVJLFFBQVEsQ0FBQyxTQUFDQyxNQUFNQyxVQUFhO29CQUNyQ2IsVUFBVWMsZ0JBQWdCO2dCQUM1QjtnQkFFQSxPQUFRO2tDQUVKLG9CQUFDQyxZQUFNO3dCQUFDQyxTQUFTLFNBQUNDLE9BQU9DLFNBQVk7NEJBQ25DQyxhQUFhbkIsV0FBV087d0JBQzFCO3VCQUFHO2tDQUdILG9CQUFDYTtrQ0FDRCxvQkFBQ0MsaUJBQVU7d0JBQUNDLFVBQVVDO3dCQUFlZixtQkFBbUI7NEJBQUU7eUJBQWM7O29CQUcxRVI7b0JBQ0FPO2lCQUVEO1lBQ0g7OztXQTdDbUJUO21CQUFhMEIsYUFBTztBQStDdkMsZ0JBL0NtQjFCLE1BK0NaMkIsV0FBVTtBQUVqQixnQkFqRG1CM0IsTUFpRFo0QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGLFNBQVN0QixZQUFZdUIsUUFBUSxFQUFFO0lBQzdCQyxRQUFRQyxHQUFHLENBQUMsUUFBUUY7QUFDdEI7QUFFQSxTQUFTekIsWUFBWTRCLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQ25DSCxRQUFRQyxHQUFHLENBQUMsUUFBUUcsS0FBS0MsU0FBUyxDQUFDSCxVQUFVLElBQUksRUFBRTtJQUVuREM7QUFDRjtBQUVBLFNBQVNULGNBQWNRLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQ3JDSCxRQUFRQyxHQUFHLENBQUMsVUFBVUcsS0FBS0MsU0FBUyxDQUFDSCxVQUFVLElBQUksRUFBRTtJQUVyREM7QUFDRjtBQUVBLFNBQVNiLGFBQWFuQixTQUFTLEVBQUVPLFNBQVMsRUFBRTtJQUMxQ1AsVUFBVW1DLGdCQUFnQjtJQUMxQjVCLFVBQVU0QixnQkFBZ0I7QUFDNUIifQ==