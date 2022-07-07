"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _class;
    }
});
var _index = require("../../../../index");
var _constants = require("../../../constants");
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
var _class = /*#__PURE__*/ function(DirectoryNameDragEntryItem) {
    _inherits(_class, DirectoryNameDragEntryItem);
    var _super = _createSuper(_class);
    function _class() {
        _classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    _createClass(_class, [
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var path = this.getPath();
                var pathTopmostPath = isPathTopmostPath(path);
                if (pathTopmostPath) {
                    return;
                }
                _get(_getPrototypeOf(_class.prototype), "dragOverHandler", this).call(this, dragElement, element);
            }
        }
    ]);
    return _class;
}(_index.DirectoryNameDragEntryItem);
function isPathTopmostPath(path) {
    var names = path.split(_constants.FORWARD_SLASH), namesLength = names.length, topmostPath = namesLength === 1;
    return topmostPath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgRk9SV0FSRF9TTEFTSCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB7XG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcblxuICAgIGNvbnN0IHBhdGhUb3Btb3N0UGF0aCA9IGlzUGF0aFRvcG1vc3RQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGhUb3Btb3N0UGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1cGVyLmRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQYXRoVG9wbW9zdFBhdGgocGF0aCkge1xuICBjb25zdCBuYW1lcyA9IHBhdGguc3BsaXQoRk9SV0FSRF9TTEFTSCksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICB0b3Btb3N0UGF0aCA9IChuYW1lc0xlbmd0aCA9PT0gMSk7XG5cbiAgcmV0dXJuIHRvcG1vc3RQYXRoO1xufVxuIl0sIm5hbWVzIjpbImRyYWdPdmVySGFuZGxlciIsImRyYWdFbGVtZW50IiwiZWxlbWVudCIsInBhdGgiLCJnZXRQYXRoIiwicGF0aFRvcG1vc3RQYXRoIiwiaXNQYXRoVG9wbW9zdFBhdGgiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm5hbWVzIiwic3BsaXQiLCJGT1JXQVJEX1NMQVNIIiwibmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJ0b3Btb3N0UGF0aCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O3FCQUU4QixtQkFBbUI7eUJBRWhDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLHVCQWNaLEFBZFk7Ozs7Ozs7OztZQUNiQSxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLENBQUNDLFdBQVcsRUFBRUMsT0FBTyxFQUFFO2dCQUNwQyxJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQUUsQUFBQztnQkFFNUIsSUFBTUMsZUFBZSxHQUFHQyxpQkFBaUIsQ0FBQ0gsSUFBSSxDQUFDLEFBQUM7Z0JBRWhELElBQUlFLGVBQWUsRUFBRTtvQkFDbkIsT0FBTztpQkFDUjtnQkFFRCx3Q0FBTUwsaUJBQWUsRUFBckIsSUFBSyxDQUFBLFlBQWlCQyxXQUFXLEVBQUVDLE9BQU8sRUFBRTthQUM3Qzs7OztDQUNGLENBWjRCSyxNQUEwQiwyQkFBQSxDQVl0RDtBQUVELFNBQVNELGlCQUFpQixDQUFDSCxJQUFJLEVBQUU7SUFDL0IsSUFBTUssS0FBSyxHQUFHTCxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsVUFBYSxjQUFBLENBQUMsRUFDakNDLFdBQVcsR0FBR0gsS0FBSyxDQUFDSSxNQUFNLEVBQzFCQyxXQUFXLEdBQUlGLFdBQVcsS0FBSyxDQUFDLEFBQUMsQUFBQztJQUV4QyxPQUFPRSxXQUFXLENBQUM7Q0FDcEIifQ==