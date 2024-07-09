"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
var _styles = require("../styles");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  fill: none;\n  height: ",
        ";\n  display: inline;\n  padding-right: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameSVG = /*#__PURE__*/ function(SVG) {
    _inherits(DirectoryNameSVG, SVG);
    var _super = _create_super(DirectoryNameSVG);
    function DirectoryNameSVG() {
        _class_call_check(this, DirectoryNameSVG);
        return _super.apply(this, arguments);
    }
    _create_class(DirectoryNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 168,32 v 22 h 26 V 38 h -26"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 166,32 h 12 l 6,6"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 169,35 h 11"
                }));
            }
        }
    ]);
    return DirectoryNameSVG;
}(_svg.default);
_define_property(DirectoryNameSVG, "tagName", "svg");
_define_property(DirectoryNameSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "165 25 32 32",
    className: "directory-name"
});
var _default = (0, _easywithstyle.default)(DirectoryNameSVG)(_templateObject(), _styles.directoryNameSVGHeight, _styles.directoryNameSVGPaddingRight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmltcG9ydCB7IGRpcmVjdG9yeU5hbWVTVkdIZWlnaHQsIGRpcmVjdG9yeU5hbWVTVkdQYWRkaW5nUmlnaHQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNsYXNzIERpcmVjdG9yeU5hbWVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTY4LDMyIHYgMjIgaCAyNiBWIDM4IGggLTI2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE2NiwzMiBoIDEyIGwgNiw2XCIgLz5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJzdHJva2Utd2lkdGg6NFwiIGQ9XCJtIDE2OSwzNSBoIDExXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjMyXCIsXG4gICAgdmlld0JveDogXCIxNjUgMjUgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXJlY3RvcnlOYW1lU1ZHKWBcblxuICBmaWxsOiBub25lO1xuICBoZWlnaHQ6ICR7ZGlyZWN0b3J5TmFtZVNWR0hlaWdodH07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1yaWdodDogJHtkaXJlY3RvcnlOYW1lU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkRpcmVjdG9yeU5hbWVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJzdHlsZSIsImQiLCJTVkciLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJkaXJlY3RvcnlOYW1lU1ZHSGVpZ2h0IiwiZGlyZWN0b3J5TmFtZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0JBOzs7ZUFBQTs7O29FQTdCc0I7MERBRU47c0JBRXFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQWlCQyxHQUFFO2tDQUMvQixvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQWlCQyxHQUFFO2tDQUMvQixvQkFBQ0Y7b0JBQUtDLE9BQU07b0JBQWlCQyxHQUFFOztZQUlyQzs7O1dBWElMO0VBQXlCTSxZQUFHO0FBYWhDLGlCQWJJTixrQkFhR08sV0FBVTtBQUVqQixpQkFmSVAsa0JBZUdRLHFCQUFvQjtJQUN6QkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IscUNBR2JjLDhCQUFzQixFQUVmQyxvQ0FBNEIifQ==