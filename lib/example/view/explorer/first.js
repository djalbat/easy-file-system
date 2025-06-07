"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FirstExplorer;
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
var FirstExplorer = /*#__PURE__*/ function(Explorer) {
    _inherits(FirstExplorer, Explorer);
    function FirstExplorer() {
        _class_call_check(this, FirstExplorer);
        return _call_super(this, FirstExplorer, arguments);
    }
    _create_class(FirstExplorer, [
        {
            key: "didMount",
            value: function didMount() {
                var readOnly = true;
                this.addFilePath("directory1/file1.txt", readOnly);
                this.addFilePath("directory1/file2.txt", readOnly);
                this.addDirectoryPath("directory1/directory3", readOnly);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return FirstExplorer;
}(_index.Explorer);
_define_property(FirstExplorer, "defaultProperties", {
    className: "first",
    reference: "first-explorer",
    references: [
        "rubbish-bin",
        "first-explorer"
    ],
    singleClick: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZXhwbG9yZXIvZmlyc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cGxvcmVyIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RFeHBsb3JlciBleHRlbmRzIEV4cGxvcmVyIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgcmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgdGhpcy5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTEvZmlsZTEudHh0XCIsIHJlYWRPbmx5KTtcbiAgICB0aGlzLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMi50eHRcIiwgcmVhZE9ubHkpO1xuXG4gICAgdGhpcy5hZGREaXJlY3RvcnlQYXRoKFwiZGlyZWN0b3J5MS9kaXJlY3RvcnkzXCIsIHJlYWRPbmx5KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaXJzdFwiLFxuICAgIHJlZmVyZW5jZTogXCJmaXJzdC1leHBsb3JlclwiLFxuICAgIHJlZmVyZW5jZXM6IFtcbiAgICAgIFwicnViYmlzaC1iaW5cIixcbiAgICAgIFwiZmlyc3QtZXhwbG9yZXJcIlxuICAgIF0sXG4gICAgc2luZ2xlQ2xpY2s6IHRydWVcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaXJzdEV4cGxvcmVyIiwiZGlkTW91bnQiLCJyZWFkT25seSIsImFkZEZpbGVQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsIndpbGxVbm1vdW50IiwiRXhwbG9yZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZXMiLCJzaW5nbGVDbGljayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXO2dCQUVqQixJQUFJLENBQUNDLFdBQVcsQ0FBQyx3QkFBd0JEO2dCQUN6QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyx3QkFBd0JEO2dCQUV6QyxJQUFJLENBQUNFLGdCQUFnQixDQUFDLHlCQUF5QkY7WUFDakQ7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztXQVptQkw7RUFBc0JNLGVBQVE7QUFjakQsaUJBZG1CTixlQWNaTyxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxZQUFZO1FBQ1Y7UUFDQTtLQUNEO0lBQ0RDLGFBQWE7QUFDZiJ9