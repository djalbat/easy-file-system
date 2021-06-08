"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _entries = _interopRequireDefault(require("../div/entries"));
var _fileName = _interopRequireDefault(require("../div/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("../div/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("../div/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("../div/entry/marker/directoryName"));
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
            key: "getFileNameMarkerEntryDiv",
            value: function getFileNameMarkerEntryDiv() {
                var _constructor = this.constructor, FileNameMarkerEntryDiv = _constructor.FileNameMarkerEntryDiv;
                return FileNameMarkerEntryDiv;
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
            key: "getDirectoryNameMarkerEntryDiv",
            value: function getDirectoryNameMarkerEntryDiv() {
                var _constructor = this.constructor, DirectoryNameMarkerEntryDiv = _constructor.DirectoryNameMarkerEntryDiv;
                return DirectoryNameMarkerEntryDiv;
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
_defineProperty(ExplorerDiv, "FileNameMarkerEntryDiv", _fileName1.default);
_defineProperty(ExplorerDiv, "DirectoryNameDragEntryDiv", _directoryName.default);
_defineProperty(ExplorerDiv, "DirectoryNameMarkerEntryDiv", _directoryName1.default);
_defineProperty(ExplorerDiv, "tagName", "div");
_defineProperty(ExplorerDiv, "defaultProperties", {
    className: "explorer"
});
var _default = (0, _easyWithStyle).default(ExplorerDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZXhwbG9yZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRW50cmllc0RpdiBmcm9tIFwiLi4vZGl2L2VudHJpZXNcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeURpdiBmcm9tIFwiLi4vZGl2L2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5RGl2IGZyb20gXCIuLi9kaXYvZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiBmcm9tIFwiLi4vZGl2L2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdiBmcm9tIFwiLi4vZGl2L2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmNsYXNzIEV4cGxvcmVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb3VudGVkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5tb3VudGVkID0gbW91bnRlZDtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudGVkO1xuICB9XG5cbiAgZ2V0RW50cmllc0RpdigpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0Rpdjtcblx0fVxuXG5cdGdldEZpbGVOYW1lRHJhZ0VudHJ5RGl2KCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5RGl2KCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeURpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5RGl2O1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdigpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlEaXY7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcztcdC8vL1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNEaXYgZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0RpdiA9IEVudHJpZXNEaXY7XG5cblx0c3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gRmlsZU5hbWVEcmFnRW50cnlEaXY7XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlEaXYgPSBGaWxlTmFtZU1hcmtlckVudHJ5RGl2O1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2ID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyRGl2O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlckRpdilgXG4gIFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFUCxRQUFnQjtJQUNOLFNBQTRCO0lBQzFCLFVBQThCO0lBQzNCLGNBQWlDO0lBQy9CLGVBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXlGckMscUNBSXRDOzs7Ozs7O0lBM0ZNLFdBQVc7Y0FBWCxXQUFXO2FBQVgsV0FBVyxDQUNILFFBQVEsRUFBRSxPQUFPOzhCQUR6QixXQUFXOztpRUFBWCxXQUFXLGFBRVAsUUFBUTtjQUVULE9BQU8sR0FBRyxPQUFPOzs7aUJBSnBCLFdBQVc7O1lBT2YsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxPQUFPOzs7O1lBR3JCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQS9CLFVBQVUsR0FBSyxZQUFnQixDQUEvQixVQUFVO3VCQUVYLFVBQVU7Ozs7WUFHbkIsR0FBdUIsR0FBdkIsdUJBQXVCOzRCQUF2Qix1QkFBdUI7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQXpDLG9CQUFvQixHQUFLLFlBQWdCLENBQXpDLG9CQUFvQjt1QkFFckIsb0JBQW9COzs7O1lBRzNCLEdBQXlCLEdBQXpCLHlCQUF5Qjs0QkFBekIseUJBQXlCO29CQUNZLFlBQWdCLFFBQVgsV0FBVyxFQUEzQyxzQkFBc0IsR0FBSyxZQUFnQixDQUEzQyxzQkFBc0I7dUJBRXZCLHNCQUFzQjs7OztZQUcvQixHQUE0QixHQUE1Qiw0QkFBNEI7NEJBQTVCLDRCQUE0QjtvQkFDVSxZQUFnQixRQUFYLFdBQVcsRUFBOUMseUJBQXlCLEdBQUssWUFBZ0IsQ0FBOUMseUJBQXlCO3VCQUUxQix5QkFBeUI7Ozs7WUFHaEMsR0FBOEIsR0FBOUIsOEJBQThCOzRCQUE5Qiw4QkFBOEI7b0JBQ1ksWUFBZ0IsUUFBWCxXQUFXLEVBQWhELDJCQUEyQixHQUFLLFlBQWdCLENBQWhELDJCQUEyQjt1QkFFNUIsMkJBQTJCOzs7O1lBR3BDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsT0FBTyxHQUFHLElBQUk7Ozs7WUFHckIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSixPQUFPLEdBQUcsS0FBSzs7OztZQUd0QixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNOLFdBQVcsUUFBUyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7eURBeERULFFBQWdCO29CQTREdkIsV0FBVyxFQUFFLFdBQVc7Ozs7O1lBS3RDLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVU7cUJBQ0osYUFBYTs7Ozs7WUFtQlosR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVO29CQUMxQixPQUFPLEdBQUcsS0FBSyxFQUNmLFdBQVcsR0F6RkcsS0FBTSxTQXlGRSxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPO3VCQUV6RCxXQUFXOzs7O1dBbkZoQixXQUFXO21CQVJPLEtBQU07Z0JBUXhCLFdBQVcsR0ErRFQsVUFBVSxHQXJFSyxRQUFnQjtnQkFNakMsV0FBVyxHQWlFVCxvQkFBb0IsR0F0RUssU0FBNEI7Z0JBS3ZELFdBQVcsR0FtRVIsc0JBQXNCLEdBdkVJLFVBQThCO2dCQUkzRCxXQUFXLEdBcUVSLHlCQUF5QixHQXhFSSxjQUFpQztnQkFHakUsV0FBVyxHQXVFUiwyQkFBMkIsR0F6RUksZUFBbUM7Z0JBRXJFLFdBQVcsR0F5RVIsT0FBTyxJQUFHLEdBQUs7Z0JBekVsQixXQUFXLEdBMkVSLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsUUFBVTs7bUJBdEZILGNBQWlCLFVBaUdkLFdBQVcifQ==