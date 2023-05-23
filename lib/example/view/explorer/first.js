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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var FirstExplorer = /*#__PURE__*/ function(Explorer) {
    _inherits(FirstExplorer, Explorer);
    var _super = _create_super(FirstExplorer);
    function FirstExplorer() {
        _class_call_check(this, FirstExplorer);
        return _super.apply(this, arguments);
    }
    _create_class(FirstExplorer, [
        {
            key: "initialise",
            value: function initialise() {
                _get(_get_prototype_of(FirstExplorer.prototype), "initialise", this).call(this);
                var readOnly = true;
                this.addFilePath("directory1/file1.txt", readOnly);
                this.addFilePath("directory1/file2.txt", readOnly);
                this.addDirectoryPath("directory1/directory3", readOnly);
            }
        }
    ]);
    return FirstExplorer;
}(_index.Explorer);
_define_property(FirstExplorer, "defaultProperties", {
    className: "first",
    reference: "first-explorer"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZXhwbG9yZXIvZmlyc3QuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cGxvcmVyIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RFeHBsb3JlciBleHRlbmRzIEV4cGxvcmVyIHtcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICBjb25zdCByZWFkT25seSA9IHRydWU7XG5cbiAgICB0aGlzLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMS50eHRcIiwgcmVhZE9ubHkpO1xuICAgIHRoaXMuYWRkRmlsZVBhdGgoXCJkaXJlY3RvcnkxL2ZpbGUyLnR4dFwiLCByZWFkT25seSk7XG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoXCJkaXJlY3RvcnkxL2RpcmVjdG9yeTNcIiwgcmVhZE9ubHkpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaXJzdFwiLFxuICAgIHJlZmVyZW5jZTogXCJmaXJzdC1leHBsb3JlclwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpcnN0RXhwbG9yZXIiLCJpbml0aWFsaXNlIiwicmVhZE9ubHkiLCJhZGRGaWxlUGF0aCIsImFkZERpcmVjdG9yeVBhdGgiLCJFeHBsb3JlciIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVmZXJlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsdUJBRmlCRCwwQkFFWEMsY0FBTixJQUFLO2dCQUVMLElBQU1DLFdBQVc7Z0JBRWpCLElBQUksQ0FBQ0MsWUFBWSx3QkFBd0JEO2dCQUN6QyxJQUFJLENBQUNDLFlBQVksd0JBQXdCRDtnQkFFekMsSUFBSSxDQUFDRSxpQkFBaUIseUJBQXlCRjtZQUNqRDs7O1dBVm1CRjtFQUFzQks7QUFZekMsaUJBWm1CTCxlQVlaTSxxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsV0FBVztBQUNiIn0=