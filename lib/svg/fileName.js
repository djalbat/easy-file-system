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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  fill: none;\n  height: ",
        ";\n  display: inline;\n  padding-left: ",
        ";\n  padding-right: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameSVG = /*#__PURE__*/ function(SVG) {
    _inherits(FileNameSVG, SVG);
    function FileNameSVG() {
        _class_call_check(this, FileNameSVG);
        return _call_super(this, FileNameSVG, arguments);
    }
    _create_class(FileNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 142,34 v 8 h 8"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 128,34 v 26 h 22 V 42 l -8,-8 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    style: "stroke-width:4",
                    d: "m 143,40 h 3"
                }));
            }
        }
    ]);
    return FileNameSVG;
}(_svg.default);
_define_property(FileNameSVG, "tagName", "svg");
_define_property(FileNameSVG, "defaultProperties", {
    width: "32",
    height: "32",
    viewBox: "121 31 32 32",
    className: "file-name"
});
var _default = (0, _easywithstyle.default)(FileNameSVG)(_templateObject(), _styles.fileNameSVGHeight, _styles.fileNameSVGPaddingLeft, _styles.fileNameSVGPaddingRight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmltcG9ydCB7IGZpbGVOYW1lU1ZHSGVpZ2h0LCBmaWxlTmFtZVNWR1BhZGRpbmdSaWdodCwgZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgRmlsZU5hbWVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTQyLDM0IHYgOCBoIDhcIiAvPlxuICAgICAgICA8cGF0aCBzdHlsZT1cInN0cm9rZS13aWR0aDo0XCIgZD1cIm0gMTI4LDM0IHYgMjYgaCAyMiBWIDQyIGwgLTgsLTggelwiIC8+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjRcIiBkPVwibSAxNDMsNDAgaCAzXCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3ZnXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHdpZHRoOiBcIjMyXCIsXG4gICAgaGVpZ2h0OiBcIjMyXCIsXG4gICAgdmlld0JveDogXCIxMjEgMzEgMzIgMzJcIixcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRmlsZU5hbWVTVkcpYFxuXG4gIGZpbGw6IG5vbmU7XG4gIGhlaWdodDogJHtmaWxlTmFtZVNWR0hlaWdodH07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ0xlZnR9O1xuICBwYWRkaW5nLXJpZ2h0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkZpbGVOYW1lU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwiU1ZHIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZmlsZU5hbWVTVkdIZWlnaHQiLCJmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0IiwiZmlsZU5hbWVTVkdQYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OztvRUE3QnNCOzBEQUVOO3NCQUVtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBaUJDLEdBQUU7a0NBQy9CLG9CQUFDRjtvQkFBS0MsT0FBTTtvQkFBaUJDLEdBQUU7a0NBQy9CLG9CQUFDRjtvQkFBS0MsT0FBTTtvQkFBaUJDLEdBQUU7O1lBSXJDOzs7V0FYSUw7RUFBb0JNLFlBQUc7QUFhM0IsaUJBYklOLGFBYUdPLFdBQVU7QUFFakIsaUJBZklQLGFBZUdRLHFCQUFvQjtJQUN6QkMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsZ0NBR2JjLHlCQUFpQixFQUVYQyw4QkFBc0IsRUFDckJDLCtCQUF1QiJ9