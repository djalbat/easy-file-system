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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
            var markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            var dragEntryItem = dragElement; ///
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        _defineProperty(_assertThisInitialized(_this), "dragOverHandler", function(dragElement, element) {
            var collapsed = _this.isCollapsed();
            if (collapsed) {
                return;
            }
            var path = _this.getPath(), explorer = _this.getExplorer(), dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = explorer.isExplorerIgnored(dragEntryItemExplorer);
            if (dragEntryItemExplorerIgnored) {
                return;
            }
            var markerEntryItem = _this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = "".concat(path, "/").concat(dragEntryItemName);
            markerEntryItemExplorer = explorer; ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
        return _this;
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
                    })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG4gICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBgJHtwYXRofS8ke2RyYWdFbnRyeUl0ZW1OYW1lfWA7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IGV4cGxvcmVyOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWU7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZCxcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVCdXR0b249e05hbWVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IERpcmVjdG9yeU5hbWVTVkc9e0RpcmVjdG9yeU5hbWVTVkd9XG5cdFx0XHQvPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG5cdHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuXHRzdGF0aWMgVG9nZ2xlQnV0dG9uID0gVG9nZ2xlQnV0dG9uO1xuXG5cdHN0YXRpYyBEaXJlY3RvcnlOYW1lU1ZHID0gRGlyZWN0b3J5TmFtZVNWRztcblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJlbGVtZW50IiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwicGF0aCIsImdldFBhdGgiLCJleHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicGF0aE1hcHMiLCJwdXNoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJzZXRDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImV4cGFuZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJjb2xsYXBzZVRvZ2dsZUJ1dHRvbiIsImV4cGFuZEVudHJpZXNMaXN0IiwiZXhwYW5kVG9nZ2xlQnV0dG9uIiwidG9nZ2xlIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJOYW1lQnV0dG9uIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkVudHJpZXNMaXN0IiwiZ2V0RW50cmllc0xpc3QiLCJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwiRHJhZ0VudHJ5SXRlbSIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWFRQSwwQkFBMEI7OzsrQkFYcEIsb0JBQW9CO3lEQUV4QixzQkFBc0I7MkRBQ3BCLHdCQUF3Qjt5REFDdkIsMEJBQTBCO2tFQUN2Qiw0QkFBNEI7bUVBQ25CLHVDQUF1Qzt1QkFFaEIsNEJBQTRCOzBCQUNnRCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0ksSUFBQSxBQUFNQSwwQkFBMEIsaUJBd001QyxBQXhNWTs7O2FBQU1BLDBCQUEwQjs7OztRQUM3Q0MsK0NBQUFBLGFBQVcsRUFBRyxTQUFDQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUs7WUFDckQsSUFBTUMsZUFBZSxHQUFHLE1BQUtDLHVCQUF1QixFQUFFLEVBQ2hEQyx1QkFBdUIsR0FBR0YsZUFBZSxDQUFDRyxXQUFXLEVBQUUsQUFBQztZQUU5RCxJQUFJTixPQUFPLEVBQUU7Z0JBQ1hLLHVCQUF1QixDQUFDRSxZQUFZLEVBQUUsQ0FBQztnQkFFdkNMLElBQUksRUFBRSxDQUFDO2dCQUVQLE9BQU87YUFDUjtZQUVELElBQU1NLGFBQWEsR0FBR1QsV0FBVyxBQUFDLEVBQUUsR0FBRztZQUV2Q00sdUJBQXVCLENBQUNJLGlCQUFpQixDQUFDRCxhQUFhLEVBQUVOLElBQUksQ0FBQyxDQUFDO1NBQ2hFLENBQUEsQ0FBQTtRQUVEUSwrQ0FBQUEsaUJBQWUsRUFBRyxTQUFDWCxXQUFXLEVBQUVFLE9BQU8sRUFBSztZQUMx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