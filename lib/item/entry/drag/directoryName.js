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
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var pathMap = _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "getPathMap", this).call(this, sourceEntryPath, targetEntryPath), collapsed = this.isCollapsed(), entryDirectory = true;
                Object.assign(pathMap, {
                    collapsed: collapsed,
                    entryDirectory: entryDirectory
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
            value: function retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
                var name = this.getName(), pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);
                pathMaps.push(pathMap);
                sourceEntryPath = (0, _pathMap).adjustSourceEntryPath(sourceEntryPath, name);
                targetEntryPath = (0, _pathMap).adjustTargetEntryPath(targetEntryPath, name);
                this.forEachDragEntryItem(function(dragEntryItem) {
                    dragEntryItem.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
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
            value: function dropHandler(dragElement, aborted, element, done) {
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                if (aborted) {
                    markerEntryItemExplorer.removeMarker();
                    done();
                    return;
                }
                var dragEntryItem = dragElement; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgaXNQYXRoVG9wbW9zdFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZX09QVElPTiB9IGZyb20gXCIuLi8uLi8uLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IHRydWU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlJdGVtTmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG5cdFx0XHRcdFx0ZW50cnlEaXJlY3RvcnkgPSB0cnVlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRjb2xsYXBzZWQsXG5cdFx0XHRlbnRyeURpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRpc0NvbGxhcHNlZCgpIHtcblx0XHRjb25zdCBlbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNFbnRyaWVzTGlzdENvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IGVudHJpZXNMaXN0Q29sbGFwc2VkO1x0Ly8vXG5cblx0XHRyZXR1cm4gY29sbGFwc2VkO1xuXHR9XG5cblx0Z2V0TmFtZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IE5hbWVCdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gTmFtZUJ1dHRvbjtcblx0fVxuXG5cdGdldFRvZ2dsZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IFRvZ2dsZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBUb2dnbGVCdXR0b247XG5cdH1cblxuXHRnZXREaXJlY3RvcnlOYW1lU1ZHKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lU1ZHO1xuXHR9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0cGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XG5cdFx0dGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZSk7XG5cblx0XHR0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRkcmFnRW50cnlJdGVtLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblx0XHR9KTtcblx0fVxuXG5cdHNldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2VFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuY29sbGFwc2VUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5leHBhbmRUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcblx0XHRsZXQgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0Y29sbGFwc2VkID0gIWNvbGxhcHNlZDtcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cdH1cblxuXHRkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuXHRcdGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG5cdFx0aWYgKGFib3J0ZWQpIHtcblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRkb25lKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuXHR9XG5cblx0ZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cblx0XHRpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQgPSBleHBsb3Jlci5pc09wdGlvblByZXNlbnQoRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT04pO1xuXG5cdFx0aWYgKGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IHBhdGhUb3Btb3N0UGF0aCA9IGlzUGF0aFRvcG1vc3RQYXRoKHBhdGgpO1xuXG5cdFx0XHRpZiAoIXBhdGhUb3Btb3N0UGF0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGAke3BhdGh9LyR7ZHJhZ0VudHJ5SXRlbU5hbWV9YDtcblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuXHRcdGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG5cdFx0XHRjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHROYW1lQnV0dG9uID0gdGhpcy5nZXROYW1lQnV0dG9uKCksXG5cdFx0XHRcdFx0RW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpLFxuXHRcdFx0XHRcdFRvZ2dsZUJ1dHRvbiA9IHRoaXMuZ2V0VG9nZ2xlQnV0dG9uKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZVNWRyA9IHRoaXMuZ2V0RGlyZWN0b3J5TmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPixcblxuXHRcdF0pO1xuXHR9XG5cblx0c3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBUb2dnbGVCdXR0b24gPSBUb2dnbGVCdXR0b247XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVTVkcgPSBEaXJlY3RvcnlOYW1lU1ZHO1xuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibG9jYWxlQ29tcGFyZSIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsImdldEV4cGxvcmVyIiwicHJvcGVydGllcyIsImV4cGxvcmVyIiwiZW50cmllc0xpc3RDb2xsYXBzZWQiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiZ2V0TmFtZUJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiTmFtZUJ1dHRvbiIsImdldFRvZ2dsZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsImdldERpcmVjdG9yeU5hbWVTVkciLCJEaXJlY3RvcnlOYW1lU1ZHIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZXhwYW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImNvbGxhcHNlVG9nZ2xlQnV0dG9uIiwiZXhwYW5kRW50cmllc0xpc3QiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJ0b2dnbGUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwicGF0aCIsImdldFBhdGgiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJkcmFnSW50b1RvcG1vc3REaXJlY3Rvcmllc09ubHlPcHRpb25QcmVzZW50IiwiaXNPcHRpb25QcmVzZW50IiwicGF0aFRvcG1vc3RQYXRoIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiYWRkTWFya2VyIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUFvQixDQUFwQixnQkFBb0I7QUFFeEIsR0FBc0IsQ0FBdEIsS0FBc0I7QUFDcEIs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