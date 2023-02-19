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
var _explorer = /*#__PURE__*/ _interopRequireDefault(require("./mixins/explorer"));
var _dragEntryItem = /*#__PURE__*/ _interopRequireDefault(require("./mixins/dragEntryItem"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _constants = require("./constants");
var _styles = require("./styles");
var _keyCodes = require("./keyCodes");
var _path = require("./utilities/path");
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
var last = _necessary.arrayUtilities.last, concatenatePaths = _necessary.pathUtilities.concatenatePaths;
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
        _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            if (keyCode === _keyCodes.DELETE_KEY_CODE || keyCode === _keyCodes.BACKSPACE_KEY_CODE) {
                var selectedDragEntryItem = _this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    var dragEntryItem = selectedDragEntryItem, dragEntryItemEditable = dragEntryItem.isEditable();
                    if (dragEntryItemEditable) {
                        return;
                    }
                    var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = _assertThisInitialized(_this); ///
                    _this.removeDragEntryItems(pathMaps, explorer, function() {
                    ///
                    });
                    event.preventDefault();
                }
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
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath, explorer = fileNameDragEntryItem.getExplorer();
                this.callOpenHandlers(filePath, explorer);
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                var directoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems();
                directoryNameDragEntryItems.forEach(function(directoryNameDragEntryItem) {
                    directoryNameDragEntryItem.collapse();
                });
            }
        },
        {
            key: "createPath",
            value: function createPath() {
                var path;
                var name = _constants.PERIOD, selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem === null) {
                    path = name; ///
                } else {
                    var selectedDragEntryItemDirectoryDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();
                    if (selectedDragEntryItemDirectoryDragEntryItem) {
                        var directoryNameDragEntryItem = selectedDragEntryItem, directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();
                        path = concatenatePaths(directoryNameDragEntryItemPath, name);
                    } else {
                        var fileDragEntryItem = selectedDragEntryItem, fileDragEntryItemPath = fileDragEntryItem.getPath(), fileDragEntryItemPathWithoutBottommostName = (0, _path.nonNullPathWithoutBottommostNameFromPath)(fileDragEntryItemPath);
                        path = concatenatePaths(fileDragEntryItemPathWithoutBottommostName, name);
                    }
                }
                return path;
            }
        },
        {
            key: "createFilePath",
            value: function createFilePath() {
                var path = this.createPath(), created = true, filePath = path, callHandlers = false, fileNameDragEntryItem = this.addFilePath(filePath, created);
                this.deselectDragEntryItem(fileNameDragEntryItem);
                this.selectDragEntryItem(fileNameDragEntryItem, callHandlers);
                this.editSelectedPath();
            }
        },
        {
            key: "createDirectoryPath",
            value: function createDirectoryPath() {
                var path = this.createPath(), created = true, collapsed = false, callHandlers = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, collapsed, created);
                this.deselectDragEntryItem(directoryNameDragEntryItem);
                this.selectDragEntryItem(directoryNameDragEntryItem, callHandlers);
                this.editSelectedPath();
            }
        },
        {
            key: "editSelectedPath",
            value: function editSelectedPath() {
                var selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    selectedDragEntryItem.edit();
                }
            }
        },
        {
            key: "getSelectedPath",
            value: function getSelectedPath() {
                var selectedPath = null;
                var selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    var selectedDragEntryItemPath = selectedDragEntryItem.getPath();
                    selectedPath = selectedDragEntryItemPath; ///
                }
                return selectedPath;
            }
        },
        {
            key: "selectDragEntryItem",
            value: function selectDragEntryItem(dragEntryItem) {
                var callHandlers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var path = dragEntryItem.getPath();
                this.deselectAllPaths();
                this.selectPath(path);
                if (callHandlers) {
                    var selected = true, explorer = dragEntryItem.getExplorer();
                    this.callSelectHandlers(path, selected, explorer);
                }
            }
        },
        {
            key: "deselectDragEntryItem",
            value: function deselectDragEntryItem(dragEntryItem) {
                var callHandlers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var path = null;
                this.deselectAllPaths(); ///
                if (callHandlers) {
                    var selected = false, explorer = dragEntryItem.getExplorer();
                    this.callSelectHandlers(path, selected, explorer);
                }
            }
        },
        {
            key: "renameDragEntryItem",
            value: function renameDragEntryItem(dragEntryItem, done) {
                var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
                this.renameDragEntryItems(pathMaps, explorer, function() {
                    done();
                });
            }
        },
        {
            key: "createDragEntryItem",
            value: function createDragEntryItem(dragEntryItem, done) {
                var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
                this.createDragEntryItems(pathMaps, explorer, function() {
                    done();
                });
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem, done) {
                var _this = this;
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(markerEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.moveDragEntryItems(pathMaps, explorer, function() {
                    var lastPathMap = last(pathMaps), targetEntryPath = lastPathMap.targetEntryPath, path = targetEntryPath;
                    _this.removeMarker();
                    _this.selectPath(path);
                    done();
                });
            }
        },
        {
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callMoveHandlersAsync(pathMaps, explorer, function() {
                    pathMaps.forEach(function(pathMap) {
                        _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callRemoveHandlersAsync(pathMaps, explorer, function() {
                    pathMaps.forEach(function(pathMap) {
                        _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "renameDragEntryItems",
            value: function renameDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callRenameHandlersAsync(pathMaps, explorer, function() {
                    pathMaps.forEach(function(pathMap) {
                        _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "createDragEntryItems",
            value: function createDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callCreateHandlersAsync(pathMaps, explorer, function() {
                    pathMaps.forEach(function(pathMap) {
                        _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
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
                this.onKeyDown(this.keyDownHandler);
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
                this.onKeyDown(this.keyDownHandler);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
                selectHandler && this.offSelect(selectHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorer = this; ///
                return /*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), collapse = this.collapse.bind(this), getSelectedPath = this.getSelectedPath.bind(this), retrieveFilePaths = this.retrieveFilePaths.bind(this), retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this), selectPath = context.selectPath, createFilePath = context.createFilePath, deselectAllPaths = context.deselectAllPaths, editSelectedPath = context.editSelectedPath, callSelectHandlers = context.callSelectHandlers, createDirectoryPath = context.createDirectoryPath;
                return {
                    collapse: collapse,
                    getSelectedPath: getSelectedPath,
                    retrieveFilePaths: retrieveFilePaths,
                    retrieveDirectoryPaths: retrieveDirectoryPaths,
                    selectPath: selectPath,
                    createFilePath: createFilePath,
                    deselectAllPaths: deselectAllPaths,
                    editSelectedPath: editSelectedPath,
                    callSelectHandlers: callSelectHandlers,
                    createDirectoryPath: createDirectoryPath
                };
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
Object.assign(Explorer.prototype, _explorer.default);
Object.assign(Explorer.prototype, _dragEntryItem.default);
var _default = (0, _easyWithStyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBQRVJJT0QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgREVMRVRFX0tFWV9DT0RFLCBCQUNLU1BBQ0VfS0VZX0NPREUgfSBmcm9tIFwiLi9rZXlDb2Rlc1wiO1xuaW1wb3J0IHsgbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtLCB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmICgoa2V5Q29kZSA9PT0gREVMRVRFX0tFWV9DT0RFKSB8fCAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFX0tFWV9DT0RFKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbUVkaXRhYmxlID0gZHJhZ0VudHJ5SXRlbS5pc0VkaXRhYmxlKCk7XG5cbiAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1FZGl0YWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCksXG4gICAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5OyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoLCBleHBsb3Jlcik7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZmlsZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZURyYWdFbnRyeUl0ZW1QYXRoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhmaWxlRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGNhbGxIYW5kbGVycyA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgsIGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5kZXNlbGVjdERyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcblxuICAgIHRoaXMuc2VsZWN0RHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0sIGNhbGxIYW5kbGVycyk7XG5cbiAgICB0aGlzLmVkaXRTZWxlY3RlZFBhdGgoKTtcbiAgfVxuXG4gIGNyZWF0ZURpcmVjdG9yeVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IGZhbHNlLFxuICAgICAgICAgIGNhbGxIYW5kbGVycyA9IGZhbHNlLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkLCBjcmVhdGVkKTtcblxuICAgIHRoaXMuZGVzZWxlY3REcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcblxuICAgIHRoaXMuc2VsZWN0RHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzKTtcblxuICAgIHRoaXMuZWRpdFNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgZWRpdFNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZWRpdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMgPSB0cnVlKSB7XG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG5cbiAgICBpZiAoY2FsbEhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRydWUsXG4gICAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICBkZXNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhdGggPSBudWxsO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7ICAvLy9cblxuICAgIGlmIChjYWxsSGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZmFsc2UsXG4gICAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMucmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RQYXRoTWFwID0gbGFzdChwYXRoTWFwcyksXG4gICAgICAgICAgICB7IHRhcmdldEVudHJ5UGF0aCB9ID0gbGFzdFBhdGhNYXAsXG4gICAgICAgICAgICBwYXRoID0gdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVuYW1lSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub2ZmU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFBhdGggPSB0aGlzLmdldFNlbGVjdGVkUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICB7IHNlbGVjdFBhdGgsXG4gICAgICAgICAgICBjcmVhdGVGaWxlUGF0aCxcbiAgICAgICAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICAgICAgICBlZGl0U2VsZWN0ZWRQYXRoLFxuICAgICAgICAgICAgY2FsbFNlbGVjdEhhbmRsZXJzLFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dDtcblxuICAgIHJldHVybiAoe1xuICAgICAgY29sbGFwc2UsXG4gICAgICBnZXRTZWxlY3RlZFBhdGgsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMsXG4gICAgICBzZWxlY3RQYXRoLFxuICAgICAgY3JlYXRlRmlsZVBhdGgsXG4gICAgICBkZXNlbGVjdEFsbFBhdGhzLFxuICAgICAgZWRpdFNlbGVjdGVkUGF0aCxcbiAgICAgIGNhbGxTZWxlY3RIYW5kbGVycyxcbiAgICAgIGNyZWF0ZURpcmVjdG9yeVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBleHBsb3Jlck1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJhZ0VudHJ5SXRlbU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImtleUNvZGUiLCJERUxFVEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1FZGl0YWJsZSIsImlzRWRpdGFibGUiLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsImV4cGxvcmVyIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwcmV2ZW50RGVmYXVsdCIsImlzTW91bnRlZCIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJpc0RpcmVjdG9yeUVtcHR5IiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJpc0VtcHR5IiwiZGlyZWN0b3J5RW1wdHkiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJjb2xsYXBzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5RHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlRHJhZ0VudHJ5SXRlbSIsImZpbGVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJjcmVhdGVGaWxlUGF0aCIsImNyZWF0ZWQiLCJjYWxsSGFuZGxlcnMiLCJhZGRGaWxlUGF0aCIsImRlc2VsZWN0RHJhZ0VudHJ5SXRlbSIsInNlbGVjdERyYWdFbnRyeUl0ZW0iLCJlZGl0U2VsZWN0ZWRQYXRoIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJlZGl0IiwiZ2V0U2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwic2VsZWN0ZWQiLCJjYWxsU2VsZWN0SGFuZGxlcnMiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInJlbmFtZURyYWdFbnRyeUl0ZW1zIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZURyYWdFbnRyeUl0ZW1zIiwibW92ZURyYWdFbnRyeUl0ZW1zIiwibGFzdFBhdGhNYXAiLCJjYWxsTW92ZUhhbmRsZXJzQXN5bmMiLCJwYXRoTWFwIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsImNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jIiwiY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJkcmFnRW50cnlJdGVtTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyakJBOzs7ZUFBQTs7O2tFQXpqQnNCO29CQUVFOytCQUNHO3lCQUNtQjs0REFFdEI7eURBQ0U7NkRBQ0M7a0VBQ0s7NkRBQ0U7OERBQ0U7a0VBQ0c7bUVBQ0U7eUJBRWxC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