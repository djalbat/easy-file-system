"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _easy = require("easy");
var _necessary = require("necessary");
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./list/entries"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/directoryName"));
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
                var dragEntryItems = this.retrieveDragEntryItems(), paths = dragEntryItems.reduce(function(paths, dragEntryItem) {
                    var dragEntryItemType = dragEntryItem.getType();
                    if (dragEntryItemType === type) {
                        var dragEntryItemPath = dragEntryItem.getPath(), path = dragEntryItemPath; ///
                        paths.push(path);
                    }
                    return paths;
                }, []);
                return paths;
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
                    pathMaps.forEach(function(pathMap) {
                        return _this.moveDragEntryItem(pathMap, explorer);
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
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromDragEntryItemPath)(dragEntryItemPath), targetEntryPath = (0, _pathMap.targetEntryPathFromMarkerEntryItemPath)(markerEntryItemPath), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
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
var _default = (0, _easyWithStyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgsIHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IE9QRU5fRVZFTlRfVFlQRSwgTU9WRV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZDtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEVudHJpZXNMaXN0KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0xpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0xpc3Q7XG5cdH1cblxuICBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpLFxuICAgICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgICB0aGlzLm1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB0aGlzLm1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgIHRoaXMuY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCk7XG4gIH1cblxuICBtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGZpbGVQYXRoO1xuXG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7IC8vL1xuXG4gICAgdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICBtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBsZXQgZGlyZWN0b3J5UGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlyZWN0b3J5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gcGF0aE1hcDtcblxuICAgIGRpcmVjdG9yeVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICB9XG5cbiAgY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBvcGVuSGFuZGxlciA9IGhhbmRsZXI7ICAvLy9cblxuICAgICAgb3BlbkhhbmRsZXIuY2FsbChlbGVtZW50LCBmaWxlUGF0aCwgdGhpcyk7ICAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgbW92ZUhhbmRsZXIgPSBoYW5kbGVyLCAgLy8vXG4gICAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgICBtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uT3BlbihvcGVuSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gb3BlbkhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmT3BlbihvcGVuSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gb3BlbkhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25Nb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZNb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7XG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIixcbiAgICBcIm9uT3BlblwiLFxuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBtb3VudGVkKTtcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIk9QRU5fRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJNT1ZFX0VWRU5UX1RZUEUiLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImlzTW91bnRlZCIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJtb3ZlRHJhZ0VudHJ5SXRlbSIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImRvbmUiLCJjYWxsTW92ZUhhbmRsZXJzQXN5bmMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInJlbW92ZUZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwiYWRkRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJlbGVtZW50Iiwib3BlbkhhbmRsZXIiLCJjYWxsIiwibmV4dCIsIm1vdmVIYW5kbGVyIiwib25PcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZk9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwib2ZmTW92ZSIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiYWRkTWFya2VyIiwic291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoTWFwcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiLCJleHBsb3JlclBhZGRpbmciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkEwWmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQTVab0IsaUJBQWlCOytCQUVaLG9CQUFvQjtvQkFDWCxNQUFNO3lCQUNKLFdBQVc7NERBRXpCLGdCQUFnQjs2REFDTiw0QkFBNEI7OERBQzFCLDhCQUE4QjtrRUFDM0IsaUNBQWlDO21FQUMvQixtQ0FBbUM7c0JBRTVDLFVBQVU7MEJBQ2dDLGNBQWM7dUJBQ0sscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxILElBQU0sQUFBRUEsT0FBTyxHQUFLQyxVQUFxQixzQkFBQSxDQUFqQ0QsT0FBTyxBQUEwQixFQUNqQ0UsZUFBZSxHQUFzQkMsS0FBVSxXQUFBLENBQS9DRCxlQUFlLEVBQUVFLGVBQWUsR0FBS0QsS0FBVSxXQUFBLENBQTlCQyxlQUFlLEFBQWdCO0FBRXhELElBQUEsQUFBTUMsUUFBUSxpQkFtWVgsQUFuWUg7OzthQUFNQSxRQUFRLENBQ0FDLFFBQVEsRUFBRUMsT0FBTzs7O2tDQUNyQkQsUUFBUSxFQUFFO1FBRWhCLE1BQUtDLE9BQU8sR0FBR0EsT0FBTyxDQUFDOzs7OztZQUd6QkMsR0FBUyxFQUFUQSxX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