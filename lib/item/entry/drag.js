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
var _necessary = require("necessary");
var _entry = /*#__PURE__*/ _interopRequireDefault(require("../../item/entry"));
var _name = /*#__PURE__*/ _interopRequireDefault(require("../../input/name"));
var _name1 = /*#__PURE__*/ _interopRequireDefault(require("../../button/name"));
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
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
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
            var created = _this.isCreated(), explorer = _this.getExplorer(), dragEntryItem = _assertThisInitialized(_this); ///
            if (created) {
                explorer.createDragEntryItem(dragEntryItem, function() {
                    _this.cancel();
                });
                return;
            }
            var nameChanged = _this.hasNameChanged();
            if (!nameChanged) {
                _this.cancel();
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
            key: "getInputName",
            value: function getInputName() {
                var nameInputName = this.getNameInputName(), inputName = nameInputName; ///
                return inputName;
            }
        },
        {
            key: "getInputPath",
            value: function getInputPath() {
                var path = this.getPath(), inputName = this.getInputName(), pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path), inputPath = pathWithoutBottommostName === null ? inputName : concatenatePaths(pathWithoutBottommostName, inputName);
                return inputPath;
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
                var name = this.getName(), inputName = this.getInputName(), nameChanged = inputName !== name;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuLi8uLi9pbnB1dC9uYW1lXCI7XG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL25hbWVcIjtcblxuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocywgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgc3ZnQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7IC8vL1xuXG4gICAgZXhwbG9yZXIuc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbmFtZUlucHV0Q2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBleHBsb3Jlci5jcmVhdGVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZUNoYW5nZWQgPSB0aGlzLmhhc05hbWVDaGFuZ2VkKCk7XG5cbiAgICBpZiAoIW5hbWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVuYW1lRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZUlucHV0Q2FuY2VsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5pc0NyZWF0ZWQoKTtcblxuICAgIGNyZWF0ZWQgP1xuICAgICAgdGhpcy5yZW1vdmUoKSA6XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGlzQ3JlYXRlZCgpIHtcbiAgICBjb25zdCB7IGNyZWF0ZWQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBjcmVhdGVkO1xuICB9XG5cbiAgZ2V0SW5wdXROYW1lKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWVJbnB1dE5hbWUoKSxcbiAgICAgICAgICBpbnB1dE5hbWUgPSBuYW1lSW5wdXROYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gaW5wdXROYW1lO1xuICB9XG5cbiAgZ2V0SW5wdXRQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBpbnB1dE5hbWUgPSB0aGlzLmdldElucHV0TmFtZSgpLFxuICAgICAgICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgaW5wdXRQYXRoID0gKHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNhdGVuYXRlUGF0aHMocGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgaW5wdXROYW1lKTtcblxuICAgIHJldHVybiBpbnB1dFBhdGg7XG4gIH1cblxuICBnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgICAgICBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSB0aGlzLmdldEVudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZUlucHV0TmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGhhc05hbWVDaGFuZ2VkKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBpbnB1dE5hbWUgPSB0aGlzLmdldElucHV0TmFtZSgpLFxuICAgICAgICAgIG5hbWVDaGFuZ2VkID0gKGlucHV0TmFtZSAhPT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZUNoYW5nZWQ7XG4gIH1cblxuICBnZXRFbnRyeURpcmVjdG9yeSgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGUgPSAodHlwZSA9PT0gRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHR5cGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgaXNFZGl0ZWQoKSB7XG4gICAgY29uc3QgbmFtZUlucHV0RGlzcGxheWVkID0gdGhpcy5pc05hbWVJbnB1dERpc3BsYXllZCgpLFxuICAgICAgICAgIGVkaXRlZCA9IG5hbWVJbnB1dERpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVkaXRlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuaGlkZU5hbWVCdXR0b24oKTtcbiAgICB0aGlzLnNob3dOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lSW5wdXROYW1lKG5hbWVJbnB1dE5hbWUpO1xuXG4gICAgdGhpcy5zaG93TmFtZUJ1dHRvbigpO1xuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vblNWR0J1dHRvbkNsaWNrKHRoaXMuc3ZnQnV0dG9uQ2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lSW5wdXRDaGFuZ2UodGhpcy5uYW1lSW5wdXRDaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25OYW1lSW5wdXRDYW5jZWwodGhpcy5uYW1lSW5wdXRDYW5jZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTVkdCdXR0b25DbGljayh0aGlzLnN2Z0J1dHRvbkNsaWNrSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZk5hbWVJbnB1dENoYW5nZSh0aGlzLm5hbWVJbnB1dENoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lSW5wdXRDYW5jZWwodGhpcy5uYW1lSW5wdXRDYW5jZWxIYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3QgPSB0aGlzLmRlc2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBzZWxlY3QsXG4gICAgICBkZXNlbGVjdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG4gIHN0YXRpYyBOYW1lSW5wdXQgPSBOYW1lSW5wdXQ7XG5cbiAgc3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNyZWF0ZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJEcmFnRW50cnlJdGVtIiwic3ZnQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwibmFtZUlucHV0Q2hhbmdlSGFuZGxlciIsImNyZWF0ZWQiLCJpc0NyZWF0ZWQiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY2FuY2VsIiwibmFtZUNoYW5nZWQiLCJoYXNOYW1lQ2hhbmdlZCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lSW5wdXRDYW5jZWxIYW5kbGVyIiwicmVtb3ZlIiwic3RhcnREcmFnSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0hhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwicHJvcGVydGllcyIsImdldElucHV0TmFtZSIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwiaW5wdXROYW1lIiwiZ2V0SW5wdXRQYXRoIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImlucHV0UGF0aCIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJnZXRFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiaXNFZGl0ZWQiLCJuYW1lSW5wdXREaXNwbGF5ZWQiLCJpc05hbWVJbnB1dERpc3BsYXllZCIsImVkaXRlZCIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJoaWRlTmFtZUJ1dHRvbiIsInNob3dOYW1lSW5wdXQiLCJzZXROYW1lSW5wdXROYW1lIiwic2hvd05hbWVCdXR0b24iLCJoaWRlTmFtZUlucHV0IiwiZGlkTW91bnQiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJvblNWR0J1dHRvbkNsaWNrIiwib25OYW1lSW5wdXRDaGFuZ2UiLCJvbk5hbWVJbnB1dENhbmNlbCIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0b3BEcmFnIiwib2ZmU3RhcnREcmFnIiwib2ZmU1ZHQnV0dG9uQ2xpY2siLCJvZmZOYW1lSW5wdXRDaGFuZ2UiLCJvZmZOYW1lSW5wdXRDYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVJbnB1dCIsIk5hbWVCdXR0b24iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb1JBOzs7ZUFBQTs7O2tFQWxSc0I7K0JBRUs7eUJBQ0c7MERBRVI7eURBQ0E7MERBQ0M7MEJBRXdCO3VCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBUUEsbUJBQXdEQyx3QkFBYSxDQUFyRUQsa0JBQWtCRSxvQ0FBc0NELHdCQUFhLENBQW5EQztBQUUxQixJQUFBLEFBQU1DLDhCQWtRSCxBQWxRSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkMsK0NBQUFBLHlCQUF3QixTQUFDQyxPQUFPQyxTQUFZO1lBQzFDLElBQU1DLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsK0NBQXNCLEdBQUc7WUFFL0JGLFNBQVNHLG1CQUFtQixDQUFDRDtZQUU3QkosTUFBTU0sZUFBZTtRQUN2QjtRQUVBQywrQ0FBQUEsMEJB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