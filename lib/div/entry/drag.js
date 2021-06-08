"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _entry = _interopRequireDefault(require("../../div/entry"));
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
        "\n\n  min-height: 2.4rem;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DragEntryDiv = /*#__PURE__*/ function(EntryDiv) {
    _inherits(DragEntryDiv, EntryDiv);
    function DragEntryDiv() {
        _classCallCheck(this, DragEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DragEntryDiv).apply(this, arguments));
    }
    _createClass(DragEntryDiv, [
        {
            key: "getName",
            value: function getName() {
                var _properties = this.properties, name = _properties.name;
                return name;
            }
        },
        {
            key: "getPath",
            value: function getPath() {
                var explorerDiv = this.getExplorerDiv(), dragEntryDiv = this, path = explorerDiv.retrieveDragEntryDivPath(dragEntryDiv);
                return path;
            }
        },
        {
            key: "getExplorerDiv",
            value: function getExplorerDiv() {
                var _properties = this.properties, explorerDiv = _properties.explorerDiv;
                return explorerDiv;
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(event, element) {
                var path = this.getPath(), type = this.getType(), explorerDiv = this.getExplorerDiv(), dragEntryDivType = type, markerEntryDivPath = path; ///
                explorerDiv.addMarker(markerEntryDivPath, dragEntryDivType);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(event, element) {
                var explorerDiv = this.getExplorerDiv();
                explorerDiv.removeMarker();
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
    return DragEntryDiv;
}(_entry.default);
_defineProperty(DragEntryDiv, "ignoredProperties", [
    "name"
]);
_defineProperty(DragEntryDiv, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _drag.default);
var _default = (0, _easyWithStyle).default(DragEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZHJhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEVudHJ5RGl2IGZyb20gXCIuLi8uLi9kaXYvZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5jbGFzcyBEcmFnRW50cnlEaXYgZXh0ZW5kcyBFbnRyeURpdiB7XG5cdGdldE5hbWUoKSB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXG5cdGdldFBhdGgoKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5RGl2ID0gdGhpcywgIC8vL1xuXHRcdFx0XHRcdHBhdGggPSBleHBsb3JlckRpdi5yZXRyaWV2ZURyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KTtcblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0Z2V0RXhwbG9yZXJEaXYoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlckRpdiB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyRGl2O1xuXHR9XG5cbiAgc3RhcnREcmFnSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG4gICAgICAgICAgZHJhZ0VudHJ5RGl2VHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeURpdlBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3JlckRpdi5hZGRNYXJrZXIobWFya2VyRW50cnlEaXZQYXRoLCBkcmFnRW50cnlEaXZUeXBlKTtcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpO1xuXG4gICAgZXhwbG9yZXJEaXYucmVtb3ZlTWFya2VyKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG5cdCAgXCJuYW1lXCJcbiAgXTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5RGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlEaXYpYFxuXG4gIG1pbi1oZWlnaHQ6IDIuNHJlbTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWxCLE1BQWlCO0lBQ2YsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FrRUgsdUhBVXZDOzs7Ozs7O0lBMUVNLFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBQ2pCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ1csV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSTt1QkFFTCxJQUFJOzs7O1lBR1osR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTztvQkFDQSxXQUFXLFFBQVEsY0FBYyxJQUNwQyxZQUFZLFNBQ1osSUFBSSxHQUFHLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZO3VCQUVwRCxJQUFJOzs7O1lBR1osR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYztvQkFDVyxXQUFlLFFBQVYsVUFBVSxFQUEvQixXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXO3VCQUVaLFdBQVc7Ozs7WUFHbEIsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsV0FBVyxRQUFRLGNBQWMsSUFDakMsZ0JBQWdCLEdBQUcsSUFBSSxFQUN2QixrQkFBa0IsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQjs7OztZQUc1RCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQ3RCLFdBQVcsUUFBUSxjQUFjO2dCQUV2QyxXQUFXLENBQUMsWUFBWTs7OztZQUcxQixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNGLFdBQVcsTUFBTSxnQkFBZ0I7cUJBRWhDLFVBQVUsTUFBTSxlQUFlO3FCQUVqQyxVQUFVOzs7O1lBR2hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7cUJBQ0gsWUFBWSxNQUFNLGdCQUFnQjtxQkFFbEMsV0FBVyxNQUFNLGVBQWU7cUJBRWhDLFdBQVc7Ozs7V0FsRGQsWUFBWTtFQUhHLE1BQWlCO2dCQUdoQyxZQUFZLEdBcURWLGlCQUFpQjtLQUN0QixJQUFNOztnQkF0REgsWUFBWSxHQXlEVixpQkFBaUI7SUFDdkIsU0FBUyxHQUFFLElBQU07O0FBSW5CLE1BQU0sQ0FBQyxNQUFNLENBakVRLE1BQWlCLFNBaUVmLFNBQVMsRUFoRVQsS0FBbUI7bUJBSHBCLGNBQWlCLFVBcUVkLFlBQVkifQ==