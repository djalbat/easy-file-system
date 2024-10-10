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
                var editNameSpan = this.edit.bind(this), resetNameSpan = this.reset.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), isNameSpanEditable = this.isEditable.bind(this), onCustomNameSpanCancel = this.onCustomCancel.bind(this), onCustomNameSpanChange = this.onCustomChange.bind(this), offCustomNameSpanCancel = this.offCustomCancel.bind(this), offCustomNameSpanChange = this.offCustomChange.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    resetNameSpan: resetNameSpan,
                    getNameSpanName: getNameSpanName,
                    setNameSpanName: setNameSpanName,
                    isNameSpanEditable: isNameSpanEditable,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgbmFtZVNwYW5NaXhpbnMgZnJvbSBcIi4uL21peGlucy9uYW1lU3BhblwiO1xuXG5pbXBvcnQgeyBUUlVFLCBDT05URU5UX0VESVRBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtDQU5DRUxfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRX0gZnJvbSBcIi4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLCBFU0NBUEVfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBOYW1lU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0FOQ0VMX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICBuYW1lID0gaHRtbDsgIC8vL1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgeyBmaXJzdENoaWxkIH0gPSBkb21FbGVtZW50O1xuXG4gICAgbGV0IHRleHROb2RlO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCk7XG5cbiAgICAgIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIH1cblxuICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5hbWU7ICAvLy9cbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG5cbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXG4gICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBodG1sTGVuZ3RoID0gaHRtbC5sZW5ndGgsXG4gICAgICAgICAgeyBjaGlsZE5vZGVzIH0gPSBkb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGV4dE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApO1xuXG4gICAgcmFuZ2Uuc2V0RW5kKHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFLCBUUlVFKTtcbiAgfVxuXG4gIGlzRWRpdGFibGUoKSB7XG4gICAgY29uc3QgY29udGVudEVkaXRhYmxlQXR0cmlidXRlID0gdGhpcy5oYXNBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSksXG4gICAgICAgICAgZWRpdGFibGUgPSBjb250ZW50RWRpdGFibGVBdHRyaWJ1dGU7IC8vL1xuXG4gICAgcmV0dXJuIGVkaXRhYmxlO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuaXNFZGl0YWJsZSgpO1xuXG4gICAgaWYgKGVkaXRhYmxlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlZGl0TmFtZVNwYW4gPSB0aGlzLmVkaXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcmVzZXROYW1lU3BhbiA9IHRoaXMucmVzZXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0TmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldE5hbWVTcGFuTmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc05hbWVTcGFuRWRpdGFibGUgPSB0aGlzLmlzRWRpdGFibGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9uQ3VzdG9tQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsID0gdGhpcy5vZmZDdXN0b21DYW5jZWwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9mZkN1c3RvbUNoYW5nZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZWRpdE5hbWVTcGFuLFxuICAgICAgcmVzZXROYW1lU3BhbixcbiAgICAgIGdldE5hbWVTcGFuTmFtZSxcbiAgICAgIHNldE5hbWVTcGFuTmFtZSxcbiAgICAgIGlzTmFtZVNwYW5FZGl0YWJsZSxcbiAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwsXG4gICAgICBvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DYW5jZWwsXG4gICAgICBvZmZDdXN0b21OYW1lU3BhbkNoYW5nZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjsgIC8vL1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oTmFtZVNwYW4ucHJvdG90eXBlLCBuYW1lU3Bhbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShOYW1lU3BhbilgXG5cbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICBbY29udGVudEVkaXRhYmxlXSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIk5hbWVTcGFuIiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJrZXlDb2RlIiwiY3VzdG9tRXZlbnRUeXBlIiwiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwicHJldmVudERlZmF1bHQiLCJDQU5DRUxfQ1VTVE9NX0VWRU5UX1RZUEUiLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJub2RlVmFsdWUiLCJlZGl0IiwiZm9jdXMiLCJhZGRBdHRyaWJ1dGUiLCJDT05URU5UX0VESVRBQkxFIiwiVFJVRSIsIm9uS2V5RG93biIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJodG1sTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsInJlc2V0Iiwib2ZmS2V5RG93biIsInJlbW92ZUF0dHJpYnV0ZSIsImlzRWRpdGFibGUiLCJjb250ZW50RWRpdGFibGVBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJlZGl0YWJsZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJwYXJlbnRDb250ZXh0IiwiZWRpdE5hbWVTcGFuIiwiYmluZCIsInJlc2V0TmFtZVNwYW4iLCJnZXROYW1lU3Bhbk5hbWUiLCJzZXROYW1lU3Bhbk5hbWUiLCJpc05hbWVTcGFuRWRpdGFibGUiLCJvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwib25DdXN0b21DYW5jZWwiLCJvbkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib25DdXN0b21DaGFuZ2UiLCJvZmZDdXN0b21OYW1lU3BhbkNhbmNlbCIsIm9mZkN1c3RvbUNhbmNlbCIsIm9mZkN1c3RvbU5hbWVTcGFuQ2hhbmdlIiwib2ZmQ3VzdG9tQ2hhbmdlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5hbWVTcGFuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErSUE7OztlQUFBOzs7b0VBN0lzQjt5QkFFbUI7b0JBQ0M7K0RBRWY7eUJBRVk7Z0NBQzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLGlCQUFvQ0MsbUJBQVEsQ0FBNUNELGdCQUFnQkUsa0JBQW9CRCxtQkFBUSxDQUE1QkM7QUFFeEIsSUFBQSxBQUFNQyx5QkFBTjtj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