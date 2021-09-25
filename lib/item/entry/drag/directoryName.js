"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyDragAndDrop = require("easy-drag-and-drop");
var _name = _interopRequireDefault(require("../../../button/name"));
var _toggle = _interopRequireDefault(require("../../../button/toggle"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
var _directoryName = _interopRequireDefault(require("../../../svg/directoryName"));
var _directoryName1 = _interopRequireDefault(require("../../../div/entryItem/directoryName"));
var _path = require("../../../utilities/path");
var _pathMap = require("../../../utilities/pathMap");
var _options = require("../../../options");
var _types = require("../../../types");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    function DirectoryNameDragEntryItem() {
        _classCallCheck(this, DirectoryNameDragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameDragEntryItem).apply(this, arguments));
    }
    _createClass(DirectoryNameDragEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(entryItem) {
                var before;
                var entryItemType = entryItem.getType();
                switch(entryItemType){
                    case _types.FILE_NAME_DRAG_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        before = true;
                        break;
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        var name = this.getName(), entryItemName = entryItem.getName();
                        before = name.localeCompare(entryItemName) < 0;
                        break;
                }
                return before;
            }
        },
        {
            key: "getPathMap",
            value: function getPathMap(sourcePath, targetPath) {
                var pathMap = _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "getPathMap", this).call(this, sourcePath, targetPath), collapsed = this.isCollapsed(), directory = true;
                Object.assign(pathMap, {
                    collapsed: collapsed,
                    directory: directory
                });
                return pathMap;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var _properties = this.properties, explorer = _properties.explorer;
                return explorer;
            }
        },
        {
            key: "isCollapsed",
            value: function isCollapsed() {
                var entriesListCollapsed = this.isEntriesListCollapsed(), collapsed = entriesListCollapsed; ///
                return collapsed;
            }
        },
        {
            key: "getNameButton",
            value: function getNameButton() {
                var _constructor = this.constructor, NameButton = _constructor.NameButton;
                return NameButton;
            }
        },
        {
            key: "getToggleButton",
            value: function getToggleButton() {
                var _constructor = this.constructor, ToggleButton = _constructor.ToggleButton;
                return ToggleButton;
            }
        },
        {
            key: "getDirectoryNameSVG",
            value: function getDirectoryNameSVG() {
                var _constructor = this.constructor, DirectoryNameSVG = _constructor.DirectoryNameSVG;
                return DirectoryNameSVG;
            }
        },
        {
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourcePath, targetPath, pathMaps) {
                var name = this.getName(), pathMap = this.getPathMap(sourcePath, targetPath);
                pathMaps.push(pathMap);
                sourcePath = (0, _pathMap).adjustSourcePath(sourcePath, name);
                targetPath = (0, _pathMap).adjustTargetPath(targetPath, name);
                this.forEachDragEntryItem(function(dragEntryItem) {
                    dragEntryItem.retrievePathMaps(sourcePath, targetPath, pathMaps);
                });
            }
        },
        {
            key: "setCollapsed",
            value: function setCollapsed(collapsed) {
                collapsed ? this.collapse() : this.expand();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.collapseEntriesList();
                this.collapseToggleButton();
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.expandEntriesList();
                this.expandToggleButton();
            }
        },
        {
            key: "toggle",
            value: function toggle() {
                var collapsed = this.isCollapsed();
                collapsed = !collapsed;
                this.setCollapsed(collapsed);
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement, element, done) {
                var explorer = this.getExplorer(), dragEntryItem = dragElement, markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var collapsed = this.isCollapsed();
                if (collapsed) {
                    return;
                }
                var path = this.getPath(), explorer = this.getExplorer(), dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = explorer.isExplorerIgnored(dragEntryItemExplorer);
                if (dragEntryItemExplorerIgnored) {
                    return;
                }
                var dragIntoTopmostDirectoriesOnlyOptionPresent = explorer.isOptionPresent(_options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION);
                if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
                    var pathTopmostPath = (0, _path).isPathTopmostPath(path);
                    if (!pathTopmostPath) {
                        return;
                    }
                }
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
                var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
                markerEntryItemPath = "".concat(path, "/").concat(dragEntryItemName);
                markerEntryItemExplorer = explorer; ///
                if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                    var dragEntryItemType = dragEntryItem.getType();
                    previousMarkerEntryItemExplorer.removeMarker();
                    markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, collapsed = _properties.collapsed;
                this.setCollapsed(collapsed);
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorer = this.getExplorer(), NameButton = this.getNameButton(), EntriesList = explorer.getEntriesList(), ToggleButton = this.getToggleButton(), DirectoryNameSVG = this.getDirectoryNameSVG();
                return [
                    /*#__PURE__*/ React.createElement(_directoryName1.default, {
                        name: name,
                        NameButton: NameButton,
                        ToggleButton: ToggleButton,
                        DirectoryNameSVG: DirectoryNameSVG
                    }),
                    /*#__PURE__*/ React.createElement(EntriesList, {
                        explorer: explorer
                    }), 
                ];
            }
        }
    ]);
    return DirectoryNameDragEntryItem;
}(_drag.default);
_defineProperty(DirectoryNameDragEntryItem, "NameButton", _name.default);
_defineProperty(DirectoryNameDragEntryItem, "ToggleButton", _toggle.default);
_defineProperty(DirectoryNameDragEntryItem, "DirectoryNameSVG", _directoryName.default);
_defineProperty(DirectoryNameDragEntryItem, "type", _types.DIRECTORY_NAME_DRAG_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameDragEntryItem;
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgaXNQYXRoVG9wbW9zdFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZVBhdGgsIGFkanVzdFRhcmdldFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIH0gZnJvbSBcIi4uLy4uLy4uL29wdGlvbnNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gc3VwZXIuZ2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5ID0gdHJ1ZTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0Y29sbGFwc2VkLFxuXHRcdFx0ZGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRnZXROYW1lQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgTmFtZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBOYW1lQnV0dG9uO1xuXHR9XG5cblx0Z2V0VG9nZ2xlQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgVG9nZ2xlQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIFRvZ2dsZUJ1dHRvbjtcblx0fVxuXG5cdGdldERpcmVjdG9yeU5hbWVTVkcoKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVTVkc7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlUGF0aCA9IGFkanVzdFNvdXJjZVBhdGgoc291cmNlUGF0aCwgbmFtZSk7XG5cdFx0dGFyZ2V0UGF0aCA9IGFkanVzdFRhcmdldFBhdGgodGFyZ2V0UGF0aCwgbmFtZSk7XG5cblx0XHR0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRkcmFnRW50cnlJdGVtLnJldHJpZXZlUGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50LCBkb25lKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LFx0Ly8vXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG5cdH1cblxuXHRkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gZXhwbG9yZXIuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuXHRcdGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZHJhZ0ludG9Ub3Btb3N0RGlyZWN0b3JpZXNPbmx5T3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZX09QVElPTik7XG5cblx0XHRpZiAoZHJhZ0ludG9Ub3Btb3N0RGlyZWN0b3JpZXNPbmx5T3B0aW9uUHJlc2VudCkge1xuXHRcdFx0Y29uc3QgcGF0aFRvcG1vc3RQYXRoID0gaXNQYXRoVG9wbW9zdFBhdGgocGF0aCk7XG5cblx0XHRcdGlmICghcGF0aFRvcG1vc3RQYXRoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcblx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gYCR7cGF0aH0vJHtkcmFnRW50cnlJdGVtTmFtZX1gO1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBleHBsb3JlcjsgIC8vL1xuXG5cdFx0aWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcblx0XHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdE5hbWVCdXR0b24gPSB0aGlzLmdldE5hbWVCdXR0b24oKSxcblx0XHRcdFx0XHRFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCksXG5cdFx0XHRcdFx0VG9nZ2xlQnV0dG9uID0gdGhpcy5nZXRUb2dnbGVCdXR0b24oKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lU1ZHID0gdGhpcy5nZXREaXJlY3RvcnlOYW1lU1ZHKCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVCdXR0b249e05hbWVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IERpcmVjdG9yeU5hbWVTVkc9e0RpcmVjdG9yeU5hbWVTVkd9XG5cdFx0XHQvPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+LFxuXG5cdFx0XSk7XG5cdH1cblxuXHRzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cblx0c3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVlLGdCQUFvQjtJQUV4QixLQUFzQjtJQUNwQixPQUF3QjtJQUN2QixLQUEwQjtJQUN2QixjQUE0QjtJQUNuQixlQUFzQztJQUUxQyxLQUF5QjtJQUNSLFFBQTRCO0lBQ3JCLFFBQWtCO0lBQ3FDLE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUcsMEJBQTBCO2NBQTFCLDBCQUEwQjthQUExQiwwQkFBMEI7OEJBQTFCLDBCQUEwQjtnRUFBMUIsMEJBQTBCOztpQkFBMUIsMEJBQTBCOztZQUM5QyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsU0FBUztvQkFDYixNQUFNO29CQUVKLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTzt1QkFFL0IsYUFBYTt5QkFSMEYsTUFBZ0I7eUJBQWhCLE1BQWdCO3lCQUFoQixNQUFnQjt3QkFZN0gsTUFBTSxHQUFHLElBQUk7O3lCQVpnRyxNQUFnQjs0QkFpQnZILElBQUksUUFBUSxPQUFPLElBQ3RCLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTzt3QkFFcEMsTUFBTSxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxJQUFJLENBQUM7Ozt1QkFLMUMsTUFBTTs7OztZQUdkLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVTtvQkFDMUIsT0FBTyx3QkEzQk0sMEJBQTBCLGNBMkJ2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