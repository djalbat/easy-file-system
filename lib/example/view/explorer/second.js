"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SecondExplorer;
    }
});
var _index = require("../../../index");
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
var SecondExplorer = /*#__PURE__*/ function(Explorer) {
    _inherits(SecondExplorer, Explorer);
    function SecondExplorer() {
        _class_call_check(this, SecondExplorer);
        return _call_super(this, SecondExplorer, arguments);
    }
    _create_class(SecondExplorer, [
        {
            key: "didMount",
            value: function didMount() {
                this.addFilePath("directory2/file4.txt");
                this.addFilePath("directory2/file5.txt");
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return SecondExplorer;
}(_index.Explorer);
_define_property(SecondExplorer, "defaultProperties", {
    className: "first",
    reference: "second-explorer",
    references: [
        "first-explorer"
    ],
    singleClick: false
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZXhwbG9yZXIvc2Vjb25kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFeHBsb3JlciB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY29uZEV4cGxvcmVyIGV4dGVuZHMgRXhwbG9yZXIge1xuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5Mi9maWxlNC50eHRcIik7XG4gICAgdGhpcy5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTIvZmlsZTUudHh0XCIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpcnN0XCIsXG4gICAgcmVmZXJlbmNlOiBcInNlY29uZC1leHBsb3JlclwiLFxuICAgIHJlZmVyZW5jZXM6IFtcbiAgICAgIFwiZmlyc3QtZXhwbG9yZXJcIlxuICAgIF0sXG4gICAgc2luZ2xlQ2xpY2s6IGZhbHNlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2Vjb25kRXhwbG9yZXIiLCJkaWRNb3VudCIsImFkZEZpbGVQYXRoIiwid2lsbFVubW91bnQiLCJFeHBsb3JlciIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlcyIsInNpbmdsZUNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFdBQVcsQ0FBQztnQkFDakIsSUFBSSxDQUFDQSxXQUFXLENBQUM7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztXQVJtQkg7RUFBdUJJLGVBQVE7QUFVbEQsaUJBVm1CSixnQkFVWksscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsWUFBWTtRQUNWO0tBQ0Q7SUFDREMsYUFBYTtBQUNmIn0=