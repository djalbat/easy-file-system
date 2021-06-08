"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _marker = _interopRequireDefault(require("../../../div/entry/marker"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var DirectoryNameMarkerEntryDiv = /*#__PURE__*/ function(MarkerEntryDiv) {
    _inherits(DirectoryNameMarkerEntryDiv, MarkerEntryDiv);
    function DirectoryNameMarkerEntryDiv() {
        _classCallCheck(this, DirectoryNameMarkerEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameMarkerEntryDiv).apply(this, arguments));
    }
    _createClass(DirectoryNameMarkerEntryDiv, [
        {
            key: "isBefore",
            value: function isBefore(dragEntryDiv) {
                var before;
                var dragEntryDivType = dragEntryDiv.getType();
                switch(dragEntryDivType){
                    case _types.FILE_NAME_TYPE:
                        before = true;
                        break;
                    case _types.DIRECTORY_NAME_TYPE:
                        var name = this.getName(), dragEntryDivName = dragEntryDiv.getName();
                        before = name.localeCompare(dragEntryDivName) < 0;
                        break;
                }
                return before;
            }
        }
    ]);
    return DirectoryNameMarkerEntryDiv;
}(_marker.default);
_defineProperty(DirectoryNameMarkerEntryDiv, "type", _types.DIRECTORY_NAME_MARKER_TYPE);
_defineProperty(DirectoryNameMarkerEntryDiv, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameMarkerEntryDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZXJFbnRyeURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2VudHJ5L21hcmtlclwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2IGV4dGVuZHMgTWFya2VyRW50cnlEaXYge1xuICBpc0JlZm9yZShkcmFnRW50cnlEaXYpIHtcbiAgICBsZXQgYmVmb3JlO1xuXG4gICAgY29uc3QgZHJhZ0VudHJ5RGl2VHlwZSA9IGRyYWdFbnRyeURpdi5nZXRUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKGRyYWdFbnRyeURpdlR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX1RZUEU6XG4gICAgICAgIGJlZm9yZSA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfVFlQRTpcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBkcmFnRW50cnlEaXZOYW1lID0gZHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuICAgICAgICBiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGRyYWdFbnRyeURpdk5hbWUpIDwgMCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlZm9yZTtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEU7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZSxPQUEyQjtJQUUwQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzRSwyQkFBMkI7Y0FBM0IsMkJBQTJCO2FBQTNCLDJCQUEyQjs4QkFBM0IsMkJBQTJCO2dFQUEzQiwyQkFBMkI7O2lCQUEzQiwyQkFBMkI7O1lBQzlDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxZQUFZO29CQUNmLE1BQU07b0JBRUosZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE9BQU87dUJBRXJDLGdCQUFnQjt5QkFSb0QsTUFBZ0I7d0JBVXhGLE1BQU0sR0FBRyxJQUFJOzt5QkFWMkQsTUFBZ0I7NEJBZWxGLElBQUksUUFBUSxPQUFPLElBQ25CLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxPQUFPO3dCQUU3QyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDOzs7dUJBSy9DLE1BQU07Ozs7V0FyQkksMkJBQTJCO0VBSnJCLE9BQTJCO2dCQUlqQywyQkFBMkIsR0F3QnZDLElBQUksR0ExQm1FLE1BQWdCO2dCQUUzRSwyQkFBMkIsR0EwQnZDLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsY0FBZ0I7O2tCQTNCViwyQkFBMkIifQ==