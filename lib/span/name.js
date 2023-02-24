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
var _constants = require("../constants");
var _easy = require("easy");
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
    var _super = _createSuper(NameSpan);
    function NameSpan() {
        _classCallCheck(this, NameSpan);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function(event, element) {
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
    _createClass(NameSpan, [
        {
            key: "isEditable",
            value: function isEditable() {
                var contentEditable = this.hasAttribute(_constants.CONTENT_EDITABLE), editable = contentEditable; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGFuL25hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG5hbWVTcGFuTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbmFtZVNwYW5cIjtcblxuaW1wb3J0IHsgVFJVRSwgQ09OVEVOVF9FRElUQUJMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdywgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsIEVTQ0FQRV9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIE5hbWVTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5jYWxsQ2hhbmdlSGFuZGxlcnMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLmNhbGxDYW5jZWxIYW5kbGVycygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzRWRpdGFibGUoKSB7XG4gICAgY29uc3QgY29udGVudEVkaXRhYmxlID0gdGhpcy5oYXNBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSksXG4gICAgICAgICAgZWRpdGFibGUgPSBjb250ZW50RWRpdGFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGVkaXRhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgbmFtZSA9IGh0bWw7ICAvLy9cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IG5hbWU7ICAvLy9cbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuXG4gICAgdGhpcy5hZGRBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoQ09OVEVOVF9FRElUQUJMRSwgVFJVRSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVkaXROYW1lU3BhbiA9IHRoaXMuZWRpdC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBjYW5jZWxOYW1lU3BhbiA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldE5hbWVTcGFuTmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXROYW1lU3Bhbk5hbWUgPSB0aGlzLnNldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25OYW1lU3BhbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb25OYW1lU3BhbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgb2ZmTmFtZVNwYW5DaGFuZ2UgPSB0aGlzLm9mZkNoYW5nZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBvZmZOYW1lU3BhbkNhbmNlbCA9IHRoaXMub2ZmQ2FuY2VsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzTmFtZVNwYW5FZGl0YWJsZSA9IHRoaXMuaXNFZGl0YWJsZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZWRpdE5hbWVTcGFuLFxuICAgICAgY2FuY2VsTmFtZVNwYW4sXG4gICAgICBnZXROYW1lU3Bhbk5hbWUsXG4gICAgICBzZXROYW1lU3Bhbk5hbWUsXG4gICAgICBvbk5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb25OYW1lU3BhbkNhbmNlbCxcbiAgICAgIG9mZk5hbWVTcGFuQ2hhbmdlLFxuICAgICAgb2ZmTmFtZVNwYW5DYW5jZWwsXG4gICAgICBpc05hbWVTcGFuRWRpdGFibGVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7ICAvLy9cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKE5hbWVTcGFuLnByb3RvdHlwZSwgbmFtZVNwYW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZVNwYW4pYFxuXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cbiAgW2NvbnRlbnRFZGl0YWJsZV0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJOYW1lU3BhbiIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwia2V5Q29kZSIsImNhbGxDaGFuZ2VIYW5kbGVycyIsInByZXZlbnREZWZhdWx0IiwiY2FsbENhbmNlbEhhbmRsZXJzIiwiaXNFZGl0YWJsZSIsImNvbnRlbnRFZGl0YWJsZSIsImhhc0F0dHJpYnV0ZSIsIkNPTlRFTlRfRURJVEFCTEUiLCJlZGl0YWJsZSIsImdldE5hbWUiLCJodG1sIiwibmFtZSIsInNldE5hbWUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRleHROb2RlIiwibm9kZVZhbHVlIiwiZWRpdCIsImZvY3VzIiwiYWRkQXR0cmlidXRlIiwiVFJVRSIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImh0bWxMZW5ndGgiLCJsZW5ndGgiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwib25LZXlEb3duIiwiY2FuY2VsIiwib2ZmS2V5RG93biIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcmVudENvbnRleHQiLCJlZGl0TmFtZVNwYW4iLCJiaW5kIiwiY2FuY2VsTmFtZVNwYW4iLCJnZXROYW1lU3Bhbk5hbWUiLCJzZXROYW1lU3Bhbk5hbWUiLCJvbk5hbWVTcGFuQ2hhbmdlIiwib25DaGFuZ2UiLCJvbk5hbWVTcGFuQ2FuY2VsIiwib25DYW5jZWwiLCJvZmZOYW1lU3BhbkNoYW5nZSIsIm9mZkNoYW5nZSIsIm9mZk5hbWVTcGFuQ2FuY2VsIiwib2ZmQ2FuY2VsIiwiaXNOYW1lU3BhbkVkaXRhYmxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5hbWVTcGFuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzSEE7OztlQUFBOzs7a0VBcEhzQjt5QkFFbUI7NkRBRWQ7eUJBRVk7b0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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