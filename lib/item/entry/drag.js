"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _necessary = require("necessary");
var _entry = _interopRequireDefault(require("../../item/entry"));
var _drag = _interopRequireDefault(require("../../mixins/drag"));
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
        "\n\n  min-height: 2.4rem;\n  user-select: none;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
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
            key: "getPathMap",
            value: function getPathMap(sourcePath, targetPath) {
                var type = this.getType(), name = this.getName();
                sourcePath = (0, _pathMap).adjustPath(sourcePath, name);
                targetPath = (0, _pathMap).adjustPath(targetPath, name);
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
                    var pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path), markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath), sourcePath = pathWithoutBottommostName, targetPath = markerEntryItemPathWithoutBottommostName, pathMaps = this.getPathMaps(sourcePath, targetPath);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuXG5pbXBvcnQgeyBhZGp1c3RQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aCgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gdGhpcywgIC8vL1xuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1QYXRoID0gZXhwbG9yZXIucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKSxcblx0XHRcdFx0XHRwYXRoID0gZHJhZ0VudHJ5SXRlbVBhdGg7XHQvLy9cblxuXHRcdHJldHVybiBwYXRoO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSB7XG5cdFx0Y29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1xuXHRcdHRhcmdldFBhdGggPSBhZGp1c3RQYXRoKHRhcmdldFBhdGgsIG5hbWUpO1xuXG5cdFx0Y29uc3QgcGF0aE1hcCA9IHtcblx0XHRcdHR5cGUsXG5cdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0dGFyZ2V0UGF0aFxuXHRcdH07XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdHN0YXJ0RHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cblx0c3RvcERyYWdIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKTtcblxuXHRcdGV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuXG5cdFx0aWYgKHBhdGggIT09IG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcblx0XHRcdGNvbnN0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCksXG5cdFx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpLFxuXHRcdFx0XHRcdFx0c291cmNlUGF0aCA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsXHQvLy9cblx0XHRcdFx0XHRcdHRhcmdldFBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lLFx0Ly8vXG5cdFx0XHRcdFx0XHRwYXRoTWFwcyA9IHRoaXMuZ2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCk7XG5cblx0XHRcdGV4cGxvcmVyLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcyk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG4gIG1pbi1oZWlnaHQ6IDIuNHJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAg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