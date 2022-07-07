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
        ";\n  user-select: none;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n\n"
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
        return _super.apply(this, arguments);
    }
    _createClass(DragEntryItem, [
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
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(element) {
                var path = this.getPath(), type = this.getType(), explorer = this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
                explorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(dropElement, aborted, element, done) {
                if (dropElement !== null) {
                    done();
                    return;
                }
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                if (aborted) {
                    markerEntryItemExplorer.removeMarker();
                    done();
                    return;
                }
                var dragEntryItem = dragElement; ///
                markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onStartDrag(this.startDragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offStartDrag(this.startDragHandler, this);
                this.offStopDrag(this.stopDragHandler, this);
                this.disableDrag();
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
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(DragEntryItem)(_templateObject(), _styles.dragEntryItemFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcblxuaW1wb3J0IHsgZHJhZ0VudHJ5SXRlbUZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG5cdGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRjb25zdCBwYXRoTWFwID0ge1xuXHRcdFx0c291cmNlRW50cnlQYXRoLFxuXHRcdFx0dGFyZ2V0RW50cnlQYXRoXG5cdFx0fTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0Z2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRsZXQgcGF0aE1hcHMgPSBbXTtcblxuXHRcdHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG5cdFx0cGF0aE1hcHMucmV2ZXJzZSgpO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0cmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cblx0XHRyZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuXHR9XG5cblx0c3RhcnREcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG5cdHN0b3BEcmFnSGFuZGxlcihkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuXHRcdGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0ZG9uZSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG5cdGZvbnQtc2l6ZTogJHtkcmFnRW50cnlJdGVtRm9udFNpemV9O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbSIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJzdGFydERyYWdIYW5kbGVyIiwiZWxlbWVudCIsInBhdGgiLCJnZXRQYXRoIiwidHlwZSIsImdldFR5cGUiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbGVtZW50IiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkaWRNb3VudCIsIm9uU3RhcnREcmFnIiwib25TdG9wRHJhZyIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0YXJ0RHJhZyIsIm9mZlN0b3BEcmFnIiwiZGlzYWJsZURyYWciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSIsImRyYWdFbnRyeUl0ZW1Gb250U2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O2tFQUVTLGlCQUFpQjsrQkFFWixvQkFBb0I7MERBRXpCLGtCQUFrQjtzQkFFRixjQUFjO3VCQUNTLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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