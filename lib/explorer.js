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
var _path = require("./utilities/path");
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
var last = _necessary.arrayUtilities.last, concatenatePaths = _necessary.pathUtilities.concatenatePaths, DELETE_KEY_CODE = _necessary.keyCodes.DELETE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE;
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
    var _super = _create_super(Explorer);
    function Explorer(selector, mounted) {
        _class_call_check(this, Explorer);
        var _this;
        _this = _super.call(this, selector);
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
        _define_property(_assert_this_initialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            if (keyCode === DELETE_KEY_CODE || keyCode === BACKSPACE_KEY_CODE) {
                var selectedDragEntryItem = _this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    var dragEntryItem = selectedDragEntryItem, dragEntryItemEditable = dragEntryItem.isEditable();
                    if (dragEntryItemEditable) {
                        return;
                    }
                    var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = _assert_this_initialized(_this); ///
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
    _create_class(Explorer, [
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
                var path = this.createPath(), filePath = path, callHandlers = false, fileNameDragEntryItem = this.addFilePath(filePath);
                this.deselectDragEntryItem(fileNameDragEntryItem);
                this.selectDragEntryItem(fileNameDragEntryItem, callHandlers);
                this.createSelectedPath();
            }
        },
        {
            key: "createDirectoryPath",
            value: function createDirectoryPath() {
                var path = this.createPath(), collapsed = false, callHandlers = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, collapsed);
                this.deselectDragEntryItem(directoryNameDragEntryItem);
                this.selectDragEntryItem(directoryNameDragEntryItem, callHandlers);
                this.createSelectedPath();
            }
        },
        {
            key: "createSelectedPath",
            value: function createSelectedPath() {
                var selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    selectedDragEntryItem.create();
                }
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
                    if (path !== null) {
                        _this.selectPath(path);
                    }
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
                this.onDragOver(this.dragOverHandler);
                this.onDrop(this.dropHandler);
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
                this.offDragOver(this.dragOverHandler);
                this.offDrop(this.dropHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsga2V5Q29kZXMsIHBhdGhVdGlsaXRpZXMsIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBkcmFnRW50cnlJdGVtTWl4aW5zIGZyb20gXCIuL21peGlucy9kcmFnRW50cnlJdGVtXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgUEVSSU9EIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IERFTEVURV9LRVlfQ09ERSwgQkFDS1NQQUNFX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmICgoa2V5Q29kZSA9PT0gREVMRVRFX0tFWV9DT0RFKSB8fCAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFX0tFWV9DT0RFKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbUVkaXRhYmxlID0gZHJhZ0VudHJ5SXRlbS5pc0VkaXRhYmxlKCk7XG5cbiAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1FZGl0YWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCksXG4gICAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5OyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoLCBleHBsb3Jlcik7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZmlsZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZURyYWdFbnRyeUl0ZW1QYXRoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhmaWxlRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGNhbGxIYW5kbGVycyA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgdGhpcy5kZXNlbGVjdERyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcblxuICAgIHRoaXMuc2VsZWN0RHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0sIGNhbGxIYW5kbGVycyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlRGlyZWN0b3J5UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgY29sbGFwc2VkID0gZmFsc2UsXG4gICAgICAgICAgY2FsbEhhbmRsZXJzID0gZmFsc2UsXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuXG4gICAgdGhpcy5kZXNlbGVjdERyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgdGhpcy5zZWxlY3REcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMpO1xuXG4gICAgdGhpcy5jcmVhdGVTZWxlY3RlZFBhdGgoKTtcbiAgfVxuXG4gIGNyZWF0ZVNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZWRpdFNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZWRpdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMgPSB0cnVlKSB7XG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG5cbiAgICBpZiAoY2FsbEhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRydWUsXG4gICAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICBkZXNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhdGggPSBudWxsO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7ICAvLy9cblxuICAgIGlmIChjYWxsSGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZmFsc2UsXG4gICAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMucmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RQYXRoTWFwID0gbGFzdChwYXRoTWFwcyksXG4gICAgICAgICAgICB7IHRhcmdldEVudHJ5UGF0aCB9ID0gbGFzdFBhdGhNYXAsXG4gICAgICAgICAgICBwYXRoID0gdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVuYW1lSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub2ZmU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFBhdGggPSB0aGlzLmdldFNlbGVjdGVkUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICB7IHNlbGVjdFBhdGgsXG4gICAgICAgICAgICBjcmVhdGVGaWxlUGF0aCxcbiAgICAgICAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICAgICAgICBlZGl0U2VsZWN0ZWRQYXRoLFxuICAgICAgICAgICAgY2FsbFNlbGVjdEhhbmRsZXJzLFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dDtcblxuICAgIHJldHVybiAoe1xuICAgICAgY29sbGFwc2UsXG4gICAgICBnZXRTZWxlY3RlZFBhdGgsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMsXG4gICAgICBzZWxlY3RQYXRoLFxuICAgICAgY3JlYXRlRmlsZVBhdGgsXG4gICAgICBkZXNlbGVjdEFsbFBhdGhzLFxuICAgICAgZWRpdFNlbGVjdGVkUGF0aCxcbiAgICAgIGNhbGxTZWxlY3RIYW5kbGVycyxcbiAgICAgIGNyZWF0ZURpcmVjdG9yeVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBleHBsb3Jlck1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJhZ0VudHJ5SXRlbU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJERUxFVEVfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkV4cGxvcmVyIiwic2VsZWN0b3IiLCJtb3VudGVkIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJlbGVtZW50IiwiZG9uZSIsImRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSIsIkRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcmFnRW50cnlJdGVtIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJhZGRNYXJrZXIiLCJrZXlEb3duSGFuZGxlciIsImV2ZW50Iiwia2V5Q29kZSIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbUVkaXRhYmxlIiwiaXNFZGl0YWJsZSIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiZXhwbG9yZXIiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsInByZXZlbnREZWZhdWx0IiwiaXNNb3VudGVkIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlzRGlyZWN0b3J5RW1wdHkiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsImlzRW1wdHkiLCJkaXJlY3RvcnlFbXB0eSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVQYXRocyIsInR5cGUiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRocyIsInJlZHVjZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsImNvbGxhcHNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiY3JlYXRlUGF0aCIsIm5hbWUiLCJQRVJJT0QiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVEcmFnRW50cnlJdGVtIiwiZmlsZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwibm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsImNyZWF0ZUZpbGVQYXRoIiwiY2FsbEhhbmRsZXJzIiwiYWRkRmlsZVBhdGgiLCJkZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwiY3JlYXRlU2VsZWN0ZWRQYXRoIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJjcmVhdGUiLCJlZGl0U2VsZWN0ZWRQYXRoIiwiZWRpdCIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsInNlbGVjdGVkIiwiY2FsbFNlbGVjdEhhbmRsZXJzIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJyZW5hbWVEcmFnRW50cnlJdGVtcyIsImNyZWF0ZURyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsImxhc3RQYXRoTWFwIiwiY2FsbE1vdmVIYW5kbGVyc0FzeW5jIiwicGF0aE1hcCIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJhZGREcmFnRW50cnlJdGVtIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJjYWxsUmVuYW1lSGFuZGxlcnNBc3luYyIsImNhbGxDcmVhdGVIYW5kbGVyc0FzeW5jIiwiZGlkTW91bnQiLCJvbk1vdmUiLCJvbk9wZW4iLCJvblNlbGVjdCIsIm1vdmVIYW5kbGVyIiwib3BlbkhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwiZW5hYmxlRHJvcCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJhZ092ZXIiLCJvZmZEcm9wIiwib2ZmTW92ZSIsIm9mZk9wZW4iLCJvZmZTZWxlY3QiLCJjaGlsZEVsZW1lbnRzIiwidG9wbW9zdCIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImZyb21DbGFzcyIsIkNsYXNzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSIsImV4cGxvcmVyUGFkZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbWtCQTs7O2VBQUE7OztvRUFqa0JzQjtvQkFFRTsrQkFDRzt5QkFDNkI7OERBRWhDOzJEQUNFOytEQUNDO29FQUNLOytEQUNFO2dFQUNFO29FQUNHO3FFQUNFO3lCQUVsQjtzQkFDUztvQkFDeUI7MEJBQ2lCO3VCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDQUUsa0JBQXdDQyxtQkFBUSxDQUFoREQsaUJBQWlCRSxxQkFBdUJELG1CQUFRLENBQS9CQztBQUV6QixJQUFBLEFBQU1DLHlCQW9pQkgsQUFwaUJIO2NBQU1BOytCQUFBQTthQUFBQSxTQUNRQyxRQUFRLEVBQUVDLE9BQU87Z0NBRHpCRjs7a0NBRUlDO1FBU1JFLGtEQUFBQSxlQUFjLFNBQUNDLGFBQWFDLFNBQVNDLFNBQVNDLE1BQVM7WUFDckQsSUFBTUMsMkJBQTRCSixBQUFXLFlBQVhBLGFBQXVCSyxhQUFhO1lBRXRFLElBQUksQ0FBQ0QsMEJBQTBCO2dCQUM3QkQ7Z0JBRUE7WUFDRixDQUFDO1lBRUQsSUFBTUcsa0JBQWtCLE1BQUtDLHVCQUF1QixJQUM5Q0MsMEJBQTBCRixnQkFBZ0JHLFdBQVc7WUFFM0QsSUFBSVIsU0FBUztnQkFDWE8sd0JBQXdCRSxZQUFZO2dCQUVwQ1A7Z0JBRUE7WUFDRixDQUFDO1lBRUQsSUFBTVEsZ0JBQWdCWCxhQUFjLEdB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