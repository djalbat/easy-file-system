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
            var created = _this.isCreated(), explorer = _this.getExplorer(), nameSpanName = _this.getNameSpanName();
            if (nameSpanName === _constants.PERIOD || nameSpanName === _constants.EMPTY_STRING) {
                _this.cancel();
                return;
            }
            var dragEntryItem = _assert_this_initialized(_this); ///
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
            key: "cancel",
            value: function cancel() {
                var name = this.getName(), created = this.isCreated(), explorer = this.getExplorer(), nameSpanName = name; ///
                this.setNameSpanName(nameSpanName);
                this.resetNameSpan();
                explorer.enable(); ///
                if (created) {
                    this.remove();
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                var explorer = this.getExplorer();
                this.resetNameSpan();
                explorer.enable();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG4gICAgaWYgKChuYW1lU3Bhbk5hbWUgPT09IFBFUklPRCkgfHwgKG5hbWVTcGFuTmFtZSA9PT0gRU1QVFlfU1RSSU5HKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgLy8vXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLnJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBuYW1lU3BhbkNhbmNlbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzZWxlY3RlZCA9IGV4cGxvcmVyLnNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVhZE9ubHk7XG4gIH1cblxuICBnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gdGhpcy5pc1JlYWRPbmx5KCksXG4gICAgICAgICAgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSB0aGlzLmdldEVudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZVNwYW5OYW1lKTtcdC8vL1xuXG4gICAgY29uc3QgcGF0aE1hcCA9IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgY29sbGFwc2VkLFxuICAgICAgZW50cnlEaXJlY3RvcnksXG4gICAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICB0YXJnZXRFbnRyeVBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBhdGhNYXA7XG4gIH1cblxuICBnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGxldCBwYXRoTWFwcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cbiAgICBwYXRoTWFwcy5yZXZlcnNlKCk7XG5cbiAgICByZXR1cm4gcGF0aE1hcHM7XG4gIH1cblxuICBnZXRFbnRyeURpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUgPSAodHlwZSA9PT0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHNldENyZWF0ZWQoY3JlYXRlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgY3JlYXRlZFxuICAgIH0pO1xuICB9XG5cbiAgaXNDcmVhdGVkKCkge1xuICAgIGNvbnN0IHsgY3JlYXRlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZWQ7XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRydWUsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gRU1QVFlfU1RSSU5HOyAvLy9cblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuXG4gICAgZXhwbG9yZXIuZGlzYWJsZSgpO1xuICB9XG5cbiAgcmVuYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjcmVhdGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gbmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldENyZWF0ZWQoY3JlYXRlZCk7XG5cbiAgICB0aGlzLnNldE5hbWVTcGFuTmFtZShuYW1lU3Bhbk5hbWUpO1xuXG4gICAgdGhpcy5lZGl0TmFtZVNwYW4oKTtcblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gbmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldE5hbWVTcGFuTmFtZShuYW1lU3Bhbk5hbWUpO1xuXG4gICAgdGhpcy5yZXNldE5hbWVTcGFuKCk7XG5cbiAgICBleHBsb3Jlci5lbmFibGUoKTsgIC8vL1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCk7XG5cbiAgICB0aGlzLnJlc2V0TmFtZVNwYW4oKTtcblxuICAgIGV4cGxvcmVyLmVuYWJsZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lU3BhbkNoYW5nZSh0aGlzLm5hbWVTcGFuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdCA9IHRoaXMuZGVzZWxlY3QuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIGRlc2VsZWN0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cbiAgc3RhdGljIE5hbWVTcGFuID0gTmFtZVNwYW47XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVhZE9ubHlcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gIC5zZWxlY3RlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJEcmFnRW50cnlJdGVtIiwibmFtZVNwYW5DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3JlYXRlZCIsImlzQ3JlYXRlZCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJuYW1lU3Bhbk5hbWUiLCJnZXROYW1lU3Bhbk5hbWUiLCJQRVJJT0QiLCJFTVBUWV9TVFJJTkciLCJjYW5jZWwiLCJkcmFnRW50cnlJdGVtIiwicmVzZXQiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2FuY2VsSGFuZGxlciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImNsaWNrIiwic2VsZWN0ZWQiLCJzZWxlY3RPckRlc2VsZWN0RHJhZ0VudHJ5SXRlbSIsImlzUmVhZE9ubHkiLCJyZWFkT25seSIsInByb3BlcnRpZXMiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwibmFtZSIsImdldE5hbWUiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiZ2V0RW50cnlEaXJlY3RvcnkiLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsInR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJzZXRDcmVhdGVkIiwidXBkYXRlU3RhdGUiLCJnZXRTdGF0ZSIsImlzU2VsZWN0ZWQiLCJoYXNDbGFzcyIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImNyZWF0ZSIsInNldE5hbWVTcGFuTmFtZSIsImVkaXROYW1lU3BhbiIsImRpc2FibGUiLCJyZW5hbWUiLCJyZXNldE5hbWVTcGFuIiwiZW5hYmxlIiwicmVtb3ZlIiwiZGlkTW91bnQiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJvbk5hbWVTcGFuQ2hhbmdlIiwib25OYW1lU3BhbkNhbmNlbCIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0b3BEcmFnIiwib2ZmU3RhcnREcmFnIiwib2ZmTmFtZVNwYW5DaGFuZ2UiLCJvZmZOYW1lU3BhbkNhbmNlbCIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZVNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdVJBOzs7ZUFBQTs7O29FQXJSc0I7K0JBRUs7MkRBRU47NERBQ0M7eUJBRWU7MEJBQ1U7dUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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