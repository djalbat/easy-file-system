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
                var name = this.getName(), readOnly = this.isReadOnly(), collapsed = this.isCollapsed(), nameSpanName = this.getNameSpanName(), entryDirectory = this.isEntryDirectory();
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
            key: "getEntriesList",
            value: function getEntriesList() {
                var parentElement = this.getParentElement(), entriesList = parentElement; ///
                return entriesList;
            }
        },
        {
            key: "isEntryDirectory",
            value: function isEntryDirectory() {
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
                    var entriesList = this.getEntriesList(), entryItem = this;
                    entriesList.removeEntryItem(entryItem);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IFBFUklPRCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpO1xuXG4gICAgZXhwbG9yZXIuZW5hYmxlKCk7XG5cbiAgICBpZiAoKG5hbWVTcGFuTmFtZSA9PT0gUEVSSU9EKSB8fCAobmFtZVNwYW5OYW1lID09PSBFTVBUWV9TVFJJTkcpKSB7XG4gICAgICB0aGlzLmNhbmNlbChjcmVhdGVkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVuYW1lRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZVNwYW5DYW5jZWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCk7XG5cbiAgICBleHBsb3Jlci5lbmFibGUoKTtcblxuICAgIHRoaXMuY2FuY2VsKGNyZWF0ZWQpO1xuICB9XG5cbiAgc3RhcnREcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBzdG9wRHJhZ0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGRyb3BFbGVtZW50LCBhYm9ydGVkLCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNlbGVjdGVkID0gZXhwbG9yZXIuc2VsZWN0T3JEZXNlbGVjdERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVhZE9ubHk7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVhZE9ubHkgPSB0aGlzLmlzUmVhZE9ubHkoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHRoaXMuaXNFbnRyeURpcmVjdG9yeSgpO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVTcGFuTmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICByZWFkT25seSxcbiAgICAgIGNvbGxhcHNlZCxcbiAgICAgIGVudHJ5RGlyZWN0b3J5LFxuICAgICAgc291cmNlRW50cnlQYXRoLFxuICAgICAgdGFyZ2V0RW50cnlQYXRoXG4gICAgfTtcblxuICAgIHJldHVybiBwYXRoTWFwO1xuICB9XG5cbiAgZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBsZXQgcGF0aE1hcHMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG4gICAgcGF0aE1hcHMucmV2ZXJzZSgpO1xuXG4gICAgcmV0dXJuIHBhdGhNYXBzO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgIGVudHJpZXNMaXN0ID0gcGFyZW50RWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGVudHJpZXNMaXN0O1xuICB9XG5cbiAgaXNFbnRyeURpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IGdldE1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUgPSAodHlwZSA9PT0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHNldENyZWF0ZWQoY3JlYXRlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgY3JlYXRlZFxuICAgIH0pO1xuICB9XG5cbiAgaXNDcmVhdGVkKCkge1xuICAgIGNvbnN0IHsgY3JlYXRlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZWQ7XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRydWUsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gRU1QVFlfU1RSSU5HOyAvLy9cblxuICAgIGV4cGxvcmVyLmRpc2FibGUoKTtcblxuICAgIHRoaXMuc2V0Q3JlYXRlZChjcmVhdGVkKTtcblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLmVkaXROYW1lU3BhbigpO1xuICB9XG5cbiAgcmVuYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjcmVhdGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gbmFtZTsgLy8vXG5cbiAgICBleHBsb3Jlci5kaXNhYmxlKCk7XG5cbiAgICB0aGlzLnNldENyZWF0ZWQoY3JlYXRlZCk7XG5cbiAgICB0aGlzLnNldE5hbWVTcGFuTmFtZShuYW1lU3Bhbk5hbWUpO1xuXG4gICAgdGhpcy5lZGl0TmFtZVNwYW4oKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLnJlc2V0TmFtZVNwYW4oKTtcbiAgfVxuXG4gIGNhbmNlbChjcmVhdGVkKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IGVudHJpZXNMaXN0ID0gdGhpcy5nZXRFbnRyaWVzTGlzdCgpLFxuICAgICAgICAgICAgZW50cnlJdGVtID0gdGhpcztcblxuICAgICAgZW50cmllc0xpc3QucmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkN1c3RvbVN0b3BEcmFnKHRoaXMuc3RvcERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21TdGFydERyYWcodGhpcy5zdGFydERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21OYW1lU3BhbkNoYW5nZSh0aGlzLm5hbWVTcGFuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkN1c3RvbVN0b3BEcmFnKHRoaXMuc3RvcERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZGlzYWJsZWQgPSBleHBsb3Jlci5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgbmFtZVNwYW5FZGl0YWJsZSA9IHRoaXMuaXNOYW1lU3BhbkVkaXRhYmxlKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVTcGFuRWRpdGFibGUpIHtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpO1xuXG4gICAgICB0aGlzLmNhbmNlbChjcmVhdGVkKTtcbiAgICB9XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZVNwYW4gPSBOYW1lU3BhbjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZWFkT25seVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAgIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJuYW1lU3BhbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIm5hbWVTcGFuTmFtZSIsImdldE5hbWVTcGFuTmFtZSIsImVuYWJsZSIsIlBFUklPRCIsIkVNUFRZX1NUUklORyIsImNhbmNlbCIsImRyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwicmVzZXQiLCJyZW5hbWVEcmFnRW50cnlJdGVtIiwibmFtZVNwYW5DYW5jZWxDdXN0b21IYW5kbGVyIiwic3RhcnREcmFnQ3VzdG9tSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0N1c3RvbUhhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiY2xpY2siLCJzZWxlY3RlZCIsInNlbGVjdE9yRGVzZWxlY3REcmFnRW50cnlJdGVtIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm5hbWUiLCJnZXROYW1lIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJlbnRyeURpcmVjdG9yeSIsImlzRW50cnlEaXJlY3RvcnkiLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZ2V0RW50cmllc0xpc3QiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImVudHJpZXNMaXN0IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0TWFya2VyRW50cnlJdGVtIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsInNldENyZWF0ZWQiLCJ1cGRhdGVTdGF0ZSIsImdldFN0YXRlIiwiaXNTZWxlY3RlZCIsImhhc0NsYXNzIiwiZGVzZWxlY3QiLCJyZW1vdmVDbGFzcyIsInNlbGVjdCIsImFkZENsYXNzIiwiY3JlYXRlIiwiZGlzYWJsZSIsInNldE5hbWVTcGFuTmFtZSIsImVkaXROYW1lU3BhbiIsInJlbmFtZSIsInJlc2V0TmFtZVNwYW4iLCJlbnRyeUl0ZW0iLCJyZW1vdmVFbnRyeUl0ZW0iLCJkaWRNb3VudCIsIm9uQ3VzdG9tU3RvcERyYWciLCJvbkN1c3RvbVN0YXJ0RHJhZyIsIm9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UiLCJvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwiZW5hYmxlRHJhZyIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tU3RvcERyYWciLCJvZmZDdXN0b21TdGFydERyYWciLCJvZmZDdXN0b21OYW1lU3BhbkNoYW5nZSIsIm9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwibmFtZVNwYW5FZGl0YWJsZSIsImlzTmFtZVNwYW5FZGl0YWJsZSIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZVNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaVRBOzs7ZUFBQTs7O29FQS9Tc0I7K0JBRUs7MkRBRU47NERBQ0M7eUJBRWU7MEJBQ1U7dUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7a0NBQUFBLDJCQUNKQyx3QkFBQUEsK0JBQThCLFNBQUNDLE9BQU9DO1lBQ3BDLElBQU1DLFVBQVUsTUFBS0MsU0FBUyxJQUN4QkMsV0FBVyxNQUFLQyxXQUFXLElBQzNCQyxlQUFlLE1BQUtDLGVBQWU7WUFFekNILFNBQVNJLE1BQU07WUFFZixJQUFJLEFBQUNGLGlCQUFpQkcsaUJBQU0sSUFBTUgsaUJBQWlCSSx1QkFBWSxFQUFHO2dCQUNoRSxNQUFLQyxNQUFNLENBQUNUO2dCQUVaO1lBQ0Y7WUFFQSxJQUFNVSx1QkFBc0IsR0FBRztZQUUvQixJQUFJVixTQUFTO2dCQUNYRSxTQUFTUyxtQkFBbUIsQ0FBQ2IsT0FBT0MsU0FBU1csZUFBZTtvQkFDMUQsTUFBS0UsS0FBSztnQkFDWjtnQkFFQTtZQUNGO1lBRUFWLFNBQVNXLG1CQUFtQixDQUFDZixPQUFPQyxTQUFTVyxlQUFlO2dCQUMxRCxNQUFLRSxLQUFLO1lBQ1o7UUFDRixJQUVBRSx3QkFBQUEsK0JBQThCLFNBQUNoQixPQUFPQztZQUNwQyxJQUFNQyxVQUFVLE1BQUtDLFNBQVMsSUFDeEJDLFdBQVcsTUFBS0MsV0FBVztZQUVqQ0QsU0FBU0ksTUFBTTtZQUVmLE1BQUtHLE1BQU0sQ0FB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