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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aCgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gdGhpcywgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1QYXRoID0gZXhwbG9yZXIucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKSxcblx0XHRcdFx0XHRwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7XHQvLy9cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cbiAgc3RhcnREcmFnSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cbiAgbWluLWhlaWdodDogMi40cmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWpCLE1BQWtCO0lBQ2pCLEtBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkNGLDZJQVd4Qzs7Ozs7OztJQXRETSxhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNsQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNBLFFBQVEsUUFBUSxXQUFXLElBQzlCLGFBQWEsU0FDYixpQkFBaUIsR0FBRyxRQUFRLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUNwRSxJQUFJLEdBQUcsaUJBQWlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV6QixJQUFJOzs7O1lBR1gsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsUUFBUSxRQUFRLFdBQVcsSUFDM0IsaUJBQWlCLEdBQUcsSUFBSSxFQUN4QixtQkFBbUIsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV0QyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQjs7OztZQUczRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNGLFdBQVcsTUFBTSxnQkFBZ0I7cUJBRWhDLFVBQVUsTUFBTSxlQUFlO3FCQUVqQyxVQUFVOzs7O1lBR2hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7cUJBQ0gsWUFBWSxNQUFNLGdCQUFnQjtxQkFFbEMsV0FBVyxNQUFNLGVBQWU7cUJBRWhDLFdBQVc7Ozs7V0FqQ2QsYUFBYTtFQUhHLE1BQWtCO2dCQUdsQyxhQUFhLEdBb0NYLGlCQUFpQjtJQUN2QixTQUFTLEdBQUUsSUFBTTs7QUFJbkIsTUFBTSxDQUFDLE1BQU0sQ0E1Q1MsTUFBa0IsU0E0Q2hCLFNBQVMsRUEzQ1YsS0FBbUI7bUJBSHBCLGNBQWlCLFVBZ0RkLGFBQWEifQ==