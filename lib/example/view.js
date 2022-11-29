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
var _button = /*#__PURE__*/ _interopRequireDefault(require("./view/button"));
var _rubbishBin = /*#__PURE__*/ _interopRequireDefault(require("./view/rubbishBin"));
var _first = /*#__PURE__*/ _interopRequireDefault(require("./view/explorer/first"));
var _second = /*#__PURE__*/ _interopRequireDefault(require("./view/explorer/second"));
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
        _defineProperty(_assertThisInitialized(_this), "createFilePathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.createFilePath();
        });
        _defineProperty(_assertThisInitialized(_this), "createDirectoryPathButtonClickHandler", function(event, element) {
            var Explorer = _this.getFirstExplorer();
            Explorer.createDirectoryPath();
        });
        _defineProperty(_assertThisInitialized(_this), "editSelectedPathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.editSelectedPath();
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
        _defineProperty(_assertThisInitialized(_this), "renameHandler", function(pathMaps, done) {
            console.log("rename", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _defineProperty(_assertThisInitialized(_this), "createHandler", function(pathMaps, done) {
            console.log("create", JSON.stringify(pathMaps, null, "  "));
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
                        onOpen: this.openHandler,
                        onMove: this.moveHandler,
                        onRemove: this.removeHandler,
                        onRename: this.renameHandler,
                        onCreate: this.createHandler
                    }),
                    /*#__PURE__*/ React.createElement(_second.default, {
                        onOpen: this.openHandler,
                        onMove: this.moveHandler,
                        onRemove: this.removeHandler,
                        onRename: this.renameHandler,
                        onCreate: this.createHandler
                    }),
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.createFilePathButtonClickHandler
                    }, "Create file path"),
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.createDirectoryPathButtonClickHandler
                    }, "Create directory path"),
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.editSelectedPathButtonClickHandler
                    }, "Edit selected path")
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgRXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKTtcblxuICAgIEV4cGxvcmVyLmNyZWF0ZURpcmVjdG9yeVBhdGgoKTtcbiAgfVxuXG4gIGVkaXRTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmVkaXRTZWxlY3RlZFBhdGgoKTtcbiAgfVxuXG4gIG9wZW5IYW5kbGVyID0gKGZpbGVQYXRoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIsIGZpbGVQYXRoKVxuICB9XG5cbiAgbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICByZW1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICByZW5hbWVIYW5kbGVyID0gKHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW5hbWVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVyID0gKHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uT3Blbj17dGhpcy5vcGVuSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17dGhpcy5yZW5hbWVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlSGFuZGxlcn1cbiAgICAgIC8+LFxuICAgICAgPFNlY29uZEV4cGxvcmVyIG9uT3Blbj17dGhpcy5vcGVuSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMubW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucmVtb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17dGhpcy5yZW5hbWVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlPXt0aGlzLmNyZWF0ZUhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBmaWxlIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGRpcmVjdG9yeSBwYXRoXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuZWRpdFNlbGVjdGVkUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIEVkaXQgc2VsZWN0ZWQgcGF0aFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWaWV3IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsImNyZWF0ZUZpbGVQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZmlyc3RFeHBsb3JlciIsImdldEZpcnN0RXhwbG9yZXIiLCJjcmVhdGVGaWxlUGF0aCIsImNyZWF0ZURpcmVjdG9yeVBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJFeHBsb3JlciIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJlZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZWRpdFNlbGVjdGVkUGF0aCIsIm9wZW5IYW5kbGVyIiwiZmlsZVBhdGgiLCJjb25zb2xlIiwibG9nIiwibW92ZUhhbmRsZXIiLCJwYXRoTWFwcyIsImRvbmUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSGFuZGxlciIsInJlbmFtZUhhbmRsZXIiLCJjcmVhdGVIYW5kbGVyIiwiZ2V0RXhwbG9yZXJzIiwiZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImV4cGxvcmVycyIsImdldFNlY29uZEV4cGxvcmVyIiwic2Vjb25kRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiUnViYmlzaEJpbiIsIm9uUmVtb3ZlIiwiRmlyc3RFeHBsb3JlciIsIm9uT3BlbiIsIm9uTW92ZSIsIm9uUmVuYW1lIiwib25DcmVhdGUiLCJTZWNvbmRFeHBsb3JlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztvQkFWRzt5QkFDTzsyREFFWjsrREFDSTswREFDRzsyREFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNuQkksK0NBQUFBLG9DQUFtQyxTQUFDQyxPQUFPQyxTQUFZO1lBQ3JELElBQU1DLGdCQUFnQixNQUFLQyxnQkFBZ0I7WUFFM0NELGNBQWNFLGNBQWM7UUFDOUI7UUFFQUMsK0NBQUFBLHlDQUF3QyxTQUFDTCxPQUFPQyxTQUFZO1lBQzFELElBQU1LLFdBQVcsTUFBS0gsZ0JBQWdCO1lBRXRDRyxTQUFTQyxtQkFBbUI7UUFDOUI7UUFFQUMsK0NBQUFBLHNDQUFxQyxTQUFDUixPQUFPQyxTQUFZO1lBQ3ZELElBQU1DLGdCQUFnQixNQUFLQyxnQkFBZ0I7WUFFM0NELGNBQWNPLGdCQUFnQjtRQUNoQztRQUVBQywrQ0FB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