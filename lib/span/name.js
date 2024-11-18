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
                var isEditable = this.isEditable.bind(this), editNameSpan = this.edit.bind(this), resetNameSpan = this.reset.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onCustomNameSpanCancel = this.onCustomCancel.bind(this), onCustomNameSpanChange = this.onCustomChange.bind(this), offCustomNameSpanCancel = this.offCustomCancel.bind(this), offCustomNameSpanChange = this.offCustomChange.bind(this); ///
                return {
                    isEditable: isEditable,
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
Object.assign(NameSpan.prototype, _easy.focusMixins);
Object.assign(NameSpan.prototype, _nameSpan.default);
var _default = (0, _easywithstyle.default)(NameSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQsIGZvY3VzTWl4aW5zIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IG5hbWVTcGFuTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbmFtZVNwYW5cIjtcblxuaW1wb3J0IHsgVFJVRSwgQ09OVEVOVF9FRElUQUJMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7Q0FOQ0VMX0NVU1RPTV9FVkVOVF9UWVBFLCBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEV9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBFTlRFUl9LRVlfQ09ERSwgRVNDQVBFX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgTmFtZVNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENBTkNFTF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgbmFtZSA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHsgZmlyc3RDaGlsZCB9ID0gZG9tRWxlbWVudDtcblxuICAgIGxldCB0ZXh0Tm9kZTtcblxuICAgIGlmIChmaXJzdENoaWxkICE9PSBudWxsKSB7XG4gICAgICB0ZXh0Tm9kZSA9IGZpcnN0Q2hpbGQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgpO1xuXG4gICAgICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICB9XG5cbiAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSBuYW1lOyAgLy8vXG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuZm9jdXMoKTtcblxuICAgIHRoaXMuYWRkQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUsIFRSVUUpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCAwKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG4gIH1cblxuICBpc0VkaXRhYmxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnRFZGl0YWJsZUF0dHJpYnV0ZSA9IHRoaXMuaGFzQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUpLFxuICAgICAgICAgIGVkaXRhYmxlID0gY29udGVudEVkaXRhYmxlQXR0cmlidXRlOyAvLy9cblxuICAgIHJldHVybiBlZGl0YWJsZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmlzRWRpdGFibGUoKTtcblxuICAgIGlmIChlZGl0YWJsZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaXNFZGl0YWJsZSA9IHRoaXMuaXNFZGl0YWJsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVkaXROYW1lU3BhbiA9IHRoaXMuZWRpdC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICByZXNldE5hbWVTcGFuID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXROYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZVNwYW5OYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9uQ3VzdG9tQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsID0gdGhpcy5vZmZDdXN0b21DYW5jZWwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9mZkN1c3RvbUNoYW5nZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgaXNFZGl0YWJsZSxcbiAgICAgIGVkaXROYW1lU3BhbixcbiAgICAgIHJlc2V0TmFtZVNwYW4sXG4gICAgICBnZXROYW1lU3Bhbk5hbWUsXG4gICAgICBzZXROYW1lU3Bhbk5hbWUsXG4gICAgICBvbkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb25DdXN0b21OYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsLFxuICAgICAgb2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihOYW1lU3Bhbi5wcm90b3R5cGUsIG5hbWVTcGFuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE5hbWVTcGFuKWBcblxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXG4gIFtjb250ZW50RWRpdGFibGVdIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiTmFtZVNwYW4iLCJrZXlEb3duSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImtleUNvZGUiLCJjdXN0b21FdmVudFR5cGUiLCJDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJwcmV2ZW50RGVmYXVsdCIsIkNBTkNFTF9DVVNUT01fRVZFTlRfVFlQRSIsImdldE5hbWUiLCJodG1sIiwibmFtZSIsInNldE5hbWUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsIm5vZGVWYWx1ZSIsImVkaXQiLCJmb2N1cyIsImFkZEF0dHJpYnV0ZSIsIkNPTlRFTlRfRURJVEFCTEUiLCJUUlVFIiwib25LZXlEb3duIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImh0bWxMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwicmVzZXQiLCJvZmZLZXlEb3duIiwicmVtb3ZlQXR0cmlidXRlIiwiaXNFZGl0YWJsZSIsImNvbnRlbnRFZGl0YWJsZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsImVkaXRhYmxlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZWRpdE5hbWVTcGFuIiwicmVzZXROYW1lU3BhbiIsImdldE5hbWVTcGFuTmFtZSIsInNldE5hbWVTcGFuTmFtZSIsIm9uQ3VzdG9tTmFtZVNwYW5DYW5jZWwiLCJvbkN1c3RvbUNhbmNlbCIsIm9uQ3VzdG9tTmFtZVNwYW5DaGFuZ2UiLCJvbkN1c3RvbUNoYW5nZSIsIm9mZkN1c3RvbU5hbWVTcGFuQ2FuY2VsIiwib2ZmQ3VzdG9tQ2FuY2VsIiwib2ZmQ3VzdG9tTmFtZVNwYW5DaGFuZ2UiLCJvZmZDdXN0b21DaGFuZ2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZm9jdXNNaXhpbnMiLCJuYW1lU3Bhbk1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0pBOzs7ZUFBQTs7O29FQTlJc0I7eUJBRW1CO29CQUNjOytEQUU1Qjt5QkFFWTtnQ0FDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakUsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDQUUsaUJBQW9DQyxtQkFBUSxDQUE1Q0QsZ0JBQWdCRSxrQkFBb0JELG1C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