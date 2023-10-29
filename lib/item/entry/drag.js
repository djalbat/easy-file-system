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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG4gICAgaWYgKChuYW1lU3Bhbk5hbWUgPT09IFBFUklPRCkgfHwgKG5hbWVTcGFuTmFtZSA9PT0gRU1QVFlfU1RSSU5HKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgLy8vXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLnJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBuYW1lU3BhbkNhbmNlbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzZWxlY3RlZCA9IGV4cGxvcmVyLnNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVhZE9ubHk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHRoaXMuZ2V0RW50cnlEaXJlY3RvcnkoKTtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cbiAgICB0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGdldEVudHJ5RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSA9ICh0eXBlID09PSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0Q3JlYXRlZChjcmVhdGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjcmVhdGVkXG4gICAgfSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG5cbiAgICBleHBsb3Jlci5kaXNhYmxlKCk7XG4gIH1cblxuICByZW5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuXG4gICAgZXhwbG9yZXIuZGlzYWJsZSgpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLnJlc2V0TmFtZVNwYW4oKTtcblxuICAgIGV4cGxvcmVyLmVuYWJsZSgpOyAgLy8vXG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuICAgIHRoaXMucmVzZXROYW1lU3BhbigpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZVNwYW4gPSBOYW1lU3BhbjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWFkT25seVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAgIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJuYW1lU3BhbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIm5hbWVTcGFuTmFtZSIsImdldE5hbWVTcGFuTmFtZSIsIlBFUklPRCIsIkVNUFRZX1NUUklORyIsImNhbmNlbCIsImRyYWdFbnRyeUl0ZW0iLCJyZXNldCIsImNyZWF0ZURyYWdFbnRyeUl0ZW0iLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwibmFtZVNwYW5DYW5jZWxIYW5kbGVyIiwic3RhcnREcmFnSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0hhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiY2xpY2siLCJzZWxlY3RlZCIsInNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm5hbWUiLCJnZXROYW1lIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJlbnRyeURpcmVjdG9yeSIsImdldEVudHJ5RGlyZWN0b3J5IiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJ0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwic2V0Q3JlYXRlZCIsInVwZGF0ZVN0YXRlIiwiZ2V0U3RhdGUiLCJpc1NlbGVjdGVkIiwiaGFzQ2xhc3MiLCJkZXNlbGVjdCIsInJlbW92ZUNsYXNzIiwic2VsZWN0IiwiYWRkQ2xhc3MiLCJjcmVhdGUiLCJzZXROYW1lU3Bhbk5hbWUiLCJlZGl0TmFtZVNwYW4iLCJkaXNhYmxlIiwicmVuYW1lIiwicmVzZXROYW1lU3BhbiIsImVuYWJsZSIsInJlbW92ZSIsImRpZE1vdW50Iiwib25TdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwib25OYW1lU3BhbkNoYW5nZSIsIm9uTmFtZVNwYW5DYW5jZWwiLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdG9wRHJhZyIsIm9mZlN0YXJ0RHJhZyIsIm9mZk5hbWVTcGFuQ2hhbmdlIiwib2ZmTmFtZVNwYW5DYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2ln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