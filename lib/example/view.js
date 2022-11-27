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
        _defineProperty(_assertThisInitialized(_this), "renameHandler", function(pathMaps, done) {
            console.log("rename", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _defineProperty(_assertThisInitialized(_this), "removeHandler", function(pathMaps, done) {
            console.log("remove", JSON.stringify(pathMaps, null, "  "));
            done();
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
                        onRename: this.renameHandler
                    }),
                    /*#__PURE__*/ React.createElement(_second.default, {
                        onMove: this.moveHandler,
                        onOpen: this.openHandler,
                        onRename: this.renameHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5pbXBvcnQgRWRpdFNlbGVjdGVkQnV0dG9uIGZyb20gXCIuL3ZpZXcvYnV0dG9uL2VkaXRTZWxlY3RlZFwiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzZWNvbmRFeHBsb3JlciA9IHRoaXMuZ2V0U2Vjb25kRXhwbG9yZXIoKTtcblxuICAgIGZpcnN0RXhwbG9yZXIuZWRpdFNlbGVjdGVkUGF0aCgpO1xuXG4gICAgc2Vjb25kRXhwbG9yZXIuZWRpdFNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgb3BlbkhhbmRsZXIgPSAoZmlsZVBhdGgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIiwgZmlsZVBhdGgpXG4gIH1cblxuICBtb3ZlSGFuZGxlciA9IChwYXRoTWFwcywgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHJlbmFtZUhhbmRsZXIgPSAocGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlbmFtZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlbW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGdldEV4cGxvcmVycygpIHtcbiAgICBjb25zdCBleHBsb3JlckRpdkNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJkaXYuZXhwbG9yZXJcIiksXG4gICAgICAgICAgZXhwbG9yZXJzID0gZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcnM7XG4gIH1cblxuICBnZXRGaXJzdEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVycyA9IHRoaXMuZ2V0RXhwbG9yZXJzKCksXG4gICAgICAgICAgZmlyc3RFeHBsb3JlciA9IGZpcnN0KGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gZmlyc3RFeHBsb3JlcjtcbiAgfVxuXG4gIGdldFNlY29uZEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVycyA9IHRoaXMuZ2V0RXhwbG9yZXJzKCksXG4gICAgICAgICAgc2Vjb25kRXhwbG9yZXIgPSBzZWNvbmQoZXhwbG9yZXJzKTtcblxuICAgIHJldHVybiBzZWNvbmRFeHBsb3JlcjtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxSdWJiaXNoQmluIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9IC8+LFxuICAgICAgPEZpcnN0RXhwbG9yZXIgb25Nb3ZlPXt0aGlzLm1vdmVIYW5kbGVyfSBvbk9wZW49e3RoaXMub3BlbkhhbmRsZXJ9IG9uUmVuYW1lPXt0aGlzLnJlbmFtZUhhbmRsZXJ9IC8+LFxuICAgICAgPFNlY29uZEV4cGxvcmVyIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn0gb25PcGVuPXt0aGlzLm9wZW5IYW5kbGVyfSBvblJlbmFtZT17dGhpcy5yZW5hbWVIYW5kbGVyfSAvPixcbiAgICAgIDxFZGl0U2VsZWN0ZWRCdXR0b24gb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWaWV3IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImZpcnN0RXhwbG9yZXIiLCJnZXRGaXJzdEV4cGxvcmVyIiwic2Vjb25kRXhwbG9yZXIiLCJnZXRTZWNvbmRFeHBsb3JlciIsImVkaXRTZWxlY3RlZFBhdGgiLCJvcGVuSGFuZGxlciIsImZpbGVQYXRoIiwiY29uc29sZSIsImxvZyIsIm1vdmVIYW5kbGVyIiwicGF0aE1hcHMiLCJkb25lIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbmFtZUhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiZ2V0RXhwbG9yZXJzIiwiZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImV4cGxvcmVycyIsImNoaWxkRWxlbWVudHMiLCJSdWJiaXNoQmluIiwib25SZW1vdmUiLCJGaXJzdEV4cGxvcmVyIiwib25Nb3ZlIiwib25PcGVuIiwib25SZW5hbWUiLCJTZWNvbmRFeHBsb3JlciIsIkVkaXRTZWxlY3RlZEJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztvQkFWRzt5QkFDTzsrREFFUjswREFDRzsyREFDQztpRUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNuQkksK0NBQUFBLGdCQUFlLFNBQUNDLE9BQU9DLFNBQVk7WUFDakMsSUFBTUMsZ0JBQWdCLE1BQUtDLGdCQUFnQixJQUNyQ0MsaUJBQWlCLE1BQUtDLGlCQUFpQjtZQUU3Q0gsY0FBY0ksZ0JBQWdCO1lBRTlCRixlQUFlRSxnQkFBZ0I7UUFDakM7UUFFQUMsK0NBQUFBLGVBQWMsU0FBQ0MsVUFBYTtZQUMxQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVFGO1FBQ3RCO1FBRUFHLCtDQUFBQSxlQUFjLFNBQUNDLFVBQVVDLE1BQVM7WUFDaENKLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSSxLQUFLQyxTQUFTLENBQUNILFVBQVUsSUFBSSxFQUFFO1lBRW5EQztRQUNGO1FBRUFHLCtDQUFBQSxpQkFBZ0IsU0FBQ0osVUFBVUMsTUFBUztZQUNsQ0osUUFBUUMsR0FBRyxDQUFDLFVBQVVJLEtBQUtDLFNBQVMsQ0FBQ0gsVUFBVSxJQUFJLEVBQUU7WUFFckRDO1FBQ0Y7UUFFQUksK0NBQUFBLGlCQUFnQixTQUFDTCxVQUFVQyxNQUFTO1lBQ2xDSixRQUFRQyxHQUFHLENBQUMsVUFBVUksS0FBS0MsU0FBUyxDQUFDSCxVQUFVLElBQUksRUFBRTtZQUVyREM7UUFDRjs7O2lCQTlCbUJsQjs7WUFnQ25CdUIsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWU7Z0JBQ2IsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQ2pEQyxZQUFZRiwwQkFBMEIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFsQixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixJQUFNa0IsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JoQixnQkFBZ0JOLE1BQU15QjtnQkFFNUIsT0FBT25CO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFNZ0IsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JkLGlCQUFpQk4sT0FBT3VCO2dCQUU5QixPQUFPakI7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQVE7a0NBRU4sb0JBQUNDLG1CQUFVO3dCQUFDQyxVQUFVLElBQUksQ0FBQ1AsYUFBYTs7a0NBQ3hDLG9CQUFDUSxjQUFhO3dCQUFDQyxRQUFRLElBQUksQ0FBQ2YsV0FBVzt3QkFBRWdCLFFBQVEsSUFBSSxDQUFDcEIsV0FBVzt3QkFBRXFCLFVBQVUsSUFBSSxDQUFDWixhQUFhOztrQ0FDL0Ysb0JBQUNhLGVBQWM7d0JBQUNILFFBQVEsSUFBSSxDQUFDZixXQUFXO3dCQUFFZ0IsUUFBUSxJQUFJLENBQUNwQixXQUFXO3dCQUFFcUIsVUFBVSxJQUFJLENBQUNaLGFBQWE7O2tDQUNoRyxvQkFBQ2MscUJBQWtCO3dCQUFDQyxTQUFTLElBQUksQ0FBQ2hDLFlBQVk7O2lCQUUvQztZQUNIOzs7V0E5RG1CSjttQkFBYXFDLGFBQU87QUFnRXZDLGdCQWhFbUJyQyxNQWdFWnNDLFdBQVU7QUFFakIsZ0JBbEVtQnRDLE1Ba0VadUMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==