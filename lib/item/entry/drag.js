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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcblxuaW1wb3J0IHsgZHJhZ0VudHJ5SXRlbUZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIHN0YXJ0RHJhZ0hhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIgPSAoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpID0+IHtcbiAgICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG5cdFx0c291cmNlRW50cnlQYXRoID0gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG5cdFx0Y29uc3QgcGF0aE1hcCA9IHtcblx0XHRcdHNvdXJjZUVudHJ5UGF0aCxcblx0XHRcdHRhcmdldEVudHJ5UGF0aFxuXHRcdH07XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0bGV0IHBhdGhNYXBzID0gW107XG5cblx0XHR0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKTtcblxuXHRcdHBhdGhNYXBzLnJldmVyc2UoKTtcblxuXHRcdHJldHVybiBwYXRoTWFwcztcblx0fVxuXG5cdHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG5cdFx0cmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cblx0Zm9udC1zaXplOiAke2RyYWdFbnRyeUl0ZW1Gb250U2l6ZX07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJEcmFnRW50cnlJdGVtIiwic3RhcnREcmFnSGFuZGxlciIsImVsZW1lbnQiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImFkZE1hcmtlciIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm5hbWUiLCJnZXROYW1lIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImdldFBhdGhNYXBzIiwicGF0aE1hcHMiLCJyZXRyaWV2ZVBhdGhNYXBzIiwicmV2ZXJzZSIsImdsb2JhbFRoaXMiLCJkaWRNb3VudCIsIm9uU3RhcnREcmFnIiwib25TdG9wRHJhZyIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0YXJ0RHJhZyIsIm9mZlN0b3BEcmFnIiwiZGlzYWJsZURyYWciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVudHJ5SXRlbSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSIsImRyYWdFbnRyeUl0ZW1Gb250U2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXNHYixTQVdFOzs7ZUFYRixRQVdFOzs7a0VBL0dvQixpQkFBaUI7K0JBRVosb0JBQW9COzBEQUV6QixrQkFBa0I7c0JBRUYsY0FBYzt1QkFDUyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsSUFBQSxBQUFNQSxhQUFhLGlCQXlGaEIsQUF6Rkg7Y0FBTUEsYUFBYTs4QkFBYkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhOzs7UUFDakJDLCtDQUFBQSxrQkFBZ0IsRUFBRyxTQUFDQyxPQUFPLEVBQUs7WUFDOUIsSUFBTUMsSUFBSSxHQUFHLE1BQUtDLE9BQU8sRUFBRSxFQUNyQkMsSUFBSSxHQUFHLE1BQUtDLE9BQU8sRUFBRSxFQUNyQkMsUUFBUSxHQUFHLE1BQUtDLFdBQVcsRUFBRSxFQUM3QkMsaUJBQWlCLEdBQUdKLElBQUksRUFDeEJLLG1CQUFtQixHQUFHUCxJQUFJLEFBQUMsRUFBRSxHQUFHO1lBRXRDSSxRQUFRLENBQUNJLFNBQVMsQ0FBQ0QsbUJBQW1CLEVBQUVELGlCQUFpQixDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFBLENBQUE7UUFFREcsK0NBQUFBLGlCQUFlLEVBQUcsU0FBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUVaLE9BQU8sRUFBRWEsSUFBSSxFQUFLO1lBQ3pELElBQUlGLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCRSxJQUFJLEVBQUUsQ0FBQztnQkFFUCxPQUFPO1lBQ1QsQ0FBQztZQUVELElBQU1DLGVBQWUsR0FBRyxNQUFLQyx1QkFBdUIsRUFBRSxFQUNoREMsdUJBQXVCLEdBQUdGLGVBQWUsQ0FBQ1IsV0FBVyxFQUFFLEFBQUM7WUFFOUQsSUFBSU0sT0FBTyxFQUFFO2dCQUNYSSx1QkFBdUIsQ0FBQ0MsWUFBWSxFQUFFLENBQUM7Z0JBRXZDSixJQUFJLEVBQUUsQ0FBQztnQkFFUCxPQUFPO1lBQ1QsQ0FBQztZQUVELElBQU1LLGFBQWEsR0FBR2xCLE9BQU8sQUFBQyxFQUFFLEdBQUc7WUFFbkNnQix1QkFBdUIsQ0FBQ0csaUJBQWlCLENBQUNELGFBQWEsRUFBRUwsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBLENBQUE7OztpQkFoQ0dmLGFBQWE7O1lBa0NqQnNCLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxDQUFDQyxlQUFlLEVBQUVDLGVBQWUsRUFBRTtnQkFDN0MsSUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUFFLEFBQUM7Z0JBRTVCSCxlQUFlLEdBQUdJLElBQUFBLFFBQXFCLHNCQUFBLEVBQUNKLGVBQWUsRUFBRUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNuRUQsZUFBZSxHQUFHSSxJQUFBQSxRQUFxQixzQkFBQSxFQUFDSixlQUFlLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFFbkUsSUFBTUksT0FBTyxHQUFHO29CQUNmTixlQUFlLEVBQWZBLGVBQWU7b0JBQ2ZDLGVBQWUsRUFBZkEsZUFBZTtpQkFDZixBQUFDO2dCQUVGLE9BQU9LLE9BQU8sQ0FBQztZQUNoQixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLENBQUNQLGVBQWUsRUFBRUMsZUFBZSxFQUFFO2dCQUM3QyxJQUFJTyxRQUFRLEdBQUcsRUFBRSxBQUFDO2dCQUVsQixJQUFJLENBQUNDLGdCQUFnQixDQUFDVCxlQUFlLEVBQUVDLGVBQWUsRUFBRU8sUUFBUSxDQUFDLENBQUM7Z0JBRWxFQSxRQUFRLENBQUNFLE9BQU8sRUFBRSxDQUFDO2dCQUVuQixPQUFPRixRQUFRLENBQUM7WUFDakIsQ0FBQzs7O1lBRURkLEdBQXVCLEVBQXZCQSx5QkFBdUI7bUJBQXZCQSxTQUFBQSx1QkFBdUIsR0FBRztnQkFDekIsSUFBTSxBQUFFRCxlQUFlLEdBQUtrQixVQUFVLENBQTlCbEIsZUFBZSxBQUFlLEFBQUM7Z0JBRXZDLE9BQU9BLGVBQWUsQ0FBQztZQUN4QixDQUFDOzs7WUFFRG1CLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ25DLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU3QyxJQUFJLENBQUNvQyxVQUFVLENBQUMsSUFBSSxDQUFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLENBQUMwQixVQUFVLEVBQUUsQ0FBQztZQUNuQixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1gsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRS9DLElBQUksQ0FBQ3dDLFdBQVcsQ0FBQyxJQUFJLENBQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQzhCLFdBQVcsRUFBRSxDQUFDO1lBQ3RCLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWixJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO1lBQ3RCLENBQUM7OztXQWxGSTVDLGFBQWE7Q0F1RmxCLENBdkYyQjZDLE1BQVMsUUFBQSxDQXVGcEM7QUFIQSxnQkFwRks3QyxhQUFhLEVBb0ZYOEMsbUJBQWlCLEVBQUc7SUFDMUJDLFNBQVMsRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFHSEMsTUFBTSxDQUFDQyxNQUFNLENBQUNKLE1BQVMsUUFBQSxDQUFDSyxTQUFTLEVBQUVDLGdCQUFVLFdBQUEsQ0FBQyxDQUFDO0lBRS9DLFFBV0UsR0FYYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNwRCxhQUFhLENBQUMsb0JBRXpCcUQsT0FBcUIsc0JBQUEifQ==