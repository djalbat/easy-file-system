"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _drag = _interopRequireDefault(require("../../../div/entry/drag"));
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
var FileNameDragEntryDiv = /*#__PURE__*/ function(DragEntryDiv) {
    _inherits(FileNameDragEntryDiv, DragEntryDiv);
    function FileNameDragEntryDiv() {
        _classCallCheck(this, FileNameDragEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameDragEntryDiv).apply(this, arguments));
    }
    _createClass(FileNameDragEntryDiv, [
        {
            key: "isBefore",
            value: function isBefore(entryDiv) {
                var before;
                var entryDivType = entryDiv.getType();
                switch(entryDivType){
                    case _types.FILE_NAME_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        var name = this.getName(), entryDivName = entryDiv.getName();
                        before = (0, _name).nameIsBeforeEntryDivName(name, entryDivName);
                        break;
                    case _types.DIRECTORY_NAME_TYPE:
                        before = false;
                        break;
                }
                return before;
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
    return FileNameDragEntryDiv;
}(_drag.default);
_defineProperty(FileNameDragEntryDiv, "type", _types.FILE_NAME_TYPE);
_defineProperty(FileNameDragEntryDiv, "defaultProperties", {
    className: "file-name"
});
var _default = (0, _easyWithStyle).default(FileNameDragEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZHJhZy9maWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IERyYWdFbnRyeURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2VudHJ5L2RyYWdcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlEaXZOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBGaWxlTmFtZURyYWdFbnRyeURpdiBleHRlbmRzIERyYWdFbnRyeURpdiB7XG5cdGlzQmVmb3JlKGVudHJ5RGl2KSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5RGl2VHlwZSA9IGVudHJ5RGl2LmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlEaXZUeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5RGl2TmFtZSA9IGVudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeURpdk5hbWUobmFtZSwgZW50cnlEaXZOYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEZpbGVOYW1lRHJhZ0VudHJ5RGl2KWBcblxuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVkLEtBQXlCO0lBRVQsS0FBeUI7SUFDcUMsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1Q3hFLGlFQUsvQzs7Ozs7OztJQTFDTSxvQkFBb0I7Y0FBcEIsb0JBQW9CO2FBQXBCLG9CQUFvQjs4QkFBcEIsb0JBQW9CO2dFQUFwQixvQkFBb0I7O2lCQUFwQixvQkFBb0I7O1lBQ3pCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxRQUFRO29CQUNaLE1BQU07b0JBRUosWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPO3VCQUU3QixZQUFZO3lCQVJpRixNQUFnQjt5QkFBaEIsTUFBZ0I7eUJBQWhCLE1BQWdCOzRCQVk3RyxJQUFJLFFBQVEsT0FBTyxJQUN0QixZQUFZLEdBQUcsUUFBUSxDQUFDLE9BQU87d0JBRWxDLE1BQU0sT0FoQitCLEtBQXlCLDJCQWdCNUIsSUFBSSxFQUFFLFlBQVk7O3lCQWYrQyxNQUFnQjt3QkFtQm5ILE1BQU0sR0FBRyxLQUFLOzs7dUJBSVQsTUFBTTs7OztZQUdkLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ08sV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSTt1QkFFTCxJQUFJOzs7O1dBM0JULG9CQUFvQjtFQUxELEtBQXlCO2dCQUs1QyxvQkFBb0IsR0E4QmpCLElBQUksR0FoQzBGLE1BQWdCO2dCQUVqSCxvQkFBb0IsR0FnQ2pCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsU0FBVzs7bUJBeENKLGNBQWlCLFVBNENkLG9CQUFvQiJ9