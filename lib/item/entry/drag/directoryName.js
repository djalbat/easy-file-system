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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths;
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    function DirectoryNameDragEntryItem() {
        _class_call_check(this, DirectoryNameDragEntryItem);
        var _this;
        _this = _call_super(this, DirectoryNameDragEntryItem, arguments), _define_property(_this, "dragOverCustomHandler", function(event, element, dragElement) {
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
        }), _define_property(_this, "dropCustomHandler", function(event, element, dragElement, aborted, done) {
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
        });
        return _this;
    }
    _create_class(DirectoryNameDragEntryItem, [
        {
            key: "doubleClick",
            value: function doubleClick(event, element) {
                var collapsed = this.isCollapsed();
                collapsed = !collapsed;
                collapsed ? this.collapse() : this.expand();
            }
        },
        {
            key: "singleClick",
            value: function singleClick(event, element) {
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
            key: "removeFromExplorer",
            value: function removeFromExplorer() {
                var path = this.getPath(), explorer = this.getExplorer(), directoryPath = path; ///
                explorer.removeDirectoryPath(directoryPath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0ZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcmFnRWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGlmIChjb2xsYXBzZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgZHJhZ0VudHJ5SXRlbU5hbWUpO1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBleHBsb3JlcjsgIC8vL1xuXG5cdFx0aWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcblx0XHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0ZHJvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyYWdFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG5cdGRvdWJsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHRjb2xsYXBzZWQgP1xuXHRcdFx0dGhpcy5jb2xsYXBzZSgpIDpcblx0XHRcdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG5cdHNpbmdsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5leHBhbmQoKTtcblx0fVxuXG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGlzVG9wbW9zdCgpIHtcblx0XHRjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiB0b3Btb3N0O1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG5cdGdldFJlZmVyZW5jZSgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKTtcblxuXHRcdHJldHVybiByZWZlcmVuY2U7XG5cdH1cblxuXHRnZXRSZWZlcmVuY2VzKCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdHJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2VzKCk7XG5cblx0XHRyZXR1cm4gcmVmZXJlbmNlcztcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XG5cblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmVGcm9tRXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeVBhdGggPSBwYXRoO1x0Ly8vXG5cblx0XHRleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuXHR9XG5cblx0Y29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cblx0ZGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuXHRcdHRoaXMub25DdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZDdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG5cdFx0dGhpcy5vZmZDdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVTcGFuLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgRW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGV4cGxvcmVyPXtleHBsb3Jlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lU3Bhbj17TmFtZVNwYW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgRGlyZWN0b3J5TmFtZVNWRz17RGlyZWN0b3J5TmFtZVNWR31cblx0XHRcdC8+LFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdF0pO1xuXHR9XG5cbiAgc3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuXHRcdFwidG9wbW9zdFwiXG5cdF07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwiZHJhZ092ZXJDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnQiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsInBhdGgiLCJnZXRQYXRoIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiLCJkcm9wQ3VzdG9tSGFuZGxlciIsImFib3J0ZWQiLCJkb25lIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsImNvbGxhcHNlIiwiZXhwYW5kIiwic2luZ2xlQ2xpY2siLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJpc1RvcG1vc3QiLCJ0b3Btb3N0IiwicHJvcGVydGllcyIsImVudHJpZXNMaXN0Q29sbGFwc2VkIiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsImdldFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwicmV0cmlldmVQYXRoTWFwcyIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXBzIiwicGF0aE1hcCIsImdldFBhdGhNYXAiLCJuYW1lU3Bhbk5hbWUiLCJnZXROYW1lU3Bhbk5hbWUiLCJwdXNoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGcm9tRXhwbG9yZXIiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJjb2xsYXBzZVRvZ2dsZUJ1dHRvbiIsImV4cGFuZEVudHJpZXNMaXN0IiwiZXhwYW5kVG9nZ2xlQnV0dG9uIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21Ecm9wIiwib25DdXN0b21EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21Ecm9wIiwib2ZmQ3VzdG9tRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiTmFtZVNwYW4iLCJUb2dnbGVCdXR0b24iLCJEaXJlY3RvcnlOYW1lU1ZHIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IiwiRHJhZ0VudHJ5SXRlbSIsInR5cGUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7K0JBYk07eUJBQ0c7NkRBRUw7MkRBQ0M7b0VBQ0c7cUVBQ2E7dUJBRW1COzBCQUM0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6SSxJQUFNLEFBQUVDLG1CQUFxQkMsd0JBQWEsQ0FBbENEO0FBRU8sSUFBQSxBQUFNRCwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSx3Q0FDcEJHLHdCQUFBQSx5QkFBd0IsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDeEMsSUFB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