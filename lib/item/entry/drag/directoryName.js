"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _drop = _interopRequireDefault(require("../../../mixins/drop"));
var _marker = _interopRequireDefault(require("../../../mixins/marker"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  font-size: 2rem;\n  background-color: lightblue;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
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
                sourcePath = (0, _pathMap).adjustPath(sourcePath, name);
                targetPath = (0, _pathMap).adjustPath(targetPath, name);
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
            key: "didMount",
            value: function didMount() {
                this.enableDrop();
                this.enableMarker();
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.disableMarker();
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorer = _properties.explorer, EntriesList = explorer.getEntriesList();
                return [
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
Object.assign(DirectoryNameDragEntryItem.prototype, _drop.default);
Object.assign(DirectoryNameDragEntryItem.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(DirectoryNameDragEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uLy4uL21peGlucy9kcm9wXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbWFya2VyXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IGFkanVzdFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsXG5cdFx0IFx0IFx0IEZJTEVfTkFNRV9NQVJLRVJfVFlQRSxcblx0XHRcdFx0IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSxcblx0XHRcdCAgIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0Y29sbGFwc2VkXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHBhdGhNYXBzID0gW10pIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0cGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VQYXRoID0gYWRqdXN0UGF0aChzb3VyY2VQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRQYXRoID0gYWRqdXN0UGF0aCh0YXJnZXRQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG4gIHNldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcbiAgICBjb2xsYXBzZWQgP1xuICAgICAgdGhpcy5jb2xsYXBzZSgpIDpcbiAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2VFbnRyaWVzTGlzdCgpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuXHRcdHRoaXMuZW5hYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5lbmFibGVNYXJrZXIoKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLmRpc2FibGVNYXJrZXIoKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0bmFtZSxcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIG1hcmtlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSlgXG5cbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVoQixLQUFzQjtJQUNwQixPQUF3QjtJQUN2QixLQUEwQjtJQUV6QixRQUE0QjtJQUlmLE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FzSEgsZ0VBS3JEOzs7Ozs7O0lBekhNLDBCQUEwQjtjQUExQiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDL0IsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFNBQVM7b0JBQ2IsTUFBTTtvQkFFSixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87dUJBRS9CLGFBQWE7eUJBUmlCLE1BQWdCO3lCQUFoQixNQUFnQjt5QkFBaEIsTUFBZ0I7d0JBWXBELE1BQU0sR0FBRyxJQUFJOzt5QkFadUIsTUFBZ0I7NEJBaUI5QyxJQUFJLFFBQVEsT0FBTyxJQUN0QixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXBDLE1B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