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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "createDirectoryPathButtonClickHandler", function(event, element) {
            var Explorer = _this.getFirstExplorer();
            Explorer.createDirectoryPath();
        }), _define_property(_this, "renameSelectedPathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.renameSelectedPath();
        }), _define_property(_this, "createFilePathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.createFilePath();
        }), _define_property(_this, "renameCustomHandler", function(event, element, pathMaps, done) {
            console.log("rename", JSON.stringify(pathMaps, null, "  "));
            done();
        }), _define_property(_this, "createCustomHandler", function(event, element, pathMaps, done) {
            console.log("create", JSON.stringify(pathMaps, null, "  "));
            done();
        }), _define_property(_this, "selectCustomHandler", function(event, element, path, selected, readOnly) {
            console.log("select", path, selected, readOnly);
        }), _define_property(_this, "removeCustomHandler", function(event, element, pathMaps, done) {
            console.log("remove", JSON.stringify(pathMaps, null, "  "));
            done();
        }), _define_property(_this, "moveCustomHandler", function(event, element, pathMaps, done) {
            console.log("move", JSON.stringify(pathMaps, null, "  "));
            done();
        }), _define_property(_this, "openCustomHandler", function(event, element, filePath) {
            console.log("open", filePath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLnJlbmFtZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICByZW5hbWVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVuYW1lXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgY3JlYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHNlbGVjdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0XCIsIHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSlcbiAgfVxuXG4gIHJlbW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBvcGVuQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZmlsZVBhdGgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIiwgZmlsZVBhdGgpXG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvbkN1c3RvbVJlbW92ZT17dGhpcy5yZW1vdmVDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uQ3VzdG9tT3Blbj17dGhpcy5vcGVuQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tTW92ZT17dGhpcy5tb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVtb3ZlPXt0aGlzLnJlbW92ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVJlbmFtZT17dGhpcy5yZW5hbWVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21DcmVhdGU9e3RoaXMuY3JlYXRlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU2VsZWN0PXt0aGlzLnNlbGVjdEN1c3RvbUhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxTZWNvbmRFeHBsb3JlciBvbkN1c3RvbU9wZW49e3RoaXMub3BlbkN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Nb3ZlPXt0aGlzLm1vdmVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUmVuYW1lPXt0aGlzLnJlbmFtZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21SZW1vdmU9e3RoaXMucmVtb3ZlQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUNyZWF0ZT17dGhpcy5jcmVhdGVDdXN0b21IYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVuYW1lU2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgUmVuYW1lIHNlbGVjdGVkIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBmaWxlIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGRpcmVjdG9yeSBwYXRoXG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVmlldyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJjcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiRXhwbG9yZXIiLCJnZXRGaXJzdEV4cGxvcmVyIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImZpcnN0RXhwbG9yZXIiLCJyZW5hbWVTZWxlY3RlZFBhdGgiLCJjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImNyZWF0ZUZpbGVQYXRoIiwicmVuYW1lQ3VzdG9tSGFuZGxlciIsInBhdGhNYXBzIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlQ3VzdG9tSGFuZGxlciIsInNlbGVjdEN1c3RvbUhhbmRsZXIiLCJwYXRoIiwic2VsZWN0ZWQiLCJyZWFkT25seSIsInJlbW92ZUN1c3RvbUhhbmRsZXIiLCJtb3ZlQ3VzdG9tSGFuZGxlciIsIm9wZW5DdXN0b21IYW5kbGVyIiwiZmlsZVBhdGgiLCJnZXRFeHBsb3JlcnMiLCJleHBsb3JlckRpdkNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXJzIiwiZ2V0U2Vjb25kRXhwbG9yZXIiLCJzZWNvbmRFeHBsb3JlciIsImNoaWxkRWxlbWVudHMiLCJSdWJiaXNoQmluIiwib25DdXN0b21SZW1vdmUiLCJGaXJzdEV4cGxvcmVyIiwib25DdXN0b21PcGVuIiwib25DdXN0b21Nb3ZlIiwib25DdXN0b21SZW5hbWUiLCJvbkN1c3RvbUNyZWF0ZSIsIm9uQ3VzdG9tU2VsZWN0IiwiU2Vjb25kRXhwbG9yZXIiLCJCdXR0b24iLCJvbkNsaWNrIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7b0JBVkc7eUJBQ087NkRBRVo7aUVBQ0k7NERBQ0c7NkRBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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