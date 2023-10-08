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
            explorer.renameDragEntryItem(dragEntryItem, function() {
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
            key: "rename",
            value: function rename() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKTtcblxuICAgIGlmICghbmFtZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgZXhwbG9yZXIuY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIC8vL1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5yZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZVNwYW5DYW5jZWxIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIgPSAoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBoYXNOYW1lQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IChuYW1lICE9PSBQRVJJT0QpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG5hbWVTcGFuTmFtZSAhPT0gbmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuYW1lU3Bhbk5hbWUgIT09IEVNUFRZX1NUUklORyk7ICAvLy9cblxuICAgIHJldHVybiBuYW1lQ2hhbmdlZDtcbiAgfVxuXG4gIGlzUmVhZE9ubHkoKSB7XG4gICAgY29uc3QgeyByZWFkT25seSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlYWRPbmx5O1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWFkT25seSA9IHRoaXMuaXNSZWFkT25seSgpLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5nZXRFbnRyeURpcmVjdG9yeSgpO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVTcGFuTmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICByZWFkT25seSxcbiAgICAgIGNvbGxhcHNlZCxcbiAgICAgIGVudHJ5RGlyZWN0b3J5LFxuICAgICAgc291cmNlRW50cnlQYXRoLFxuICAgICAgdGFyZ2V0RW50cnlQYXRoXG4gICAgfTtcblxuICAgIHJldHVybiBwYXRoTWFwO1xuICB9XG5cbiAgZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBsZXQgcGF0aE1hcHMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG4gICAgcGF0aE1hcHMucmV2ZXJzZSgpO1xuXG4gICAgcmV0dXJuIHBhdGhNYXBzO1xuICB9XG5cbiAgZ2V0RW50cnlEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlID0gKHR5cGUgPT09IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBzZXRDcmVhdGVkKGNyZWF0ZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGNyZWF0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIGlzQ3JlYXRlZCgpIHtcbiAgICBjb25zdCB7IGNyZWF0ZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBjcmVhdGVkO1xuICB9XG5cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKTsgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IEVNUFRZX1NUUklORzsgLy8vXG5cbiAgICB0aGlzLnNldENyZWF0ZWQoY3JlYXRlZCk7XG5cbiAgICB0aGlzLnNldE5hbWVTcGFuTmFtZShuYW1lU3Bhbk5hbWUpO1xuXG4gICAgdGhpcy5lZGl0TmFtZVNwYW4oKTtcblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcbiAgfVxuXG4gIHJlbmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgY3JlYXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG5cbiAgICBleHBsb3Jlci5kaXNhYmxlKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMuY2FuY2VsTmFtZVNwYW4oKTtcblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIGV4cGxvcmVyLmVuYWJsZSgpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZVNwYW4gPSBOYW1lU3BhbjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWFkT25seVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAgIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJuYW1lU3BhbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJuYW1lQ2hhbmdlZCIsImhhc05hbWVDaGFuZ2VkIiwiY2FuY2VsIiwiY3JlYXRlZCIsImlzQ3JlYXRlZCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwicmVzZXQiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2FuY2VsSGFuZGxlciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsIm5hbWUiLCJnZXROYW1lIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwiUEVSSU9EIiwiRU1QVFlfU1RSSU5HIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiZ2V0RW50cnlEaXJlY3RvcnkiLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsInR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJzZXRDcmVhdGVkIiwidXBkYXRlU3RhdGUiLCJnZXRTdGF0ZSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiZGVzZWxlY3QiLCJyZW1vdmVDbGFzcyIsInNlbGVjdCIsImFkZENsYXNzIiwiY3JlYXRlIiwic2V0TmFtZVNwYW5OYW1lIiwiZWRpdE5hbWVTcGFuIiwiZGlzYWJsZSIsInJlbmFtZSIsImNhbmNlbE5hbWVTcGFuIiwiZW5hYmxlIiwicmVtb3ZlIiwiZGlkTW91bnQiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJvbk5hbWVTcGFuQ2hhbmdlIiwib25OYW1lU3BhbkNhbmNlbCIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0b3BEcmFnIiwib2ZmU3RhcnREcmFnIiwib2ZmTmFtZVNwYW5DaGFuZ2UiLCJvZmZOYW1lU3BhbkNhbmNlbCIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZVNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeVJBOzs7ZUFBQTs7O29FQXZSc0I7K0JBRUs7MkRBRU47NERBQ0M7eUJBRWU7MEJBQ1U7dUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7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