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
var _entry = /*#__PURE__*/ _interopRequireDefault(require("../../item/entry"));
var _name = /*#__PURE__*/ _interopRequireDefault(require("../../input/name"));
var _name1 = /*#__PURE__*/ _interopRequireDefault(require("../../button/name"));
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
                var nameInputName = this.getNameInputName(), nameButtonName = this.getNameButtonName(), nameChanged = nameInputName !== nameButtonName;
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
                    var name = _constants.EMPTY_STRING, nameInputName = name, nameButtonName = name; ///
                    this.setNameInputName(nameInputName);
                    this.setNameButtonName(nameButtonName);
                }
                this.hideNameButton();
                this.showNameInput();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var name = this.getName(), nameInputName = name; ///
                this.setNameInputName(nameInputName);
                this.showNameButton();
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
_defineProperty(DragEntryItem, "NameInput", _name.default);
_defineProperty(DragEntryItem, "NameButton", _name1.default);
_defineProperty(DragEntryItem, "ignoredProperties", [
    "created"
]);
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBOYW1lSW5wdXQgZnJvbSBcIi4uLy4uL2lucHV0L25hbWVcIjtcbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIG5hbWVJbnB1dENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSB0aGlzLmhhc05hbWVDaGFuZ2VkKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7IC8vL1xuXG4gICAgaWYgKCFuYW1lQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZUlucHV0Q2FuY2VsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKTtcblxuICAgIGNyZWF0ZWQgP1xuICAgICAgdGhpcy5yZW1vdmUoKSA6XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGlzQ3JlYXRlZCgpIHtcbiAgICBjb25zdCB7IGNyZWF0ZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBjcmVhdGVkO1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IHRoaXMuZ2V0TmFtZUlucHV0TmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5nZXRFbnRyeURpcmVjdG9yeSgpO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVJbnB1dE5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgY29sbGFwc2VkLFxuICAgICAgZW50cnlEaXJlY3RvcnksXG4gICAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICB0YXJnZXRFbnRyeVBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBhdGhNYXA7XG4gIH1cblxuICBnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGxldCBwYXRoTWFwcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cbiAgICBwYXRoTWFwcy5yZXZlcnNlKCk7XG5cbiAgICByZXR1cm4gcGF0aE1hcHM7XG4gIH1cblxuICBoYXNOYW1lQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgbmFtZUJ1dHRvbk5hbWUgPSB0aGlzLmdldE5hbWVCdXR0b25OYW1lKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSAobmFtZUlucHV0TmFtZSAhPT0gbmFtZUJ1dHRvbk5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVDaGFuZ2VkO1xuICB9XG5cbiAgZ2V0RW50cnlEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlID0gKHR5cGUgPT09IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGlzRWRpdGVkKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dERpc3BsYXllZCA9IHRoaXMuaXNOYW1lSW5wdXREaXNwbGF5ZWQoKSxcbiAgICAgICAgICBlZGl0ZWQgPSBuYW1lSW5wdXREaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBlZGl0ZWQ7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKTtcblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBjb25zdCBuYW1lID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgICAgbmFtZUlucHV0TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgbmFtZUJ1dHRvbk5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcblxuICAgICAgdGhpcy5zZXROYW1lQnV0dG9uTmFtZShuYW1lQnV0dG9uTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlTmFtZUJ1dHRvbigpO1xuXG4gICAgdGhpcy5zaG93TmFtZUlucHV0KCk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVJbnB1dE5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcblxuICAgIHRoaXMuc2hvd05hbWVCdXR0b24oKTtcblxuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVJbnB1dENoYW5nZSh0aGlzLm5hbWVJbnB1dENoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVJbnB1dENhbmNlbCh0aGlzLm5hbWVJbnB1dENhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVJbnB1dENoYW5nZSh0aGlzLm5hbWVJbnB1dENoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lSW5wdXRDYW5jZWwodGhpcy5uYW1lSW5wdXRDYW5jZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3QgPSB0aGlzLmRlc2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBzZWxlY3QsXG4gICAgICBkZXNlbGVjdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG4gIHN0YXRpYyBOYW1lSW5wdXQgPSBOYW1lSW5wdXQ7XG5cbiAgc3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNyZWF0ZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbSIsIm5hbWVJbnB1dENoYW5nZUhhbmRsZXIiLCJjcmVhdGVkIiwiaXNDcmVhdGVkIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIm5hbWVDaGFuZ2VkIiwiaGFzTmFtZUNoYW5nZWQiLCJkcmFnRW50cnlJdGVtIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbSIsImNhbmNlbCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lSW5wdXRDYW5jZWxIYW5kbGVyIiwicmVtb3ZlIiwic3RhcnREcmFnSGFuZGxlciIsImVsZW1lbnQiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsInByb3BlcnRpZXMiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwibmFtZSIsImdldE5hbWUiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwiZW50cnlEaXJlY3RvcnkiLCJnZXRFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJuYW1lQnV0dG9uTmFtZSIsImdldE5hbWVCdXR0b25OYW1lIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsInR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsImlzRWRpdGVkIiwibmFtZUlucHV0RGlzcGxheWVkIiwiaXNOYW1lSW5wdXREaXNwbGF5ZWQiLCJlZGl0ZWQiLCJkZXNlbGVjdCIsInJlbW92ZUNsYXNzIiwic2VsZWN0IiwiYWRkQ2xhc3MiLCJlZGl0IiwiRU1QVFlfU1RSSU5HIiwic2V0TmFtZUlucHV0TmFtZSIsInNldE5hbWVCdXR0b25OYW1lIiwiaGlkZU5hbWVCdXR0b24iLCJzaG93TmFtZUlucHV0Iiwic2hvd05hbWVCdXR0b24iLCJoaWRlTmFtZUlucHV0IiwiZGlkTW91bnQiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJvbk5hbWVJbnB1dENoYW5nZSIsIm9uTmFtZUlucHV0Q2FuY2VsIiwiZW5hYmxlRHJhZyIsIndpbGxVbm1vdW50Iiwib2ZmU3RvcERyYWciLCJvZmZTdGFydERyYWciLCJvZmZOYW1lSW5wdXRDaGFuZ2UiLCJvZmZOYW1lSW5wdXRDYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVJbnB1dCIsIk5hbWVCdXR0b24iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlBBOzs7ZUFBQTs7O2tFQTNQc0I7K0JBRUs7MERBRUw7eURBQ0E7MERBQ0M7eUJBRU07MEJBQ2tCO3VCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBQSxBQUFNQSw4QkE2T0gsQUE3T0g7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1FBQ0pDLCtDQUFBQSwwQkFBeUIsV0FBTTtZQUM3QixJQUFNQyxVQUFVLE1BQUtDLFNBQVMsSUFDeEJDLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsY0FBYyxNQUFLQyxjQUFjLElBQ2pDQywrQ0FBc0IsR0FBRztZQUUvQixJQUFJLENBQUNGLGFBQWE7Z0JBQ2hCO1lBQ0YsQ0FBQztZ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