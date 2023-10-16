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
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
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
                        dragEntryItem.delayedClick();
                    }, delay), clickedDragEntryItem1 = dragEntryItem; ///
                    this.setInterval(interval2);
                    this.setClickedDragEntryItem(clickedDragEntryItem1);
                    return;
                }
                clearInterval(interval1);
                this.clearInterval();
                this.clearClickedDragEntryItem();
                dragEntryItem.delayedDoubleClick();
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
                var mounted = false, disabled = false, interval = null, clickedDragEntryItem = null;
                this.setState({
                    mounted: mounted,
                    disabled: disabled,
                    interval: interval,
                    clickedDragEntryItem: clickedDragEntryItem
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
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
    "ignoredReferences"
]);
_define_property(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easydraganddrop.dropMixins);
Object.assign(Explorer.prototype, _explorer.default);
Object.assign(Explorer.prototype, _dragEntryItem.default);
var _default = (0, _easywithstyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IERyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgZXhwbG9yZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V4cGxvcmVyXCI7XG5pbXBvcnQgZHJhZ0VudHJ5SXRlbU1peGlucyBmcm9tIFwiLi9taXhpbnMvZHJhZ0VudHJ5SXRlbVwiO1xuaW1wb3J0IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgUEVSSU9ELCBET1VCTEVfQ0xJQ0tfREVMQVkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0sIHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMsIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHksIHRvcG1vc3QpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY29sbGFwc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVBhdGgoKSB7XG4gICAgbGV0IHBhdGg7XG5cbiAgICBjb25zdCBuYW1lID0gUEVSSU9ELCAgLy8vXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgcGF0aCA9IG5hbWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoLCBuYW1lKTtcblxuICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBzZWxlY3RlZERyYWdFbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgbmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBjcmVhdGVGaWxlUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5jcmVhdGVQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGVEaXJlY3RvcnlQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmNyZWF0ZVBhdGgoKSxcbiAgICAgICAgICByZWFkT25seSA9IGZhbHNlLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IGZhbHNlLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBwYXRoLCAgLy8vXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jcmVhdGUoKTtcbiAgfVxuXG4gIHJlbmFtZVNlbGVjdGVkUGF0aCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0ucmVuYW1lKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRQYXRoKCkge1xuICAgIGxldCBzZWxlY3RlZFBhdGggPSBudWxsO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREcmFnRW50cnlJdGVtUGF0aCA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgIHNlbGVjdGVkUGF0aCA9IHNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFBhdGg7XG4gIH1cblxuICBjbGlja0RyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGNsaWNrZWREcmFnRW50cnlJdGVtID0gdGhpcy5nZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IGNsaWNrZWREcmFnRW50cnlJdGVtKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgICB0aGlzLmNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVsYXkgPSBET1VCTEVfQ0xJQ0tfREVMQVksXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgICAgICAgICBkcmFnRW50cnlJdGVtLmRlbGF5ZWRDbGljaygpO1xuICAgICAgICAgICAgfSwgZGVsYXkpLFxuICAgICAgICAgICAgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMuc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcblxuICAgIHRoaXMuY2xlYXJDbGlja2VkRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbS5kZWxheWVkRG91YmxlQ2xpY2soKTtcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgICAgZXhwbG9yZXIgPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgIGNvbnN0IHBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kZXNlbGVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUGF0aHMoKTtcblxuICAgICAgdGhpcy5zZWxlY3RQYXRoKHBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkID0gIXNlbGVjdGVkOyAvLy9cblxuICAgIGNvbnN0IHJlYWRPbmx5ID0gZHJhZ0VudHJ5SXRlbS5pc1JlYWRPbmx5KCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICB0aGlzLmNhbGxTZWxlY3RIYW5kbGVycyhwYXRoLCBzZWxlY3RlZCwgcmVhZE9ubHksIGV4cGxvcmVyKTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5yZW5hbWVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5jcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW0pLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMubW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuYW1lRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVuYW1lSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxDcmVhdGVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICB9XG5cbiAgZW5hYmxlRHJhZygpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5lbmFibGVEcmFnKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlRHJhZygpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kaXNhYmxlRHJhZygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGNsZWFyQ2xpY2tlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgY2xpY2tlZERyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRDbGlja2VkRHJhZ0VudHJ5SXRlbShjbGlja2VkRHJhZ0VudHJ5SXRlbSk7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgY29uc3QgeyBtb3VudGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbW91bnRlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgZ2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBjbGlja2VkRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGNsaWNrZWREcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0TW91bnRlZChtb3VudGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtb3VudGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q2xpY2tlZERyYWdFbnRyeUl0ZW0oY2xpY2tlZERyYWdFbnRyeUl0ZW0pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICAgICAgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIGNsaWNrZWREcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW91bnRlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaW50ZXJ2YWwsXG4gICAgICBjbGlja2VkRHJhZ0VudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcblxuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vblNlbGVjdChzZWxlY3RIYW5kbGVyKTtcblxuICAgIGNvbnN0IG1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRNb3VudGVkKG1vdW50ZWQpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG5cbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9mZk9wZW4ob3BlbkhhbmRsZXIpO1xuXG4gICAgc2VsZWN0SGFuZGxlciAmJiB0aGlzLm9mZlNlbGVjdChzZWxlY3RIYW5kbGVyKTtcblxuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TW91bnRlZChtb3VudGVkKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0U2VsZWN0ZWRQYXRoID0gdGhpcy5nZXRTZWxlY3RlZFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyA9IHRoaXMucmV0cmlldmVGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeVBhdGhzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBjb2xsYXBzZSxcbiAgICAgIGdldFNlbGVjdGVkUGF0aCxcbiAgICAgIHJldHJpZXZlRmlsZVBhdGhzLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlQYXRoc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGV4cGxvcmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiLCJkcm9wSGFuZGxlciIsImFib3J0ZWQiLCJkb25lIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJleHBsb3JlciIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsIkVudHJpZXNMaXN0IiwiY29uc3RydWN0b3IiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVhZE9ubHkiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJ0b3Btb3N0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlUGF0aHMiLCJ0eXBlIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwicGF0aHMiLCJyZWR1Y2UiLCJkcmFnRW50cnlJdGVtUGF0aCIsInBhdGgiLCJwdXNoIiwicmV0cmlldmVGaWxlUGF0aHMiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZVBhdGhzIiwicmV0cmlldmVEaXJlY3RvcnlQYXRocyIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeVBhdGhzIiwiY29sbGFwc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImZvckVhY2giLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZVBhdGgiLCJuYW1lIiwiUEVSSU9EIiwic2VsZWN0ZWREcmFnRW50cnlJdGVtIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJleHBhbmQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImNyZWF0ZUZpbGVQYXRoIiwiZmlsZVBhdGgiLCJhZGRGaWxlUGF0aCIsImNyZWF0ZSIsImNyZWF0ZURpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsInJlbmFtZVNlbGVjdGVkUGF0aCIsInJlbmFtZSIsImdldFNlbGVjdGVkUGF0aCIsInNlbGVjdGVkUGF0aCIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbVBhdGgiLCJjbGlja0RyYWdFbnRyeUl0ZW0iLCJjbGlja2VkRHJhZ0VudHJ5SXRlbSIsImdldENsaWNrZWREcmFnRW50cnlJdGVtIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckNsaWNrZWREcmFnRW50cnlJdGVtIiwiZGVsYXkiLCJET1VCTEVfQ0xJQ0tfREVMQVkiLCJzZXRUaW1lb3V0IiwiZGVsYXllZENsaWNrIiwic2V0SW50ZXJ2YWwiLCJzZXRDbGlja2VkRHJhZ0VudHJ5SXRlbSIsImRlbGF5ZWREb3VibGVDbGljayIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjYWxsT3BlbkhhbmRsZXJzIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJkZXNlbGVjdCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwiaXNSZWFkT25seSIsImNhbGxTZWxlY3RIYW5kbGVycyIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInBhdGhNYXBzIiwiZ2V0UGF0aE1hcHMiLCJyZW5hbWVEcmFnRW50cnlJdGVtcyIsImNyZWF0ZURyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxSZW5hbWVIYW5kbGVyc0FzeW5jIiwicGF0aE1hcCIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJhZGREcmFnRW50cnlJdGVtIiwiY2FsbE1vdmVIYW5kbGVyc0FzeW5jIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsImNhbGxDcmVhdGVIYW5kbGVyc0FzeW5jIiwiZW5hYmxlIiwic2V0RGlzYWJsZWQiLCJlbmFibGVEcmFnIiwiZGlzYWJsZSIsImRpc2FibGVEcmFnIiwiaXNNb3VudGVkIiwibW91bnRlZCIsImdldFN0YXRlIiwic2V0TW91bnRlZCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJlbmFibGVEcm9wIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcmFnT3ZlciIsIm9mZkRyb3AiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJkcmFnRW50cnlJdGVtTWl4aW5zIiwid2l0aFN0eWxlIiwiZXhwbG9yZXJQYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvb0JBOzs7ZUFBQTs7O29FQWxvQnNCO29CQUVFOytCQUNHO3lCQUNHOzhEQUVOOzJEQUNFOytEQUNDO29FQUNLOytEQUNFO2dFQUNFO29FQUNHO3FFQUNFO3NCQUVUO3lCQUNXOzBCQUMrQjt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQVFBLG1CQUF3REMsd0JBQWEsQ0FBckVELGtCQUFrQkUsb0NBQXNDRCx3QkFBYSxDQUFuREM7QUFFMUIsSUFBQSxBQUFNQyx5QkF3bUJILEFBeG1CSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLG1CQUFrQixTQUFDQyxhQUFhQztZQUM5QixJQUFNQywyQkFBNEJGLEFBQVcsWUFBWEEsYUFBdUJHLGFBQWE7WUFFdEUsSUFBSSxDQUFDRCwwQkFBMEI7Z0JBQzdCO1lBQ0Y7WUFFQSxJQUFNRSxnQkFBZ0JKLGFBQ2hCSyx3QkFBd0JELGNBQWNFLFdBQVcsSUFDakRDLCtCQUErQixNQUFLQyxpQkFBaUIsQ0FBQ0g7WUFFNUQsSUFBSUUsOEJBQThCO2dCQUNoQztZQUNGO1lBRUEsSUFBTUUsa0JBQWtCLE1BQUtDLHVCQUF1QixJQUM5Q0Msb0JBQW9CUCxjQUFjUSxPQUFPO1lBRS9DLElBQUlDLHNCQUFzQkosZ0JBQWdCSyxPQUFPLElBQzdDQywwQkFBMEJOLGdCQUFnQkgsV0FBVyxJQUNyRFUsOEJBQThCSCxxQkFDOUJJLGtDQUFrQ0YseUJBQXlCLEdBQUc7WUFFbEVGLHNCQUFzQkYsbUJBQWtCLEdBQUc7WUFFM0NJLDJEQUFpQyxHQUFHO1lBRXBDLElBQUksQUFBQ0EsNEJBQTRCRSxtQ0FBcUNKLHdCQUF3QkcsNkJBQThCO2dCQUMxSCxJQUFNRSxvQkFBb0JkLGNBQWNlLE9BQU87Z0JBRS9DRixnQ0FBZ0NHLFlBQVk7Z0JBRTVDTCx3QkFBd0JNLFNBQVMsQ0FBQ1IscUJBQXFCSztZQUN6RDtRQUNGO1FBRUFJLGtEQUFBQSxlQUFjLFNBQUN0QixhQUFhdUIsU0FBU3RCLFNBQVN1QjtZQUM1QyxJQUFNdEIsMkJBQTRCRixBQUFXLFlBQVhBLGFBQXVCRyxhQUFhO1lBRXRFLElBQUksQ0FBQ0QsMEJBQTBCO2dCQUM3QnNCO2dCQUVBO1lBQ0Y7WUFFQSxJQUFNZixrQkFBa0IsTUFBS0MsdUJBQXVCLElBQzlDSywwQkFBMEJOLGdCQUFnQkgsV0FBVztZQUUzRCxJQUFJaUIsU0FBUztnQkFDWFIsd0JBQXdCSyxZQUFZO2dCQUVwQ0k7Z0JBRUE7WUFDRjtZQUVBLElBQU1wQixnQkFBZ0JKLGFBQWMsR0FBRztZQUV2Q2Usd0JBQXdCVSxpQkFBaUIsQ0FBQ3JCLGVBQWVvQjtRQUMzRDs7O2tCQTVESTFCOztZQThESlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1vQixXQUFXLElBQUksRUFBRyxHQUFHO2dCQUUzQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQTZCLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSwrQkFBZixpQkFBckJDLFdBQUFBLG9EQUFZO2dCQUVwQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQU0sQUFBRUMsZ0JBQWdCLElBQUksQ0FBQ0MsV0FBVyxDQUFoQ0Q7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUN2QixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCa0IsUUFBUTtnQkFDeEIsSUFBTUcsWUFBWUgsU0FBU0MsWUFBWSxJQUNqQ00sb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQyxxQ0FBcUNGLGtCQUFrQkcsUUFBUSxDQUFDUCxZQUNoRVEsa0JBQWtCRixvQ0FBb0MsR0FBRztnQkFFL0QsT0FBT0U7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFtQyxtQkFBQSxJQUFJLENBQUNOLFVBQVUsdUNBQWYsaUJBQTNCSyxtQkFBQUEsb0VBQW9CLEVBQUU7Z0JBRTlCLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCQyxRQUFRO2dCQUNqQyxJQUFNLEFBQUVDLDBCQUEwQixJQUFJLENBQUNSLFdBQVcsQ0FBMUNRO2dCQUVSLE9BQU9BO1lBQ1I7OztZQUVDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyw0QkFBNEIsSUFBSSxDQUFDVixXQUFXLENBQTVDVTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QkosUUFBUSxFQUFFSyxPQUFPO2dCQUMvQyxJQUFNLEFBQUVDLCtCQUErQixJQUFJLENBQUNiLFdBQVcsQ0FBL0NhO2dCQUVSLE9BQU9BO1lBQ1I7OztZQUVDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxpQ0FBaUMsSUFBSSxDQUFDZixXQUFXLENBQWpEZTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLElBQUk7Z0JBQ2hCLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLHNCQUFzQixJQUM1Q0MsUUFBUUYsZUFBZUcsTUFBTSxDQUFDLFNBQUNELE9BQU9oRDtvQkFDcEMsSUFBTWMsb0JBQW9CZCxjQUFjZSxPQUFPO29CQUUvQyxJQUFJRCxzQkFBc0IrQixNQUFNO3dCQUM5QixJQUFNSyxvQkFBb0JsRCxjQUFjVSxPQUFPLElBQ3pDeUMsT0FBT0QsbUJBQW1CLEdBQUc7d0JBRW5DRixNQUFNSSxJQUFJLENBQUNEO29CQUNiO29CQUVBLE9BQU9IO2dCQUNULEdBQUcsRUFBRTtnQkFFWCxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLE9BQU9TLHFDQUF5QixFQUNoQ04sUUFBUSxJQUFJLENBQUNKLGFBQWEsQ0FBQ0MsT0FDM0JVLFlBQVlQLE9BQU8sR0FBRztnQkFFNUIsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxPQUFPWSwwQ0FBOEIsRUFDckNULFFBQVEsSUFBSSxDQUFDSixhQUFhLENBQUNDLE9BQzNCYSxpQkFBaUJWLE9BQU8sR0FBRztnQkFFakMsT0FBT1U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyw4QkFBOEIsSUFBSSxDQUFDQyxtQ0FBbUM7Z0JBRTVFRCw0QkFBNEJFLE9BQU8sQ0FBQyxTQUFDQztvQkFDbkNBLDJCQUEyQkosUUFBUTtnQkFDckM7WUFDRjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJYjtnQkFFSixJQUFNYyxPQUFPQyxpQkFBTSxFQUNiQyx3QkFBd0IsSUFBSSxDQUFDQyw2QkFBNkI7Z0JBRWhFLElBQUlELDBCQUEwQixNQUFNO29CQUNsQ2hCLE9BQU9jLE1BQU8sR0FBRztnQkFDbkIsT0FBTztvQkFDTCxJQUFNSSxrREFBa0RGLHNCQUFzQkcsNEJBQTRCO29CQUUxRyxJQUFJRCxpREFBaUQ7d0JBQ25ELElBQU1OLDZCQUE2QkksdUJBQzdCSSxpQ0FBaUNSLDJCQUEyQnJELE9BQU87d0JBRXpFeUMsT0FBTzVELGlCQUFpQmdGLGdDQUFnQ047d0JBRXhERSxzQkFBc0JLLE1BQU07b0JBQzlCLE9BQU87d0JBQ0wsSUFBTUMsd0JBQXdCTix1QkFDeEJPLDRCQUE0QkQsc0JBQXNCL0QsT0FBTyxJQUN6RGlFLGlEQUFpRGxGLGtDQUFrQ2lGO3dCQUV6RnZCLE9BQU81RCxpQkFBaUJvRixnREFBZ0RWO29CQUMxRTtnQkFDRjtnQkFFQSxPQUFPZDtZQUNUOzs7WUFFQXlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNekIsT0FBTyxJQUFJLENBQUNhLFVBQVUsSUFDdEJhLFdBQVcxQixNQUNYc0Isd0JBQXdCLElBQUksQ0FBQ0ssV0FBVyxDQUFDRDtnQkFFL0NKLHNCQUFzQk0sTUFBTTtZQUM5Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNN0IsT0FBTyxJQUFJLENBQUNhLFVBQVUsSUFDdEI3QixXQUFXLE9BQ1g4QyxZQUFZLE9BQ1pDLGdCQUFnQi9CLE1BQ2hCWSw2QkFBNkIsSUFBSSxDQUFDb0IsZ0JBQWdCLENBQUNELGVBQWUvQyxVQUFVOEM7Z0JBRWxGbEIsMkJBQTJCZ0IsTUFBTTtZQUNuQzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsd0JBQXdCLElBQUksQ0FBQ0MsNkJBQTZCO2dCQUVoRSxJQUFJRCwwQkFBMEIsTUFBTTtvQkFDbENBLHNCQUFzQmtCLE1BQU07Z0JBQzlCO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTXBCLHdCQUF3QixJQUFJLENBQUNDLDZCQUE2QjtnQkFFaEUsSUFBSUQsMEJBQTBCLE1BQU07b0JBQ2xDLElBQU1xQiw0QkFBNEJyQixzQkFBc0J6RCxPQUFPO29CQUUvRDZFLGVBQWVDLDJCQUEyQixHQUFHO2dCQUMvQztnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQnpGLGFBQWE7O2dCQUM5QixJQUFNMEYsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJM0Ysa0JBQWtCMEYsc0JBQXNCO29CQUMxQyxJQUFNRSxXQUFXLElBQUksQ0FBQ0MsV0FBVztvQkFFakNDLGNBQWNGO29CQUVkLElBQUksQ0FBQ0UsYUFBYTtvQkFFbEIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBQ2hDO2dCQUVBLElBQU1ILFlBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUVqQyxJQUFJRCxjQUFhLE1BQU07b0JBQ3JCLElBQU1JLFFBQVFDLDZCQUFrQixFQUMxQkwsWUFBV00sV0FBVzt3QkFDcEIsTUFBS0osYUFBYTt3QkFFbEIsTUFBS0MseUJBQXlCO3dCQUU5Qi9GLGNBQWNtRyxZQUFZO29CQUM1QixHQUFHSCxRQUNITix3QkFBdUIxRixlQUFlLEdBQUc7b0JBRS9DLElBQUksQ0FBQ29HLFdBQVcsQ0FBQ1I7b0JBRWpCLElBQUksQ0FBQ1MsdUJBQXVCLENBQUNYO29CQUU3QjtnQkFDRjtnQkFFQUksY0FBY0Y7Z0JBRWQsSUFBSSxDQUFDRSxhQUFhO2dCQUVsQixJQUFJLENBQUNDLHlCQUF5QjtnQkFFOUIvRixjQUFjc0csa0JBQWtCO1lBQ2xDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQjlCLHFCQUFxQjtnQkFDN0MsSUFBTStCLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJRCxVQUFVO29CQUNaO2dCQUNGO2dCQUVBLElBQU05Qiw0QkFBNEJELHNCQUFzQi9ELE9BQU8sSUFDekRtRSxXQUFXSCwyQkFDWHBELFdBQVdtRCxzQkFBc0J2RSxXQUFXO2dCQUVsRCxJQUFJLENBQUN3RyxnQkFBZ0IsQ0FBQzdCLFVBQVV2RDtZQUNsQzs7O1lBRUFxRixLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCM0csYUFBYTtnQkFDekMsSUFBTXdHLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJRCxVQUFVO29CQUNaO2dCQUNGO2dCQUVBLElBQUlJLFdBQVc1RyxjQUFjNkcsVUFBVTtnQkFFdkMsSUFBTTFELE9BQU9uRCxjQUFjVSxPQUFPO2dCQUVsQyxJQUFJa0csVUFBVTtvQkFDWjVHLGNBQWM4RyxRQUFRO2dCQUN4QixPQUFPO29CQUNMLElBQUksQ0FBQ0MsZ0JBQWdCO29CQUVyQixJQUFJLENBQUNDLFVBQVUsQ0FBQzdEO2dCQUNsQjtnQkFFQXlELFdBQVcsQ0FBQ0EsVUFBVSxHQUFHO2dCQUV6QixJQUFNekUsV0FBV25DLGNBQWNpSCxVQUFVLElBQ25DM0YsV0FBV3RCLGNBQWNFLFdBQVc7Z0JBRTFDLElBQUksQ0FBQ2dILGtCQUFrQixDQUFDL0QsTUFBTXlELFVBQVV6RSxVQUFVYjtZQUNwRDs7O1lBRUE2RixLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CbkgsYUFBYSxFQUFFb0IsSUFBSTtnQkFDckMsSUFBTWdHLGtCQUFrQkMsSUFBQUEscUNBQTRCLEVBQUNySCxnQkFDL0NzSCxrQkFBa0JDLElBQUFBLHFDQUE0QixFQUFDdkgsZ0JBQy9Dd0gsV0FBV3hILGNBQWN5SCxXQUFXLENBQUNMLGlCQUFpQkUsa0JBQ3REaEcsV0FBVyxJQUFJLEVBQUcsR0FBRztnQkFFM0IsSUFBSSxDQUFDb0csb0JBQW9CLENBQUNGLFVBQVVsRyxVQUFVO29CQUM1Q0Y7Z0JBQ0Y7WUFDRjs7O1lBRUF1RyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CM0gsYUFBYSxFQUFFb0IsSUFBSTtnQkFDckMsSUFBTWdHLGtCQUFrQkMsSUFBQUEscUNBQTRCLEVBQUNySCxnQkFDL0NzSCxrQkFBa0JDLElBQUFBLHFDQUE0QixFQUFDdkgsZ0JBQy9Dd0gsV0FBV3hILGNBQWN5SCxXQUFXLENBQUNMLGlCQUFpQkUsa0JBQ3REaEcsV0FBVyxJQUFJLEVBQUcsR0FBRztnQkFFM0IsSUFBSSxDQUFDc0csb0JBQW9CLENBQUNKLFVBQVVsRyxVQUFVO29CQUM1Q0Y7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JyQixhQUFhLEVBQUVvQixJQUFJOztnQkFDbkMsSUFBTWYsa0JBQWtCLElBQUksQ0FBQ0MsdUJBQXVCLElBQzlDTCx3QkFBd0JELGNBQWNFLFdBQVcsSUFDakRrSCxrQkFBa0JDLElBQUFBLHFDQUE0QixFQUFDckgsZ0JBQy9Dc0gsa0JBQWtCQyxJQUFBQSxxQ0FBNEIsRUFBQ2xILGtCQUMvQ21ILFdBQVd4SCxjQUFjeUgsV0FBVyxDQUFDTCxpQkFBaUJFLGtCQUN0RGhHLFdBQVdyQix1QkFBd0IsR0FBRztnQkFFNUMsSUFBSSxDQUFDNEgsa0JBQWtCLENBQUNMLFVBQVVsRyxVQUFVO29CQUMxQyxNQUFLTixZQUFZO29CQUVqQkk7Z0JBQ0Y7WUFDRjs7O1lBRUFzRyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCRixRQUFRLEVBQUVsRyxRQUFRLEVBQUVGLElBQUk7O2dCQUMzQyxJQUFJLENBQUMwRyx1QkFBdUIsQ0FBQ04sVUFBVWxHLFVBQVU7b0JBQy9Da0csU0FBUzFELE9BQU8sQ0FBQyxTQUFDaUU7d0JBQ2hCLE1BQUtDLG1CQUFtQixDQUFDRCxTQUFTekc7b0JBQ3BDO29CQUVBa0csU0FBUzFELE9BQU8sQ0FBQyxTQUFDaUU7d0JBQ2hCLE1BQUtFLGdCQUFnQixDQUFDRixTQUFTekc7b0JBQ2pDO29CQUVBRjtnQkFDRjtZQUNGOzs7WUFFQXlHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJMLFFBQVEsRUFBRWxHLFFBQVEsRUFBRUYsSUFBSTs7Z0JBQ3pDLElBQUksQ0FBQzhHLHFCQUFxQixDQUFDVixVQUFVbEcsVUFBVTtvQkFDN0NrRyxTQUFTMUQsT0FBTyxDQUFDLFNBQUNpRTt3QkFDaEIsTUFBS0MsbUJBQW1CLENBQUNELFNBQVN6RztvQkFDcEM7b0JBRUFrRyxTQUFTMUQsT0FBTyxDQUFDLFNBQUNpRTt3QkFDaEIsTUFBS0UsZ0JBQWdCLENBQUNGLFNBQVN6RztvQkFDakM7b0JBRUFGO2dCQUNGO1lBQ0Y7OztZQUVBK0csS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQlgsUUFBUSxFQUFFbEcsUUFBUSxFQUFFRixJQUFJOztnQkFDM0MsSUFBSSxDQUFDZ0gsdUJBQXVCLENBQUNaLFVBQVVsRyxVQUFVO29CQUMvQ2tHLFNBQVMxRCxPQUFPLENBQUMsU0FBQ2lFO3dCQUNoQixNQUFLQyxtQkFBbUIsQ0FBQ0QsU0FBU3pHO29CQUNwQztvQkFFQWtHLFNBQVMxRCxPQUFPLENBQUMsU0FBQ2lFO3dCQUNoQixNQUFLRSxnQkFBZ0IsQ0FBQ0YsU0FBU3pHO29CQUNqQztvQkFFQUY7Z0JBQ0Y7WUFDRjs7O1lBRUF3RyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCSixRQUFRLEVBQUVsRyxRQUFRLEVBQUVGLElBQUk7O2dCQUMzQyxJQUFJLENBQUNpSCx1QkFBdUIsQ0FBQ2IsVUFBVWxHLFVBQVU7b0JBQy9Da0csU0FBUzFELE9BQU8sQ0FBQyxTQUFDaUU7d0JBQ2hCLE1BQUtDLG1CQUFtQixDQUFDRCxTQUFTekc7b0JBQ3BDO29CQUVBa0csU0FBUzFELE9BQU8sQ0FBQyxTQUFDaUU7d0JBQ2hCLE1BQUtFLGdCQUFnQixDQUFDRixTQUFTekc7b0JBQ2pDO29CQUVBRjtnQkFDRjtZQUNGOzs7WUFFQWtILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNOUIsV0FBVztnQkFFakIsSUFBSSxDQUFDK0IsV0FBVyxDQUFDL0I7Z0JBRWpCLElBQUksQ0FBQ2dDLFVBQVU7WUFDakI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpDLFdBQVc7Z0JBRWpCLElBQUksQ0FBQytCLFdBQVcsQ0FBQy9CO2dCQUVqQixJQUFJLENBQUNrQyxXQUFXO1lBQ2xCOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0xRixpQkFBaUIsSUFBSSxDQUFDQyxzQkFBc0I7Z0JBRWxERCxlQUFlZ0IsT0FBTyxDQUFDLFNBQUM5RDtvQkFDdEJBLGNBQWN3SSxVQUFVO2dCQUMxQjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU01RixpQkFBaUIsSUFBSSxDQUFDQyxzQkFBc0I7Z0JBRWxERCxlQUFlZ0IsT0FBTyxDQUFDLFNBQUM5RDtvQkFDdEJBLGNBQWMwSSxXQUFXO2dCQUMzQjtZQUNGOzs7WUFFQTVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXO2dCQUVqQixJQUFJLENBQUNRLFdBQVcsQ0FBQ1I7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsdUJBQXVCO2dCQUU3QixJQUFJLENBQUNXLHVCQUF1QixDQUFDWDtZQUMvQjs7O1lBRUFpRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxVQUFZLElBQUksQ0FBQ0MsUUFBUSxHQUF6QkQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFuQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxXQUFhLElBQUksQ0FBQ3FDLFFBQVEsR0FBMUJyQztnQkFFUixPQUFPQTtZQUNUOzs7WUFFQVgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsV0FBYSxJQUFJLENBQUNpRCxRQUFRLEdBQTFCakQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELHVCQUF5QixJQUFJLENBQUNtRCxRQUFRLEdBQXRDbkQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFvRCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0YsT0FBTztnQkFDaEIsSUFBSSxDQUFDRyxXQUFXLENBQUM7b0JBQ2ZILFNBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWS9CLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ3VDLFdBQVcsQ0FBQztvQkFDZnZDLFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVIsUUFBUTtnQkFDbEIsSUFBSSxDQUFDbUQsV0FBVyxDQUFDO29CQUNmbkQsVUFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JYLG9CQUFvQjtnQkFDMUMsSUFBSSxDQUFDcUQsV0FBVyxDQUFDO29CQUNmckQsc0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBc0QsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFVBQVUsT0FDVnBDLFdBQVcsT0FDWFosV0FBVyxNQUNYRix1QkFBdUI7Z0JBRTdCLElBQUksQ0FBQ3VELFFBQVEsQ0FBQztvQkFDWkwsU0FBQUE7b0JBQ0FwQyxVQUFBQTtvQkFDQVosVUFBQUE7b0JBQ0FGLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXdELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFxQyxtQkFBQSxJQUFJLENBQUMxSCxVQUFVLEVBQTVDMkgsU0FBNkIsaUJBQTdCQSxRQUFRQyxTQUFxQixpQkFBckJBLFFBQVFDLFdBQWEsaUJBQWJBLFVBQ2xCQyxjQUFjSCxRQUNkSSxjQUFjSCxRQUNkSSxnQkFBZ0JILFVBQVUsR0FBRztnQkFFbkMsSUFBSSxDQUFDSSxVQUFVO2dCQUVmLElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQy9KLGVBQWU7Z0JBRXBDLElBQUksQ0FBQ2dLLE1BQU0sQ0FBQyxJQUFJLENBQUN6SSxXQUFXO2dCQUU1Qm9JLGVBQWUsSUFBSSxDQUFDSCxNQUFNLENBQUNHO2dCQUUzQkMsZUFBZSxJQUFJLENBQUNILE1BQU0sQ0FBQ0c7Z0JBRTNCQyxpQkFBaUIsSUFBSSxDQUFDSCxRQUFRLENBQUNHO2dCQUUvQixJQUFNWixVQUFVO2dCQUVoQixJQUFJLENBQUNFLFVBQVUsQ0FBQ0Y7WUFDbEI7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQXFDLG1CQUFBLElBQUksQ0FBQ3BJLFVBQVUsRUFBNUMySCxTQUE2QixpQkFBN0JBLFFBQVFDLFNBQXFCLGlCQUFyQkEsUUFBUUMsV0FBYSxpQkFBYkEsVUFDbEJDLGNBQWNILFFBQ2RJLGNBQWNILFFBQ2RJLGdCQUFnQkgsVUFBVSxHQUFHO2dCQUVuQyxJQUFJLENBQUNRLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ25LLGVBQWU7Z0JBRXJDLElBQUksQ0FBQ29LLE9BQU8sQ0FBQyxJQUFJLENBQUM3SSxXQUFXO2dCQUU3Qm9JLGVBQWUsSUFBSSxDQUFDVSxPQUFPLENBQUNWO2dCQUU1QkMsZUFBZSxJQUFJLENBQUNVLE9BQU8sQ0FBQ1Y7Z0JBRTVCQyxpQkFBaUIsSUFBSSxDQUFDVSxTQUFTLENBQUNWO2dCQUVoQyxJQUFNWixVQUFVO2dCQUVoQixJQUFJLENBQUNFLFVBQVUsQ0FBQ0Y7WUFDbEI7OztZQUVBdUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQU03SSxXQUFXLElBQUksRUFBRyxHQUFHO2dCQUUzQixxQkFFQyxvQkFBQ0ssZ0JBQVc7b0JBQUNMLFVBQVVBO29CQUFVa0IsU0FBQUE7O1lBR3BDOzs7WUFFQzRILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QjNHLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUM0RyxJQUFJLENBQUMsSUFBSSxHQUNsQ2pGLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQ2lGLElBQUksQ0FBQyxJQUFJLEdBQ2hEbEgsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNrSCxJQUFJLENBQUMsSUFBSSxHQUNwRC9HLHlCQUF5QixJQUFJLENBQUNBLHNCQUFzQixDQUFDK0csSUFBSSxDQUFDLElBQUk7Z0JBRXBFLE9BQVEsd0NBQ0hGO29CQUNIMUcsVUFBQUE7b0JBQ0EyQixpQkFBQUE7b0JBQ0FqQyxtQkFBQUE7b0JBQ0FHLHdCQUFBQTs7WUFFSjs7O1lBRUFnSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0MsSUFBSSxDQUFDQyxhQUFhO2dCQUVqQixJQUFJLENBQUN6QixlQUFlO1lBQ3ZCOzs7V0E3a0JLdEo7cUJBQWlCZ0wsYUFBTztBQStrQjdCLGlCQS9rQktoTCxVQStrQkVpQyxlQUFjQSxnQkFBVztBQUUvQixpQkFqbEJJakMsVUFpbEJHMEMseUJBQXdCQSxpQkFBcUI7QUFFcEQsaUJBbmxCSTFDLFVBbWxCRzRDLDJCQUEwQkEsa0JBQXVCO0FBRXhELGlCQXJsQkk1QyxVQXFsQkcrQyw4QkFBNkJBLHNCQUEwQjtBQUU5RCxpQkF2bEJJL0MsVUF1bEJHaUQsZ0NBQStCQSx1QkFBNEI7QUFFbEUsaUJBemxCSWpELFVBeWxCR2lMLFdBQVU7QUFFakIsaUJBM2xCSWpMLFVBMmxCR2tMLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxpQkFubUJJbEwsVUFtbUJHbUwscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRkMsT0FBT0MsTUFBTSxDQUFDdEwsU0FBU3VMLFNBQVMsRUFBRUMsMkJBQVU7QUFDNUNILE9BQU9DLE1BQU0sQ0FBQ3RMLFNBQVN1TCxTQUFTLEVBQUVFLGlCQUFjO0FBQ2hESixPQUFPQyxNQUFNLENBQUN0TCxTQUFTdUwsU0FBUyxFQUFFRyxzQkFBbUI7SUFFckQsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzNMLDZCQUVaNEwsdUJBQWUifQ==