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
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./list/entries"));
var _drag = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/directoryName"));
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
var forEach = _necessary.asynchronousUtilities.forEach;
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
                var _this_properties = this.properties, _this_properties_reference = _this_properties.reference, reference = _this_properties_reference === void 0 ? null : _this_properties_reference;
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
                var _this_properties = this.properties, _this_properties_ignoredReferences = _this_properties.ignoredReferences, ignoredReferences = _this_properties_ignoredReferences === void 0 ? [] : _this_properties_ignoredReferences;
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
            key: "onSelect",
            value: function onSelect(selectHandler, element) {
                var eventType = _eventTypes.SELECT_EVENT_TYPE, handler = selectHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offSelect",
            value: function offSelect(selectHandler, element) {
                var eventType = _eventTypes.SELECT_EVENT_TYPE, handler = selectHandler; ///
                this.removeEventListener(eventType, handler, element);
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
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(fileNameDragEntryItem) {
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath; ///
                this.callOpenHandlers(filePath);
            }
        },
        {
            key: "selectDragEntryItem",
            value: function selectDragEntryItem(dragEntryItem) {
                var path = dragEntryItem.getPath(), selected = dragEntryItem.isSelected();
                this.callSelectHandlers(path, selected);
                if (selected) {
                    dragEntryItem.deselect();
                    return;
                }
                this.deselectAllPaths();
                this.selectPath(path);
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
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callMoveHandlersAsync(pathMaps, function() {
                    pathMaps.forEach(function(pathMap) {
                        return _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        return _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
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
            key: "addDragEntryItem",
            value: function addDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.addDirectoryNameDragEntryItem(pathMap, explorer) : this.addFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "addFileNameDragEntryItem",
            value: function addFileNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                if (targetEntryPath === null) {
                    return;
                }
                var filePath = targetEntryPath; ///
                this.addFilePath(filePath);
            }
        },
        {
            key: "addDirectoryNameDragEntryItem",
            value: function addDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                if (targetEntryPath === null) {
                    return;
                }
                var collapsed = pathMap.collapsed;
                var directoryPath = targetEntryPath; ///
                this.addDirectoryPath(directoryPath, collapsed);
            }
        },
        {
            key: "callMoveHandlersAsync",
            value: function callMoveHandlersAsync(pathMaps, done) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, _$done = next; ///
                    moveHandler.call(element, pathMaps, _$done);
                }, done);
            }
        },
        {
            key: "callSelectHandlers",
            value: function callSelectHandlers(path, selected) {
                var _this = this;
                var eventType = _eventTypes.SELECT_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var handler = eventListener.handler, element = eventListener.element, selectHandler = handler; ///
                    selectHandler.call(element, path, selected, _this); ///
                });
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
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
                this.mounted = true;
                this.enableDrop();
                this.onDrop(this.dropHandler);
                this.onDragOver(this.dragOverHandler);
                moveHandler && this.onMove(moveHandler);
                openHandler && this.onOpen(openHandler);
                selectHandler && this.onSelect(selectHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
                this.mounted = false;
                this.disableDrop();
                this.offDrop(this.dropHandler);
                this.offDragOver(this.dragOverHandler);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
                selectHandler && this.offSelect(selectHandler);
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
    "onSelect",
    "reference",
    "ignoredReferences"
]);
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easyDragAndDrop.dropMixins);
var _default = (0, _easyWithStyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IE9QRU5fRVZFTlRfVFlQRSwgTU9WRV9FVkVOVF9UWVBFLCBTRUxFQ1RfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCwgdGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEVudHJpZXNMaXN0KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0xpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0xpc3Q7XG5cdH1cblxuICBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpLFxuICAgICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBvbk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uT3BlbihvcGVuSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gb3BlbkhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmT3BlbihvcGVuSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gb3BlbkhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25TZWxlY3Qoc2VsZWN0SGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNFTEVDVF9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzZWxlY3RIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZlNlbGVjdChzZWxlY3RIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0VMRUNUX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHNlbGVjdEhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoKTtcbiAgfVxuXG4gIHNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IHBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRlc2VsZWN0QWxsUGF0aHMoKTtcblxuICAgIHRoaXMuc2VsZWN0UGF0aChwYXRoKTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLmFkZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICAgIHRoaXMuYWRkRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIGFkZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgYWRkRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gcGF0aE1hcDtcblxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICB9XG5cbiAgY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBkb25lKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIG1vdmVIYW5kbGVyLmNhbGwoZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0VMRUNUX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgc2VsZWN0SGFuZGxlciA9IGhhbmRsZXI7ICAvLy9cblxuICAgICAgc2VsZWN0SGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGgsIHNlbGVjdGVkLCB0aGlzKTsgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG5cbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9mZlNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHJldHJpZXZlRmlsZVBhdGhzLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRoc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIixcbiAgICBcIm9uT3BlblwiLFxuICAgIFwib25TZWxlY3RcIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiaXNNb3VudGVkIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJvbk1vdmUiLCJtb3ZlSGFuZGxlciIsImV2ZW50VHlwZSIsIk1PVkVfRVZFTlRfVFlQRSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmTW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbk9wZW4iLCJvcGVuSGFuZGxlciIsIk9QRU5fRVZFTlRfVFlQRSIsIm9mZk9wZW4iLCJvblNlbGVjdCIsInNlbGVjdEhhbmRsZXIiLCJTRUxFQ1RfRVZFTlRfVFlQRSIsIm9mZlNlbGVjdCIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJzZWxlY3REcmFnRW50cnlJdGVtIiwic2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwiY2FsbFNlbGVjdEhhbmRsZXJzIiwiZGVzZWxlY3QiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21NYXJrZXJFbnRyeUl0ZW1QYXRoIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsImVudHJ5RGlyZWN0b3J5IiwicmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJhZGREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEZpbGVQYXRoIiwiY29sbGFwc2VkIiwiYWRkRGlyZWN0b3J5UGF0aCIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJjYWxsIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwidG9wbW9zdCIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImZyb21DbGFzcyIsIkNsYXNzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIs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