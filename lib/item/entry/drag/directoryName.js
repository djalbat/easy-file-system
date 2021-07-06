"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _drop = _interopRequireDefault(require("../../../mixins/drop"));
var _marker = _interopRequireDefault(require("../../../mixins/marker"));
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
            key: "isCollapsed",
            value: function isCollapsed() {
                var entriesListCollapsed = this.isEntriesListCollapsed(), collapsed = entriesListCollapsed; ///
                return collapsed;
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
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.expandEntriesList();
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
            key: "didMount",
            value: function didMount() {
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
                var _properties = this.properties, name = _properties.name, explorer = _properties.explorer, EntriesList = explorer.getEntriesList();
                return [
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
Object.assign(DirectoryNameDragEntryItem.prototype, _drop.default);
Object.assign(DirectoryNameDragEntryItem.prototype, _marker.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uLy4uL21peGlucy9kcm9wXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbWFya2VyXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2VudHJ5SXRlbS9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGFkanVzdFNvdXJjZVBhdGgsIGFkanVzdFRhcmdldFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsXG5cdFx0IFx0IFx0IEZJTEVfTkFNRV9NQVJLRVJfVFlQRSxcblx0XHRcdFx0IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSxcblx0XHRcdCAgIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0Y29sbGFwc2VkXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHBhdGhNYXBzID0gW10pIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0cGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VQYXRoID0gYWRqdXN0U291cmNlUGF0aChzb3VyY2VQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRQYXRoID0gYWRqdXN0VGFyZ2V0UGF0aCh0YXJnZXRQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG4gIHNldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcbiAgICBjb2xsYXBzZWQgP1xuICAgICAgdGhpcy5jb2xsYXBzZSgpIDpcbiAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2VFbnRyaWVzTGlzdCgpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcbiAgfVxuXG5cdGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50O1x0Ly8vXG5cblx0XHRleHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdHRoaXMuZW5hYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5lbmFibGVNYXJrZXIoKTtcblxuXHRcdHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0c3VwZXIuZGlkTW91bnQoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZGlzYWJsZURyb3AoKTtcblxuXHRcdHRoaXMuZGlzYWJsZU1hcmtlcigpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0c3VwZXIud2lsbFVubW91bnQoKTtcblx0fVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdEVudHJpZXNMaXN0ID0gZXhwbG9yZXIuZ2V0RW50cmllc0xpc3QoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHRcdDxEaXJlY3RvcnlOYW1lU1ZHLz5cblxuXHRcdFx0LFxuXHRcdFx0bmFtZSxcblxuXHRcdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XSk7XG5cdH1cblxuXHRpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBtYXJrZXJNaXhpbnMpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVcsS0FBc0I7SUFDcEIsT0FBd0I7SUFDdkIsS0FBMEI7SUFDdkIsY0FBc0M7SUFFaEIsUUFBNEI7SUFJdkMsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQywwQkFBMEI7Y0FBMUIsMEJBQTBCO2FBQTFCLDBCQUEwQjs4QkFBMUIsMEJBQTBCO2dFQUExQiwwQkFBMEI7O2lCQUExQiwwQkFBMEI7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