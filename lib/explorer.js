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
var _drag = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
            var dragElementDragEntryItem = _instanceof(dragElement, _drag.default);
            if (!dragElementDragEntryItem) {
                done();
                return;
            }
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
            var dragElementDragEntryItem = _instanceof(dragElement, _drag.default);
            if (!dragElementDragEntryItem) {
                return;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCwgdGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgT1BFTl9FVkVOVF9UWVBFLCBNT1ZFX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb3VudGVkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5tb3VudGVkID0gbW91bnRlZDtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudGVkO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlciA9IChkcmFnRWxlbWVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IHRoaXMuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW1OYW1lOy8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7XG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIixcbiAgICBcIm9uT3BlblwiLFxuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBtb3VudGVkKTtcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIk9QRU5fRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJNT1ZFX0VWRU5UX1RZUEUiLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiaXNNb3VudGVkIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZVBhdGhzIiwidHlwZSIsImRyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEcmFnRW50cnlJdGVtcyIsInBhdGhzIiwicmVkdWNlIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJwYXRoIiwicHVzaCIsInJldHJpZXZlRmlsZVBhdGhzIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImZpbGVQYXRocyIsInJldHJpZXZlRGlyZWN0b3J5UGF0aHMiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlQYXRocyIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZVBhdGgiLCJjYWxsT3BlbkhhbmRsZXJzIiwicmVtb3ZlRmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJhZGREaXJlY3RvcnlQYXRoIiwiZXZlbnRUeXBlIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwiaGFuZGxlciIsIm9wZW5IYW5kbGVyIiwiY2FsbCIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBeWFiLFNBSUU7OztlQUpGLFFBSUU7OztrRUEzYW9CLGlCQUFpQjsrQkFFWixvQkFBb0I7b0JBQ1gsTUFBTTt5QkFDSixXQUFXOzREQUV6QixnQkFBZ0I7eURBQ2QsbUJBQW1COzZEQUNYLDRCQUE0Qjs4REFDMUIsOEJBQThCO2tFQUMzQixpQ0FBaUM7bUVBQy9CLG1DQUFtQztzQkFFNUMsVUFBVTswQkFDZ0MsY0FBYzt1QkFDSyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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