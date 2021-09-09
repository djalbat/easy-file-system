"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyDragAndDrop = require("easy-drag-and-drop");
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
                var pathMap = _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "getPathMap", this).call(this, sourcePath, targetPath), collapsed = this.isCollapsed(), directory = true;
                Object.assign(pathMap, {
                    collapsed: collapsed,
                    directory: directory
                });
                return pathMap;
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
                var _properties = this.properties, name = _properties.name, explorer = _properties.explorer, NameButton = this.getNameButton(), EntriesList = explorer.getEntriesList(), ToggleButton = this.getToggleButton(), DirectoryNameSVG = this.getDirectoryNameSVG(), doubleClickHandler = this.doubleClickHandler.bind(this), toggleButtonClickHandler = this.toggleButtonClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(ToggleButton, {
                        onMouseDown: toggleButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(DirectoryNameSVG, null),
                    /*#__PURE__*/ React.createElement(NameButton, {
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
_defineProperty(DirectoryNameDragEntryItem, "NameButton", _name.default);
_defineProperty(DirectoryNameDragEntryItem, "ToggleButton", _toggle.default);
_defineProperty(DirectoryNameDragEntryItem, "DirectoryNameSVG", _directoryName.default);
_defineProperty(DirectoryNameDragEntryItem, "type", _types.DIRECTORY_NAME_DRAG_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameDragEntryItem;
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);
Object.assign(DirectoryNameDragEntryItem.prototype, _marker.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJuYW1lcyI6WyJkcm9wTWl4aW5zIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIm1hcmtlck1peGlucyIsIkRyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lU1ZHIiwiYWRqdXN0U291cmNlUGF0aCIsImFkanVzdFRhcmdldFBhdGgiLCJGSUxFX05BTUVfRFJBR19UWVBFIiwiRklMRV9OQU1FX01BUktFUl9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0UGF0aE1hcCIsInNvdXJjZVBhdGgiLCJ0YXJnZXRQYXRoIiwicGF0aE1hcCIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsImdldE5hbWVCdXR0b24iLCJjb25zdHJ1Y3RvciIsImdldFRvZ2dsZUJ1dHRvbiIsImdldERpcmVjdG9yeU5hbWVTVkciLCJzZXRDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImV4cGFuZCIsImVudHJpZXNMaXN0Q29sbGFwc2VkIiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJjb2xsYXBzZVRvZ2dsZUJ1dHRvbiIsImV4cGFuZEVudHJpZXNMaXN0IiwiZXhwYW5kVG9nZ2xlQnV0dG9uIiwidG9nZ2xlIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImVsZW1lbnQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGlja0hhbmRsZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUJ1dHRvbkNsaWNrSGFuZGxlciIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImVuYWJsZURyb3AiLCJlbmFibGVNYXJrZXIiLCJvbkRyb3AiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwiZGlzYWJsZU1hcmtlciIsIm9mZkRyb3AiLCJjaGlsZEVsZW1lbnRzIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsImJpbmQiLCJvbk1vdXNlRG93biIsIm9uRG91YmxlQ2xpY2siLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUFvQixDQUFwQixnQkFBb0I7QUFFeEIsR0FBc0IsQ0FBdEIsS0FBc0I7QUFDcEIsR0FBd0IsQ0FBeEIsT0FBd0I7QUFDeEIsR0FBd0IsQ0FBeEIsT0FBd0I7QUFDdkIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDdkIsR0FBc0MsQ0FBdEMsY0FBc0M7QUFFaEIsR0FBNEIsQ0FBNUIsUUFBNEI7QUFDa0MsR0FBZ0IsQ0FBaEIsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RywwQkFBMEIsaUJBQWhDLFFBQVE7Y0FBRiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDOUMsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEIs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