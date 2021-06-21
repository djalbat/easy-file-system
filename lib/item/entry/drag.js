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
                    var sourceFilePath = path, targetFilePath = markerEntryItemPath, pathMap = {
                        sourceFilePath: sourceFilePath,
                        targetFilePath: targetFilePath
                    }, pathMaps = [
                        pathMap
                    ];
                    explorer.moveEntry(pathMaps);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aCgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gdGhpcywgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1QYXRoID0gZXhwbG9yZXIucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKSxcblx0XHRcdFx0XHRwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7XHQvLy9cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cbiAgc3RhcnREcmFnSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG5cblx0XHRpZiAocGF0aCAhPT0gbWFya2VyRW50cnlJdGVtUGF0aCkge1xuXHRcdFx0Y29uc3Qgc291cmNlRmlsZVBhdGggPSBwYXRoLFx0Ly8vXG5cdFx0XHRcdFx0XHR0YXJnZXRGaWxlUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsXHQvLy9cblx0XHRcdFx0XHRcdHBhdGhNYXAgPSB7XG5cdFx0XHRcdFx0XHRcdHNvdXJjZUZpbGVQYXRoLFxuXHRcdFx0XHRcdFx0XHR0YXJnZXRGaWxlUGF0aFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHBhdGhNYXBzID0gW1xuXHRcdFx0XHRcdFx0XHRwYXRoTWFwXG5cdFx0XHRcdFx0XHRdO1xuXG5cdFx0XHRleHBsb3Jlci5tb3ZlRW50cnkocGF0aE1hcHMpO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuICBtaW4taGVpZ2h0OiAyLjRyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFakIsTUFBa0I7SUFDakIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FxRUYsNklBV3hDOzs7Ozs7O0lBOUVNLGFBQWE7Y0FBYixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2xCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ0EsUUFBUSxRQUFRLFdBQVcsSUFDOUIsYUFBYSxTQUNiLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQ3BFLElBQUksR0FBRyxpQkFBaUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXpCLElBQUk7Ozs7WUFHWCxHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPO29CQUN2QixJQUFJLFFBQVEsT0FBTyxJQUNuQixJQUFJLFFBQVEsT0FBTyxJQUNuQixRQUFRLFFBQVEsV0FBVyxJQUMzQixpQkFBaUIsR0FBRyxJQUFJLEVBQ3hCLG1CQUFtQixHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXRDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCOzs7O1lBRzVELEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsUUFBUSxRQUFRLFdBQVcsSUFDOUIsZUFBZSxHQUFHLFFBQVEsQ0FBQyx1QkFBdUIsSUFDbEQsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLE9BQU87Z0JBRWhELFFBQVEsQ0FBQyxZQUFZO29CQUVmLElBQUksUUFBUSxPQUFPO29CQUVyQixJQUFJLEtBQUssbUJBQW1CO3dCQUN6QixjQUFjLEdBQUcsSUFBSSxFQUN4QixjQUFjLEdBQUcsbUJBQW1CLEVBQ3BDLE9BQU87d0JBQ04sY0FBYyxFQUFkLGNBQWM7d0JBQ2QsY0FBYyxFQUFkLGNBQWM7dUJBRWYsUUFBUTt3QkFDUCxPQUFPOztvQkFHWCxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7Ozs7O1lBSTdCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsV0FBVyxNQUFNLGdCQUFnQjtxQkFFaEMsVUFBVSxNQUFNLGVBQWU7cUJBRWpDLFVBQVU7Ozs7WUFHaEIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSCxZQUFZLE1BQU0sZ0JBQWdCO3FCQUVsQyxXQUFXLE1BQU0sZUFBZTtxQkFFaEMsV0FBVzs7OztXQXpEZCxhQUFhO0VBSEcsTUFBa0I7Z0JBR2xDLGFBQWEsR0E0RFgsaUJBQWlCO0lBQ3ZCLFNBQVMsR0FBRSxJQUFNOztBQUluQixNQUFNLENBQUMsTUFBTSxDQXBFUyxNQUFrQixTQW9FaEIsU0FBUyxFQW5FVixLQUFtQjttQkFIcEIsY0FBaUIsVUF3RWQsYUFBYSJ9