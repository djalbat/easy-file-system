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
                var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem);
                if (sourceEntryPath === targetEntryPath) {
                    done();
                    return;
                }
                var pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
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
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, _this_properties_singleClick = _this_properties.singleClick, singleClick = _this_properties_singleClick === void 0 ? false : _this_properties_singleClick, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
                this.setSingleClick(singleClick);
                this.enableDrop();
                this.onDragOver(this.dragOverHandler);
                this.onDrop(this.dropHandler);
                moveHandler && this.onMove(moveHandler);
                openHandler && this.onOpen(openHandler);
                selectHandler && this.onSelect(selectHandler);
                var mounted = true;
                this.setMounted(mounted);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
                this.disableDrop();
                this.offDragOver(this.dragOverHandler);
                this.offDrop(this.dropHandler);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
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
    "onSelect",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IGV4cGxvcmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9leHBsb3JlclwiO1xuaW1wb3J0IGRyYWdFbnRyeUl0ZW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RyYWdFbnRyeUl0ZW1cIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IFBFUklPRCwgRE9VQkxFX0NMSUNLX0RFTEFZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtLCB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzLCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyYWdPdmVySGFuZGxlciA9IChkcmFnRWxlbWVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcEhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVQYXRocyh0eXBlKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBwYXRocyA9IGRyYWdFbnRyeUl0ZW1zLnJlZHVjZSgocGF0aHMsIGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnRW50cnlJdGVtVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBmaWxlUGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jb2xsYXBzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlUGF0aCgpIHtcbiAgICBsZXQgcGF0aDtcblxuICAgIGNvbnN0IG5hbWUgPSBQRVJJT0QsICAvLy9cbiAgICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICBwYXRoID0gbmFtZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuXG4gICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoKTtcblxuICAgICAgICBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZURpcmVjdG9yeVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgY29sbGFwc2VkID0gZmFsc2UsXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSwgY29sbGFwc2VkKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgcmVuYW1lU2VsZWN0ZWRQYXRoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5yZW5hbWUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZFBhdGgoKSB7XG4gICAgbGV0IHNlbGVjdGVkUGF0aCA9IG51bGw7XG5cbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgc2VsZWN0ZWRQYXRoID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkUGF0aDtcbiAgfVxuXG4gIGNsaWNrRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3Qgc2luZ2xlQ2xpY2sgPSB0aGlzLmlzU2luZ2xlQ2xpY2soKTtcblxuICAgIGlmIChzaW5nbGVDbGljaykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmNsaWNrKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBkcmFnRW50cnlJdGVtLmRvdWJsZUNsaWNrKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtICE9PSBjbGlja2VkRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgICAgdGhpcy5jbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlbGF5ID0gRE9VQkxFX0NMSUNLX0RFTEFZLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICAgICAgICAgICAgdGhpcy5jbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbS5jbGljaygpO1xuICAgICAgICAgICAgfSwgZGVsYXkpLFxuICAgICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbS5kb3VibGVDbGljaygpO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoLCBleHBsb3Jlcik7XG4gIH1cblxuICBzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgY29uc3QgcGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGxQYXRocygpO1xuXG4gICAgICB0aGlzLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWQgPSAhc2VsZWN0ZWQ7IC8vL1xuXG4gICAgY29uc3QgcmVhZE9ubHkgPSBkcmFnRW50cnlJdGVtLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3Qgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5yZW5hbWVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKChzb3VyY2VFbnRyeVBhdGggPT09IHRhcmdldEVudHJ5UGF0aCkgJiYgKGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9PT0gdGhpcykpIHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbENyZWF0ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBlbmFibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmVuYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRpc2FibGVEcmFnKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckludGVydmFsKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICB0aGlzLnNldENsaWNrZWREcmFnRW50cnlJdGVtKGNsaWNrZWREcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICBjb25zdCB7IG1vdW50ZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtb3VudGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBpc1NpbmdsZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgc2luZ2xlQ2xpY2sgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzaW5nbGVDbGljaztcbiAgfVxuXG4gIGdldENsaWNrZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgY2xpY2tlZERyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBjbGlja2VkRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHNldE1vdW50ZWQobW91bnRlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbW91bnRlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNpbmdsZUNsaWNrKHNpbmdsZUNsaWNrKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzaW5nbGVDbGlja1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHNpbmdsZUNsaWNrID0gZmFsc2UsXG4gICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VudGVkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHNpbmdsZUNsaWNrLFxuICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4sIG9uU2VsZWN0LCBzaW5nbGVDbGljayA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuLCAvLy9cbiAgICAgICAgICBzZWxlY3RIYW5kbGVyID0gb25TZWxlY3Q7IC8vL1xuXG4gICAgdGhpcy5zZXRTaW5nbGVDbGljayhzaW5nbGVDbGljayk7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcblxuICAgIGNvbnN0IG1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRNb3VudGVkKG1vdW50ZWQpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG5cbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9mZlNlbGVjdChzZWxlY3RIYW5kbGVyKTtcblxuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TW91bnRlZChtb3VudGVkKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0U2VsZWN0ZWRQYXRoID0gdGhpcy5nZXRTZWxlY3RlZFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyA9IHRoaXMucmV0cmlldmVGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeVBhdGhzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGdldFNlbGVjdGVkUGF0aCxcbiAgICAgIHJldHJpZXZlRmlsZVBhdGhzLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRoc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcInJlZmVyZW5jZXNcIixcbiAgICBcInNpbmdsZUNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJlbGVtZW50IiwiZHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImRyb3BIYW5kbGVyIiwiYWJvcnRlZCIsImRvbmUiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImZvckVhY2giLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJleHBhbmQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImNyZWF0ZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsImNyZWF0ZSIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aCIsInJlbmFtZSIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJjbGlja0RyYWdFbnRyeUl0ZW0iLCJzaW5nbGVDbGljayIsImlzU2luZ2xlQ2xpY2siLCJzZWxlY3RlZCIsImNsaWNrIiwiZG91YmxlQ2xpY2siLCJjbGlja2VkRHJhZ0VudHJ5SXRlbSIsImdldENsaWNrZWREcmFnRW50cnlJdGVtIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckNsaWNrZWREcmFnRW50cnlJdGVtIiwiZGVsYXkiLCJET1VCTEVfQ0xJQ0tfREVMQVkiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJzZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjYWxsT3BlbkhhbmRsZXJzIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJpc1NlbGVjdGVkIiwiZGVzZWxlY3QiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsImlzUmVhZE9ubHkiLCJjYWxsU2VsZWN0SGFuZGxlcnMiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwicmVuYW1lRHJhZ0VudHJ5SXRlbXMiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjYWxsUmVuYW1lSGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJjYWxsQ3JlYXRlSGFuZGxlcnNBc3luYyIsImVuYWJsZSIsInNldERpc2FibGVkIiwiZW5hYmxlRHJhZyIsImRpc2FibGUiLCJkaXNhYmxlRHJhZyIsImlzTW91bnRlZCIsIm1vdW50ZWQiLCJnZXRTdGF0ZSIsInNldE1vdW50ZWQiLCJ1cGRhdGVTdGF0ZSIsInNldFNpbmdsZUNsaWNrIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJlbmFibGVEcm9wIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcmFnT3ZlciIsIm9mZkRyb3AiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJkcmFnRW50cnlJdGVtTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvcEJBOzs7ZUFBQTs7O29FQWxwQnNCO29CQUVFOytCQUNHO3lCQUNHOzhEQUVOOytEQUNHO29FQUNLOytEQUNFO2dFQUNFO29FQUNHO3FFQUNFO3NCQUVUO3lCQUNXOzBCQUMrQjt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBUUEsbUJBQXdEQyx3QkFBYSxDQUFyRUQsa0JBQWtCRSxvQ0FBc0NELHdCQUFhLENBQW5EQztBQUUxQixJQUFBLEFBQU1DLHlCQXluQkgsQUF6bkJIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsbUJBQWtCLFNBQUNDLGFBQWFDO1lBQzlCLElBQU1DLGdCQUFnQkYsYUFDaEJHLGtCQUFrQixNQUFLQyx1QkFBdUIsSUFDOUNDLG9CQUFvQkgsY0FBY0ksT0FBTztZQUUvQyxJQUFJQyxzQkFBc0JKLGdCQUFnQkssT0FBTyxJQUM3Q0MsMEJBQTBCTixnQkFBZ0JPLFdBQVcsSUFDckRDLDhCQUE4QkoscUJBQzlCSyxrQ0FBa0NILHlCQUF5QixHQUFHO1lBRWxFRixzQkFBc0JGLG1CQUFrQixHQUFHO1lBRTNDSSwyREFBaUMsR0FBRztZQUVwQyxJQUFJLEFBQUNBLDRCQUE0QkcsbUNBQXFDTCx3QkFBd0JJLDZCQUE4QjtnQkFD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