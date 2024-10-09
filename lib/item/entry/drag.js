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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function DragEntryItem() {
        _class_call_check(this, DragEntryItem);
        var _this;
        _this = _call_super(this, DragEntryItem, arguments), _define_property(_this, "nameSpanChangeCustomHandler", function(event, element) {
            var created = _this.isCreated(), explorer = _this.getExplorer(), nameSpanName = _this.getNameSpanName();
            explorer.enable();
            if (nameSpanName === _constants.PERIOD || nameSpanName === _constants.EMPTY_STRING) {
                _this.cancel(created);
                return;
            }
            var dragEntryItem = _this; ///
            if (created) {
                explorer.createDragEntryItem(event, element, dragEntryItem, function() {
                    _this.reset();
                });
                return;
            }
            explorer.renameDragEntryItem(event, element, dragEntryItem, function() {
                _this.reset();
            });
        }), _define_property(_this, "nameSpanCancelCustomHandler", function(event, element) {
            var created = _this.isCreated(), explorer = _this.getExplorer();
            explorer.enable();
            _this.cancel(created);
        }), _define_property(_this, "startDragCustomHandler", function(event, element) {
            var path = _this.getPath(), type = _this.getType(), explorer = _this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
            explorer.addMarker(markerEntryItemPath, dragEntryItemType);
        }), _define_property(_this, "stopDragCustomHandler", function(event, element, dropElement, aborted, done) {
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
            var dragEntryItem = _this; ///
            markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
        });
        return _this;
    }
    _create_class(DragEntryItem, [
        {
            key: "click",
            value: function click(event, element) {
                var explorer = this.getExplorer(), dragEntryItem = this, selected = explorer.selectOrDeselectDragEntryItem(event, element, dragEntryItem);
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
                var markerEntryItem = getMarkerEntryItem();
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
                this.reset();
                if (created) {
                    this.remove();
                }
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
                var explorer = this.getExplorer(), disabled = explorer.isDisabled(), nameSpanEditable = this.isNameSpanEditable();
                if (!disabled) {
                    this.disableDrag();
                }
                if (nameSpanEditable) {
                    var created = this.isCreated();
                    this.cancel(created);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG5cbiAgICBpZiAoKG5hbWVTcGFuTmFtZSA9PT0gUEVSSU9EKSB8fCAobmFtZVNwYW5OYW1lID09PSBFTVBUWV9TVFJJTkcpKSB7XG4gICAgICB0aGlzLmNhbmNlbChjcmVhdGVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVuYW1lRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZVNwYW5DYW5jZWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCk7XG5cbiAgICBleHBsb3Jlci5lbmFibGUoKTtcblxuICAgIHRoaXMuY2FuY2VsKGNyZWF0ZWQpO1xuICB9XG5cbiAgc3RhcnREcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBzdG9wRHJhZ0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyb3BFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNlbGVjdGVkID0gZXhwbG9yZXIuc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVhZE9ubHk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHRoaXMuZ2V0RW50cnlEaXJlY3RvcnkoKTtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cbiAgICB0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGdldEVudHJ5RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gZ2V0TWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSA9ICh0eXBlID09PSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgc2V0Q3JlYXRlZChjcmVhdGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBjcmVhdGVkXG4gICAgfSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBFTVBUWV9TVFJJTkc7IC8vL1xuXG4gICAgZXhwbG9yZXIuZGlzYWJsZSgpO1xuXG4gICAgdGhpcy5zZXRDcmVhdGVkKGNyZWF0ZWQpO1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG4gIH1cblxuICByZW5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNyZWF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lU3Bhbk5hbWUobmFtZVNwYW5OYW1lKTtcblxuICAgIHRoaXMucmVzZXROYW1lU3BhbigpO1xuICB9XG5cbiAgY2FuY2VsKGNyZWF0ZWQpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbU5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21TdGFydERyYWcodGhpcy5zdGFydERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UodGhpcy5uYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21OYW1lU3BhbkNhbmNlbCh0aGlzLm5hbWVTcGFuQ2FuY2VsQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkaXNhYmxlZCA9IGV4cGxvcmVyLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBuYW1lU3BhbkVkaXRhYmxlID0gdGhpcy5pc05hbWVTcGFuRWRpdGFibGUoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZVNwYW5FZGl0YWJsZSkge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCk7XG5cbiAgICAgIHRoaXMuY2FuY2VsKGNyZWF0ZWQpO1xuICAgIH1cblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3QgPSB0aGlzLmRlc2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBzZWxlY3QsXG4gICAgICBkZXNlbGVjdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG4gIHN0YXRpYyBOYW1lU3BhbiA9IE5hbWVTcGFuO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlYWRPbmx5XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNyZWF0ZWQiLCJpc0NyZWF0ZWQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwiZW5hYmxlIiwiUEVSSU9EIiwiRU1QVFlfU1RSSU5HIiwiY2FuY2VsIiwiZHJhZ0VudHJ5SXRlbSIsImNyZWF0ZURyYWdFbnRyeUl0ZW0iLCJyZXNldCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lU3BhbkNhbmNlbEN1c3RvbUhhbmRsZXIiLCJzdGFydERyYWdDdXN0b21IYW5kbGVyIiwicGF0aCIsImdldFBhdGgiLCJ0eXBlIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImFkZE1hcmtlciIsInN0b3BEcmFnQ3VzdG9tSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJjbGljayIsInNlbGVjdGVkIiwic2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJpc1JlYWRPbmx5IiwicmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwibmFtZSIsImdldE5hbWUiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiZ2V0RW50cnlEaXJlY3RvcnkiLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0TWFya2VyRW50cnlJdGVtIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsInNldENyZWF0ZWQiLCJ1cGRhdGVTdGF0ZSIsImdldFN0YXRlIiwiaXNTZWxlY3RlZCIsImhhc0NsYXNzIiwiZGVzZWxlY3QiLCJyZW1vdmVDbGFzcyIsInNlbGVjdCIsImFkZENsYXNzIiwiY3JlYXRlIiwiZGlzYWJsZSIsInNldE5hbWVTcGFuTmFtZSIsImVkaXROYW1lU3BhbiIsInJlbmFtZSIsInJlc2V0TmFtZVNwYW4iLCJyZW1vdmUiLCJkaWRNb3VudCIsIm9uQ3VzdG9tU3RvcERyYWciLCJvbkN1c3RvbVN0YXJ0RHJhZyIsIm9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UiLCJvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwiZW5hYmxlRHJhZyIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tU3RvcERyYWciLCJvZmZDdXN0b21TdGFydERyYWciLCJvZmZDdXN0b21OYW1lU3BhbkNoYW5nZSIsIm9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwibmFtZVNwYW5FZGl0YWJsZSIsImlzTmFtZVNwYW5FZGl0YWJsZSIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZVNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdVNBOzs7ZUFBQTs7O29FQXJTc0I7K0JBRUs7MkRBRU47NERBQ0M7eUJBRWU7MEJBQ1U7dUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFBLEFBQU1BLDhC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