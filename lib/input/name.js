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
var _nameInput = /*#__PURE__*/ _interopRequireDefault(require("../mixins/nameInput"));
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
                _this.callChangeHandlers();
                event.preventDefault();
            }
            if (keyCode === _keyCodes.ESCAPE_KEY_CODE) {
                _this.callCancelHandlers();
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
                var showNameInput = this.show.bind(this), hideNameInput = this.hide.bind(this), getNameInputName = this.getName.bind(this), setNameInputName = this.setName.bind(this), onNameInputChange = this.onChange.bind(this), onNameInputCancel = this.onCancel.bind(this), offNameInputChange = this.offChange.bind(this), offNameInputCancel = this.offCancel.bind(this), isNameInputDisplayed = this.isDisplayed.bind(this); ///
                return {
                    showNameInput: showNameInput,
                    hideNameInput: hideNameInput,
                    getNameInputName: getNameInputName,
                    setNameInputName: setNameInputName,
                    onNameInputChange: onNameInputChange,
                    onNameInputCancel: onNameInputCancel,
                    offNameInputChange: offNameInputChange,
                    offNameInputCancel: offNameInputCancel,
                    isNameInputDisplayed: isNameInputDisplayed
                };
            }
        }
    ]);
    return NameInput;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(NameInput, "tagName", "span") ///
;
_defineProperty(NameInput, "defaultProperties", {
    role: "textbox",
    className: "name",
    contentEditable: "true"
});
Object.assign(NameInput.prototype, _nameInput.default);
var _default = (0, _easyWithStyle.default)(NameInput)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG5hbWVJbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25hbWVJbnB1dFwiO1xuXG5pbXBvcnQgeyBOT05FLCBJTkxJTkVfQkxPQ0sgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3csIGRvY3VtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSBmcm9tIFwiLi4va2V5Q29kZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE5hbWVJbnB1dCBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuY2FsbENoYW5nZUhhbmRsZXJzKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5jYWxsQ2FuY2VsSGFuZGxlcnMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICBuYW1lID0gaHRtbDsgIC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICBjb25zdCBodG1sID0gbmFtZTsgIC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gSU5MSU5FX0JMT0NLO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuXG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcbiAgICAgICAgICBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGh0bWxMZW5ndGggPSBodG1sLmxlbmd0aCxcbiAgICAgICAgICB7IGNoaWxkTm9kZXMgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICByYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICByYW5nZS5zZXRFbmQodGV4dE5vZGUsIGh0bWxMZW5ndGgpO1xuXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IE5PTkU7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd05hbWVJbnB1dCA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlTmFtZUlucHV0ID0gdGhpcy5oaWRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldE5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZUlucHV0TmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvbk5hbWVJbnB1dENoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25OYW1lSW5wdXRDYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZk5hbWVJbnB1dENoYW5nZSA9IHRoaXMub2ZmQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZk5hbWVJbnB1dENhbmNlbCA9IHRoaXMub2ZmQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzTmFtZUlucHV0RGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd05hbWVJbnB1dCxcbiAgICAgIGhpZGVOYW1lSW5wdXQsXG4gICAgICBnZXROYW1lSW5wdXROYW1lLFxuICAgICAgc2V0TmFtZUlucHV0TmFtZSxcbiAgICAgIG9uTmFtZUlucHV0Q2hhbmdlLFxuICAgICAgb25OYW1lSW5wdXRDYW5jZWwsXG4gICAgICBvZmZOYW1lSW5wdXRDaGFuZ2UsXG4gICAgICBvZmZOYW1lSW5wdXRDYW5jZWwsXG4gICAgICBpc05hbWVJbnB1dERpc3BsYXllZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjsgIC8vL1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICByb2xlOiBcInRleHRib3hcIixcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogXCJ0cnVlXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihOYW1lSW5wdXQucHJvdG90eXBlLCBuYW1lSW5wdXRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZUlucHV0KWBcbiAgXG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIk5hbWVJbnB1dCIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsIkVOVEVSX0tFWV9DT0RFIiwiY2FsbENoYW5nZUhhbmRsZXJzIiwicHJldmVudERlZmF1bHQiLCJFU0NBUEVfS0VZX0NPREUiLCJjYWxsQ2FuY2VsSGFuZGxlcnMiLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwic2hvdyIsImRpc3BsYXkiLCJJTkxJTkVfQkxPQ0siLCJmb2N1cyIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiaHRtbExlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRleHROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImhpZGUiLCJOT05FIiwiZGlkTW91bnQiLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZktleURvd24iLCJwYXJlbnRDb250ZXh0Iiwic2hvd05hbWVJbnB1dCIsImJpbmQiLCJoaWRlTmFtZUlucHV0IiwiZ2V0TmFtZUlucHV0TmFtZSIsInNldE5hbWVJbnB1dE5hbWUiLCJvbk5hbWVJbnB1dENoYW5nZSIsIm9uQ2hhbmdlIiwib25OYW1lSW5wdXRDYW5jZWwiLCJvbkNhbmNlbCIsIm9mZk5hbWVJbnB1dENoYW5nZSIsIm9mZkNoYW5nZSIsIm9mZk5hbWVJbnB1dENhbmNlbCIsIm9mZkNhbmNlbCIsImlzTmFtZUlucHV0RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwicm9sZSIsImNsYXNzTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5hbWVJbnB1dE1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0hBOzs7ZUFBQTs7O2tFQXBIc0I7eUJBRVM7OERBRUg7eUJBRU87b0JBQ087d0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQUEsQUFBTUUsMEJBc0dILEFBdEdIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNKQywrQ0FBQUEsa0JBQWlCLFNBQUNDLE9BQU9DLFNBQVk7WUFDbkMsSUFBTSxBQUFFQyxVQUFZRixNQUFaRTtZQUVSLElBQUlBLFlBQVlDLHdCQUFjLEVBQUU7Z0JBQzlCLE1BQUtDLGtCQUFrQjtnQkFFdkJKLE1BQU1LLGNBQWM7WUFDdEIsQ0FBQztZQUVELElBQUlILFlBQVlJLHlCQUFlLEVBQUU7Z0JBQy9CLE1BQUtDLGtCQUFrQjtnQkFFdkJQLE1BQU1LLGNBQWM7WUFDdEIsQ0FBQztRQUNIOzs7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