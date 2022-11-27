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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./list/entries"));
var _drag = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag"));
var _explorer = /*#__PURE__*/ _interopRequireDefault(require("./mixins/explorer"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _styles = require("./styles");
var _entryTypes = require("./entryTypes");
var _pathMap = require("./utilities/pathMap");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
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
function _objectSpreadProps(target, source) {
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  padding: ",
        "; \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
    var _super = _createSuper(Explorer);
    function Explorer(selector, mounted) {
        _classCallCheck(this, Explorer);
        var _this;
        _this = _super.call(this, selector);
        _defineProperty(_assertThisInitialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
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
        _defineProperty(_assertThisInitialized(_this), "dragOverHandler", function(dragElement, element) {
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
            markerEntryItemExplorer = _assertThisInitialized(_this); ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
        _this.mounted = mounted;
        return _this;
    }
    _createClass(Explorer, [
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
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath; ///
                this.callOpenHandlers(filePath);
            }
        },
        {
            key: "selectDragEntryItem",
            value: function selectDragEntryItem(dragEntryItem) {
                var path = dragEntryItem.getPath();
                var selected = dragEntryItem.isSelected();
                if (selected) {
                    dragEntryItem.deselect();
                } else {
                    this.deselectAllPaths();
                    this.selectPath(path);
                }
                selected = !selected; ///
                this.callSelectHandlers(path, selected);
            }
        },
        {
            key: "renameDragEntryItem",
            value: function renameDragEntryItem(dragEntryItem, done) {
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = (0, _pathMap.targetEntryPathFromEntryItem)(dragEntryItem), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.moveDragEntryItems(pathMaps, explorer, function() {
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
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callMoveHandlersAsync(pathMaps, function() {
                    pathMaps.forEach(function(pathMap) {
                        return _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        return _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "removeFileNameDragEntryItem",
            value: function removeFileNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                var filePath = sourceEntryPath; ///
                explorer.removeFilePath(filePath);
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                var directoryPath = sourceEntryPath; ///
                explorer.removeDirectoryPath(directoryPath);
            }
        },
        {
            key: "addDragEntryItem",
            value: function addDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.addDirectoryNameDragEntryItem(pathMap, explorer) : this.addFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "addFileNameDragEntryItem",
            value: function addFileNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                if (targetEntryPath === null) {
                    return;
                }
                var filePath = targetEntryPath; ///
                this.addFilePath(filePath);
            }
        },
        {
            key: "addDirectoryNameDragEntryItem",
            value: function addDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                if (targetEntryPath === null) {
                    return;
                }
                var collapsed = pathMap.collapsed;
                var directoryPath = targetEntryPath; ///
                this.addDirectoryPath(directoryPath, collapsed);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, onMove = _this_properties.onMove, onOpen = _this_properties.onOpen, onSelect = _this_properties.onSelect, moveHandler = onMove, openHandler = onOpen, selectHandler = onSelect; ///
                this.mounted = true;
                this.enableDrop();
                this.onDrop(this.dropHandler);
                this.onDragOver(this.dragOverHandler);
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
                this.offDrop(this.dropHandler);
                this.offDragOver(this.dragOverHandler);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
                selectHandler && this.offSelect(selectHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorer = this;
                return /*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), retrieveFilePaths = this.retrieveFilePaths.bind(this), retrieveDirectoryPaths = this.retrieveDirectoryPaths.bind(this);
                return _objectSpreadProps(_objectSpread({}, context), {
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
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Explorer, "EntriesList", _entries.default);
_defineProperty(Explorer, "FileNameDragEntryItem", _fileName.default);
_defineProperty(Explorer, "FileNameMarkerEntryItem", _fileName1.default);
_defineProperty(Explorer, "DirectoryNameDragEntryItem", _directoryName.default);
_defineProperty(Explorer, "DirectoryNameMarkerEntryItem", _directoryName1.default);
_defineProperty(Explorer, "tagName", "div");
_defineProperty(Explorer, "ignoredProperties", [
    "onMove",
    "onOpen",
    "onSelect",
    "reference",
    "ignoredReferences"
]);
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easyDragAndDrop.dropMixins);
Object.assign(Explorer.prototype, _explorer.default);
var _default = (0, _easyWithStyle.default)(Explorer)(_templateObject(), _styles.explorerPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBleHBsb3Jlck1peGlucyBmcm9tIFwiLi9taXhpbnMvZXhwbG9yZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0sIHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZDtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCksXG4gICAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5OyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbiAgfVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlUGF0aHModHlwZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgcGF0aHMgPSBkcmFnRW50cnlJdGVtcy5yZWR1Y2UoKHBhdGhzLCBkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGRyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHBhdGhzO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsXG4gICAgICAgICAgcGF0aHMgPSB0aGlzLnJldHJpZXZlUGF0aHModHlwZSksXG4gICAgICAgICAgZmlsZVBhdGhzID0gcGF0aHM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSxcbiAgICAgICAgICBwYXRocyA9IHRoaXMucmV0cmlldmVQYXRocyh0eXBlKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRocyA9IHBhdGhzOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIG9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgIHRoaXMuY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCk7XG4gIH1cblxuICBzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBwYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kZXNlbGVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0QWxsUGF0aHMoKTtcblxuICAgICAgdGhpcy5zZWxlY3RQYXRoKHBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdGVkID0gIXNlbGVjdGVkOyAvLy9cblxuICAgIHRoaXMuY2FsbFNlbGVjdEhhbmRsZXJzKHBhdGgsIHNlbGVjdGVkKTtcbiAgfVxuXG4gIHJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSksXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLmFkZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICAgIHRoaXMuYWRkRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIGFkZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgYWRkRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gcGF0aE1hcDtcblxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSB0YXJnZXRFbnRyeVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uT3Blbiwgb25TZWxlY3QgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW4sIC8vL1xuICAgICAgICAgIHNlbGVjdEhhbmRsZXIgPSBvblNlbGVjdDsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlcik7XG5cbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9uT3BlbihvcGVuSGFuZGxlcik7XG5cbiAgICBzZWxlY3RIYW5kbGVyICYmIHRoaXMub25TZWxlY3Qoc2VsZWN0SGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuLCBvblNlbGVjdCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlLCAvLy9cbiAgICAgICAgICBvcGVuSGFuZGxlciA9IG9uT3BlbiwgLy8vXG4gICAgICAgICAgc2VsZWN0SGFuZGxlciA9IG9uU2VsZWN0OyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZk1vdmUobW92ZUhhbmRsZXIpO1xuXG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcblxuICAgIHNlbGVjdEhhbmRsZXIgJiYgdGhpcy5vZmZTZWxlY3Qoc2VsZWN0SGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpcztcblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXRyaWV2ZUZpbGVQYXRocyA9IHRoaXMucmV0cmlldmVGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeVBhdGhzID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeVBhdGhzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICByZXRyaWV2ZUZpbGVQYXRocyxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5UGF0aHNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uU2VsZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBleHBsb3Jlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICBwYWRkaW5nOiAke2V4cGxvcmVyUGFkZGluZ307IFxuICBcbmA7XG4iXSwibmFtZXMiOlsiRXhwbG9yZXIiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImFkZE1hcmtlciIsImlzTW91bnRlZCIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicHJvcGVydGllcyIsInJlZmVyZW5jZSIsImdldEVudHJpZXNMaXN0IiwiRW50cmllc0xpc3QiLCJjb25zdHJ1Y3RvciIsImlzRGlyZWN0b3J5RW1wdHkiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsImlzRW1wdHkiLCJkaXJlY3RvcnlFbXB0eSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVQYXRocyIsInR5cGUiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRocyIsInJlZHVjZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwicGF0aCIsInB1c2giLCJyZXRyaWV2ZUZpbGVQYXRocyIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlUGF0aHMiLCJyZXRyaWV2ZURpcmVjdG9yeVBhdGhzIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5UGF0aHMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsInNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJkZXNlbGVjdCIsImRlc2VsZWN0QWxsUGF0aHMiLCJzZWxlY3RQYXRoIiwiY2FsbFNlbGVjdEhhbmRsZXJzIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwicGF0aE1hcHMiLCJnZXRQYXRoTWFwcyIsIm1vdmVEcmFnRW50cnlJdGVtcyIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsImZvckVhY2giLCJwYXRoTWFwIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJlbnRyeURpcmVjdG9yeSIsInJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJhZGRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJhZGRGaWxlUGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJkaWRNb3VudCIsIm9uTW92ZSIsIm9uT3BlbiIsIm9uU2VsZWN0IiwibW92ZUhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJvZmZNb3ZlIiwib2ZmT3BlbiIsIm9mZlNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwiZXhwbG9yZXJNaXhpbnMiLCJ3aXRoU3R5bGUiLCJleHBsb3JlclBhZGRpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZhQTs7O2VBQUE7OztrRUEzYXNCO29CQUVFOytCQUNHOzREQUVIO3lEQUNFOzZEQUNDOzZEQUNPOzhEQUNFO2tFQUNHO21FQUNFO3NCQUVUOzBCQUMwQzt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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