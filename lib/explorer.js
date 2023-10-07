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
var last = _necessary.arrayUtilities.last, concatenatePaths = _necessary.pathUtilities.concatenatePaths, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
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
            key: "editDragEntryItem",
            value: function editDragEntryItem(dragEntryItem, done) {
                var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
                this.editDragEntryItems(pathMaps, explorer, function() {
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
            key: "editDragEntryItems",
            value: function editDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callEditHandlersAsync(pathMaps, explorer, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBQRVJJT0QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHksIHRvcG1vc3QpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY29sbGFwc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVBhdGgoKSB7XG4gICAgbGV0IHBhdGg7XG5cbiAgICBjb25zdCBuYW1lID0gUEVSSU9ELCAgLy8vXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgcGF0aCA9IG5hbWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoLCBuYW1lKTtcblxuICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKSxcbiAgICAgICAgICByZWFkT25seSA9IGZhbHNlLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IGZhbHNlLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jcmVhdGUoKTtcbiAgfVxuXG4gIGVkaXRTZWxlY3RlZFBhdGgoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmVkaXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFBhdGgoKSB7XG4gICAgbGV0IHNlbGVjdGVkUGF0aCA9IG51bGw7XG5cbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgc2VsZWN0ZWRQYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkUGF0aDtcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgICAgZXhwbG9yZXIgPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgIGNvbnN0IHBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kZXNlbGVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUGF0aHMoKTtcblxuICAgICAgdGhpcy5zZWxlY3RQYXRoKHBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkID0gIXNlbGVjdGVkOyAvLy9cblxuICAgIGNvbnN0IHJlYWRPbmx5ID0gZHJhZ0VudHJ5SXRlbS5pc1JlYWRPbmx5KCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICB0aGlzLmNhbGxTZWxlY3RIYW5kbGVycyhwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHksIGV4cGxvcmVyKTtcbiAgfVxuXG4gIGVkaXREcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuZWRpdERyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0RHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsRWRpdEhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldERpc2FibGVkKGRpc2FibGVkKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldERpc2FibGVkKGRpc2FibGVkKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGVuYWJsZURyYWcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZW5hYmxlRHJhZygpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZURyYWcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGlzYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9uU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub2ZmU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFBhdGggPSB0aGlzLmdldFNlbGVjdGVkUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIGNvbGxhcHNlLFxuICAgICAgZ2V0U2VsZWN0ZWRQYXRoLFxuICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIixcbiAgICBcIm9uT3BlblwiLFxuICAgIFwib25TZWxlY3RcIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZXhwbG9yZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyYWdFbnRyeUl0ZW1NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwiRXhwbG9yZXIiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImVsZW1lbnQiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImRyb3BIYW5kbGVyIiwiYWJvcnRlZCIsImRvbmUiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZWFkT25seSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInRvcG1vc3QiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVQYXRocyIsInR5cGUiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRocyIsInJlZHVjZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJjb2xsYXBzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlUGF0aCIsIm5hbWUiLCJQRVJJT0QiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImV4cGFuZCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwiY3JlYXRlRmlsZVBhdGgiLCJmaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwiY3JlYXRlIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImRpcmVjdG9yeVBhdGgiLCJhZGREaXJlY3RvcnlQYXRoIiwiZWRpdFNlbGVjdGVkUGF0aCIsImVkaXQiLCJnZXRTZWxlY3RlZFBhdGgiLCJzZWxlY3RlZFBhdGgiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImNhbGxPcGVuSGFuZGxlcnMiLCJzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0IiwiZGVzZWxlY3RBbGxQYXRocyIsInNlbGVjdFBhdGgiLCJpc1JlYWRPbmx5IiwiY2FsbFNlbGVjdEhhbmRsZXJzIiwiZWRpdERyYWdFbnRyeUl0ZW0iLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInBhdGhNYXBzIiwiZ2V0UGF0aE1hcHMiLCJlZGl0RHJhZ0VudHJ5SXRlbXMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjYWxsRWRpdEhhbmRsZXJzQXN5bmMiLCJwYXRoTWFwIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJjYWxsTW92ZUhhbmRsZXJzQXN5bmMiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jIiwiY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMiLCJlbmFibGUiLCJzZXREaXNhYmxlZCIsImVuYWJsZURyYWciLCJkaXNhYmxlIiwiZGlzYWJsZURyYWciLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJtb3VudGVkIiwiZW5hYmxlRHJvcCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJhZ092ZXIiLCJvZmZEcm9wIiwib2ZmTW92ZSIsIm9mZk9wZW4iLCJvZmZTZWxlY3QiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSIsImV4cGxvcmVyUGFkZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaWlCQTs7O2VBQUE7OztvRUEvaEJzQjtvQkFFRTsrQkFDRzt5QkFD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