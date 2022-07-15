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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG4gICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBgJHtwYXRofS8ke2RyYWdFbnRyeUl0ZW1OYW1lfWA7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IGV4cGxvcmVyOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWU7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZCxcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVCdXR0b24sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVCdXR0b249e05hbWVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IERpcmVjdG9yeU5hbWVTVkc9e0RpcmVjdG9yeU5hbWVTVkd9XG5cdFx0XHQvPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+LFxuXG5cdFx0XSk7XG5cdH1cblxuXHRzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cblx0c3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcmFnRW50cnlJdGVtIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsInBhdGgiLCJnZXRQYXRoIiwiZXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImFkZE1hcmtlciIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIm5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibG9jYWxlQ29tcGFyZSIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9wZXJ0aWVzIiwiZW50cmllc0xpc3RDb2xsYXBzZWQiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJleHBhbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJleHBhbmRFbnRyaWVzTGlzdCIsImV4cGFuZFRvZ2dsZUJ1dHRvbiIsInRvZ2dsZSIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJFbnRyaWVzTGlzdCIsImdldEVudHJpZXNMaXN0IiwiRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFhUUEsMEJBQTBCOzs7K0JBWHBCLG9CQUFvQjt5REFFeEIsc0JBQXNCOzJEQUNwQix3QkFBd0I7eURBQ3ZCLDBCQUEwQjtrRUFDdkIsNEJBQTRCO21FQUNuQix1Q0FBdUM7dUJBRWhCLDRCQUE0QjswQkFDZ0QscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9JLElBQUEsQUFBTUEsMEJBQTBCLGlCQXdNNUMsQUF4TVk7OzthQUFNQSwwQkFBMEI7Ozs7UUFDN0NDLCtDQUFBQSxhQUFXLEVBQUcsU0FBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFLO1lBQ3JELElBQU1DLGVBQWUsR0FBRyxNQUFLQyx1QkFBdUIsRUFBRSxFQUNoREMsdUJBQXVCLEdBQUdGLGVBQWUsQ0FBQ0csV0FBVyxFQUFFLEFBQUM7WUFFOUQsSUFBSU4sT0FBTyxFQUFFO2dCQUNYSyx1QkFBdUIsQ0FBQ0UsWUFBWSxFQUFFLENBQUM7Z0JBRXZDTCxJQUFJLEVBQUUsQ0FBQztnQkFFUCxPQUFPO2FBQ1I7WUFFRCxJQUFNTSxhQUFhLEdBQUdULFdBQVcsQUFBQyxFQUFFLEdBQUc7WUFFdkNNLHVCQUF1QixDQUFDSSxpQkFBaUIsQ0FBQ0QsYUFBYSxFQUFFTixJQUFJLENBQUMsQ0FBQztTQUNoRSxDQUFBLENBQUE7UUFFRFEsK0NBQUFBLGlCQUFlLEVBQUcsU0FBQ1gsV0FBVyxFQUFFRSxPQUFPLEVBQUs7WUFDMUMsSUFBTVUsU0FBUyxHQUFHLE1BQUtDLFdBQVcsRUFBRSxBQUFDO1lBRXJDLElBQUlELFNBQVMsRUFBRTtnQkFDYixPQUFPO2FBQ1I7WUFFRCxJQUFNRSxJQUFJLEdBQUcsTUFBS0MsT0FBTyxFQUFFLEVBQ3JCQyxRQUFRLEdBQUcsTUFBS1QsV0FBVyxFQUFFLEVBQzdCRSxhQUFhLEdBQUdULFdBQVcsRUFDM0JpQixxQkFBcUIsR0FBR1IsYUFBYSxDQUFDRixXQUFXLEVBQUUsRUFDbkRXLDRCQUE0QixHQUFHRixRQUFRLENBQUNHLGlCQUFpQixDQUFDRixxQkFBcUIsQ0FBQyxBQUFDO1lBRXZGLElBQUlDLDRCQUE0QixFQUFFO2dCQUNoQyxPQUFPO2FBQ1I7WUFFRCxJQUFNZCxlQUFlLEdBQUcsTUFBS0MsdUJBQXVCLEVBQUUsRUFDaERlLGlCQUFpQixHQUFHWCxhQUFhLENBQUNZLE9BQU8sRUFBRSxBQUFDO1lBRWxELElBQUlDLG1CQUFtQixHQUFHbEIsZUFBZSxDQUFDVyxPQUFPLEVBQUUsRUFDL0NULHVCQUF1QixHQUFHRixlQUFlLENBQUNHLFdBQVcsRUFBRSxFQUN2RGdCLDJCQUEyQixHQUFHRCxtQkFBbUIsRUFDakRFLCtCQUErQixHQUFHbEIsdUJBQXVCLEFBQUMsRUFBQyxHQUFHO1lBRWxFZ0IsbUJBQW1CLEdBQUcsQUFBQyxFQUFBLENBQVVGLE1BQWlCLENBQXpCTixJQUFJLEVBQUMsR0FBQyxDQUFvQixDQUFBLE1BQUEsQ0FBbEJNLGlCQUFpQixDQUFFLENBQUM7WUFFckRkLHVCQUF1QixHQUFHVSxRQUFRLENBQUMsQ0FBRSxHQUFHO1lBRXhDLElBQUksQUFBQ1YsdUJBQXVCLEtBQUtrQiwrQkFBK0IsSUFBTUYsbUJBQW1CLEtBQUtDLDJCQUEyQixBQUFDLEVBQUU7Z0JBQzFILElBQU1FLGlCQUFpQixHQUFHaEIsYUFBYSxDQUFDaUIsT0FBTyxFQUFFLEFBQUM7Z0JBRWxERiwrQkFBK0IsQ0FBQ2hCLFlBQVksRUFBRSxDQUFDO2dCQUUvQ0YsdUJBQXVCLENBQUNxQixTQUFTLENBQUNMLG1CQUFtQixFQUFFRyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzNFO1NBQ0YsQ0FBQSxDQUFBOzs7OztZQUVERyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsQ0FBQ0MsU0FBUyxFQUFFO2dCQUNwQixJQUFJQyxNQUFNLEFBQUM7Z0JBRVgsSUFBTUMsYUFBYSxHQUFHRixTQUFTLENBQUNILE9BQU8sRUFBRSxBQUFDO2dCQUUxQyxPQUFRSyxhQUFhO29CQUNwQixLQUFLQyxXQUF5QiwwQkFBQSxDQUFDO29CQUMvQixLQUFLQyxXQUEyQiw0QkFBQSxDQUFDO29CQUNqQyxLQUFLQyxXQUFnQyxpQ0FBQTt3QkFDcENKLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBRWQsTUFBTTtvQkFFUCxLQUFLSyxXQUE4QiwrQkFBQTt3QkFDbEMsSUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ2YsT0FBTyxFQUFFLEVBQ3hCZ0IsYUFBYSxHQUFHUixTQUFTLENBQUNSLE9BQU8sRUFBRSxBQUFDO3dCQUV2Q1MsTUFBTSxHQUFJTSxJQUFJLENBQUNFLGFBQWEsQ0FBQ0QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7d0JBRWpELE1BQU07aUJBQ1A7Z0JBRUQsT0FBT1AsTUFBTSxDQUFDO2FBQ2Q7OztZQUVEUyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsQ0FBQ0MsZUFBZSxFQUFFQyxlQUFlLEVBQUU7Z0JBQzVDLElBQU1DLE9BQU8sR0FBRyxxQkFsRkc1QywwQkFBMEIsYUFrRnZCeUMsWUFBVSxFQUFoQixJQUFLLENBQUEsWUFBWUMsZUFBZSxFQUFFQyxlQUFlLENBQUMsRUFDL0Q3QixTQUFTLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRUFDOUI4QixjQUFjLEdBQUcsSUFBSSxBQUFDO2dCQUV6QkMsTUFBTSxDQUFDQyxNQUFNLENBQUNILE9BQU8sRUFBRTtvQkFDdEI5QixTQUFTLEVBQVRBLFNBQVM7b0JBQ1QrQixjQUFjLEVBQWRBLGNBQWM7aUJBQ2QsQ0FBQyxDQUFDO2dCQUVILE9BQU9ELE9BQU8sQ0FBQzthQUNmOzs7WUFFRG5DLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNiLElBQU0sQUFBRVMsUUFBUSxHQUFLLElBQUksQ0FBQzhCLFVBQVUsQ0FBNUI5QixRQUFRLEFBQW9CLEFBQUM7Z0JBRXJDLE9BQU9BLFFBQVEsQ0FBQzthQUNoQjs7O1lBRURILEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNiLElBQU1rQyxvQkFBb0IsR0FBRyxJQUFJLENBQUNDLHNCQUFzQixFQUFFLEVBQ3ZEcEMsU0FBUyxHQUFHbUMsb0JBQW9CLEFBQUMsRUFBQyxHQUFHO2dCQUV4QyxPQUFPbkMsU0FBUyxDQUFDO2FBQ2pCOzs7WUFFRHFDLEdBQWdCLEVBQWhCQSxrQkFBZ0I7bUJBQWhCQSxTQUFBQSxnQkFBZ0IsQ0FBQ1QsZUFBZSxFQUFFQyxlQUFlLEVBQUVTLFFBQVEsRUFBRTtnQkFDNUQsSUFBTWQsSUFBSSxHQUFHLElBQUksQ0FBQ2YsT0FBTyxFQUFFLEVBQ3hCcUIsT0FBTyxHQUFHLElBQUksQ0FBQ0gsVUFBVSxDQUFDQyxlQUFlLEVBQUVDLGVBQWUsQ0FBQyxBQUFDO2dCQUUvRFMsUUFBUSxDQUFDQyxJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDO2dCQUV2QkYsZUFBZSxHQUFHWSxJQUFBQSxRQUFxQixzQkFBQSxFQUFDWixlQUFlLEVBQUVKLElBQUksQ0FBQyxDQUFDO2dCQUMvREssZUFBZSxHQUFHWSxJQUFBQSxRQUFxQixzQkFBQSxFQUFDWixlQUFlLEVBQUVMLElBQUksQ0FBQyxDQUFDO2dCQUUvRCxJQUFJLENBQUNrQixvQkFBb0IsQ0FBQyxTQUFDN0MsYUFBYSxFQUFLO29CQUM1Q0EsYUFBYSxDQUFDd0MsZ0JBQWdCLENBQUNULGVBQWUsRUFBRUMsZUFBZSxFQUFFUyxRQUFRLENBQUMsQ0FBQztpQkFDM0UsQ0FBQyxDQUFDO2FBQ0g7OztZQUVESyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQzNDLFNBQVMsRUFBRTtnQkFDdkJBLFNBQVMsR0FDUixJQUFJLENBQUM0QyxRQUFRLEVBQUUsR0FDZCxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDO2FBQ2hCOzs7WUFFQUQsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBSSxDQUFDRSxtQkFBbUIsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUNDLG9CQUFvQixFQUFFLENBQUM7YUFDM0I7OztZQUVERixHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFJLENBQUNHLGlCQUFpQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUUsQ0FBQzthQUN6Qjs7O1lBRURDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNULElBQUlsRCxTQUFTLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsQUFBQztnQkFFbkNELFNBQVMsR0FBRyxDQUFDQSxTQUFTLENBQUM7Z0JBRXZCLElBQUksQ0FBQzJDLFlBQVksQ0FBQzNDLFNBQVMsQ0FBQyxDQUFDO2FBQzdCOzs7WUFFRG1ELEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNWLElBQU0sQUFBRW5ELFNBQVMsR0FBSyxJQUFJLENBQUNrQyxVQUFVLENBQTdCbEMsU0FBUyxBQUFvQixBQUFDO2dCQUV0QyxJQUFJLENBQUMyQyxZQUFZLENBQUMzQyxTQUFTLENBQUMsQ0FBQztnQkFFN0IsSUFBSSxDQUFDb0QsVUFBVSxFQUFFLENBQUM7Z0JBRWxCLElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2xFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFcEMsSUFBSSxDQUFDbUUsVUFBVSxDQUFDLElBQUksQ0FBQ3ZELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFNUMscUJBNUptQmIsMEJBQTBCLGFBNEp2Q2lFLFVBQVEsRUFBZCxJQUFLLENBQUEsWUFBWTthQUNqQjs7O1lBRURJLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNiLElBQUksQ0FBQ0MsV0FBVyxFQUFFLENBQUM7Z0JBRW5CLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ3RFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFckMsSUFBSSxDQUFDdUUsV0FBVyxDQUFDLElBQUksQ0FBQzNELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFN0MscUJBdEttQmIsMEJBQTBCLGFBc0t2Q3FFLGFBQVcsRUFBakIsSUFBSyxDQUFBLFlBQWU7YUFDcEI7OztZQUVBSSxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDaEIsSUFBTSxBQUFFbkMsSUFBSSxHQUFLLElBQUksQ0FBQ1UsVUFBVSxDQUF4QlYsSUFBSSxBQUFvQixFQUN5QixZQUFnQixHQUFoQixJQUFJLENBQUNvQyxXQUFXLEVBQS9EQyxZQUFVLEdBQXFDLFlBQWdCLENBQS9EQSxVQUFVLEVBQUVDLGNBQVksR0FBdUIsWUFBZ0IsQ0FBbkRBLFlBQVksRUFBRUMsa0JBQWdCLEdBQUssWUFBZ0IsQ0FBckNBLGdCQUFnQixFQUM1QzNELFFBQVEsR0FBRyxJQUFJLENBQUNULFdBQVcsRUFBRSxFQUM3QnFFLFdBQVcsR0FBRzVELFFBQVEsQ0FBQzZELGNBQWMsRUFBRSxBQUFDO2dCQUVoRCxPQUFRO2tDQUVQLG9CQUFDQyxlQUF5QixRQUFBO3dCQUFDMUMsSUFBSSxFQUFFQSxJQUFJO3dCQUN2QnFDLFVBQVUsRUFBRUEsWUFBVTt3QkFDdEJDLFlBQVksRUFBRUEsY0FBWTt3QkFDMUJDLGdCQUFnQixFQUFFQSxrQkFBZ0I7c0JBQzlDO2tDQUNGLG9CQUFDQyxXQUFXO3dCQUFDNUQsUUFBUSxFQUFFQSxRQUFRO3NCQUFJO2lCQUVuQyxDQUFFO2FBQ0g7Ozs7Q0FhRCxDQXRNdUQrRCxLQUFhLFFBQUEsQ0FzTXBFO0FBWEEsZ0JBM0xvQmpGLDBCQUEwQixFQTJMdkMyRSxZQUFVLEVBQUdBLEtBQVUsUUFBQSxDQUFDO0FBRS9CLGdCQTdMb0IzRSwwQkFBMEIsRUE2THZDNEUsY0FBWSxFQUFHQSxPQUFZLFFBQUEsQ0FBQztBQUVuQyxnQkEvTG9CNUUsMEJBQTBCLEVBK0x2QzZFLGtCQUFnQixFQUFHQSxjQUFnQixRQUFBLENBQUM7QUFFM0MsZ0JBak1vQjdFLDBCQUEwQixFQWlNdkNrRixNQUFJLEVBQUc3QyxXQUE4QiwrQkFBQSxDQUFDO0FBRTdDLGdCQW5Nb0JyQywwQkFBMEIsRUFtTXZDbUYsbUJBQWlCLEVBQUc7SUFDeEJDLFNBQVMsRUFBRSxnQkFBZ0I7Q0FDNUIsQ0FBQztBQUdKdEMsTUFBTSxDQUFDQyxNQUFNLENBQUMvQywwQkFBMEIsQ0FBQ3FGLFNBQVMsRUFBRUMsZ0JBQVUsV0FBQSxDQUFDLENBQUMifQ==