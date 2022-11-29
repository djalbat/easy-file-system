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
            var created = _this.getCreated(), explorer = _this.getExplorer(), dragEntryItem = _assertThisInitialized(_this); ///
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
            var created = _this.getCreated();
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
            key: "getCreated",
            value: function getCreated() {
                var state = this.getState(), created = state.created;
                return created;
            }
        },
        {
            key: "setCreated",
            value: function setCreated(created) {
                this.setState({
                    created: created
                });
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
            key: "setInitialState",
            value: function setInitialState() {
                var created = false;
                this.setState({
                    created: created
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return DragEntryItem;
}(_entry.default);
_defineProperty(DragEntryItem, "NameInput", _name.default);
_defineProperty(DragEntryItem, "NameButton", _name1.default);
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuLi8uLi9pbnB1dC9uYW1lXCI7XG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL25hbWVcIjtcblxuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uL2VudHJ5VHlwZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocywgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgc3ZnQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7IC8vL1xuXG4gICAgZXhwbG9yZXIuc2VsZWN0RHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbmFtZUlucHV0Q2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5nZXRDcmVhdGVkKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXM7IC8vL1xuXG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgZXhwbG9yZXIuY3JlYXRlRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVDaGFuZ2VkID0gdGhpcy5oYXNOYW1lQ2hhbmdlZCgpO1xuXG4gICAgaWYgKCFuYW1lQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLnJlbmFtZURyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgKCkgPT4ge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5hbWVJbnB1dENhbmNlbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuZ2V0Q3JlYXRlZCgpO1xuXG4gICAgY3JlYXRlZCA/XG4gICAgICB0aGlzLnJlbW92ZSgpIDpcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyID0gKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0Q3JlYXRlZCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGNyZWF0ZWQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGNyZWF0ZWQ7XG4gIH1cblxuICBzZXRDcmVhdGVkKGNyZWF0ZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNyZWF0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIGdldElucHV0TmFtZSgpIHtcbiAgICBjb25zdCBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgaW5wdXROYW1lID0gbmFtZUlucHV0TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGlucHV0TmFtZTtcbiAgfVxuXG4gIGdldElucHV0UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgaW5wdXROYW1lID0gdGhpcy5nZXRJbnB1dE5hbWUoKSxcbiAgICAgICAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIGlucHV0UGF0aCA9IChwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jYXRlbmF0ZVBhdGhzKHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIGlucHV0TmFtZSk7XG5cbiAgICByZXR1cm4gaW5wdXRQYXRoO1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IHRoaXMuZ2V0TmFtZUlucHV0TmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5nZXRFbnRyeURpcmVjdG9yeSgpO1xuXG4gICAgc291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWVJbnB1dE5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgY29sbGFwc2VkLFxuICAgICAgZW50cnlEaXJlY3RvcnksXG4gICAgICBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICB0YXJnZXRFbnRyeVBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBhdGhNYXA7XG4gIH1cblxuICBnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGxldCBwYXRoTWFwcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cbiAgICBwYXRoTWFwcy5yZXZlcnNlKCk7XG5cbiAgICByZXR1cm4gcGF0aE1hcHM7XG4gIH1cblxuICBoYXNOYW1lQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgaW5wdXROYW1lID0gdGhpcy5nZXRJbnB1dE5hbWUoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IChpbnB1dE5hbWUgIT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVDaGFuZ2VkO1xuICB9XG5cbiAgZ2V0RW50cnlEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlID0gKHR5cGUgPT09IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0eXBlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGlzRWRpdGVkKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dERpc3BsYXllZCA9IHRoaXMuaXNOYW1lSW5wdXREaXNwbGF5ZWQoKSxcbiAgICAgICAgICBlZGl0ZWQgPSBuYW1lSW5wdXREaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBlZGl0ZWQ7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICB0aGlzLmhpZGVOYW1lQnV0dG9uKCk7XG4gICAgdGhpcy5zaG93TmFtZUlucHV0KCk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVJbnB1dE5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0TmFtZUlucHV0TmFtZShuYW1lSW5wdXROYW1lKTtcblxuICAgIHRoaXMuc2hvd05hbWVCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TVkdCdXR0b25DbGljayh0aGlzLnN2Z0J1dHRvbkNsaWNrSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZUlucHV0Q2hhbmdlKHRoaXMubmFtZUlucHV0Q2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uTmFtZUlucHV0Q2FuY2VsKHRoaXMubmFtZUlucHV0Q2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmU1ZHQnV0dG9uQ2xpY2sodGhpcy5zdmdCdXR0b25DbGlja0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZOYW1lSW5wdXRDaGFuZ2UodGhpcy5uYW1lSW5wdXRDaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTmFtZUlucHV0Q2FuY2VsKHRoaXMubmFtZUlucHV0Q2FuY2VsSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBjcmVhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNyZWF0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXHR9XG5cbiAgc3RhdGljIE5hbWVJbnB1dCA9IE5hbWVJbnB1dDtcblxuICBzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gIC5zZWxlY3RlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkRyYWdFbnRyeUl0ZW0iLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbSIsInNlbGVjdERyYWdFbnRyeUl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJuYW1lSW5wdXRDaGFuZ2VIYW5kbGVyIiwiY3JlYXRlZCIsImdldENyZWF0ZWQiLCJjcmVhdGVEcmFnRW50cnlJdGVtIiwiY2FuY2VsIiwibmFtZUNoYW5nZWQiLCJoYXNOYW1lQ2hhbmdlZCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lSW5wdXRDYW5jZWxIYW5kbGVyIiwicmVtb3ZlIiwic3RhcnREcmFnSGFuZGxlciIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJhZGRNYXJrZXIiLCJzdG9wRHJhZ0hhbmRsZXIiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwic3RhdGUiLCJnZXRTdGF0ZSIsInNldENyZWF0ZWQiLCJzZXRTdGF0ZSIsImdldElucHV0TmFtZSIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwiaW5wdXROYW1lIiwiZ2V0SW5wdXRQYXRoIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImlucHV0UGF0aCIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJnZXRFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwidHlwZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVHlwZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiaXNFZGl0ZWQiLCJuYW1lSW5wdXREaXNwbGF5ZWQiLCJpc05hbWVJbnB1dERpc3BsYXllZCIsImVkaXRlZCIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJoaWRlTmFtZUJ1dHRvbiIsInNob3dOYW1lSW5wdXQiLCJzZXROYW1lSW5wdXROYW1lIiwic2hvd05hbWVCdXR0b24iLCJoaWRlTmFtZUlucHV0IiwiZGlkTW91bnQiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJvblNWR0J1dHRvbkNsaWNrIiwib25OYW1lSW5wdXRDaGFuZ2UiLCJvbk5hbWVJbnB1dENhbmNlbCIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0b3BEcmFnIiwib2ZmU3RhcnREcmFnIiwib2ZmU1ZHQnV0dG9uQ2xpY2siLCJvZmZOYW1lSW5wdXRDaGFuZ2UiLCJvZmZOYW1lSW5wdXRDYW5jZWwiLCJkaXNhYmxlRHJhZyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJzZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsIk5hbWVJbnB1dCIsIk5hbWVCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlTQTs7O2VBQUE7OztrRUEvUnNCOytCQUVLO3lCQUNHOzBEQUVSO3lEQUNBOzBEQUNDOzBCQUV3Qjt1QkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQVFBLG1CQUF3REMsd0JBQWEsQ0FBckVELGtCQUFrQkUsb0NBQXNDRCx3QkFBYSxD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