"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _easy = require("easy");
var _necessary = require("necessary");
var _entries = _interopRequireDefault(require("./list/entries"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _styles = require("./styles");
var _entryTypes = require("./entryTypes");
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
        "\n  \n  padding: ",
        "; \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach, OPEN_EVENT_TYPE = _easy.eventTypes.OPEN_EVENT_TYPE, MOVE_EVENT_TYPE = _easy.eventTypes.MOVE_EVENT_TYPE;
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
    var _super = _createSuper(Explorer);
    function Explorer(selector, mounted) {
        _classCallCheck(this, Explorer);
        var _this;
        _this = _super.call(this, selector);
        _this.mounted = mounted;
        return _this;
    }
    _createClass(Explorer, [
        {
            key: "isMounted",
            value: function isMounted() {
                return this.mounted;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this; ///
                return explorer;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                var _properties = this.properties, _reference = _properties.reference, reference = _reference === void 0 ? null : _reference;
                return reference;
            }
        },
        {
            key: "getEntriesList",
            value: function getEntriesList() {
                var _$EntriesList = this.constructor.EntriesList;
                return _$EntriesList;
            }
        },
        {
            key: "isDirectoryEmpty",
            value: function isDirectoryEmpty(directoryPath) {
                var directoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem(directoryPath), directoryNameDragEntryItemEmpty = directoryNameDragEntryItem.isEmpty(), directoryEmpty = directoryNameDragEntryItemEmpty; ///
                return directoryEmpty;
            }
        },
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
            key: "getFileNameDragEntryItem",
            value: function getFileNameDragEntryItem() {
                var _$FileNameDragEntryItem = this.constructor.FileNameDragEntryItem;
                return _$FileNameDragEntryItem;
            }
        },
        {
            key: "getFileNameMarkerEntryItem",
            value: function getFileNameMarkerEntryItem() {
                var _$FileNameMarkerEntryItem = this.constructor.FileNameMarkerEntryItem;
                return _$FileNameMarkerEntryItem;
            }
        },
        {
            key: "getDirectoryNameDragEntryItem",
            value: function getDirectoryNameDragEntryItem() {
                var _$DirectoryNameDragEntryItem = this.constructor.DirectoryNameDragEntryItem;
                return _$DirectoryNameDragEntryItem;
            }
        },
        {
            key: "getDirectoryNameMarkerEntryItem",
            value: function getDirectoryNameMarkerEntryItem() {
                var _$DirectoryNameMarkerEntryItem = this.constructor.DirectoryNameMarkerEntryItem;
                return _$DirectoryNameMarkerEntryItem;
            }
        },
        {
            key: "retrievePaths",
            value: function retrievePaths(type) {
                var dragEntryItems = this.retrieveDragEntryItems(), paths1 = dragEntryItems.reduce(function(paths, dragEntryItem) {
                    var dragEntryItemType = dragEntryItem.getType();
                    if (dragEntryItemType === type) {
                        var dragEntryItemPath = dragEntryItem.getPath(), path = dragEntryItemPath; ///
                        paths.push(path);
                    }
                    return paths;
                }, []);
                return paths1;
            }
        },
        {
            key: "retrieveFilePaths",
            value: function retrieveFilePaths() {
                var type = _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, paths = this.retrievePaths(type), filePaths = paths; ///
                return filePaths;
            }
        },
        {
            key: "retrieveDirectoryPaths",
            value: function retrieveDirectoryPaths() {
                var type = _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE, paths = this.retrievePaths(type), directoryPaths = paths; ///
                return directoryPaths;
            }
        },
        {
            key: "moveDragEntryItem",
            value: function moveDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.moveDirectoryNameDragEntryItem(pathMap, explorer) : this.moveFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callMoveHandlersAsync(pathMaps, function() {
                    var _this1 = _this;
                    pathMaps.forEach(function(pathMap) {
                        return _this1.moveDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(fileNameDragEntryItem) {
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath; ///
                this.callOpenHandlers(filePath);
            }
        },
        {
            key: "moveFileNameDragEntryItem",
            value: function moveFileNameDragEntryItem(pathMap, explorer) {
                var filePath;
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                filePath = sourceEntryPath; ///
                explorer.removeFilePath(filePath);
                if (targetEntryPath === null) {
                    return;
                }
                filePath = targetEntryPath; ///
                this.addFilePath(filePath);
            }
        },
        {
            key: "moveDirectoryNameDragEntryItem",
            value: function moveDirectoryNameDragEntryItem(pathMap, explorer) {
                var directoryPath;
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                directoryPath = sourceEntryPath; ///
                explorer.removeDirectoryPath(directoryPath);
                if (targetEntryPath === null) {
                    return;
                }
                var collapsed = pathMap.collapsed;
                directoryPath = targetEntryPath; ///
                this.addDirectoryPath(directoryPath, collapsed);
            }
        },
        {
            key: "callOpenHandlers",
            value: function callOpenHandlers(filePath) {
                var _this = this;
                var eventType = OPEN_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var handler = eventListener.handler, element = eventListener.element, openHandler = handler; ///
                    openHandler.call(element, filePath, _this); ///
                });
            }
        },
        {
            key: "callMoveHandlersAsync",
            value: function callMoveHandlersAsync(pathMaps, done) {
                var eventType = MOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, _$done = next; ///
                    moveHandler.call(element, pathMaps, _$done);
                }, done);
            }
        },
        {
            key: "onOpen",
            value: function onOpen(openHandler, element) {
                var eventType = OPEN_EVENT_TYPE, handler = openHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offOpen",
            value: function offOpen(openHandler, element) {
                var eventType = OPEN_EVENT_TYPE, handler = openHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onMove",
            value: function onMove(moveHandler, element) {
                var eventType = MOVE_EVENT_TYPE, handler = moveHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offMove",
            value: function offMove(moveHandler, element) {
                var eventType = MOVE_EVENT_TYPE, handler = moveHandler; ///
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
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
                var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
                markerEntryItemPath = dragEntryItemName; ///
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
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap).sourceEntryPathFromDragEntryItemPath(dragEntryItemPath), targetEntryPath = (0, _pathMap).targetEntryPathFromMarkerEntryItemPath(markerEntryItemPath), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.moveDragEntryItems(pathMaps, explorer, function() {
                    _this.removeMarker();
                    done();
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, onMove = _properties.onMove, onOpen = _properties.onOpen, moveHandler = onMove, openHandler = onOpen; ///
                this.mounted = true;
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                moveHandler && this.onMove(moveHandler);
                openHandler && this.onOpen(openHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onMove = _properties.onMove, onOpen = _properties.onOpen, moveHandler = onMove, openHandler = onOpen; ///
                this.mounted = false;
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorer = this;
                return /*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), retrieveFilePaths = this.retrieveFilePaths.bind(this), retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this), parentContext1 = Object.assign({}, context, {
                    retrieveFilePaths: retrieveFilePaths,
                    retrieveDirectoryPaths: retrieveDirectoryPaths
                });
                return parentContext1;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var mounted = false, explorer = _easy.Element.fromClass(Class, properties, mounted);
                return explorer;
            }
        }
    ]);
    return Explorer;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Explorer, "EntriesList", _entries.default);
_defineProperty(Explorer, "FileNameDragEntryItem", _fileName.default);
_defineProperty(Explorer, "FileNameMarkerEntryItem", _fileName1.default);
_defineProperty(Explorer, "DirectoryNameDragEntryItem", _directoryName.default);
_defineProperty(Explorer, "DirectoryNameMarkerEntryItem", _directoryName1.default);
_defineProperty(Explorer, "tagName", "div");
_defineProperty(Explorer, "ignoredProperties", [
    "onMove",
    "onOpen",
    "reference",
    "ignoredReferences"
]);
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easyDragAndDrop.dropMixins);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject(), _styles.explorerPadding);
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBFbGVtZW50LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoLCB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBPUEVOX0VWRU5UX1RZUEUsIE1PVkVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJPUEVOX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiTU9WRV9FVkVOVF9UWVBFIiwiRXhwbG9yZXIiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJpc01vdW50ZWQiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlzRGlyZWN0b3J5RW1wdHkiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsImlzRW1wdHkiLCJkaXJlY3RvcnlFbXB0eSIsImlzRXhwbG9yZXJJZ25vcmVkIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZVBhdGhzIiwidHlwZSIsImRyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEcmFnRW50cnlJdGVtcyIsInBhdGhzIiwicmVkdWNlIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwibW92ZURyYWdFbnRyeUl0ZW0iLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZURyYWdFbnRyeUl0ZW1zIiwicGF0aE1hcHMiLCJkb25lIiwiY2FsbE1vdmVIYW5kbGVyc0FzeW5jIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiZWxlbWVudCIsIm9wZW5IYW5kbGVyIiwiY2FsbCIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImFkZE1hcmtlciIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aE1hcHMiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsR0FBaUIsQ0FBakIsY0FBaUI7QUFFWixHQUFvQixDQUFwQixnQkFBb0I7QUFDWCxHQUFNLENBQU4sS0FBTTtBQUNKLEdBQVcsQ0FBWCxVQUFXO0FBRXpCLEdBQWdCLENBQWhCLFFBQWdCO0FBQ04sR0FBNEIsQ0FBNUIsU0FBNEI7QUFDMUIsR0FBOEIsQ0FBOUIsVUFBOEI7QUFDM0IsR0FBaUMsQ0FBakMsY0FBaUM7QUFDL0IsR0FBbUMsQ0FBbkMsZUFBbUM7QUFFNUMsR0FBVSxDQUFWLE9BQVU7QUFDZ0MsR0FBYyxDQUFkLFdBQWM7QUFDSyxHQUFxQixDQUFyQixRQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBaEJsSDs7Ozs7Ozs7c0NBQUE7Ozs7OztpQ0FBQTs7O2lFQUFBOztTQUFBOzs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozs4QkFBQTs7Ozs7Ozs7OzJCQUFBOzs7Ozs7Ozs7Ozs7c0NBQUE7Ozs7Ozs7Ozs7OztVQUFBOztLQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztp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