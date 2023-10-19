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
                _this.callChangeHandlers();
                event.preventDefault();
            }
            if (keyCode === ESCAPE_KEY_CODE) {
                _this.callCancelHandlers();
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
                var editNameSpan = this.edit.bind(this), resetNameSpan = this.reset.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onNameSpanChange = this.onChange.bind(this), onNameSpanCancel = this.onCancel.bind(this), offNameSpanChange = this.offChange.bind(this), offNameSpanCancel = this.offCancel.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    resetNameSpan: resetNameSpan,
                    getNameSpanName: getNameSpanName,
                    setNameSpanName: setNameSpanName,
                    onNameSpanChange: onNameSpanChange,
                    onNameSpanCancel: onNameSpanCancel,
                    offNameSpanChange: offNameSpanChange,
                    offNameSpanCancel: offNameSpanCancel
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgbmFtZVNwYW5NaXhpbnMgZnJvbSBcIi4uL21peGlucy9uYW1lU3BhblwiO1xuXG5pbXBvcnQgeyBUUlVFLCBDT05URU5UX0VESVRBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsIEVTQ0FQRV9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIE5hbWVTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5jYWxsQ2hhbmdlSGFuZGxlcnMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLmNhbGxDYW5jZWxIYW5kbGVycygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICB7IGZpcnN0Q2hpbGQgfSA9IGRvbUVsZW1lbnQ7XG5cbiAgICBsZXQgdGV4dE5vZGU7XG5cbiAgICBpZiAoZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgdGV4dE5vZGUgPSBmaXJzdENoaWxkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoKTtcblxuICAgICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgfVxuXG4gICAgdGV4dE5vZGUubm9kZVZhbHVlID0gbmFtZTsgIC8vL1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICB0aGlzLmFkZEF0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFLCBUUlVFKTtcblxuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmh0bWwoKSxcbiAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXG4gICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBodG1sTGVuZ3RoID0gaHRtbC5sZW5ndGgsXG4gICAgICAgICAgeyBjaGlsZE5vZGVzIH0gPSBkb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGV4dE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApO1xuXG4gICAgcmFuZ2Uuc2V0RW5kKHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUsIFRSVUUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlZGl0TmFtZVNwYW4gPSB0aGlzLmVkaXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcmVzZXROYW1lU3BhbiA9IHRoaXMucmVzZXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0TmFtZVNwYW5OYW1lID0gdGhpcy5nZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldE5hbWVTcGFuTmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvbk5hbWVTcGFuQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvbk5hbWVTcGFuQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZOYW1lU3BhbkNoYW5nZSA9IHRoaXMub2ZmQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZk5hbWVTcGFuQ2FuY2VsID0gdGhpcy5vZmZDYW5jZWwuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVkaXROYW1lU3BhbixcbiAgICAgIHJlc2V0TmFtZVNwYW4sXG4gICAgICBnZXROYW1lU3Bhbk5hbWUsXG4gICAgICBzZXROYW1lU3Bhbk5hbWUsXG4gICAgICBvbk5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb25OYW1lU3BhbkNhbmNlbCxcbiAgICAgIG9mZk5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb2ZmTmFtZVNwYW5DYW5jZWxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgbmFtZVNwYW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZVNwYW4pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cbiAgW2NvbnRlbnRFZGl0YWJsZV0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJOYW1lU3BhbiIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsImNhbGxDaGFuZ2VIYW5kbGVycyIsInByZXZlbnREZWZhdWx0IiwiY2FsbENhbmNlbEhhbmRsZXJzIiwiZ2V0TmFtZSIsImh0bWwiLCJuYW1lIiwic2V0TmFtZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwibm9kZVZhbHVlIiwiZWRpdCIsImZvY3VzIiwiYWRkQXR0cmlidXRlIiwiQ09OVEVOVF9FRElUQUJMRSIsIlRSVUUiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiaHRtbExlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInNldFN0YXJ0Iiwic2V0RW5kIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJvbktleURvd24iLCJyZXNldCIsIm9mZktleURvd24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnRDb250ZXh0IiwiZWRpdE5hbWVTcGFuIiwiYmluZCIsInJlc2V0TmFtZVNwYW4iLCJnZXROYW1lU3Bhbk5hbWUiLCJzZXROYW1lU3Bhbk5hbWUiLCJvbk5hbWVTcGFuQ2hhbmdlIiwib25DaGFuZ2UiLCJvbk5hbWVTcGFuQ2FuY2VsIiwib25DYW5jZWwiLCJvZmZOYW1lU3BhbkNoYW5nZSIsIm9mZkNoYW5nZSIsIm9mZk5hbWVTcGFuQ2FuY2VsIiwib2ZmQ2FuY2VsIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5hbWVTcGFuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxSEE7OztlQUFBOzs7b0VBbkhzQjt5QkFFbUI7b0JBQ0M7K0RBRWY7eUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDQUUsaUJBQW9DQyxtQkFBUSxDQUE1Q0QsZ0JBQWdCRSxrQkFBb0JELG1CQUFRLENBQTVCQztBQUV4QixJQUFBLEFBQU1DLHlCQXFHSCxBQXJHSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGtCQUFpQixTQUFDQyxPQUFPQztZ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