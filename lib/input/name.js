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
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
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
                var html = this.html(), range = _easy.document.createRange(), selection = _easy.window.getSelection(), domElement = this.getDOMElement(), htmlLength = html.length, childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                range.setStart(textNode, htmlLength);
                range.setEnd(textNode, htmlLength);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgSU5MSU5FX0JMT0NLIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93LCBkb2N1bWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBFTlRFUl9LRVlfQ09ERSwgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2tleUNvZGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOYW1lSW5wdXQgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgICAgbmFtZSA9IGh0bWw7ICAvLy9cblxuICAgICAgY2hhbmdlSGFuZGxlcihuYW1lKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjYW5jZWxIYW5kbGVyID0gb25DYW5jZWw7IC8vL1xuXG4gICAgICBjYW5jZWxIYW5kbGVyKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgY29uc3QgaHRtbCA9IG5hbWU7ICAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IElOTElORV9CTE9DSztcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcblxuICAgIHRoaXMuZm9jdXMoKTtcblxuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXG4gICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBodG1sTGVuZ3RoID0gaHRtbC5sZW5ndGgsXG4gICAgICAgICAgeyBjaGlsZE5vZGVzIH0gPSBkb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGV4dE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIGh0bWxMZW5ndGgpO1xuXG4gICAgcmFuZ2Uuc2V0RW5kKHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93TmFtZUlucHV0ID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVOYW1lSW5wdXQgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZUlucHV0TmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd05hbWVJbnB1dCxcbiAgICAgIGhpZGVOYW1lSW5wdXQsXG4gICAgICBzZXROYW1lSW5wdXROYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiOyAgLy8vXG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcIm9uQ2FuY2VsXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcm9sZTogXCJ0ZXh0Ym94XCIsXG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIixcbiAgICBjb250ZW50RWRpdGFibGU6IFwidHJ1ZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShOYW1lSW5wdXQpYFxuICBcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJOYW1lSW5wdXQiLCJrZXlEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImtleUNvZGUiLCJFTlRFUl9LRVlfQ09ERSIsIm9uQ2hhbmdlIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJodG1sIiwibmFtZSIsInByZXZlbnREZWZhdWx0IiwiRVNDQVBFX0tFWV9DT0RFIiwib25DYW5jZWwiLCJjYW5jZWxIYW5kbGVyIiwic2V0TmFtZSIsInNob3ciLCJkaXNwbGF5IiwiSU5MSU5FX0JMT0NLIiwiZm9jdXMiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImh0bWxMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXh0Tm9kZSIsInNldFN0YXJ0Iiwic2V0RW5kIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJoaWRlIiwiZGlkTW91bnQiLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZktleURvd24iLCJwYXJlbnRDb250ZXh0Iiwic2hvd05hbWVJbnB1dCIsImJpbmQiLCJoaWRlTmFtZUlucHV0Iiwic2V0TmFtZUlucHV0TmFtZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsInJvbGUiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBHQTs7O2VBQUE7OztrRUF4R3NCO3lCQUVTO3lCQUVGO29CQUNhO3dCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQUEsQUFBTUUsMEJBOEZILEFBOUZIO2NBQU1B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