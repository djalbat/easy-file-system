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
var _nameSpan = /*#__PURE__*/ _interop_require_default(require("../mixins/nameSpan"));
var _constants = require("../constants");
var _easy = require("easy");
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
                var domElement = this.getDOMElement(), childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                textNode.nodeValue = name; ///
            }
        },
        {
            key: "edit",
            value: function edit() {
                this.focus();
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
                this.removeAttribute(_constants.CONTENT_EDITABLE, _constants.TRUE);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var editNameSpan = this.edit.bind(this), cancelNameSpan = this.cancel.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onNameSpanChange = this.onChange.bind(this), onNameSpanCancel = this.onCancel.bind(this), offNameSpanChange = this.offChange.bind(this), offNameSpanCancel = this.offCancel.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    cancelNameSpan: cancelNameSpan,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG5hbWVTcGFuTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbmFtZVNwYW5cIjtcblxuaW1wb3J0IHsgVFJVRSwgQ09OVEVOVF9FRElUQUJMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsIEVTQ0FQRV9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIE5hbWVTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5jYWxsQ2hhbmdlSGFuZGxlcnMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLmNhbGxDYW5jZWxIYW5kbGVycygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICB7IGNoaWxkTm9kZXMgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSBuYW1lOyAgLy8vXG4gIH1cblxuICBlZGl0KCkge1xuICAgIHRoaXMuZm9jdXMoKTtcblxuICAgIHRoaXMuYWRkQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUsIFRSVUUpO1xuXG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcbiAgICAgICAgICBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGh0bWxMZW5ndGggPSBodG1sLmxlbmd0aCxcbiAgICAgICAgICB7IGNoaWxkTm9kZXMgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICByYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICByYW5nZS5zZXRFbmQodGV4dE5vZGUsIGh0bWxMZW5ndGgpO1xuXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgIHRoaXMub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKENPTlRFTlRfRURJVEFCTEUsIFRSVUUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlZGl0TmFtZVNwYW4gPSB0aGlzLmVkaXQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgY2FuY2VsTmFtZVNwYW4gPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXROYW1lU3Bhbk5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZVNwYW5OYW1lID0gdGhpcy5zZXROYW1lLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9uTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIG9mZk5hbWVTcGFuQ2hhbmdlID0gdGhpcy5vZmZDaGFuZ2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmTmFtZVNwYW5DYW5jZWwgPSB0aGlzLm9mZkNhbmNlbC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZWRpdE5hbWVTcGFuLFxuICAgICAgY2FuY2VsTmFtZVNwYW4sXG4gICAgICBnZXROYW1lU3Bhbk5hbWUsXG4gICAgICBzZXROYW1lU3Bhbk5hbWUsXG4gICAgICBvbk5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb25OYW1lU3BhbkNhbmNlbCxcbiAgICAgIG9mZk5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb2ZmTmFtZVNwYW5DYW5jZWxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgbmFtZVNwYW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZVNwYW4pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cbiAgW2NvbnRlbnRFZGl0YWJsZV0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJOYW1lU3BhbiIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsImNhbGxDaGFuZ2VIYW5kbGVycyIsInByZXZlbnREZWZhdWx0IiwiY2FsbENhbmNlbEhhbmRsZXJzIiwiZ2V0TmFtZSIsImh0bWwiLCJuYW1lIiwic2V0TmFtZSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGV4dE5vZGUiLCJub2RlVmFsdWUiLCJlZGl0IiwiZm9jdXMiLCJhZGRBdHRyaWJ1dGUiLCJDT05URU5UX0VESVRBQkxFIiwiVFJVRSIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImh0bWxMZW5ndGgiLCJsZW5ndGgiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwib25LZXlEb3duIiwiY2FuY2VsIiwib2ZmS2V5RG93biIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcmVudENvbnRleHQiLCJlZGl0TmFtZVNwYW4iLCJiaW5kIiwiY2FuY2VsTmFtZVNwYW4iLCJnZXROYW1lU3Bhbk5hbWUiLCJzZXROYW1lU3Bhbk5hbWUiLCJvbk5hbWVTcGFuQ2hhbmdlIiwib25DaGFuZ2UiLCJvbk5hbWVTcGFuQ2FuY2VsIiwib25DYW5jZWwiLCJvZmZOYW1lU3BhbkNoYW5nZSIsIm9mZkNoYW5nZSIsIm9mZk5hbWVTcGFuQ2FuY2VsIiwib2ZmQ2FuY2VsIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5hbWVTcGFuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2R0E7OztlQUFBOzs7b0VBM0dzQjt5QkFFbUI7K0RBRWQ7eUJBRVk7b0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDQUUsaUJBQW9DQyxtQkFBUSxDQUE1Q0QsZ0JBQWdCRSxrQkFBb0JELG1CQUFRLENBQTVCQztBQUV4QixJQUFBLEFBQU1DLHlCQTZGSCxBQTdGSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGtCQUFpQixTQUFDQyxPQUFPQztZQUN2QixJQUFNLEFBQUVDLFVBQVlGLE1BQVpFO1lBRVIsSUFBSUEsWUFBWVAsZ0JBQWdCO2dCQUM5QixNQUFLUSxrQkFBa0I7Z0JBRXZCSCxNQUFNSSxjQUFjO1lBQ3RCO1lBRUEsSUFBSUYsWUFBWUwsaUJBQWlCO2dCQUMvQixNQUFLUSxrQkFB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