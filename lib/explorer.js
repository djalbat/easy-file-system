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
var _easydraganddrop = require("easy-drag-and-drop");
var _easy = require("easy");
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
        _define_property(_assert_this_initialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            if (keyCode === DELETE_KEY_CODE || keyCode === BACKSPACE_KEY_CODE) {
                var selectedDragEntryItem = _this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem !== null) {
                    var dragEntryItem = selectedDragEntryItem, dragEntryItemReadOnly = dragEntryItem.isReadOnly(), dragEntryItemEditable = dragEntryItem.isEditable();
                    if (dragEntryItemReadOnly || dragEntryItemEditable) {
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
                var path = null;
                var name = _constants.PERIOD, selectedDragEntryItem = this.retrieveSelectedDragEntryItem();
                if (selectedDragEntryItem === null) {
                    path = name; ///
                } else {
                    var selectedDragEntryItemDirectoryNameDragEntryItem = selectedDragEntryItem.isDirectoryNameDragEntryItem();
                    if (selectedDragEntryItemDirectoryNameDragEntryItem) {
                        var directoryNameDragEntryItem = selectedDragEntryItem, directoryNameDragEntryItemReadOnly = directoryNameDragEntryItem.isReadOnly(), directoryNameDragEntryItemEditable = directoryNameDragEntryItem.isEditable();
                        if (!directoryNameDragEntryItemReadOnly && !directoryNameDragEntryItemEditable) {
                            var directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();
                            path = concatenatePaths(directoryNameDragEntryItemPath, name);
                        }
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
                var filePath = path, callHandlers = false, fileNameDragEntryItem = this.addFilePath(filePath);
                this.deselectDragEntryItem(fileNameDragEntryItem);
                this.selectDragEntryItem(fileNameDragEntryItem, callHandlers);
                this.createSelectedPath();
            }
        },
        {
            key: "createDirectoryPath",
            value: function createDirectoryPath() {
                var path = this.createPath();
                if (path === null) {
                    return;
                }
                var readOnly = false, collapsed = false, callHandlers = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, readOnly, collapsed);
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
                    var selectedDragEntryItemReadOnly = selectedDragEntryItem.isReadOnly();
                    if (!selectedDragEntryItemReadOnly) {
                        selectedDragEntryItem.edit();
                    }
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
                _easy.window.onKeyDown(this.keyDownHandler);
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
                _easy.window.onKeyDown(this.keyDownHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBrZXlDb2RlcywgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBQRVJJT0QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IERFTEVURV9LRVlfQ09ERSwgQkFDS1NQQUNFX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmICgoa2V5Q29kZSA9PT0gREVMRVRFX0tFWV9DT0RFKSB8fCAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFX0tFWV9DT0RFKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbVJlYWRPbmx5ID0gZHJhZ0VudHJ5SXRlbS5pc1JlYWRPbmx5KCksXG4gICAgICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FZGl0YWJsZSA9IGRyYWdFbnRyeUl0ZW0uaXNFZGl0YWJsZSgpO1xuXG4gICAgICAgIGlmIChkcmFnRW50cnlJdGVtUmVhZE9ubHkgfHwgZHJhZ0VudHJ5SXRlbUVkaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCksXG4gICAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5OyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5KSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5LCB0b3Btb3N0KSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgICAgZXhwbG9yZXIgPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jb2xsYXBzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUGF0aCgpIHtcbiAgICBsZXQgcGF0aCA9IG51bGw7XG5cbiAgICBjb25zdCBuYW1lID0gUEVSSU9ELCAgLy8vXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgcGF0aCA9IG5hbWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVJlYWRPbmx5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNSZWFkT25seSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVkaXRhYmxlID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFZGl0YWJsZSgpO1xuXG4gICAgICAgIGlmICghZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1SZWFkT25seSAmJiAhZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FZGl0YWJsZSkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKTtcblxuICAgIGlmIChwYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgY2FsbEhhbmRsZXJzID0gZmFsc2UsXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICB0aGlzLmRlc2VsZWN0RHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgdGhpcy5zZWxlY3REcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzKTtcblxuICAgIHRoaXMuY3JlYXRlU2VsZWN0ZWRQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKTtcblxuICAgIGlmIChwYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZE9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgICAgICBjYWxsSGFuZGxlcnMgPSBmYWxzZSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgdGhpcy5kZXNlbGVjdERyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgdGhpcy5zZWxlY3REcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMpO1xuXG4gICAgdGhpcy5jcmVhdGVTZWxlY3RlZFBhdGgoKTtcbiAgfVxuXG4gIGNyZWF0ZVNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZWRpdFNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1SZWFkT25seSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5pc1JlYWRPbmx5KCk7XG5cbiAgICAgIGlmICghc2VsZWN0ZWREcmFnRW50cnlJdGVtUmVhZE9ubHkpIHtcbiAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmVkaXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFBhdGgoKSB7XG4gICAgbGV0IHNlbGVjdGVkUGF0aCA9IG51bGw7XG5cbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgc2VsZWN0ZWRQYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkUGF0aDtcbiAgfVxuXG4gIHNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgIHRoaXMuZGVzZWxlY3RBbGxQYXRocygpO1xuXG4gICAgdGhpcy5zZWxlY3RQYXRoKHBhdGgpO1xuXG4gICAgaWYgKGNhbGxIYW5kbGVycykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkLCBleHBsb3Jlcik7XG4gICAgfVxuICB9XG5cbiAgZGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGNhbGxIYW5kbGVycyA9IHRydWUpIHtcbiAgICBjb25zdCBwYXRoID0gbnVsbDtcblxuICAgIHRoaXMuZGVzZWxlY3RBbGxQYXRocygpOyAgLy8vXG5cbiAgICBpZiAoY2FsbEhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkLCBleHBsb3Jlcik7XG4gICAgfVxuICB9XG5cbiAgZWRpdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5lZGl0RHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxhc3RQYXRoTWFwID0gbGFzdChwYXRoTWFwcyksXG4gICAgICAgICAgICB7IHRhcmdldEVudHJ5UGF0aCB9ID0gbGFzdFBhdGhNYXAsXG4gICAgICAgICAgICBwYXRoID0gdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVkaXREcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxFZGl0SGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxDcmVhdGVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlcik7XG5cbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9uT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub25TZWxlY3Qoc2VsZWN0SGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub2ZmU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFBhdGggPSB0aGlzLmdldFNlbGVjdGVkUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICB7IHNlbGVjdFBhdGgsXG4gICAgICAgICAgICBjcmVhdGVGaWxlUGF0aCxcbiAgICAgICAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICAgICAgICBlZGl0U2VsZWN0ZWRQYXRoLFxuICAgICAgICAgICAgY2FsbFNlbGVjdEhhbmRsZXJzLFxuICAgICAgICAgICAgY3JlYXRlRGlyZWN0b3J5UGF0aCB9ID0gY29udGV4dDtcblxuICAgIHJldHVybiAoe1xuICAgICAgY29sbGFwc2UsXG4gICAgICBnZXRTZWxlY3RlZFBhdGgsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMsXG4gICAgICBzZWxlY3RQYXRoLFxuICAgICAgY3JlYXRlRmlsZVBhdGgsXG4gICAgICBkZXNlbGVjdEFsbFBhdGhzLFxuICAgICAgZWRpdFNlbGVjdGVkUGF0aCxcbiAgICAgIGNhbGxTZWxlY3RIYW5kbGVycyxcbiAgICAgIGNyZWF0ZURpcmVjdG9yeVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsIkRFTEVURV9LRVlfQ09ERSIsImtleUNvZGVzIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiRXhwbG9yZXIiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImVsZW1lbnQiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJrZXlDb2RlIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtUmVhZE9ubHkiLCJpc1JlYWRPbmx5IiwiZHJhZ0VudHJ5SXRlbUVkaXRhYmxlIiwiaXNFZGl0YWJsZSIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiZXhwbG9yZXIiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsInByZXZlbnREZWZhdWx0IiwiZHJvcEhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlzRGlyZWN0b3J5RW1wdHkiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsImlzRW1wdHkiLCJkaXJlY3RvcnlFbXB0eSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZWFkT25seSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInRvcG1vc3QiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVQYXRocyIsInR5cGUiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRocyIsInJlZHVjZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsImNvbGxhcHNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiY3JlYXRlUGF0aCIsIm5hbWUiLCJQRVJJT0QiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVJlYWRPbmx5IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FZGl0YWJsZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImNyZWF0ZUZpbGVQYXRoIiwiY2FsbEhhbmRsZXJzIiwiYWRkRmlsZVBhdGgiLCJkZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwiY3JlYXRlU2VsZWN0ZWRQYXRoIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJjcmVhdGUiLCJlZGl0U2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtUmVhZE9ubHkiLCJlZGl0IiwiZ2V0U2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwic2VsZWN0ZWQiLCJjYWxsU2VsZWN0SGFuZGxlcnMiLCJlZGl0RHJhZ0VudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJlZGl0RHJhZ0VudHJ5SXRlbXMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJsYXN0UGF0aE1hcCIsImNhbGxFZGl0SGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsImNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jIiwiY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJtb3VudGVkIiwiZW5hYmxlRHJvcCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJhZ092ZXIiLCJvZmZEcm9wIiwib2ZmTW92ZSIsIm9mZk9wZW4iLCJvZmZTZWxlY3QiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSIs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