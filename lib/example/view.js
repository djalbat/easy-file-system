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
var _button = /*#__PURE__*/ _interop_require_default(require("./view/button"));
var _rubbishBin = /*#__PURE__*/ _interop_require_default(require("./view/rubbishBin"));
var _first = /*#__PURE__*/ _interop_require_default(require("./view/explorer/first"));
var _second = /*#__PURE__*/ _interop_require_default(require("./view/explorer/second"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "createDirectoryPathButtonClickHandler", function(event, element) {
            var Explorer = _this.getFirstExplorer();
            Explorer.createDirectoryPath();
        });
        _define_property(_assert_this_initialized(_this), "renameSelectedPathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.renameSelectedPath();
        });
        _define_property(_assert_this_initialized(_this), "createFilePathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.createFilePath();
        });
        _define_property(_assert_this_initialized(_this), "openCustomHandler", function(filePath, explorer) {
            console.log("open", filePath);
        });
        _define_property(_assert_this_initialized(_this), "moveCustomHandler", function(pathMaps, explorer, element, done) {
            console.log("move", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "removeCustomHandler", function(pathMaps, explorer, element, done) {
            console.log("remove", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "renameCustomHandler", function(pathMaps, explorer, element, done) {
            console.log("rename", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "createCustomHandler", function(pathMaps, explorer, element, done) {
            console.log("create", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "selectCustomHandler", function(path, selected, readOnly, explorer) {
            console.log("select", path, selected, readOnly);
        });
        return _this;
    }
    _create_class(View, [
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
                        onCustomRemove: this.removeCustomHandler
                    }),
                    /*#__PURE__*/ React.createElement(_first.default, {
                        onCustomOpen: this.openCustomHandler,
                        onCustomMove: this.moveCustomHandler,
                        onCustomRemove: this.removeCustomHandler,
                        onCustomRename: this.renameCustomHandler,
                        onCustomCreate: this.createCustomHandler,
                        onCustomSelect: this.selectCustomHandler
                    }),
                    /*#__PURE__*/ React.createElement(_second.default, {
                        onCustomOpen: this.openCustomHandler,
                        onCustomMove: this.moveCustomHandler,
                        onCustomRename: this.renameCustomHandler,
                        onCustomRemove: this.removeCustomHandler,
                        onCustomCreate: this.createCustomHandler
                    }),
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.renameSelectedPathButtonClickHandler
                    }, "Rename selected path"),
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.createFilePathButtonClickHandler
                    }, "Create file path"),
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.createDirectoryPathButtonClickHandler
                    }, "Create directory path")
                ];
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLnJlbmFtZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICBvcGVuQ3VzdG9tSGFuZGxlciA9IChmaWxlUGF0aCwgZXhwbG9yZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIiwgZmlsZVBhdGgpXG4gIH1cblxuICBtb3ZlQ3VzdG9tSGFuZGxlciA9IChwYXRoTWFwcywgZXhwbG9yZXIsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICByZW1vdmVDdXN0b21IYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgcmVuYW1lQ3VzdG9tSGFuZGxlciA9IChwYXRoTWFwcywgZXhwbG9yZXIsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlbmFtZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUN1c3RvbUhhbmRsZXIgPSAocGF0aE1hcHMsIGV4cGxvcmVyLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBzZWxlY3RDdXN0b21IYW5kbGVyID0gKHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdFwiLCBwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHkpXG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvbkN1c3RvbVJlbW92ZT17dGhpcy5yZW1vdmVDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uQ3VzdG9tT3Blbj17dGhpcy5vcGVuQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tTW92ZT17dGhpcy5tb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVtb3ZlPXt0aGlzLnJlbW92ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVJlbmFtZT17dGhpcy5yZW5hbWVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21DcmVhdGU9e3RoaXMuY3JlYXRlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU2VsZWN0PXt0aGlzLnNlbGVjdEN1c3RvbUhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxTZWNvbmRFeHBsb3JlciBvbkN1c3RvbU9wZW49e3RoaXMub3BlbkN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Nb3ZlPXt0aGlzLm1vdmVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVuYW1lPXt0aGlzLnJlbmFtZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21SZW1vdmU9e3RoaXMucmVtb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUNyZWF0ZT17dGhpcy5jcmVhdGVDdXN0b21IYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVuYW1lU2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgUmVuYW1lIHNlbGVjdGVkIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBmaWxlIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGRpcmVjdG9yeSBwYXRoXG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVmlldyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJjcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiRXhwbG9yZXIiLCJnZXRGaXJzdEV4cGxvcmVyIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImZpcnN0RXhwbG9yZXIiLCJyZW5hbWVTZWxlY3RlZFBhdGgiLCJjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImNyZWF0ZUZpbGVQYXRoIiwib3BlbkN1c3RvbUhhbmRsZXIiLCJmaWxlUGF0aCIsImV4cGxvcmVyIiwiY29uc29sZSIsImxvZyIsIm1vdmVDdXN0b21IYW5kbGVyIiwicGF0aE1hcHMiLCJkb25lIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUN1c3RvbUhhbmRsZXIiLCJyZW5hbWVDdXN0b21IYW5kbGVyIiwiY3JlYXRlQ3VzdG9tSGFuZGxlciIsInNlbGVjdEN1c3RvbUhhbmRsZXIiLCJwYXRoIiwic2VsZWN0ZWQiLCJyZWFkT25seSIsImdldEV4cGxvcmVycyIsImV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJleHBsb3JlcnMiLCJnZXRTZWNvbmRFeHBsb3JlciIsInNlY29uZEV4cGxvcmVyIiwiY2hpbGRFbGVtZW50cyIsIlJ1YmJpc2hCaW4iLCJvbkN1c3RvbVJlbW92ZSIsIkZpcnN0RXhwbG9yZXIiLCJvbkN1c3RvbU9wZW4iLCJvbkN1c3RvbU1vdmUiLCJvbkN1c3RvbVJlbmFtZSIsIm9uQ3VzdG9tQ3JlYXRlIiwib25DdXN0b21TZWxlY3QiLCJTZWNvbmRFeHBsb3JlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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