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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function Explorer() {
        _class_call_check(this, Explorer);
        var _this;
        _this = _call_super(this, Explorer, arguments), _define_property(_this, "dragOverCustomHandler", function(event, element, dragElement) {
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = dragEntryItemName; ///
            markerEntryItemExplorer = _this; ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        }), _define_property(_this, "dropCustomHandler", function(event, element, dragElement, aborted, done) {
            var markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            var dragEntryItem = dragElement; ///
            markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
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
            value: function clickDragEntryItem(event, element, dragEntryItem) {
                var _this = this;
                var singleClick = this.isSingleClick();
                if (singleClick) {
                    var selected = dragEntryItem.click(event, element);
                    if (selected) {
                        dragEntryItem.singleClick(event, element);
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
                        dragEntryItem.click(event, element);
                    }, delay), clickedDragEntryItem1 = dragEntryItem; ///
                    this.setInterval(interval2);
                    this.setClickedDragEntryItem(clickedDragEntryItem1);
                    return;
                }
                clearInterval(interval1);
                this.clearInterval();
                this.clearClickedDragEntryItem();
                dragEntryItem.doubleClick(event, element);
            }
        },
        {
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(event, element, fileNameDragEntryItem) {
                var disabled = this.isDisabled();
                if (disabled) {
                    return;
                }
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath, explorer = fileNameDragEntryItem.getExplorer(), customEventType = _customEventTypes.OPEN_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(customEventType, event, element, filePath, explorer);
            }
        },
        {
            key: "selectOrDeselectDragEntryItem",
            value: function selectOrDeselectDragEntryItem(event, element, dragEntryItem) {
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
                this.callCustomHandlers(customEventType, event, element, path, selected, readOnly, explorer);
                return selected;
            }
        },
        {
            key: "createDragEntryItem",
            value: function createDragEntryItem(event, element, dragEntryItem, done) {
                var sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
                this.createDragEntryItems(event, element, pathMaps, explorer, function() {
                    done();
                });
            }
        },
        {
            key: "renameDragEntryItem",
            value: function renameDragEntryItem(event, element, dragEntryItem, done) {
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
                this.renameDragEntryItems(event, element, pathMaps, explorer, function() {
                    done();
                });
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(event, element, dragEntryItem, done) {
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), markerEntryItem = this.retrieveMarkerEntryItem(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(markerEntryItem);
                if (sourceEntryPath === targetEntryPath && dragEntryItemExplorer === this) {
                    this.removeMarker();
                    done();
                    return;
                }
                var pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.moveDragEntryItems(event, element, pathMaps, explorer, done);
            }
        },
        {
            key: "renameDragEntryItems",
            value: function renameDragEntryItems(event, element, pathMaps, explorer, done) {
                var _this = this;
                var customEventType = _customEventTypes.RENAME_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, function() {
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
            value: function moveDragEntryItems(event, element, pathMaps, explorer, done) {
                var _this = this;
                var customEventType = _customEventTypes.MOVE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, function() {
                    pathMaps.forEach(function(pathMap) {
                        _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        _this.addDragEntryItem(pathMap, explorer);
                    });
                    _this.removeMarker();
                    done();
                });
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(event, element, pathMaps, explorer, done) {
                var _this = this;
                var customEventType = _customEventTypes.REMOVE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, function() {
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
            value: function createDragEntryItems(event, element, pathMaps, explorer, done) {
                var _this = this;
                var customEventType = _customEventTypes.CREATE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, function() {
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
            key: "isDisabled",
            value: function isDisabled() {
                var disabled = this.getState().disabled;
                return disabled;
            }
        },
        {
            key: "isEditable",
            value: function isEditable() {
                var editableDragEntryItem = this.retrieveEditableDragEntryItem(), editable = editableDragEntryItem !== null;
                return editable;
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
            key: "cancelEditableDragEntryItem",
            value: function cancelEditableDragEntryItem() {
                var editableDragEntryItem = this.retrieveEditableDragEntryItem(), created = editableDragEntryItem.isCreated();
                editableDragEntryItem.cancel(created);
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var disabled = false, interval = null, singleClick = false, clickedDragEntryItem = null;
                this.setState({
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
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offCustomDragOver(this.dragOverCustomHandler);
                this.offCustomDrop(this.dropCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBkcmFnRW50cnlJdGVtTWl4aW5zIGZyb20gXCIuL21peGlucy9kcmFnRW50cnlJdGVtXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBQRVJJT0QsIERPVUJMRV9DTElDS19ERUxBWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSwgdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgT1BFTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFJFTkFNRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIENSRUFURV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcmFnRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5KSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5LCB0b3Btb3N0KSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVBhdGhzKHR5cGUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHBhdGhzID0gZHJhZ0VudHJ5SXRlbXMucmVkdWNlKChwYXRocywgZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1UeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBkcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLFxuICAgICAgICAgIHBhdGhzID0gdGhpcy5yZXRyaWV2ZVBhdGhzKHR5cGUpLFxuICAgICAgICAgIGZpbGVQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aHMgPSBwYXRoczsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBwYXRoO1xuXG4gICAgY29uc3QgbmFtZSA9IFBFUklPRCwgIC8vL1xuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHBhdGggPSBuYW1lOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgbmFtZSk7XG5cbiAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLmV4cGFuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gc2VsZWN0ZWREcmFnRW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgpO1xuXG4gICAgICAgIHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgY3JlYXRlRmlsZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuY3JlYXRlUGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlRGlyZWN0b3J5UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSBmYWxzZSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gcGF0aCwgIC8vL1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICByZW5hbWVTZWxlY3RlZFBhdGgoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtLnJlbmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkUGF0aCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRQYXRoID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICBzZWxlY3RlZFBhdGggPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRQYXRoO1xuICB9XG5cbiAgY2xpY2tEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3Qgc2luZ2xlQ2xpY2sgPSB0aGlzLmlzU2luZ2xlQ2xpY2soKTtcblxuICAgIGlmIChzaW5nbGVDbGljaykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmNsaWNrKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uc2luZ2xlQ2xpY2soZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldENsaWNrZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbSAhPT0gY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWxheSA9IERPVUJMRV9DTElDS19ERUxBWSxcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICAgICAgICAgIGRyYWdFbnRyeUl0ZW0uY2xpY2soZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfSwgZGVsYXkpLFxuICAgICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbS5kb3VibGVDbGljayhldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBleHBsb3JlciA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IE9QRU5fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmaWxlUGF0aCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdGVkID0gZHJhZ0VudHJ5SXRlbS5pc1NlbGVjdGVkKCk7XG5cbiAgICBjb25zdCBwYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNlbGVjdEFsbFBhdGhzKCk7XG5cbiAgICAgIHRoaXMuc2VsZWN0UGF0aChwYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZCA9ICFzZWxlY3RlZDsgLy8vXG5cbiAgICBjb25zdCByZWFkT25seSA9IGRyYWdFbnRyeUl0ZW0uaXNSZWFkT25seSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNFTEVDVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHBhdGgsIHNlbGVjdGVkLCByZWFkT25seSwgZXhwbG9yZXIpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5jcmVhdGVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgbGV0IHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgICAgdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcbiAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgY29uc3QgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBmaXJzdFBhdGhNYXAgPSBmaXJzdChwYXRoTWFwcyksXG4gICAgICAgICAgcGF0aE1hcCA9IGZpcnN0UGF0aE1hcDsgLy8vXG5cbiAgICAoeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcCk7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5yZW5hbWVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICBpZiAoKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSAmJiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID09PSB0aGlzKSkge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW1zKGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBSRU5BTUVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IE1PVkVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUkVNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENSRUFURV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLmFkZERyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBlbmFibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmVuYWJsZURyYWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGVEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRpc2FibGVEcmFnKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckludGVydmFsKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBjbGlja2VkRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICB0aGlzLnNldENsaWNrZWREcmFnRW50cnlJdGVtKGNsaWNrZWREcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNFZGl0YWJsZSgpIHtcbiAgICBjb25zdCBlZGl0YWJsZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZWRpdGFibGUgPSAoZWRpdGFibGVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuICAgIHJldHVybiBlZGl0YWJsZTtcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIGlzU2luZ2xlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBzaW5nbGVDbGljayB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHNpbmdsZUNsaWNrO1xuICB9XG5cbiAgZ2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBjbGlja2VkRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGNsaWNrZWREcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNpbmdsZUNsaWNrKHNpbmdsZUNsaWNrKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzaW5nbGVDbGlja1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxFZGl0YWJsZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgZWRpdGFibGVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZUVkaXRhYmxlRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSBlZGl0YWJsZURyYWdFbnRyeUl0ZW0uaXNDcmVhdGVkKCk7XG5cbiAgICBlZGl0YWJsZURyYWdFbnRyeUl0ZW0uY2FuY2VsKGNyZWF0ZWQpO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gZmFsc2UsXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHNpbmdsZUNsaWNrID0gZmFsc2UsXG4gICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGludGVydmFsLFxuICAgICAgc2luZ2xlQ2xpY2ssXG4gICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzaW5nbGVDbGljayA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICB0aGlzLnNldFNpbmdsZUNsaWNrKHNpbmdsZUNsaWNrKTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbGxhcHNlID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldFNlbGVjdGVkUGF0aCA9IHRoaXMuZ2V0U2VsZWN0ZWRQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlUGF0aHMgPSB0aGlzLnJldHJpZXZlRmlsZVBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRocyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgY29sbGFwc2UsXG4gICAgICBnZXRTZWxlY3RlZFBhdGgsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cbiAgc3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwicmVmZXJlbmNlc1wiLFxuICAgIFwic2luZ2xlQ2xpY2tcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5PYmplY3QuYXNzaWduKEV4cGxvcmVyLnByb3RvdHlwZSwgZXhwbG9yZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyYWdFbnRyeUl0ZW1NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiZHJhZ092ZXJDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnQiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEN1c3RvbUhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImZvckVhY2giLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJleHBhbmQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImNyZWF0ZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsImNyZWF0ZSIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aCIsInJlbmFtZSIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJjbGlja0RyYWdFbnRyeUl0ZW0iLCJzaW5nbGVDbGljayIsImlzU2luZ2xlQ2xpY2siLCJzZWxlY3RlZCIsImNsaWNrIiwiY2xpY2tlZERyYWdFbnRyeUl0ZW0iLCJnZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSIsImRlbGF5IiwiRE9VQkxFX0NMSUNLX0RFTEFZIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwic2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjdXN0b21FdmVudFR5cGUiLCJPUEVOX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJpc1NlbGVjdGVkIiwiZGVzZWxlY3QiLCJkZXNlbGVjdEFsbFBhdGhzIiwic2VsZWN0UGF0aCIsImlzUmVhZE9ubHkiLCJTRUxFQ1RfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbXMiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwiZmlyc3RQYXRoTWFwIiwicGF0aE1hcCIsInJlbmFtZURyYWdFbnRyeUl0ZW1zIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwibW92ZURyYWdFbnRyeUl0ZW1zIiwiUkVOQU1FX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsIk1PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsIlJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIkNSRUFURV9DVVNUT01fRVZFTlRfVFlQRSIsImVuYWJsZSIsInNldERpc2FibGVkIiwiZW5hYmxlRHJhZyIsImRpc2FibGUiLCJkaXNhYmxlRHJhZyIsImdldFN0YXRlIiwiaXNFZGl0YWJsZSIsImVkaXRhYmxlRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtIiwiZWRpdGFibGUiLCJ1cGRhdGVTdGF0ZSIsInNldFNpbmdsZUNsaWNrIiwiY2FuY2VsRWRpdGFibGVEcmFnRW50cnlJdGVtIiwiY3JlYXRlZCIsImlzQ3JlYXRlZCIsImNhbmNlbCIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21EcmFnT3ZlciIsIm9uQ3VzdG9tRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21EcmFnT3ZlciIsIm9mZkN1c3RvbURyb3AiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsImV4cGxvcmVyTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSIsImV4cGxvcmVyUGFkZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNG9CQTs7O2VBQUE7OztvRUExb0JzQjtvQkFFRTsrQkFDRzt5QkFDbUI7OERBRXRCOytEQUNHO29FQUNLOytEQUNFO2dFQUNFO29FQUNHO3FFQUNFO3NCQUVUO3lCQUNXOzBCQUMrQjt1QkFDQztnQ0FNbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLG1CQUF3REMsd0JBQWEsQ0FBckVELGtCQUFrQkUsb0NBQXNDRCx3QkFBYSxDQUFuREM7QUFFMUIsSUFBQSxBQUFNQyx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxzQkFDSkMsd0JBQUFBLHlCQUF3QixTQUFDQyxPQUFPQyxTQUFTQztZQUN2QyxJQUFNQyxnQkFBZ0JELGFBQ2hCRSxrQkFBa0IsTUFBS0MsdUJBQXVCLElBQzlDQyxvQkFBb0JILGNBQWNJLE9BQU87WUFFL0MsSUFBSUMsc0JBQXNCSixnQkFBZ0JLLE9BQU8sSUFDN0NDLDBCQUEwQk4sZ0JBQWdCTyxXQUFXLElBQ3JEQyw4QkFBOEJKLHFCQUM5Qkssa0NBQWtDSCx5QkFBeUIsR0FBRztZQUVsRUYsc0JBQXNCRixtQkFBa0IsR0FBRztZQUUzQ0ksaUNBQWlDLEdBQUc7WUFFcEMsSUFBSSxBQUFDQSw0QkFBNEJHLG1DQUFxQ0wsd0JBQXdCSSw2QkFB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