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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSdWJiaXNoQmluIGZyb20gXCIuL3ZpZXcvcnViYmlzaEJpblwiO1xuaW1wb3J0IEZpcnN0RXhwbG9yZXIgZnJvbSBcIi4vdmlldy9leHBsb3Jlci9maXJzdFwiO1xuaW1wb3J0IFNlY29uZEV4cGxvcmVyIGZyb20gXCIuL3ZpZXcvZXhwbG9yZXIvc2Vjb25kXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IEV4cGxvcmVyID0gdGhpcy5nZXRGaXJzdEV4cGxvcmVyKCk7XG5cbiAgICBFeHBsb3Jlci5jcmVhdGVEaXJlY3RvcnlQYXRoKCk7XG4gIH1cblxuICBlZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZmlyc3RFeHBsb3JlciA9IHRoaXMuZ2V0Rmlyc3RFeHBsb3JlcigpO1xuXG4gICAgZmlyc3RFeHBsb3Jlci5lZGl0U2VsZWN0ZWRQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RXhwbG9yZXIgPSB0aGlzLmdldEZpcnN0RXhwbG9yZXIoKTtcblxuICAgIGZpcnN0RXhwbG9yZXIuY3JlYXRlRmlsZVBhdGgoKTtcbiAgfVxuXG4gIG9wZW5IYW5kbGVyID0gKGZpbGVQYXRoLCBleHBsb3JlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiLCBmaWxlUGF0aClcbiAgfVxuXG4gIGVkaXRIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZWRpdFwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIG1vdmVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibW92ZVwiLCBKU09OLnN0cmluZ2lmeShwYXRoTWFwcywgbnVsbCwgXCIgIFwiKSlcblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIHJlbW92ZUhhbmRsZXIgPSAocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZW1vdmVcIiwgSlNPTi5zdHJpbmdpZnkocGF0aE1hcHMsIG51bGwsIFwiICBcIikpXG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBjcmVhdGVIYW5kbGVyID0gKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlXCIsIEpTT04uc3RyaW5naWZ5KHBhdGhNYXBzLCBudWxsLCBcIiAgXCIpKVxuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgc2VsZWN0SGFuZGxlciA9IChwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHksIGV4cGxvcmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RcIiwgcGF0aCwgc2VsZWN0ZWQsIHJlYWRPbmx5KVxuICB9XG5cbiAgZ2V0RXhwbG9yZXJzKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyRGl2Q2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImRpdi5leHBsb3JlclwiKSxcbiAgICAgICAgICBleHBsb3JlcnMgPSBleHBsb3JlckRpdkNoaWxkRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVycztcbiAgfVxuXG4gIGdldEZpcnN0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJzID0gdGhpcy5nZXRFeHBsb3JlcnMoKSxcbiAgICAgICAgICBmaXJzdEV4cGxvcmVyID0gZmlyc3QoZXhwbG9yZXJzKTtcblxuICAgIHJldHVybiBmaXJzdEV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0U2Vjb25kRXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXJzID0gdGhpcy5nZXRFeHBsb3JlcnMoKSxcbiAgICAgICAgICBzZWNvbmRFeHBsb3JlciA9IHNlY29uZChleHBsb3JlcnMpO1xuXG4gICAgcmV0dXJuIHNlY29uZEV4cGxvcmVyO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJ1YmJpc2hCaW4gb25SZW1vdmU9e3RoaXMucmVtb3ZlSGFuZGxlcn0gLz4sXG4gICAgICA8Rmlyc3RFeHBsb3JlciBvbk9wZW49e3RoaXMub3BlbkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMubW92ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvbkVkaXQ9e3RoaXMuZWRpdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdEhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxTZWNvbmRFeHBsb3JlciBvbk9wZW49e3RoaXMub3BlbkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLm1vdmVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5lZGl0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17dGhpcy5yZW1vdmVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlPXt0aGlzLmNyZWF0ZUhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIENyZWF0ZSBmaWxlIHBhdGhcbiAgICAgIDwvQnV0dG9uPixcbiAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmVhdGVEaXJlY3RvcnlQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgQ3JlYXRlIGRpcmVjdG9yeSBwYXRoXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuZWRpdFNlbGVjdGVkUGF0aEJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIEVkaXQgc2VsZWN0ZWQgcGF0aFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiY3JlYXRlRGlyZWN0b3J5UGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIkV4cGxvcmVyIiwiZ2V0Rmlyc3RFeHBsb3JlciIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJlZGl0U2VsZWN0ZWRQYXRoQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZmlyc3RFeHBsb3JlciIsImVkaXRTZWxlY3RlZFBhdGgiLCJjcmVhdGVGaWxlUGF0aEJ1dHRvbkNsaWNrSGFuZGxlciIsImNyZWF0ZUZpbGVQYXRoIiwib3BlbkhhbmRsZXIiLCJmaWxlUGF0aCIsImV4cGxvcmVyIiwiY29uc29sZSIsImxvZyIsImVkaXRIYW5kbGVyIiwicGF0aE1hcHMiLCJkb25lIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vdmVIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsImNyZWF0ZUhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwicGF0aCIsInNlbGVjdGVkIiwicmVhZE9ubHkiLCJnZXRFeHBsb3JlcnMiLCJleHBsb3JlckRpdkNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXJzIiwiZ2V0U2Vjb25kRXhwbG9yZXIiLCJzZWNvbmRFeHBsb3JlciIsImNoaWxkRWxlbWVudHMiLCJSdWJiaXNoQmluIiwib25SZW1vdmUiLCJGaXJzdEV4cGxvcmVyIiwib25PcGVuIiwib25Nb3ZlIiwib25FZGl0Iiwib25DcmVhdGUiLCJvblNlbGVjdCIsIlNlY29uZEV4cGxvcmVyIiwiQnV0dG9uIiwib25DbGljayIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O29CQVZHO3lCQUNPOzZEQUVaO2lFQUNJOzREQUNHOzZEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkksa0RBQUFBLHlDQUF3QyxTQUFDQyxPQUFPQztZQUM5QyxJQUFNQyxXQUFXLE1BQUtDLGdCQUFnQjtZQUV0Q0QsU0FBU0Us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