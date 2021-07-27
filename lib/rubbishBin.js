"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("@djalbat/easy-drag-and-drop");
var _necessary = require("necessary");
var _open = _interopRequireDefault(require("./div/rubbishBin/open"));
var _closed = _interopRequireDefault(require("./div/rubbishBin/closed"));
var _constants = require("./constants");
var _pathMap = require("./utilities/pathMap");
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
        "\n  \n  display: inline-block;\n      \n"
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
            key: "getOpenRubbishBinDiv",
            value: function getOpenRubbishBinDiv() {
                var _constructor = this.constructor, OpenRubbishBinDiv = _constructor.OpenRubbishBinDiv;
                return OpenRubbishBinDiv;
            }
        },
        {
            key: "getClosedRubbishBinDiv",
            value: function getClosedRubbishBinDiv() {
                var _constructor = this.constructor, ClosedRubbishBinDiv = _constructor.ClosedRubbishBinDiv;
                return ClosedRubbishBinDiv;
            }
        },
        {
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
            }
        },
        {
            key: "openRubbishBin",
            value: function openRubbishBin() {
                this.showOpenRubbishBinDiv();
                this.hideClosedRubbishBinDiv();
            }
        },
        {
            key: "closeRubbishBin",
            value: function closeRubbishBin() {
                this.hideOpenRubbishBinDiv();
                this.showClosedRubbishBinDiv();
            }
        },
        {
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var directory = pathMap.directory;
                directory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
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
                this.closeRubbishBin();
                this.removeDragEntryItems(pathMaps, explorer);
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement, element) {
                var dragEntryItem = dragElement, dragEntryItemType = dragEntryItem.getType(), markerEntryItemPath = this.getMarkerEntryItemPath(), markerEntryItemExplorer = this.getMarkerEntryItemExplorer();
                this.closeRubbishBin();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                this.openRubbishBin();
                this.setMarkerEntryItemPath(markerEntryItemPath);
                this.setMarkerEntryItemExplorer(markerEntryItemExplorer);
                markerEntryItemExplorer.removeMarker();
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
                removeHandler && this.onRemove(removeHandler);
                this.closeRubbishBin();
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
                removeHandler && this.offRemove(removeHandler);
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
            key: "childElements",
            value: function childElements() {
                var OpenRubbishBinDiv = this.getOpenRubbishBinDiv(), ClosedRubbishBinDiv = this.getClosedRubbishBinDiv();
                return [
                    /*#__PURE__*/ React.createElement(OpenRubbishBinDiv, null),
                    /*#__PURE__*/ React.createElement(ClosedRubbishBinDiv, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var markerEntryItemPath = null, markerEntryItemExplorer = null;
                this.assignContext();
                this.setState({
                    markerEntryItemPath: markerEntryItemPath,
                    markerEntryItemExplorer: markerEntryItemExplorer
                });
            }
        }
    ]);
    return RubbishBin;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(RubbishBin, "OpenRubbishBinDiv", _open.default);
