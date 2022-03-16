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
exports.default = DirectoryNameDragEntryItem;
_defineProperty(DirectoryNameDragEntryItem, "NameButton", _name.default);
_defineProperty(DirectoryNameDragEntryItem, "ToggleButton", _toggle.default);
_defineProperty(DirectoryNameDragEntryItem, "DirectoryNameSVG", _directoryName.default);
_defineProperty(DirectoryNameDragEntryItem, "type", _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gc3VwZXIuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gdHJ1ZTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0Y29sbGFwc2VkLFxuXHRcdFx0ZW50cnlEaXJlY3Rvcnlcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0Z2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG5cdGdldE5hbWVCdXR0b24oKSB7XG5cdFx0Y29uc3QgeyBOYW1lQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIE5hbWVCdXR0b247XG5cdH1cblxuXHRnZXRUb2dnbGVCdXR0b24oKSB7XG5cdFx0Y29uc3QgeyBUb2dnbGVCdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gVG9nZ2xlQnV0dG9uO1xuXHR9XG5cblx0Z2V0RGlyZWN0b3J5TmFtZVNWRygpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZVNWRztcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1xuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmNvbGxhcHNlVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5leHBhbmRFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuZXhwYW5kVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXHR9XG5cblx0ZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcblx0XHRjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuXHRcdGlmIChhYm9ydGVkKSB7XG5cdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuXHRcdFx0ZG9uZSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcblx0fVxuXG5cdGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuXHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGlmIChjb2xsYXBzZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSBleHBsb3Jlci5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG5cdFx0aWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcblx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gYCR7cGF0aH0vJHtkcmFnRW50cnlJdGVtTmFtZX1gO1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBleHBsb3JlcjsgIC8vL1xuXG5cdFx0aWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcblx0XHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdE5hbWVCdXR0b24gPSB0aGlzLmdldE5hbWVCdXR0b24oKSxcblx0XHRcdFx0XHRFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCksXG5cdFx0XHRcdFx0VG9nZ2xlQnV0dG9uID0gdGhpcy5nZXRUb2dnbGVCdXR0b24oKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lU1ZHID0gdGhpcy5nZXREaXJlY3RvcnlOYW1lU1ZHKCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVCdXR0b249e05hbWVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IERpcmVjdG9yeU5hbWVTVkc9e0RpcmVjdG9yeU5hbWVTVkd9XG5cdFx0XHQvPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+LFxuXG5cdFx0XSk7XG5cdH1cblxuXHRzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cblx0c3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJnZXROYW1lQnV0dG9uIiwiTmFtZUJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiZ2V0VG9nZ2xlQnV0dG9uIiwiVG9nZ2xlQnV0dG9uIiwiZ2V0RGlyZWN0b3J5TmFtZVNWRyIsIkRpcmVjdG9yeU5hbWVTVkciLCJyZXRyaWV2ZVBhdGhNYXBzIiwicGF0aE1hcHMiLCJwdXNoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJleHBhbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJleHBhbmRFbnRyaWVzTGlzdCIsImV4cGFuZFRvZ2dsZUJ1dHRvbiIsInRvZ2dsZSIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImFkZE1hcmtlciIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsIkVudHJpZXNMaXN0IiwiZ2V0RW50cmllc0xpc3QiLCJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwiRHJhZ0VudHJ5SXRlbSIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUyQixHQUFvQixDQUFwQixnQkFBb0I7QUFFeEIsR0FBc0IsQ0FBdEIsS0FBc0I7QUFDcEIsR0FBd0IsQ0FBeEIsT0FBd0I7QUFDdkIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDdkIsR0FBNEIsQ0FBNUIsY0FBNEI7QUFDbkIsR0FBc0MsQ0FBdEMsZUFBc0M7QUFFZixHQUE0QixDQUE1QixRQUE0QjtBQUNnRCxHQUFxQixDQUFyQixXQUFxQjs7Ozs7Ozs7Ozs7Ozs7OzhEQVg5SjtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OzBCQUFBOzs7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