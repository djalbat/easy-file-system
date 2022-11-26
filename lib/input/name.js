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
var _constants = require("../constants");
var _easy = require("easy");
var _keyCodes = require("../keyCodes");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
        "\n  \n  outline: none;\n  display: inline-block;\n  font-size: inherit;\n  text-align: left;\n  font-weight: inherit;\n  font-family: inherit;\n  \n"
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
                var onChange = _this.properties.onChange, changeHandler = onChange; ///
                changeHandler();
                event.preventDefault();
            }
            if (keyCode === _keyCodes.ESCAPE_KEY_CODE) {
                var onCancel = _this.properties.onCancel, cancelHandler = onCancel; ///
                cancelHandler();
                event.preventDefault();
            }
        });
        return _this;
    }
    _createClass(NameInput, [
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
                var html = name; ///
                this.html(html);
            }
        },
        {
            key: "show",
            value: function show() {
                var display = _constants.INLINE_BLOCK;
                this.display(display);
                this.focus();
                var html = this.html(), range = _easy.document.createRange(), selection = _easy.window.getSelection(), domElement = this.getDOMElement(), htmlLength = html.length, childNodes = domElement.childNodes, firstChildNode = first(childNodes), textNode = firstChildNode; ///
                range.setStart(textNode, htmlLength);
                range.setEnd(textNode, htmlLength);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        },
        {
            key: "hide",
            value: function hide() {
                _get(_getPrototypeOf(NameInput.prototype), "hide", this).call(this);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showNameInput = this.show.bind(this), hideNameInput = this.hide.bind(this), getNameInputName = this.getName.bind(this), setNameInputName = this.setName.bind(this); ///
                return {
                    showNameInput: showNameInput,
                    hideNameInput: hideNameInput,
                    getNameInputName: getNameInputName,
                    setNameInputName: setNameInputName
                };
            }
        }
    ]);
    return NameInput;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(NameInput, "tagName", "span") ///
