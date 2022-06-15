"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _easy = require("easy");
var _necessary = require("necessary");
var _open = _interopRequireDefault(require("./svg/rubbishBin/open"));
var _closed = _interopRequireDefault(require("./svg/rubbishBin/closed"));
var _fileName = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/marker/directoryName"));
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
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
var forEach = _necessary.asynchronousUtilities.forEach, REMOVE_EVENT_TYPE = _easy.eventTypes.REMOVE_EVENT_TYPE;
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
            value: function callRemoveHandlersAsync(pathMaps, done) {
                var eventType = REMOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, removeHandler = handler, _$done = next; ///
                    removeHandler.call(element, pathMaps, _$done);
                }, done);
            }
        },
        {
            key: "onRemove",
            value: function onRemove(removeHandler, element) {
                var eventType = REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offRemove",
            value: function offRemove(removeHandler, element) {
                var eventType = REMOVE_EVENT_TYPE, handler = removeHandler; ///
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
                var _constructor = this.constructor, _$OpenRubbishBinSVG = _constructor.OpenRubbishBinSVG, _$ClosedRubbishBinSVG = _constructor.ClosedRubbishBinSVG;
                return [
                    /*#__PURE__*/ React.createElement(_$OpenRubbishBinSVG, null),
                    /*#__PURE__*/ React.createElement(_$ClosedRubbishBinSVG, null)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBSRU1PVkVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgUnViYmlzaEJpbiBleHRlbmRzIEVsZW1lbnQge1xuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbU5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1QYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNob3dPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZU9wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5zaG93Q2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLnJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvblJlbW92ZShyZW1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbDsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZlJlbW92ZShyZW1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluU1ZHLCBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpblNWRy8+LFxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5TVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbnVsbDtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoLFxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBPcGVuUnViYmlzaEJpblNWRyA9IE9wZW5SdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyBDbG9zZWRSdWJiaXNoQmluU1ZHID0gQ2xvc2VkUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25SZW1vdmVcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSdWJiaXNoQmluKWBcbiAgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiUkVNT1ZFX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiUnViYmlzaEJpbiIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZXhwbG9yZXIiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwicHJvcGVydGllcyIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJvcGVuIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiY2xvc2UiLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsInJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImRvbmUiLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsIm5hbWUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsInNvdXJjZUVudHJ5UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJoYW5kbGVyIiwiZWxlbWVudCIsInJlbW92ZUhhbmRsZXIiLCJjYWxsIiwib25SZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmUmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtUGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImdldFBhdGhNYXBzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJPcGVuUnViYmlzaEJpblNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldFN0YXRlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVosSUFBQSxnQkFBb0IsV0FBcEIsb0JBQW9CLENBQUE7QUFDWCxJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFDSixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbkIsSUFBQSxLQUF1QixrQ0FBdkIsdUJBQXVCLEVBQUE7QUFDckIsSUFBQSxPQUF5QixrQ0FBekIseUJBQXlCLEVBQUE7QUFDckIsSUFBQSxTQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFDekIsSUFBQSxjQUFtQyxrQ0FBbkMsbUNBQW1DLEVBQUE7QUFFeEMsSUFBQSxRQUFxQixXQUFyQixxQkFBcUIsQ0FBQTtBQUVpQixJQUFBLFdBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RixJQUFNLEFBQUVBLE9BQU8sR0FBS0MsVUFBcUIsc0JBQUEsQ0FBakNELE9BQU8sQUFBMEIsRUFDbkMsQUFBRUUsaUJBQWlCLEdBQUtDLEtBQVUsV0FBQSxDQUFoQ0QsaUJBQWlCLEFBQWUsQUFBQztBQUV6QyxJQUFBLEFBQU1FLFVBQVUsaUJBMFRiLEFBMVRIOzs7YUFBTUEsVUFBVTs7Ozs7O1lBQ2RDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsQ0FBQ0MsUUFBUSxFQUFFO2dCQUMxQixJQUFNQyxTQUFTLEdBQUdELFFBQVEsQ0FBQ0UsWUFBWSxF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