_defineProperty(RubbishBin, "ClosedRubbishBinDiv", _closed.default);
_defineProperty(RubbishBin, "tagName", "div");
_defineProperty(RubbishBin, "ignoredProperties", [
    "onRemove"
]);
_defineProperty(RubbishBin, "defaultProperties", {
    className: "rubbish-bin"
});
Object.assign(RubbishBin.prototype, _easyDragAndDrop.dropMixins);
var _default = (0, _easyWithStyle).default(RubbishBin)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiQGRqYWxiYXQvZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpbkRpdiBmcm9tIFwiLi9kaXYvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpbkRpdiBmcm9tIFwiLi9kaXYvcnViYmlzaEJpbi9jbG9zZWRcIjtcblxuaW1wb3J0IHsgUkVNT1ZFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgUnViYmlzaEJpbiBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRPcGVuUnViYmlzaEJpbkRpdigpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluRGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIE9wZW5SdWJiaXNoQmluRGl2O1xuICB9XG5cbiAgZ2V0Q2xvc2VkUnViYmlzaEJpbkRpdigpIHtcbiAgICBjb25zdCB7IENsb3NlZFJ1YmJpc2hCaW5EaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQ2xvc2VkUnViYmlzaEJpbkRpdjtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIG9wZW5SdWJiaXNoQmluKCkge1xuICAgIHRoaXMuc2hvd09wZW5SdWJiaXNoQmluRGl2KCk7XG4gICAgdGhpcy5oaWRlQ2xvc2VkUnViYmlzaEJpbkRpdigpO1xuICB9XG5cbiAgY2xvc2VSdWJiaXNoQmluKCkge1xuICAgIHRoaXMuaGlkZU9wZW5SdWJiaXNoQmluRGl2KCk7XG4gICAgdGhpcy5zaG93Q2xvc2VkUnViYmlzaEJpbkRpdigpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VQYXRoLCB0YXJnZXRQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoc291cmNlUGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0UGF0aCAhPT0gbnVsbCkge1xuICAgICAgZXhwbG9yZXIuYWRkRmlsZVBhdGgodGFyZ2V0UGF0aCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZVBhdGgsIHRhcmdldFBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKHNvdXJjZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSBwYXRoTWFwO1xuXG4gICAgICBleHBsb3Jlci5hZGREaXJlY3RvcnlQYXRoKHRhcmdldFBhdGgsIGNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzKHBhdGhNYXBzLCBkb25lKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVNT1ZFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7XHQvLy9cblxuICAgIHRoaXMuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHNvdXJjZVBhdGggPSBub25OdWxsUGF0aEZyb21OYW1lKGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgdGFyZ2V0UGF0aCA9IG51bGwsXHQvLy9cbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMuY2xvc2VSdWJiaXNoQmluKCk7XG5cbiAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3Jlcik7XG4gIH1cblxuICBkcmFnT3V0SGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHRoaXMuZ2V0TWFya2VyRW50cnlJdGVtUGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpcy5nZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jbG9zZVJ1YmJpc2hCaW4oKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMub3BlblJ1YmJpc2hCaW4oKTtcblxuICAgIHRoaXMuc2V0TWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIHRoaXMuc2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIobWFya2VyRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ091dCh0aGlzLmRyYWdPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlUnViYmlzaEJpbigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvblJlbW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBvblJlbW92ZTsgLy8vXG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdXQodGhpcy5kcmFnT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHJlbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZSZW1vdmUocmVtb3ZlSGFuZGxlcik7XG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWFya2VyRW50cnlJdGVtUGF0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcihtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlcikge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgT3BlblJ1YmJpc2hCaW5EaXYgPSB0aGlzLmdldE9wZW5SdWJiaXNoQmluRGl2KCksXG4gICAgICAgICAgQ2xvc2VkUnViYmlzaEJpbkRpdiA9IHRoaXMuZ2V0Q2xvc2VkUnViYmlzaEJpbkRpdigpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpbkRpdi8+LFxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5EaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbnVsbDtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoLFxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBPcGVuUnViYmlzaEJpbkRpdiA9IE9wZW5SdWJiaXNoQmluRGl2O1xuXG4gIHN0YXRpYyBDbG9zZWRSdWJiaXNoQmluRGl2ID0gQ2xvc2VkUnViYmlzaEJpbkRpdjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25SZW1vdmVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1YmJpc2hCaW4pYFxuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0gsZ0JBQTZCO0lBQ0gsVUFBVztJQUVsQyxLQUF1QjtJQUNyQixPQUF5QjtJQUVsQyxVQUFhO0lBQ0EsUUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBaVBwQix3Q0FJckM7Ozs7Ozs7SUFuUFEsT0FBTyxHQVJzQyxVQUFXLHVCQVF4RCxPQUFPLEVBQ1AsaUNBQWlDLEdBVFksVUFBVyxlQVN4RCxpQ0FBaUM7SUFFbkMsVUFBVTtjQUFWLFVBQVU7YUFBVixVQUFVOzhCQUFWLFVBQVU7Z0VBQVYsVUFBVTs7aUJBQVYsVUFBVTs7WUFDZCxHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQjtvQkFDWSxZQUFnQixRQUFYLFdBQVcsRUFBdEMsaUJBQWlCLEdBQUssWUFBZ0IsQ0FBdEMsaUJBQWlCO3VCQUVsQixp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