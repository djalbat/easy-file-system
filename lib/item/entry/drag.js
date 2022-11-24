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
var _styles = require("../../styles");
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
        "\n\n	font-size: ",
        ";\n  user-select: none;\n  \n  font-weight: normal;\n  \n  .selected {\n    font-weight: bold;\n  }\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
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
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
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
            key: "edit",
            value: function edit() {
                this.showNameInput();
                this.hideNameButton();
            }
        },
        {
            key: "select",
            value: function select() {
                this.addClass("selected");
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
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject(), _styles.dragEntryItemFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBOYW1lSW5wdXQgZnJvbSBcIi4uLy4uL2lucHV0L25hbWVcIjtcbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbmFtZVwiO1xuXG5pbXBvcnQgeyBkcmFnRW50cnlJdGVtRm9udFNpemUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VFbnRyeVBhdGgsIGFkanVzdFRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcbiAgc3RhcnREcmFnSGFuZGxlciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICBzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cbiAgICBjb25zdCBwYXRoTWFwID0ge1xuICAgICAgc291cmNlRW50cnlQYXRoLFxuICAgICAgdGFyZ2V0RW50cnlQYXRoXG4gICAgfTtcblxuICAgIHJldHVybiBwYXRoTWFwO1xuICB9XG5cbiAgZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICBsZXQgcGF0aE1hcHMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG4gICAgcGF0aE1hcHMucmV2ZXJzZSgpO1xuXG4gICAgcmV0dXJuIHBhdGhNYXBzO1xuICB9XG5cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKTsgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuc2hvd05hbWVJbnB1dCgpO1xuICAgIHRoaXMuaGlkZU5hbWVCdXR0b24oKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmhpZGVOYW1lSW5wdXQoKTtcblxuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlbGVjdCA9IHRoaXMuc2VsZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3QgPSB0aGlzLmRlc2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBzZWxlY3QsXG4gICAgICBkZXNlbGVjdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG4gIHN0YXRpYyBOYW1lSW5wdXQgPSBOYW1lSW5wdXQ7XG5cbiAgc3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuXHRmb250LXNpemU6ICR7ZHJhZ0VudHJ5SXRlbUZvbnRTaXplfTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbiAgLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRyYWdFbnRyeUl0ZW0iLCJzdGFydERyYWdIYW5kbGVyIiwiZWxlbWVudCIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcmFnRW50cnlJdGVtIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm5hbWUiLCJnZXROYW1lIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwiZGVzZWxlY3QiLCJyZW1vdmVDbGFzcyIsImVkaXQiLCJzaG93TmFtZUlucHV0IiwiaGlkZU5hbWVCdXR0b24iLCJzZWxlY3QiLCJhZGRDbGFzcyIsImRpZE1vdW50IiwiaGlkZU5hbWVJbnB1dCIsIm9uU3RhcnREcmFnIiwib25TdG9wRHJhZyIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0YXJ0RHJhZyIsIm9mZlN0b3BEcmFnIiwiZGlzYWJsZURyYWciLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbnRyeUl0ZW0iLCJOYW1lSW5wdXQiLCJOYW1lQnV0dG9uIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIiwiZHJhZ0VudHJ5SXRlbUZvbnRTaXplIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2SUE7OztlQUFBOzs7a0VBM0lzQjsrQkFFSzswREFFTDt5REFDQTswREFDQztzQkFFZTt1QkFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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