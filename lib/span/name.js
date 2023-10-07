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
            key: "isEditing",
            value: function isEditing() {
                var contentEditable = this.hasAttribute(_constants.CONTENT_EDITABLE), editing = contentEditable; ///
                return editing;
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
                var editNameSpan = this.edit.bind(this), cancelNameSpan = this.cancel.bind(this), getNameSpanName = this.getName.bind(this), setNameSpanName = this.setName.bind(this), onNameSpanChange = this.onChange.bind(this), onNameSpanCancel = this.onCancel.bind(this), offNameSpanChange = this.offChange.bind(this), offNameSpanCancel = this.offCancel.bind(this), isNameSpanEditing = this.isEditing.bind(this); ///
                return {
                    editNameSpan: editNameSpan,
                    cancelNameSpan: cancelNameSpan,
                    getNameSpanName: getNameSpanName,
                    setNameSpanName: setNameSpanName,
                    onNameSpanChange: onNameSpanChange,
                    onNameSpanCancel: onNameSpanCancel,
                    offNameSpanChange: offNameSpanChange,
                    offNameSpanCancel: offNameSpanCancel,
                    isNameSpanEditing: isNameSpanEditing
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG5hbWVTcGFuTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbmFtZVNwYW5cIjtcblxuaW1wb3J0IHsgVFJVRSwgQ09OVEVOVF9FRElUQUJMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsIEVTQ0FQRV9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIE5hbWVTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5jYWxsQ2hhbmdlSGFuZGxlcnMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLmNhbGxDYW5jZWxIYW5kbGVycygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzRWRpdGluZygpIHtcbiAgICBjb25zdCBjb250ZW50RWRpdGFibGUgPSB0aGlzLmhhc0F0dHJpYnV0ZShDT05URU5UX0VESVRBQkxFKSxcbiAgICAgICAgICBlZGl0aW5nID0gY29udGVudEVkaXRhYmxlOyAvLy9cblxuICAgIHJldHVybiBlZGl0aW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgbmFtZSA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5hbWU7ICAvLy9cbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVkaXROYW1lU3BhbiA9IHRoaXMuZWRpdC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjYW5jZWxOYW1lU3BhbiA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldE5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXROYW1lU3Bhbk5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25OYW1lU3BhbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25OYW1lU3BhbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9mZkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZOYW1lU3BhbkNhbmNlbCA9IHRoaXMub2ZmQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzTmFtZVNwYW5FZGl0aW5nID0gdGhpcy5pc0VkaXRpbmcuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVkaXROYW1lU3BhbixcbiAgICAgIGNhbmNlbE5hbWVTcGFuLFxuICAgICAgZ2V0TmFtZVNwYW5OYW1lLFxuICAgICAgc2V0TmFtZVNwYW5OYW1lLFxuICAgICAgb25OYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9uTmFtZVNwYW5DYW5jZWwsXG4gICAgICBvZmZOYW1lU3BhbkNoYW5nZSxcbiAgICAgIG9mZk5hbWVTcGFuQ2FuY2VsLFxuICAgICAgaXNOYW1lU3BhbkVkaXRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgbmFtZVNwYW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZVNwYW4pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cbiAgW2NvbnRlbnRFZGl0YWJsZV0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJOYW1lU3BhbiIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsImNhbGxDaGFuZ2VIYW5kbGVycyIsInByZXZlbnREZWZhdWx0IiwiY2FsbENhbmNlbEhhbmRsZXJzIiwiaXNFZGl0aW5nIiwiY29udGVudEVkaXRhYmxlIiwiaGFzQXR0cmlidXRlIiwiQ09OVEVOVF9FRElUQUJMRSIsImVkaXRpbmciLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImVkaXQiLCJmb2N1cyIsImFkZEF0dHJpYnV0ZSIsIlRSVUUiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJodG1sTGVuZ3RoIiwibGVuZ3RoIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsIm9uS2V5RG93biIsImNhbmNlbCIsIm9mZktleURvd24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnRDb250ZXh0IiwiZWRpdE5hbWVTcGFuIiwiYmluZCIsImNhbmNlbE5hbWVTcGFuIiwiZ2V0TmFtZVNwYW5OYW1lIiwic2V0TmFtZVNwYW5OYW1lIiwib25OYW1lU3BhbkNoYW5nZSIsIm9uQ2hhbmdlIiwib25OYW1lU3BhbkNhbmNlbCIsIm9uQ2FuY2VsIiwib2ZmTmFtZVNwYW5DaGFuZ2UiLCJvZmZDaGFuZ2UiLCJvZmZOYW1lU3BhbkNhbmNlbCIsIm9mZkNhbmNlbCIsImlzTmFtZVNwYW5FZGl0aW5nIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5hbWVTcGFuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzSEE7OztlQUFBOzs7b0VBcEhzQjt5QkFFbUI7K0RBRWQ7eUJBRVk7b0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDQUUsaUJBQW9DQyxtQkFBUSxDQUE1Q0QsZ0JBQWdCRSxrQkFBb0JELG1CQUFRLENBQTVCQztBQUV4QixJQUFBLEFBQU1DLHlCQXNHSCxBQXRHSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGtCQUFpQixTQUFDQyxPQUFPQztZQUN2QixJQUFNLEFBQUVDLFVBQVlGLE1BQVpFO1lBRVIsSUFBSUEsWUFBWVAsZ0JBQWdCO2dCQUM5QixNQUFLUSxrQkFBa0I7Z0JBRXZCSCxNQUFNSSxjQUFjO1lBQ3RCO1lBRUEsSUFBSUYsWUFBWUwsaUJBQWlCO2dCQUMvQixNQUFLUSxrQkFBa0I7Z0JBRXZCTCxNQUFNSSxjQUFjO1lBQ3RCO1FBQ0Y7OztrQkFmSU47O1lBaUJKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsWUFBWSxDQUFDQywyQkFBZ0IsR0FDcERDLFVBQVVILGlCQUFpQixHQUFHO2dCQUVwQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQSxJQUFJLElBQ2hCQyxPQUFPRCxNQUFPLEdBQUc7Z0JBRXZCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUQsSUFBSTtnQkFDVixJQUFNRSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQixBQUFFQyxhQUFlRixXQUFmRSxZQUNGQyxpQkFBaUJ6QixNQUFNd0IsYUFDdkJFLFdBQVdELGdCQUFpQixHQUFHO2dCQUVyQ0MsU0FBU0MsU0FBUyxHQUFHUCxNQUFPLEdBQUc7WUFDakM7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxLQUFLO2dCQUVWLElBQUksQ0FBQ0MsWUFBWSxDQUFDZCwyQkFBZ0IsRUFBRWUsZUFBSTtnQkFFeEMsSUFBTVosT0FBTyxJQUFJLENBQUNBLElBQUksSUFDaEJhLFFBQVFDLGNBQVEsQ0FBQ0MsV0FBVyxJQUM1QkMsWUFBWUMsWUFBTSxDQUFDQyxZQUFZLElBQy9CZixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQmUsYUFBYW5CLEtBQUtvQixNQUFNLEVBQ3hCLEFBQUVmLGFBQWVGLFdBQWZFLFlBQ0ZDLGlCQUFpQnpCLE1BQU13QixhQUN2QkUsV0FBV0QsZ0JBQWlCLEdBQUc7Z0JBRXJDTyxNQUFNUSxRQUFRLENBQUNkLFVBQVVZO2dCQUV6Qk4sTUFBTVMsTUFBTSxDQUFDZixVQUFVWTtnQkFFdkJILFVBQVVPLGVBQWU7Z0JBRXpCUCxVQUFVUSxRQUFRLENBQUNYO2dCQUVuQixJQUFJLENBQUNZLFNBQVMsQ0FBQyxJQUFJLENBQUN0QyxjQUFjO1lBQ3BDOzs7WUFFQXVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUN4QyxjQUFjO2dCQUVuQyxJQUFJLENBQUN5QyxlQUFlLENBQUMvQiwyQkFBZ0IsRUFBRWUsZUFBSTtZQUM3Qzs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNyQixJQUFJLENBQUNzQixJQUFJLENBQUMsSUFBSSxHQUNsQ0MsaUJBQWlCLElBQUksQ0FBQ04sTUFBTSxDQUFDSyxJQUFJLENBQUMsSUFBSSxHQUN0Q0Usa0JBQWtCLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQ2dDLElBQUksQ0FBQyxJQUFJLEdBQ3hDRyxrQkFBa0IsSUFBSSxDQUFDaEMsT0FBTyxDQUFDNkIsSUFBSSxDQUFDLElBQUksR0FDeENJLG1CQUFtQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDLElBQUksR0FDMUNNLG1CQUFtQixJQUFJLENBQUNDLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLElBQUksR0FDMUNRLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDLElBQUksR0FDNUNVLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSSxDQUFDLElBQUksR0FDNUNZLG9CQUFvQixJQUFJLENBQUNqRCxTQUFTLENBQUNxQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXhELE9BQVE7b0JBQ05ELGNBQUFBO29CQUNBRSxnQkFBQUE7b0JBQ0FDLGlCQUFBQTtvQkFDQUMsaUJBQUFBO29CQUNBQyxrQkFBQUE7b0JBQ0FFLGtCQUFBQTtvQkFDQUUsbUJBQUFBO29CQUNBRSxtQkFBQUE7b0JBQ0FFLG1CQUFBQTtnQkFDRjtZQUNGOzs7V0E3Rkl6RDtxQkFBaUIwRCxhQUFPO0FBK0Y1QixpQkEvRkkxRCxVQStGRzJELFdBQVUsUUFBUyxHQUFHOztBQUU3QixpQkFqR0kzRCxVQWlHRzRELHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0ZDLE9BQU9DLE1BQU0sQ0FBQy9ELFNBQVNnRSxTQUFTLEVBQUVDLGlCQUFjO0lBRWhELFdBQWVDLElBQUFBLHNCQUFTLEVBQUNsRSJ9