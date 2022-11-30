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
            var explorer = _this.getExplorer(), dragEntryItem = _assertThisInitialized(_this), selected = dragEntryItem.isSelected();
            selected ? explorer.deselectDragEntryItem(dragEntryItem) : explorer.selectDragEntryItem(dragEntryItem);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBOYW1lSW5wdXQgZnJvbSBcIi4uLy4uL2lucHV0L25hbWVcIjtcbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vZW50cnlUeXBlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIHN2Z0J1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgc2VsZWN0ZWQgP1xuICAgICAgZXhwbG9yZXIuZGVzZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pIDpcbiAgICAgICAgZXhwbG9yZXIuc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbmFtZUlucHV0Q2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBpZiAoIW5hbWVDaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIGV4cGxvcmVyLmNyZWF0ZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5yZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuYW1lSW5wdXRDYW5jZWxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpO1xuXG4gICAgY3JlYXRlZCA/XG4gICAgICB0aGlzLnJlbW92ZSgpIDpcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyID0gKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgaXNDcmVhdGVkKCkge1xuICAgIGNvbnN0IHsgY3JlYXRlZCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGNyZWF0ZWQ7XG4gIH1cblxuICBnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSB0aGlzLmdldEVudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZUlucHV0TmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGhhc05hbWVDaGFuZ2VkKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWVJbnB1dE5hbWUoKSxcbiAgICAgICAgICBuYW1lQnV0dG9uTmFtZSA9IHRoaXMuZ2V0TmFtZUJ1dHRvbk5hbWUoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IChuYW1lSW5wdXROYW1lICE9PSBuYW1lQnV0dG9uTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZUNoYW5nZWQ7XG4gIH1cblxuICBnZXRFbnRyeURpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUgPSAodHlwZSA9PT0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNFZGl0ZWQoKSB7XG4gICAgY29uc3QgbmFtZUlucHV0RGlzcGxheWVkID0gdGhpcy5pc05hbWVJbnB1dERpc3BsYXllZCgpLFxuICAgICAgICAgIGVkaXRlZCA9IG5hbWVJbnB1dERpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVkaXRlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmlzQ3JlYXRlZCgpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgICBuYW1lSW5wdXROYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICBuYW1lQnV0dG9uTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgICAgdGhpcy5zZXROYW1lSW5wdXROYW1lKG5hbWVJbnB1dE5hbWUpO1xuXG4gICAgICB0aGlzLnNldE5hbWVCdXR0b25OYW1lKG5hbWVCdXR0b25OYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVOYW1lQnV0dG9uKCk7XG5cbiAgICB0aGlzLnNob3dOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lSW5wdXROYW1lKG5hbWVJbnB1dE5hbWUpO1xuXG4gICAgdGhpcy5zaG93TmFtZUJ1dHRvbigpO1xuXG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uU1ZHQnV0dG9uQ2xpY2sodGhpcy5zdmdCdXR0b25DbGlja0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVJbnB1dENoYW5nZSh0aGlzLm5hbWVJbnB1dENoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk5hbWVJbnB1dENhbmNlbCh0aGlzLm5hbWVJbnB1dENhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZlNWR0J1dHRvbkNsaWNrKHRoaXMuc3ZnQnV0dG9uQ2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZUlucHV0Q2hhbmdlKHRoaXMubmFtZUlucHV0Q2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVJbnB1dENhbmNlbCh0aGlzLm5hbWVJbnB1dENhbmNlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdCA9IHRoaXMuZGVzZWxlY3QuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIGRlc2VsZWN0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cbiAgc3RhdGljIE5hbWVJbnB1dCA9IE5hbWVJbnB1dDtcblxuICBzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY3JlYXRlZFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gIC5zZWxlY3RlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJEcmFnRW50cnlJdGVtIiwic3ZnQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJkZXNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwibmFtZUlucHV0Q2hhbmdlSGFuZGxlciIsImNyZWF0ZWQiLCJpc0NyZWF0ZWQiLCJuYW1lQ2hhbmdlZCIsImhhc05hbWVDaGFuZ2VkIiwiY3JlYXRlRHJhZ0VudHJ5SXRlbSIsImNhbmNlbCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lSW5wdXRDYW5jZWxIYW5kbGVyIiwicmVtb3ZlIiwic3RhcnREcmFnSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0hhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwicHJvcGVydGllcyIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwibmFtZUlucHV0TmFtZSIsImdldE5hbWVJbnB1dE5hbWUiLCJlbnRyeURpcmVjdG9yeSIsImdldEVudHJ5RGlyZWN0b3J5IiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsIm5hbWVCdXR0b25OYW1lIiwiZ2V0TmFtZUJ1dHRvbk5hbWUiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImhhc0NsYXNzIiwiaXNFZGl0ZWQiLCJuYW1lSW5wdXREaXNwbGF5ZWQiLCJpc05hbWVJbnB1dERpc3BsYXllZCIsImVkaXRlZCIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJFTVBUWV9TVFJJTkciLCJzZXROYW1lSW5wdXROYW1lIiwic2V0TmFtZUJ1dHRvbk5hbWUiLCJoaWRlTmFtZUJ1dHRvbiIsInNob3dOYW1lSW5wdXQiLCJzaG93TmFtZUJ1dHRvbiIsImhpZGVOYW1lSW5wdXQiLCJkaWRNb3VudCIsIm9uU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsIm9uU1ZHQnV0dG9uQ2xpY2siLCJvbk5hbWVJbnB1dENoYW5nZSIsIm9uTmFtZUlucHV0Q2FuY2VsIiwiZW5hYmxlRHJhZyIsIndpbGxVbm1vdW50Iiwib2ZmU3RvcERyYWciLCJvZmZTdGFydERyYWciLCJvZmZTVkdCdXR0b25DbGljayIsIm9mZk5hbWVJbnB1dENoYW5nZSIsIm9mZk5hbWVJbnB1dENhbmNlbCIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2UUE7OztlQUFBOzs7a0VBM1FzQjsrQkFFSzswREFFTDt5REFDQTswREFDQzt5QkFFTTswQkFDa0I7dUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFBLEFBQU1BLDhCQTZQSCxBQTdQSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkMsK0NBQUFBLHlCQUF3QixTQUFDQyxPQUFPQyxTQUFZO1lBQzFDLElBQU1DLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsK0NBQ0FDLFdBQVdELGNBQWNFLFVBQVU7WUFFekNELFdBQ0VILFNBQVNLLHFCQUFxQixDQUFDSCxpQkFDN0JGLFNBQVNNLG1CQUFtQixDQUFDSixjQUFjO1lBRS9DSixNQUFNUyxlQUFlO1FBQ3ZCO1FBRUFDLCtDQUFBQSwwQkFBeUIsV0FBTTtZQUM3QixJQUFNQyxVQUFVLE1BQUtDLFNBQVMsSUFDeEJWLFdBQVcsTUFBS0MsV0FBVyxJQUMzQlUsY0FBYyxNQUFLQyxjQUFjLElBQ2pDViwrQ0FBc0IsR0FBRztZQUUvQixJQUFJLENBQUNTLGFBQWE7Z0JBQ2hCO1lBQ0YsQ0FBQztZQUVELElBQUlGLFNBQVM7Z0JBQ1hULFNBQVNhLG1CQUFtQixDQUFDWCxlQUFlLFdBQU07b0JBQ2hELE1BQUtZLE1BQU07Z0JBQ2I7Z0JBRUE7WUFDRixDQUFDO1lBRURkLFNBQVNlLG1CQUFtQixDQUFDYixlQUFlLFdBQU07Z0JBQ2hELE1BQUtZLE1BQU07WUFDYjtRQUNGO1FBRUFFLCtDQUFBQSwwQkFBeUIsV0FBTTtZQUM3QixJQUFNUCxVQUFVLE1BQUtDLFNBQVM7WUFFOUJELFVBQ0UsTUFBS1EsTUFBTSxLQUNULE1BQUtILE1BQU0sRUFBRTtZQUVqQixNQUFLQSxNQUFNO1FBQ2I7UUFFQUksK0NBQUFBLG9CQUFtQixTQUFDbkIsU0FBWTtZQUM5QixJQUFNb0IsT0FBTyxNQUFLQyxPQUFPLElBQ25CQyxPQUFPLE1BQUtDLE9BQU8sSUFDbkJ0QixXQUFXLE1BQUtDLFdBQVcsSUFDM0JzQixvQkFBb0JGLE1BQ3BCRyxzQkFBc0JMLE1BQU8sR0FBRztZQUV0Q25CLFNBQVN5QixTQUFTLENBQUNELHFCQUFxQkQ7UUFDMUM7UUFFQUcsK0NBQUFBLG1CQUFrQixTQUFDQyxhQUFhQyxTQUFTN0IsU0FBUzhCLE1BQVM7WUFDekQsSUFBSUYsZ0JBQWdCLElBQUksRUFBRTtnQkFDeEJFO2dCQUVBO1lBQ0YsQ0FBQztZQUVELElBQU1DLGtCQUFrQixNQUFLQyx1QkFBdUIsSUFDOUNDLDBCQUEwQkYsZ0JBQWdCN0IsV0FBVztZQUUzRCxJQUFJMkIsU0FBUztnQkFDWEksd0JBQXdCQyxZQUFZO2dCQUVwQ0o7Z0JBRUE7WUFDRixDQUFDO1lBRUQsSUFBTTNCLGdCQUFnQkgsU0FBVSxHQUFHO1lBRW5DaUMsd0JBQXdCRSxpQkFBaUIsQ0FBQ2hDLGVBQWUyQjtRQUMzRDs7O2lCQTdFSWpDOztZQStFSmMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsSUFBTSxBQUFFRCxVQUFZLElBQUksQ0FBQzBCLFVBQVUsQ0FBM0IxQjtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxlQUFlLEVBQUVDLGVBQWUsRUFBRTtnQkFDM0MsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVksSUFBSSxDQUFDQyxXQUFXLElBQzVCQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQjtnQkFFN0NULGtCQUFrQlUsSUFBQUEsOEJBQXFCLEVBQUNWLGlCQUFpQkUsT0FBTyxHQUFHO2dCQUVuRUQsa0JBQWtCVSxJQUFBQSw4QkFBcUIsRUFBQ1YsaUJBQWlCSyxnQkFBZ0IsR0FBRztnQkFFNUUsSUFBTU0sVUFBVTtvQkFDZFIsV0FBQUE7b0JBQ0FJLGdCQUFBQTtvQkFDQVIsaUJBQUFBO29CQUNBQyxpQkFBQUE7Z0JBQ0Y7Z0JBRUEsT0FBT1c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZYixlQUFlLEVBQUVDLGVBQWUsRUFBRTtnQkFDNUMsSUFBSWEsV0FBVyxFQUFFO2dCQUVqQixJQUFJLENBQUNDLGdCQUFnQixDQUFDZixpQkFBaUJDLGlCQUFpQmE7Z0JBRXhEQSxTQUFTRSxPQUFPO2dCQUVoQixPQUFPRjtZQUNUOzs7WUFFQXZDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsSUFBTStCLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ1UsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDNUMsY0FBZWdDLGtCQUFrQlc7Z0JBRXZDLE9BQU8zQztZQUNUOzs7WUFFQW1DLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLElBQU1VLDZCQUE2QixJQUFJLENBQUNDLDRCQUE0QixJQUM5RFosaUJBQWlCVyw0QkFBNkIsR0FBRztnQkFFdkQsT0FBT1g7WUFDVDs7O1lBRUFkLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEI7Z0JBQ3hCLElBQU0sQUFBRUQsa0JBQW9CNEIsV0FBcEI1QjtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0I7Z0JBQzdCLElBQU1wQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQnFDLHFDQUFzQ3RDLFNBQVN1QywwQ0FBOEIsRUFDN0VKLDZCQUE2Qkcsb0NBQXFDLEdBQUc7Z0JBRTNFLE9BQU9IO1lBQ1Q7OztZQUVBcEQsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBTUQsV0FBVyxJQUFJLENBQUMwRCxRQUFRLENBQUMsYUFBYSxHQUFHO2dCQUUvQyxPQUFPMUQ7WUFDVDs7O1lBRUEyRCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxvQkFBb0IsSUFDOUNDLFNBQVNGLG9CQUFxQixHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBSSxDQUFDQyxXQUFXLENBQUM7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFJLENBQUNDLFFBQVEsQ0FBQztZQUNoQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPO2dCQUNMLElBQU03RCxVQUFVLElBQUksQ0FBQ0MsU0FBUztnQkFFOUIsSUFBSUQsU0FBUztvQkFDWCxJQUFNOEIsT0FBT2dDLHVCQUFZLEVBQ25CNUIsZ0JBQWdCSixNQUNoQmUsaUJBQWlCZixNQUFPLEdBQUc7b0JBRWpDLElBQUksQ0FBQ2lDLGdCQUFnQixDQUFDN0I7b0JBRXRCLElBQUksQ0FBQzhCLGlCQUFpQixDQUFDbkI7Z0JBQ3pCLENBQUM7Z0JBRUQsSUFBSSxDQUFDb0IsY0FBYztnQkFFbkIsSUFBSSxDQUFDQyxhQUFhO1lBQ3BCOzs7WUFFQTdELEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU15QixPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkcsZ0JBQWdCSixNQUFNLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ2lDLGdCQUFnQixDQUFDN0I7Z0JBRXRCLElBQUksQ0FBQ2lDLGNBQWM7Z0JBRW5CLElBQUksQ0FBQ0MsYUFBYTtZQUNwQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUksQ0FBQ0QsYUFBYTtnQkFFbEIsSUFBSSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDckQsZUFBZTtnQkFFcEMsSUFBSSxDQUFDc0QsV0FBVyxDQUFDLElBQUksQ0FBQzlELGdCQUFnQjtnQkFFdEMsSUFBSSxDQUFDK0QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDcEYscUJBQXFCO2dCQUVoRCxJQUFJLENBQUNxRixpQkFBaUIsQ0FBQyxJQUFJLENBQUMxRSxzQkFBc0I7Z0JBRWxELElBQUksQ0FBQzJFLGlCQUFpQixDQUFDLElBQUksQ0FBQ25FLHNCQUFzQjtnQkFFbEQsSUFBSSxDQUFDb0UsVUFBVTtZQUNsQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNYLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQzVELGVBQWU7Z0JBRXJDLElBQUksQ0FBQzZELFlBQVksQ0FBQyxJQUFJLENBQUNyRSxnQkFBZ0I7Z0JBRXZDLElBQUksQ0FBQ3NFLGlCQUFpQixDQUFDLElBQUksQ0FBQzNGLHFCQUFxQjtnQkFFakQsSUFBSSxDQUFDNEYsa0JBQWtCLENBQUMsSUFBSSxDQUFDakYsc0JBQXNCO2dCQUVuRCxJQUFJLENBQUNrRixrQkFBa0IsQ0FBQyxJQUFJLENBQUMxRSxzQkFBc0I7Z0JBRW5ELElBQUksQ0FBQzJFLFdBQVc7WUFDbkI7OztZQUVDQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCMUIsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQzJCLElBQUksQ0FBQyxJQUFJLEdBQzlCN0IsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQzZCLElBQUksQ0FBQyxJQUFJO2dCQUV4QyxPQUFRLHFDQUNIRjtvQkFDSHpCLFFBQUFBO29CQUNBRixVQUFBQTs7WUFFSjs7O1lBRUE4QixLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDYixJQUFJLENBQUNDLGFBQWE7WUFDbkI7OztXQTlPS3JHO0VBQXNCc0csY0FBUztBQWdQbkMsZ0JBaFBJdEcsZUFnUEd1RyxhQUFZQSxhQUFTO0FBRTVCLGdCQWxQSXZHLGVBa1BHd0csY0FBYUEsY0FBVTtBQUU5QixnQkFwUEl4RyxlQW9QR3lHLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsZ0JBeFBJekcsZUF3UEcwRyxxQkFBb0I7SUFDM0JDLFdBQVc7QUFDWjtBQUdEQyxPQUFPQyxNQUFNLENBQUNQLGNBQVMsQ0FBQ1EsU0FBUyxFQUFFQywyQkFBVTtJQUU3QyxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEgifQ==