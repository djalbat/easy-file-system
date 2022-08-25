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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlciA9IChkcmFnRWxlbWVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cbiAgICBpZiAoY29sbGFwc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gZXhwbG9yZXIuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGAke3BhdGh9LyR7ZHJhZ0VudHJ5SXRlbU5hbWV9YDtcblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gc3VwZXIuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gdHJ1ZTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0Y29sbGFwc2VkLFxuXHRcdFx0ZW50cnlEaXJlY3Rvcnlcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0Z2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1xuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmNvbGxhcHNlVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5leHBhbmRFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuZXhwYW5kVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgTmFtZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uLCBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIEVudHJpZXNMaXN0ID0gZXhwbG9yZXIuZ2V0RW50cmllc0xpc3QoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8RGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgTmFtZUJ1dHRvbj17TmFtZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFRvZ2dsZUJ1dHRvbj17VG9nZ2xlQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgRGlyZWN0b3J5TmFtZVNWRz17RGlyZWN0b3J5TmFtZVNWR31cblx0XHRcdC8+LFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdF0pO1xuXHR9XG5cblx0c3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBUb2dnbGVCdXR0b24gPSBUb2dnbGVCdXR0b247XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVTVkcgPSBEaXJlY3RvcnlOYW1lU1ZHO1xuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwicGF0aCIsImdldFBhdGgiLCJleHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicGF0aE1hcHMiLCJwdXNoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJzZXRDb2xsYXBzZWQiLCJjb2xsYXBzZSIsImV4cGFuZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJjb2xsYXBzZVRvZ2dsZUJ1dHRvbiIsImV4cGFuZEVudHJpZXNMaXN0IiwiZXhwYW5kVG9nZ2xlQnV0dG9uIiwidG9nZ2xlIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJOYW1lQnV0dG9uIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkVudHJpZXNMaXN0IiwiZ2V0RW50cmllc0xpc3QiLCJEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBYVFBLDBCQUEwQjs7OytCQVhwQixvQkFBb0I7eURBRXhCLHNCQUFzQjsyREFDcEIsd0JBQXdCO3lEQUN2QiwwQkFBMEI7a0VBQ3ZCLDRCQUE0QjttRUFDbkIsdUNBQXVDO3VCQUVoQiw0QkFBNEI7MEJBQ2dELHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0ksSUFBQSxBQUFNQSwwQkFBMEIsaUJBcU41QyxBQXJOWTtjQUFNQSwwQkFBMEI7OEJBQTFCQSwwQkFBMEI7YUFBMUJBLDBCQUEwQjs4QkFBMUJBLDBCQUEwQjs7O1FBQzdDQywrQ0FBQUEsYUFBVyxFQUFHLFNBQUNDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxP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