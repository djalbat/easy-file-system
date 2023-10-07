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
            key: "isEditing",
            value: function isEditing() {
                var dragEntryItems = this.retrieveDragEntryItems(), editing = dragEntryItems.some(function(dragEntryItem) {
                    var editing = dragEntryItem.isEditing();
                    if (editing) {
                        return true;
                    }
                });
                return editing;
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
                    var selectedDragEntryItemDirectoryNameDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();
                    if (selectedDragEntryItemDirectoryNameDragEntryItem) {
                        var directoryNameDragEntryItem = selectedDragEntryItem, directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();
                        path = concatenatePaths(directoryNameDragEntryItemPath, name);
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
                var path = this.createPath();
                if (path === null) {
                    return;
                }
                var filePath = path, fileNameDragEntryItem = this.addFilePath(filePath);
                fileNameDragEntryItem.create();
            }
        },
        {
            key: "createDirectoryPath",
            value: function createDirectoryPath() {
                var path = this.createPath();
                if (path === null) {
                    return;
                }
                var readOnly = false, collapsed = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, readOnly, collapsed);
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
            key: "selectDragEntryItem",
            value: function selectDragEntryItem(dragEntryItem) {
                var callHandlers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var path = dragEntryItem.getPath();
                this.deselectAllPaths();
                this.selectPath(path);
                if (callHandlers) {
                    var selected = true, readOnly = dragEntryItem.isReadOnly(), explorer = dragEntryItem.getExplorer();
                    this.callSelectHandlers(path, selected, readOnly, explorer);
                }
            }
        },
        {
            key: "deselectDragEntryItem",
            value: function deselectDragEntryItem(dragEntryItem) {
                var callHandlers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var path = null;
                if (callHandlers) {
                    var selected = false, readOnly = dragEntryItem.isReadOnly(), explorer = dragEntryItem.getExplorer();
                    this.callSelectHandlers(path, selected, readOnly, explorer);
                }
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
                    var lastPathMap = last(pathMaps), targetEntryPath = lastPathMap.targetEntryPath, path = targetEntryPath;
                    _this.removeMarker();
                    if (path !== null) {
                        _this.selectPath(path);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBQRVJJT0QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBpc0VkaXRpbmcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlZGl0aW5nID0gZHJhZ0VudHJ5SXRlbXMuc29tZSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdGluZyA9IGRyYWdFbnRyeUl0ZW0uaXNFZGl0aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGVkaXRpbmc7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHksIHRvcG1vc3QpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoLCBleHBsb3Jlcik7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCk7XG5cbiAgICBpZiAocGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlRGlyZWN0b3J5UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCk7XG5cbiAgICBpZiAocGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgY29sbGFwc2VkID0gZmFsc2UsXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSwgY29sbGFwc2VkKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgZWRpdFNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZWRpdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMgPSB0cnVlKSB7XG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG5cbiAgICBpZiAoY2FsbEhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRydWUsXG4gICAgICAgICAgICByZWFkT25seSA9IGRyYWdFbnRyeUl0ZW0uaXNSZWFkT25seSgpLFxuICAgICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpO1xuICAgIH1cbiAgfVxuXG4gIGRlc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMgPSB0cnVlKSB7XG4gICAgY29uc3QgcGF0aCA9IG51bGw7XG5cbiAgICBpZiAoY2FsbEhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgcmVhZE9ubHkgPSBkcmFnRW50cnlJdGVtLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgICB0aGlzLmNhbGxTZWxlY3RIYW5kbGVycyhwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHksIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICBlZGl0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmVkaXREcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5jcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgY29uc3QgbGFzdFBhdGhNYXAgPSBsYXN0KHBhdGhNYXBzKSxcbiAgICAgICAgICAgIHsgdGFyZ2V0RW50cnlQYXRoIH0gPSBsYXN0UGF0aE1hcCxcbiAgICAgICAgICAgIHBhdGggPSB0YXJnZXRFbnRyeVBhdGg7XG5cbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0UGF0aChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZWRpdERyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbEVkaXRIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9uU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub2ZmU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFBhdGggPSB0aGlzLmdldFNlbGVjdGVkUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIGNvbGxhcHNlLFxuICAgICAgZ2V0U2VsZWN0ZWRQYXRoLFxuICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cbiAgc3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uTW92ZVwiLFxuICAgIFwib25PcGVuXCIsXG4gICAgXCJvblNlbGVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBleHBsb3Jlck1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJhZ0VudHJ5SXRlbU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJFeHBsb3JlciIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbGVtZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSIsIkRyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiaXNFZGl0aW5nIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwiZWRpdGluZyIsInNvbWUiLCJleHBsb3JlciIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJjb2xsYXBzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlUGF0aCIsIm5hbWUiLCJQRVJJT0QiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJjcmVhdGVGaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwiY3JlYXRlIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImRpcmVjdG9yeVBhdGgiLCJhZGREaXJlY3RvcnlQYXRoIiwiZWRpdFNlbGVjdGVkUGF0aCIsImVkaXQiLCJnZXRTZWxlY3RlZFBhdGgiLCJzZWxlY3RlZFBhdGgiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoIiwic2VsZWN0RHJhZ0VudHJ5SXRlbSIsImNhbGxIYW5kbGVycyIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwic2VsZWN0ZWQiLCJpc1JlYWRPbmx5IiwiY2FsbFNlbGVjdEhhbmRsZXJzIiwiZGVzZWxlY3REcmFnRW50cnlJdGVtIiwiZWRpdERyYWdFbnRyeUl0ZW0iLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInBhdGhNYXBzIiwiZ2V0UGF0aE1hcHMiLCJlZGl0RHJhZ0VudHJ5SXRlbXMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJsYXN0UGF0aE1hcCIsImNhbGxFZGl0SGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJjYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyIsImRpZE1vdW50Iiwib25Nb3ZlIiwib25PcGVuIiwib25TZWxlY3QiLCJtb3ZlSGFuZGxlciIsIm9wZW5IYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsIm1vdW50ZWQiLCJlbmFibGVEcm9wIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcmFnT3ZlciIsIm9mZkRyb3AiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJkcmFnRW50cnlJdGVtTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtZ0JBOzs7ZUFBQTs7O29FQWpnQnNCO29CQUVFOytCQUNHO3lCQUNtQjs4REFFdEI7MkRBQ0U7K0RBQ0M7b0VBQ0s7K0RBQ0U7Z0VBQ0U7b0VBQ0c7cUVBQ0U7eUJBRWxCO3NCQUNTOzBCQUMwQzt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0FFLG1CQUF3REMsd0JB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