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
            var oldPath = _this.getOldPath(), newPath = _this.getNewPath(), sourceEntryPath = oldPath, targetEntryPath = newPath, pathMap = _this.getPathMap(sourceEntryPath, targetEntryPath), explorer = _this.getExplorer();
            explorer.callPathChangeHandlersAsync(pathMap, function(success) {
                success ? _this.update() : _this.cancel();
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
            key: "getName",
            value: function getName() {
                var nameButtonName = this.getNameButtonName(), name = nameButtonName; ///
                return name;
            }
        },
        {
            key: "getOldName",
            value: function getOldName() {
                var nameButtonName = this.getNameButtonName(), oldName = nameButtonName; ///
                return oldName;
            }
        },
        {
            key: "getNewName",
            value: function getNewName() {
                var nameInputName = this.getNameInputName(), oldName = nameInputName; ///
                return oldName;
            }
        },
        {
            key: "getOldPath",
            value: function getOldPath() {
                var path = this.getPath(), oldName = this.getOldName(), pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path), oldPath = pathWithoutBottommostName === null ? oldName : concatenatePaths(pathWithoutBottommostName, oldName);
                return oldPath;
            }
        },
        {
            key: "getNewPath",
            value: function getNewPath() {
                var path = this.getPath(), newName = this.getNewName(), pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path), newPath = pathWithoutBottommostName === null ? newName : concatenatePaths(pathWithoutBottommostName, newName);
                return newPath;
            }
        },
        {
            key: "getPathMap",
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var name = this.getName(), collapsed = this.isCollapsed(), entryDirectory = this.isEntryDirectory();
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name); ///
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, name); ///
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
                var newName = this.getOldName(), oldName = this.getNewName(), nameChanged = newName !== oldName;
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
                var nameButtonName = this.getNameButtonName(), nameInputName = nameButtonName; ///
                this.setNameInputName(nameInputName);
                this.showNameButton();
                this.hideNameInput();
            }
        },
        {
            key: "update",
            value: function update() {
                var nameInputName = this.getNameInputName(), nameButtonName = nameInputName; ///
                this.setNameButtonName(nameButtonName);
                this.showNameButton();
                this.hideNameInput();
                var parentElement = this.getParentElement(), entriesList = parentElement, entryItem = this; ///
                entriesList.removeEntryItem(entryItem);
                entriesList.addEntryItem(entryItem);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuLi8uLi9pbnB1dC9uYW1lXCI7XG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL25hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzLCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBzdmdCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBleHBsb3Jlci5zZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKTtcblxuICAgIGlmICghbmFtZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRQYXRoID0gdGhpcy5nZXRPbGRQYXRoKCksXG4gICAgICAgICAgbmV3UGF0aCA9IHRoaXMuZ2V0TmV3UGF0aCgpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IG9sZFBhdGgsICAvLy9cbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSBuZXdQYXRoLCAgLy8vXG4gICAgICAgICAgcGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCk7XG5cbiAgICBleHBsb3Jlci5jYWxsUGF0aENoYW5nZUhhbmRsZXJzQXN5bmMocGF0aE1hcCwgKHN1Y2Nlc3MpID0+IHtcbiAgICAgIHN1Y2Nlc3MgP1xuICAgICAgICB0aGlzLnVwZGF0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmFtZUNhbmNlbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIgPSAoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IG5hbWVCdXR0b25OYW1lID0gdGhpcy5nZXROYW1lQnV0dG9uTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lQnV0dG9uTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRPbGROYW1lKCkge1xuICAgIGNvbnN0IG5hbWVCdXR0b25OYW1lID0gdGhpcy5nZXROYW1lQnV0dG9uTmFtZSgpLFxuICAgICAgICAgIG9sZE5hbWUgPSBuYW1lQnV0dG9uTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIG9sZE5hbWU7XG4gIH1cblxuICBnZXROZXdOYW1lKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWVJbnB1dE5hbWUoKSxcbiAgICAgICAgICBvbGROYW1lID0gbmFtZUlucHV0TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIG9sZE5hbWU7XG4gIH1cblxuICBnZXRPbGRQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBvbGROYW1lID0gdGhpcy5nZXRPbGROYW1lKCksXG4gICAgICAgICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICBvbGRQYXRoID0gKHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBvbGROYW1lIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNhdGVuYXRlUGF0aHMocGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgb2xkTmFtZSk7XG5cbiAgICByZXR1cm4gb2xkUGF0aDtcbiAgfVxuXG4gIGdldE5ld1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIG5ld05hbWUgPSB0aGlzLmdldE5ld05hbWUoKSxcbiAgICAgICAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIG5ld1BhdGggPSAocGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIG5ld05hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2F0ZW5hdGVQYXRocyhwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lLCBuZXdOYW1lKTtcblxuICAgIHJldHVybiBuZXdQYXRoO1xuICB9XG5cbiAgZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSB0aGlzLmlzRW50cnlEaXJlY3RvcnkoKTtcblxuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG4gICAgdGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuICAgIGNvbnN0IHBhdGhNYXAgPSB7XG4gICAgICBjb2xsYXBzZWQsXG4gICAgICBlbnRyeURpcmVjdG9yeSxcbiAgICAgIHNvdXJjZUVudHJ5UGF0aCxcbiAgICAgIHRhcmdldEVudHJ5UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF0aE1hcDtcbiAgfVxuXG4gIGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgbGV0IHBhdGhNYXBzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuICAgIHBhdGhNYXBzLnJldmVyc2UoKTtcblxuICAgIHJldHVybiBwYXRoTWFwcztcbiAgfVxuXG4gIGhhc05hbWVDaGFuZ2VkKCkge1xuICAgIGNvbnN0IG5ld05hbWUgPSB0aGlzLmdldE9sZE5hbWUoKSxcbiAgICAgICAgICBvbGROYW1lID0gdGhpcy5nZXROZXdOYW1lKCksXG4gICAgICAgICAgbmFtZUNoYW5nZWQgPSAobmV3TmFtZSAhPT0gb2xkTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZUNoYW5nZWQ7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBpc1NlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5oYXNDbGFzcyhcInNlbGVjdGVkXCIpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuaGlkZU5hbWVCdXR0b24oKTtcbiAgICB0aGlzLnNob3dOYW1lSW5wdXQoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBjb25zdCBuYW1lQnV0dG9uTmFtZSA9IHRoaXMuZ2V0TmFtZUJ1dHRvbk5hbWUoKSxcbiAgICAgICAgICBuYW1lSW5wdXROYW1lID0gbmFtZUJ1dHRvbk5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lSW5wdXROYW1lKG5hbWVJbnB1dE5hbWUpO1xuXG4gICAgdGhpcy5zaG93TmFtZUJ1dHRvbigpO1xuICAgIHRoaXMuaGlkZU5hbWVJbnB1dCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWVJbnB1dE5hbWUoKSxcbiAgICAgICAgICBuYW1lQnV0dG9uTmFtZSA9IG5hbWVJbnB1dE5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXROYW1lQnV0dG9uTmFtZShuYW1lQnV0dG9uTmFtZSk7XG5cbiAgICB0aGlzLnNob3dOYW1lQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5nZXRQYXJlbnRFbGVtZW50KCksXG4gICAgICAgICAgZW50cmllc0xpc3QgPSBwYXJlbnRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBlbnRyaWVzTGlzdC5yZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKTtcblxuICAgIGVudHJpZXNMaXN0LmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG5cblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWxlY3QgPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0ID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgc2VsZWN0LFxuICAgICAgZGVzZWxlY3RcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuICBzdGF0aWMgTmFtZUlucHV0ID0gTmFtZUlucHV0O1xuXG4gIHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwiRHJhZ0VudHJ5SXRlbSIsInN2Z0J1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwic2VsZWN0RHJhZ0VudHJ5SXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsIm5hbWVDaGFuZ2VIYW5kbGVyIiwibmFtZUNoYW5nZWQiLCJoYXNOYW1lQ2hhbmdlZCIsImNhbmNlbCIsIm9sZFBhdGgiLCJnZXRPbGRQYXRoIiwibmV3UGF0aCIsImdldE5ld1BhdGgiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcCIsImNhbGxQYXRoQ2hhbmdlSGFuZGxlcnNBc3luYyIsInN1Y2Nlc3MiLCJ1cGRhdGUiLCJuYW1lQ2FuY2VsSGFuZGxlciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImdldE5hbWUiLCJuYW1lQnV0dG9uTmFtZSIsImdldE5hbWVCdXR0b25OYW1lIiwibmFtZSIsImdldE9sZE5hbWUiLCJvbGROYW1lIiwiZ2V0TmV3TmFtZSIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm5ld05hbWUiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiaXNFbnRyeURpcmVjdG9yeSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImdsb2JhbFRoaXMiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJoaWRlTmFtZUJ1dHRvbiIsInNob3dOYW1lSW5wdXQiLCJzZXROYW1lSW5wdXROYW1lIiwic2hvd05hbWVCdXR0b24iLCJoaWRlTmFtZUlucHV0Iiwic2V0TmFtZUJ1dHRvbk5hbWUiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImVudHJpZXNMaXN0IiwiZW50cnlJdGVtIiwicmVtb3ZlRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiZGlkTW91bnQiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc1FB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