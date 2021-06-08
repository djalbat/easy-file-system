"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _marker = _interopRequireDefault(require("../../../div/entry/marker"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var FileNameMarkerEntryDiv = /*#__PURE__*/ function(MarkerEntryDiv) {
    _inherits(FileNameMarkerEntryDiv, MarkerEntryDiv);
    function FileNameMarkerEntryDiv() {
        _classCallCheck(this, FileNameMarkerEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameMarkerEntryDiv).apply(this, arguments));
    }
    _createClass(FileNameMarkerEntryDiv, [
        {
            key: "isBefore",
            value: function isBefore(dragEntryDiv) {
                var before;
                var dragEntryDivType = dragEntryDiv.getType();
                switch(dragEntryDivType){
                    case _types.FILE_NAME_TYPE:
                        var name = this.getName(), dragEntryDivName = dragEntryDiv.getName();
                        before = (0, _name).nameIsBeforeEntryDivName(name, dragEntryDivName);
                        break;
                    case _types.DIRECTORY_NAME_TYPE:
                        before = false;
                        break;
                }
                return before;
            }
        }
    ]);
    return FileNameMarkerEntryDiv;
}(_marker.default);
_defineProperty(FileNameMarkerEntryDiv, "type", _types.FILE_NAME_MARKER_TYPE);
_defineProperty(FileNameMarkerEntryDiv, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameMarkerEntryDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvZW50cnkvbWFya2VyL2ZpbGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2VyRW50cnlEaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9lbnRyeS9tYXJrZXJcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlEaXZOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lTWFya2VyRW50cnlEaXYgZXh0ZW5kcyBNYXJrZXJFbnRyeURpdiB7XG4gIGlzQmVmb3JlKGRyYWdFbnRyeURpdikge1xuICAgIGxldCBiZWZvcmU7XG5cbiAgICBjb25zdCBkcmFnRW50cnlEaXZUeXBlID0gZHJhZ0VudHJ5RGl2LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAoZHJhZ0VudHJ5RGl2VHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfVFlQRTpcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBkcmFnRW50cnlEaXZOYW1lID0gZHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuICAgICAgICBiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeURpdk5hbWUobmFtZSwgZHJhZ0VudHJ5RGl2TmFtZSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfVFlQRTpcbiAgICAgICAgYmVmb3JlID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlZm9yZTtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9OQU1FX01BUktFUl9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVlLE9BQTJCO0lBRWIsS0FBeUI7SUFDUyxNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0RSxzQkFBc0I7Y0FBdEIsc0JBQXNCO2FBQXRCLHNCQUFzQjs4QkFBdEIsc0JBQXNCO2dFQUF0QixzQkFBc0I7O2lCQUF0QixzQkFBc0I7O1lBQ3pDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxZQUFZO29CQUNmLE1BQU07b0JBRUosZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE9BQU87dUJBRXJDLGdCQUFnQjt5QkFSK0MsTUFBZ0I7NEJBVTdFLElBQUksUUFBUSxPQUFPLElBQ25CLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxPQUFPO3dCQUU3QyxNQUFNLE9BZDJCLEtBQXlCLDJCQWN4QixJQUFJLEVBQUUsZ0JBQWdCOzt5QkFiVyxNQUFnQjt3QkFrQm5GLE1BQU0sR0FBRyxLQUFLOzs7dUJBS1gsTUFBTTs7OztXQXJCSSxzQkFBc0I7RUFMaEIsT0FBMkI7Z0JBS2pDLHNCQUFzQixHQXdCbEMsSUFBSSxHQTFCOEQsTUFBZ0I7Z0JBRXRFLHNCQUFzQixHQTBCbEMsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOztrQkEzQkwsc0JBQXNCIn0=