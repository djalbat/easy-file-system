"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = _class;
function isPathTopmostPath(path) {
    var names = path.split(_constants.FORWARD_SLASH), namesLength = names.length, topmostPath = namesLength === 1;
    return topmostPath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lLmpzIiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IEZPUldBUkRfU0xBU0ggfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ge1xuICBkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG5cbiAgICBjb25zdCBwYXRoVG9wbW9zdFBhdGggPSBpc1BhdGhUb3Btb3N0UGF0aChwYXRoKTtcblxuICAgIGlmIChwYXRoVG9wbW9zdFBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdXBlci5kcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3RQYXRoKHBhdGgpIHtcbiAgY29uc3QgbmFtZXMgPSBwYXRoLnNwbGl0KEZPUldBUkRfU0xBU0gpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgdG9wbW9zdFBhdGggPSAobmFtZXNMZW5ndGggPT09IDEpO1xuXG4gIHJldHVybiB0b3Btb3N0UGF0aDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImVsZW1lbnQiLCJwYXRoIiwiZ2V0UGF0aCIsInBhdGhUb3Btb3N0UGF0aCIsImlzUGF0aFRvcG1vc3RQYXRoIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJuYW1lcyIsInNwbGl0IiwiRk9SV0FSRF9TTEFTSCIsIm5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwidG9wbW9zdFBhdGgiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUyQyxHQUFtQixDQUFuQixNQUFtQjtBQUVoQyxHQUFvQixDQUFwQixVQUFvQjs7Ozs7Ozs7Ozs7Ozs7OzhEQUpsRDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7MEJBQUE7Ozs7Ozs7Ozs7U0FBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7O3dDQUFBOzs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLEdBQUssd0JBQUwsUUFBUTtpREFOdkI7OztxQ0FBQTs7Ozs7WUFPRUEsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsQ0FBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDckMsR0FBSyxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPO2dCQUV6QixHQUFLLENBQUNDLGVBQWUsR0FBR0MsaUJBQWlCLENBQUNILElBQUk7Z0JBRTlDLEVBQUUsRUFBRUUsZUFBZSxFQUFFLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsQ0FBQzt3REFFS0wsQ0FBZSxrQkFBckIsSUFBSyxhQUFpQkMsV0FBVyxFQUFFQyxPQUFPLENDaEI5QyxDRGdCZ0Q7WUFDOUMsQ0FBQzs7TUFqQkg7O0VBTTZCSyxNQUEwQjt3QkFOdkQ7U0FvQlNELGlCQUFpQixDQUFDSCxJQUFJLEVBQUUsQ0FBQztJQUNoQyxHQUFLLENBQUNLLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxLQUFLLENBQUNDLFVBQWEsaUJBQ2hDQyxXQUFXLEdBQUdILEtBQUssQ0FBQ0ksTUFBTSxFQUMxQkMsV0FBVyxHQUFJRixXQUFXLEtBQUssQ0FBQztJQUV0QyxNQUFNLENBQUNFLFdBQVc7QUFDcEIsQ0FBQyJ9