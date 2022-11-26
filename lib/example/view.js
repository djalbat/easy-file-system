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
var _necessary = require("necessary");
var _rubbishBin = /*#__PURE__*/ _interopRequireDefault(require("./view/rubbishBin"));
var _first = /*#__PURE__*/ _interopRequireDefault(require("./view/explorer/first"));
var _second = /*#__PURE__*/ _interopRequireDefault(require("./view/explorer/second"));
var _editSelected = /*#__PURE__*/ _interopRequireDefault(require("./view/button/editSelected"));
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "clickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer(), secondExplorer = _this.getSecondExplorer();
            firstExplorer.editSelectedPath();
            secondExplorer.editSelectedPath();
        });
        _defineProperty(_assertThisInitialized(_this), "openHandler", function(filePath) {
            console.log("open", filePath);
        });
        _defineProperty(_assertThisInitialized(_this), "moveHandler", function(pathMaps, done) {
            console.log("move", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _defineProperty(_assertThisInitialized(_this), "removeHandler", function(pathMaps, done) {
            console.log("remove", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _defineProperty(_assertThisInitialized(_this), "pathChangeHandler", function(pathMap, callback) {
            var success = true;
            callback(success);
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "getExplorers",
            value: function getExplorers() {
                var explorerDivChildElements = this.getChildElements("div.explorer"), explorers = explorerDivChildElements; ///
                return explorers;
            }
        },
        {
            key: "getFirstExplorer",
            value: function getFirstExplorer() {
                var explorers = this.getExplorers(), firstExplorer = first(explorers);
                return firstExplorer;
            }
        },
        {
            key: "getSecondExplorer",
            value: function getSecondExplorer() {
                var explorers = this.getExplorers(), secondExplorer = second(explorers);
                return secondExplorer;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_rubbishBin.default, {
                        onRemove: this.removeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_first.default, {
                        onMove: this.moveHandler,
                        onOpen: this.openHandler,
                        onPathChange: this.pathChangeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_second.default, {
                        onMove: this.moveHandler,
                        onOpen: this.openHandler,
                        onPathChange: this.pathChangeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_editSelected.default, {
                        onClick: this.clickHandler
                    })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5pbXBvcnQgRWRpdFNlbGVjdGVkQnV0dG9uIGZyb20gXCIuL3ZpZXcvYnV0dG9uL2VkaXRTZWxlY3RlZFwiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzZWNvbmRFeHBsb3JlciA9IHRoaXMuZ2V0U2Vjb25kRXhwbG9yZXIoKTtcblxuICAgIGZpcnN0RXhwbG9yZXIuZWRpdFNlbGVjdGVkUGF0aCgpO1xuICAgIHNlY29uZEV4cGxvcmVyLmVkaXRTZWxlY3RlZFBhdGgoKTtcbiAgfVxuXG4gIG9wZW5IYW5kbGVyID0gKGZpbGVQYXRoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIsIGZpbGVQYXRoKVxuICB9XG5cbiAgbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICByZW1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBwYXRoQ2hhbmdlSGFuZGxlciA9IChwYXRoTWFwLCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgY2FsbGJhY2soc3VjY2Vzcyk7XG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn0gb25PcGVuPXt0aGlzLm9wZW5IYW5kbGVyfSBvblBhdGhDaGFuZ2U9e3RoaXMucGF0aENoYW5nZUhhbmRsZXJ9IC8+LFxuICAgICAgPFNlY29uZEV4cGxvcmVyIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn0gb25PcGVuPXt0aGlzLm9wZW5IYW5kbGVyfSBvblBhdGhDaGFuZ2U9e3RoaXMucGF0aENoYW5nZUhhbmRsZXJ9IC8+LFxuICAgICAgPEVkaXRTZWxlY3RlZEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZmlyc3RFeHBsb3JlciIsImdldEZpcnN0RXhwbG9yZXIiLCJzZWNvbmRFeHBsb3JlciIsImdldFNlY29uZEV4cGxvcmVyIiwiZWRpdFNlbGVjdGVkUGF0aCIsIm9wZW5IYW5kbGVyIiwiZmlsZVBhdGgiLCJjb25zb2xlIiwibG9nIiwibW92ZUhhbmRsZXIiLCJwYXRoTWFwcyIsImRvbmUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSGFuZGxlciIsInBhdGhDaGFuZ2VIYW5kbGVyIiwicGF0aE1hcCIsImNhbGxiYWNrIiwic3VjY2VzcyIsImdldEV4cGxvcmVycyIsImV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJleHBsb3JlcnMiLCJjaGlsZEVsZW1lbnRzIiwiUnViYmlzaEJpbiIsIm9uUmVtb3ZlIiwiRmlyc3RFeHBsb3JlciIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uUGF0aENoYW5nZSIsIlNlY29uZEV4cGxvcmVyIiwiRWRpdFNlbGVjdGVkQnV0dG9uIiwib25DbGljayIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O29CQVZHO3lCQUNPOytEQUVSOzBEQUNHOzJEQUNDO2lFQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgscUJBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ25CSSwrQ0FBQUEsZ0JBQWUsU0FBQ0MsT0FBT0MsU0FBWTtZQUNqQyxJQUFNQyxnQkFBZ0IsTUFBS0MsZ0JBQWdCLElBQ3JDQyxpQkFBaUIsTUFBS0MsaUJBQWlCO1lBRTdDSCxjQUFjSSxnQkFBZ0I7WUFDOUJGLGVBQWVFLGdCQUFnQjtRQUNqQztRQUVBQywrQ0FBQUEsZUFBYyxTQUFDQyxVQUFhO1lBQzFCQyxRQUFRQyxHQUFHLENBQUMsUUFBUUY7UUFDdEI7UUFFQUcsK0NBQUFBLGVBQWMsU0FBQ0MsVUFBVUMsTUFBUztZQUNoQ0osUUFBUUMsR0FBRyxDQUFDLFFBQVFJLEtBQUtDLFNBQVMsQ0FBQ0gsVUFBVSxJQUFJLEVBQUU7WUFFbkRDO1FBQ0Y7UUFFQUcsK0NBQUFBLGlCQUFnQixTQUFDSixVQUFVQyxNQUFTO1lBQ2xDSixRQUFRQyxHQUFHLENBQUMsVUFBVUksS0FBS0MsU0FBUyxDQUFDSCxVQUFVLElBQUksRUFBRTtZQUVyREM7UUFDRjtRQUVBSSwrQ0FBQUEscUJBQW9CLFNBQUNDLFNBQVNDLFVBQWE7WUFDekMsSUFBTUMsVUFBVSxJQUFJO1lBRXBCRCxTQUFTQztRQUNYOzs7aUJBN0JtQnpCOztZQStCbkIwQixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFDYixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFDakRDLFlBQVlGLDBCQUEwQixHQUFHO2dCQUUvQyxPQUFPRTtZQUNUOzs7WUFFQXJCLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLElBQU1xQixZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3Qm5CLGdCQUFnQk4sTUFBTTRCO2dCQUU1QixPQUFPdEI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLElBQU1tQixZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3QmpCLGlCQUFpQk4sT0FBTzBCO2dCQUU5QixPQUFPcEI7WUFDVDs7O1lBRUFxQixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQVE7a0NBRU4sb0JBQUNDLG1CQUFVO3dCQUFDQyxVQUFVLElBQUksQ0FBQ1gsYUFBYTs7a0NBQ3hDLG9CQUFDWSxjQUFhO3dCQUFDQyxRQUFRLElBQUksQ0FBQ2xCLFdBQVc7d0JBQUVtQixRQUFRLElBQUksQ0FBQ3ZCLFdBQVc7d0JBQUV3QixjQUFjLElBQUksQ0FBQ2QsaUJBQWlCOztrQ0FDdkcsb0JBQUNlLGVBQWM7d0JBQUNILFFBQVEsSUFBSSxDQUFDbEIsV0FBVzt3QkFBRW1CLFFBQVEsSUFBSSxDQUFDdkIsV0FBVzt3QkFBRXdCLGNBQWMsSUFBSSxDQUFDZCxpQkFBaUI7O2tDQUN4RyxvQkFBQ2dCLHFCQUFrQjt3QkFBQ0MsU0FBUyxJQUFJLENBQUNuQyxZQUFZOztpQkFFL0M7WUFDSDs7O1dBN0RtQko7bUJBQWF3QyxhQUFPO0FBK0R2QyxnQkEvRG1CeEMsTUErRFp5QyxXQUFVO0FBRWpCLGdCQWpFbUJ6QyxNQWlFWjBDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=