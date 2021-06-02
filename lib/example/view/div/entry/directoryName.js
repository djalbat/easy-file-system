"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _entry = _interopRequireDefault(require("../../div/entry"));
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  font-size: 2rem;\n  background-color: lightblue;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameEntryDiv = /*#__PURE__*/ function(EntryDiv) {
    _inherits(DirectoryNameEntryDiv, EntryDiv);
    function DirectoryNameEntryDiv() {
        _classCallCheck(this, DirectoryNameEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameEntryDiv).apply(this, arguments));
    }
    _createClass(DirectoryNameEntryDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, childElements1 = _properties.childElements, directoryName = _properties.directoryName;
                return [
                    directoryName
                ].concat(_toConsumableArray(childElements1));
            }
        }
    ]);
    return DirectoryNameEntryDiv;
}(_entry.default);
_defineProperty(DirectoryNameEntryDiv, "defaultProperties", {
    className: "directory-name"
});
var _default = (0, _easyWithStyle).default(DirectoryNameEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2VudHJ5L2RpcmVjdG9yeU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBFbnRyeURpdiBmcm9tIFwiLi4vLi4vZGl2L2VudHJ5XCI7XG5cbmNsYXNzIERpcmVjdG9yeU5hbWVFbnRyeURpdiBleHRlbmRzIEVudHJ5RGl2IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGRpcmVjdG9yeU5hbWUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuICAgICAgZGlyZWN0b3J5TmFtZSxcbiAgICAgIC4uLmNoaWxkRWxlbWVudHNcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGlyZWN0b3J5TmFtZUVudHJ5RGl2KWBcblxuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWxCLE1BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FpQlUsZ0VBS2hEOzs7Ozs7O0lBcEJNLHFCQUFxQjtjQUFyQixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7Z0VBQXJCLHFCQUFxQjs7aUJBQXJCLHFCQUFxQjs7WUFDekIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDOEIsV0FBZSxRQUFWLFVBQVUsRUFBaEQsY0FBYSxHQUFvQixXQUFlLENBQWhELGFBQWEsRUFBRSxhQUFhLEdBQUssV0FBZSxDQUFqQyxhQUFhOztvQkFHbEMsYUFBYTtrQkFEUCxNQUdQLG9CQURJLGNBQWE7Ozs7V0FOaEIscUJBQXFCO0VBRk4sTUFBaUI7Z0JBRWhDLHFCQUFxQixHQVVsQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLGNBQWdCOzttQkFmVCxjQUFpQixVQW1CZCxxQkFBcUIifQ==