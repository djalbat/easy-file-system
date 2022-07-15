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
        _defineProperty(_assertThisInitialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
            var markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            var dragEntryItem = dragElement; ///
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        _defineProperty(_assertThisInitialized(_this), "dragOverHandler", function(dragElement, element) {
            var dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = _this.isExplorerIgnored(dragEntryItemExplorer);
            if (dragEntryItemExplorerIgnored) {
                return;
            }
            var markerEntryItem = _this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = dragEntryItemName; ///
            markerEntryItemExplorer = _assertThisInitialized(_this); ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgsIHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IE9QRU5fRVZFTlRfVFlQRSwgTU9WRV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZDtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IHRoaXMuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCksXG4gICAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5OyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMubW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICAgIHRoaXMubW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMubW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoKTtcbiAgfVxuXG4gIG1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBsZXQgZmlsZVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gc291cmNlRW50cnlQYXRoOyAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWxlUGF0aCA9IHRhcmdldEVudHJ5UGF0aDsgLy8vXG5cbiAgICB0aGlzLmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcbiAgfVxuXG4gIG1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBkaXJlY3RvcnlQYXRoO1xuXG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSBwYXRoTWFwO1xuXG4gICAgZGlyZWN0b3J5UGF0aCA9IHRhcmdldEVudHJ5UGF0aDsgIC8vL1xuXG4gICAgdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCk7XG4gIH1cblxuICBjYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gT1BFTl9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG9wZW5IYW5kbGVyID0gaGFuZGxlcjsgIC8vL1xuXG4gICAgICBvcGVuSGFuZGxlci5jYWxsKGVsZW1lbnQsIGZpbGVQYXRoLCB0aGlzKTsgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBkb25lKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIG1vdmVIYW5kbGVyLmNhbGwoZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgb25PcGVuKG9wZW5IYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gT1BFTl9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBvcGVuSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZPcGVuKG9wZW5IYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gT1BFTl9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBvcGVuSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvbk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJPUEVOX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiTU9WRV9FVkVOVF9UWVBFIiwiRXhwbG9yZXIiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiaXNNb3VudGVkIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZVBhdGhzIiwidHlwZSIsImRyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEcmFnRW50cnlJdGVtcyIsInBhdGhzIiwicmVkdWNlIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJwYXRoIiwicHVzaCIsInJldHJpZXZlRmlsZVBhdGhzIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImZpbGVQYXRocyIsInJldHJpZXZlRGlyZWN0b3J5UGF0aHMiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlQYXRocyIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZVBhdGgiLCJjYWxsT3BlbkhhbmRsZXJzIiwicmVtb3ZlRmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJhZGREaXJlY3RvcnlQYXRoIiwiZXZlbnRUeXBlIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlciIsIm9wZW5IYW5kbGVyIiwiY2FsbCIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBMFpiLFNBSUU7OztlQUpGLFFBSUU7OztrRUE1Wm9CLGlCQUFpQjsrQkFFWixvQkFBb0I7b0JBQ1gsTUFBTTt5QkFDSixXQUFXOzREQUV6QixnQkFBZ0I7NkRBQ04sNEJBQTRCOzhEQUMxQiw4QkFBOEI7a0VBQzNCLGlDQUFpQzttRUFDL0IsbUNBQW1DO3NCQUU1QyxVQUFVOzBCQUNnQyxjQUFjO3VCQUNLLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsSCxJQUFNLEFBQUVBLE9BQU8sR0FBS0MsVUFBcUIsc0JBQUEsQ0FBakNELE9BQU8sQUFBMEIsRUFDakNFLGVBQWUsR0FBc0JDLEtBQVUsV0FBQSxDQUEvQ0QsZUFBZSxFQUFFRSxlQUFlLEdBQUtELEtBQVUsV0FBQSxDQUE5QkMsZUFBZSxBQUFnQjtBQUV4RCxJQUFBLEFBQU1DLFFBQVEsaUJBbVlYLEFBbllIOzs7YUFBTUEsUUFBUSxDQUNBQyxRQUFRLEVBQUVDLE9BQU87OztrQ0FDckJELFFBQVEsRUFBRTtRQVNsQkUsK0NBQUFBLGFBQVcsRUFBRyxTQUFDQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMs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