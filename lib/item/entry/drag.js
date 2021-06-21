"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _entry = _interopRequireDefault(require("../../item/entry"));
var _drag = _interopRequireDefault(require("../../mixins/drag"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  min-height: 2.4rem;\n  user-select: none;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DragEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(DragEntryItem, EntryItem);
    function DragEntryItem() {
        _classCallCheck(this, DragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(DragEntryItem).apply(this, arguments));
    }
    _createClass(DragEntryItem, [
        {
            key: "getPath",
            value: function getPath() {
                var explorer = this.getExplorer(), dragEntryItem = this, dragEntryItemPath = explorer.retrieveDragEntryItemPath(dragEntryItem), path = dragEntryItemPath; ///
                return path;
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(event, element) {
                var path = this.getPath(), type = this.getType(), explorer = this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
                explorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(event, element) {
                var explorer = this.getExplorer(), markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath();
                explorer.removeMarker();
                var path = this.getPath();
                if (path !== markerEntryItemPath) {
                    var type = this.getType(), sourcePath = path, targetPath = markerEntryItemPath, pathMap = {
                        type: type,
                        sourcePath: sourcePath,
                        targetPath: targetPath
                    }, pathMaps = [
                        pathMap
                    ];
                    explorer.moveDragEntryItems(pathMaps);
                }
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
        }
    ]);
    return DragEntryItem;
}(_entry.default);
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _drag.default);
var _default = (0, _easyWithStyle).default(DragEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aCgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gdGhpcywgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1QYXRoID0gZXhwbG9yZXIucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKSxcblx0XHRcdFx0XHRwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7XHQvLy9cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cbiAgc3RhcnREcmFnSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG5cblx0XHRpZiAocGF0aCAhPT0gbWFya2VyRW50cnlJdGVtUGF0aCkge1xuXHRcdFx0Y29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0c291cmNlUGF0aCA9IHBhdGgsXHQvLy9cblx0XHRcdFx0XHRcdHRhcmdldFBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLFx0Ly8vXG5cdFx0XHRcdFx0XHRwYXRoTWFwID0ge1xuXHRcdFx0XHRcdFx0XHR0eXBlLFxuXHRcdFx0XHRcdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0XHRcdFx0XHR0YXJnZXRQYXRoXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cGF0aE1hcHMgPSBbXG5cdFx0XHRcdFx0XHRcdHBhdGhNYXBcblx0XHRcdFx0XHRcdF07XG5cblx0XHRcdGV4cGxvcmVyLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcyk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIG1pbi1oZWlnaHQ6IDIuNHJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVqQixNQUFrQjtJQUNqQixLQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXVFRiw2SUFXeEM7Ozs7Ozs7SUFoRk0sYUFBYTtjQUFiLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDbEIsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTztvQkFDQSxRQUFRLFFBQVEsV0FBVyxJQUM5QixhQUFhLFNBQ2IsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FDcEUsSUFBSSxHQUFHLGlCQUFpQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFekIsSUFBSTs7OztZQUdYLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQ3ZCLElBQUksUUFBUSxPQUFPLElBQ25CLElBQUksUUFBUSxPQUFPLElBQ25CLFFBQVEsUUFBUSxXQUFXLElBQzNCLGlCQUFpQixHQUFHLElBQUksRUFDeEIsbUJBQW1CLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUI7Ozs7WUFHNUQsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPO29CQUN2QixRQUFRLFFBQVEsV0FBVyxJQUM5QixlQUFlLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixJQUNsRCxtQkFBbUIsR0FBRyxlQUFlLENBQUMsT0FBTztnQkFFaEQsUUFBUSxDQUFDLFlBQVk7b0JBRWYsSUFBSSxRQUFRLE9BQU87b0JBRXJCLElBQUksS0FBSyxtQkFBbUI7d0JBQ3pCLElBQUksUUFBUSxPQUFPLElBQ3RCLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLFVBQVUsR0FBRyxtQkFBbUIsRUFDaEMsT0FBTzt3QkFDTixJQUFJLEVBQUosSUFBSTt3QkFDSixVQUFVLEVBQVYsVUFBVTt3QkFDVixVQUFVLEVBQVYsVUFBVTt1QkFFWCxRQUFRO3dCQUNQLE9BQU87O29CQUdYLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFROzs7OztZQUl0QyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNELFdBQVcsTUFBTSxnQkFBZ0I7cUJBRWhDLFVBQVUsTUFBTSxlQUFlO3FCQUVqQyxVQUFVOzs7O1lBR2hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7cUJBQ0gsWUFBWSxNQUFNLGdCQUFnQjtxQkFFbEMsV0FBVyxNQUFNLGVBQWU7cUJBRWhDLFdBQVc7Ozs7V0EzRGQsYUFBYTtFQUhHLE1BQWtCO2dCQUdsQyxhQUFhLEdBOERYLGlCQUFpQjtJQUN2QixTQUFTLEdBQUUsSUFBTTs7QUFJbkIsTUFBTSxDQUFDLE1BQU0sQ0F0RVMsTUFBa0IsU0FzRWhCLFNBQVMsRUFyRVYsS0FBbUI7bUJBSHBCLGNBQWlCLFVBMEVkLGFBQWEifQ==