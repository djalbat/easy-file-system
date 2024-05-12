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
        _define_property(_assert_this_initialized(_this), "dragOverCustomHandler", function(event, element, dragElement) {
            var collapsed = _this.isCollapsed();
            if (collapsed) {
                return;
            }
            var path = _this.getPath(), explorer = _this.getExplorer(), dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = concatenatePaths(path, dragEntryItemName);
            markerEntryItemExplorer = explorer; ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
        _define_property(_assert_this_initialized(_this), "dropCustomHandler", function(event, element, dragElement, aborted, done) {
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
                var collapsed = this.isCollapsed();
                collapsed = !collapsed;
                collapsed ? this.collapse() : this.expand();
            }
        },
        {
            key: "singleClick",
            value: function singleClick() {
                this.expand();
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
            key: "isTopmost",
            value: function isTopmost() {
                var topmost = this.properties.topmost;
                return topmost;
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
            key: "getReference",
            value: function getReference() {
                var explorer = this.getExplorer(), reference = explorer.getReference();
                return reference;
            }
        },
        {
            key: "getReferences",
            value: function getReferences() {
                var explorer = this.getExplorer(), references = explorer.getReferences();
                return references;
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
                collapsed ? this.collapse() : this.expand();
                this.enableDrop();
                this.onCustomDrop(this.dropCustomHandler);
                this.onCustomDragOver(this.dragOverCustomHandler);
                _get(_get_prototype_of(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offCustomDrop(this.dropCustomHandler);
                this.offCustomDragOver(this.dragOverCustomHandler);
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
_define_property(DirectoryNameDragEntryItem, "ignoredProperties", [
    "topmost"
]);
_define_property(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _easydraganddrop.dropMixins);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0ZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcmFnRWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGlmIChjb2xsYXBzZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgZHJhZ0VudHJ5SXRlbU5hbWUpO1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBleHBsb3JlcjsgIC8vL1xuXG5cdFx0aWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcblx0XHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0ZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cblx0ZG91YmxlQ2xpY2soKSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG5cdHNpbmdsZUNsaWNrKCkge1xuXHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRpc1RvcG1vc3QoKSB7XG5cdFx0Y29uc3QgeyB0b3Btb3N0IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gdG9wbW9zdDtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRnZXRSZWZlcmVuY2UoKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0cmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCk7XG5cblx0XHRyZXR1cm4gcmVmZXJlbmNlO1xuXHR9XG5cblx0Z2V0UmVmZXJlbmNlcygpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZWZlcmVuY2VzID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlcygpO1xuXG5cdFx0cmV0dXJuIHJlZmVyZW5jZXM7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1xuXG5cdFx0dGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZVNwYW5OYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cblx0cmVtb3ZlKCkge1xuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlQYXRoID0gcGF0aDtcdC8vL1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vbkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG5cblx0XHR0aGlzLm9uQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuXG5cdFx0c3VwZXIuZGlkTW91bnQoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZGlzYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub2ZmQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuXHRcdHRoaXMub2ZmQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuXG5cdFx0c3VwZXIud2lsbFVubW91bnQoKTtcblx0fVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyBOYW1lU3BhbiwgVG9nZ2xlQnV0dG9uLCBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIEVudHJpZXNMaXN0ID0gZXhwbG9yZXIuZ2V0RW50cmllc0xpc3QoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBleHBsb3Jlcj17ZXhwbG9yZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgTmFtZVNwYW49e05hbWVTcGFufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFRvZ2dsZUJ1dHRvbj17VG9nZ2xlQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IERpcmVjdG9yeU5hbWVTVkc9e0RpcmVjdG9yeU5hbWVTVkd9XG5cdFx0XHQvPixcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBUb2dnbGVCdXR0b24gPSBUb2dnbGVCdXR0b247XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVTVkcgPSBEaXJlY3RvcnlOYW1lU1ZHO1xuXG5cdHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcblx0XHRcInRvcG1vc3RcIlxuXHRdO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImRyYWdPdmVyQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50IiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJwYXRoIiwiZ2V0UGF0aCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwicmVtb3ZlTWFya2VyIiwiYWRkTWFya2VyIiwiZHJvcEN1c3RvbUhhbmRsZXIiLCJhYm9ydGVkIiwiZG9uZSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZG91YmxlQ2xpY2siLCJjb2xsYXBzZSIsImV4cGFuZCIsInNpbmdsZUNsaWNrIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwibmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiaXNUb3Btb3N0IiwidG9wbW9zdCIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJnZXRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsInJldHJpZXZlUGF0aE1hcHMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsInBhdGhNYXAiLCJnZXRQYXRoTWFwIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwicHVzaCIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImNvbGxhcHNlVG9nZ2xlQnV0dG9uIiwiZXhwYW5kRW50cmllc0xpc3QiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJyZW1vdmUiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uQ3VzdG9tRHJvcCIsIm9uQ3VzdG9tRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmQ3VzdG9tRHJvcCIsIm9mZkN1c3RvbURyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiTmFtZVNwYW4iLCJUb2dnbGVCdXR0b24iLCJEaXJlY3RvcnlOYW1lU1ZHIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IiwiRHJhZ0VudHJ5SXRlbSIsInR5cGUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7K0JBYk07eUJBQ0c7NkRBRUw7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