"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _entries = _interopRequireDefault(require("./list/entries"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _styles = require("./styles");
var _eventTypes = require("./eventTypes");
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
var forEach = _necessary.asynchronousUtilities.forEach;
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
                var EntriesList = this.constructor.EntriesList;
                return EntriesList;
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
                var FileNameDragEntryItem = this.constructor.FileNameDragEntryItem;
                return FileNameDragEntryItem;
            }
        },
        {
            key: "getFileNameMarkerEntryItem",
            value: function getFileNameMarkerEntryItem() {
                var FileNameMarkerEntryItem = this.constructor.FileNameMarkerEntryItem;
                return FileNameMarkerEntryItem;
            }
        },
        {
            key: "getDirectoryNameDragEntryItem",
            value: function getDirectoryNameDragEntryItem() {
                var DirectoryNameDragEntryItem = this.constructor.DirectoryNameDragEntryItem;
                return DirectoryNameDragEntryItem;
            }
        },
        {
            key: "getDirectoryNameMarkerEntryItem",
            value: function getDirectoryNameMarkerEntryItem() {
                var DirectoryNameMarkerEntryItem = this.constructor.DirectoryNameMarkerEntryItem;
                return DirectoryNameMarkerEntryItem;
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
                var eventType = _eventTypes.OPEN_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var handler = eventListener.handler, element = eventListener.element, openHandler = handler; ///
                    openHandler.call(element, filePath, _this); ///
                });
            }
        },
        {
            key: "callMoveHandlersAsync",
            value: function callMoveHandlersAsync(pathMaps, done1) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, done = next; ///
                    moveHandler.call(element, pathMaps, done);
                }, done1);
            }
        },
        {
            key: "onOpen",
            value: function onOpen(openHandler, element) {
                var eventType = _eventTypes.OPEN_EVENT_TYPE, handler = openHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offOpen",
            value: function offOpen(openHandler, element) {
                var eventType = _eventTypes.OPEN_EVENT_TYPE, handler = openHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onMove",
            value: function onMove(moveHandler, element) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, handler = moveHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offMove",
            value: function offMove(moveHandler, element) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, handler = moveHandler; ///
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
                return(/*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
                }));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBPUEVOX0VWRU5UX1RZUEUsIE1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCwgdGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImlzTW91bnRlZCIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsImZpbGVQYXRocyIsInJldHJpZXZlRGlyZWN0b3J5UGF0aHMiLCJkaXJlY3RvcnlQYXRocyIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtcyIsInBhdGhNYXBzIiwiZG9uZSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZVBhdGgiLCJjYWxsT3BlbkhhbmRsZXJzIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJhZGREaXJlY3RvcnlQYXRoIiwiZXZlbnRUeXBlIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlciIsImVsZW1lbnQiLCJvcGVuSGFuZGxlciIsImNhbGwiLCJuZXh0IiwibW92ZUhhbmRsZXIiLCJvbk9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmT3BlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbk1vdmUiLCJvZmZNb3ZlIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJhZGRNYXJrZXIiLCJnZXRQYXRoTWFwcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FB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