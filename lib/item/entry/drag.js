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
        "\n\n  user-select: none;\n  \n  font-weight: normal;\n  \n  .selected {\n    font-weight: bold;\n  }\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
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
            var name = _this.getName(), nameSpanName = _this.getNameSpanName(), nameChanged = name !== nameSpanName;
            if (!nameChanged) {
                return;
            }
            var created = _this.isCreated(), explorer = _this.getExplorer(), dragEntryItem = _assert_this_initialized(_this); ///
            if (created) {
                explorer.createDragEntryItem(dragEntryItem, function() {
                    _this.done();
                });
                return;
            }
            explorer.editDragEntryItem(dragEntryItem, function() {
                _this.done();
            });
        });
        _define_property(_assert_this_initialized(_this), "nameSpanCancelHandler", function(event, element) {
            var created = _this.isCreated();
            if (created) {
                _this.remove();
            }
            _this.done();
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
            key: "isReadOnly",
            value: function isReadOnly() {
                var readOnly = this.properties.readOnly;
                return readOnly;
            }
        },
        {
            key: "getPathMap",
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var name = this.getName(), collapsed = this.isCollapsed(), nameSpanName = this.getNameSpanName(), entryDirectory = this.getEntryDirectory();
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name); ///
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameSpanName); ///
                var pathMap = {
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
            key: "isEditable",
            value: function isEditable() {
                var nameSpanEdited = this.isNameSpanEditable(), editable = nameSpanEdited; ///
                return editable;
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
                var created = true, nameSpanName = _constants.EMPTY_STRING; ///
                this.setCreated(created);
                this.setNameSpanName(nameSpanName);
                this.editNameSpan();
                this.disableDrag();
            }
        },
        {
            key: "edit",
            value: function edit() {
                var name = this.getName(), created = false, nameSpanName = name; ///
                this.setCreated(created);
                this.setNameSpanName(nameSpanName);
                this.editNameSpan();
                this.disableDrag();
            }
        },
        {
            key: "done",
            value: function done() {
                var name = this.getName(), nameSpanName = name; ///
                this.setNameSpanName(nameSpanName);
                this.cancelNameSpan();
                this.enableDrag();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var readOnly = this.isReadOnly();
                if (readOnly) {
                    return;
                }
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
                var readOnly = this.isReadOnly();
                if (readOnly) {
                    return;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VFbnRyeVBhdGgsIGFkanVzdFRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgbmFtZVNwYW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSAobmFtZSAhPT0gbmFtZVNwYW5OYW1lKTtcblxuICAgIGlmICghbmFtZUNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgZXhwbG9yZXIuY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5lZGl0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5hbWVTcGFuQ2FuY2VsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kb25lKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyID0gKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVhZE9ubHk7XG4gIH1cblxuICBnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5nZXRFbnRyeURpcmVjdG9yeSgpO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVTcGFuTmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGdldEVudHJ5RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSA9ICh0eXBlID09PSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0Q3JlYXRlZChjcmVhdGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjcmVhdGVkXG4gICAgfSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGlzRWRpdGFibGUoKSB7XG4gICAgY29uc3QgbmFtZVNwYW5FZGl0ZWQgPSB0aGlzLmlzTmFtZVNwYW5FZGl0YWJsZSgpLFxuICAgICAgZWRpdGFibGUgPSBuYW1lU3BhbkVkaXRlZDsgLy8vXG5cbiAgICByZXR1cm4gZWRpdGFibGU7XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRydWUsXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gRU1QVFlfU1RSSU5HOyAvLy9cblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgY3JlYXRlZCA9IGZhbHNlLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gIH1cblxuICBkb25lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmNhbmNlbE5hbWVTcGFuKCk7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHJlYWRPbmx5ID0gdGhpcy5pc1JlYWRPbmx5KCk7XG5cbiAgICBpZiAocmVhZE9ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHJlYWRPbmx5ID0gdGhpcy5pc1JlYWRPbmx5KCk7XG5cbiAgICBpZiAocmVhZE9ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdCA9IHRoaXMuZGVzZWxlY3QuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIGRlc2VsZWN0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cbiAgc3RhdGljIE5hbWVTcGFuID0gTmFtZVNwYW47XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVhZE9ubHlcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm5hbWUiLCJnZXROYW1lIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwibmFtZUNoYW5nZWQiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiZG9uZSIsImVkaXREcmFnRW50cnlJdGVtIiwibmFtZVNwYW5DYW5jZWxIYW5kbGVyIiwicmVtb3ZlIiwic3RhcnREcmFnSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0hhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJpc1JlYWRPbmx5IiwicmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJnZXRFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsInNldENyZWF0ZWQiLCJ1cGRhdGVTdGF0ZSIsImdldFN0YXRlIiwiaXNFZGl0YWJsZSIsIm5hbWVTcGFuRWRpdGVkIiwiaXNOYW1lU3BhbkVkaXRhYmxlIiwiZWRpdGFibGUiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImNyZWF0ZSIsIkVNUFRZX1NUUklORyIsInNldE5hbWVTcGFuTmFtZSIsImVkaXROYW1lU3BhbiIsImRpc2FibGVEcmFnIiwiZWRpdCIsImNhbmNlbE5hbWVTcGFuIiwiZW5hYmxlRHJhZyIsImRpZE1vdW50Iiwib25TdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwib25OYW1lU3BhbkNoYW5nZSIsIm9uTmFtZVNwYW5DYW5jZWwiLCJ3aWxsVW5tb3VudCIsIm9mZlN0b3BEcmFnIiwib2ZmU3RhcnREcmFnIiwib2ZmTmFtZVNwYW5DaGFuZ2UiLCJvZmZOYW1lU3BhbkNhbmNlbCIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9SQTs7O2VBQUE7OztvRUFsUnNCOytCQUVLOzJEQUVOOzREQUNDO3lCQUVPOzBCQUNrQjt1QkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQUEsQUFBTUEsOEJBcVFILEFBclFIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEseUJBQXdCLFNBQUNDLE9BQU9DLFNBQVk7WUFD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