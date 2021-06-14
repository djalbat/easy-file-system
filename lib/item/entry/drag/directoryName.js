"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _drop = _interopRequireDefault(require("../../../mixins/drop"));
var _marker = _interopRequireDefault(require("../../../mixins/marker"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uLy4uL21peGlucy9kcm9wXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbWFya2VyXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuICBzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG4gICAgY29sbGFwc2VkID9cbiAgICAgIHRoaXMuY29sbGFwc2UoKSA6XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMuZW5hYmxlTWFya2VyKCk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5kaXNhYmxlTWFya2VyKCk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUsIGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0RW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdG5hbWUsXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XSk7XG5cdH1cblxuXHRpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBtYXJrZXJNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pYFxuXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFaEIsS0FBc0I7SUFDcEIsT0FBd0I7SUFDdkIsS0FBMEI7SUFFNkQsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9GNUUsZ0VBS3JEOzs7Ozs7O0lBdkZNLDBCQUEwQjtjQUExQiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDL0IsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFNBQVM7b0JBQ2IsTUFBTTtvQkFFSixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87dUJBRS9CLGFBQWE7eUJBUjBGLE1BQWdCO3lCQUFoQixNQUFnQjt5QkFBaEIsTUFBZ0I7d0JBWTdILE1BQU0sR0FBRyxJQUFJOzt5QkFaZ0csTUFBZ0I7NEJBaUJ2SCxJQUFJLFFBQVEsT0FBTyxJQUN0QixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXBDLE1BQU0sR0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxDQUFDOzs7dUJBSzFDLE1BQU07Ozs7WUFHYixHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsU0FBUztnQkFDcEIsU0FBUyxRQUNGLFFBQVEsVUFDTixNQUFNOzs7O1lBR2pCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsbUJBQW1COzs7O1lBRzFCLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU07cUJBQ0MsaUJBQWlCOzs7O1lBR3hCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0gsVUFBVTtxQkFFVixZQUFZO3FDQTNDYiwwQkFBMEIsY0E2Q3hCLFFBQVE7Ozs7WUFHZixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNMLFdBQVc7cUJBRVgsYUFBYTtxQ0FuRGQsMEJBQTBCLGNBcUR4QixXQUFXOzs7O1lBR2pCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ2MsV0FBZSxRQUFWLFVBQVUsRUFBbEMsSUFBSSxHQUFlLFdBQWUsQ0FBbEMsSUFBSSxFQUFFLFFBQVEsR0FBSyxXQUFlLENBQTVCLFFBQVEsRUFDbkIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjOztvQkFJdkMsSUFBSTtzREFDSCxXQUFXO3dCQUFDLFFBQVEsRUFBRSxRQUFROzs7Ozs7WUFLakMsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSixhQUFhOzs7O1dBckVkLDBCQUEwQjtFQUpOLEtBQTBCO2dCQUk5QywwQkFBMEIsR0F3RXhCLElBQUksR0ExRXFHLE1BQWdCO2dCQUUzSCwwQkFBMEIsR0EwRXhCLGlCQUFpQjtJQUNyQixTQUFTLEdBQUUsY0FBZ0I7O0FBSS9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQXJGM0IsS0FBc0I7QUFzRjdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQXJGekIsT0FBd0I7bUJBSDNCLGNBQWlCLFVBMEZkLDBCQUEwQiJ9