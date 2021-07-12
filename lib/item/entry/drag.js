"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("@djalbat/easy-drag-and-drop");
var _entry = _interopRequireDefault(require("../../item/entry"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n\tfont-size: ",
        ";\n  user-select: none;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    margin-top: 0;\n    pointer-events: none;\n  }\n  \n"
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
            key: "getPathMap",
            value: function getPathMap(sourcePath, targetPath) {
                var type = this.getType(), name = this.getName();
                sourcePath = (0, _pathMap).adjustSourcePath(sourcePath, name);
                targetPath = (0, _pathMap).adjustTargetPath(targetPath, name);
                var pathMap = {
                    type: type,
                    sourcePath: sourcePath,
                    targetPath: targetPath
                };
                return pathMap;
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
            value: function stopDragHandler(element) {
                var explorer = this.getExplorer();
                explorer.removeMarker();
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
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle).default(DragEntryItem)(_templateObject(), _styles.dragEntryItemFontSize);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiQGRqYWxiYXQvZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcblxuaW1wb3J0IHsgZHJhZ0VudHJ5SXRlbUZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlUGF0aCwgYWRqdXN0VGFyZ2V0UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSB7XG5cdFx0Y29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1xuXHRcdHRhcmdldFBhdGggPSBhZGp1c3RUYXJnZXRQYXRoKHRhcmdldFBhdGgsIG5hbWUpO1xuXG5cdFx0Y29uc3QgcGF0aE1hcCA9IHtcblx0XHRcdHR5cGUsXG5cdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0dGFyZ2V0UGF0aFxuXHRcdH07XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cblx0Zm9udC1zaXplOiAke2RyYWdFbnRyeUl0ZW1Gb250U2l6ZX07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVaLGdCQUE2QjtJQUVsQyxNQUFrQjtJQUVGLE9BQWM7SUFDRCxRQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTBEcEMsaUJBRTVCO1NBQXdCLHlJQVVwQzs7Ozs7OztJQXBFTSxhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNsQixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVU7b0JBQzFCLElBQUksUUFBUSxPQUFPLElBQ3RCLElBQUksUUFBUSxPQUFPO2dCQUV0QixVQUFVLE9BUHVDLFFBQXlCLG1CQU81QyxVQUFVLEVBQUUsSUFBSTtnQkFDOUMsVUFBVSxPQVJ1QyxRQUF5QixtQkFRNUMsVUFBVSxFQUFFLElBQUk7b0JBRXhDLE9BQU87b0JBQ1osSUFBSSxFQUFKLElBQUk7b0JBQ0osVUFBVSxFQUFWLFVBQVU7b0JBQ1YsVUFBVSxFQUFWLFVBQVU7O3VCQUdKLE9BQU87Ozs7WUFHZixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLE9BQU87b0JBQ2YsSUFBSSxRQUFRLE9BQU8sSUFDbkIsSUFBSSxRQUFRLE9BQU8sSUFDbkIsUUFBUSxRQUFRLFdBQVcsSUFDM0IsaUJBQWlCLEdBQUcsSUFBSSxFQUN4QixtQkFBbUIsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV0QyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQjs7OztZQUc1RCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsT0FBTztvQkFDaEIsUUFBUSxRQUFRLFdBQVc7Z0JBRWpDLFFBQVEsQ0FBQyxZQUFZOzs7O1lBR3RCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsV0FBVyxNQUFNLGdCQUFnQjtxQkFFaEMsVUFBVSxNQUFNLGVBQWU7cUJBRWpDLFVBQVU7Ozs7WUFHaEIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSCxZQUFZLE1BQU0sZ0JBQWdCO3FCQUVsQyxXQUFXLE1BQU0sZUFBZTtxQkFFaEMsV0FBVzs7OztXQTlDZCxhQUFhO0VBTEcsTUFBa0I7Z0JBS2xDLGFBQWEsR0FpRFgsaUJBQWlCO0lBQ3ZCLFNBQVMsR0FBRSxJQUFNOztBQUluQixNQUFNLENBQUMsTUFBTSxDQTNEUyxNQUFrQixTQTJEaEIsU0FBUyxFQTdETixnQkFBNkI7bUJBRmxDLGNBQWlCLFVBaUVkLGFBQWEscUJBM0RBLE9BQWMifQ==