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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easydraganddrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _entries = /*#__PURE__*/ _interop_require_default(require("./list/entries"));
var _drag = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag"));
var _explorer = /*#__PURE__*/ _interop_require_default(require("./mixins/explorer"));
var _dragEntryItem = /*#__PURE__*/ _interop_require_default(require("./mixins/dragEntryItem"));
var _fileName = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/directoryName"));
var _constants = require("./constants");
var _styles = require("./styles");
var _entryTypes = require("./entryTypes");
var _pathMap = require("./utilities/pathMap");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
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
function _object_spread_props(target, source) {
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  \n  padding: ",
        "; \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
    var _super = _create_super(Explorer);
    function Explorer() {
        _class_call_check(this, Explorer);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "dragOverHandler", function(dragElement, element) {
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
            markerEntryItemExplorer = _assert_this_initialized(_this); ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
        _define_property(_assert_this_initialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
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
        return _this;
    }
    _create_class(Explorer, [
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
            value: function getFileNameDragEntryItem(readOnly) {
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
            value: function getDirectoryNameDragEntryItem(readOnly, topmost) {
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
                    var selectedDragEntryItemDirectoryNameDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();
                    if (selectedDragEntryItemDirectoryNameDragEntryItem) {
                        var directoryNameDragEntryItem = selectedDragEntryItem, directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();
                        path = concatenatePaths(directoryNameDragEntryItemPath, name);
                        selectedDragEntryItem.expand();
                    } else {
                        var fileNameDragEntryItem = selectedDragEntryItem, fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), fileNameDragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(fileNameDragEntryItemPath);
                        path = concatenatePaths(fileNameDragEntryItemPathWithoutBottommostName, name);
                    }
                }
                return path;
            }
        },
        {
            key: "createFilePath",
            value: function createFilePath() {
                var path = this.createPath(), filePath = path, fileNameDragEntryItem = this.addFilePath(filePath);
                fileNameDragEntryItem.create();
            }
        },
        {
            key: "createDirectoryPath",
            value: function createDirectoryPath() {
                var path = this.createPath(), readOnly = false, collapsed = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, readOnly, collapsed);
                directoryNameDragEntryItem.create();
            }
        },
        {
            key: "renameSelectedPath",
            value: function renameSelectedPath() {
                var selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    selectedDragEntryItem.rename();
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
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(fileNameDragEntryItem) {
                var disabled = this.isDisabled();
                if (disabled) {
                    return;
                }
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath, explorer = fileNameDragEntryItem.getExplorer();
                this.callOpenHandlers(filePath, explorer);
            }
        },
        {
            key: "selectOrDeselectDragEntryItem",
            value: function selectOrDeselectDragEntryItem(dragEntryItem) {
                var disabled = this.isDisabled();
                if (disabled) {
                    return;
                }
                var selected = dragEntryItem.isSelected();
                var path = dragEntryItem.getPath();
                if (selected) {
                    dragEntryItem.deselect();
                } else {
                    this.deselectAllPaths();
                    this.selectPath(path);
                }
                selected = !selected; ///
                var readOnly = dragEntryItem.isReadOnly(), explorer = dragEntryItem.getExplorer();
                this.callSelectHandlers(path, selected, readOnly, explorer);
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
                    _this.removeMarker();
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
            key: "enable",
            value: function enable() {
                var disabled = false;
                this.setDisabled(disabled);
                this.enableDrag();
            }
        },
        {
            key: "disable",
            value: function disable() {
                var disabled = true;
                this.setDisabled(disabled);
                this.disableDrag();
            }
        },
        {
            key: "enableDrag",
            value: function enableDrag() {
                var dragEntryItems = this.retrieveDragEntryItems();
                dragEntryItems.forEach(function(dragEntryItem) {
                    dragEntryItem.enableDrag();
                });
            }
        },
        {
            key: "disableDrag",
            value: function disableDrag() {
                var dragEntryItems = this.retrieveDragEntryItems();
                dragEntryItems.forEach(function(dragEntryItem) {
                    dragEntryItem.disableDrag();
                });
            }
        },
        {
            key: "isDisabled",
            value: function isDisabled() {
                var disabled = this.getState().disabled;
                return disabled;
            }
        },
        {
            key: "setDisabled",
            value: function setDisabled(disabled) {
                this.updateState({
                    disabled: disabled
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var disabled = false;
                this.setState({
                    disabled: disabled
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
                this.mounted = true;
                this.enableDrop();
                this.onDragOver(this.dragOverHandler);
                this.onDrop(this.dropHandler);
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
                this.offDragOver(this.dragOverHandler);
                this.offDrop(this.dropHandler);
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
                var context = this.getContext(), collapse = this.collapse.bind(this), getSelectedPath = this.getSelectedPath.bind(this), retrieveFilePaths = this.retrieveFilePaths.bind(this), retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this);
                return _object_spread_props(_object_spread({}, context), {
                    collapse: collapse,
                    getSelectedPath: getSelectedPath,
                    retrieveFilePaths: retrieveFilePaths,
                    retrieveDirectoryPaths: retrieveDirectoryPaths
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return Explorer;
}(_wrap_native_super(_easy.Element));
_define_property(Explorer, "EntriesList", _entries.default);
_define_property(Explorer, "FileNameDragEntryItem", _fileName.default);
_define_property(Explorer, "FileNameMarkerEntryItem", _fileName1.default);
_define_property(Explorer, "DirectoryNameDragEntryItem", _directoryName.default);
_define_property(Explorer, "DirectoryNameMarkerEntryItem", _directoryName1.default);
_define_property(Explorer, "tagName", "div");
_define_property(Explorer, "ignoredProperties", [
    "onMove",
    "onOpen",
    "onSelect",
    "reference",
    "ignoredReferences"
]);
_define_property(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easydraganddrop.dropMixins);
Object.assign(Explorer.prototype, _explorer.default);
Object.assign(Explorer.prototype, _dragEntryItem.default);
var _default = (0, _easywithstyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IERyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgZXhwbG9yZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V4cGxvcmVyXCI7XG5pbXBvcnQgZHJhZ0VudHJ5SXRlbU1peGlucyBmcm9tIFwiLi9taXhpbnMvZHJhZ0VudHJ5SXRlbVwiO1xuaW1wb3J0IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IFBFUklPRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtLCB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzLCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyYWdPdmVySGFuZGxlciA9IChkcmFnRWxlbWVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IHRoaXMuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW1OYW1lOy8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5KSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5LCB0b3Btb3N0KSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG5cbiAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmV4cGFuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlRGlyZWN0b3J5UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGgoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLnJlbmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoLCBleHBsb3Jlcik7XG4gIH1cblxuICBzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGxQYXRocygpO1xuXG4gICAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWQgPSAhc2VsZWN0ZWQ7IC8vL1xuXG4gICAgY29uc3QgcmVhZE9ubHkgPSBkcmFnRW50cnlJdGVtLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLnJlbmFtZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBlbmFibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmVuYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRpc2FibGVEcmFnKCk7XG4gICAgfSk7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG5cbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9mZlNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0U2VsZWN0ZWRQYXRoID0gdGhpcy5nZXRTZWxlY3RlZFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyA9IHRoaXMucmV0cmlldmVGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeVBhdGhzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGdldFNlbGVjdGVkUGF0aCxcbiAgICAgIHJldHJpZXZlRmlsZVBhdGhzLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRoc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiLCJkcm9wSGFuZGxlciIsImFib3J0ZWQiLCJkb25lIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJleHBsb3JlciIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImZvckVhY2giLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJleHBhbmQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImNyZWF0ZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsImNyZWF0ZSIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aCIsInJlbmFtZSIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiY2FsbE9wZW5IYW5kbGVycyIsInNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtIiwic2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwiZGVzZWxlY3QiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsImlzUmVhZE9ubHkiLCJjYWxsU2VsZWN0SGFuZGxlcnMiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwicmVuYW1lRHJhZ0VudHJ5SXRlbXMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjYWxsUmVuYW1lSGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJjYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyIsImVuYWJsZSIsInNldERpc2FibGVkIiwiZW5hYmxlRHJhZyIsImRpc2FibGUiLCJkaXNhYmxlRHJhZyIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwib25Nb3ZlIiwib25PcGVuIiwib25TZWxlY3QiLCJtb3ZlSGFuZGxlciIsIm9wZW5IYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsIm1vdW50ZWQiLCJlbmFibGVEcm9wIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcmFnT3ZlciIsIm9mZkRyb3AiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJkcmFnRW50cnlJdGVtTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnaUJBOzs7ZUFBQTs7O29FQTloQnNCO29CQUVFOytCQUNHO3lCQUNHOzhEQUVOOzJEQUNFOytEQUNDO29FQUNLOytEQUNFO2dFQUNFO29FQUNHO3FFQUNFO3lC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