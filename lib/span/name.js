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
var _nameSpan = /*#__PURE__*/ _interopRequireDefault(require("../mixins/nameSpan"));
var _easy = require("easy");
var _keyCodes = require("../keyCodes");
var _constants = require("../constants");
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
        "\n\n  border: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  background: transparent;\n  font-weight: inherit;\n  font-family: inherit;\n\n  .editable {\n    border: 1px solid black;\n    padding: 4px;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first;
var NameSpan = /*#__PURE__*/ function(Element) {
    _inherits(NameSpan, Element);
    var _super = _createSuper(NameSpan);
    function NameSpan() {
        _classCallCheck(this, NameSpan);
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
    _createClass(NameSpan, [
        {
            key: "isEditable",
            value: function isEditable() {
                var editable = this.hasClass("editable");
                return editable;
            }
        },
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
                var domElement = this.getDOMElement(), childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                textNode.nodeValue = name; ///
            }
        },
        {
            key: "edit",
            value: function edit() {
                this.focus();
                this.addClass("editable");
                this.addAttribute(_constants.ROLE, _constants.TEXTBOX);
                this.addAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
                var html = this.html(), range = _easy.document.createRange(), selection = _easy.window.getSelection(), domElement = this.getDOMElement(), htmlLength = html.length, childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                range.setStart(textNode, htmlLength);
                range.setEnd(textNode, htmlLength);
                selection.removeAllRanges();
                selection.addRange(range);
                this.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.offKeyDown(this.keyDownHandler);
                this.removeClass("editable");
                this.removeAttribute(_constants.ROLE, _constants.TEXTBOX);
                this.removeAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var editNameSpan = this.edit.bind(this), cancelNameSpan = this.cancel.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onNameSpanChange = this.onChange.bind(this), onNameSpanCancel = this.onCancel.bind(this), offNameSpanChange = this.offChange.bind(this), offNameSpanCancel = this.offCancel.bind(this), isNameSpanEditable = this.isEditable.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    cancelNameSpan: cancelNameSpan,
                    getNameSpanName: getNameSpanName,
                    setNameSpanName: setNameSpanName,
                    onNameSpanChange: onNameSpanChange,
                    onNameSpanCancel: onNameSpanCancel,
                    offNameSpanChange: offNameSpanChange,
                    offNameSpanCancel: offNameSpanCancel,
                    isNameSpanEditable: isNameSpanEditable
                };
            }
        }
    ]);
    return NameSpan;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(NameSpan, "tagName", "span") ///
;
_defineProperty(NameSpan, "defaultProperties", {
    className: "name"
});
Object.assign(NameSpan.prototype, _nameSpan.default);
var _default = (0, _easyWithStyle.default)(NameSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbmFtZVNwYW5NaXhpbnMgZnJvbSBcIi4uL21peGlucy9uYW1lU3BhblwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3csIGRvY3VtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSBmcm9tIFwiLi4va2V5Q29kZXNcIjtcbmltcG9ydCB7IFJPTEUsIFRSVUUsIFRFWFRCT1gsIENPTlRFTlRfRURJVEFCTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOYW1lU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuY2FsbENoYW5nZUhhbmRsZXJzKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5jYWxsQ2FuY2VsSGFuZGxlcnMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBpc0VkaXRhYmxlKCkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5oYXNDbGFzcyhcImVkaXRhYmxlXCIpO1xuXG4gICAgcmV0dXJuIGVkaXRhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgbmFtZSA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5hbWU7ICAvLy9cbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgdGhpcy5hZGRDbGFzcyhcImVkaXRhYmxlXCIpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoUk9MRSwgVEVYVEJPWCk7XG5cbiAgICB0aGlzLmFkZEF0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFLCBUUlVFKTtcblxuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXG4gICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBodG1sTGVuZ3RoID0gaHRtbC5sZW5ndGgsXG4gICAgICAgICAgeyBjaGlsZE5vZGVzIH0gPSBkb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGV4dE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIGh0bWxMZW5ndGgpO1xuXG4gICAgcmFuZ2Uuc2V0RW5kKHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZWRpdGFibGVcIik7XG5cbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShST0xFLCBURVhUQk9YKTtcblxuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUsIFRSVUUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlZGl0TmFtZVNwYW4gPSB0aGlzLmVkaXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY2FuY2VsTmFtZVNwYW4gPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXROYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZVNwYW5OYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZk5hbWVTcGFuQ2hhbmdlID0gdGhpcy5vZmZDaGFuZ2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9mZkNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc05hbWVTcGFuRWRpdGFibGUgPSB0aGlzLmlzRWRpdGFibGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVkaXROYW1lU3BhbixcbiAgICAgIGNhbmNlbE5hbWVTcGFuLFxuICAgICAgZ2V0TmFtZVNwYW5OYW1lLFxuICAgICAgc2V0TmFtZVNwYW5OYW1lLFxuICAgICAgb25OYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9uTmFtZVNwYW5DYW5jZWwsXG4gICAgICBvZmZOYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9mZk5hbWVTcGFuQ2FuY2VsLFxuICAgICAgaXNOYW1lU3BhbkVkaXRhYmxlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiOyAgLy8vXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihOYW1lU3Bhbi5wcm90b3R5cGUsIG5hbWVTcGFuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVTcGFuKWBcblxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXG4gIC5lZGl0YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiTmFtZVNwYW4iLCJrZXlEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImtleUNvZGUiLCJFTlRFUl9LRVlfQ09ERSIsImNhbGxDaGFuZ2VIYW5kbGVycyIsInByZXZlbnREZWZhdWx0IiwiRVNDQVBFX0tFWV9DT0RFIiwiY2FsbENhbmNlbEhhbmRsZXJzIiwiaXNFZGl0YWJsZSIsImVkaXRhYmxlIiwiaGFzQ2xhc3MiLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImVkaXQiLCJmb2N1cyIsImFkZENsYXNzIiwiYWRkQXR0cmlidXRlIiwiUk9MRSIsIlRFWFRCT1giLCJDT05URU5UX0VESVRBQkxFIiwiVFJVRSIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImh0bWxMZW5ndGgiLCJsZW5ndGgiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwib25LZXlEb3duIiwiY2FuY2VsIiwib2ZmS2V5RG93biIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyZW50Q29udGV4dCIsImVkaXROYW1lU3BhbiIsImJpbmQiLCJjYW5jZWxOYW1lU3BhbiIsImdldE5hbWVTcGFuTmFtZSIsInNldE5hbWVTcGFuTmFtZSIsIm9uTmFtZVNwYW5DaGFuZ2UiLCJvbkNoYW5nZSIsIm9uTmFtZVNwYW5DYW5jZWwiLCJvbkNhbmNlbCIsIm9mZk5hbWVTcGFuQ2hhbmdlIiwib2ZmQ2hhbmdlIiwib2ZmTmFtZVNwYW5DYW5jZWwiLCJvZmZDYW5jZWwiLCJpc05hbWVTcGFuRWRpdGFibGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibmFtZVNwYW5NaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZIQTs7O2VBQUE7OztrRUEzSHNCO3lCQUVTOzZEQUVKO29CQUVlO3dCQUNNO3lCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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