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
var _name1 = /*#__PURE__*/ _interopRequireDefault(require("../../input/name"));
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
        _defineProperty(_assertThisInitialized(_this), "nameInputChangeHandler", function() {
            var created = _this.isCreated(), explorer = _this.getExplorer(), nameChanged = _this.hasNameChanged(), dragEntryItem = _assertThisInitialized(_this); ///
            if (!nameChanged) {
                return;
            }
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
        _defineProperty(_assertThisInitialized(_this), "nameInputCancelHandler", function() {
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
                var name = this.getName(), collapsed = this.isCollapsed(), nameInputName = this.getNameInputName(), entryDirectory = this.getEntryDirectory();
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name); ///
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, nameInputName); ///
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
            key: "hasNameChanged",
            value: function hasNameChanged() {
                var nameInputName = this.getNameInputName(), nameSpanName = this.getNameSpanName(), nameChanged = nameInputName !== nameSpanName;
                return nameChanged;
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
            key: "isEdited",
            value: function isEdited() {
                var nameInputDisplayed = this.isNameInputDisplayed(), edited = nameInputDisplayed; ///
                return edited;
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
                var created = this.isCreated();
                if (created) {
                    var name = _constants.EMPTY_STRING, nameSpanName = name, nameInputName = name; ///
                    this.setNameSpanName(nameSpanName);
                    this.setNameInputName(nameInputName);
                }
                this.hideNameSpan();
                this.showNameInput();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var name = this.getName(), nameInputName = name; ///
                this.setNameInputName(nameInputName);
                this.showNameSpan();
                this.hideNameInput();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.hideNameInput();
                this.onStopDrag(this.stopDragHandler);
                this.onStartDrag(this.startDragHandler);
                this.onNameInputChange(this.nameInputChangeHandler);
                this.onNameInputCancel(this.nameInputCancelHandler);
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offStopDrag(this.stopDragHandler);
                this.offStartDrag(this.startDragHandler);
                this.offNameInputChange(this.nameInputChangeHandler);
                this.offNameInputCancel(this.nameInputCancelHandler);
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
_defineProperty(DragEntryItem, "NameInput", _name1.default);
_defineProperty(DragEntryItem, "ignoredProperties", [
    "created"
]);
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBOYW1lU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9uYW1lXCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuLi8uLi9pbnB1dC9uYW1lXCI7XG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi9lbnRyeVR5cGVzXCI7XG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VFbnRyeVBhdGgsIGFkanVzdFRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgbmFtZUlucHV0Q2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBpZiAoIW5hbWVDaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIGV4cGxvcmVyLmNyZWF0ZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5yZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuYW1lSW5wdXRDYW5jZWxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpO1xuXG4gICAgY3JlYXRlZCA/XG4gICAgICB0aGlzLnJlbW92ZSgpIDpcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyID0gKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgaXNDcmVhdGVkKCkge1xuICAgIGNvbnN0IHsgY3JlYXRlZCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGNyZWF0ZWQ7XG4gIH1cblxuICBnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSB0aGlzLmdldEVudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZUlucHV0TmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGhhc05hbWVDaGFuZ2VkKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWVJbnB1dE5hbWUoKSxcbiAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWVTcGFuTmFtZSgpLFxuICAgICAgICAgIG5hbWVDaGFuZ2VkID0gKG5hbWVJbnB1dE5hbWUgIT09IG5hbWVTcGFuTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZUNoYW5nZWQ7XG4gIH1cblxuICBnZXRFbnRyeURpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUgPSAodHlwZSA9PT0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNFZGl0ZWQoKSB7XG4gICAgY29uc3QgbmFtZUlucHV0RGlzcGxheWVkID0gdGhpcy5pc05hbWVJbnB1dERpc3BsYXllZCgpLFxuICAgICAgICAgIGVkaXRlZCA9IG5hbWVJbnB1dERpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVkaXRlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgICBuYW1lU3Bhbk5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBuYW1lSW5wdXROYW1lID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuc2V0TmFtZVNwYW5OYW1lKG5hbWVTcGFuTmFtZSk7XG5cbiAgICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVOYW1lU3BhbigpO1xuXG4gICAgdGhpcy5zaG93TmFtZUlucHV0KCk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVJbnB1dE5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcblxuICAgIHRoaXMuc2hvd05hbWVTcGFuKCk7XG5cbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lSW5wdXRDaGFuZ2UodGhpcy5uYW1lSW5wdXRDaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lSW5wdXRDYW5jZWwodGhpcy5uYW1lSW5wdXRDYW5jZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lSW5wdXRDaGFuZ2UodGhpcy5uYW1lSW5wdXRDaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZUlucHV0Q2FuY2VsKHRoaXMubmFtZUlucHV0Q2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZVNwYW4gPSBOYW1lU3BhbjtcblxuICBzdGF0aWMgTmFtZUlucHV0ID0gTmFtZUlucHV0O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNyZWF0ZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbSIsIm5hbWVJbnB1dENoYW5nZUhhbmRsZXIiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIm5hbWVDaGFuZ2VkIiwiaGFzTmFtZUNoYW5nZWQiLCJkcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbSIsImNhbmNlbCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lSW5wdXRDYW5jZWxIYW5kbGVyIiwicmVtb3ZlIiwic3RhcnREcmFnSGFuZGxlciIsImVsZW1lbnQiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsInByb3BlcnRpZXMiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwibmFtZSIsImdldE5hbWUiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwiZW50cnlEaXJlY3RvcnkiLCJnZXRFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJuYW1lU3Bhbk5hbWUiLCJnZXROYW1lU3Bhbk5hbWUiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiaXNFZGl0ZWQiLCJuYW1lSW5wdXREaXNwbGF5ZWQiLCJpc05hbWVJbnB1dERpc3BsYXllZCIsImVkaXRlZCIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJFTVBUWV9TVFJJTkciLCJzZXROYW1lU3Bhbk5hbWUiLCJzZXROYW1lSW5wdXROYW1lIiwiaGlkZU5hbWVTcGFuIiwic2hvd05hbWVJbnB1dCIsInNob3dOYW1lU3BhbiIsImhpZGVOYW1lSW5wdXQiLCJkaWRNb3VudCIsIm9uU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsIm9uTmFtZUlucHV0Q2hhbmdlIiwib25OYW1lSW5wdXRDYW5jZWwiLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdG9wRHJhZyIsIm9mZlN0YXJ0RHJhZyIsIm9mZk5hbWVJbnB1dENoYW5nZSIsIm9mZk5hbWVJbnB1dENhbmNlbCIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZVNwYW4iLCJOYW1lSW5wdXQiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlBBOzs7ZUFBQTs7O2tFQTNQc0I7K0JBRUs7eURBRU47MERBQ0M7MERBQ0E7eUJBRU87MEJBQ2tCO3VCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBQSxBQUFNQSw4QkE2T0gsQUE3T0g7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ0pDLCtDQUFBQSwwQkFBeUIsV0FBTTtZQUM3QixJQUFNQyxVQUFVLE1BQUtDLFNBQVMsSUFDeEJDLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsY0FBYyxNQUFLQyxjQUFjLElBQ2pDQywrQ0FBc0IsR0FBRztZQUUvQixJQUFJLENBQUNGLGFBQWE7Z0JBQ2hCO1lBQ0YsQ0FBQztZQUVELElBQUlKLFNBQVM7Z0JBQ1hFLFNBQVNLLG1CQUFtQixD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