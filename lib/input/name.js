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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _constants = require("../constants");
var _easy = require("easy");
var _keyCodes = require("../keyCodes");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
    "@swc/helpers - typeof";
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-weight: inherit;\n  font-family: inherit;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var NameInput = /*#__PURE__*/ function(Element) {
    _inherits(NameInput, Element);
    var _super = _createSuper(NameInput);
    function NameInput() {
        _classCallCheck(this, NameInput);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            if (keyCode === _keyCodes.ENTER_KEY_CODE) {
                var onChange = _this.properties.onChange, changeHandler = onChange, html = _this.html(), name = html; ///
                changeHandler(name);
                event.preventDefault();
            }
            if (keyCode === _keyCodes.ESCAPE_KEY_CODE) {
                var onCancel = _this.properties.onCancel, cancelHandler = onCancel; ///
                cancelHandler();
                event.preventDefault();
            }
        });
        return _this;
    }
    _createClass(NameInput, [
        {
            key: "setName",
            value: function setName(name) {
                var html = name; ///
                this.html(html);
            }
        },
        {
            key: "show",
            value: function show() {
                var display = _constants.INLINE_BLOCK;
                this.display(display);
                this.focus();
                var domElement = this.getDOMElement(), selection = _easy.window.getSelection(), range = _easy.document.createRange();
                range.selectNodeContents(domElement);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        },
        {
            key: "hide",
            value: function hide() {
                _get(_getPrototypeOf(NameInput.prototype), "hide", this).call(this);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showNameInput = this.show.bind(this), hideNameInput = this.hide.bind(this), setNameInputName = this.setName.bind(this); ///
                return {
                    showNameInput: showNameInput,
                    hideNameInput: hideNameInput,
                    setNameInputName: setNameInputName
                };
            }
        }
    ]);
    return NameInput;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(NameInput, "tagName", "span") ///
;
_defineProperty(NameInput, "ignoredProperties", [
    "onChange",
    "onCancel"
]);
_defineProperty(NameInput, "defaultProperties", {
    role: "textbox",
    className: "name",
    contentEditable: "true"
});
var _default = (0, _easyWithStyle.default)(NameInput)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBJTkxJTkVfQkxPQ0sgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3csIGRvY3VtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSBmcm9tIFwiLi4va2V5Q29kZXNcIjtcblxuY2xhc3MgTmFtZUlucHV0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICAgIGNoYW5nZUhhbmRsZXIobmFtZSk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY2FuY2VsSGFuZGxlciA9IG9uQ2FuY2VsOyAvLy9cblxuICAgICAgY2FuY2VsSGFuZGxlcigpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGh0bWwgPSBuYW1lOyAgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBJTkxJTkVfQkxPQ0s7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG5cbiAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhkb21FbGVtZW50KTtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93TmFtZUlucHV0ID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVOYW1lSW5wdXQgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZUlucHV0TmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd05hbWVJbnB1dCxcbiAgICAgIGhpZGVOYW1lSW5wdXQsXG4gICAgICBzZXROYW1lSW5wdXROYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiOyAgLy8vXG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcIm9uQ2FuY2VsXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcm9sZTogXCJ0ZXh0Ym94XCIsXG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIixcbiAgICBjb250ZW50RWRpdGFibGU6IFwidHJ1ZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShOYW1lSW5wdXQpYFxuICBcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk5hbWVJbnB1dCIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsIkVOVEVSX0tFWV9DT0RFIiwib25DaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY2hhbmdlSGFuZGxlciIsImh0bWwiLCJuYW1lIiwicHJldmVudERlZmF1bHQiLCJFU0NBUEVfS0VZX0NPREUiLCJvbkNhbmNlbCIsImNhbmNlbEhhbmRsZXIiLCJzZXROYW1lIiwic2hvdyIsImRpc3BsYXkiLCJJTkxJTkVfQkxPQ0siLCJmb2N1cyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJoaWRlIiwiZGlkTW91bnQiLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZktleURvd24iLCJwYXJlbnRDb250ZXh0Iiwic2hvd05hbWVJbnB1dCIsImJpbmQiLCJoaWRlTmFtZUlucHV0Iiwic2V0TmFtZUlucHV0TmFtZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsInJvbGUiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStGQTs7O2VBQUE7OztrRUE3RnNCO3lCQUVPO29CQUNhO3dCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFBLEFBQU1BLDBCQXVGSCxBQXZGSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkMsK0NBQUFBLGtCQUFpQixTQUFDQyxPQUFPQyxTQUFZO1lBQ25DLElBQU0sQUFBRUMsVUFBWUYsTUFBWkU7WUFFUixJQUFJQSxZQUFZQyx3QkFBYyxFQUFFO2dCQUM5QixJQUFNLEFBQUVDLFdBQWEsTUFBS0MsVUFBVSxDQUE1QkQsVUFDRkUsZ0JBQWdCRixVQUNoQkcsT0FBTyxNQUFLQSxJQUFJLElBQ2hCQyxPQUFPRCxNQUFPLEdBQUc7Z0JBRXZCRCxjQUFjRTtnQkFFZFIsTUFBTVMsY0FBYztZQUN0QixDQUFDO1lBRUQsSUFBSVAsWUFBWVEseUJBQWUsRUFBRTtnQkFDL0IsSUFBTSxBQUFFQyxXQUFhLE1BQUtOLFVBQVUsQ0FBNUJNLFVBQ0ZDLGdCQUFnQkQsVUFBVSxHQUFHO2dCQUVuQ0M7Z0JBRUFaLE1BQU1TLGNBQWM7WUFDdEIsQ0FBQztRQUNIOzs7aUJBdkJJWDs7WUF5QkplLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxJQUFJLEVBQUU7Z0JBQ1osSUFBTUQsT0FBT0MsTUFBTyxHQUFHO2dCQUV2QixJQUFJLENBQUNELElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPO2dCQUNMLElBQU1DLFVBQVVDLHVCQUFZO2dCQUU1QixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7Z0JBRWIsSUFBSSxDQUFDRSxLQUFLO2dCQUVWLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxZQUFZQyxZQUFNLENBQUNDLFlBQVksSUFDL0JDLFFBQVFDLGNBQVEsQ0FBQ0MsV0FBVztnQkFFbENGLE1BQU1HLGtCQUFrQixDQUFDUjtnQkFFekJFLFVBQVVPLGVBQWU7Z0JBRXpCUCxVQUFVUSxRQUFRLENBQUNMO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU87Z0JBQ0wscUJBbERFL0Isc0JBa0RJK0IsUUFBTixJQUFLO1lBQ1A7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNoQyxjQUFjO1lBQ3BDOzs7WUFFQWlDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQ2xDLGNBQWM7WUFDckM7OztZQUVBbUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsSUFBSSxDQUFDLElBQUksR0FDbkNDLGdCQUFnQixJQUFJLENBQUNSLElBQUksQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDbkNFLG1CQUFtQixJQUFJLENBQUN6QixPQUFPLENBQUN1QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXJELE9BQVE7b0JBQ05ELGVBQUFBO29CQUNBRSxlQUFBQTtvQkFDQUMsa0JBQUFBO2dCQUNGO1lBQ0Y7OztXQXZFSXhDO21CQUFrQnlDLGFBQU87QUF5RTdCLGdCQXpFSXpDLFdBeUVHMEMsV0FBVSxRQUFTLEdBQUc7O0FBRTdCLGdCQTNFSTFDLFdBMkVHMkMscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGdCQWhGSTNDLFdBZ0ZHNEMscUJBQW9CO0lBQ3pCQyxNQUFNO0lBQ05DLFdBQVc7SUFDWEMsaUJBQWlCO0FBQ25CO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2hEIn0=