"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _drop = _interopRequireDefault(require("../mixins/drop"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  height: 20rem;\n  grid-area: explorer-div;\n  background-color: red;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ExplorerDiv = /*#__PURE__*/ function(Element1) {
    _inherits(ExplorerDiv, Element1);
    function ExplorerDiv() {
        _classCallCheck(this, ExplorerDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(ExplorerDiv).apply(this, arguments));
    }
    _createClass(ExplorerDiv, [
        {
            key: "dropHandler",
            value: function dropHandler(dragElement) {
                console.log("drop!");
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement) {
                console.log("drag out");
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement) {
                console.log("drag over");
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onDrop(this.dropHandler, this);
                this.onDragOut(this.dragOutHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                this.enableDrop();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offDrop(this.dropHandler, this);
                this.offDragOut(this.dragOutHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                this.disableDrop();
            }
        }
    ]);
    return ExplorerDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ExplorerDiv, "tagName", "div");
_defineProperty(ExplorerDiv, "defaultProperties", {
    className: "explorer"
});
Object.assign(ExplorerDiv.prototype, _drop.default);
var _default = (0, _easyWithStyle).default(ExplorerDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZXhwbG9yZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgZHJvcE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2Ryb3BcIjtcblxuY2xhc3MgRXhwbG9yZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImRyb3AhXCIpXG4gIH1cblxuICBkcmFnT3V0SGFuZGxlcihkcmFnRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBvdXRcIilcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBvdmVyXCIpXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3V0KHRoaXMuZHJhZ091dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3V0KHRoaXMuZHJhZ091dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXJEaXYucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyRGl2KWBcblxuICBoZWlnaHQ6IDIwcmVtO1xuICBncmlkLWFyZWE6IGV4cGxvcmVyLWRpdjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRVAsS0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNENELG9GQU10Qzs7Ozs7OztJQWhETSxXQUFXO2NBQVgsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQUNmLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxXQUFXO2dCQUNyQixPQUFPLENBQUMsR0FBRyxFQUFDLEtBQU87Ozs7WUFHckIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFdBQVc7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLEVBQUMsUUFBVTs7OztZQUd4QixHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsV0FBVztnQkFDekIsT0FBTyxDQUFDLEdBQUcsRUFBQyxTQUFXOzs7O1lBR3pCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsTUFBTSxNQUFNLFdBQVc7cUJBRXZCLFNBQVMsTUFBTSxjQUFjO3FCQUU3QixVQUFVLE1BQU0sZUFBZTtxQkFFL0IsVUFBVTs7OztZQUdqQixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNKLE9BQU8sTUFBTSxXQUFXO3FCQUV4QixVQUFVLE1BQU0sY0FBYztxQkFFOUIsV0FBVyxNQUFNLGVBQWU7cUJBRWhDLFdBQVc7Ozs7V0E5QmQsV0FBVzttQkFKTyxLQUFNO2dCQUl4QixXQUFXLEdBaUNSLE9BQU8sSUFBRyxHQUFLO2dCQWpDbEIsV0FBVyxHQW1DUixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFFBQVU7O0FBSXpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUExQ1osS0FBZ0I7bUJBSmpCLGNBQWlCLFVBZ0RkLFdBQVcifQ==