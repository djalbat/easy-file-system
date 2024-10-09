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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function NameSpan() {
        _class_call_check(this, NameSpan);
        var _this;
        _this = _call_super(this, NameSpan, arguments), _define_property(_this, "keyDownHandler", function(event, element) {
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
                this.onKeyDown(this.keyDownHandler);
                var html = this.html(), range = _easy.document.createRange(), selection = _easy.window.getSelection(), domElement = this.getDOMElement(), htmlLength = html.length, childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                range.setStart(textNode, 0);
                range.setEnd(textNode, htmlLength);
                selection.removeAllRanges();
                selection.addRange(range);
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
            key: "isEditable",
            value: function isEditable() {
                var contentEditableAttribute = this.hasAttribute(_constants.CONTENT_EDITABLE), editable = contentEditableAttribute; ///
                return editable;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
            ///
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var editable = this.isEditable();
                if (editable) {
                    this.reset();
                }
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var editNameSpan = this.edit.bind(this), resetNameSpan = this.reset.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onCustomNameSpanCancel = this.onCustomCancel.bind(this), onCustomNameSpanChange = this.onCustomChange.bind(this), offCustomNameSpanCancel = this.offCustomCancel.bind(this), offCustomNameSpanChange = this.offCustomChange.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    resetNameSpan: resetNameSpan,
                    getNameSpanName: getNameSpanName,
                    setNameSpanName: setNameSpanName,
                    onCustomNameSpanCancel: onCustomNameSpanCancel,
                    onCustomNameSpanChange: onCustomNameSpanChange,
                    offCustomNameSpanCancel: offCustomNameSpanCancel,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgbmFtZVNwYW5NaXhpbnMgZnJvbSBcIi4uL21peGlucy9uYW1lU3BhblwiO1xuXG5pbXBvcnQgeyBUUlVFLCBDT05URU5UX0VESVRBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtDQU5DRUxfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRX0gZnJvbSBcIi4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBOYW1lU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0FOQ0VMX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICBuYW1lID0gaHRtbDsgIC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBmaXJzdENoaWxkIH0gPSBkb21FbGVtZW50O1xuXG4gICAgbGV0IHRleHROb2RlO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCk7XG5cbiAgICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIH1cblxuICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5hbWU7ICAvLy9cbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG5cbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXG4gICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBodG1sTGVuZ3RoID0gaHRtbC5sZW5ndGgsXG4gICAgICAgICAgeyBjaGlsZE5vZGVzIH0gPSBkb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGV4dE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApO1xuXG4gICAgcmFuZ2Uuc2V0RW5kKHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFLCBUUlVFKTtcbiAgfVxuXG4gIGlzRWRpdGFibGUoKSB7XG4gICAgY29uc3QgY29udGVudEVkaXRhYmxlQXR0cmlidXRlID0gdGhpcy5oYXNBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSksXG4gICAgICAgICAgZWRpdGFibGUgPSBjb250ZW50RWRpdGFibGVBdHRyaWJ1dGU7IC8vL1xuXG4gICAgcmV0dXJuIGVkaXRhYmxlO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuaXNFZGl0YWJsZSgpO1xuXG4gICAgaWYgKGVkaXRhYmxlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlZGl0TmFtZVNwYW4gPSB0aGlzLmVkaXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcmVzZXROYW1lU3BhbiA9IHRoaXMucmVzZXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0TmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldE5hbWVTcGFuTmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsID0gdGhpcy5vbkN1c3RvbUNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlID0gdGhpcy5vbkN1c3RvbUNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZDdXN0b21OYW1lU3BhbkNhbmNlbCA9IHRoaXMub2ZmQ3VzdG9tQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlID0gdGhpcy5vZmZDdXN0b21DaGFuZ2UuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVkaXROYW1lU3BhbixcbiAgICAgIHJlc2V0TmFtZVNwYW4sXG4gICAgICBnZXROYW1lU3Bhbk5hbWUsXG4gICAgICBzZXROYW1lU3Bhbk5hbWUsXG4gICAgICBvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb25DdXN0b21OYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgbmFtZVNwYW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZVNwYW4pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cbiAgW2NvbnRlbnRFZGl0YWJsZV0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJOYW1lU3BhbiIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsImN1c3RvbUV2ZW50VHlwZSIsIkNIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInByZXZlbnREZWZhdWx0IiwiQ0FOQ0VMX0NVU1RPTV9FVkVOVF9UWVBFIiwiZ2V0TmFtZSIsImh0bWwiLCJuYW1lIiwic2V0TmFtZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwibm9kZVZhbHVlIiwiZWRpdCIsImZvY3VzIiwiYWRkQXR0cmlidXRlIiwiQ09OVEVOVF9FRElUQUJMRSIsIlRSVUUiLCJvbktleURvd24iLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiaHRtbExlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInNldFN0YXJ0Iiwic2V0RW5kIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJyZXNldCIsIm9mZktleURvd24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJpc0VkaXRhYmxlIiwiY29udGVudEVkaXRhYmxlQXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwiZWRpdGFibGUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwicGFyZW50Q29udGV4dCIsImVkaXROYW1lU3BhbiIsImJpbmQiLCJyZXNldE5hbWVTcGFuIiwiZ2V0TmFtZVNwYW5OYW1lIiwic2V0TmFtZVNwYW5OYW1lIiwib25DdXN0b21OYW1lU3BhbkNhbmNlbCIsIm9uQ3VzdG9tQ2FuY2VsIiwib25DdXN0b21OYW1lU3BhbkNoYW5nZSIsIm9uQ3VzdG9tQ2hhbmdlIiwib2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwiLCJvZmZDdXN0b21DYW5jZWwiLCJvZmZDdXN0b21OYW1lU3BhbkNoYW5nZSIsIm9mZkN1c3RvbUNoYW5nZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJuYW1lU3Bhbk1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNklBOzs7ZUFBQTs7O29FQTNJc0I7eUJBRW1CO29CQUNDOytEQUVmO3lCQUVZO2dDQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNBRSxpQkFBb0NDLG1CQUFRLENBQTVDRCxnQkFBZ0JFLGtCQUFvQkQsbUJBQVEsQ0FBNUJDO0FBRXhCLElBQUEsQUFBTUMseUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztrQ0FBQUEsc0JBQ0pDLHdCQUFBQSxrQkFBaUIsU0FBQ0MsT0FBT0M7WUFDdkIsSUFBTSxBQUFFQyxVQUFZRixNQUFaRTtZQUVSLElBQUlBLFlBQVlQLGdCQUFnQjtn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