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
var _explorer = /*#__PURE__*/ _interop_require_default(require("./mixins/explorer"));
var _dragEntryItem = /*#__PURE__*/ _interop_require_default(require("./mixins/dragEntryItem"));
var _fileName = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interop_require_default(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/directoryName"));
var _styles = require("./styles");
var _constants = require("./constants");
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
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
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
            key: "getReferences",
            value: function getReferences() {
                var _this_properties = this.properties, _this_properties_references = _this_properties.references, references = _this_properties_references === void 0 ? [] : _this_properties_references;
                return references;
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
            key: "clickDragEntryItem",
            value: function clickDragEntryItem(dragEntryItem) {
                var _this = this;
                var singleClick = this.isSingleClick();
                if (singleClick) {
                    var selected = dragEntryItem.click();
                    if (selected) {
                        dragEntryItem.doubleClick();
                    }
                    return;
                }
                var clickedDragEntryItem = this.getClickedDragEntryItem();
                if (dragEntryItem !== clickedDragEntryItem) {
                    var interval = this.getInterval();
                    clearInterval(interval);
                    this.clearInterval();
                    this.clearClickedDragEntryItem();
                }
                var interval1 = this.getInterval();
                if (interval1 === null) {
                    var delay = _constants.DOUBLE_CLICK_DELAY, interval2 = setTimeout(function() {
                        _this.clearInterval();
                        _this.clearClickedDragEntryItem();
                        dragEntryItem.click();
                    }, delay), clickedDragEntryItem1 = dragEntryItem; ///
                    this.setInterval(interval2);
                    this.setClickedDragEntryItem(clickedDragEntryItem1);
                    return;
                }
                clearInterval(interval1);
                this.clearInterval();
                this.clearClickedDragEntryItem();
                dragEntryItem.doubleClick();
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
                return selected;
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
            key: "renameDragEntryItem",
            value: function renameDragEntryItem(dragEntryItem, done) {
                var sourceEntryPath, targetEntryPath;
                sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem);
                targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem);
                var pathMap = dragEntryItem.getPathMap(sourceEntryPath, targetEntryPath);
                var ref;
                ref = pathMap, sourceEntryPath = ref.sourceEntryPath, targetEntryPath = ref.targetEntryPath, ref;
                if (sourceEntryPath === targetEntryPath) {
                    done();
                    return;
                }
                var pathMaps = [
                    pathMap
                ], explorer = this; ///
                this.renameDragEntryItems(pathMaps, explorer, function() {
                    done();
                });
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem, done) {
                var _this = this;
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), markerEntryItem = this.retrieveMarkerEntryItem(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(markerEntryItem);
                if (sourceEntryPath === targetEntryPath && dragEntryItemExplorer === this) {
                    this.removeMarker();
                    done();
                    return;
                }
                var pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
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
            key: "clearInterval",
            value: function clearInterval1() {
                var interval = null;
                this.setInterval(interval);
            }
        },
        {
            key: "clearClickedDragEntryItem",
            value: function clearClickedDragEntryItem() {
                var clickedDragEntryItem = null;
                this.setClickedDragEntryItem(clickedDragEntryItem);
            }
        },
        {
            key: "isMounted",
            value: function isMounted() {
                var mounted = this.getState().mounted;
                return mounted;
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
            key: "getInterval",
            value: function getInterval() {
                var interval = this.getState().interval;
                return interval;
            }
        },
        {
            key: "isSingleClick",
            value: function isSingleClick() {
                var singleClick = this.getState().singleClick;
                return singleClick;
            }
        },
        {
            key: "getClickedDragEntryItem",
            value: function getClickedDragEntryItem() {
                var clickedDragEntryItem = this.getState().clickedDragEntryItem;
                return clickedDragEntryItem;
            }
        },
        {
            key: "setMounted",
            value: function setMounted(mounted) {
                this.updateState({
                    mounted: mounted
                });
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
            key: "setInterval",
            value: function setInterval(interval) {
                this.updateState({
                    interval: interval
                });
            }
        },
        {
            key: "setSingleClick",
            value: function setSingleClick(singleClick) {
                this.updateState({
                    singleClick: singleClick
                });
            }
        },
        {
            key: "setClickedDragEntryItem",
            value: function setClickedDragEntryItem(clickedDragEntryItem) {
                this.updateState({
                    clickedDragEntryItem: clickedDragEntryItem
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var mounted = false, disabled = false, interval = null, singleClick = false, clickedDragEntryItem = null;
                this.setState({
                    mounted: mounted,
                    disabled: disabled,
                    interval: interval,
                    singleClick: singleClick,
                    clickedDragEntryItem: clickedDragEntryItem
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, onCreate = _this_properties.onCreate, onRename = _this_properties.onRename, _this_properties_singleClick = _this_properties.singleClick, singleClick = _this_properties_singleClick === void 0 ? false : _this_properties_singleClick, moveHandler = onMove, openHandler = onOpen, createHandler = onCreate, renameHandler = onRename, selectHandler = onSelect; ///
                this.setSingleClick(singleClick);
                this.enableDrop();
                this.onDragOver(this.dragOverHandler);
                this.onDrop(this.dropHandler);
                moveHandler && this.onMove(moveHandler);
                openHandler && this.onOpen(openHandler);
                createHandler && this.onCreate(createHandler);
                renameHandler && this.onRename(renameHandler);
                selectHandler && this.onSelect(selectHandler);
                var mounted = true;
                this.setMounted(mounted);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, onCreate = _this_properties.onCreate, onRename = _this_properties.onRename, moveHandler = onMove, openHandler = onOpen, createHandler = onCreate, renameHandler = onRename, selectHandler = onSelect; ///
                this.disableDrop();
                this.offDragOver(this.dragOverHandler);
                this.offDrop(this.dropHandler);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
                createHandler && this.offCreate(createHandler);
                renameHandler && this.offRename(renameHandler);
                selectHandler && this.offSelect(selectHandler);
                var mounted = false;
                this.setMounted(mounted);
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
    "onRename",
    "onSelect",
    "onCreate",
    "reference",
    "references",
    "singleClick"
]);
_define_property(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easydraganddrop.dropMixins);
Object.assign(Explorer.prototype, _explorer.default);
Object.assign(Explorer.prototype, _dragEntryItem.default);
var _default = (0, _easywithstyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IFBFUklPRCwgRE9VQkxFX0NMSUNLX0RFTEFZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtLCB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzLCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyYWdPdmVySGFuZGxlciA9IChkcmFnRWxlbWVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcEhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jb2xsYXBzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUGF0aCgpIHtcbiAgICBsZXQgcGF0aDtcblxuICAgIGNvbnN0IG5hbWUgPSBQRVJJT0QsICAvLy9cbiAgICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICBwYXRoID0gbmFtZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuXG4gICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZURpcmVjdG9yeVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgY29sbGFwc2VkID0gZmFsc2UsXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSwgY29sbGFwc2VkKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgcmVuYW1lU2VsZWN0ZWRQYXRoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5yZW5hbWUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFBhdGgoKSB7XG4gICAgbGV0IHNlbGVjdGVkUGF0aCA9IG51bGw7XG5cbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgc2VsZWN0ZWRQYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkUGF0aDtcbiAgfVxuXG4gIGNsaWNrRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3Qgc2luZ2xlQ2xpY2sgPSB0aGlzLmlzU2luZ2xlQ2xpY2soKTtcblxuICAgIGlmIChzaW5nbGVDbGljaykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmNsaWNrKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBkcmFnRW50cnlJdGVtLmRvdWJsZUNsaWNrKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtICE9PSBjbGlja2VkRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgICAgdGhpcy5jbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlbGF5ID0gRE9VQkxFX0NMSUNLX0RFTEFZLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5jbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbS5jbGljaygpO1xuICAgICAgICAgICAgfSwgZGVsYXkpLFxuICAgICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbS5kb3VibGVDbGljaygpO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoLCBleHBsb3Jlcik7XG4gIH1cblxuICBzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGxQYXRocygpO1xuXG4gICAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWQgPSAhc2VsZWN0ZWQ7IC8vL1xuXG4gICAgY29uc3QgcmVhZE9ubHkgPSBkcmFnRW50cnlJdGVtLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgbGV0IHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgICAgdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcbiAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgY29uc3QgcGF0aE1hcCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cbiAgICAoeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcCk7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhNYXBzID0gW1xuICAgICAgICAgICAgcGF0aE1hcFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLnJlbmFtZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICBpZiAoKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSAmJiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID09PSB0aGlzKSkge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbmFtZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldERpc2FibGVkKGRpc2FibGVkKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldERpc2FibGVkKGRpc2FibGVkKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGVuYWJsZURyYWcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZW5hYmxlRHJhZygpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZURyYWcoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGlzYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBjbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IGNsaWNrZWREcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIGNvbnN0IHsgbW91bnRlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1vdW50ZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIGlzU2luZ2xlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBzaW5nbGVDbGljayB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHNpbmdsZUNsaWNrO1xuICB9XG5cbiAgZ2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBjbGlja2VkRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGNsaWNrZWREcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0TW91bnRlZChtb3VudGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtb3VudGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2luZ2xlQ2xpY2soc2luZ2xlQ2xpY2spIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNpbmdsZUNsaWNrXG4gICAgfSk7XG4gIH1cblxuICBzZXRDbGlja2VkRHJhZ0VudHJ5SXRlbShjbGlja2VkRHJhZ0VudHJ5SXRlbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc2luZ2xlQ2xpY2sgPSBmYWxzZSxcbiAgICAgICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdW50ZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGludGVydmFsLFxuICAgICAgc2luZ2xlQ2xpY2ssXG4gICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QsIG9uQ3JlYXRlLCBvblJlbmFtZSwgc2luZ2xlQ2xpY2sgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgY3JlYXRlSGFuZGxlciA9IG9uQ3JlYXRlLCAvLy9cbiAgICAgICAgICByZW5hbWVIYW5kbGVyID0gb25SZW5hbWUsIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLnNldFNpbmdsZUNsaWNrKHNpbmdsZUNsaWNrKTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vbk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgY3JlYXRlSGFuZGxlciAmJiB0aGlzLm9uQ3JlYXRlKGNyZWF0ZUhhbmRsZXIpO1xuXG4gICAgcmVuYW1lSGFuZGxlciAmJiB0aGlzLm9uUmVuYW1lKHJlbmFtZUhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9uU2VsZWN0KHNlbGVjdEhhbmRsZXIpO1xuXG4gICAgY29uc3QgbW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldE1vdW50ZWQobW91bnRlZCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCwgb25DcmVhdGUsIG9uUmVuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBjcmVhdGVIYW5kbGVyID0gb25DcmVhdGUsIC8vL1xuICAgICAgICAgIHJlbmFtZUhhbmRsZXIgPSBvblJlbmFtZSwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBjcmVhdGVIYW5kbGVyICYmIHRoaXMub2ZmQ3JlYXRlKGNyZWF0ZUhhbmRsZXIpO1xuXG4gICAgcmVuYW1lSGFuZGxlciAmJiB0aGlzLm9mZlJlbmFtZShyZW5hbWVIYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vZmZTZWxlY3Qoc2VsZWN0SGFuZGxlcik7XG5cbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldE1vdW50ZWQobW91bnRlZCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldFNlbGVjdGVkUGF0aCA9IHRoaXMuZ2V0U2VsZWN0ZWRQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgY29sbGFwc2UsXG4gICAgICBnZXRTZWxlY3RlZFBhdGgsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cbiAgc3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uTW92ZVwiLFxuICAgIFwib25PcGVuXCIsXG4gICAgXCJvblJlbmFtZVwiLFxuICAgIFwib25TZWxlY3RcIixcbiAgICBcIm9uQ3JlYXRlXCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcInJlZmVyZW5jZXNcIixcbiAgICBcInNpbmdsZUNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJlbGVtZW50IiwiZHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImRyb3BIYW5kbGVyIiwiYWJvcnRlZCIsImRvbmUiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImZvckVhY2giLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJleHBhbmQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImNyZWF0ZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsImNyZWF0ZSIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aCIsInJlbmFtZSIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJjbGlja0RyYWdFbnRyeUl0ZW0iLCJzaW5nbGVDbGljayIsImlzU2luZ2xlQ2xpY2siLCJzZWxlY3RlZCIsImNsaWNrIiwiZG91YmxlQ2xpY2siLCJjbGlja2VkRHJhZ0VudHJ5SXRlbSIsImdldENsaWNrZWREcmFnRW50cnlJdGVtIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckNsaWNrZWREcmFnRW50cnlJdGVtIiwiZGVsYXkiLCJET1VCTEVfQ0xJQ0tfREVMQVkiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJzZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjYWxsT3BlbkhhbmRsZXJzIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJpc1NlbGVjdGVkIiwiZGVzZWxlY3QiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsImlzUmVhZE9ubHkiLCJjYWxsU2VsZWN0SGFuZGxlcnMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImdldFBhdGhNYXAiLCJyZW5hbWVEcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsIm1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJjYWxsTW92ZUhhbmRsZXJzQXN5bmMiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jIiwiY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMiLCJlbmFibGUiLCJzZXREaXNhYmxlZCIsImVuYWJsZURyYWciLCJkaXNhYmxlIiwiZGlzYWJsZURyYWciLCJpc01vdW50ZWQiLCJtb3VudGVkIiwiZ2V0U3RhdGUiLCJzZXRNb3VudGVkIiwidXBkYXRlU3RhdGUiLCJzZXRTaW5nbGVDbGljayIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJvbk1vdmUiLCJvbk9wZW4iLCJvblNlbGVjdCIsIm9uQ3JlYXRlIiwib25SZW5hbWUiLCJtb3ZlSGFuZGxlciIsIm9wZW5IYW5kbGVyIiwiY3JlYXRlSGFuZGxlciIsInJlbmFtZUhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwiZW5hYmxlRHJvcCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJhZ092ZXIiLCJvZmZEcm9wIiwib2ZmTW92ZSIsIm9mZk9wZW4iLCJvZmZDcmVhdGUiLCJvZmZSZW5hbWUiLCJvZmZTZWxlY3QiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSIsImV4cGxvcmVyUGFkZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMnFCQTs7O2VBQUE7OztvRUF6cUJzQjtvQkFFRTsrQkFDRzt5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