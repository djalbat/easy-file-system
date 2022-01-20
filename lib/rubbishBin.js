"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _open = _interopRequireDefault(require("./svg/rubbishBin/open"));
var _closed = _interopRequireDefault(require("./svg/rubbishBin/closed"));
var _fileName = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _eventTypes = require("./eventTypes");
var _pathMap = require("./utilities/pathMap");
var _entryTypes = require("./entryTypes");
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  display: inline-block;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach;
var RubbishBin = /*#__PURE__*/ function(Element) {
    _inherits(RubbishBin, Element);
    var _super = _createSuper(RubbishBin);
    function RubbishBin() {
        _classCallCheck(this, RubbishBin);
        return _super.apply(this, arguments);
    }
    _createClass(RubbishBin, [
        {
            key: "isExplorerIgnored",
            value: function isExplorerIgnored(explorer) {
                var reference = explorer.getReference(), ignoredReferences = this.getIgnoredReferences(), ignoredReferencesIncludesReference = ignoredReferences.includes(reference), explorerIgnored = ignoredReferencesIncludesReference; ///
                return explorerIgnored;
            }
        },
        {
            key: "getIgnoredReferences",
            value: function getIgnoredReferences() {
                var _properties = this.properties, _ignoredReferences = _properties.ignoredReferences, ignoredReferences = _ignoredReferences === void 0 ? [] : _ignoredReferences;
                return ignoredReferences;
            }
        },
        {
            key: "getOpenRubbishBinSVG",
            value: function getOpenRubbishBinSVG() {
                var OpenRubbishBinSVG = this.constructor.OpenRubbishBinSVG;
                return OpenRubbishBinSVG;
            }
        },
        {
            key: "getClosedRubbishBinSVG",
            value: function getClosedRubbishBinSVG() {
                var ClosedRubbishBinSVG = this.constructor.ClosedRubbishBinSVG;
                return ClosedRubbishBinSVG;
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
            key: "addMarker",
            value: function addMarker(markerEntryItemPath, dragEntryItemType) {
                var markerEntryItemName = markerEntryItemPath; ///
                this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);
                this.open();
            }
        },
        {
            key: "removeMarker",
            value: function removeMarker() {
                this.removeMarkerEntryItem();
                this.close();
            }
        },
        {
            key: "open",
            value: function open() {
                this.showOpenRubbishBinSVG();
                this.hideClosedRubbishBinSVG();
            }
        },
        {
            key: "close",
            value: function close() {
                this.hideOpenRubbishBinSVG();
                this.showClosedRubbishBinSVG();
            }
        },
        {
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callRemoveHandlersAsync(pathMaps, function() {
                    var _this1 = _this;
                    pathMaps.forEach(function(pathMap) {
                        return _this1.removeDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "addMarkerEntryItem",
            value: function addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
                var markerEntryItem;
                var name = markerEntryItemName, type = dragEntryItemType; ///
                switch(type){
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer = this, fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_fileName.default, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer1 = this, directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_directoryName.default, {
                                name: name,
                                explorer: explorer1
                            });
                            markerEntryItem = directoryNameMarkerEntryItem; ///
                            break;
                        }
                }
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem
                });
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                var markerEntryItem = null;
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem
                });
            }
        },
        {
            key: "removeFileNameDragEntryItem",
            value: function removeFileNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                var filePath = sourceEntryPath; ///
                explorer.removeFilePath(filePath);
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                var directoryPath = sourceEntryPath; ///
                explorer.removeDirectoryPath(directoryPath);
            }
        },
        {
            key: "callRemoveHandlersAsync",
            value: function callRemoveHandlersAsync(pathMaps, done1) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, removeHandler = handler, done = next; ///
                    removeHandler.call(element, pathMaps, done);
                }, done1);
            }
        },
        {
            key: "onRemove",
            value: function onRemove(removeHandler, element) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offRemove",
            value: function offRemove(removeHandler, element) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement, aborted, element, done) {
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                if (aborted) {
                    markerEntryItemExplorer.removeMarker();
                    done();
                    return;
                }
                var dragEntryItem = dragElement; ///
                markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);
                if (dragEntryItemExplorerIgnored) {
                    return;
                }
                var markerEntryItem = this.retrieveMarkerEntryItem();
                var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
                markerEntryItemPath = null; ///
                markerEntryItemExplorer = this; ///
                if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                    var dragEntryItemType = dragEntryItem.getType();
                    previousMarkerEntryItemExplorer.removeMarker();
                    markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
                }
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem, done) {
                var _this = this;
                var dragEntryItemPath = dragEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap).sourceEntryPathFromDragEntryItemPath(dragEntryItemPath), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(pathMaps, explorer, function() {
                    _this.removeMarker();
                    done();
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var onRemove = this.properties.onRemove, removeHandler = onRemove; ///
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                removeHandler && this.onRemove(removeHandler);
                this.close();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var onRemove = this.properties.onRemove, removeHandler = onRemove; ///
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
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
                var OpenRubbishBinSVG = this.getOpenRubbishBinSVG(), ClosedRubbishBinSVG = this.getClosedRubbishBinSVG();
                return [
                    /*#__PURE__*/ React.createElement(OpenRubbishBinSVG, null),
                    /*#__PURE__*/ React.createElement(ClosedRubbishBinSVG, null)
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
_defineProperty(RubbishBin, "OpenRubbishBinSVG", _open.default);
_defineProperty(RubbishBin, "ClosedRubbishBinSVG", _closed.default);
_defineProperty(RubbishBin, "tagName", "div");
_defineProperty(RubbishBin, "ignoredProperties", [
    "onRemove",
    "ignoredReferences"
]);
_defineProperty(RubbishBin, "defaultProperties", {
    className: "rubbish-bin"
});
Object.assign(RubbishBin.prototype, _easyDragAndDrop.dropMixins);
var _default = (0, _easyWithStyle).default(RubbishBin)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBSRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IG5vbk51bGxQYXRoRnJvbU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1YmJpc2hCaW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRPcGVuUnViYmlzaEJpblNWRygpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIE9wZW5SdWJiaXNoQmluU1ZHO1xuICB9XG5cbiAgZ2V0Q2xvc2VkUnViYmlzaEJpblNWRygpIHtcbiAgICBjb25zdCB7IENsb3NlZFJ1YmJpc2hCaW5TVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQ2xvc2VkUnViYmlzaEJpblNWRztcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbU5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1QYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNob3dPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZU9wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5zaG93Q2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLnJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvblJlbW92ZShyZW1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbDsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZlJlbW92ZShyZW1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBPcGVuUnViYmlzaEJpblNWRyA9IHRoaXMuZ2V0T3BlblJ1YmJpc2hCaW5TVkcoKSxcbiAgICAgICAgICBDbG9zZWRSdWJiaXNoQmluU1ZHID0gdGhpcy5nZXRDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE9wZW5SdWJiaXNoQmluU1ZHLz4sXG4gICAgICA8Q2xvc2VkUnViYmlzaEJpblNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGwsXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBudWxsO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGgsXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIE9wZW5SdWJiaXNoQmluU1ZHID0gT3BlblJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIENsb3NlZFJ1YmJpc2hCaW5TVkcgPSBDbG9zZWRSdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvblJlbW92ZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1YmJpc2hCaW4pYFxuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJSdWJiaXNoQmluIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJleHBsb3JlciIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJwcm9wZXJ0aWVzIiwiZ2V0T3BlblJ1YmJpc2hCaW5TVkciLCJPcGVuUnViYmlzaEJpblNWRyIsImNvbnN0cnVjdG9yIiwiZ2V0Q2xvc2VkUnViYmlzaEJpblNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJhZGRNYXJrZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwib3BlbiIsInJlbW92ZU1hcmtlciIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsImNsb3NlIiwic2hvd09wZW5SdWJiaXNoQmluU1ZHIiwiaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkciLCJoaWRlT3BlblJ1YmJpc2hCaW5TVkciLCJzaG93Q2xvc2VkUnViYmlzaEJpblNWRyIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwicGF0aE1hcHMiLCJkb25lIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJuYW1lIiwidHlwZSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsInNvdXJjZUVudHJ5UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJoYW5kbGVyIiwiZWxlbWVudCIsInJlbW92ZUhhbmRsZXIiLCJjYWxsIiwib25SZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmUmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImdldFBhdGhNYXBzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRTdGF0ZSIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDSCxHQUFvQixDQUFwQixnQkFBb0I7QUFDVCxHQUFXLENBQVgsVUFBVztBQUVuQixHQUF1QixDQUF2QixLQUF1QjtBQUNyQixHQUF5QixDQUF6QixPQUF5QjtBQUNyQixHQUE4QixDQUE5QixTQUE4QjtBQUN6QixHQUFtQyxDQUFuQyxjQUFtQztBQUUxQyxHQUFjLENBQWQsV0FBYztBQUNaLEdBQXFCLENBQXJCLFFBQXFCO0FBRWlCLEdBQWMsQ0FBZCxXQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTZVbkQsQ0FJckM7Ozs7Ozs7QUEvVUEsR0FBSyxDQUFHQSxPQUFPLEdBWnVCLFVBQVcsdUJBWXpDQSxPQUFPO0lBRVRDLFVBQVUsaUJBQWhCLFFBQVE7OzthQUFGQSxVQUFVOzs7Ozs7WUFDZEMsR0FBaUIsRUFBakJBLENBQWlCO21CQUFqQkEsUUFBUSxDQUFSQSxpQkFBaUIsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7Z0JBQzNCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxRQUFRLENBQUNFLFlBQVksSUFDakNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQyxrQ0FBa0MsR0FBR0YsaUJB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