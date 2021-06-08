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
        "\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
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
                var name = this.getName(), path = this.getPath(), type = this.getType(), explorerDiv = this.getExplorerDiv(), dragEntryDivType = type, markerEntryDivPath = path; ///
                explorerDiv.addMarker(markerEntryDivPath, dragEntryDivType);
                console.log("Start dragging '".concat(name, "'"));
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(event, element) {
                var name = this.getName();
                ///
                console.log("Stop dragging '".concat(name, "'"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZHJhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEVudHJ5RGl2IGZyb20gXCIuLi8uLi9kaXYvZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5jbGFzcyBEcmFnRW50cnlEaXYgZXh0ZW5kcyBFbnRyeURpdiB7XG5cdGdldE5hbWUoKSB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXG5cdGdldFBhdGgoKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5RGl2ID0gdGhpcywgIC8vL1xuXHRcdFx0XHRcdHBhdGggPSBleHBsb3JlckRpdi5yZXRyaWV2ZURyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KTtcblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0Z2V0RXhwbG9yZXJEaXYoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlckRpdiB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyRGl2O1xuXHR9XG5cbiAgc3RhcnREcmFnSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuICAgICAgICAgIGRyYWdFbnRyeURpdlR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlEaXZQYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXJEaXYuYWRkTWFya2VyKG1hcmtlckVudHJ5RGl2UGF0aCwgZHJhZ0VudHJ5RGl2VHlwZSk7XG5cbiAgICBjb25zb2xlLmxvZyhgU3RhcnQgZHJhZ2dpbmcgJyR7bmFtZX0nYCk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAvLy9cblxuICAgIGNvbnNvbGUubG9nKGBTdG9wIGRyYWdnaW5nICcke25hbWV9J2ApO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0c3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuXHQgIFwibmFtZVwiXG4gIF07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeURpdi5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5RGl2KWBcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWxCLE1BQWlCO0lBQ2YsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1RUgsOEZBUXZDOzs7Ozs7O0lBN0VNLFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBQ2pCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ1csV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSTt1QkFFTCxJQUFJOzs7O1lBR1osR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTztvQkFDQSxXQUFXLFFBQVEsY0FBYyxJQUNwQyxZQUFZLFNBQ1osSUFBSSxHQUFHLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZO3VCQUVwRCxJQUFJOzs7O1lBR1osR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYztvQkFDVyxXQUFlLFFBQVYsVUFBVSxFQUEvQixXQUFXLEdBQUssV0FBZSxDQUEvQixXQUFXO3VCQUVaLFdBQVc7Ozs7WUFHbEIsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsV0FBVyxRQUFRLGNBQWMsSUFDakMsZ0JBQWdCLEdBQUcsSUFBSSxFQUN2QixrQkFBa0IsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQjtnQkFFMUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBTyxNQUFDLENBQU4sSUFBSSxHQUFDLENBQUM7Ozs7WUFHdkMsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPO29CQUN0QixJQUFJLFFBQVEsT0FBTztnQkFFekIsRUFBRyxBQUFILENBQUc7Z0JBRUgsT0FBTyxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQU8sTUFBQyxDQUFOLElBQUksR0FBQyxDQUFDOzs7O1lBR3RDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0YsV0FBVyxNQUFNLGdCQUFnQjtxQkFFaEMsVUFBVSxNQUFNLGVBQWU7cUJBRWpDLFVBQVU7Ozs7WUFHaEIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSCxZQUFZLE1BQU0sZ0JBQWdCO3FCQUVsQyxXQUFXLE1BQU0sZUFBZTtxQkFFaEMsV0FBVzs7OztXQXZEZCxZQUFZO0VBSEcsTUFBaUI7Z0JBR2hDLFlBQVksR0EwRFYsaUJBQWlCO0tBQ3RCLElBQU07O2dCQTNESCxZQUFZLEdBOERWLGlCQUFpQjtJQUN2QixTQUFTLEdBQUUsSUFBTTs7QUFJbkIsTUFBTSxDQUFDLE1BQU0sQ0F0RVEsTUFBaUIsU0FzRWYsU0FBUyxFQXJFVCxLQUFtQjttQkFIcEIsY0FBaUIsVUEwRWQsWUFBWSJ9