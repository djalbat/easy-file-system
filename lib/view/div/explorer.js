"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _entries = _interopRequireDefault(require("../div/entries"));
var _drop = _interopRequireDefault(require("../../mixins/drop"));
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
        },
        {
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement(_entries.default, null));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBFbnRyaWVzRGl2IGZyb20gXCIuLi9kaXYvZW50cmllc1wiO1xuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9kcm9wXCI7XG5cbmNsYXNzIEV4cGxvcmVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJkcm9wIVwiKVxuICB9XG5cbiAgZHJhZ091dEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgb3V0XCIpXG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgb3ZlclwiKVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ091dCh0aGlzLmRyYWdPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ091dCh0aGlzLmRyYWdPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8RW50cmllc0Rpdi8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKEV4cGxvcmVyRGl2LnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlckRpdilgXG5cbiAgaGVpZ2h0OiAyMHJlbTtcbiAgZ3JpZC1hcmVhOiBleHBsb3Jlci1kaXY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUVQLFFBQWdCO0lBQ2hCLEtBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9ESixvRkFNdEM7Ozs7Ozs7SUF4RE0sV0FBVztjQUFYLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7Z0VBQVgsV0FBVzs7aUJBQVgsV0FBVzs7WUFDZixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsV0FBVztnQkFDckIsT0FBTyxDQUFDLEdBQUcsRUFBQyxLQUFPOzs7O1lBR3JCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxXQUFXO2dCQUN4QixPQUFPLENBQUMsR0FBRyxFQUFDLFFBQVU7Ozs7WUFHeEIsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLFdBQVc7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLEVBQUMsU0FBVzs7OztZQUd6QixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNELE1BQU0sTUFBTSxXQUFXO3FCQUV2QixTQUFTLE1BQU0sY0FBYztxQkFFN0IsVUFBVSxNQUFNLGVBQWU7cUJBRS9CLFVBQVU7Ozs7WUFHakIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSixPQUFPLE1BQU0sV0FBVztxQkFFeEIsVUFBVSxNQUFNLGNBQWM7cUJBRTlCLFdBQVcsTUFBTSxlQUFlO3FCQUVoQyxXQUFXOzs7O1lBR2xCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7eURBcENRLFFBQWdCOzs7O1dBR2pDLFdBQVc7bUJBTE8sS0FBTTtnQkFLeEIsV0FBVyxHQXlDUixPQUFPLElBQUcsR0FBSztnQkF6Q2xCLFdBQVcsR0EyQ1IsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxRQUFVOztBQUl6QixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBbERaLEtBQW1CO21CQUxwQixjQUFpQixVQXlEZCxXQUFXIn0=