"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _entry = _interopRequireDefault(require("../../item/entry"));
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
        "\n\n  width: 4rem;\n  height: 2.4rem;\n  margin-left: 2rem;\n  background-color: yellow;\n  background-image: url(\"css/image/marker.png\");\n  background-repeat: no-repeat;\n  background-position: 0 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MarkerEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(MarkerEntryItem, EntryItem);
    function MarkerEntryItem() {
        _classCallCheck(this, MarkerEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(MarkerEntryItem).apply(this, arguments));
    }
    _createClass(MarkerEntryItem, [
        {
            key: "getPath",
            value: function getPath() {
                var explorer = this.getExplorer(), markerEntryItem = this, path = explorer.retrieveMarkerEntryItemPath(markerEntryItem);
                return path;
            }
        }
    ]);
    return MarkerEntryItem;
}(_entry.default);
_defineProperty(MarkerEntryItem, "defaultProperties", {
    className: "marker"
});
var _default = (0, _easyWithStyle).default(MarkerEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuXG5jbGFzcyBNYXJrZXJFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuICBnZXRQYXRoKCkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBwYXRoID0gZXhwbG9yZXIucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFya2VyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtlckVudHJ5SXRlbSlgXG5cbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMi40cmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJjc3MvaW1hZ2UvbWFya2VyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFakIsTUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQkUsaU5BVTFDOzs7Ozs7O0lBeEJNLGVBQWU7Y0FBZixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlO2dFQUFmLGVBQWU7O2lCQUFmLGVBQWU7O1lBQ25CLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ0MsUUFBUSxRQUFRLFdBQVcsSUFDM0IsZUFBZSxTQUNmLElBQUksR0FBRyxRQUFRLENBQUMsMkJBQTJCLENBQUMsZUFBZTt1QkFFMUQsSUFBSTs7OztXQU5ULGVBQWU7RUFGQyxNQUFrQjtnQkFFbEMsZUFBZSxHQVNaLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7bUJBZEQsY0FBaUIsVUFrQmQsZUFBZSJ9