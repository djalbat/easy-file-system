"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _necessary = require("necessary");
var _drop = _interopRequireDefault(require("./mixins/drop"));
var _constants = require("./constants");
var _pathMap = require("./utilities/pathMap");
var _types = require("./types");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  min-width: 10rem;\n  min-height: 10rem;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
var RubbishBin = /*#__PURE__*/ function(Element1) {
    _inherits(RubbishBin, Element1);
    function RubbishBin() {
        _classCallCheck(this, RubbishBin);
        return _possibleConstructorReturn(this, _getPrototypeOf(RubbishBin).apply(this, arguments));
    }
    _createClass(RubbishBin, [
        {
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
            }
        },
        {
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var type = pathMap.type;
                switch(type){
                    case _types.FILE_NAME_DRAG_TYPE:
                        this.removeFileNameDragEntryItem(pathMap, explorer);
                        break;
                }
                switch(type){
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        this.removeDirectoryNameDragEntryItem(pathMap, explorer);
                        break;
                }
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(pathMaps, explorer) {
                this.callRemoveHandlers(pathMaps, (function() {
                    pathMaps.forEach((function(pathMap) {
                        return this.removeDragEntryItem(pathMap, explorer);
                    }).bind(this));
                }).bind(this));
            }
        },
        {
            key: "removeFileNameDragEntryItem",
            value: function removeFileNameDragEntryItem(pathMap, explorer) {
                var sourcePath = pathMap.sourcePath, targetPath = pathMap.targetPath;
                explorer.removeFilePath(sourcePath);
                if (targetPath !== null) {
                    explorer.addFilePath(targetPath);
                }
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourcePath = pathMap.sourcePath, targetPath = pathMap.targetPath;
                explorer.removeDirectoryPath(sourcePath);
                if (targetPath !== null) {
                    var collapsed = pathMap.collapsed;
                    explorer.addDirectoryPath(targetPath, collapsed);
                }
            }
        },
        {
            key: "callRemoveHandlers",
            value: function callRemoveHandlers(pathMaps, done) {
                var eventType = _constants.REMOVE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, removeHandler = handler, done1 = next; ///
                    removeHandler.call(element, pathMaps, done1);
                }, done);
            }
        },
        {
            key: "onRemove",
            value: function onRemove(removeHandler, element) {
                var eventType = _constants.REMOVE, handler = removeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offRemove",
            value: function offRemove(removeHandler, element) {
                var eventType = _constants.REMOVE, handler = removeHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement, element) {
                var dragEntryItem = dragElement; ///
                this.dropDragEntryItem(dragEntryItem);
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem) {
                var dragEntryItemPath = dragEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), sourcePath = (0, _pathMap).nonNullPathFromName(dragEntryItemPathWithoutBottommostName), targetPath = null, pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(pathMaps, explorer);
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement, element) {
                var dragEntryItem = dragElement, dragEntryItemType = dragEntryItem.getType(), markerEntryItemPath = this.getMarkerEntryItemPath(), markerEntryItemExplorer = this.getMarkerEntryItemExplorer();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                markerEntryItemExplorer.removeMarker();
                this.setMarkerEntryItemPath(markerEntryItemPath);
                this.setMarkerEntryItemExplorer(markerEntryItemExplorer);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, onRemove = _properties.onRemove, removeHandler = onRemove; ///
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOut(this.dragOutHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                removeHandler && this.onRemove(removeHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onRemove = _properties.onRemove, removeHandler = onRemove; ///
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
                this.offDragOut(this.dragOutHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                removeHandler && this.offMove(removeHandler, this);
            }
        },
        {
            key: "getMarkerEntryItemPath",
            value: function getMarkerEntryItemPath() {
                var state = this.getState(), markerEntryItemPath = state.markerEntryItemPath;
                return markerEntryItemPath;
            }
        },
        {
            key: "getMarkerEntryItemExplorer",
            value: function getMarkerEntryItemExplorer() {
                var state = this.getState(), markerEntryItemExplorer = state.markerEntryItemExplorer;
                return markerEntryItemExplorer;
            }
        },
        {
            key: "setMarkerEntryItemPath",
            value: function setMarkerEntryItemPath(markerEntryItemPath) {
                this.updateState({
                    markerEntryItemPath: markerEntryItemPath
                });
            }
        },
        {
            key: "setMarkerEntryItemExplorer",
            value: function setMarkerEntryItemExplorer(markerEntryItemExplorer) {
                this.updateState({
                    markerEntryItemExplorer: markerEntryItemExplorer
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var markerEntryItemPath = null, markerEntryItemExplorer = null;
                this.setState({
                    markerEntryItemPath: markerEntryItemPath,
                    markerEntryItemExplorer: markerEntryItemExplorer
                });
            }
        }
    ]);
    return RubbishBin;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(RubbishBin, "tagName", "div");
_defineProperty(RubbishBin, "ignoredProperties", [
    "onRemove"
]);
_defineProperty(RubbishBin, "defaultProperties", {
    className: "rubbish-bin"
});
Object.assign(RubbishBin.prototype, _drop.default);
var _default = (0, _easyWithStyle).default(RubbishBin)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2Ryb3BcIjtcblxuaW1wb3J0IHsgUkVNT1ZFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX0RSQUdfVFlQRSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1YmJpc2hCaW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aE1hcDtcblxuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEUgOlxuICAgICAgICB0aGlzLnJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIDpcbiAgICAgICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VQYXRoLCB0YXJnZXRQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoc291cmNlUGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0UGF0aCAhPT0gbnVsbCkge1xuICAgICAgZXhwbG9yZXIuYWRkRmlsZVBhdGgodGFyZ2V0UGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZVBhdGgsIHRhcmdldFBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKHNvdXJjZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSBwYXRoTWFwO1xuXG4gICAgICBleHBsb3Jlci5hZGREaXJlY3RvcnlQYXRoKHRhcmdldFBhdGgsIGNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzKHBhdGhNYXBzLCBkb25lKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVNT1ZFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7XHQvLy9cblxuICAgIHRoaXMuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHNvdXJjZVBhdGggPSBub25OdWxsUGF0aEZyb21OYW1lKGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgdGFyZ2V0UGF0aCA9IG51bGwsXHQvLy9cbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIGRyYWdPdXRIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gdGhpcy5nZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzLmdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgIHRoaXMuc2V0TWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIHRoaXMuc2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIobWFya2VyRW50cnlJdGVtRXhwbG9yZXIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvblJlbW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBvblJlbW92ZTsgLy8vXG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdXQodGhpcy5kcmFnT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvblJlbW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBvblJlbW92ZTsgLy8vXG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdXQodGhpcy5kcmFnT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHJlbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKHJlbW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtUGF0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1hcmtlckVudHJ5SXRlbVBhdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbVBhdGg7XG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcigpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIobWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCxcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25SZW1vdmVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1YmJpc2hCaW4pYFxuICBcbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDdUIsVUFBVztJQUV6QyxLQUFlO0lBRWYsVUFBYTtJQUNBLFFBQXFCO0lBQ0ssTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EyTWxDLHlEQUtyQzs7Ozs7OztJQTlNUSxPQUFPLEdBUnNDLFVBQVcsdUJBUXhELE9BQU8sRUFDUCxpQ0FBaUMsR0FUWSxVQUFXLGVBU3hELGlDQUFpQztJQUVuQyxVQUFVO2NBQVYsVUFBVTthQUFWLFVBQVU7OEJBQVYsVUFBVTtnRUFBVixVQUFVOztpQkFBVixVQUFVOztZQUNkLEdBQXVCLEdBQXZCLHVCQUF1Qjs0QkFBdkIsdUJBQXVCO29CQUNiLGVBQWUsR0FBSyxVQUFVLENB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