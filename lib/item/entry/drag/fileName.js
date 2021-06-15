"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
var _name = require("../../../utilities/name");
var _types = require("../../../types");
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
        "\n\n  font-size: 2rem;\n  background-color: lightgreen;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(FileNameDragEntryItem, DragEntryItem);
    function FileNameDragEntryItem() {
        _classCallCheck(this, FileNameDragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameDragEntryItem).apply(this, arguments));
    }
    _createClass(FileNameDragEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(entryItem) {
                var before;
                var entryItemType = entryItem.getType();
                switch(entryItemType){
                    case _types.FILE_NAME_DRAG_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        var name = this.getName(), entryItemName = entryItem.getName();
                        before = (0, _name).nameIsBeforeEntryItemName(name, entryItemName);
                        break;
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        before = false;
                        break;
                }
                return before;
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(event, element) {
                var explorer = this.getExplorer(), markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath();
                explorer.removeMarker();
                var path = this.getPath();
                if (path !== markerEntryItemPath) {
                    var filePath;
                    filePath = path; ///
                    explorer.removeFilePath(filePath);
                    filePath = markerEntryItemPath; ///
                    explorer.addFilePath(filePath);
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name;
                return name;
            }
        }
    ]);
    return FileNameDragEntryItem;
}(_drag.default);
_defineProperty(FileNameDragEntryItem, "type", _types.FILE_NAME_DRAG_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});
var _default = (0, _easyWithStyle).default(FileNameDragEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGVudHJ5SXRlbU5hbWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0c3RvcERyYWdIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0bWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKTtcblxuXHRcdGV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuXG5cdFx0aWYgKHBhdGggIT09IG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcblx0XHRcdGxldCBmaWxlUGF0aDtcblxuXHRcdFx0ZmlsZVBhdGggPSBwYXRoO1x0Ly8vXG5cblx0XHRcdGV4cGxvcmVyLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuXHRcdFx0ZmlsZVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoO1x0Ly8vXG5cblx0XHRcdGV4cGxvcmVyLmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcblx0XHR9XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX1RZUEU7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRmlsZU5hbWVEcmFnRW50cnlJdGVtKWBcblxuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUViLEtBQTBCO0lBRVYsS0FBeUI7SUFDOEMsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E2RGpGLGlFQUtoRDs7Ozs7OztJQWhFTSxxQkFBcUI7Y0FBckIscUJBQXFCO2FBQXJCLHFCQUFxQjs4QkFBckIscUJBQXFCO2dFQUFyQixxQkFBcUI7O2lCQUFyQixxQkFBcUI7O1lBQzFCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxTQUFTO29CQUNiLE1BQU07b0JBRUosYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPO3VCQUUvQixhQUFhO3lCQVIwRixNQUFnQjt5QkFBaEIsTUFBZ0I7eUJBQWhCLE1BQWdCOzRCQVl2SCxJQUFJLFFBQVEsT0FBTyxJQUN0QixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXBDLE1BQU0sT0FoQmdDLEtBQXlCLDRCQWdCNUIsSUFBSSxFQUFFLGFBQWE7O3lCQWZ1RCxNQUFnQjt3QkFtQjdILE1BQU0sR0FBRyxLQUFLOzs7dUJBSVQsTUFBTTs7OztZQUdkLEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsUUFBUSxRQUFRLFdBQVcsSUFDOUIsZUFBZSxHQUFHLFFBQVEsQ0FBQyx1QkFBdUIsSUFDbEQsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLE9BQU87Z0JBRWhELFFBQVEsQ0FBQyxZQUFZO29CQUVmLElBQUksUUFBUSxPQUFPO29CQUVyQixJQUFJLEtBQUssbUJBQW1CO3dCQUMzQixRQUFRO29CQUVaLFFBQVEsR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVwQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVE7b0JBRWhDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5DLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUTs7Ozs7WUFJL0IsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTyxXQUFlLFFBQVYsVUFBVSxFQUF4QixJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJO3VCQUVMLElBQUk7Ozs7V0FqRFQscUJBQXFCO0VBTEQsS0FBMEI7Z0JBSzlDLHFCQUFxQixHQW9EbEIsSUFBSSxHQXREb0csTUFBZ0I7Z0JBRTNILHFCQUFxQixHQXNEbEIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOzttQkE5REosY0FBaUIsVUFrRWQscUJBQXFCIn0=