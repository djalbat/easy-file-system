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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBFbGVtZW50LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoLCB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBPUEVOX0VWRU5UX1RZUEUsIE1PVkVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJPUEVOX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiTU9WRV9FVkVOVF9UWVBFIiwiRXhwbG9yZXIiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJpc01vdW50ZWQiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlzRGlyZWN0b3J5RW1wdHkiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsImlzRW1wdHkiLCJkaXJlY3RvcnlFbXB0eSIsImlzRXhwbG9yZXJJZ25vcmVkIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZVBhdGhzIiwidHlwZSIsImRyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEcmFnRW50cnlJdGVtcyIsInBhdGhzIiwicmVkdWNlIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwibW92ZURyYWdFbnRyeUl0ZW0iLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZURyYWdFbnRyeUl0ZW1zIiwicGF0aE1hcHMiLCJkb25lIiwiY2FsbE1vdmVIYW5kbGVyc0FzeW5jIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiZWxlbWVudCIsIm9wZW5IYW5kbGVyIiwiY2FsbCIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImFkZE1hcmtlciIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aE1hcHMiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxjQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFWixJQUFBLGdCQUFvQixXQUFwQixvQkFBb0IsQ0FBQTtBQUNYLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUNKLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUV6QixJQUFBLFFBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNOLElBQUEsU0FBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBQzFCLElBQUEsVUFBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQzNCLElBQUEsY0FBaUMsa0NBQWpDLGlDQUFpQyxFQUFBO0FBQy9CLElBQUEsZUFBbUMsa0NBQW5DLG1DQUFtQyxFQUFBO0FBRTVDLElBQUEsT0FBVSxXQUFWLFVBQVUsQ0FBQTtBQUNnQyxJQUFBLFdBQWMsV0FBZCxjQUFjLENBQUE7QUFDSyxJQUFBLFFBQXFCLFdBQXJCLHFCQUFxQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxILElBQU0sQUFBRUEsT0FBTyxHQUFLQyxVQUFxQixzQkFBQSxDQUFqQ0QsT0FBTyxBQUEwQixFQUNqQ0UsZUFBZSxHQUFzQkMsS0FBVSxXQUFBLENBQS9DRCxlQUFlLEVBQUVFLGVBQWUsR0FBS0QsS0FBVSxXQUFBLENBQTlCQyxlQUFlLEFBQWdCO0FBRXhELElBQUEsQUFBTUMsUUFBUSxpQkFtWVgsQUFuWUg7OzthQUFNQSxRQUFRLENBQ0FDLFFBQVEsRUFBRUMsT0FBTzs7O2tDQUNyQkQsUUFBUSxDQ3ZCbEIsQ0R1Qm9CO1FBRWhCLE1BQUtDLE9BQU8sR0FBR0EsT0FBTyxDQUFDOzs7OztZQUd6QkMsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsT0FBTyxJQUFJLENBQUNELE9BQU8sQ0FBQzthQUNyQjs7O1lBRURFLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU1DLFFBQVEsR0FBRyxJQUFJLEFBQUMsRUFBRSxHQUFHO2dCQUUzQixPQUFPQSxRQUFRLENBQUM7YUFDakI7OztZQUVEQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksR0FBRztnQkFDYixJQUE2QixXQUFlLEdBQWYsSUFBSSxDQUFDQyxVQUFVLGVBQWYsV0FBZSxDQUFwQ0MsU0FBUyxFQUFUQSxTQUFTLDJCQUFHLElBQUksYUFBQSxBQUFxQjtnQkFFN0MsT0FBT0EsU0FBUyxDQUFDO2FBQ2xCOzs7WUFFREMsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNoQixJQUFNLEFBQUVDLGFBQVcsR0FBSyxJQUFJLENBQUNDLFdBQVcsQ0FBaENELFdBQVcsQUFBcUIsQUFBQztnQkFFekMsT0FBT0EsYUFBVyxDQUFDO2FBQ3BCOzs7WUFFQUUsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDQyxhQUFhLEVBQUU7Z0JBQzlCLElBQU1DLDBCQUEwQixHQUFHLElBQUksQ0FBQ0Msa0NBQWtDLENBQUNGLGFBQWEsQ0FBQyxFQUNuRkcsK0JBQStCLEdBQUdGLDBCQUEwQixDQUFDRyxPQUFPLEVBQUUsRUFDdEVDLGNBQWMsR0FBR0YsK0JBQStCLEFBQUMsRUFBQyxHQUFHO2dCQUUzRCxPQUFPRSxjQUFjLENBQUM7YUFDdkI7OztZQUVEQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLENBQUNkLFFBQVEsRUFBRTtnQkFDMUIsSUFBTUcsU0FBUyxHQUFHSCxRQUFRLENBQUNDLFlBQVksRUFBRSxFQUNuQ2MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRSxFQUMvQ0Msa0NBQWtDLEdBQUdGLGlCQUFpQixDQUFDRyxRQUFRLENBQUNmLFNBQVMsQ0FBQyxFQUMxRWdCLGVBQWUsR0FBR0Ysa0NBQWtDLEFBQUMsRUFBQyxHQUFHO2dCQUUvRCxPQUFPRSxlQUFlLENBQUM7YUFDeEI7OztZQUVESCxHQUFvQixFQUFwQkEsc0JBQW9CO21CQUFwQkEsU0FBQUEsb0JBQW9CLEdBQUc7Z0JBQ3JCLElBQW1DLFdBQWUsR0FBZixJQUFJLENBQUNkLFVBQVUsdUJBQWYsV0FBZSxDQUExQ2EsaUJBQWlCLEVBQWpCQSxpQkFBaUIsbUNBQUcsRUFBRSxxQkFBQSxBQUFxQjtnQkFFbkQsT0FBT0EsaUJBQWlCLENBQUM7YUFDMUI7OztZQUVESyxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQzNCLElBQU0sQUFBRUMsdUJBQXFCLEdBQUssSUFBSSxDQUFDZixXQUFXLENBQTFDZSxxQkFBcUIsQUFBcUIsQUFBQztnQkFFbkQsT0FBT0EsdUJBQXFCLENBQUM7YUFDN0I7OztZQUVBQyxHQUEwQixFQUExQkEsNEJBQTBCO21CQUExQkEsU0FBQUEsMEJBQTBCLEdBQUc7Z0JBQzNCLElBQU0sQUFBRUMseUJBQXVCLEdBQUssSUFBSSxDQUFDakIsV0FBVyxDQUE1Q2lCLHVCQUF1QixBQUFxQixBQUFDO2dCQUVyRCxPQUFPQSx5QkFBdUIsQ0FBQzthQUNoQzs7O1lBRURDLEdBQTZCLEVBQTdCQSwrQkFBNkI7bUJBQTdCQSxTQUFBQSw2QkFBNkIsR0FBRztnQkFDaEMsSUFBTSxBQUFFQyw0QkFBMEIsR0FBSyxJQUFJLENBQUNuQixXQUFXLENBQS9DbUIsMEJBQTBCLEFBQXFCLEFBQUM7Z0JBRXhELE9BQU9BLDRCQUEwQixDQUFDO2FBQ2xDOzs7WUFFQUMsR0FBK0IsRUFBL0JBLGlDQUErQjttQkFBL0JBLFNBQUFBLCtCQUErQixHQUFHO2dCQUNoQyxJQUFNLEFBQUVDLDhCQUE0QixHQUFLLElBQUksQ0FBQ3JCLFdBQVcsQ0FBakRxQiw0QkFBNEIsQUFBcUIsQUFBQztnQkFFMUQsT0FBT0EsOEJBQTRCLENBQUM7YUFDckM7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUNsQixJQUFNQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxzQkFBc0IsRUFBRSxFQUM5Q0MsTUFBSyxHQUFHRixjQUFjLENBQUNHLE1BQU0sQ0FBQyxTQUFDRCxLQUFLLEVBQUVFLGFBQWEsRUFBSztvQkFDdEQsSUFBTUMsaUJBQWlCLEdBQUdELGFBQWEsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7b0JBRWxELElBQUlELGlCQUFpQixLQUFLTixJQUFJLEVBQUU7d0JBQzlCLElBQU1RLGlCQUFpQixHQUFHSCxhQUFhLENBQUNJLE9BQU8sRUFBRSxFQUMzQ0MsSUFBSSxHQUFHRixpQkFBaUIsQUFBQyxFQUFDLEdBQUc7d0JBRW5DTCxLQUFLLENBQUNRLElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUM7cUJBQ2xCO29CQUVELE9BQU9QLEtBQUssQ0FBQztpQkFDZCxFQUFFLEVBQUUsQ0FBQyxBQUFDO2dCQUViLE9BQU9BLE1BQUssQ0FBQzthQUNkOzs7WUFFRFMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQixJQUFNWixJQUFJLEdBQUdhLFdBQXlCLDBCQUFBLEVBQ2hDVixLQUFLLEdBQUcsSUFBSSxDQUFDSixhQUFhLENBQUNDLElBQUksQ0FBQyxFQUNoQ2MsU0FBUyxHQUFHWCxLQUFLLEFBQUMsRUFBQyxHQUFHO2dCQUU1QixPQUFPVyxTQUFTLENBQUM7YUFDbEI7OztZQUVEQyxHQUFzQixFQUF0QkEsd0JBQXNCO21CQUF0QkEsU0FBQUEsc0JBQXNCLEdBQUc7Z0JBQ3ZCLElBQU1mLElBQUksR0FBR2dCLFdBQThCLCtCQUFBLEVBQ3JDYixLQUFLLEdBQUcsSUFBSSxDQUFDSixhQUFhLENBQUNDLElBQUksQ0FBQyxFQUNoQ2lCLGNBQWMsR0FBR2QsS0FBSyxBQUFDLEVBQUMsR0FBRztnQkFFakMsT0FBT2MsY0FBYyxDQUFDO2FBQ3ZCOzs7WUFFREMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixDQUFDQyxPQUFPLEVBQUVoRCxRQUFRLEVBQUU7Z0JBQ25DLElBQU0sQUFBRWlELGNBQWMsR0FBS0QsT0FBTyxDQUExQkMsY0FBYyxBQUFZLEFBQUM7Z0JBRW5DQSxjQUFjLEdBQ1osSUFBSSxDQUFDQyw4QkFBOEIsQ0FBQ0YsT0FBTyxFQUFFaEQsUUFBUSxDQUFDLEdBQ3BELElBQUksQ0FBQ21ELHlCQUF5QixDQUFDSCxPQUFPLEVBQUVoRCxRQUFRLENBQUMsQ0FBQzthQUN2RDs7O1lBRURvRCxHQUFrQixFQUFsQkEsb0JBQWtCO21CQUFsQkEsU0FBQUEsa0JBQWtCLENBQUNDLFFBQVEsRUFBRXJELFFBQVEsRUFBRXNELElBQUksRUFBRTs7Z0JBQzNDLElBQUksQ0FBQ0MscUJBQXFCLENBQUNGLFFBQVEsRUFBRSxXQUFNOztvQkFDekNBLFFBQVEsQ0FBQy9ELE9BQU8sQ0FBQyxTQUFDMEQsT0FBTzsrQkFBSyxPQUFLRCxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFaEQsUUFBUSxDQUFDO3FCQUFBLENBQUMsQ0FBQztvQkFFekVzRCxJQUFJLEVBQUUsQ0FBQztpQkFDUixDQUFDLENBQUM7YUFDSjs7O1lBRURFLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsQ0FBQ0MscUJBQXFCLEVBQUU7Z0JBQy9DLElBQU1DLHlCQUF5QixHQUFHRCxxQkFBcUIsQ0FBQ25CLE9BQU8sRUFBRSxFQUMzRHFCLFFBQVEsR0FBR0QseUJBQXlCLEFBQUMsRUFBQyxHQUFHO2dCQUUvQyxJQUFJLENBQUNFLGdCQUFnQixDQUFDRCxRQUFRLENBQUMsQ0FBQzthQUNqQzs7O1lBRURSLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsQ0FBQ0gsT0FBTyxFQUFFaEQsUUFBUSxFQUFFO2dCQUMzQyxJQUFJMkQsUUFBUSxBQUFDO2dCQUViLElBQVFFLGVBQWUsR0FBc0JiLE9BQU8sQ0FBNUNhLGVBQWUsRUFBRUMsZUFBZSxHQUFLZCxPQUFPLENBQTNCYyxlQUFlLEFBQWE7Z0JBRXJELElBQUlELGVBQWUsS0FBSyxJQUFJLEVBQUU7b0JBQzVCLE9BQU87aUJBQ1I7Z0JBRURGLFFBQVEsR0FBR0UsZUFBZSxDQUFDLENBQUMsR0FBRztnQkFFL0I3RCxRQUFRLENBQUMrRCxjQUFjLENBQUNKLFFBQVEsQ0FBQyxDQUFDO2dCQUVsQyxJQUFJRyxlQUFlLEtBQUssSUFBSSxFQUFFO29CQUM1QixPQUFPO2lCQUNSO2dCQUVESCxRQUFRLEdBQUdHLGVBQWUsQ0FBQyxDQUFDLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ0UsV0FBVyxDQUFDTCxRQUFRLENBQUMsQ0FBQzthQUM1Qjs7O1lBRURULEdBQThCLEVBQTlCQSxnQ0FBOEI7bUJBQTlCQSxTQUFBQSw4QkFBOEIsQ0FBQ0YsT0FBTyxFQUFFaEQsUUFBUSxFQUFFO2dCQUNoRCxJQUFJUSxhQUFhLEFBQUM7Z0JBRWxCLElBQVFxRCxlQUFlLEdBQXNCYixPQUFPLENBQTVDYSxlQUFlLEVBQUVDLGVBQWUsR0FBS2QsT0FBTyxDQUEzQmMsZUFBZSxBQUFhO2dCQUVyRCxJQUFJRCxlQUFlLEtBQUssSUFBSSxFQUFFO29CQUM1QixPQUFPO2lCQUNSO2dCQUVEckQsYUFBYSxHQUFHcUQsZUFBZSxDQUFDLENBQUUsR0FBRztnQkFFckM3RCxRQUFRLENBQUNpRSxtQkFBbUIsQ0FBQ3pELGFBQWEsQ0FBQyxDQUFDO2dCQUU1QyxJQUFJc0QsZUFBZSxLQUFLLElBQUksRUFBRTtvQkFDNUIsT0FBTztpQkFDUjtnQkFFRCxJQUFNLEFBQUVJLFNBQVMsR0FBS2xCLE9BQU8sQ0FBckJrQixTQUFTLEFBQVksQUFBQztnQkFFOUIxRCxhQUFhLEdBQUdzRCxlQUFlLENBQUMsQ0FBRSxHQUFHO2dCQUVyQyxJQUFJLENBQUNLLGdCQUFnQixDQUFDM0QsYUFBYSxFQUFFMEQsU0FBUyxDQUFDLENBQUM7YUFDakQ7OztZQUVETixHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLENBQUNELFFBQVEsRUFBRTs7Z0JBQ3pCLElBQU1TLFNBQVMsR0FBRzVFLGVBQWUsRUFDM0I2RSxjQUFjLEdBQUcsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0YsU0FBUyxDQUFDLEFBQUM7Z0JBRTFEQyxjQUFjLENBQUMvRSxPQUFPLENBQUMsU0FBQ2lGLGFBQWEsRUFBSztvQkFDeEMsSUFBUUMsT0FBTyxHQUFjRCxhQUFhLENBQWxDQyxPQUFPLEVBQUVDLE9BQU8sR0FBS0YsYUFBYSxDQUF6QkUsT0FBTyxFQUNsQkMsV0FBVyxHQUFHRixPQUFPLEFBQUMsRUFBRSxHQUFHO29CQUVqQ0UsV0FBVyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sRUFBRWQsUUFBUSxRQUFPLENBQUMsQ0FBRSxHQUFHO2lCQUNoRCxDQUFDLENBQUM7YUFDSjs7O1lBRURKLEdBQXFCLEVBQXJCQSx1QkFBcUI7bUJBQXJCQSxTQUFBQSxxQkFBcUIsQ0FBQ0YsUUFBUSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ3BDLElBQU1jLFNBQVMsR0FBRzFFLGVBQWUsRUFDM0IyRSxjQUFjLEdBQUcsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0YsU0FBUyxDQUFDLEFBQUM7Z0JBRTFEOUUsT0FBTyxDQUFDK0UsY0FBYyxFQUFFLFNBQUNFLGFBQWEsRUFBRUssSUFBSSxFQUFLO29CQUMvQyxJQUFRSixPQUFPLEdBQWNELGFBQWEsQ0FBbENDLE9BQU8sRUFBRUMsT0FBTyxHQUFLRixhQUFhLENBQXpCRSxPQUFPLEVBQ2xCSSxXQUFXLEdBQUdMLE9BQU8sRUFDckJsQixNQUFJLEdBQUdzQixJQUFJLEFBQUMsRUFBRSxHQUFHO29CQUV2QkMsV0FBVyxDQUFDRixJQUFJLENBQUNGLE9BQU8sRUFBRXBCLFFBQVEsRUFBRUMsTUFBSSxDQUFDLENBQUM7aUJBQzNDLEVBQUVBLElBQUksQ0FBQyxDQUFDO2FBQ1Y7OztZQUVEd0IsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNKLFdBQVcsRUFBRUQsT0FBTyxFQUFFO2dCQUMzQixJQUFNTCxTQUFTLEdBQUc1RSxlQUFlLEVBQzNCZ0YsT0FBTyxHQUFHRSxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUVqQyxJQUFJLENBQUNLLGdCQUFnQixDQUFDWCxTQUFTLEVBQUVJLE9BQU8sRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFDcEQ7OztZQUVETyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ04sV0FBVyxFQUFFRCxPQUFPLEVBQUU7Z0JBQzVCLElBQU1MLFNBQVMsR0FBRzVFLGVBQWUsRUFDM0JnRixPQUFPLEdBQUdFLFdBQVcsQUFBQyxFQUFFLEdBQUc7Z0JBRWpDLElBQUksQ0FBQ08sbUJBQW1CLENBQUNiLFNBQVMsRUFBRUksT0FBTyxFQUFFQyxPQUFPLENBQUMsQ0FBQzthQUN2RDs7O1lBRURTLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxDQUFDTCxXQUFXLEVBQUVKLE9BQU8sRUFBRTtnQkFDM0IsSUFBTUwsU0FBUyxHQUFHMUUsZUFBZSxFQUMzQjhFLE9BQU8sR0FBR0ssV0FBVyxBQUFDLEVBQUUsR0FBRztnQkFFakMsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1gsU0FBUyxFQUFFSSxPQUFPLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BEOzs7WUFFRFUsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNOLFdBQVcsRUFBRUosT0FBTyxFQUFFO2dCQUM1QixJQUFNTCxTQUFTLEdBQUcxRSxlQUFlLEVBQzNCOEUsT0FBTyxHQUFHSyxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUVqQyxJQUFJLENBQUNJLG1CQUFtQixDQUFDYixTQUFTLEVBQUVJLE9BQU8sRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFDdkQ7OztZQUVEVyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsQ0FBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUViLE9BQU8sRUFBRW5CLElBQUksRUFBRTtnQkFDL0MsSUFBTWlDLGVBQWUsR0FBRyxJQUFJLENBQUNDLHVCQUF1QixFQUFFLEVBQ2hEQyx1QkFBdUIsR0FBR0YsZUFBZSxDQUFDeEYsV0FBVyxFQUFFLEFBQUM7Z0JBRTlELElBQUl1RixPQUFPLEVBQUU7b0JBQ1hHLHVCQUF1QixDQUFDQyxZQUFZLEVBQUUsQ0FBQztvQkFFdkNwQyxJQUFJLEVBQUUsQ0FBQztvQkFFUCxPQUFPO2lCQUNSO2dCQUVELElBQU1wQixhQUFhLEdBQUdtRCxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUV2Q0ksdUJBQXVCLENBQUNFLGlCQUFpQixDQUFDekQsYUFBYSxFQUFFb0IsSUFBSSxDQUFDLENBQUM7YUFDaEU7OztZQUVEc0MsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxDQUFDUCxXQUFXLEVBQUVaLE9BQU8sRUFBRTtnQkFDcEMsSUFBTXZDLGFBQWEsR0FBR21ELFdBQVcsRUFDM0JRLHFCQUFxQixHQUFHM0QsYUFBYSxDQUFDbkMsV0FBVyxFQUFFLEVBQ25EK0YsNEJBQTRCLEdBQUcsSUFBSSxDQUFDaEYsaUJBQWlCLENBQUMrRSxxQkFBcUIsQ0FBQyxBQUFDO2dCQUVuRixJQUFJQyw0QkFBNEIsRUFBRTtvQkFDaEMsT0FBTztpQkFDUjtnQkFFRCxJQUFNUCxlQUFlLEdBQUcsSUFBSSxDQUFDQyx1QkFBdUIsRUFBRSxFQUNoRE8saUJBQWlCLEdBQUc3RCxhQUFhLENBQUM4RCxPQUFPLEVBQUUsQUFBQztnQkFFbEQsSUFBSUMsbUJBQW1CLEdBQUdWLGVBQWUsQ0FBQ2pELE9BQU8sRUFBRSxFQUMvQ21ELHVCQUF1QixHQUFHRixlQUFlLENBQUN4RixXQUFXLEVBQUUsRUFDdkRtRywyQkFBMkIsR0FBR0QsbUJBQW1CLEVBQ2pERSwrQkFBK0IsR0FBR1YsdUJBQXVCLEFBQUMsRUFBQyxHQUFHO2dCQUVsRVEsbUJBQW1CLEdBQUdGLGlCQUFpQixDQUFDLENBQUEsR0FBRztnQkFFM0NOLHVCQUF1QixHQUFHLElBQUksQ0FBQyxDQUFFLEdBQUc7Z0JBRXBDLElBQUksQUFBQ0EsdUJBQXVCLEtBQUtVLCtCQUErQixJQUFNRixtQkFBbUIsS0FBS0MsMkJBQTJCLEFBQUMsRUFBRTtvQkFDMUgsSUFBTS9ELGlCQUFpQixHQUFHRCxhQUFhLENBQUNFLE9BQU8sRUFBRSxBQUFDO29CQUVsRCtELCtCQUErQixDQUFDVCxZQUFZLEVBQUUsQ0FBQztvQkFFL0NELHVCQUF1QixDQUFDVyxTQUFTLENBQUNILG1CQUFtQixFQUFFOUQsaUJBQWlCLENBQUMsQ0FBQztpQkFDM0U7YUFDRjs7O1lBRUR3RCxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLENBQUN6RCxhQUFhLEVBQUVvQixJQUFJLEVBQUU7O2dCQUNyQyxJQUFNaUMsZUFBZSxHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLEVBQUUsRUFDaERuRCxpQkFBaUIsR0FBR0gsYUFBYSxDQUFDSSxPQUFPLEVBQUUsRUFDM0MyRCxtQkFBbUIsR0FBR1YsZUFBZSxDQUFDakQsT0FBTyxFQUFFLEVBQy9DdUQscUJBQXFCLEdBQUczRCxhQUFhLENBQUNuQyxXQUFXLEVBQUUsRUFDbkQ4RCxlQUFlLEdBQUd3QyxDQUFBQSxHQUFBQSxRQUFvQyxBQUFtQixDQUFBLHFDQUFuQixDQUFDaEUsaUJBQWlCLENBQUMsRUFDekV5QixlQUFlLEdBQUd3QyxDQUFBQSxHQUFBQSxRQUFzQyxBQUFxQixDQUFBLHVDQUFyQixDQUFDTCxtQkFBbUIsQ0FBQyxFQUM3RTVDLFFBQVEsR0FBR25CLGFBQWEsQ0FBQ3FFLFdBQVcsQ0FBQzFDLGVBQWUsRUFBRUMsZUFBZSxDQUFDLEVBQ3RFOUQsUUFBUSxHQUFHNkYscUJBQXFCLEFBQUMsRUFBRSxHQUFHO2dCQUU1QyxJQUFJLENBQUN6QyxrQkFBa0IsQ0FBQ0MsUUFBUSxFQUFFckQsUUFBUSxFQUFFLFdBQU07b0JBQ2hELE1BQUswRixZQUFZLEVBQUUsQ0FBQztvQkFFcEJwQyxJQUFJLEVBQUUsQ0FBQztpQkFDUixDQUFDLENBQUM7YUFDSjs7O1lBRURrRCxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUEyQixXQUFlLEdBQWYsSUFBSSxDQUFDdEcsVUFBVSxFQUFsQ2dGLE1BQU0sR0FBYSxXQUFlLENBQWxDQSxNQUFNLEVBQUVKLE1BQU0sR0FBSyxXQUFlLENBQTFCQSxNQUFNLEVBQ2hCRCxXQUFXLEdBQUdLLE1BQU0sRUFDcEJSLFdBQVcsR0FBR0ksTUFBTSxBQUFDLEVBQUMsR0FBRztnQkFFL0IsSUFBSSxDQUFDakYsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFFcEIsSUFBSSxDQUFDNEcsVUFBVSxFQUFFLENBQUM7Z0JBRWxCLElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ3RCLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFcEMsSUFBSSxDQUFDdUIsVUFBVSxDQUFDLElBQUksQ0FBQ2YsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU1Q2YsV0FBVyxJQUFJLElBQUksQ0FBQ0ssTUFBTSxDQUFDTCxXQUFXLENBQUMsQ0FBQztnQkFDeENILFdBQVcsSUFBSSxJQUFJLENBQUNJLE1BQU0sQ0FBQ0osV0FBVyxDQUFDLENBQUM7YUFDekM7OztZQUVEa0MsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBMkIsV0FBZSxHQUFmLElBQUksQ0FBQzFHLFVBQVUsRUFBbENnRixNQUFNLEdBQWEsV0FBZSxDQUFsQ0EsTUFBTSxFQUFFSixNQUFNLEdBQUssV0FBZSxDQUExQkEsTUFBTSxFQUNoQkQsV0FBVyxHQUFHSyxNQUFNLEVBQ3BCUixXQUFXLEdBQUdJLE1BQU0sQUFBQyxFQUFDLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ2pGLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBRXJCLElBQUksQ0FBQ2dILFdBQVcsRUFBRSxDQUFDO2dCQUVuQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRXJDLElBQUksQ0FBQzJCLFdBQVcsQ0FBQyxJQUFJLENBQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTdDZixXQUFXLElBQUksSUFBSSxDQUFDTSxPQUFPLENBQUNOLFdBQVcsQ0FBQyxDQUFDO2dCQUN6Q0gsV0FBVyxJQUFJLElBQUksQ0FBQ00sT0FBTyxDQUFDTixXQUFXLENBQUMsQ0FBQzthQUMxQzs7O1lBRURzQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZixJQUFNaEgsUUFBUSxHQUFHLElBQUksQUFBQztnQkFFdEIscUJBRUMsb0JBQUNLLFFBQVcsUUFBQTtvQkFBQ0wsUUFBUSxFQUFFQSxRQUFRO29CQUFFaUgsT0FBTyxFQUFQQSxJQUFPO2tCQUFHLENBRTNDO2FBQ0Y7OztZQUVBQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQUUsRUFDM0IzRSxpQkFBaUIsR0FBRyxJQUFJLENBQUNBLGlCQUFpQixDQUFDNEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNyRHpFLHNCQUFzQixHQUFHLElBQUksQ0FBQ0Esc0JBQXNCLENBQUN5RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQy9ESCxjQUFhLEdBQUdJLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRUosT0FBTyxFQUFFO29CQUN6QzFFLGlCQUFpQixFQUFqQkEsaUJBQWlCO29CQUNqQkcsc0JBQXNCLEVBQXRCQSxzQkFBc0I7aUJBQ3ZCLENBQUMsQUFBQztnQkFFVCxPQUFPc0UsY0FBYSxDQUFDO2FBQ3RCOzs7WUFFRE0sR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1osSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQzthQUN0Qjs7OztZQXlCT0MsR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRXpILFVBQVUsRUFBRTtnQkFDbEMsSUFBTUwsT0FBTyxHQUFHLEtBQUssRUFDZkcsUUFBUSxHQUFHNEgsS0FBTyxRQUFBLENBQUNGLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFekgsVUFBVSxFQUFFTCxPQUFPLENBQUMsQUFBQztnQkFFL0QsT0FBT0csUUFBUSxDQUFDO2FBQ2pCOzs7O0NBQ0Ysa0JBallzQjRILEtBQU8sUUFBQSxFQWlZN0I7QUE3QkEsZ0JBcFdLakksUUFBUSxFQW9XTlUsYUFBVyxFQUFHQSxRQUFXLFFBQUEsQ0FBQztBQUVoQyxnQkF0V0lWLFFBQVEsRUFzV0wwQix1QkFBcUIsRUFBR0EsU0FBcUIsUUFBQSxDQUFDO0FBRXJELGdCQXhXSTFCLFFBQVEsRUF3V0w0Qix5QkFBdUIsRUFBR0EsVUFBdUIsUUFBQSxDQUFDO0FBRXpELGdCQTFXSTVCLFFBQVEsRUEwV0w4Qiw0QkFBMEIsRUFBR0EsY0FBMEIsUUFBQSxDQUFDO0FBRS9ELGdCQTVXSTlCLFFBQVEsRUE0V0xnQyw4QkFBNEIsRUFBR0EsZUFBNEIsUUFBQSxDQUFDO0FBRW5FLGdCQTlXSWhDLFFBQVEsRUE4V0xrSSxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQWhYSWxJLFFBQVEsRUFnWExtSSxtQkFBaUIsRUFBRztJQUN6QixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLGdCQXZYSW5JLFFBQVEsRUF1WExvSSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFVBQVU7Q0FDdEIsQ0FBQztBQVVKVixNQUFNLENBQUNDLE1BQU0sQ0FBQzVILFFBQVEsQ0FBQ3NJLFNBQVMsRUFBRUMsZ0JBQVUsV0FBQSxDQUFDLENBQUM7ZUFFL0JDLENBQUFBLEdBQUFBLGNBQVMsQUFBVSxDQUFBLFFBQVYsQ0FBQ3hJLFFBQVEsQ0FBQyxvQkFFckJ5SSxPQUFlLGdCQUFBIn0=