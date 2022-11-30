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
        _defineProperty(_assertThisInitialized(_this), "svgButtonClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), dragEntryItem = _assertThisInitialized(_this); ///
            explorer.selectDragEntryItem(dragEntryItem);
            event.stopPropagation();
        });
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
                this.onSVGButtonClick(this.svgButtonClickHandler);
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
                this.offSVGButtonClick(this.svgButtonClickHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBOYW1lSW5wdXQgZnJvbSBcIi4uLy4uL2lucHV0L25hbWVcIjtcbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIHN2Z0J1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGV4cGxvcmVyLnNlbGVjdERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG5hbWVJbnB1dENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuaXNDcmVhdGVkKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSB0aGlzLmhhc05hbWVDaGFuZ2VkKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7IC8vL1xuXG4gICAgaWYgKCFuYW1lQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZUlucHV0Q2FuY2VsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKTtcblxuICAgIGNyZWF0ZWQgP1xuICAgICAgdGhpcy5yZW1vdmUoKSA6XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGlzQ3JlYXRlZCgpIHtcbiAgICBjb25zdCB7IGNyZWF0ZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBjcmVhdGVkO1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IHRoaXMuZ2V0TmFtZUlucHV0TmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5nZXRFbnRyeURpcmVjdG9yeSgpO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVJbnB1dE5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgY29sbGFwc2VkLFxuICAgICAgZW50cnlEaXJlY3RvcnksXG4gICAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICB0YXJnZXRFbnRyeVBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBhdGhNYXA7XG4gIH1cblxuICBnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGxldCBwYXRoTWFwcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cbiAgICBwYXRoTWFwcy5yZXZlcnNlKCk7XG5cbiAgICByZXR1cm4gcGF0aE1hcHM7XG4gIH1cblxuICBoYXNOYW1lQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgbmFtZUJ1dHRvbk5hbWUgPSB0aGlzLmdldE5hbWVCdXR0b25OYW1lKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSAobmFtZUlucHV0TmFtZSAhPT0gbmFtZUJ1dHRvbk5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVDaGFuZ2VkO1xuICB9XG5cbiAgZ2V0RW50cnlEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlID0gKHR5cGUgPT09IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGlzRWRpdGVkKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dERpc3BsYXllZCA9IHRoaXMuaXNOYW1lSW5wdXREaXNwbGF5ZWQoKSxcbiAgICAgICAgICBlZGl0ZWQgPSBuYW1lSW5wdXREaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBlZGl0ZWQ7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKTtcblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBjb25zdCBuYW1lID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgICAgbmFtZUlucHV0TmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgbmFtZUJ1dHRvbk5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcblxuICAgICAgdGhpcy5zZXROYW1lQnV0dG9uTmFtZShuYW1lQnV0dG9uTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlTmFtZUJ1dHRvbigpO1xuXG4gICAgdGhpcy5zaG93TmFtZUlucHV0KCk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVJbnB1dE5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcblxuICAgIHRoaXMuc2hvd05hbWVCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TVkdCdXR0b25DbGljayh0aGlzLnN2Z0J1dHRvbkNsaWNrSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZUlucHV0Q2hhbmdlKHRoaXMubmFtZUlucHV0Q2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZUlucHV0Q2FuY2VsKHRoaXMubmFtZUlucHV0Q2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU1ZHQnV0dG9uQ2xpY2sodGhpcy5zdmdCdXR0b25DbGlja0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lSW5wdXRDaGFuZ2UodGhpcy5uYW1lSW5wdXRDaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZUlucHV0Q2FuY2VsKHRoaXMubmFtZUlucHV0Q2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZUlucHV0ID0gTmFtZUlucHV0O1xuXG4gIHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJjcmVhdGVkXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsInNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJuYW1lSW5wdXRDaGFuZ2VIYW5kbGVyIiwiY3JlYXRlZCIsImlzQ3JlYXRlZCIsIm5hbWVDaGFuZ2VkIiwiaGFzTmFtZUNoYW5nZWQiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY2FuY2VsIiwicmVuYW1lRHJhZ0VudHJ5SXRlbSIsIm5hbWVJbnB1dENhbmNlbEhhbmRsZXIiLCJyZW1vdmUiLCJzdGFydERyYWdIYW5kbGVyIiwicGF0aCIsImdldFBhdGgiLCJ0eXBlIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImFkZE1hcmtlciIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJwcm9wZXJ0aWVzIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm5hbWUiLCJnZXROYW1lIiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJuYW1lSW5wdXROYW1lIiwiZ2V0TmFtZUlucHV0TmFtZSIsImVudHJ5RGlyZWN0b3J5IiwiZ2V0RW50cnlEaXJlY3RvcnkiLCJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwibmFtZUJ1dHRvbk5hbWUiLCJnZXROYW1lQnV0dG9uTmFtZSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJ0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiaXNTZWxlY3RlZCIsInNlbGVjdGVkIiwiaGFzQ2xhc3MiLCJpc0VkaXRlZCIsIm5hbWVJbnB1dERpc3BsYXllZCIsImlzTmFtZUlucHV0RGlzcGxheWVkIiwiZWRpdGVkIiwiZGVzZWxlY3QiLCJyZW1vdmVDbGFzcyIsInNlbGVjdCIsImFkZENsYXNzIiwiZWRpdCIsIkVNUFRZX1NUUklORyIsInNldE5hbWVJbnB1dE5hbWUiLCJzZXROYW1lQnV0dG9uTmFtZSIsImhpZGVOYW1lQnV0dG9uIiwic2hvd05hbWVJbnB1dCIsInNob3dOYW1lQnV0dG9uIiwiaGlkZU5hbWVJbnB1dCIsImRpZE1vdW50Iiwib25TdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwib25TVkdCdXR0b25DbGljayIsIm9uTmFtZUlucHV0Q2hhbmdlIiwib25OYW1lSW5wdXRDYW5jZWwiLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdG9wRHJhZyIsIm9mZlN0YXJ0RHJhZyIsIm9mZlNWR0J1dHRvbkNsaWNrIiwib2ZmTmFtZUlucHV0Q2hhbmdlIiwib2ZmTmFtZUlucHV0Q2FuY2VsIiwiZGlzYWJsZURyYWciLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbnRyeUl0ZW0iLCJOYW1lSW5wdXQiLCJOYW1lQnV0dG9uIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7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