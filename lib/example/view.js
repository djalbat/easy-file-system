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
        _define_property(_assert_this_initialized(_this), "createFilePathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.createFilePath();
        });
        _define_property(_assert_this_initialized(_this), "createDirectoryPathButtonClickHandler", function(event, element) {
            var Explorer = _this.getFirstExplorer();
            Explorer.createDirectoryPath();
        });
        _define_property(_assert_this_initialized(_this), "editSelectedPathButtonClickHandler", function(event, element) {
            var firstExplorer = _this.getFirstExplorer();
            firstExplorer.editSelectedPath();
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
                        onRemove: this.removeHandler,
                        onRename: this.renameHandler,
                        onCreate: this.createHandler,
                        onSelect: this.selectHandler
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
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmNyZWF0ZUZpbGVQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgRXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKTtcblxuICAgIEV4cGxvcmVyLmNyZWF0ZURpcmVjdG9yeVBhdGgoKTtcbiAgfVxuXG4gIGVkaXRTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmaXJzdEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBmaXJzdEV4cGxvcmVyLmVkaXRTZWxlY3RlZFBhdGgoKTtcbiAgfVxuXG4gIG9wZW5IYW5kbGVyID0gKGZpbGVQYXRoLCBleHBsb3JlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiLCBmaWxlUGF0aClcbiAgfVxuXG4gIG1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICByZW5hbWVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVuYW1lXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgY3JlYXRlSGFuZGxlciA9IChwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHNlbGVjdEhhbmRsZXIgPSAocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RcIiwgcGF0aCwgc2VsZWN0ZWQpXG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uT3Blbj17dGhpcy5vcGVuSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17dGhpcy5yZW5hbWVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdEhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxTZWNvbmRFeHBsb3JlciBvbk9wZW49e3RoaXMub3BlbkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLm1vdmVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25SZW5hbWU9e3RoaXMucmVuYW1lSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZT17dGhpcy5jcmVhdGVIYW5kbGVyfVxuICAgICAgLz4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRmlsZVBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBDcmVhdGUgZmlsZSBwYXRoXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBkaXJlY3RvcnkgcGF0aFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVkaXRTZWxlY3RlZFBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBFZGl0IHNlbGVjdGVkIHBhdGhcbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmlldyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImZpcnN0RXhwbG9yZXIiLCJnZXRGaXJzdEV4cGxvcmVyIiwiY3JlYXRlRmlsZVBhdGgiLCJjcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiRXhwbG9yZXIiLCJjcmVhdGVEaXJlY3RvcnlQYXRoIiwiZWRpdFNlbGVjdGVkUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImVkaXRTZWxlY3RlZFBhdGgiLCJvcGVuSGFuZGxlciIsImZpbGVQYXRoIiwiZXhwbG9yZXIiLCJjb25zb2xlIiwibG9nIiwibW92ZUhhbmRsZXIiLCJwYXRoTWFwcyIsImRvbmUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSGFuZGxlciIsInJlbmFtZUhhbmRsZXIiLCJjcmVhdGVIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInBhdGgiLCJzZWxlY3RlZCIsImdldEV4cGxvcmVycyIsImV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJleHBsb3JlcnMiLCJnZXRTZWNvbmRFeHBsb3JlciIsInNlY29uZEV4cGxvcmVyIiwiY2hpbGRFbGVtZW50cyIsIlJ1YmJpc2hCaW4iLCJvblJlbW92ZSIsIkZpcnN0RXhwbG9yZXIiLCJvbk9wZW4iLCJvbk1vdmUiLCJvblJlbmFtZSIsIm9uQ3JlYXRlIiwib25TZWxlY3QiLCJTZWNvbmRFeHBsb3JlciIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztvQkFWRzt5QkFDTzs2REFFWjtpRUFDSTs0REFDRzs2REFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxxQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJJLGtEQUFBQSxvQ0FBbUMsU0FBQ0MsT0FBT0MsU0FBWTtZQUNy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