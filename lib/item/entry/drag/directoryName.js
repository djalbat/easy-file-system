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
var _directoryName1 = _interopRequireDefault(require("../../../div/item/entry/directoryName"));
var _pathMap = require("../../../utilities/pathMap");
var _entryTypes = require("../../../entryTypes");
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
function _get(target1, property1, receiver1) {
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
    return _get(target1, property1, receiver1 || target1);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    var _super = _createSuper(DirectoryNameDragEntryItem);
    function DirectoryNameDragEntryItem() {
        _classCallCheck(this, DirectoryNameDragEntryItem);
        return _super.apply(this, arguments);
    }
    _createClass(DirectoryNameDragEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(entryItem) {
                var before;
                var entryItemType = entryItem.getType();
                switch(entryItemType){
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                    case _entryTypes.FILE_NAME_MARKER_ENTRY_TYPE:
                    case _entryTypes.DIRECTORY_NAME_MARKER_ENTRY_TYPE:
                        before = true;
                        break;
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
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
                var _$NameButton = this.constructor.NameButton;
                return _$NameButton;
            }
        },
        {
            key: "getToggleButton",
            value: function getToggleButton() {
                var _$ToggleButton = this.constructor.ToggleButton;
                return _$ToggleButton;
            }
        },
        {
            key: "getDirectoryNameSVG",
            value: function getDirectoryNameSVG() {
                var _$DirectoryNameSVG = this.constructor.DirectoryNameSVG;
                return _$DirectoryNameSVG;
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
                var name = this.properties.name, explorer = this.getExplorer(), _$NameButton = this.getNameButton(), EntriesList = explorer.getEntriesList(), _$ToggleButton = this.getToggleButton(), _$DirectoryNameSVG = this.getDirectoryNameSVG();
                return [
                    /*#__PURE__*/ React.createElement(_directoryName1.default, {
                        name: name,
                        NameButton: _$NameButton,
                        ToggleButton: _$ToggleButton,
                        DirectoryNameSVG: _$DirectoryNameSVG
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
_defineProperty(DirectoryNameDragEntryItem, "type", _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);
exports.default = DirectoryNameDragEntryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL3RvZ2dsZVwiO1xuaW1wb3J0IERyYWdFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uLy4uL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVTVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9kaXJlY3RvcnlOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VFbnRyeVBhdGgsIGFkanVzdFRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2VudHJ5VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IHRydWU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlJdGVtTmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG5cdFx0XHRcdFx0ZW50cnlEaXJlY3RvcnkgPSB0cnVlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRjb2xsYXBzZWQsXG5cdFx0XHRlbnRyeURpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRpc0NvbGxhcHNlZCgpIHtcblx0XHRjb25zdCBlbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNFbnRyaWVzTGlzdENvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IGVudHJpZXNMaXN0Q29sbGFwc2VkO1x0Ly8vXG5cblx0XHRyZXR1cm4gY29sbGFwc2VkO1xuXHR9XG5cblx0Z2V0TmFtZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IE5hbWVCdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gTmFtZUJ1dHRvbjtcblx0fVxuXG5cdGdldFRvZ2dsZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IFRvZ2dsZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBUb2dnbGVCdXR0b247XG5cdH1cblxuXHRnZXREaXJlY3RvcnlOYW1lU1ZHKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lU1ZHO1xuXHR9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0cGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XG5cdFx0dGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZSk7XG5cblx0XHR0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRkcmFnRW50cnlJdGVtLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblx0XHR9KTtcblx0fVxuXG5cdHNldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2VFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuY29sbGFwc2VUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5leHBhbmRUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcblx0XHRsZXQgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0Y29sbGFwc2VkID0gIWNvbGxhcHNlZDtcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cdH1cblxuXHRkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuXHRcdGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG5cdFx0aWYgKGFib3J0ZWQpIHtcblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRkb25lKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuXHR9XG5cblx0ZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cblx0XHRpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0bGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuXHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cblx0XHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuXHRcdG1hcmtlckVudHJ5SXRlbVBhdGggPSBgJHtwYXRofS8ke2RyYWdFbnRyeUl0ZW1OYW1lfWA7XG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IGV4cGxvcmVyOyAgLy8vXG5cblx0XHRpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuXHRcdFx0Y29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblx0XHR9XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGNvbGxhcHNlZCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0c3VwZXIuZGlkTW91bnQoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZGlzYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0c3VwZXIud2lsbFVubW91bnQoKTtcblx0fVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0TmFtZUJ1dHRvbiA9IHRoaXMuZ2V0TmFtZUJ1dHRvbigpLFxuXHRcdFx0XHRcdEVudHJpZXNMaXN0ID0gZXhwbG9yZXIuZ2V0RW50cmllc0xpc3QoKSxcblx0XHRcdFx0XHRUb2dnbGVCdXR0b24gPSB0aGlzLmdldFRvZ2dsZUJ1dHRvbigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVTVkcgPSB0aGlzLmdldERpcmVjdG9yeU5hbWVTVkcoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8RGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgTmFtZUJ1dHRvbj17TmFtZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFRvZ2dsZUJ1dHRvbj17VG9nZ2xlQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgRGlyZWN0b3J5TmFtZVNWRz17RGlyZWN0b3J5TmFtZVNWR31cblx0XHRcdC8+LFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz4sXG5cblx0XHRdKTtcblx0fVxuXG5cdHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuXHRzdGF0aWMgVG9nZ2xlQnV0dG9uID0gVG9nZ2xlQnV0dG9uO1xuXG5cdHN0YXRpYyBEaXJlY3RvcnlOYW1lU1ZHID0gRGlyZWN0b3J5TmFtZVNWRztcblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwicHJvcGVydGllcyIsImVudHJpZXNMaXN0Q29sbGFwc2VkIiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsImdldE5hbWVCdXR0b24iLCJOYW1lQnV0dG9uIiwiY29uc3RydWN0b3IiLCJnZXRUb2dnbGVCdXR0b24iLCJUb2dnbGVCdXR0b24iLCJnZXREaXJlY3RvcnlOYW1lU1ZHIiwiRGlyZWN0b3J5TmFtZVNWRyIsInJldHJpZXZlUGF0aE1hcHMiLCJwYXRoTWFwcyIsInB1c2giLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW0iLCJzZXRDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImV4cGFuZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJjb2xsYXBzZVRvZ2dsZUJ1dHRvbiIsImV4cGFuZEVudHJpZXNMaXN0IiwiZXhwYW5kVG9nZ2xlQnV0dG9uIiwidG9nZ2xlIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJlbGVtZW50IiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiYWRkTWFya2VyIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsIkRpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYiLCJEcmFnRW50cnlJdGVtIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVjLElBQUEsZ0JBQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBRXhCLElBQUEsS0FBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ3BCLElBQUEsT0FBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ3ZCLElBQUEsS0FBMEIsa0NBQTFCLDBCQUEwQixFQUFBO0FBQ3ZCLElBQUEsY0FBNEIsa0NBQTVCLDRCQUE0QixFQUFBO0FBQ25CLElBQUEsZUFBdUMsa0NBQXZDLHVDQUF1QyxFQUFB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