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
                var explorer = this.properties.explorer;
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
                var NameButton = this.constructor.NameButton;
                return NameButton;
            }
        },
        {
            key: "getToggleButton",
            value: function getToggleButton() {
                var ToggleButton = this.constructor.ToggleButton;
                return ToggleButton;
            }
        },
        {
            key: "getDirectoryNameSVG",
            value: function getDirectoryNameSVG() {
                var DirectoryNameSVG = this.constructor.DirectoryNameSVG;
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
                var collapsed = this.properties.collapsed;
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
                var name = this.properties.name, explorer = this.getExplorer(), NameButton = this.getNameButton(), EntriesList = explorer.getEntriesList(), ToggleButton = this.getToggleButton(), DirectoryNameSVG = this.getDirectoryNameSVG();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWU7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZCxcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRnZXROYW1lQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgTmFtZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBOYW1lQnV0dG9uO1xuXHR9XG5cblx0Z2V0VG9nZ2xlQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgVG9nZ2xlQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIFRvZ2dsZUJ1dHRvbjtcblx0fVxuXG5cdGdldERpcmVjdG9yeU5hbWVTVkcoKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVTVkc7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG5cdH1cblxuXHRkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gZXhwbG9yZXIuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuXHRcdGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGAke3BhdGh9LyR7ZHJhZ0VudHJ5SXRlbU5hbWV9YDtcblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuXHRcdGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG5cdFx0XHRjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHROYW1lQnV0dG9uID0gdGhpcy5nZXROYW1lQnV0dG9uKCksXG5cdFx0XHRcdFx0RW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpLFxuXHRcdFx0XHRcdFRvZ2dsZUJ1dHRvbiA9IHRoaXMuZ2V0VG9nZ2xlQnV0dG9uKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZVNWRyA9IHRoaXMuZ2V0RGlyZWN0b3J5TmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPixcblxuXHRcdF0pO1xuXHR9XG5cblx0c3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBUb2dnbGVCdXR0b24gPSBUb2dnbGVCdXR0b247XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVTVkcgPSBEaXJlY3RvcnlOYW1lU1ZHO1xuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibG9jYWxlQ29tcGFyZSIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJwcm9wZXJ0aWVzIiwiZW50cmllc0xpc3RDb2xsYXBzZWQiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiZ2V0TmFtZUJ1dHRvbiIsIk5hbWVCdXR0b24iLCJjb25zdHJ1Y3RvciIsImdldFRvZ2dsZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsImdldERpcmVjdG9yeU5hbWVTVkciLCJEaXJlY3RvcnlOYW1lU1ZHIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZXhwYW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImNvbGxhcHNlVG9nZ2xlQnV0dG9uIiwiZXhwYW5kRW50cmllc0xpc3QiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJ0b2dnbGUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwicGF0aCIsImdldFBhdGgiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJhZGRNYXJrZXIiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJFbnRyaWVzTGlzdCIsImdldEVudHJpZXNMaXN0IiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVlLEdBQW9CLENBQXBCLGdCQUFvQjtBQUV4QixHQUFzQixDQUF0QixLQUFzQjtBQUNwQixHQUF3QixDQUF4QixPQUF3QjtBQUN2QixHQUEwQixDQUExQixLQUEwQjtBQUN2QixHQUE0QixDQUE1QixjQUE0QjtBQUNuQixHQUFzQyxDQUF0QyxlQUFzQztBQUVmLEdBQTRCLENBQTVCLFFBQTRCO0FBQ3dCLEdBQWdCLENBQWhCLE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUdBLDBCQUEwQixpQkFBaEMsUUFBUTtjQUFGQSwwQkFBMEI7YUFBMUJBLDBCQUEwQjs4QkFBMUJBLDBCQUEwQjtnRUFBMUJBLDBCQUEwQjs7aUJBQTFCQSwwQkFBMEI7O1lBQzlDQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEIsR0FBRyxDQUFDQyxNQUFNO2dCQUVWLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRixTQUFTLENBQUNHLE9BQU87Z0JBRXZDLE1BQU0sQ0FBRUQsYUFBYTtvQkFDcEIsSUFBSSxDQVQwRyxNQUFnQjtvQkFVOUgsSUFBSSxDQVYw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