;
_defineProperty(NameInput, "ignoredProperties", [
    "onChange",
    "onCancel"
]);
_defineProperty(NameInput, "defaultProperties", {
    role: "textbox",
    className: "name",
    contentEditable: "true"
});
var _default = (0, _easyWithStyle.default)(NameInput)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgSU5MSU5FX0JMT0NLIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93LCBkb2N1bWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBFTlRFUl9LRVlfQ09ERSwgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2tleUNvZGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBOYW1lSW5wdXQgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgICBjaGFuZ2VIYW5kbGVyKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY2FuY2VsSGFuZGxlciA9IG9uQ2FuY2VsOyAvLy9cblxuICAgICAgY2FuY2VsSGFuZGxlcigpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpLFxuICAgICAgICAgIG5hbWUgPSBodG1sOyAgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGh0bWwgPSBuYW1lOyAgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBJTkxJTkVfQkxPQ0s7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG5cbiAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5odG1sKCksXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaHRtbExlbmd0aCA9IGh0bWwubGVuZ3RoLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRleHROb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCBodG1sTGVuZ3RoKTtcblxuICAgIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZSwgaHRtbExlbmd0aCk7XG5cbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBzdXBlci5oaWRlKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd05hbWVJbnB1dCA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlTmFtZUlucHV0ID0gdGhpcy5oaWRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldE5hbWVJbnB1dE5hbWUgPSB0aGlzLmdldE5hbWUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0TmFtZUlucHV0TmFtZSA9IHRoaXMuc2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd05hbWVJbnB1dCxcbiAgICAgIGhpZGVOYW1lSW5wdXQsXG4gICAgICBnZXROYW1lSW5wdXROYW1lLFxuICAgICAgc2V0TmFtZUlucHV0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInNwYW5cIjsgIC8vL1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJvbkNhbmNlbFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHJvbGU6IFwidGV4dGJveFwiLFxuICAgIGNsYXNzTmFtZTogXCJuYW1lXCIsXG4gICAgY29udGVudEVkaXRhYmxlOiBcInRydWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTmFtZUlucHV0KWBcbiAgXG4gIG91dGxpbmU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiTmFtZUlucHV0Iiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJrZXlDb2RlIiwiRU5URVJfS0VZX0NPREUiLCJvbkNoYW5nZSIsInByb3BlcnRpZXMiLCJjaGFuZ2VIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJFU0NBUEVfS0VZX0NPREUiLCJvbkNhbmNlbCIsImNhbmNlbEhhbmRsZXIiLCJnZXROYW1lIiwiaHRtbCIsIm5hbWUiLCJzZXROYW1lIiwic2hvdyIsImRpc3BsYXkiLCJJTkxJTkVfQkxPQ0siLCJmb2N1cyIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiaHRtbExlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRleHROb2RlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImhpZGUiLCJkaWRNb3VudCIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmS2V5RG93biIsInBhcmVudENvbnRleHQiLCJzaG93TmFtZUlucHV0IiwiYmluZCIsImhpZGVOYW1lSW5wdXQiLCJnZXROYW1lSW5wdXROYW1lIiwic2V0TmFtZUlucHV0TmFtZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsInJvbGUiLCJjbGFzc05hbWUiLCJjb250ZW50RWRpdGFibGUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlIQTs7O2VBQUE7OztrRUEvR3NCO3lCQUVTO3lCQUVGO29CQUNhO3dCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQUEsQUFBTUUsMEJBcUdILEFBckdIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNKQywrQ0FBQUEsa0JBQWlCLFNBQUNDLE9BQU9DLFNBQVk7WUFDbkMsSUFBTSxBQUFFQyxVQUFZRixNQUFaRTtZQUVSLElBQUlBLFlBQVlDLHdCQUFjLEVBQUU7Z0JBQzlCLElBQU0sQUFBRUMsV0FBYSxNQUFLQyxVQUFVLENBQTVCRCxVQUNGRSxnQkFBZ0JGLFVBQVUsR0FBRztnQkFFbkNFO2dCQUVBTixNQUFNTyxjQUFjO1lBQ3RCLENBQUM7WUFFRCxJQUFJTCxZQUFZTSx5QkFBZSxFQUFFO2dCQUMvQixJQUFNLEFBQUVDLFdBQWEsTUFBS0osVUFBVSxDQUE1QkksVUFDRkMsZ0JBQWdCRCxVQUFVLEdBQUc7Z0JBRW5DQztnQkFFQVYsTUFBTU8sY0FBYztZQUN0QixDQUFDO1FBQ0g7OztpQkFyQklUOztZQXVCSmEsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsSUFBTUMsT0FBTyxJQUFJLENBQUNBLElBQUksSUFDaEJDLE9BQU9ELE1BQU8sR0FBRztnQkFFdkIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRRCxJQUFJLEVBQUU7Z0JBQ1osSUFBTUQsT0FBT0MsTUFBTyxHQUFHO2dCQUV2QixJQUFJLENBQUNELElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPO2dCQUNMLElBQU1DLFVBQVVDLHVCQUFZO2dCQUU1QixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7Z0JBRWIsSUFBSSxDQUFDRSxLQUFLO2dCQUVWLElBQU1OLE9BQU8sSUFBSSxDQUFDQSxJQUFJLElBQ2hCTyxRQUFRQyxjQUFRLENBQUNDLFdBQVcsSUFDNUJDLFlBQVlDLFlBQU0sQ0FBQ0MsWUFBWSxJQUMvQkMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGFBQWFmLEtBQUtnQixNQUFNLEVBQ3hCLEFBQUVDLGFBQWVKLFdBQWZJLFlBQ0ZDLGlCQUFpQmxDLE1BQU1pQyxhQUN2QkUsV0FBV0QsZ0JBQWlCLEdBQUc7Z0JBRXJDWCxNQUFNYSxRQUFRLENBQUNELFVBQVVKO2dCQUV6QlIsTUFBTWMsTUFBTSxDQUFDRixVQUFVSjtnQkFFdkJMLFVBQVVZLGVBQWU7Z0JBRXpCWixVQUFVYSxRQUFRLENBQUNoQjtZQUNyQjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsT0FBTztnQkFDTCxxQkE5REV0QyxzQkE4RElzQyxRQUFOLElBQUs7WUFDUDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ3ZDLGNBQWM7WUFDcEM7OztZQUVBd0MsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDekMsY0FBYztZQUNyQzs7O1lBRUEwQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLGdCQUFnQixJQUFJLENBQUMzQixJQUFJLENBQUM0QixJQUFJLENBQUMsSUFBSSxHQUNuQ0MsZ0JBQWdCLElBQUksQ0FBQ1IsSUFBSSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUNuQ0UsbUJBQW1CLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQ2dDLElBQUksQ0FBQyxJQUFJLEdBQ3pDRyxtQkFBbUIsSUFBSSxDQUFDaEMsT0FBTyxDQUFDNkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUVyRCxPQUFRO29CQUNORCxlQUFBQTtvQkFDQUUsZUFBQUE7b0JBQ0FDLGtCQUFBQTtvQkFDQUMsa0JBQUFBO2dCQUNGO1lBQ0Y7OztXQXJGSWhEO21CQUFrQmlELGFBQU87QUF1RjdCLGdCQXZGSWpELFdBdUZHa0QsV0FBVSxRQUFTLEdBQUc7O0FBRTdCLGdCQXpGSWxELFdBeUZHbUQscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGdCQTlGSW5ELFdBOEZHb0QscUJBQW9CO0lBQ3pCQyxNQUFNO0lBQ05DLFdBQVc7SUFDWEMsaUJBQWlCO0FBQ25CO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3hEIn0=