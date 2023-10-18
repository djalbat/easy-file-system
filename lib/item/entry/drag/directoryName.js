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
var _easydraganddrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _toggle = /*#__PURE__*/ _interop_require_default(require("../../../button/toggle"));
var _drag = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/drag"));
var _directoryName = /*#__PURE__*/ _interop_require_default(require("../../../svg/directoryName"));
var _directoryName1 = /*#__PURE__*/ _interop_require_default(require("../../../div/item/entry/drag/directoryName"));
var _pathMap = require("../../../utilities/pathMap");
var _entryTypes = require("../../../entryTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths;
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    var _super = _create_super(DirectoryNameDragEntryItem);
    function DirectoryNameDragEntryItem() {
        _class_call_check(this, DirectoryNameDragEntryItem);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "dragOverHandler", function(dragElement, element) {
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
        _define_property(_assert_this_initialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
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
        return _this;
    }
    _create_class(DirectoryNameDragEntryItem, [
        {
            key: "doubleClick",
            value: function doubleClick() {
                this.toggle();
            }
        },
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
                var name = this.getName(), pathMap = this.getPathMap(sourceEntryPath, targetEntryPath), nameSpanName = this.getNameSpanName();
                pathMaps.push(pathMap);
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name);
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameSpanName);
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
            key: "remove",
            value: function remove() {
                var path = this.getPath(), explorer = this.getExplorer(), directoryPath = path; ///
                explorer.removeDirectoryPath(directoryPath);
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
                _get(_get_prototype_of(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offDrop(this.dropHandler);
                this.offDragOver(this.dragOverHandler);
                _get(_get_prototype_of(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var name = this.properties.name, _this_constructor = this.constructor, NameSpan = _this_constructor.NameSpan, _$ToggleButton = _this_constructor.ToggleButton, _$DirectoryNameSVG = _this_constructor.DirectoryNameSVG, explorer = this.getExplorer(), EntriesList = explorer.getEntriesList();
                return [
                    /*#__PURE__*/ React.createElement(_directoryName1.default, {
                        name: name,
                        explorer: explorer,
                        NameSpan: NameSpan,
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
_define_property(DirectoryNameDragEntryItem, "type", _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
_define_property(DirectoryNameDragEntryItem, "ToggleButton", _toggle.default);
_define_property(DirectoryNameDragEntryItem, "DirectoryNameSVG", _directoryName.default);
_define_property(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _easydraganddrop.dropMixins);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0ZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cblx0XHRpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGlmIChjb2xsYXBzZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSBleHBsb3Jlci5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG5cdFx0aWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcblx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCBkcmFnRW50cnlJdGVtTmFtZSk7XG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IGV4cGxvcmVyOyAgLy8vXG5cblx0XHRpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuXHRcdFx0Y29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblx0XHR9XG5cdH1cblxuXHRkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG5cdGRvdWJsZUNsaWNrKCkge1xuXHRcdHRoaXMudG9nZ2xlKCk7XG5cdH1cblxuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRpc0NvbGxhcHNlZCgpIHtcblx0XHRjb25zdCBlbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNFbnRyaWVzTGlzdENvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IGVudHJpZXNMaXN0Q29sbGFwc2VkO1x0Ly8vXG5cblx0XHRyZXR1cm4gY29sbGFwc2VkO1xuXHR9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0cGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVTcGFuTmFtZSk7XG5cblx0XHR0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRkcmFnRW50cnlJdGVtLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblx0XHR9KTtcblx0fVxuXG5cdHNldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2VFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuY29sbGFwc2VUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5leHBhbmRUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcblx0XHRsZXQgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0Y29sbGFwc2VkID0gIWNvbGxhcHNlZDtcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cdH1cblxuXHRyZW1vdmUoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeVBhdGggPSBwYXRoO1x0Ly8vXG5cblx0XHRleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHRoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG5cblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG5cdFx0dGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlcik7XG5cblx0XHR0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgTmFtZVNwYW4sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZXhwbG9yZXI9e2V4cGxvcmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVTcGFuPXtOYW1lU3Bhbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XSk7XG5cdH1cblxuICBzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuICBzdGF0aWMgVG9nZ2xlQnV0dG9uID0gVG9nZ2xlQnV0dG9uO1xuXG5cdHN0YXRpYyBEaXJlY3RvcnlOYW1lU1ZHID0gRGlyZWN0b3J5TmFtZVNWRztcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImVsZW1lbnQiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJwYXRoIiwiZ2V0UGF0aCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZG91YmxlQ2xpY2siLCJ0b2dnbGUiLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcCIsIm5hbWVTcGFuTmFtZSIsImdldE5hbWVTcGFuTmFtZSIsInB1c2giLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZXhwYW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImNvbGxhcHNlVG9nZ2xlQnV0dG9uIiwiZXhwYW5kRW50cmllc0xpc3QiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJyZW1vdmUiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsIk5hbWVTcGFuIiwiVG9nZ2xlQnV0dG9uIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkVudHJpZXNMaXN0IiwiZ2V0RW50cmllc0xpc3QiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OytCQWJNO3lCQUNHOzZEQUVMOzJEQUNDO29FQUNHO3FFQUNhO3VCQUVtQjswQkFDNEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpJLElBQU0sQUFBRUMsbUJBQXFCQyx3QkFBYSxDQUFsQ0Q7QUFFTyxJQUFBLEFBQU1ELDJDQStNbEIsQUEvTVk7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ3BCRyxrREFBQUEsbUJBQWtCLFNBQUNDLGFBQWFDO1lBQy9CLElBQU1DLDJCQUE0QkYsQUFBVyxZ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