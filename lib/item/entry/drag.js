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
        _define_property(_assert_this_initialized(_this), "nameSpanChangeHandler", function(event, element) {
            var nameChanged = _this.hasNameChanged();
            if (!nameChanged) {
                _this.cancel();
                return;
            }
            var created = _this.isCreated(), explorer = _this.getExplorer(), dragEntryItem = _assert_this_initialized(_this); ///
            _this.reset();
            if (created) {
                explorer.createDragEntryItem(dragEntryItem, function() {
                ///
                });
                return;
            }
            explorer.editDragEntryItem(dragEntryItem, function() {
            ///
            });
        });
        _define_property(_assert_this_initialized(_this), "nameSpanCancelHandler", function(event, element) {
            _this.cancel();
        });
        _define_property(_assert_this_initialized(_this), "startDragHandler", function(element) {
            var path = _this.getPath(), type = _this.getType(), explorer = _this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
            explorer.addMarker(markerEntryItemPath, dragEntryItemType);
        });
        _define_property(_assert_this_initialized(_this), "stopDragHandler", function(dropElement, aborted, element, done) {
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
            var dragEntryItem = element; ///
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        return _this;
    }
    _create_class(DragEntryItem, [
        {
            key: "hasNameChanged",
            value: function hasNameChanged() {
                var name = this.getName(), nameSpanName = this.getNameSpanName(), nameChanged = name !== _constants.PERIOD ? nameSpanName !== name : nameSpanName !== _constants.EMPTY_STRING; ///
                return nameChanged;
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
                this.setCreated(created);
                this.setNameSpanName(nameSpanName);
                this.editNameSpan();
                explorer.disable();
            }
        },
        {
            key: "edit",
            value: function edit() {
                var name = this.getName(), created = false, explorer = this.getExplorer(), nameSpanName = name; ///
                this.setCreated(created);
                this.setNameSpanName(nameSpanName);
                this.editNameSpan();
                explorer.disable();
            }
        },
        {
            key: "reset",
            value: function reset() {
                var created = this.isCreated(), explorer = this.getExplorer();
                this.cancelNameSpan();
                this.setCreated(created);
                explorer.enable();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var name = this.getName(), created = this.isCreated(), nameSpanName = name; ///
                this.setNameSpanName(nameSpanName);
                this.reset();
                if (created) {
                    this.remove();
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onStopDrag(this.stopDragHandler);
                this.onStartDrag(this.startDragHandler);
                this.onNameSpanChange(this.nameSpanChangeHandler);
                this.onNameSpanCancel(this.nameSpanCancelHandler);
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offStopDrag(this.stopDragHandler);
                this.offStartDrag(this.startDragHandler);
                this.offNameSpanChange(this.nameSpanChangeHandler);
                this.offNameSpanCancel(this.nameSpanCancelHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKTtcblxuICAgIGlmICghbmFtZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgZXhwbG9yZXIuY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIC8vL1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5lZGl0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIG5hbWVTcGFuQ2FuY2VsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyID0gKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgaGFzTmFtZUNoYW5nZWQoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSAobmFtZSAhPT0gUEVSSU9EKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChuYW1lU3Bhbk5hbWUgIT09IG5hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmFtZVNwYW5OYW1lICE9PSBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZUNoYW5nZWQ7XG4gIH1cblxuICBpc1JlYWRPbmx5KCkge1xuICAgIGNvbnN0IHsgcmVhZE9ubHkgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWFkT25seTtcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHRoaXMuZ2V0RW50cnlEaXJlY3RvcnkoKTtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cbiAgICB0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGdldEVudHJ5RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSA9ICh0eXBlID09PSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0Q3JlYXRlZChjcmVhdGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjcmVhdGVkXG4gICAgfSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG5cbiAgICBleHBsb3Jlci5kaXNhYmxlKCk7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjcmVhdGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gbmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldENyZWF0ZWQoY3JlYXRlZCk7XG5cbiAgICB0aGlzLnNldE5hbWVTcGFuTmFtZShuYW1lU3Bhbk5hbWUpO1xuXG4gICAgdGhpcy5lZGl0TmFtZVNwYW4oKTtcblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG4gICAgdGhpcy5jYW5jZWxOYW1lU3BhbigpO1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVTcGFuQ2FuY2VsKHRoaXMubmFtZVNwYW5DYW5jZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lU3BhbkNoYW5nZSh0aGlzLm5hbWVTcGFuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVTcGFuQ2FuY2VsKHRoaXMubmFtZVNwYW5DYW5jZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3QgPSB0aGlzLmRlc2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBzZWxlY3QsXG4gICAgICBkZXNlbGVjdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG4gIHN0YXRpYyBOYW1lU3BhbiA9IE5hbWVTcGFuO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlYWRPbmx5XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm5hbWVDaGFuZ2VkIiwiaGFzTmFtZUNoYW5nZWQiLCJjYW5jZWwiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJyZXNldCIsImNyZWF0ZURyYWdFbnRyeUl0ZW0iLCJlZGl0RHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2FuY2VsSGFuZGxlciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsIm5hbWUiLCJnZXROYW1lIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwiUEVSSU9EIiwiRU1QVFlfU1RSSU5HIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiZ2V0RW50cnlEaXJlY3RvcnkiLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsInR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJzZXRDcmVhdGVkIiwidXBkYXRlU3RhdGUiLCJnZXRTdGF0ZSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiZGVzZWxlY3QiLCJyZW1vdmVDbGFzcyIsInNlbGVjdCIsImFkZENsYXNzIiwiY3JlYXRlIiwic2V0TmFtZVNwYW5OYW1lIiwiZWRpdE5hbWVTcGFuIiwiZGlzYWJsZSIsImVkaXQiLCJjYW5jZWxOYW1lU3BhbiIsImVuYWJsZSIsInJlbW92ZSIsImRpZE1vdW50Iiwib25TdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwib25OYW1lU3BhbkNoYW5nZSIsIm9uTmFtZVNwYW5DYW5jZWwiLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdG9wRHJhZyIsIm9mZlN0YXJ0RHJhZyIsIm9mZk5hbWVTcGFuQ2hhbmdlIiwib2ZmTmFtZVNwYW5DYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlSQTs7O2VBQUE7OztvRUF2UnNCOytCQUVLOzJEQUVOOzREQUNDO3lCQUVlOzBCQUNVO3VCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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