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
        _define_property(_assert_this_initialized(_this), "dragOverCustomHandler", function(event, element, dragElement) {
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
        _define_property(_assert_this_initialized(_this), "dropCustomHandler", function(event, element, dragElement, aborted, done) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBkcmFnRW50cnlJdGVtTWl4aW5zIGZyb20gXCIuL21peGlucy9kcmFnRW50cnlJdGVtXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBQRVJJT0QsIERPVUJMRV9DTElDS19ERUxBWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgT1BFTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTkFNRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIENSRUFURV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcmFnRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEVudHJpZXNMaXN0KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0xpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0xpc3Q7XG5cdH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHksIHRvcG1vc3QpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY29sbGFwc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVBhdGgoKSB7XG4gICAgbGV0IHBhdGg7XG5cbiAgICBjb25zdCBuYW1lID0gUEVSSU9ELCAgLy8vXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgcGF0aCA9IG5hbWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoLCBuYW1lKTtcblxuICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKSxcbiAgICAgICAgICByZWFkT25seSA9IGZhbHNlLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IGZhbHNlLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jcmVhdGUoKTtcbiAgfVxuXG4gIHJlbmFtZVNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0ucmVuYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRQYXRoKCkge1xuICAgIGxldCBzZWxlY3RlZFBhdGggPSBudWxsO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aCA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgIHNlbGVjdGVkUGF0aCA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFBhdGg7XG4gIH1cblxuICBjbGlja0RyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IHNpbmdsZUNsaWNrID0gdGhpcy5pc1NpbmdsZUNsaWNrKCk7XG5cbiAgICBpZiAoc2luZ2xlQ2xpY2spIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZHJhZ0VudHJ5SXRlbS5jbGljaygpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5zaW5nbGVDbGljaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldENsaWNrZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbSAhPT0gY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWxheSA9IERPVUJMRV9DTElDS19ERUxBWSxcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICAgICAgICAgIGRyYWdFbnRyeUl0ZW0uY2xpY2soKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KSxcbiAgICAgICAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICB0aGlzLnNldENsaWNrZWREcmFnRW50cnlJdGVtKGNsaWNrZWREcmFnRW50cnlJdGVtKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICB0aGlzLmNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGRyYWdFbnRyeUl0ZW0uZG91YmxlQ2xpY2soKTtcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgICAgZXhwbG9yZXIgPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBPUEVOX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBmaWxlUGF0aCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgIGNvbnN0IHBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kZXNlbGVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUGF0aHMoKTtcblxuICAgICAgdGhpcy5zZWxlY3RQYXRoKHBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkID0gIXNlbGVjdGVkOyAvLy9cblxuICAgIGNvbnN0IHJlYWRPbmx5ID0gZHJhZ0VudHJ5SXRlbS5pc1JlYWRPbmx5KCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gU0VMRUNUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHksIGV4cGxvcmVyKTtcblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5jcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGxldCBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICAgIHRhcmdldEVudHJ5UGF0aDtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG4gICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcblxuICAgIGNvbnN0IHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZmlyc3RQYXRoTWFwID0gZmlyc3QocGF0aE1hcHMpLFxuICAgICAgICAgIHBhdGhNYXAgPSBmaXJzdFBhdGhNYXA7IC8vL1xuXG4gICAgKHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXApO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHRoaXMucmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKTtcblxuICAgIGlmICgoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpICYmIChkcmFnRW50cnlJdGVtRXhwbG9yZXIgPT09IHRoaXMpKSB7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUkVOQU1FX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gTU9WRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUkVNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDUkVBVEVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgcGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBlbmFibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmVuYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRpc2FibGVEcmFnKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckludGVydmFsKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICB0aGlzLnNldENsaWNrZWREcmFnRW50cnlJdGVtKGNsaWNrZWREcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICBjb25zdCB7IG1vdW50ZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtb3VudGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBpc1NpbmdsZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgc2luZ2xlQ2xpY2sgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzaW5nbGVDbGljaztcbiAgfVxuXG4gIGdldENsaWNrZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgY2xpY2tlZERyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBjbGlja2VkRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHNldE1vdW50ZWQobW91bnRlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbW91bnRlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNpbmdsZUNsaWNrKHNpbmdsZUNsaWNrKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzaW5nbGVDbGlja1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHNpbmdsZUNsaWNrID0gZmFsc2UsXG4gICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VudGVkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHNpbmdsZUNsaWNrLFxuICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc2luZ2xlQ2xpY2sgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgdGhpcy5zZXRTaW5nbGVDbGljayhzaW5nbGVDbGljayk7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25DdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuICAgIGNvbnN0IG1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRNb3VudGVkKG1vdW50ZWQpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldE1vdW50ZWQobW91bnRlZCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldFNlbGVjdGVkUGF0aCA9IHRoaXMuZ2V0U2VsZWN0ZWRQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgY29sbGFwc2UsXG4gICAgICBnZXRTZWxlY3RlZFBhdGgsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cbiAgc3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwicmVmZXJlbmNlc1wiLFxuICAgIFwic2luZ2xlQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZXhwbG9yZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyYWdFbnRyeUl0ZW1NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiZHJhZ092ZXJDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEN1c3RvbUhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZWFkT25seSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInRvcG1vc3QiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVQYXRocyIsInR5cGUiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRocyIsInJlZHVjZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJjb2xsYXBzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlUGF0aCIsIm5hbWUiLCJQRVJJT0QiLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImV4cGFuZCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwiY3JlYXRlRmlsZVBhdGgiLCJmaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwiY3JlYXRlIiwiY3JlYXRlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImRpcmVjdG9yeVBhdGgiLCJhZGREaXJlY3RvcnlQYXRoIiwicmVuYW1lU2VsZWN0ZWRQYXRoIiwicmVuYW1lIiwiZ2V0U2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWRQYXRoIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aCIsImNsaWNrRHJhZ0VudHJ5SXRlbSIsInNpbmdsZUNsaWNrIiwiaXNTaW5nbGVDbGljayIsInNlbGVjdGVkIiwiY2xpY2siLCJjbGlja2VkRHJhZ0VudHJ5SXRlbSIsImdldENsaWNrZWREcmFnRW50cnlJdGVtIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckNsaWNrZWREcmFnRW50cnlJdGVtIiwiZGVsYXkiLCJET1VCTEVfQ0xJQ0tfREVMQVkiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJzZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSIsImRvdWJsZUNsaWNrIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImN1c3RvbUV2ZW50VHlwZSIsIk9QRU5fQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbSIsImlzU2VsZWN0ZWQiLCJkZXNlbGVjdCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwiaXNSZWFkT25seSIsIlNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRSIsImNyZWF0ZURyYWdFbnRyeUl0ZW0iLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInBhdGhNYXBzIiwiZ2V0UGF0aE1hcHMiLCJjcmVhdGVEcmFnRW50cnlJdGVtcyIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJmaXJzdFBhdGhNYXAiLCJwYXRoTWFwIiwicmVuYW1lRHJhZ0VudHJ5SXRlbXMiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJSRU5BTUVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJhZGREcmFnRW50cnlJdGVtIiwiTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwiUkVNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwiQ1JFQVRFX0NVU1RPTV9FVkVOVF9UWVBFIiwiZW5hYmxlIiwic2V0RGlzYWJsZWQiLCJlbmFibGVEcmFnIiwiZGlzYWJsZSIsImRpc2FibGVEcmFnIiwiaXNNb3VudGVkIiwibW91bnRlZCIsImdldFN0YXRlIiwic2V0TW91bnRlZCIsInVwZGF0ZVN0YXRlIiwic2V0U2luZ2xlQ2xpY2siLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uQ3VzdG9tRHJhZ092ZXIiLCJvbkN1c3RvbURyb3AiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmQ3VzdG9tRHJhZ092ZXIiLCJvZmZDdXN0b21Ecm9wIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJleHBsb3Jlck1peGlucyIsImRyYWdFbnRyeUl0ZW1NaXhpbnMiLCJ3aXRoU3R5bGUiLCJleHBsb3JlclBhZGRpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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