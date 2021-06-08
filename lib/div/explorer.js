"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _entries = _interopRequireDefault(require("../div/entries"));
var _fileName = _interopRequireDefault(require("../div/entry/drag/fileName"));
var _directoryName = _interopRequireDefault(require("../div/entry/drag/directoryName"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  width: fit-content;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ExplorerDiv = /*#__PURE__*/ function(Element1) {
    _inherits(ExplorerDiv, Element1);
    function ExplorerDiv() {
        _classCallCheck(this, ExplorerDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(ExplorerDiv).apply(this, arguments));
    }
    _createClass(ExplorerDiv, [
        {
            key: "getEntriesDiv",
            value: function getEntriesDiv() {
                var _constructor = this.constructor, EntriesDiv = _constructor.EntriesDiv;
                return EntriesDiv;
            }
        },
        {
            key: "getFileNameDragEntryDiv",
            value: function getFileNameDragEntryDiv() {
                var _constructor = this.constructor, FileNameDragEntryDiv = _constructor.FileNameDragEntryDiv;
                return FileNameDragEntryDiv;
            }
        },
        {
            key: "getDirectoryNameDragEntryDiv",
            value: function getDirectoryNameDragEntryDiv() {
                var _constructor = this.constructor, DirectoryNameDragEntryDiv = _constructor.DirectoryNameDragEntryDiv;
                return DirectoryNameDragEntryDiv;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorerDiv = this; ///
                return(/*#__PURE__*/ React.createElement(_entries.default, {
                    explorerDiv: explorerDiv
                }));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return ExplorerDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ExplorerDiv, "EntriesDiv", _entries.default);
_defineProperty(ExplorerDiv, "FileNameDragEntryDiv", _fileName.default);
_defineProperty(ExplorerDiv, "DirectoryNameDragEntryDiv", _directoryName.default);
_defineProperty(ExplorerDiv, "tagName", "div");
_defineProperty(ExplorerDiv, "defaultProperties", {
    className: "explorer"
});
var _default = (0, _easyWithStyle).default(ExplorerDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZXhwbG9yZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRW50cmllc0RpdiBmcm9tIFwiLi4vZGl2L2VudHJpZXNcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeURpdiBmcm9tIFwiLi4vZGl2L2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2IGZyb20gXCIuLi9kaXYvZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5cbmNsYXNzIEV4cGxvcmVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEVudHJpZXNEaXYoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzRGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNEaXY7XG5cdH1cblxuXHRnZXRGaWxlTmFtZURyYWdFbnRyeURpdigpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5RGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cblx0Z2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzO1x0Ly8vXG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0RpdiBleHBsb3JlckRpdj17ZXhwbG9yZXJEaXZ9IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzRGl2ID0gRW50cmllc0RpdjtcblxuXHRzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlEaXYgPSBGaWxlTmFtZURyYWdFbnRyeURpdjtcblxuXHRzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXJEaXYpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRVAsUUFBZ0I7SUFDTixTQUE0QjtJQUN2QixjQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnRGpDLHFDQUl0Qzs7Ozs7OztJQWxETSxXQUFXO2NBQVgsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQUNmLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQS9CLFVBQVUsR0FBSyxZQUFnQixDQUEvQixVQUFVO3VCQUVYLFVBQVU7Ozs7WUFHbkIsR0FBdUIsR0FBdkIsdUJBQXVCOzRCQUF2Qix1QkFBdUI7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQXpDLG9CQUFvQixHQUFLLFlBQWdCLENBQXpDLG9CQUFvQjt1QkFFckIsb0JBQW9COzs7O1lBRzVCLEdBQTRCLEdBQTVCLDRCQUE0Qjs0QkFBNUIsNEJBQTRCO29CQUNXLFlBQWdCLFFBQVgsV0FBVyxFQUE5Qyx5QkFBeUIsR0FBSyxZQUFnQixDQUE5Qyx5QkFBeUI7dUJBRTFCLHlCQUF5Qjs7OztZQUdoQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNOLFdBQVcsUUFBUyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7eURBeEJULFFBQWdCO29CQTRCdkIsV0FBVyxFQUFFLFdBQVc7Ozs7O1lBS3RDLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVU7cUJBQ0osYUFBYTs7OztXQTlCZixXQUFXO21CQU5PLEtBQU07Z0JBTXhCLFdBQVcsR0FpQ1QsVUFBVSxHQXJDSyxRQUFnQjtnQkFJakMsV0FBVyxHQW1DVCxvQkFBb0IsR0F0Q0ssU0FBNEI7Z0JBR3ZELFdBQVcsR0FxQ1QseUJBQXlCLEdBdkNLLGNBQWlDO2dCQUVqRSxXQUFXLEdBdUNSLE9BQU8sSUFBRyxHQUFLO2dCQXZDbEIsV0FBVyxHQXlDUixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFFBQVU7O21CQWxESCxjQUFpQixVQXNEZCxXQUFXIn0=