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
        _define_property(_assert_this_initialized(_this), "openHandler", function(filePath, explorer) {
            console.log("open", filePath);
        });
        _define_property(_assert_this_initialized(_this), "moveHandler", function(pathMaps, explorer, done) {
            console.log("move", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "removeHandler", function(pathMaps, explorer, done) {
            console.log("remove", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "renameHandler", function(pathMaps, explorer, done) {
            console.log("rename", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "createHandler", function(pathMaps, explorer, done) {
            console.log("create", JSON.stringify(pathMaps, null, "  "));
            done();
        });
        _define_property(_assert_this_initialized(_this), "selectHandler", function(path, selected, readOnly, explorer) {
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
                        onRemove: this.removeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_first.default, {
                        onOpen: this.openHandler,
                        onMove: this.moveHandler,
                        onRemove: this.removeHandler,
                        onRename: this.renameHandler,
                        onCreate: this.createHandler,
                        onSelect: this.selectHandler,
                        singleClick: true
                    }),
                    /*#__PURE__*/ React.createElement(_second.default, {
                        onOpen: this.openHandler,
                        onMove: this.moveHandler,
                        onRename: this.renameHandler,
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
                        onClick: this.renameSelectedPathButtonClickHandler
                    }, "Rename selected path")
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLnJlbmFtZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICBvcGVuSGFuZGxlciA9IChmaWxlUGF0aCwgZXhwbG9yZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIiwgZmlsZVBhdGgpXG4gIH1cblxuICBtb3ZlSGFuZGxlciA9IChwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICByZW1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgcmVuYW1lSGFuZGxlciA9IChwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlbmFtZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBzZWxlY3RIYW5kbGVyID0gKHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdFwiLCBwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHkpXG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uT3Blbj17dGhpcy5vcGVuSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17dGhpcy5yZW5hbWVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBzaW5nbGVDbGlja1xuICAgICAgLz4sXG4gICAgICA8U2Vjb25kRXhwbG9yZXIgb25PcGVuPXt0aGlzLm9wZW5IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17dGhpcy5yZW5hbWVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlSGFuZGxlcn1cbiAgICAgIC8+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUZpbGVQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGZpbGUgcGF0aFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZURpcmVjdG9yeVBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBDcmVhdGUgZGlyZWN0b3J5IHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5yZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBSZW5hbWUgc2VsZWN0ZWQgcGF0aFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIkV4cGxvcmVyIiwiZ2V0Rmlyc3RFeHBsb3JlciIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJyZW5hbWVTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJmaXJzdEV4cGxvcmVyIiwicmVuYW1lU2VsZWN0ZWRQYXRoIiwiY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIiLCJjcmVhdGVGaWxlUGF0aCIsIm9wZW5IYW5kbGVyIiwiZmlsZVBhdGgiLCJleHBsb3JlciIsImNvbnNvbGUiLCJsb2ciLCJtb3ZlSGFuZGxlciIsInBhdGhNYXBzIiwiZG9uZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVIYW5kbGVyIiwicmVuYW1lSGFuZGxlciIsImNyZWF0ZUhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwicGF0aCIsInNlbGVjdGVkIiwicmVhZE9ubHkiLCJnZXRFeHBsb3JlcnMiLCJleHBsb3JlckRpdkNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXJzIiwiZ2V0U2Vjb25kRXhwbG9yZXIiLCJzZWNvbmRFeHBsb3JlciIsImNoaWxkRWxlbWVudHMiLCJSdWJiaXNoQmluIiwib25SZW1vdmUiLCJGaXJzdEV4cGxvcmVyIiwib25PcGVuIiwib25Nb3ZlIiwib25SZW5hbWUiLCJvbkNyZWF0ZSIsIm9uU2VsZWN0Iiwic2luZ2xlQ2xpY2siLCJTZWNvbmRFeHBsb3JlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztvQkFWRzt5QkFDTzs2REFFWjtpRUFDSTs0REFDRzs2REFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxxQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7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