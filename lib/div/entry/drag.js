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
            key: "getType",
            value: function getType() {
                var _constructor = this.constructor, type = _constructor.type;
                return type;
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
                var name = this.getName();
                console.log("Start dragging '".concat(name, "'"));
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(event, element) {
                var name = this.getName();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZHJhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEVudHJ5RGl2IGZyb20gXCIuLi8uLi9kaXYvZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5jbGFzcyBEcmFnRW50cnlEaXYgZXh0ZW5kcyBFbnRyeURpdiB7XG5cdGdldE5hbWUoKSB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXG5cdGdldFR5cGUoKSB7XG5cdFx0Y29uc3QgeyB0eXBlIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIHR5cGU7XG5cdH1cblxuXHRnZXRQYXRoKCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeURpdiA9IHRoaXMsICAvLy9cblx0XHRcdFx0XHRwYXRoID0gZXhwbG9yZXJEaXYucmV0cmlldmVEcmFnRW50cnlEaXZQYXRoKGRyYWdFbnRyeURpdik7XG5cblx0XHRyZXR1cm4gcGF0aDtcblx0fVxuXG5cdGdldEV4cGxvcmVyRGl2KCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXJEaXYgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3JlckRpdjtcblx0fVxuXG5cdHN0YXJ0RHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcblx0ICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cblx0ICBjb25zb2xlLmxvZyhgU3RhcnQgZHJhZ2dpbmcgJyR7bmFtZX0nYCk7XG4gIH1cblxuICBzdG9wRHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgU3RvcCBkcmFnZ2luZyAnJHtuYW1lfSdgKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG5cdHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcblx0ICBcIm5hbWVcIlxuICBdO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeURpdilgXG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVsQixNQUFpQjtJQUNmLEtBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBb0VILDhGQVF2Qzs7Ozs7OztJQTFFTSxZQUFZO2NBQVosWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUNqQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNXLFdBQWUsUUFBVixVQUFVLEVBQXhCLElBQUksR0FBSyxXQUFlLENBQXhCLElBQUk7dUJBRUwsSUFBSTs7OztZQUdaLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQXpCLElBQUksR0FBSyxZQUFnQixDQUF6QixJQUFJO3VCQUVMLElBQUk7Ozs7WUFHWixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNBLFdBQVcsUUFBUSxjQUFjLElBQ3BDLFlBQVksU0FDWixJQUFJLEdBQUcsV0FBVyxDQUFDLHdCQUF3QixDQUFDLFlBQVk7dUJBRXBELElBQUk7Ozs7WUFHWixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjO29CQUNXLFdBQWUsUUFBVixVQUFVLEVBQS9CLFdBQVcsR0FBSyxXQUFlLENBQS9CLFdBQVc7dUJBRVosV0FBVzs7OztZQUduQixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPO29CQUN2QixJQUFJLFFBQVEsT0FBTztnQkFFekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBTyxNQUFDLENBQU4sSUFBSSxHQUFDLENBQUM7Ozs7WUFHdEMsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPO29CQUN0QixJQUFJLFFBQVEsT0FBTztnQkFFekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQU8sTUFBQyxDQUFOLElBQUksR0FBQyxDQUFDOzs7O1lBR3RDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0YsV0FBVyxNQUFNLGdCQUFnQjtxQkFFaEMsVUFBVSxNQUFNLGVBQWU7cUJBRWpDLFVBQVU7Ozs7WUFHaEIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSCxZQUFZLE1BQU0sZ0JBQWdCO3FCQUVsQyxXQUFXLE1BQU0sZUFBZTtxQkFFaEMsV0FBVzs7OztXQXBEZCxZQUFZO0VBSEcsTUFBaUI7Z0JBR2hDLFlBQVksR0F1RFYsaUJBQWlCO0tBQ3RCLElBQU07O2dCQXhESCxZQUFZLEdBMkRWLGlCQUFpQjtJQUN2QixTQUFTLEdBQUUsSUFBTTs7QUFJbkIsTUFBTSxDQUFDLE1BQU0sQ0FuRVEsTUFBaUIsU0FtRWYsU0FBUyxFQWxFVCxLQUFtQjttQkFIcEIsY0FBaUIsVUF1RWQsWUFBWSJ9