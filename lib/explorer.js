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
                var path = this.createPath(), readOnly = false, collapsed = false, callHandlers = false, directoryPath = path, directoryNameDragEntryItem = this.addDirectoryPath(directoryPath, readOnly, collapsed);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBrZXlDb2RlcywgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBQRVJJT0QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtLCB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgREVMRVRFX0tFWV9DT0RFLCBCQUNLU1BBQ0VfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZDtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKChrZXlDb2RlID09PSBERUxFVEVfS0VZX0NPREUpIHx8IChrZXlDb2RlID09PSBCQUNLU1BBQ0VfS0VZX0NPREUpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgICAgICBkcmFnRW50cnlJdGVtUmVhZE9ubHkgPSBkcmFnRW50cnlJdGVtLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbUVkaXRhYmxlID0gZHJhZ0VudHJ5SXRlbS5pc0VkaXRhYmxlKCk7XG5cbiAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1SZWFkT25seSB8fCBkcmFnRW50cnlJdGVtRWRpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuICAgICAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEVudHJpZXNMaXN0KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0xpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0xpc3Q7XG5cdH1cblxuICBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpLFxuICAgICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICAgIGV4cGxvcmVyID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY29sbGFwc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVBhdGgoKSB7XG4gICAgbGV0IHBhdGg7XG5cbiAgICBjb25zdCBuYW1lID0gUEVSSU9ELCAgLy8vXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgcGF0aCA9IG5hbWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5RHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgICAgICBmaWxlRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksICAvLy9cbiAgICAgICAgICAgICAgZmlsZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChmaWxlRHJhZ0VudHJ5SXRlbVBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGZpbGVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgY2FsbEhhbmRsZXJzID0gZmFsc2UsXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICB0aGlzLmRlc2VsZWN0RHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG4gICAgdGhpcy5zZWxlY3REcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzKTtcblxuICAgIHRoaXMuY3JlYXRlU2VsZWN0ZWRQYXRoKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKSxcbiAgICAgICAgICByZWFkT25seSA9IGZhbHNlLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IGZhbHNlLFxuICAgICAgICAgIGNhbGxIYW5kbGVycyA9IGZhbHNlLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICB0aGlzLmRlc2VsZWN0RHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICB0aGlzLnNlbGVjdERyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0sIGNhbGxIYW5kbGVycyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNlbGVjdGVkUGF0aCgpO1xuICB9XG5cbiAgY3JlYXRlU2VsZWN0ZWRQYXRoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5jcmVhdGUoKTtcbiAgICB9XG4gIH1cblxuICBlZGl0U2VsZWN0ZWRQYXRoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVJlYWRPbmx5ID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmlzUmVhZE9ubHkoKTtcblxuICAgICAgaWYgKCFzZWxlY3RlZERyYWdFbnRyeUl0ZW1SZWFkT25seSkge1xuICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZWRpdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBjYWxsSGFuZGxlcnMgPSB0cnVlKSB7XG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG5cbiAgICBpZiAoY2FsbEhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRydWUsXG4gICAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICBkZXNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgY2FsbEhhbmRsZXJzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhdGggPSBudWxsO1xuXG4gICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7ICAvLy9cblxuICAgIGlmIChjYWxsSGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZmFsc2UsXG4gICAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgdGhpcy5jYWxsU2VsZWN0SGFuZGxlcnMocGF0aCwgc2VsZWN0ZWQsIGV4cGxvcmVyKTtcbiAgICB9XG4gIH1cblxuICBlZGl0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmVkaXREcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5jcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgY29uc3QgbGFzdFBhdGhNYXAgPSBsYXN0KHBhdGhNYXBzKSxcbiAgICAgICAgICAgIHsgdGFyZ2V0RW50cnlQYXRoIH0gPSBsYXN0UGF0aE1hcCxcbiAgICAgICAgICAgIHBhdGggPSB0YXJnZXRFbnRyeVBhdGg7XG5cbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0UGF0aChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZWRpdERyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbEVkaXRIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vZmZTZWxlY3Qoc2VsZWN0SGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldFNlbGVjdGVkUGF0aCA9IHRoaXMuZ2V0U2VsZWN0ZWRQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHsgc2VsZWN0UGF0aCxcbiAgICAgICAgICAgIGNyZWF0ZUZpbGVQYXRoLFxuICAgICAgICAgICAgZGVzZWxlY3RBbGxQYXRocyxcbiAgICAgICAgICAgIGVkaXRTZWxlY3RlZFBhdGgsXG4gICAgICAgICAgICBjYWxsU2VsZWN0SGFuZGxlcnMsXG4gICAgICAgICAgICBjcmVhdGVEaXJlY3RvcnlQYXRoIH0gPSBjb250ZXh0O1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGdldFNlbGVjdGVkUGF0aCxcbiAgICAgIHJldHJpZXZlRmlsZVBhdGhzLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyxcbiAgICAgIHNlbGVjdFBhdGgsXG4gICAgICBjcmVhdGVGaWxlUGF0aCxcbiAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICBlZGl0U2VsZWN0ZWRQYXRoLFxuICAgICAgY2FsbFNlbGVjdEhhbmRsZXJzLFxuICAgICAgY3JlYXRlRGlyZWN0b3J5UGF0aFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIixcbiAgICBcIm9uT3BlblwiLFxuICAgIFwib25TZWxlY3RcIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsIkRFTEVURV9LRVlfQ09ERSIsImtleUNvZGVzIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiRXhwbG9yZXIiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImFkZE1hcmtlciIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJrZXlDb2RlIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtUmVhZE9ubHkiLCJpc1JlYWRPbmx5IiwiZHJhZ0VudHJ5SXRlbUVkaXRhYmxlIiwiaXNFZGl0YWJsZSIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiZXhwbG9yZXIiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsInByZXZlbnREZWZhdWx0IiwiaXNNb3VudGVkIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlzRGlyZWN0b3J5RW1wdHkiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsImlzRW1wdHkiLCJkaXJlY3RvcnlFbXB0eSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZWFkT25seSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInRvcG1vc3QiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVQYXRocyIsInR5cGUiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRocyIsInJlZHVjZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsImNvbGxhcHNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiY3JlYXRlUGF0aCIsIm5hbWUiLCJQRVJJT0QiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVEcmFnRW50cnlJdGVtIiwiZmlsZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwibm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsImNyZWF0ZUZpbGVQYXRoIiwiY2FsbEhhbmRsZXJzIiwiYWRkRmlsZVBhdGgiLCJkZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwiY3JlYXRlU2VsZWN0ZWRQYXRoIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJjcmVhdGUiLCJlZGl0U2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtUmVhZE9ubHkiLCJlZGl0IiwiZ2V0U2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwic2VsZWN0ZWQiLCJjYWxsU2VsZWN0SGFuZGxlcnMiLCJlZGl0RHJhZ0VudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJlZGl0RHJhZ0VudHJ5SXRlbXMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJsYXN0UGF0aE1hcCIsImNhbGxFZGl0SGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsImNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jIiwiY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJlbmFibGVEcm9wIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcmFnT3ZlciIsIm9mZkRyb3AiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJleHBsb3Jlck1peGlucyIsImRyYWdFbnRyeUl0ZW1NaXhpbnMiLCJ3aXRoU3R5bGUiLCJleHBsb3JlclBhZGRpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlrQkE7OztlQUFBOzs7b0VBdmtCc0I7K0JBRUs7b0JBQ0s7eUJBQ3dCOzhEQUVoQzsyREFDRTsrREFDQztvRUFDSzsrREFDRTtnRUFDRTtvRUFDRztxRUFDRTt5QkFFbEI7c0JBQ1M7b0JBQ3lCOzBCQUNpQjt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLGtCQUF3Q0MsbUJBQVEsQ0FBaERELGlCQUFpQkUscUJBQXVCRCxtQkFB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