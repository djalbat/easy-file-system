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
    function ExplorerDiv(selector, mounted) {
        _classCallCheck(this, ExplorerDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ExplorerDiv).call(this, selector));
        _this.mounted = mounted;
        return _this;
    }
    _createClass(ExplorerDiv, [
        {
            key: "isMounted",
            value: function isMounted() {
                return this.mounted;
            }
        },
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
            key: "didMount",
            value: function didMount() {
                this.mounted = true;
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.mounted = false;
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
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var mounted = false, explorerDiv = _easy.Element.fromClass(Class, properties, mounted);
                return explorerDiv;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZXhwbG9yZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRW50cmllc0RpdiBmcm9tIFwiLi4vZGl2L2VudHJpZXNcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeURpdiBmcm9tIFwiLi4vZGl2L2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2IGZyb20gXCIuLi9kaXYvZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5cbmNsYXNzIEV4cGxvcmVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb3VudGVkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5tb3VudGVkID0gbW91bnRlZDtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudGVkO1xuICB9XG5cbiAgZ2V0RW50cmllc0RpdigpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0Rpdjtcblx0fVxuXG5cdGdldEZpbGVOYW1lRHJhZ0VudHJ5RGl2KCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlckRpdiA9IHRoaXM7XHQvLy9cblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzRGl2IGV4cGxvcmVyRGl2PXtleHBsb3JlckRpdn0gLz5cblxuXHRcdCk7XG5cdH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNEaXYgPSBFbnRyaWVzRGl2O1xuXG5cdHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeURpdiA9IEZpbGVOYW1lRHJhZ0VudHJ5RGl2O1xuXG5cdHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBsb3JlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IG1vdW50ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHBsb3JlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBtb3VudGVkKTtcblxuICAgIHJldHVybiBleHBsb3JlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXJEaXYpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRVAsUUFBZ0I7SUFDTixTQUE0QjtJQUN2QixjQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F5RWpDLHFDQUl0Qzs7Ozs7OztJQTNFTSxXQUFXO2NBQVgsV0FBVzthQUFYLFdBQVcsQ0FDSCxRQUFRLEVBQUUsT0FBTzs4QkFEekIsV0FBVzs7aUVBQVgsV0FBVyxhQUVQLFFBQVE7Y0FFVCxPQUFPLEdBQUcsT0FBTzs7O2lCQUpwQixXQUFXOztZQU9mLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVM7NEJBQ0ssT0FBTzs7OztZQUdyQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNXLFlBQWdCLFFBQVgsV0FBVyxFQUEvQixVQUFVLEdBQUssWUFBZ0IsQ0FBL0IsVUFBVTt1QkFFWCxVQUFVOzs7O1lBR25CLEdBQXVCLEdBQXZCLHVCQUF1Qjs0QkFBdkIsdUJBQXVCO29CQUNXLFlBQWdCLFFBQVgsV0FBVyxFQUF6QyxvQkFBb0IsR0FBSyxZQUFnQixDQUF6QyxvQkFBb0I7dUJBRXJCLG9CQUFvQjs7OztZQUc1QixHQUE0QixHQUE1Qiw0QkFBNEI7NEJBQTVCLDRCQUE0QjtvQkFDVyxZQUFnQixRQUFYLFdBQVcsRUFBOUMseUJBQXlCLEdBQUssWUFBZ0IsQ0FBOUMseUJBQXlCO3VCQUUxQix5QkFBeUI7Ozs7WUFHakMsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTtxQkFDQSxPQUFPLEdBQUcsSUFBSTs7OztZQUdyQixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNKLE9BQU8sR0FBRyxLQUFLOzs7O1lBR3RCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ04sV0FBVyxRQUFTLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt5REExQ1QsUUFBZ0I7b0JBOEN2QixXQUFXLEVBQUUsV0FBVzs7Ozs7WUFLdEMsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSixhQUFhOzs7OztZQWVaLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVTtvQkFDMUIsT0FBTyxHQUFHLEtBQUssRUFDZixXQUFXLEdBdkVHLEtBQU0sU0F1RUUsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTzt1QkFFekQsV0FBVzs7OztXQW5FaEIsV0FBVzttQkFOTyxLQUFNO2dCQU14QixXQUFXLEdBbURULFVBQVUsR0F2REssUUFBZ0I7Z0JBSWpDLFdBQVcsR0FxRFQsb0JBQW9CLEdBeERLLFNBQTRCO2dCQUd2RCxXQUFXLEdBdURULHlCQUF5QixHQXpESyxjQUFpQztnQkFFakUsV0FBVyxHQXlEUixPQUFPLElBQUcsR0FBSztnQkF6RGxCLFdBQVcsR0EyRFIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxRQUFVOzttQkFwRUgsY0FBaUIsVUErRWQsV0FBVyJ9