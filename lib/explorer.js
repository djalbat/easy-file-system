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
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./list/entries"));
var _drag = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag"));
var _explorer = /*#__PURE__*/ _interopRequireDefault(require("./mixins/explorer"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _styles = require("./styles");
var _keyCodes = require("./keyCodes");
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
                    var dragEntryItem = selectedDragEntryItem, dragEntryItemEdited = dragEntryItem.isEdited();
                    if (dragEntryItemEdited) {
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
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath; ///
                this.callOpenHandlers(filePath);
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
            key: "selectDragEntryItem",
            value: function selectDragEntryItem(dragEntryItem) {
                var path = dragEntryItem.getPath();
                var selected = dragEntryItem.isSelected();
                if (selected) {
                    dragEntryItem.deselect();
                } else {
                    this.deselectAllPaths();
                    this.selectPath(path);
                }
                selected = !selected; ///
                this.callSelectHandlers(path, selected);
            }
        },
        {
            key: "renameDragEntryItem",
            value: function renameDragEntryItem(dragEntryItem, done) {
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.renameDragEntryItems(pathMaps, explorer, function() {
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
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callRemoveHandlersAsync(pathMaps, function() {
                    pathMaps.forEach(function(pathMap) {
                        return _this.removeDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "renameDragEntryItems",
            value: function renameDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callRenameHandlersAsync(pathMaps, function() {
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
Object.assign(Explorer.prototype, _explorer.default);
var _default = (0, _easyWithStyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IERFTEVURV9LRVlfQ09ERSwgQkFDS1NQQUNFX0tFWV9DT0RFIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0sIHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZDtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKChrZXlDb2RlID09PSBERUxFVEVfS0VZX0NPREUpIHx8IChrZXlDb2RlID09PSBCQUNLU1BBQ0VfS0VZX0NPREUpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgICAgICBkcmFnRW50cnlJdGVtRWRpdGVkID0gZHJhZ0VudHJ5SXRlbS5pc0VkaXRlZCgpO1xuXG4gICAgICAgIGlmIChkcmFnRW50cnlJdGVtRWRpdGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVkaXRTZWxlY3RlZFBhdGgoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmVkaXQoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBwYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kZXNlbGVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUGF0aHMoKTtcblxuICAgICAgdGhpcy5zZWxlY3RQYXRoKHBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkID0gIXNlbGVjdGVkOyAvLy9cblxuICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkKTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW5hbWVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpKTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpKTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgICB0aGlzLnJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gIH1cblxuICByZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBhZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMuYWRkRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5hZGRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgYWRkRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7IC8vL1xuXG4gICAgdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICBhZGREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSBwYXRoTWFwO1xuXG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHRhcmdldEVudHJ5UGF0aDsgIC8vL1xuXG4gICAgdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9uU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vZmZTZWxlY3Qoc2VsZWN0SGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpcztcblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyA9IHRoaXMucmV0cmlldmVGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeVBhdGhzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBleHBsb3Jlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsiRXhwbG9yZXIiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImFkZE1hcmtlciIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJrZXlDb2RlIiwiREVMRVRFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRWRpdGVkIiwiaXNFZGl0ZWQiLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsImV4cGxvcmVyIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwcmV2ZW50RGVmYXVsdCIsImlzTW91bnRlZCIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJpc0RpcmVjdG9yeUVtcHR5IiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJpc0VtcHR5IiwiZGlyZWN0b3J5RW1wdHkiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJlZGl0U2VsZWN0ZWRQYXRoIiwiZWRpdCIsInNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJkZXNlbGVjdCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwiY2FsbFNlbGVjdEhhbmRsZXJzIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJyZW5hbWVEcmFnRW50cnlJdGVtcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsImZvckVhY2giLCJwYXRoTWFwIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsImNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImFkZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRmlsZVBhdGgiLCJjb2xsYXBzZWQiLCJhZGREaXJlY3RvcnlQYXRoIiwiZGlkTW91bnQiLCJvbk1vdmUiLCJvbk9wZW4iLCJvblNlbGVjdCIsIm1vdmVIYW5kbGVyIiwib3BlbkhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwib2ZmTW92ZSIsIm9mZk9wZW4iLCJvZmZTZWxlY3QiLCJjaGlsZEVsZW1lbnRzIiwidG9wbW9zdCIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImZyb21DbGFzcyIsIkNsYXNzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3ZUE7OztlQUFBOzs7a0VBdGVzQjtvQkFFRTsrQkFDRzs0REFFSDt5REFD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