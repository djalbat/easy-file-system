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
var _necessary = require("necessary");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var concatenatePaths = _necessary.pathUtilities.concatenatePaths;
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    var _super = _createSuper(DirectoryNameDragEntryItem);
    function DirectoryNameDragEntryItem() {
        _classCallCheck(this, DirectoryNameDragEntryItem);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
            var dragElementDragEntryItem = _instanceof(dragElement, _drag.default);
            if (!dragElementDragEntryItem) {
                done();
                return;
            }
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        _defineProperty(_assertThisInitialized(_this), "dragOverHandler", function(dragElement, element) {
            var dragElementDragEntryItem = _instanceof(dragElement, _drag.default);
            if (!dragElementDragEntryItem) {
                return;
            }
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
            markerEntryItemPath = concatenatePaths(path, dragEntryItemName);
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
            key: "isCollapsed",
            value: function isCollapsed() {
                var entriesListCollapsed = this.isEntriesListCollapsed(), collapsed = entriesListCollapsed; ///
                return collapsed;
            }
        },
        {
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
                var name = this.getName(), pathMap = this.getPathMap(sourceEntryPath, targetEntryPath), nameInputName = this.getNameInputName();
                pathMaps.push(pathMap);
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name);
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameInputName);
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
                this.onDrop(this.dropHandler);
                this.onDragOver(this.dragOverHandler);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offDrop(this.dropHandler);
                this.offDragOver(this.dragOverHandler);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var name = this.properties.name, _this_constructor = this.constructor, NameInput = _this_constructor.NameInput, NameButton = _this_constructor.NameButton, _$ToggleButton = _this_constructor.ToggleButton, _$DirectoryNameSVG = _this_constructor.DirectoryNameSVG, explorer = this.getExplorer(), EntriesList = explorer.getEntriesList();
                return [
                    /*#__PURE__*/ React.createElement(_directoryName1.default, {
                        name: name,
                        explorer: explorer,
                        NameInput: NameInput,
                        NameButton: NameButton,
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
_defineProperty(DirectoryNameDragEntryItem, "type", _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "ToggleButton", _toggle.default);
_defineProperty(DirectoryNameDragEntryItem, "DirectoryNameSVG", _directoryName.default);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9pdGVtL2VudHJ5L2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcbiAgZHJvcEhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIgPSAoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0gPSAoZHJhZ0VsZW1lbnQgaW5zdGFuY2VvZiBEcmFnRW50cnlJdGVtKTtcblxuICAgIGlmICghZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG4gICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIGRyYWdFbnRyeUl0ZW1OYW1lKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XG5cblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lSW5wdXROYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVJbnB1dCwgTmFtZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uLCBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIEVudHJpZXNMaXN0ID0gZXhwbG9yZXIuZ2V0RW50cmllc0xpc3QoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8RGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9yZXI9e2V4cGxvcmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZUlucHV0PXtOYW1lSW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XSk7XG5cdH1cblxuICBzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuICBzdGF0aWMgVG9nZ2xlQnV0dG9uID0gVG9nZ2xlQnV0dG9uO1xuXG5cdHN0YXRpYyBEaXJlY3RvcnlOYW1lU1ZHID0gRGlyZWN0b3J5TmFtZVNWRztcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwicGF0aCIsImdldFBhdGgiLCJleHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZW50cmllc0xpc3RDb2xsYXBzZWQiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwicmV0cmlldmVQYXRoTWFwcyIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXBzIiwicGF0aE1hcCIsImdldFBhdGhNYXAiLCJuYW1lSW5wdXROYW1lIiwiZ2V0TmFtZUlucHV0TmFtZSIsInB1c2giLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZXhwYW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImNvbGxhcHNlVG9nZ2xlQnV0dG9uIiwiZXhwYW5kRW50cmllc0xpc3QiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJ0b2dnbGUiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJOYW1lSW5wdXQiLCJOYW1lQnV0dG9uIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkVudHJpZXNMaXN0IiwiZ2V0RW50cmllc0xpc3QiLCJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7K0JBYk07eUJBQ0c7MkRBRUw7eURBQ0M7a0VBQ0c7bUVBQ1M7dUJBRXVCOzBCQUM0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekksSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRDtBQUVPLElBQUEsQUFBTUQsMkNBb01sQixBQXBNWTtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJHLCtDQUFBQSxlQUFjLFNBQUNDLGFBQWFDLFNBQVNDLFNBQVNDLE1BQVM7WUFDckQsSUFBTUMsMkJBQTRCSixBQUFXLFlBQVhBLGFBQXVCSyxhQUFhO1lBRXRFLElBQUksQ0FBQ0QsMEJBQTBCO2dCQUM3QkQ7Z0JBRUE7WUFDRixDQUFDO1lBRUQsSUFBTUcsZ0JBQWdCTixhQUNoQk8sa0JBQWtCLE1BQUtDLHVCQUF1QixJQUM5Q0MsMEJBQTBCRixnQkFBZ0JHLFdBQVc7WUFFM0QsSUFBSVQsU0FBUztnQkFDWFEsd0JBQXdCRSxZQUFZO2dCQUVwQ1I7Z0JBRUE7WUFDRixDQUFDO1lBRURNLHdCQUF3QkcsaUJBQWlC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