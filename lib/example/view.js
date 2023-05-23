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
        _define_property(_assert_this_initialized(_this), "selectHandler", function(path, selected, readOnly, explorer) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICBlZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZmlyc3RFeHBsb3JlciA9IHRoaXMuZ2V0Rmlyc3RFeHBsb3JlcigpO1xuXG4gICAgZmlyc3RFeHBsb3Jlci5lZGl0U2VsZWN0ZWRQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKTtcblxuICAgIGZpcnN0RXhwbG9yZXIuY3JlYXRlRmlsZVBhdGgoKTtcbiAgfVxuXG4gIG9wZW5IYW5kbGVyID0gKGZpbGVQYXRoLCBleHBsb3JlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiLCBmaWxlUGF0aClcbiAgfVxuXG4gIGVkaXRIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZWRpdFwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIG1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgc2VsZWN0SGFuZGxlciA9IChwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHksIGV4cGxvcmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RcIiwgcGF0aCwgc2VsZWN0ZWQpXG4gIH1cblxuICBnZXRFeHBsb3JlcnMoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmV4cGxvcmVyXCIpLFxuICAgICAgICAgIGV4cGxvcmVycyA9IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJzO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIGZpcnN0RXhwbG9yZXIgPSBmaXJzdChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwbG9yZXI7XG4gIH1cblxuICBnZXRTZWNvbmRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlcnMgPSB0aGlzLmdldEV4cGxvcmVycygpLFxuICAgICAgICAgIHNlY29uZEV4cGxvcmVyID0gc2Vjb25kKGV4cGxvcmVycyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwbG9yZXI7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UnViYmlzaEJpbiBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfSAvPixcbiAgICAgIDxGaXJzdEV4cGxvcmVyIG9uT3Blbj17dGhpcy5vcGVuSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5tb3ZlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5lZGl0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZT17dGhpcy5jcmVhdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2VsZWN0SGFuZGxlcn1cbiAgICAgIC8+LFxuICAgICAgPFNlY29uZEV4cGxvcmVyIG9uT3Blbj17dGhpcy5vcGVuSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMubW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25FZGl0PXt0aGlzLmVkaXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnJlbW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlSGFuZGxlcn1cbiAgICAgIC8+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUZpbGVQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGZpbGUgcGF0aFxuICAgICAgPC9CdXR0b24+LFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZURpcmVjdG9yeVBhdGhCdXR0b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICBDcmVhdGUgZGlyZWN0b3J5IHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5lZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgRWRpdCBzZWxlY3RlZCBwYXRoXG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIkV4cGxvcmVyIiwiZ2V0Rmlyc3RFeHBsb3JlciIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJlZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZmlyc3RFeHBsb3JlciIsImVkaXRTZWxlY3RlZFBhdGgiLCJjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImNyZWF0ZUZpbGVQYXRoIiwib3BlbkhhbmRsZXIiLCJmaWxlUGF0aCIsImV4cGxvcmVyIiwiY29uc29sZSIsImxvZyIsImVkaXRIYW5kbGVyIiwicGF0aE1hcHMiLCJkb25lIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vdmVIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsImNyZWF0ZUhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwicGF0aCIsInNlbGVjdGVkIiwicmVhZE9ubHkiLCJnZXRFeHBsb3JlcnMiLCJleHBsb3JlckRpdkNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXJzIiwiZ2V0U2Vjb25kRXhwbG9yZXIiLCJzZWNvbmRFeHBsb3JlciIsImNoaWxkRWxlbWVudHMiLCJSdWJiaXNoQmluIiwib25SZW1vdmUiLCJGaXJzdEV4cGxvcmVyIiwib25PcGVuIiwib25Nb3ZlIiwib25FZGl0Iiwib25DcmVhdGUiLCJvblNlbGVjdCIsIlNlY29uZEV4cGxvcmVyIiwiQnV0dG9uIiwib25DbGljayIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O29CQVZHO3lCQUNPOzZEQUVaO2lFQUNJOzREQUNHOzZEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUMsUUFBa0JDLDBCQUFsQkQsT0FBT0UsU0FBV0QsMEJBQVhDO0FBRUEsSUFBQSxBQUFNSCxxQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJJLGtEQUFBQSx5Q0FBd0MsU0FBQ0MsT0FBT0M7WUFDOUMsSUFBTUMsV0FBVyxNQUFLQztZQUV0QkQsU0FBU0U7UUFDWDtRQUVBQyxrREFBQUEsc0NBQXFDLFNBQUNMLE9BQU9DO1lBQzNDLElBQU1LLGdCQUFnQixNQUFLSDtZQUUzQkcsY0FBY0M7UUFDaEI7UUFFQUMsa0RBQUFBLG9DQUFtQyxTQUFDUixPQUFPQztZQUN6QyxJQUFNSyxnQkFBZ0IsTUFBS0g7WUFFM0JHLGNBQWNHO1FBQ2hCO1FBRUFDLGtEQUFBQSxlQUFjLFNBQUNDLFVBQVVDO1lBQ3ZCQyxRQUFRQyxJQUFJLFFBQVFIO1FBQ3RCO1FBRUFJLGtEQUFBQSxlQUFjLFNBQUNDLFVBQVVKLFVBQVVLO1lBQ2pDSixRQUFRQyxJQUFJLFFBQVFJLEtBQUtDLFVBQVVILFVBQVUsTUFBTTtZQUVuREM7UUFDRjtRQUVBRyxrREFBQUEsZUFBYyxTQUFDSixVQUFVSixVQUFVSztZQUNqQ0osUUFBUUMsSUFBSSxRQUFRSSxLQUFLQyxVQUFVSCxVQUFVLE1BQU07WUFFbkRDO1FBQ0Y7UUFFQUksa0RBQUFBLGlCQUFnQixTQUFDTCxVQUFVSixVQUFVSztZQUNuQ0osUUFBUUMsSUFBSSxVQUFVSSxLQUFLQyxVQUFVSCxVQUFVLE1BQU07WUFFckRDO1FBQ0Y7UUFFQUssa0RBQUFBLGlCQUFnQixTQUFDTixVQUFVSixVQUFVSztZQUNuQ0osUUFBUUMsSUFBSSxVQUFVSSxLQUFLQyxVQUFVSCxVQUFVLE1BQU07WUFFckRDO1FBQ0Y7UUFFQU0sa0RBQUFBLGlCQUFnQixTQUFDQyxNQUFNQyxVQUFVQyxVQUFVZDtZQUN6Q0MsUUFBUUMsSUFBSSxVQUFVVSxNQUFNQztRQUM5Qjs7O2tCQWpEbUI5Qjs7WUFtRG5CZ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQixJQUFJLENBQUNDLGlCQUFpQixpQkFDakRDLFlBQVlGLDBCQUEwQixHQUFHO2dCQUUvQyxPQUFPRTtZQUNUOzs7WUFFQTNCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNMkIsWUFBWSxJQUFJLENBQUNILGdCQUNqQnJCLGdCQUFnQlYsTUFBTWtDO2dCQUU1QixPQUFPeEI7WUFDVDs7O1lBRUF5QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsWUFBWSxJQUFJLENBQUNILGdCQUNqQkssaUJBQWlCbEMsT0FBT2dDO2dCQUU5QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDO3dCQUFXQyxVQUFVLElBQUksQ0FBQ2Q7O2tDQUMzQixvQkFBQ2U7d0JBQWNDLFFBQVEsSUFBSSxDQUFDM0I7d0JBQ2I0QixRQUFRLElBQUksQ0FBQ2xCO3dCQUNibUIsUUFBUSxJQUFJLENBQUN4Qjt3QkFDYm9CLFVBQVUsSUFBSSxDQUFDZDt3QkFDZm1CLFVBQVUsSUFBSSxDQUFDbEI7d0JBQ2ZtQixVQUFVLElBQUksQ0FBQ2xCOztrQ0FFOUIsb0JBQUNtQjt3QkFBZUwsUUFBUSxJQUFJLENBQUMzQjt3QkFDYjRCLFFBQVEsSUFBSSxDQUFDbEI7d0JBQ2JtQixRQUFRLElBQUksQ0FBQ3hCO3dCQUNib0IsVUFBVSxJQUFJLENBQUNkO3dCQUNmbUIsVUFBVSxJQUFJLENBQUNsQjs7a0NBRS9CLG9CQUFDcUI7d0JBQU9DLFNBQVMsSUFBSSxDQUFDcEM7dUJBQWtDO2tDQUd4RCxvQkFBQ21DO3dCQUFPQyxTQUFTLElBQUksQ0FBQzdDO3VCQUF1QztrQ0FHN0Qsb0JBQUM0Qzt3QkFBT0MsU0FBUyxJQUFJLENBQUN2Qzt1QkFBb0M7aUJBSTNEO1lBQ0g7OztXQXBHbUJWO3FCQUFha0Q7QUFzR2hDLGlCQXRHbUJsRCxNQXNHWm1ELFdBQVU7QUFFakIsaUJBeEdtQm5ELE1Bd0dab0QscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==