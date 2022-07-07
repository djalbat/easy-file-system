"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectoryNameDragEntryItem;
    }
});
var _easyDragAndDrop = require("easy-drag-and-drop");
var _name = /*#__PURE__*/ _interopRequireDefault(require("../../../button/name"));
var _toggle = /*#__PURE__*/ _interopRequireDefault(require("../../../button/toggle"));
var _drag = /*#__PURE__*/ _interopRequireDefault(require("../../../item/entry/drag"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("../../../svg/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interopRequireDefault(require("../../../div/item/entry/directoryName"));
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
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
                var name = this.getName(), pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);
                pathMaps.push(pathMap);
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name);
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, name);
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
                var name = this.properties.name, _constructor = this.constructor, _$NameButton = _constructor.NameButton, _$ToggleButton = _constructor.ToggleButton, _$DirectoryNameSVG = _constructor.DirectoryNameSVG, explorer = this.getExplorer(), EntriesList = explorer.getEntriesList();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWU7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZCxcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG5cdH1cblxuXHRkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gZXhwbG9yZXIuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuXHRcdGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGAke3BhdGh9LyR7ZHJhZ0VudHJ5SXRlbU5hbWV9YDtcblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuXHRcdGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG5cdFx0XHRjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVCdXR0b249e05hbWVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IERpcmVjdG9yeU5hbWVTVkc9e0RpcmVjdG9yeU5hbWVTVkd9XG5cdFx0XHQvPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+LFxuXG5cdFx0XSk7XG5cdH1cblxuXHRzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cblx0c3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicGF0aE1hcHMiLCJwdXNoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJleHBhbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJleHBhbmRFbnRyaWVzTGlzdCIsImV4cGFuZFRvZ2dsZUJ1dHRvbiIsInRvZ2dsZSIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImFkZE1hcmtlciIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJFbnRyaWVzTGlzdCIsImdldEVudHJpZXNMaXN0IiwiRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFhUUEsMEJBQTBCOzs7K0JBWHBCLG9CQUFvQjt5REFFeEIsc0JBQXNCOzJEQUNwQix3QkFBd0I7eURBQ3ZCLDBCQUEwQjtrRUFDdkIsNEJBQTRCO21FQUNuQix1Q0FBdUM7dUJBRWhCLDRCQUE0QjswQkFDZ0QscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9JLElBQUEsQUFBTUEsMEJBQTBCLGlCQXdNNUMsQUF4TVk7OzthQUFNQSwwQkFBMEI7Ozs7OztZQUM5Q0MsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSUMsTUFBTSxBQUFDO2dCQUVYLElBQU1DLGFBQWEsR0FBR0YsU0FBUyxDQUFDRyxPQUFPLEVBQUUsQUFBQztnQkFFMUMsT0FBUUQsYUFBYTtvQkFDcEIsS0FBS0UsV0FBeUIsMEJBQUEsQ0FBQztvQkFDL0IsS0FBS0MsV0FBMkIsNEJBQUEsQ0FBQztvQkFDakMsS0FBS0MsV0FBZ0MsaUNBQUE7d0JBQ3BDTCxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUVkLE1BQU07b0JBRVAsS0FBS00sV0FBOEIsK0JBQUE7d0JBQ2xDLElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUN4QkMsYUFBYSxHQUFHVixTQUFTLENBQUNTLE9BQU8sRUFBRSxBQUFDO3dCQUV2Q1IsTUFBTSxHQUFJTyxJQUFJLENBQUNHLGFBQWEsQ0FBQ0QsYUFBYSxDQUFDLEdB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