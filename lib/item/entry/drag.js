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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _name = /*#__PURE__*/ _interopRequireDefault(require("../../span/name"));
var _entry = /*#__PURE__*/ _interopRequireDefault(require("../../item/entry"));
var _constants = require("../../constants");
var _entryTypes = require("../../entryTypes");
var _pathMap = require("../../utilities/pathMap");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
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
function _objectSpreadProps(target, source) {
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  user-select: none;\n  \n  font-weight: normal;\n  \n  .selected {\n    font-weight: bold;\n  }\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DragEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(DragEntryItem, EntryItem);
    var _super = _createSuper(DragEntryItem);
    function DragEntryItem() {
        _classCallCheck(this, DragEntryItem);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "nameSpanChangeHandler", function(event, element) {
            var name = _this.getState().name, nameSpanName = _this.getNameSpanName(), nameChanged = name !== nameSpanName;
            if (!nameChanged) {
                return;
            }
            var created = _this.isCreated(), explorer = _this.getExplorer(), dragEntryItem = _assertThisInitialized(_this); ///
            if (created) {
                explorer.createDragEntryItem(dragEntryItem, function() {
                    _this.cancel();
                });
                return;
            }
            explorer.renameDragEntryItem(dragEntryItem, function() {
                _this.cancel();
            });
        });
        _defineProperty(_assertThisInitialized(_this), "nameSpanCancelHandler", function(event, element) {
            var created = _this.isCreated();
            created ? _this.remove() : _this.cancel();
            _this.cancel();
        });
        _defineProperty(_assertThisInitialized(_this), "startDragHandler", function(element) {
            var path = _this.getPath(), type = _this.getType(), explorer = _this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
            explorer.addMarker(markerEntryItemPath, dragEntryItemType);
        });
        _defineProperty(_assertThisInitialized(_this), "stopDragHandler", function(dropElement, aborted, element, done) {
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
    _createClass(DragEntryItem, [
        {
            key: "isCreated",
            value: function isCreated() {
                var created = this.properties.created;
                return created;
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
            key: "isSelected",
            value: function isSelected() {
                var selected = this.hasClass("selected"); ///
                return selected;
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
            key: "edit",
            value: function edit() {
                var created = this.isCreated(), name = created ? _constants.EMPTY_STRING : this.getName(), nameSpanName = name; ///
                this.setNameSpanName(nameSpanName);
                this.updateState({
                    name: name
                });
                this.editNameSpan();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var name = this.getState().name, nameSpanName = name; ///
                this.setNameSpanName(nameSpanName);
                this.cancelNameSpan();
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
                return _objectSpreadProps(_objectSpread({}, context), {
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
_defineProperty(DragEntryItem, "NameSpan", _name.default);
_defineProperty(DragEntryItem, "ignoredProperties", [
    "created"
]);
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VFbnRyeVBhdGgsIGFkanVzdFRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgbmFtZVNwYW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lU3Bhbk5hbWUoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IChuYW1lICE9PSBuYW1lU3Bhbk5hbWUpO1xuXG4gICAgaWYgKCFuYW1lQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZVNwYW5DYW5jZWxIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCk7XG5cbiAgICBjcmVhdGVkID9cbiAgICAgIHRoaXMucmVtb3ZlKCkgOlxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuXG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIgPSAoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBpc0NyZWF0ZWQoKSB7XG4gICAgY29uc3QgeyBjcmVhdGVkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gY3JlYXRlZDtcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpLFxuICAgICAgICAgIG5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZVNwYW5OYW1lKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSB0aGlzLmdldEVudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZVNwYW5OYW1lKTtcdC8vL1xuXG4gICAgY29uc3QgcGF0aE1hcCA9IHtcbiAgICAgIGNvbGxhcHNlZCxcbiAgICAgIGVudHJ5RGlyZWN0b3J5LFxuICAgICAgc291cmNlRW50cnlQYXRoLFxuICAgICAgdGFyZ2V0RW50cnlQYXRoXG4gICAgfTtcblxuICAgIHJldHVybiBwYXRoTWFwO1xuICB9XG5cbiAgZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBsZXQgcGF0aE1hcHMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG4gICAgcGF0aE1hcHMucmV2ZXJzZSgpO1xuXG4gICAgcmV0dXJuIHBhdGhNYXBzO1xuICB9XG5cbiAgZ2V0RW50cnlEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlID0gKHR5cGUgPT09IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGlzRWRpdGFibGUoKSB7XG4gICAgY29uc3QgbmFtZVNwYW5FZGl0ZWQgPSB0aGlzLmlzTmFtZVNwYW5FZGl0YWJsZSgpLFxuICAgICAgICAgIGVkaXRhYmxlID0gbmFtZVNwYW5FZGl0ZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGVkaXRhYmxlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCksXG4gICAgICAgICAgbmFtZSA9IGNyZWF0ZWQgP1xuICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuZWRpdE5hbWVTcGFuKCk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgbmFtZVNwYW5OYW1lID0gbmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldE5hbWVTcGFuTmFtZShuYW1lU3Bhbk5hbWUpO1xuXG4gICAgdGhpcy5jYW5jZWxOYW1lU3BhbigpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lU3BhbkNoYW5nZSh0aGlzLm5hbWVTcGFuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVTcGFuQ2hhbmdlKHRoaXMubmFtZVNwYW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZVNwYW5DYW5jZWwodGhpcy5uYW1lU3BhbkNhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdCA9IHRoaXMuZGVzZWxlY3QuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIGRlc2VsZWN0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cbiAgc3RhdGljIE5hbWVTcGFuID0gTmFtZVNwYW47XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY3JlYXRlZFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gIC5zZWxlY3RlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJEcmFnRW50cnlJdGVtIiwibmFtZVNwYW5DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibmFtZSIsImdldFN0YXRlIiwibmFtZVNwYW5OYW1lIiwiZ2V0TmFtZVNwYW5OYW1lIiwibmFtZUNoYW5nZWQiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY2FuY2VsIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsIm5hbWVTcGFuQ2FuY2VsSGFuZGxlciIsInJlbW92ZSIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsInByb3BlcnRpZXMiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwiZ2V0TmFtZSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJnZXRFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiaXNFZGl0YWJsZSIsIm5hbWVTcGFuRWRpdGVkIiwiaXNOYW1lU3BhbkVkaXRhYmxlIiwiZWRpdGFibGUiLCJkZXNlbGVjdCIsInJlbW92ZUNsYXNzIiwic2VsZWN0IiwiYWRkQ2xhc3MiLCJlZGl0IiwiRU1QVFlfU1RSSU5HIiwic2V0TmFtZVNwYW5OYW1lIiwidXBkYXRlU3RhdGUiLCJlZGl0TmFtZVNwYW4iLCJjYW5jZWxOYW1lU3BhbiIsImRpZE1vdW50Iiwib25TdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwib25OYW1lU3BhbkNoYW5nZSIsIm9uTmFtZVNwYW5DYW5jZWwiLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdG9wRHJhZyIsIm9mZlN0YXJ0RHJhZyIsIm9mZk5hbWVTcGFuQ2hhbmdlIiwib2ZmTmFtZVNwYW5DYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlw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