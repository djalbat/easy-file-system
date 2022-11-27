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
        "\n  \n  outline: none;\n  font-size: inherit;\n  text-align: left;\n  font-weight: inherit;\n  font-family: inherit;\n  \n"
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
                var onChange = _this.properties.onChange, changeHandler = onChange; ///
                changeHandler();
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
            key: "getName",
            value: function getName() {
                var html = this.html(), name = html; ///
                return name;
            }
        },
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
                var display = _constants.NONE;
                this.display(display);
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
                var showNameInput = this.show.bind(this), hideNameInput = this.hide.bind(this), getNameInputName = this.getName.bind(this), setNameInputName = this.setName.bind(this), isNameInputDisplayed = this.isDisplayed.bind(this); ///
                return {
                    showNameInput: showNameInput,
                    hideNameInput: hideNameInput,
                    getNameInputName: getNameInputName,
                    setNameInputName: setNameInputName,
                    isNameInputDisplayed: isNameInputDisplayed
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTk9ORSwgSU5MSU5FX0JMT0NLIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93LCBkb2N1bWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBFTlRFUl9LRVlfQ09ERSwgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2tleUNvZGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOYW1lSW5wdXQgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY2FuY2VsSGFuZGxlciA9IG9uQ2FuY2VsOyAvLy9cblxuICAgICAgY2FuY2VsSGFuZGxlcigpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGh0bWwgPSBuYW1lOyAgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBJTkxJTkVfQkxPQ0s7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG5cbiAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gTk9ORTtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93TmFtZUlucHV0ID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVOYW1lSW5wdXQgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXROYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldE5hbWVJbnB1dE5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNOYW1lSW5wdXREaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TmFtZUlucHV0LFxuICAgICAgaGlkZU5hbWVJbnB1dCxcbiAgICAgIGdldE5hbWVJbnB1dE5hbWUsXG4gICAgICBzZXROYW1lSW5wdXROYW1lLFxuICAgICAgaXNOYW1lSW5wdXREaXNwbGF5ZWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwib25DYW5jZWxcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICByb2xlOiBcInRleHRib3hcIixcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogXCJ0cnVlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVJbnB1dClgXG4gIFxuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJOYW1lSW5wdXQiLCJrZXlEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImtleUNvZGUiLCJFTlRFUl9LRVlfQ09ERSIsIm9uQ2hhbmdlIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIkVTQ0FQRV9LRVlfQ09ERSIsIm9uQ2FuY2VsIiwiY2FuY2VsSGFuZGxlciIsImdldE5hbWUiLCJodG1sIiwibmFtZSIsInNldE5hbWUiLCJzaG93IiwiZGlzcGxheSIsIklOTElORV9CTE9DSyIsImZvY3VzIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJodG1sTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGV4dE5vZGUiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiaGlkZSIsIk5PTkUiLCJkaWRNb3VudCIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmS2V5RG93biIsInBhcmVudENvbnRleHQiLCJzaG93TmFtZUlucHV0IiwiYmluZCIsImhpZGVOYW1lSW5wdXQiLCJnZXROYW1lSW5wdXROYW1lIiwic2V0TmFtZUlucHV0TmFtZSIsImlzTmFtZUlucHV0RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJyb2xlIiwiY2xhc3NOYW1lIiwiY29udGVudEVkaXRhYmxlIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxSEE7OztlQUFBOzs7a0VB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