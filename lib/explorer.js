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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgsIHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IE9QRU5fRVZFTlRfVFlQRSwgTU9WRV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZDtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEVudHJpZXNMaXN0KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0xpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0xpc3Q7XG5cdH1cblxuICBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpLFxuICAgICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgICB0aGlzLm1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB0aGlzLm1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgIHRoaXMuY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCk7XG4gIH1cblxuICBtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGZpbGVQYXRoO1xuXG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7IC8vL1xuXG4gICAgdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICBtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBsZXQgZGlyZWN0b3J5UGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlyZWN0b3J5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gcGF0aE1hcDtcblxuICAgIGRpcmVjdG9yeVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICB9XG5cbiAgY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBvcGVuSGFuZGxlciA9IGhhbmRsZXI7ICAvLy9cblxuICAgICAgb3BlbkhhbmRsZXIuY2FsbChlbGVtZW50LCBmaWxlUGF0aCwgdGhpcyk7ICAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgbW92ZUhhbmRsZXIgPSBoYW5kbGVyLCAgLy8vXG4gICAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgICBtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uT3BlbihvcGVuSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gb3BlbkhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmT3BlbihvcGVuSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gb3BlbkhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25Nb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZNb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7XG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIixcbiAgICBcIm9uT3BlblwiLFxuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBtb3VudGVkKTtcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIk9QRU5fRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJNT1ZFX0VWRU5UX1RZUEUiLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImlzTW91bnRlZCIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJtb3ZlRHJhZ0VudHJ5SXRlbSIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImRvbmUiLCJjYWxsTW92ZUhhbmRsZXJzQXN5bmMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInJlbW92ZUZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwiYWRkRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJlbGVtZW50Iiwib3BlbkhhbmRsZXIiLCJjYWxsIiwibmV4dCIsIm1vdmVIYW5kbGVyIiwib25PcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZk9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwib2ZmTW92ZSIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiYWRkTWFya2VyIiwic291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoTWFwcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiLCJleHBsb3JlclBhZGRpbmciXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFpQixDQUFqQixjQUFpQjtBQUVaLEdBQW9CLENBQXBCLGdCQUFvQjtBQUNYLEdBQU0sQ0FBTixLQUFNO0FBQ0osR0FBVyxDQUFYLFVBQVc7QUFFekIsR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDTixHQUE0QixDQUE1QixTQUE0QjtBQUMxQixHQUE4QixDQUE5QixVQUE4QjtBQUMzQixHQUFpQyxDQUFqQyxjQUFpQztBQUMvQixHQUFtQyxDQUFuQyxlQUFtQztBQUU1QyxHQUFVLENBQVYsT0FBVTtBQUNnQyxHQUFjLENBQWQsV0FBYztBQUNLLEdBQXFCLENBQXJCLFFBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OztnRkFoQmxIOzs7Ozs7OztzQ0FBQTs7Ozs7O2lDQUFBOzs7aUVBQUE7O1NBQUE7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7Ozs7OztzQ0FBQTs7Ozs7Ozs7Ozs7O1VBQUE7O0tBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBMFptQyxDQUV4QjtRQUFrQixDQUU3Qjs7OztLQTlaQTs7O0FBa0JBLEdBQUssQ0FBR0EsT0FBTyxHQUFLQyxVQUFx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