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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var FirstExplorer = /*#__PURE__*/ function(Explorer) {
    _inherits(FirstExplorer, Explorer);
    var _super = _createSuper(FirstExplorer);
    function FirstExplorer() {
        _classCallCheck(this, FirstExplorer);
        return _super.apply(this, arguments);
    }
    _createClass(FirstExplorer, [
        {
            key: "initialise",
            value: function initialise() {
                _get(_getPrototypeOf(FirstExplorer.prototype), "initialise", this).call(this);
                this.addFilePath("directory1/file1.txt");
                this.addFilePath("directory1/file2.txt");
                this.addDirectoryPath("directory1/directory3");
            }
        }
    ]);
    return FirstExplorer;
}(_index.Explorer);
_defineProperty(FirstExplorer, "defaultProperties", {
    className: "first",
    reference: "first-explorer"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZXhwbG9yZXIvZmlyc3QuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cGxvcmVyIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RFeHBsb3JlciBleHRlbmRzIEV4cGxvcmVyIHtcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICB0aGlzLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMS50eHRcIik7XG4gICAgdGhpcy5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTEvZmlsZTIudHh0XCIpO1xuXG4gICAgdGhpcy5hZGREaXJlY3RvcnlQYXRoKFwiZGlyZWN0b3J5MS9kaXJlY3RvcnkzXCIpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaXJzdFwiLFxuICAgIHJlZmVyZW5jZTogXCJmaXJzdC1leHBsb3JlclwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpcnN0RXhwbG9yZXIiLCJpbml0aWFsaXNlIiwiYWRkRmlsZVBhdGgiLCJhZGREaXJlY3RvcnlQYXRoIiwiRXhwbG9yZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInJlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gscUJBRmlCRCwwQkFFWEMsY0FBTixJQUFLO2dCQUVMLElBQUksQ0FBQ0MsV0FBVyxDQUFDO2dCQUNqQixJQUFJLENBQUNBLFdBQVcsQ0FBQztnQkFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUN4Qjs7O1dBUm1CSDtFQUFzQkksZUFBUTtBQVVqRCxnQkFWbUJKLGVBVVpLLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxXQUFXO0FBQ2IifQ==