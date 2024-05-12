"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easydraganddrop = require("easy-drag-and-drop");
var _name = /*#__PURE__*/ _interop_require_default(require("../../span/name"));
var _entry = /*#__PURE__*/ _interop_require_default(require("../../item/entry"));
var _constants = require("../../constants");
var _entryTypes = require("../../entryTypes");
var _pathMap = require("../../utilities/pathMap");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  user-select: none;\n    \n  font-weight: normal;\n  \n  .selected {\n    font-weight: bold;\n  }\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DragEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(DragEntryItem, EntryItem);
    var _super = _create_super(DragEntryItem);
    function DragEntryItem() {
        _class_call_check(this, DragEntryItem);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "nameSpanChangeCustomHandler", function(event, element) {
            var created = _this.isCreated(), explorer = _this.getExplorer(), nameSpanName = _this.getNameSpanName();
            explorer.enable();
            if (nameSpanName === _constants.PERIOD || nameSpanName === _constants.EMPTY_STRING) {
                _this.cancel(created);
                return;
            }
            var dragEntryItem = _assert_this_initialized(_this); ///
            if (created) {
                explorer.createDragEntryItem(dragEntryItem, function() {
                    _this.reset();
                });
                return;
            }
            explorer.renameDragEntryItem(dragEntryItem, function() {
                _this.reset();
            });
        });
        _define_property(_assert_this_initialized(_this), "nameSpanCancelCustomHandler", function(event, element) {
            var created = _this.isCreated(), explorer = _this.getExplorer();
            explorer.enable();
            _this.cancel(created);
        });
        _define_property(_assert_this_initialized(_this), "startDragCustomHandler", function(event, element) {
            var path = _this.getPath(), type = _this.getType(), explorer = _this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
            explorer.addMarker(markerEntryItemPath, dragEntryItemType);
        });
        _define_property(_assert_this_initialized(_this), "stopDragCustomHandler", function(event, element, dropElement, aborted, done) {
            if (dropElement !== null) {
                done();
                return;
            }
            var markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            var dragEntryItem = _assert_this_initialized(_this); ///
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        return _this;
    }
    _create_class(DragEntryItem, [
        {
            key: "click",
            value: function click() {
                var explorer = this.getExplorer(), dragEntryItem = this, selected = explorer.selectOrDeselectDragEntryItem(dragEntryItem);
                return selected;
            }
        },
        {
            key: "isReadOnly",
            value: function isReadOnly() {
                var readOnly = this.properties.readOnly;
                return readOnly;
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
            key: "getPathMap",
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var name = this.getName(), readOnly = this.isReadOnly(), collapsed = this.isCollapsed(), nameSpanName = this.getNameSpanName(), entryDirectory = this.getEntryDirectory();
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name); ///
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameSpanName); ///
                var pathMap = {
                    readOnly: readOnly,
                    collapsed: collapsed,
                    entryDirectory: entryDirectory,
                    sourceEntryPath: sourceEntryPath,
                    targetEntryPath: targetEntryPath
                };
                return pathMap;
            }
        },
        {
            key: "getPathMaps",
            value: function getPathMaps(sourceEntryPath, targetEntryPath) {
                var pathMaps = [];
                this.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
                pathMaps.reverse();
                return pathMaps;
            }
        },
        {
            key: "getEntryDirectory",
            value: function getEntryDirectory() {
                var directoryNameDragEntryItem = this.isDirectoryNameDragEntryItem(), entryDirectory = directoryNameDragEntryItem; ///
                return entryDirectory;
            }
        },
        {
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
            }
        },
        {
            key: "isDirectoryNameDragEntryItem",
            value: function isDirectoryNameDragEntryItem() {
                var type = this.getType(), typeDirectoryNameDragEntryItemType = type === _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE, directoryNameDragEntryItem = typeDirectoryNameDragEntryItemType; ///
                return directoryNameDragEntryItem;
            }
        },
        {
            key: "setCreated",
            value: function setCreated(created) {
                this.updateState({
                    created: created
                });
            }
        },
        {
            key: "isCreated",
            value: function isCreated() {
                var created = this.getState().created;
                return created;
            }
        },
        {
            key: "isSelected",
            value: function isSelected() {
                var selected = this.hasClass("selected"); ///
                return selected;
            }
        },
        {
            key: "deselect",
            value: function deselect() {
                this.removeClass("selected");
            }
        },
        {
            key: "select",
            value: function select() {
                this.addClass("selected");
            }
        },
        {
            key: "create",
            value: function create() {
                var created = true, explorer = this.getExplorer(), nameSpanName = _constants.EMPTY_STRING; ///
                explorer.disable();
                this.setCreated(created);
                this.setNameSpanName(nameSpanName);
                this.editNameSpan();
            }
        },
        {
            key: "rename",
            value: function rename() {
                var name = this.getName(), created = false, explorer = this.getExplorer(), nameSpanName = name; ///
                explorer.disable();
                this.setCreated(created);
                this.setNameSpanName(nameSpanName);
                this.editNameSpan();
            }
        },
        {
            key: "reset",
            value: function reset() {
                var name = this.getName(), nameSpanName = name; ///
                this.setNameSpanName(nameSpanName);
                this.resetNameSpan();
            }
        },
        {
            key: "cancel",
            value: function cancel(created) {
                created ? this.remove() : this.reset();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onCustomStopDrag(this.stopDragCustomHandler);
                this.onCustomStartDrag(this.startDragCustomHandler);
                this.onCustomNameSpanChange(this.nameSpanChangeCustomHandler);
                this.onCustomNameSpanCancel(this.nameSpanCancelCustomHandler);
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomStopDrag(this.stopDragCustomHandler);
                this.offCustomStartDrag(this.startDragCustomHandler);
                this.offCustomNameSpanChange(this.nameSpanChangeCustomHandler);
                this.offCustomNameSpanCancel(this.nameSpanCancelCustomHandler);
                this.disableDrag();
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), select = this.select.bind(this), deselect = this.deselect.bind(this);
                return _object_spread_props(_object_spread({}, context), {
                    select: select,
                    deselect: deselect
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return DragEntryItem;
}(_entry.default);
_define_property(DragEntryItem, "NameSpan", _name.default);
_define_property(DragEntryItem, "ignoredProperties", [
    "readOnly"
]);
_define_property(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easydraganddrop.dragMixins);
var _default = (0, _easywithstyle.default)(DragEntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG5cbiAgICBpZiAoKG5hbWVTcGFuTmFtZSA9PT0gUEVSSU9EKSB8fCAobmFtZVNwYW5OYW1lID09PSBFTVBUWV9TVFJJTkcpKSB7XG4gICAgICB0aGlzLmNhbmNlbChjcmVhdGVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5yZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG5cbiAgICB0aGlzLmNhbmNlbChjcmVhdGVkKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBkcm9wRWxlbWVudCwgYWJvcnRlZCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzZWxlY3RlZCA9IGV4cGxvcmVyLnNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVhZE9ubHk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHRoaXMuZ2V0RW50cnlEaXJlY3RvcnkoKTtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cbiAgICB0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGdldEVudHJ5RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSA9ICh0eXBlID09PSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0Q3JlYXRlZChjcmVhdGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjcmVhdGVkXG4gICAgfSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gICAgZXhwbG9yZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG4gIH1cblxuICByZW5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMucmVzZXROYW1lU3BhbigpO1xuICB9XG5cbiAgY2FuY2VsKGNyZWF0ZWQpIHtcbiAgICBjcmVhdGVkID9cbiAgICAgIHRoaXMucmVtb3ZlKCkgOlxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbU5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21TdGFydERyYWcodGhpcy5zdGFydERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZVNwYW4gPSBOYW1lU3BhbjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWFkT25seVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAgIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIm5hbWVTcGFuTmFtZSIsImdldE5hbWVTcGFuTmFtZSIsImVuYWJsZSIsIlBFUklPRCIsIkVNUFRZX1NUUklORyIsImNhbmNlbCIsImRyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwicmVzZXQiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwibmFtZVNwYW5DYW5jZWxDdXN0b21IYW5kbGVyIiwic3RhcnREcmFnQ3VzdG9tSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0N1c3RvbUhhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiY2xpY2siLCJzZWxlY3RlZCIsInNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm5hbWUiLCJnZXROYW1lIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJlbnRyeURpcmVjdG9yeSIsImdldEVudHJ5RGlyZWN0b3J5IiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJ0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwic2V0Q3JlYXRlZCIsInVwZGF0ZVN0YXRlIiwiZ2V0U3RhdGUiLCJpc1NlbGVjdGVkIiwiaGFzQ2xhc3MiLCJkZXNlbGVjdCIsInJlbW92ZUNsYXNzIiwic2VsZWN0IiwiYWRkQ2xhc3MiLCJjcmVhdGUiLCJkaXNhYmxlIiwic2V0TmFtZVNwYW5OYW1lIiwiZWRpdE5hbWVTcGFuIiwicmVuYW1lIiwicmVzZXROYW1lU3BhbiIsInJlbW92ZSIsImRpZE1vdW50Iiwib25DdXN0b21TdG9wRHJhZyIsIm9uQ3VzdG9tU3RhcnREcmFnIiwib25DdXN0b21OYW1lU3BhbkNoYW5nZSIsIm9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwiLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZDdXN0b21TdG9wRHJhZyIsIm9mZkN1c3RvbVN0YXJ0RHJhZyIsIm9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5UkE7OztlQUFBOzs7b0VBdlJzQjsrQkFFSzsyREFFTjs0REFDQzt5QkFFZTswQkFDVTt1QkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQUEsQUFBTUEsOEJBQUQsQUFBTDtj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