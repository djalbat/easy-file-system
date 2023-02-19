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
                var editNameInput = this.edit.bind(this), cancelNameInput = this.cancel.bind(this), getNameInputName = this.getName.bind(this), setNameInputName = this.setName.bind(this), onNameInputChange = this.onChange.bind(this), onNameInputCancel = this.onCancel.bind(this), offNameInputChange = this.offChange.bind(this), offNameInputCancel = this.offCancel.bind(this), isNameInputEditable = this.isEditable.bind(this); ///
                return {
                    editNameInput: editNameInput,
                    cancelNameInput: cancelNameInput,
                    getNameInputName: getNameInputName,
                    setNameInputName: setNameInputName,
                    onNameInputChange: onNameInputChange,
                    onNameInputCancel: onNameInputCancel,
                    offNameInputChange: offNameInputChange,
                    offNameInputCancel: offNameInputCancel,
                    isNameInputEditable: isNameInputEditable
                };
            }
        }
    ]);
    return NameInput;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(NameInput, "tagName", "span") ///
;
_defineProperty(NameInput, "defaultProperties", {
    className: "name"
});
Object.assign(NameInput.prototype, _nameInput.default);
var _default = (0, _easyWithStyle.default)(NameInput)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG5hbWVJbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25hbWVJbnB1dFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCB3aW5kb3csIGRvY3VtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSBmcm9tIFwiLi4va2V5Q29kZXNcIjtcbmltcG9ydCB7IFJPTEUsIFRSVUUsIFRFWFRCT1gsIENPTlRFTlRfRURJVEFCTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOYW1lSW5wdXQgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLmNhbGxDaGFuZ2VIYW5kbGVycygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuY2FsbENhbmNlbEhhbmRsZXJzKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNFZGl0YWJsZSgpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuaGFzQ2xhc3MoXCJlZGl0YWJsZVwiKTtcblxuICAgIHJldHVybiBlZGl0YWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICB7IGNoaWxkTm9kZXMgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSBuYW1lOyAgLy8vXG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuZm9jdXMoKTtcblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJlZGl0YWJsZVwiKTtcblxuICAgIHRoaXMuYWRkQXR0cmlidXRlKFJPTEUsIFRFWFRCT1gpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImVkaXRhYmxlXCIpO1xuXG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoUk9MRSwgVEVYVEJPWCk7XG5cbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFLCBUUlVFKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZWRpdE5hbWVJbnB1dCA9IHRoaXMuZWRpdC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjYW5jZWxOYW1lSW5wdXQgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXROYW1lSW5wdXROYW1lID0gdGhpcy5nZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldE5hbWVJbnB1dE5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25OYW1lSW5wdXRDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uTmFtZUlucHV0Q2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZOYW1lSW5wdXRDaGFuZ2UgPSB0aGlzLm9mZkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZOYW1lSW5wdXRDYW5jZWwgPSB0aGlzLm9mZkNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc05hbWVJbnB1dEVkaXRhYmxlID0gdGhpcy5pc0VkaXRhYmxlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlZGl0TmFtZUlucHV0LFxuICAgICAgY2FuY2VsTmFtZUlucHV0LFxuICAgICAgZ2V0TmFtZUlucHV0TmFtZSxcbiAgICAgIHNldE5hbWVJbnB1dE5hbWUsXG4gICAgICBvbk5hbWVJbnB1dENoYW5nZSxcbiAgICAgIG9uTmFtZUlucHV0Q2FuY2VsLFxuICAgICAgb2ZmTmFtZUlucHV0Q2hhbmdlLFxuICAgICAgb2ZmTmFtZUlucHV0Q2FuY2VsLFxuICAgICAgaXNOYW1lSW5wdXRFZGl0YWJsZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjsgIC8vL1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oTmFtZUlucHV0LnByb3RvdHlwZSwgbmFtZUlucHV0TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVJbnB1dClgXG5cbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICAuZWRpdGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIk5hbWVJbnB1dCIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsIkVOVEVSX0tFWV9DT0RFIiwiY2FsbENoYW5nZUhhbmRsZXJzIiwicHJldmVudERlZmF1bHQiLCJFU0NBUEVfS0VZX0NPREUiLCJjYWxsQ2FuY2VsSGFuZGxlcnMiLCJpc0VkaXRhYmxlIiwiZWRpdGFibGUiLCJoYXNDbGFzcyIsImdldE5hbWUiLCJodG1sIiwibmFtZSIsInNldE5hbWUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRleHROb2RlIiwibm9kZVZhbHVlIiwiZWRpdCIsImZvY3VzIiwiYWRkQ2xhc3MiLCJhZGRBdHRyaWJ1dGUiLCJST0xFIiwiVEVYVEJPWCIsIkNPTlRFTlRfRURJVEFCTEUiLCJUUlVFIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiaHRtbExlbmd0aCIsImxlbmd0aCIsInNldFN0YXJ0Iiwic2V0RW5kIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJvbktleURvd24iLCJjYW5jZWwiLCJvZmZLZXlEb3duIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnRDb250ZXh0IiwiZWRpdE5hbWVJbnB1dCIsImJpbmQiLCJjYW5jZWxOYW1lSW5wdXQiLCJnZXROYW1lSW5wdXROYW1lIiwic2V0TmFtZUlucHV0TmFtZSIsIm9uTmFtZUlucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJvbk5hbWVJbnB1dENhbmNlbCIsIm9uQ2FuY2VsIiwib2ZmTmFtZUlucHV0Q2hhbmdlIiwib2ZmQ2hhbmdlIiwib2ZmTmFtZUlucHV0Q2FuY2VsIiwib2ZmQ2FuY2VsIiwiaXNOYW1lSW5wdXRFZGl0YWJsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJuYW1lSW5wdXRNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZIQTs7O2VBQUE7OztrRUEzSHNCO3lCQUVTOzhEQUVIO29CQUVjO3dCQUNNO3lCQUNNOzs7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