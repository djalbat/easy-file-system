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
        _defineProperty(_assertThisInitialized(_this), "nameChangeHandler", function() {
            var nameChanged = _this.hasNameChanged();
            if (!nameChanged) {
                _this.cancel();
                return;
            }
            var explorer = _this.getExplorer(), dragEntryItem = _assertThisInitialized(_this); ///
            explorer.renameDragEntryItem(dragEntryItem, function() {
                _this.cancel();
            });
        });
        _defineProperty(_assertThisInitialized(_this), "nameCancelHandler", function() {
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
                var name = this.getName(), collapsed = this.isCollapsed(), nameInputName = this.getNameInputName(), entryDirectory = this.isEntryDirectory();
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
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
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
                this.onStartDrag(this.startDragHandler);
                this.onStopDrag(this.stopDragHandler);
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offStartDrag(this.startDragHandler);
                this.offStopDrag(this.stopDragHandler);
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
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuLi8uLi9pbnB1dC9uYW1lXCI7XG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL25hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzLCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBzdmdCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBleHBsb3Jlci5zZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKTtcblxuICAgIGlmICghbmFtZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW5hbWVEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuYW1lQ2FuY2VsSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGdldElucHV0TmFtZSgpIHtcbiAgICBjb25zdCBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgaW5wdXROYW1lID0gbmFtZUlucHV0TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGlucHV0TmFtZTtcbiAgfVxuXG4gIGdldElucHV0UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgaW5wdXROYW1lID0gdGhpcy5nZXRJbnB1dE5hbWUoKSxcbiAgICAgICAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIGlucHV0UGF0aCA9IChwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jYXRlbmF0ZVBhdGhzKHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIGlucHV0TmFtZSk7XG5cbiAgICByZXR1cm4gaW5wdXRQYXRoO1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IHRoaXMuZ2V0TmFtZUlucHV0TmFtZSgpLFxuICAgICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gdGhpcy5pc0VudHJ5RGlyZWN0b3J5KCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZUlucHV0TmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGhhc05hbWVDaGFuZ2VkKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBpbnB1dE5hbWUgPSB0aGlzLmdldElucHV0TmFtZSgpLFxuICAgICAgICAgIG5hbWVDaGFuZ2VkID0gKGlucHV0TmFtZSAhPT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZUNoYW5nZWQ7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuaGlkZU5hbWVCdXR0b24oKTtcbiAgICB0aGlzLnNob3dOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZUlucHV0TmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lSW5wdXROYW1lKG5hbWVJbnB1dE5hbWUpO1xuXG4gICAgdGhpcy5zaG93TmFtZUJ1dHRvbigpO1xuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG5cblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZUlucHV0ID0gTmFtZUlucHV0O1xuXG4gIHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwiRHJhZ0VudHJ5SXRlbSIsInN2Z0J1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwic2VsZWN0RHJhZ0VudHJ5SXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsIm5hbWVDaGFuZ2VIYW5kbGVyIiwibmFtZUNoYW5nZWQiLCJoYXNOYW1lQ2hhbmdlZCIsImNhbmNlbCIsInJlbmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lQ2FuY2VsSGFuZGxlciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImdldElucHV0TmFtZSIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwiaW5wdXROYW1lIiwiZ2V0SW5wdXRQYXRoIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImlucHV0UGF0aCIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsImNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwiZW50cnlEaXJlY3RvcnkiLCJpc0VudHJ5RGlyZWN0b3J5IiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImdsb2JhbFRoaXMiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJoaWRlTmFtZUJ1dHRvbiIsInNob3dOYW1lSW5wdXQiLCJzZXROYW1lSW5wdXROYW1lIiwic2hvd05hbWVCdXR0b24iLCJoaWRlTmFtZUlucHV0IiwiZGlkTW91bnQiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdU5BOzs7ZUFBQTs7O2tFQXJOc0I7K0JBRUs7eUJBQ0c7MERBRVI7eURBQ0E7MERBQ0M7dUJBRXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBUUEsbUJBQXdEQyx3QkFBYSxDQUFyRUQsa0JBQWtCRSxvQ0FBc0NELHdCQUFhLENBQW5EQztBQUUxQixJQUFBLEFBQU1DLDhCQXNNSCxBQXRNSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkMsK0NBQUFBLHlCQUF3QixTQUFDQyxPQUFPQyxTQUFZO1lBQzFDLElBQU1DLFdBQVcsTUFBS0MsV0FBVyxJQUMzQkMsK0NBQXNCLEdBQUc7WUFFL0JGLFNBQVNHLG1CQUFtQixDQUFDRDtZQUU3QkosTUFBTU0sZUFBZTtRQUN2QjtRQUVBQywrQ0FBQUEscUJBQW9CLFdBQU07WUFDeEIsSUFBTUMsY0FBYyxNQUFLQyxjQUFjO1lBRXZDLElBQUksQ0FBQ0QsYUFBYTtnQkFDaEIsTUFBS0UsTUFBTTtnQkFFWDtZQUNGLENBQUM7WUFFRCxJQUFNUixXQUFXLE1BQUtDLFdBQVcsSUFDM0JDLCtDQUFz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