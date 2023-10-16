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
            key: "delayedDoubleClick",
            value: function delayedDoubleClick() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0ZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cblx0XHRpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGlmIChjb2xsYXBzZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSBleHBsb3Jlci5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG5cdFx0aWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcblx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCBkcmFnRW50cnlJdGVtTmFtZSk7XG5cblx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IGV4cGxvcmVyOyAgLy8vXG5cblx0XHRpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuXHRcdFx0Y29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdFx0cHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblx0XHR9XG5cdH1cblxuXHRkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSA9IChkcmFnRWxlbWVudCBpbnN0YW5jZW9mIERyYWdFbnRyeUl0ZW0pO1xuXG4gICAgaWYgKCFkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0pIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG5cdGRlbGF5ZWREb3VibGVDbGljaygpIHtcblx0XHR0aGlzLnRvZ2dsZSgpO1xuXHR9XG5cblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IHRydWU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlJdGVtTmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0aXNDb2xsYXBzZWQoKSB7XG5cdFx0Y29uc3QgZW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzRW50cmllc0xpc3RDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRjb2xsYXBzZWQgPSBlbnRyaWVzTGlzdENvbGxhcHNlZDtcdC8vL1xuXG5cdFx0cmV0dXJuIGNvbGxhcHNlZDtcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XG5cblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmNvbGxhcHNlVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5leHBhbmRFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuZXhwYW5kVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlQYXRoID0gcGF0aDtcdC8vL1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlcik7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVTcGFuLCBUb2dnbGVCdXR0b24sIERpcmVjdG9yeU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgRW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGV4cGxvcmVyPXtleHBsb3Jlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lU3Bhbj17TmFtZVNwYW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgRGlyZWN0b3J5TmFtZVNWRz17RGlyZWN0b3J5TmFtZVNWR31cblx0XHRcdC8+LFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdF0pO1xuXHR9XG5cbiAgc3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIFRvZ2dsZUJ1dHRvbiA9IFRvZ2dsZUJ1dHRvbjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZVNWRyA9IERpcmVjdG9yeU5hbWVTVkc7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJlbGVtZW50IiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwicGF0aCIsImdldFBhdGgiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImRyb3BIYW5kbGVyIiwiYWJvcnRlZCIsImRvbmUiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRlbGF5ZWREb3VibGVDbGljayIsInRvZ2dsZSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIm5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibG9jYWxlQ29tcGFyZSIsImVudHJpZXNMaXN0Q29sbGFwc2VkIiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsInJldHJpZXZlUGF0aE1hcHMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsInBhdGhNYXAiLCJnZXRQYXRoTWFwIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwicHVzaCIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJleHBhbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiY29sbGFwc2VUb2dnbGVCdXR0b24iLCJleHBhbmRFbnRyaWVzTGlzdCIsImV4cGFuZFRvZ2dsZUJ1dHRvbiIsInJlbW92ZSIsImRpcmVjdG9yeVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiTmFtZVNwYW4iLCJUb2dnbGVCdXR0b24iLCJEaXJlY3RvcnlOYW1lU1ZHIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRGl2IiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7K0JBYk07eUJBQ0c7NkRBRUw7MkRBQ0M7b0VBQ0c7cUVBQ2E7dUJBRW1COzBCQUM0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekksSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRDtBQUVPLElBQUEsQUFBTUQsMkNBK01sQixBQS9NWTtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDcEJHLGtEQUFBQSxtQkFBa0IsU0FBQ0MsYUFBYUM7WUFDL0IsSUFBTUMs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