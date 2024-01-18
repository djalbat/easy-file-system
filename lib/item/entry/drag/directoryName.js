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
        _define_property(_assert_this_initialized(_this), "dragOverCustomHandler", function(dragElement, element) {
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
        _define_property(_assert_this_initialized(_this), "dropCustomHandler", function(dragElement, aborted, element, done) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0ZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcblx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCBkcmFnRW50cnlJdGVtTmFtZSk7XG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IGV4cGxvcmVyOyAgLy8vXG5cblx0XHRpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuXHRcdFx0Y29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblx0XHR9XG5cdH1cblxuXHRkcm9wQ3VzdG9tSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG5cdGRvdWJsZUNsaWNrKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuXHRzaW5nbGVDbGljaygpIHtcblx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IHRydWU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlJdGVtTmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0aXNUb3Btb3N0KCkge1xuXHRcdGNvbnN0IHsgdG9wbW9zdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIHRvcG1vc3Q7XG5cdH1cblxuXHRpc0NvbGxhcHNlZCgpIHtcblx0XHRjb25zdCBlbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNFbnRyaWVzTGlzdENvbGxhcHNlZCgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IGVudHJpZXNMaXN0Q29sbGFwc2VkO1x0Ly8vXG5cblx0XHRyZXR1cm4gY29sbGFwc2VkO1xuXHR9XG5cblx0Z2V0UmVmZXJlbmNlKCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpO1xuXG5cdFx0cmV0dXJuIHJlZmVyZW5jZTtcblx0fVxuXG5cdGdldFJlZmVyZW5jZXMoKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0cmVmZXJlbmNlcyA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZXMoKTtcblxuXHRcdHJldHVybiByZWZlcmVuY2VzO1xuXHR9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0cGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVTcGFuTmFtZSk7XG5cblx0XHR0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRkcmFnRW50cnlJdGVtLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblx0XHR9KTtcblx0fVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIHRoaXMuY29sbGFwc2VFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuY29sbGFwc2VUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5leHBhbmRUb2dnbGVCdXR0b24oKTtcbiAgfVxuXG5cdHJlbW92ZSgpIHtcblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5UGF0aCA9IHBhdGg7XHQvLy9cblxuXHRcdGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGNvbGxhcHNlZCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cblx0XHR0aGlzLmVuYWJsZURyb3AoKTtcblxuXHRcdHRoaXMub25DdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG5cdFx0dGhpcy5vbkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9mZkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG5cblx0XHR0aGlzLm9mZkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgTmFtZVNwYW4sIFRvZ2dsZUJ1dHRvbiwgRGlyZWN0b3J5TmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZXhwbG9yZXI9e2V4cGxvcmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IE5hbWVTcGFuPXtOYW1lU3Bhbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUb2dnbGVCdXR0b249e1RvZ2dsZUJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XSk7XG5cdH1cblxuICBzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuICBzdGF0aWMgVG9nZ2xlQnV0dG9uID0gVG9nZ2xlQnV0dG9uO1xuXG5cdHN0YXRpYyBEaXJlY3RvcnlOYW1lU1ZHID0gRGlyZWN0b3J5TmFtZVNWRztcblxuXHRzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG5cdFx0XCJ0b3Btb3N0XCJcblx0XTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJkcmFnT3ZlckN1c3RvbUhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImVsZW1lbnQiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsInBhdGgiLCJnZXRQYXRoIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiLCJkcm9wQ3VzdG9tSGFuZGxlciIsImFib3J0ZWQiLCJkb25lIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsImNvbGxhcHNlIiwiZXhwYW5kIiwic2luZ2xlQ2xpY2siLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJuYW1lIiwiZW50cnlJdGVtTmFtZSIsImxvY2FsZUNvbXBhcmUiLCJpc1RvcG1vc3QiLCJ0b3Btb3N0IiwicHJvcGVydGllcyIsImVudHJpZXNMaXN0Q29sbGFwc2VkIiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsImdldFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwicmV0cmlldmVQYXRoTWFwcyIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXBzIiwicGF0aE1hcCIsImdldFBhdGhNYXAiLCJuYW1lU3Bhbk5hbWUiLCJnZXROYW1lU3Bhbk5hbWUiLCJwdXNoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJleHBhbmRFbnRyaWVzTGlzdCIsImV4cGFuZFRvZ2dsZUJ1dHRvbiIsInJlbW92ZSIsImRpcmVjdG9yeVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21Ecm9wIiwib25DdXN0b21EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21Ecm9wIiwib2ZmQ3VzdG9tRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJOYW1lU3BhbiIsIlRvZ2dsZUJ1dHRvbiIsIkRpcmVjdG9yeU5hbWVTVkciLCJFbnRyaWVzTGlzdCIsImdldEVudHJpZXNMaXN0IiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1EaXYiLCJEcmFnRW50cnlJdGVtIiwidHlwZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OzsrQkFiTTt5QkFDRzs2REFFTDsyREFDQztvRUFDRztxRUFDYTt1QkFFbUI7MEJBQzRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpJLElBQU0sQUFBRUMsbUJBQXFCQyx3QkFBYSxDQUFsQ0Q7QUFFTyxJQUFBLEFBQU1ELDJDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ3BCRyxrREFBQUEseUJBQXdCLFNBQUNDLGFBQWFDO1lBQ3JDLElBQU1DLFlBQVksTUFBS0MsV0FBVztZQUVsQyxJQUFJRCxXQUFXO2dCQUNkO1lBQ0Q7WUFFQSxJQUFNRSxPQUFPLE1BQUtDLE9B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