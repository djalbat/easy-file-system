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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEVudHJ5RGl2IGZyb20gXCIuLi8uLi9kaXYvZW50cnlcIjtcblxuY2xhc3MgRGlyZWN0b3J5TmFtZUVudHJ5RGl2IGV4dGVuZHMgRW50cnlEaXYge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZGlyZWN0b3J5TmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG4gICAgICBkaXJlY3RvcnlOYW1lLFxuICAgICAgLi4uY2hpbGRFbGVtZW50c1xuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXJlY3RvcnlOYW1lRW50cnlEaXYpYFxuXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFbEIsTUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWlCVSxnRUFLaEQ7Ozs7Ozs7SUFwQk0scUJBQXFCO2NBQXJCLHFCQUFxQjthQUFyQixxQkFBcUI7OEJBQXJCLHFCQUFxQjtnRUFBckIscUJBQXFCOztpQkFBckIscUJBQXFCOztZQUN6QixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUM4QixXQUFlLFFBQVYsVUFBVSxFQUFoRCxjQUFhLEdBQW9CLFdBQWUsQ0FBaEQsYUFBYSxFQUFFLGFBQWEsR0FBSyxXQUFlLENBQWpDLGFBQWE7O29CQUdsQyxhQUFhO2tCQURQLE1BR1Asb0JBREksY0FBYTs7OztXQU5oQixxQkFBcUI7RUFGTixNQUFpQjtnQkFFaEMscUJBQXFCLEdBVWxCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsY0FBZ0I7O21CQWZULGNBQWlCLFVBbUJkLHFCQUFxQiJ9