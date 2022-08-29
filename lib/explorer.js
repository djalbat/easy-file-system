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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
                var context = this.getContext(), retrieveFilePaths = this.retrieveFilePaths.bind(this), retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this);
                return _objectSpreadProps(_objectSpread({}, context), {
                    retrieveFilePaths: retrieveFilePaths,
                    retrieveDirectoryPaths: retrieveDirectoryPaths
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCwgdGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgT1BFTl9FVkVOVF9UWVBFLCBNT1ZFX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb3VudGVkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5tb3VudGVkID0gbW91bnRlZDtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudGVkO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlciA9IChkcmFnRWxlbWVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IHRoaXMuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW1OYW1lOy8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3BlbiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbjsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7XG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cbiAgc3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uTW92ZVwiLFxuICAgIFwib25PcGVuXCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiT1BFTl9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIk1PVkVfRVZFTlRfVFlQRSIsIkV4cGxvcmVyIiwic2VsZWN0b3IiLCJtb3VudGVkIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJlbGVtZW50IiwiZG9uZSIsImRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSIsIkRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcmFnRW50cnlJdGVtIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJhZGRNYXJrZXIiLCJpc01vdW50ZWQiLCJleHBsb3JlciIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJpc0RpcmVjdG9yeUVtcHR5IiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJpc0VtcHR5IiwiZGlyZWN0b3J5RW1wdHkiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwibW92ZURyYWdFbnRyeUl0ZW1zIiwibW92ZURyYWdFbnRyeUl0ZW0iLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY2FsbE1vdmVIYW5kbGVyc0FzeW5jIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJyZW1vdmVGaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwib3BlbkhhbmRsZXIiLCJjYWxsIiwibmV4dCIsIm1vdmVIYW5kbGVyIiwib25PcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZk9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwib2ZmTW92ZSIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiLCJleHBsb3JlclBhZGRpbmciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkF5YWIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQTNhb0IsaUJBQWlCOytCQUVaLG9CQUFvQjtvQkFDWCxNQUFNO3lCQUNKLFdBQVc7NERBRXpCLGdCQUFnQjt5REFDZCxtQkFBbUI7NkRBQ1gsNEJBQTRCOzhEQUMxQiw4QkFBOEI7a0VBQzNCLGlDQUFpQzttRUFDL0IsbUNBQW1DO3NCQUU1QyxVQUFVOzBCQUNnQyxjQUFjO3VCQUNLLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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