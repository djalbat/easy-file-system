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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _necessary = require("necessary");
var _easy = require("easy");
var _nameSpan = /*#__PURE__*/ _interop_require_default(require("../mixins/nameSpan"));
var _constants = require("../constants");
var _customEventTypes = require("../customEventTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  border: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  background: transparent;\n  font-weight: inherit;\n  font-family: inherit;\n\n  [contentEditable] {\n    border: 1px solid black;\n    padding: 4px;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE;
var NameSpan = /*#__PURE__*/ function(Element) {
    _inherits(NameSpan, Element);
    var _super = _create_super(NameSpan);
    function NameSpan() {
        _class_call_check(this, NameSpan);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            if (keyCode === ENTER_KEY_CODE) {
                var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
                _this.callCustomHandlers(customEventType, event, element);
                event.preventDefault();
            }
            if (keyCode === ESCAPE_KEY_CODE) {
                var customEventType1 = _customEventTypes.CANCEL_CUSTOM_EVENT_TYPE;
                _this.callCustomHandlers(customEventType1, event, element);
                event.preventDefault();
            }
        });
        return _this;
    }
    _create_class(NameSpan, [
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
                var domElement = this.getDOMElement(), firstChild = domElement.firstChild;
                var textNode;
                if (firstChild !== null) {
                    textNode = firstChild; ///
                } else {
                    textNode = _easy.document.createTextNode();
                    domElement.appendChild(textNode);
                }
                textNode.nodeValue = name; ///
            }
        },
        {
            key: "edit",
            value: function edit() {
                this.focus();
                this.addAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
                var html = this.html(), range = _easy.document.createRange(), selection = _easy.window.getSelection(), domElement = this.getDOMElement(), htmlLength = html.length, childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                range.setStart(textNode, 0);
                range.setEnd(textNode, htmlLength);
                selection.removeAllRanges();
                selection.addRange(range);
                this.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.offKeyDown(this.keyDownHandler);
                this.removeAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var editNameSpan = this.edit.bind(this), resetNameSpan = this.reset.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onCustomNameSpanCancel = this.onCustomCancel.bind(this), offCustomNameSpanCancel = this.offCustomCancel.bind(this), onCustomNameSpanChange = this.onCustomChange.bind(this), offCustomNameSpanChange = this.offCustomChange.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    resetNameSpan: resetNameSpan,
                    getNameSpanName: getNameSpanName,
                    setNameSpanName: setNameSpanName,
                    onCustomNameSpanCancel: onCustomNameSpanCancel,
                    offCustomNameSpanCancel: offCustomNameSpanCancel,
                    onCustomNameSpanChange: onCustomNameSpanChange,
                    offCustomNameSpanChange: offCustomNameSpanChange
                };
            }
        }
    ]);
    return NameSpan;
}(_wrap_native_super(_easy.Element));
_define_property(NameSpan, "tagName", "span") ///
;
_define_property(NameSpan, "defaultProperties", {
    className: "name"
});
Object.assign(NameSpan.prototype, _nameSpan.default);
var _default = (0, _easywithstyle.default)(NameSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgbmFtZVNwYW5NaXhpbnMgZnJvbSBcIi4uL21peGlucy9uYW1lU3BhblwiO1xuXG5pbXBvcnQgeyBUUlVFLCBDT05URU5UX0VESVRBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtDQU5DRUxfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRX0gZnJvbSBcIi4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBOYW1lU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0FOQ0VMX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICBuYW1lID0gaHRtbDsgIC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBmaXJzdENoaWxkIH0gPSBkb21FbGVtZW50O1xuXG4gICAgbGV0IHRleHROb2RlO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCk7XG5cbiAgICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIH1cblxuICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5hbWU7ICAvLy9cbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCAwKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFLCBUUlVFKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZWRpdE5hbWVTcGFuID0gdGhpcy5lZGl0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHJlc2V0TmFtZVNwYW4gPSB0aGlzLnJlc2V0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldE5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXROYW1lU3Bhbk5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25DdXN0b21OYW1lU3BhbkNhbmNlbCA9IHRoaXMub25DdXN0b21DYW5jZWwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9mZkN1c3RvbUNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlID0gdGhpcy5vbkN1c3RvbUNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZDdXN0b21OYW1lU3BhbkNoYW5nZSA9IHRoaXMub2ZmQ3VzdG9tQ2hhbmdlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlZGl0TmFtZVNwYW4sXG4gICAgICByZXNldE5hbWVTcGFuLFxuICAgICAgZ2V0TmFtZVNwYW5OYW1lLFxuICAgICAgc2V0TmFtZVNwYW5OYW1lLFxuICAgICAgb25DdXN0b21OYW1lU3BhbkNhbmNlbCxcbiAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb25DdXN0b21OYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiOyAgLy8vXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihOYW1lU3Bhbi5wcm90b3R5cGUsIG5hbWVTcGFuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVTcGFuKWBcblxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXG4gIFtjb250ZW50RWRpdGFibGVdIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiTmFtZVNwYW4iLCJrZXlEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImtleUNvZGUiLCJjdXN0b21FdmVudFR5cGUiLCJDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJwcmV2ZW50RGVmYXVsdCIsIkNBTkNFTF9DVVNUT01fRVZFTlRfVFlQRSIsImdldE5hbWUiLCJodG1sIiwibmFtZSIsInNldE5hbWUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsIm5vZGVWYWx1ZSIsImVkaXQiLCJmb2N1cyIsImFkZEF0dHJpYnV0ZSIsIkNPTlRFTlRfRURJVEFCTEUiLCJUUlVFIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImh0bWxMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwib25LZXlEb3duIiwicmVzZXQiLCJvZmZLZXlEb3duIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyZW50Q29udGV4dCIsImVkaXROYW1lU3BhbiIsImJpbmQiLCJyZXNldE5hbWVTcGFuIiwiZ2V0TmFtZVNwYW5OYW1lIiwic2V0TmFtZVNwYW5OYW1lIiwib25DdXN0b21OYW1lU3BhbkNhbmNlbCIsIm9uQ3VzdG9tQ2FuY2VsIiwib2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwiLCJvZmZDdXN0b21DYW5jZWwiLCJvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib25DdXN0b21DaGFuZ2UiLCJvZmZDdXN0b21OYW1lU3BhbkNoYW5nZSIsIm9mZkN1c3RvbUNoYW5nZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJuYW1lU3Bhbk1peGlucyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwSEE7OztlQUFBOzs7b0VBeEhzQjt5QkFFbUI7b0JBQ0M7K0RBRWY7eUJBRVk7Z0NBQzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLGlCQUFvQ0MsbUJBQVEsQ0FBNUNELGdCQUFnQkUsa0JBQW9CRCxtQkFBUSxDQUE1QkM7QUFFeEIsSUFBQSxBQUFNQyx5QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsa0JBQWlCLFNBQUNDLE9BQU9DO1lBQ3ZCLElBQU0sQUFBRUMsVUFBWUYsTUFBWkU7WUFFUixJQUFJQSxZQUFZUCxnQkFBZ0I7Z0JBQzlCLElBQU1RLGtCQUFrQkMsMENBQXdCO2dCQUVoRCxNQUFLQyxrQkFBa0IsQ0FBQ0YsaUJBQWlCSCxPQUFPQztnQkFFaERELE1BQU1NLGNBQWM7WUFDdEI7WUFFQSxJQUFJSixZQUFZ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