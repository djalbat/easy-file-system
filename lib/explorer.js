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
var _customEventTypes = require("./customEventTypes");
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
var first = _necessary.arrayUtilities.first, concatenatePaths = _necessary.pathUtilities.concatenatePaths, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
    var _super = _create_super(Explorer);
    function Explorer() {
        _class_call_check(this, Explorer);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "dragOverCustomHandler", function(dragElement, element) {
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
        _define_property(_assert_this_initialized(_this), "dropCustomHandler", function(dragElement, aborted, element, done) {
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
                        dragEntryItem.singleClick();
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
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath, explorer = fileNameDragEntryItem.getExplorer(), customEventType = _customEventTypes.OPEN_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(customEventType, filePath, explorer);
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
                var readOnly = dragEntryItem.isReadOnly(), explorer = dragEntryItem.getExplorer(), customEventType = _customEventTypes.SELECT_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(customEventType, path, selected, readOnly, explorer);
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
                var pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), firstPathMap = first(pathMaps), pathMap = firstPathMap; ///
                var ref;
                ref = pathMap, sourceEntryPath = ref.sourceEntryPath, targetEntryPath = ref.targetEntryPath, ref;
                if (sourceEntryPath === targetEntryPath) {
                    done();
                    return;
                }
                var explorer = this; ///
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
                var customEventType = _customEventTypes.RENAME_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, pathMaps, explorer, function() {
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
                var customEventType = _customEventTypes.MOVE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, pathMaps, explorer, function() {
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
                var customEventType = _customEventTypes.REMOVE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, pathMaps, explorer, function() {
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
                var customEventType = _customEventTypes.CREATE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, pathMaps, explorer, function() {
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
                var _this_properties = this.properties, _this_properties_singleClick = _this_properties.singleClick, singleClick = _this_properties_singleClick === void 0 ? false : _this_properties_singleClick;
                this.setSingleClick(singleClick);
                this.enableDrop();
                this.onCustomDragOver(this.dragOverCustomHandler);
                this.onCustomDrop(this.dropCustomHandler);
                var mounted = true;
                this.setMounted(mounted);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offCustomDragOver(this.dragOverCustomHandler);
                this.offCustomDrop(this.dropCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBkcmFnRW50cnlJdGVtTWl4aW5zIGZyb20gXCIuL21peGlucy9kcmFnRW50cnlJdGVtXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBQRVJJT0QsIERPVUJMRV9DTElDS19ERUxBWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgT1BFTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTkFNRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIENSRUFURV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW1OYW1lOy8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBkcm9wQ3VzdG9tSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5KSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5LCB0b3Btb3N0KSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG5cbiAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmV4cGFuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlRGlyZWN0b3J5UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGgoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLnJlbmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgY2xpY2tEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBzaW5nbGVDbGljayA9IHRoaXMuaXNTaW5nbGVDbGljaygpO1xuXG4gICAgaWYgKHNpbmdsZUNsaWNrKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uY2xpY2soKTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uc2luZ2xlQ2xpY2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrZWREcmFnRW50cnlJdGVtID0gdGhpcy5nZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IGNsaWNrZWREcmFnRW50cnlJdGVtKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVsYXkgPSBET1VCTEVfQ0xJQ0tfREVMQVksXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgICAgICAgICBkcmFnRW50cnlJdGVtLmNsaWNrKCk7XG4gICAgICAgICAgICB9LCBkZWxheSksXG4gICAgICAgICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcblxuICAgICAgdGhpcy5zZXRDbGlja2VkRHJhZ0VudHJ5SXRlbShjbGlja2VkRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgdGhpcy5jbGVhckNsaWNrZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtLmRvdWJsZUNsaWNrKCk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICAgIGV4cGxvcmVyID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gT1BFTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZmlsZVBhdGgsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIHNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdGVkID0gZHJhZ0VudHJ5SXRlbS5pc1NlbGVjdGVkKCk7XG5cbiAgICBjb25zdCBwYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICAgIHRoaXMuc2VsZWN0UGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZCA9ICFzZWxlY3RlZDsgLy8vXG5cbiAgICBjb25zdCByZWFkT25seSA9IGRyYWdFbnRyeUl0ZW0uaXNSZWFkT25seSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgcGF0aCwgc2VsZWN0ZWQsIHJlYWRPbmx5LCBleHBsb3Jlcik7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMuY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBsZXQgc291cmNlRW50cnlQYXRoLFxuICAgICAgICB0YXJnZXRFbnRyeVBhdGg7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBjb25zdCBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGZpcnN0UGF0aE1hcCA9IGZpcnN0KHBhdGhNYXBzKSxcbiAgICAgICAgICBwYXRoTWFwID0gZmlyc3RQYXRoTWFwOyAvLy9cblxuICAgICh7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwKTtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IHRhcmdldEVudHJ5UGF0aCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLnJlbmFtZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICBpZiAoKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSAmJiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID09PSB0aGlzKSkge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFJFTkFNRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IE1PVkVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgcGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ1JFQVRFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICB9XG5cbiAgZW5hYmxlRHJhZygpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5lbmFibGVEcmFnKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlRHJhZygpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kaXNhYmxlRHJhZygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRDbGlja2VkRHJhZ0VudHJ5SXRlbShjbGlja2VkRHJhZ0VudHJ5SXRlbSk7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgY29uc3QgeyBtb3VudGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbW91bnRlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgaXNTaW5nbGVDbGljaygpIHtcbiAgICBjb25zdCB7IHNpbmdsZUNsaWNrIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc2luZ2xlQ2xpY2s7XG4gIH1cblxuICBnZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IGNsaWNrZWREcmFnRW50cnlJdGVtIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY2xpY2tlZERyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBzZXRNb3VudGVkKG1vdW50ZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1vdW50ZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTaW5nbGVDbGljayhzaW5nbGVDbGljaykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2luZ2xlQ2xpY2tcbiAgICB9KTtcbiAgfVxuXG4gIHNldENsaWNrZWREcmFnRW50cnlJdGVtKGNsaWNrZWREcmFnRW50cnlJdGVtKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgICAgIGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzaW5nbGVDbGljayA9IGZhbHNlLFxuICAgICAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91bnRlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzaW5nbGVDbGljayxcbiAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHNpbmdsZUNsaWNrID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHRoaXMuc2V0U2luZ2xlQ2xpY2soc2luZ2xlQ2xpY2spO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBjb25zdCBtb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0TW91bnRlZChtb3VudGVkKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRNb3VudGVkKG1vdW50ZWQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFBhdGggPSB0aGlzLmdldFNlbGVjdGVkUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZVBhdGhzID0gdGhpcy5yZXRyaWV2ZUZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIGNvbGxhcHNlLFxuICAgICAgZ2V0U2VsZWN0ZWRQYXRoLFxuICAgICAgcmV0cmlldmVGaWxlUGF0aHMsXG4gICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG4gIHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcInJlZmVyZW5jZXNcIixcbiAgICBcInNpbmdsZUNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJFeHBsb3JlciIsImRyYWdPdmVyQ3VzdG9tSGFuZGxlciIsImRyYWdFbGVtZW50IiwiZWxlbWVudCIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiLCJkcm9wQ3VzdG9tSGFuZGxlciIsImFib3J0ZWQiLCJkb25lIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJleHBsb3JlciIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInJlYWRPbmx5IiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwidG9wbW9zdCIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZVBhdGhzIiwidHlwZSIsImRyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEcmFnRW50cnlJdGVtcyIsInBhdGhzIiwicmVkdWNlIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJwYXRoIiwicHVzaCIsInJldHJpZXZlRmlsZVBhdGhzIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImZpbGVQYXRocyIsInJldHJpZXZlRGlyZWN0b3J5UGF0aHMiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlQYXRocyIsImNvbGxhcHNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJjcmVhdGVQYXRoIiwibmFtZSIsIlBFUklPRCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZXhwYW5kIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJjcmVhdGVGaWxlUGF0aCIsImZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJjcmVhdGUiLCJjcmVhdGVEaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwiZGlyZWN0b3J5UGF0aCIsImFkZERpcmVjdG9yeVBhdGgiLCJyZW5hbWVTZWxlY3RlZFBhdGgiLCJyZW5hbWUiLCJnZXRTZWxlY3RlZFBhdGgiLCJzZWxlY3RlZFBhdGgiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoIiwiY2xpY2tEcmFnRW50cnlJdGVtIiwic2luZ2xlQ2xpY2siLCJpc1NpbmdsZUNsaWNrIiwic2VsZWN0ZWQiLCJjbGljayIsImNsaWNrZWREcmFnRW50cnlJdGVtIiwiZ2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0iLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0iLCJkZWxheSIsIkRPVUJMRV9DTElDS19ERUxBWSIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsInNldENsaWNrZWREcmFnRW50cnlJdGVtIiwiZG91YmxlQ2xpY2siLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiY3VzdG9tRXZlbnRUeXBlIiwiT1BFTl9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtIiwiaXNTZWxlY3RlZCIsImRlc2VsZWN0IiwiZGVzZWxlY3RBbGxQYXRocyIsInNlbGVjdFBhdGgiLCJpc1JlYWRPbmx5IiwiU0VMRUNUX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbSIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsImNyZWF0ZURyYWdFbnRyeUl0ZW1zIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsImZpcnN0UGF0aE1hcCIsInBhdGhNYXAiLCJyZW5hbWVEcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsIm1vdmVEcmFnRW50cnlJdGVtcyIsIlJFTkFNRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVyc0FzeW5jIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJSRU1PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJDUkVBVEVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJlbmFibGUiLCJzZXREaXNhYmxlZCIsImVuYWJsZURyYWciLCJkaXNhYmxlIiwiZGlzYWJsZURyYWciLCJpc01vdW50ZWQiLCJtb3VudGVkIiwiZ2V0U3RhdGUiLCJzZXRNb3VudGVkIiwidXBkYXRlU3RhdGUiLCJzZXRTaW5nbGVDbGljayIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21EcmFnT3ZlciIsIm9uQ3VzdG9tRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21EcmFnT3ZlciIsIm9mZkN1c3RvbURyb3AiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSIsImV4cGxvcmVyUGFkZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc3BCQTs7O2VBQUE7OztvRUFwcEJzQjtvQkFFRTsrQkFDRzt5QkFDbUI7OERBRXRCOytEQUNHO29FQUNLOytEQUNFO2dFQUNFO29FQUNHO3FFQUNFO3NCQUVUO3lCQUNXOzBCQUMrQjt1QkFDQztnQ0FNbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLG1CQUF3REMsd0JBQWEsQ0FBckVELGtC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