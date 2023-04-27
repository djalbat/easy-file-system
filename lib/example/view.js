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
        _define_property(_assert_this_initialized(_this), "editSelectedPathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.editSelectedPath();
        });
        _define_property(_assert_this_initialized(_this), "createFilePathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.createFilePath();
        });
        _define_property(_assert_this_initialized(_this), "openHandler", function(filePath, explorer) {
            console.log("open", filePath);
        });
        _define_property(_assert_this_initialized(_this), "editHandler", function(pathMaps, explorer, done) {
            console.log("edit", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "moveHandler", function(pathMaps, explorer, done) {
            console.log("move", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "removeHandler", function(pathMaps, explorer, done) {
            console.log("remove", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "createHandler", function(pathMaps, explorer, done) {
            console.log("create", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "selectHandler", function(path, selected, explorer) {
            console.log("select", path, selected);
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
                        onRemove: this.removeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_first.default, {
                        onOpen: this.openHandler,
                        onMove: this.moveHandler,
                        onEdit: this.editHandler,
                        onRemove: this.removeHandler,
                        onCreate: this.createHandler,
                        onSelect: this.selectHandler
                    }),
                    /*#__PURE__*/ React.createElement(_second.default, {
                        onOpen: this.openHandler,
                        onMove: this.moveHandler,
                        onEdit: this.editHandler,
                        onRemove: this.removeHandler,
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
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICBlZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZmlyc3RFeHBsb3JlciA9IHRoaXMuZ2V0Rmlyc3RFeHBsb3JlcigpO1xuXG4gICAgZmlyc3RFeHBsb3Jlci5lZGl0U2VsZWN0ZWRQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKTtcblxuICAgIGZpcnN0RXhwbG9yZXIuY3JlYXRlRmlsZVBhdGgoKTtcbiAgfVxuXG4gIG9wZW5IYW5kbGVyID0gKGZpbGVQYXRoLCBleHBsb3JlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiLCBmaWxlUGF0aClcbiAgfVxuXG4gIGVkaXRIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZWRpdFwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIG1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgc2VsZWN0SGFuZGxlciA9IChwYXRoLCBzZWxlY3RlZCwgZXhwbG9yZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdFwiLCBwYXRoLCBzZWxlY3RlZClcbiAgfVxuXG4gIGdldEV4cGxvcmVycygpIHtcbiAgICBjb25zdCBleHBsb3JlckRpdkNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJkaXYuZXhwbG9yZXJcIiksXG4gICAgICAgICAgZXhwbG9yZXJzID0gZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcnM7XG4gIH1cblxuICBnZXRGaXJzdEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVycyA9IHRoaXMuZ2V0RXhwbG9yZXJzKCksXG4gICAgICAgICAgZmlyc3RFeHBsb3JlciA9IGZpcnN0KGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gZmlyc3RFeHBsb3JlcjtcbiAgfVxuXG4gIGdldFNlY29uZEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVycyA9IHRoaXMuZ2V0RXhwbG9yZXJzKCksXG4gICAgICAgICAgc2Vjb25kRXhwbG9yZXIgPSBzZWNvbmQoZXhwbG9yZXJzKTtcblxuICAgIHJldHVybiBzZWNvbmRFeHBsb3JlcjtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxSdWJiaXNoQmluIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9IC8+LFxuICAgICAgPEZpcnN0RXhwbG9yZXIgb25PcGVuPXt0aGlzLm9wZW5IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLm1vdmVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25FZGl0PXt0aGlzLmVkaXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucmVtb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlPXt0aGlzLmNyZWF0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZWxlY3RIYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8U2Vjb25kRXhwbG9yZXIgb25PcGVuPXt0aGlzLm9wZW5IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9e3RoaXMuZWRpdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucmVtb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZT17dGhpcy5jcmVhdGVIYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBDcmVhdGUgZmlsZSBwYXRoXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBkaXJlY3RvcnkgcGF0aFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVkaXRTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBFZGl0IHNlbGVjdGVkIHBhdGhcbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmlldyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJjcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiRXhwbG9yZXIiLCJnZXRGaXJzdEV4cGxvcmVyIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImVkaXRTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJmaXJzdEV4cGxvcmVyIiwiZWRpdFNlbGVjdGVkUGF0aCIsImNyZWF0ZUZpbGVQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiY3JlYXRlRmlsZVBhdGgiLCJvcGVuSGFuZGxlciIsImZpbGVQYXRoIiwiZXhwbG9yZXIiLCJjb25zb2xlIiwibG9nIiwiZWRpdEhhbmRsZXIiLCJwYXRoTWFwcyIsImRvbmUiLCJKU09OIiwic3RyaW5naWZ5IiwibW92ZUhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiY3JlYXRlSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJwYXRoIiwic2VsZWN0ZWQiLCJnZXRFeHBsb3JlcnMiLCJleHBsb3JlckRpdkNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXJzIiwiZ2V0U2Vjb25kRXhwbG9yZXIiLCJzZWNvbmRFeHBsb3JlciIsImNoaWxkRWxlbWVudHMiLCJSdWJiaXNoQmluIiwib25SZW1vdmUiLCJGaXJzdEV4cGxvcmVyIiwib25PcGVuIiwib25Nb3ZlIiwib25FZGl0Iiwib25DcmVhdGUiLCJvblNlbGVjdCIsIlNlY29uZEV4cGxvcmVyIiwiQnV0dG9uIiwib25DbGljayIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O29CQVZHO3lCQUNPOzZEQUVaO2lFQUNJOzREQUNHOzZEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkksa0RBQUFBLHlDQUF3QyxTQUFDQyxPQUFPQyxTQUFZO1lBQzFELElBQU1DLFdBQVcsTUFB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