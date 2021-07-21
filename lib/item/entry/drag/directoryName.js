"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyDragAndDrop = require("@djalbat/easy-drag-and-drop");
var _name = _interopRequireDefault(require("../../../button/name"));
var _toggle = _interopRequireDefault(require("../../../button/toggle"));
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
            key: "toggle",
            value: function toggle() {
                var collapsed = this.isCollapsed();
                collapsed = !collapsed;
                this.setCollapsed(collapsed);
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
            key: "doubleClickHandler",
            value: function doubleClickHandler(event, element) {
                this.stopWaitingToDrag();
                this.toggle();
                event.stopPropagation();
            }
        },
        {
            key: "toggleButtonClickHandler",
            value: function toggleButtonClickHandler(event, element) {
                this.toggle();
                event.stopPropagation();
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
                var _properties = this.properties, name = _properties.name, explorer = _properties.explorer, EntriesList = explorer.getEntriesList(), doubleClickHandler = this.doubleClickHandler.bind(this), toggleButtonClickHandler = this.toggleButtonClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_toggle.default, {
                        onMouseDown: toggleButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_directoryName.default, null),
                    /*#__PURE__*/ React.createElement(_name.default, {
                        onDoubleClick: doubleClickHandler
                    }, name),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJAZGphbGJhdC9lYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbWFya2VyXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2VudHJ5SXRlbS9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGFkanVzdFNvdXJjZVBhdGgsIGFkanVzdFRhcmdldFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gc3VwZXIuZ2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwYXRoTWFwcyA9IFtdKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlUGF0aCA9IGFkanVzdFNvdXJjZVBhdGgoc291cmNlUGF0aCwgbmFtZSk7XG5cdFx0dGFyZ2V0UGF0aCA9IGFkanVzdFRhcmdldFBhdGgodGFyZ2V0UGF0aCwgbmFtZSk7XG5cblx0XHR0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHBhdGhNYXBzKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwcztcblx0fVxuXG5cdHNldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmNvbGxhcHNlVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5leHBhbmRFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuZXhwYW5kVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXHR9XG5cblx0ZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7XHQvLy9cblxuXHRcdGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXHR9XG5cblx0ZG91YmxlQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5zdG9wV2FpdGluZ1RvRHJhZygpO1xuXG5cdFx0dGhpcy50b2dnbGUoKTtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0dG9nZ2xlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy50b2dnbGUoKTtcblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMuZW5hYmxlTWFya2VyKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLmRpc2FibGVNYXJrZXIoKTtcblxuXHRcdHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCksXG5cdFx0XHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKSxcblx0XHRcdFx0XHR0b2dnbGVCdXR0b25DbGlja0hhbmRsZXIgPSB0aGlzLnRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxUb2dnbGVCdXR0b24gb25Nb3VzZURvd249e3RvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG5cdFx0XHQ8RGlyZWN0b3J5TmFtZVNWRy8+LFxuXHRcdFx0PE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17ZG91YmxlQ2xpY2tIYW5kbGVyfSA+XG5cdFx0XHRcdHtuYW1lfVxuXHRcdFx0PC9OYW1lQnV0dG9uPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIG1hcmtlck1peGlucyk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZSxnQkFBNkI7SUFFakMsS0FBc0I7SUFDcEIsT0FBd0I7SUFDeEIsT0FBd0I7SUFDdkIsS0FBMEI7SUFDdkIsY0FBc0M7SUFFaEIsUUFBNEI7SUFDa0MsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RywwQkFBMEI7Y0FBMUIsMEJBQTBCO2FBQTFCLDBCQUEwQjs4QkFBMUIsMEJBQTBCO2dFQUExQiwwQkFBMEI7O2lCQUExQiwwQkFB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