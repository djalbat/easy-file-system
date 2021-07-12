"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyDragAndDrop = require("@djalbat/easy-drag-and-drop");
var _marker = _interopRequireDefault(require("../../../mixins/marker"));
var _toggle = _interopRequireDefault(require("../../../button/toggle"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
var _directoryName = _interopRequireDefault(require("../../../svg/entryItem/directoryName"));
var _pathMap = require("../../../utilities/pathMap");
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
                var pathMap = _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "getPathMap", this).call(this, sourcePath, targetPath), collapsed = this.isCollapsed();
                Object.assign(pathMap, {
                    collapsed: collapsed
                });
                return pathMap;
            }
        },
        {
            key: "getPathMaps",
            value: function getPathMaps(sourcePath, targetPath, param) {
                var pathMaps = param === void 0 ? [] : param;
                var name = this.getName(), pathMap = this.getPathMap(sourcePath, targetPath);
                pathMaps.push(pathMap);
                sourcePath = (0, _pathMap).adjustSourcePath(sourcePath, name);
                targetPath = (0, _pathMap).adjustTargetPath(targetPath, name);
                this.forEachDragEntryItem(function(dragEntryItem) {
                    dragEntryItem.getPathMaps(sourcePath, targetPath, pathMaps);
                });
                return pathMaps;
            }
        },
        {
            key: "setCollapsed",
            value: function setCollapsed(collapsed) {
                collapsed ? this.collapse() : this.expand();
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
            key: "dropHandler",
            value: function dropHandler(dragElement, element) {
                var explorer = this.getExplorer(), dragEntryItem = dragElement; ///
                explorer.dropDragEntryItem(dragEntryItem);
            }
        },
        {
            key: "toggleButtonClickHandler",
            value: function toggleButtonClickHandler(event, element) {
                var collapsed = this.isCollapsed();
                collapsed = !collapsed;
                this.setCollapsed(collapsed);
                event.preventDefault();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, collapsed = _properties.collapsed;
                this.setCollapsed(collapsed);
                this.enableDrop();
                this.enableMarker();
                this.onDrop(this.dropHandler, this);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.disableMarker();
                this.offDrop(this.dropHandler, this);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorer = _properties.explorer, EntriesList = explorer.getEntriesList(), toggleButtonClickHandler = this.toggleButtonClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_toggle.default, {
                        onMouseDown: toggleButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_directoryName.default, null),
                    name,
                    /*#__PURE__*/ React.createElement(EntriesList, {
                        explorer: explorer
                    })
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return DirectoryNameDragEntryItem;
}(_drag.default);
_defineProperty(DirectoryNameDragEntryItem, "type", _types.DIRECTORY_NAME_DRAG_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameDragEntryItem;
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);
Object.assign(DirectoryNameDragEntryItem.prototype, _marker.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJAZGphbGJhdC9lYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IG1hcmtlck1peGlucyBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL21hcmtlclwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL3RvZ2dsZVwiO1xuaW1wb3J0IERyYWdFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uLy4uL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVTVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9lbnRyeUl0ZW0vZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VQYXRoLCBhZGp1c3RUYXJnZXRQYXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IHRydWU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlJdGVtTmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRjb2xsYXBzZWRcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0Z2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMgPSBbXSkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1xuXHRcdHRhcmdldFBhdGggPSBhZGp1c3RUYXJnZXRQYXRoKHRhcmdldFBhdGgsIG5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcHM7XG5cdH1cblxuXHRzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuXHRpc0NvbGxhcHNlZCgpIHtcblx0XHRjb25zdCBlbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNFbnRyaWVzTGlzdENvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IGVudHJpZXNMaXN0Q29sbGFwc2VkO1x0Ly8vXG5cblx0XHRyZXR1cm4gY29sbGFwc2VkO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cblx0ZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7XHQvLy9cblxuXHRcdGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXHR9XG5cblx0dG9nZ2xlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLmVuYWJsZU1hcmtlcigpO1xuXG5cdFx0dGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5kaXNhYmxlTWFya2VyKCk7XG5cblx0XHR0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUsIGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0RW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpLFxuXHRcdFx0XHRcdHRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlciA9IHRoaXMudG9nZ2xlQnV0dG9uQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PFRvZ2dsZUJ1dHRvbiBvbk1vdXNlRG93bj17dG9nZ2xlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcblx0XHRcdDxEaXJlY3RvcnlOYW1lU1ZHLz4sXG5cdFx0XHRuYW1lLFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdF0pO1xuXHR9XG5cblx0aW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgbWFya2VyTWl4aW5zKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVlLGdCQUE2QjtJQUUvQixPQUF3QjtJQUN4QixPQUF3QjtJQUN2QixLQUEwQjtJQUN2QixjQUFzQztJQUVoQixRQUE0QjtJQUNrQyxNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVHLDBCQUEwQjtjQUExQiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDOUMsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFNBQVM7b0JBQ2IsTUFBTTtvQkFFSixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87dUJBRS9CLGFBQWE7eUJBUjBGLE1BQWdCO3lCQUFoQixNQUFnQjt5QkFBaEIsTUFBZ0I7d0JBWTdILE1BQU0sR0FBRyxJQUFJOzt5QkFaZ0csTUFBZ0I7NEJBaUJ2SCxJQUFJLFFBQVEsT0FBTyxJQUN0QixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXBDLE1BQU0sR0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxDQUFDOzs7dUJBSzFDLE1BQU07Ozs7WUFHZCxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVU7b0JBQzFCLE9BQU8sd0JBM0JNLDBCQUEwQixjQTJCdkIsVUFB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