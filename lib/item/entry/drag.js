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
            var oldPath = _this.getOldPath(), newPath = _this.getNewPath(), explorer = _this.getExplorer();
            explorer.callPathChangeHandlersAsync(oldPath, newPath, function(success) {
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
                var name = this.getName();
                sourceEntryPath = (0, _pathMap.adjustSourceEntryPath)(sourceEntryPath, name); ///
                targetEntryPath = (0, _pathMap.adjustTargetEntryPath)(targetEntryPath, name); ///
                var pathMap = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuLi8uLi9pbnB1dC9uYW1lXCI7XG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL25hbWVcIjtcblxuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzLCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBzdmdCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpczsgLy8vXG5cbiAgICBleHBsb3Jlci5zZWxlY3REcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lQ2hhbmdlZCA9IHRoaXMuaGFzTmFtZUNoYW5nZWQoKTtcblxuICAgIGlmICghbmFtZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRQYXRoID0gdGhpcy5nZXRPbGRQYXRoKCksXG4gICAgICAgICAgbmV3UGF0aCA9IHRoaXMuZ2V0TmV3UGF0aCgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG4gICAgZXhwbG9yZXIuY2FsbFBhdGhDaGFuZ2VIYW5kbGVyc0FzeW5jKG9sZFBhdGgsIG5ld1BhdGgsIChzdWNjZXNzKSA9PiB7XG4gICAgICBzdWNjZXNzID9cbiAgICAgICAgdGhpcy51cGRhdGUoKSA6XG4gICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5hbWVDYW5jZWxIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyID0gKGRyb3BFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgaWYgKGRyb3BFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBuYW1lQnV0dG9uTmFtZSA9IHRoaXMuZ2V0TmFtZUJ1dHRvbk5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUJ1dHRvbk5hbWU7ICAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0T2xkTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lQnV0dG9uTmFtZSA9IHRoaXMuZ2V0TmFtZUJ1dHRvbk5hbWUoKSxcbiAgICAgICAgICBvbGROYW1lID0gbmFtZUJ1dHRvbk5hbWU7ICAvLy9cblxuICAgIHJldHVybiBvbGROYW1lO1xuICB9XG5cbiAgZ2V0TmV3TmFtZSgpIHtcbiAgICBjb25zdCBuYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lSW5wdXROYW1lKCksXG4gICAgICAgICAgb2xkTmFtZSA9IG5hbWVJbnB1dE5hbWU7ICAvLy9cblxuICAgIHJldHVybiBvbGROYW1lO1xuICB9XG5cbiAgZ2V0T2xkUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgb2xkTmFtZSA9IHRoaXMuZ2V0T2xkTmFtZSgpLFxuICAgICAgICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgICAgb2xkUGF0aCA9IChwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgb2xkTmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jYXRlbmF0ZVBhdGhzKHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsIG9sZE5hbWUpO1xuXG4gICAgcmV0dXJuIG9sZFBhdGg7XG4gIH1cblxuICBnZXROZXdQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBuZXdOYW1lID0gdGhpcy5nZXROZXdOYW1lKCksXG4gICAgICAgICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICBuZXdQYXRoID0gKHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBuZXdOYW1lIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNhdGVuYXRlUGF0aHMocGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgbmV3TmFtZSk7XG5cbiAgICByZXR1cm4gbmV3UGF0aDtcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgc291cmNlRW50cnlQYXRoLFxuICAgICAgdGFyZ2V0RW50cnlQYXRoXG4gICAgfTtcblxuICAgIHJldHVybiBwYXRoTWFwO1xuICB9XG5cbiAgZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBsZXQgcGF0aE1hcHMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG4gICAgcGF0aE1hcHMucmV2ZXJzZSgpO1xuXG4gICAgcmV0dXJuIHBhdGhNYXBzO1xuICB9XG5cbiAgaGFzTmFtZUNoYW5nZWQoKSB7XG4gICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuZ2V0T2xkTmFtZSgpLFxuICAgICAgICAgIG9sZE5hbWUgPSB0aGlzLmdldE5ld05hbWUoKSxcbiAgICAgICAgICBuYW1lQ2hhbmdlZCA9IChuZXdOYW1lICE9PSBvbGROYW1lKTtcblxuICAgIHJldHVybiBuYW1lQ2hhbmdlZDtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmhhc0NsYXNzKFwic2VsZWN0ZWRcIik7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5oaWRlTmFtZUJ1dHRvbigpO1xuICAgIHRoaXMuc2hvd05hbWVJbnB1dCgpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGNvbnN0IG5hbWVCdXR0b25OYW1lID0gdGhpcy5nZXROYW1lQnV0dG9uTmFtZSgpLFxuICAgICAgICAgIG5hbWVJbnB1dE5hbWUgPSBuYW1lQnV0dG9uTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldE5hbWVJbnB1dE5hbWUobmFtZUlucHV0TmFtZSk7XG5cbiAgICB0aGlzLnNob3dOYW1lQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTmFtZUlucHV0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgbmFtZUlucHV0TmFtZSA9IHRoaXMuZ2V0TmFtZUlucHV0TmFtZSgpLFxuICAgICAgICAgIG5hbWVCdXR0b25OYW1lID0gbmFtZUlucHV0TmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldE5hbWVCdXR0b25OYW1lKG5hbWVCdXR0b25OYW1lKTtcblxuICAgIHRoaXMuc2hvd05hbWVCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcblxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBlbnRyaWVzTGlzdCA9IHBhcmVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbnRyeUl0ZW0gPSB0aGlzOyAvLy9cblxuICAgIGVudHJpZXNMaXN0LnJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgZW50cmllc0xpc3QuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcblxuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3QgPSB0aGlzLmRlc2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBzZWxlY3QsXG4gICAgICBkZXNlbGVjdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG4gIHN0YXRpYyBOYW1lSW5wdXQgPSBOYW1lSW5wdXQ7XG5cbiAgc3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJEcmFnRW50cnlJdGVtIiwic3ZnQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJzZWxlY3REcmFnRW50cnlJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwibmFtZUNoYW5nZUhhbmRsZXIiLCJuYW1lQ2hhbmdlZCIsImhhc05hbWVDaGFuZ2VkIiwiY2FuY2VsIiwib2xkUGF0aCIsImdldE9sZFBhdGgiLCJuZXdQYXRoIiwiZ2V0TmV3UGF0aCIsImNhbGxQYXRoQ2hhbmdlSGFuZGxlcnNBc3luYyIsInN1Y2Nlc3MiLCJ1cGRhdGUiLCJuYW1lQ2FuY2VsSGFuZGxlciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImdldE5hbWUiLCJuYW1lQnV0dG9uTmFtZSIsImdldE5hbWVCdXR0b25OYW1lIiwibmFtZSIsImdldE9sZE5hbWUiLCJvbGROYW1lIiwiZ2V0TmV3TmFtZSIsIm5hbWVJbnB1dE5hbWUiLCJnZXROYW1lSW5wdXROYW1lIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm5ld05hbWUiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImdsb2JhbFRoaXMiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsImRlc2VsZWN0IiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QiLCJhZGRDbGFzcyIsImVkaXQiLCJoaWRlTmFtZUJ1dHRvbiIsInNob3dOYW1lSW5wdXQiLCJzZXROYW1lSW5wdXROYW1lIiwic2hvd05hbWVCdXR0b24iLCJoaWRlTmFtZUlucHV0Iiwic2V0TmFtZUJ1dHRvbk5hbWUiLCJwYXJlbnRFbGVtZW50IiwiZ2V0UGFyZW50RWxlbWVudCIsImVudHJpZXNMaXN0IiwiZW50cnlJdGVtIiwicmVtb3ZlRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiZGlkTW91bnQiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsImRpc2FibGVEcmFnIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRW50cnlJdGVtIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK1BBOzs7ZUFBQTs7O2tFQTdQc0I7K0JBRUs7eUJBQ0c7MERBRVI7eURBQ0E7MERBQ0M7dUJBRXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBUUEsbUJBQXdEQyx3QkFBYSxDQUFyRUQsa0JBQWtCRSxvQ0FBc0NELHdCQUFhLENBQW5EQztBQUUxQixJQUFBLEFBQU1DLDhCQThPSCxBQTlPSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkMsK0NBQUFB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