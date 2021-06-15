"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _drop = _interopRequireDefault(require("./mixins/drop"));
var _entries = _interopRequireDefault(require("./list/entries"));
var _marker = _interopRequireDefault(require("./mixins/marker"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
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
var Explorer = /*#__PURE__*/ function(Element1) {
    _inherits(Explorer, Element1);
    function Explorer(selector, mounted) {
        _classCallCheck(this, Explorer);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Explorer).call(this, selector));
        _this.mounted = mounted;
        return _this;
    }
    _createClass(Explorer, [
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this; ///
                return explorer;
            }
        },
        {
            key: "getPath",
            value: function getPath() {
                var path = null; ///
                return path;
            }
        },
        {
            key: "isMounted",
            value: function isMounted() {
                return this.mounted;
            }
        },
        {
            key: "getEntriesList",
            value: function getEntriesList() {
                var _constructor = this.constructor, EntriesList = _constructor.EntriesList;
                return EntriesList;
            }
        },
        {
            key: "getFileNameDragEntryItem",
            value: function getFileNameDragEntryItem() {
                var _constructor = this.constructor, FileNameDragEntryItem = _constructor.FileNameDragEntryItem;
                return FileNameDragEntryItem;
            }
        },
        {
            key: "getFileNameMarkerEntryItem",
            value: function getFileNameMarkerEntryItem() {
                var _constructor = this.constructor, FileNameMarkerEntryItem = _constructor.FileNameMarkerEntryItem;
                return FileNameMarkerEntryItem;
            }
        },
        {
            key: "getDirectoryNameDragEntryItem",
            value: function getDirectoryNameDragEntryItem() {
                var _constructor = this.constructor, DirectoryNameDragEntryItem = _constructor.DirectoryNameDragEntryItem;
                return DirectoryNameDragEntryItem;
            }
        },
        {
            key: "getDirectoryNameMarkerEntryItem",
            value: function getDirectoryNameMarkerEntryItem() {
                var _constructor = this.constructor, DirectoryNameMarkerEntryItem = _constructor.DirectoryNameMarkerEntryItem;
                return DirectoryNameMarkerEntryItem;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.mounted = true;
                this.enableDrop();
                this.enableMarker();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.mounted = false;
                this.disableDrop();
                this.disableMarker();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorer = this;
                return(/*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
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
                var mounted = false, explorer = _easy.Element.fromClass(Class, properties, mounted);
                return explorer;
            }
        }
    ]);
    return Explorer;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Explorer, "EntriesList", _entries.default);
_defineProperty(Explorer, "FileNameDragEntryItem", _fileName.default);
_defineProperty(Explorer, "FileNameMarkerEntryItem", _fileName1.default);
_defineProperty(Explorer, "DirectoryNameDragEntryItem", _directoryName.default);
_defineProperty(Explorer, "DirectoryNameMarkerEntryItem", _directoryName1.default);
_defineProperty(Explorer, "tagName", "div");
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _drop.default);
Object.assign(Explorer.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBkcm9wTWl4aW5zIGZyb20gXCIuL21peGlucy9kcm9wXCI7XG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuL21peGlucy9tYXJrZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cblx0Z2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMuZW5hYmxlTWFya2VyKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMuZGlzYWJsZU1hcmtlcigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7XG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG5cdHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBtYXJrZXJNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBRVAsS0FBZTtJQUNkLFFBQWdCO0lBQ2YsT0FBaUI7SUFDUixTQUE0QjtJQUMxQixVQUE4QjtJQUMzQixjQUFpQztJQUMvQixlQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnSHpDLHFDQUluQzs7Ozs7OztJQWxITSxRQUFRO2NBQVIsUUFBUTthQUFSLFFBQVEsQ0FDQSxRQUFRLEVBQUUsT0FBTzs4QkFEekIsUUFBUTs7aUVBQVIsUUFBUSxhQUVKLFFBQVE7Y0FFVCxPQUFPLEdBQUcsT0FBTzs7O2lCQUpwQixRQUFROztZQU9aLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsUUFBUSxRQUFVLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFcEIsUUFBUTs7OztZQUdqQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNDLElBQUksR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUVoQixJQUFJOzs7O1lBR2IsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxPQUFPOzs7O1lBR3JCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQWhDLFdBQVcsR0FBSyxZQUFnQixDQUFoQyxXQUFXO3VCQUVaLFdBQVc7Ozs7WUFHcEIsR0FBd0IsR0FBeEIsd0JBQXdCOzRCQUF4Qix3QkFBd0I7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQTFDLHFCQUFxQixHQUFLLFlBQWdCLENBQTFDLHFCQUFxQjt1QkFFdEIscUJBQXFCOzs7O1lBRzVCLEdBQTBCLEdBQTFCLDBCQUEwQjs0QkFBMUIsMEJBQTBCO29CQUNZLFlBQWdCLFFBQVgsV0FBVyxFQUE1Qyx1QkFBdUIsR0FBSyxZQUFnQixDQUE1Qyx1QkFBdUI7dUJBRXhCLHVCQUF1Qjs7OztZQUdoQyxHQUE2QixHQUE3Qiw2QkFBNkI7NEJBQTdCLDZCQUE2QjtvQkFDVSxZQUFnQixRQUFYLFdBQVcsRUFBL0MsMEJBQTBCLEdBQUssWUFBZ0IsQ0FBL0MsMEJBQTBCO3VCQUUzQiwwQkFBMEI7Ozs7WUFHakMsR0FBK0IsR0FBL0IsK0JBQStCOzRCQUEvQiwrQkFBK0I7b0JBQ1ksWUFBZ0IsUUFBWCxXQUFXLEVBQWpELDRCQUE0QixHQUFLLFlBQWdCLENBQWpELDRCQUE0Qjt1QkFFN0IsNEJBQTRCOzs7O1lBR3JDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsT0FBTyxHQUFHLElBQUk7cUJBRWQsVUFBVTtxQkFFVixZQUFZOzs7O1lBR25CLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7cUJBQ0osT0FBTyxHQUFHLEtBQUs7cUJBRWYsV0FBVztxQkFFWCxhQUFhOzs7O1lBR3BCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ04sUUFBUTt5REE3RU8sUUFBZ0I7b0JBaUZ2QixRQUFRLEVBQUUsUUFBUTtvQkFBRSxPQUFPLEVBQVAsSUFBTzs7Ozs7WUFLMUMsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtxQkFDSixhQUFhOzs7OztZQW1CWixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7b0JBQzFCLE9BQU8sR0FBRyxLQUFLLEVBQ2YsUUFBUSxHQS9HTSxLQUFNLFNBK0dELFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU87dUJBRXRELFFBQVE7Ozs7V0F2R2IsUUFBUTttQkFWVSxLQUFNO2dCQVV4QixRQUFRLEdBbUZOLFdBQVcsR0ExRkssUUFBZ0I7Z0JBT2xDLFFBQVEsR0FxRk4scUJBQXFCLEdBMUZLLFNBQTRCO2dCQUt4RCxRQUFRLEdBdUZMLHVCQUF1QixHQTNGSSxVQUE4QjtnQkFJNUQsUUFBUSxHQXlGTCwwQkFBMEIsR0E1RkksY0FBaUM7Z0JBR2xFLFFBQVEsR0EyRkwsNEJBQTRCLEdBN0ZJLGVBQW1DO2dCQUV0RSxRQUFRLEdBNkZMLE9BQU8sSUFBRyxHQUFLO2dCQTdGbEIsUUFBUSxHQStGTCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFFBQVU7O0FBV3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFuSFQsS0FBZTtBQW9IdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQWxIUCxPQUFpQjttQkFOcEIsY0FBaUIsVUEwSGQsUUFBUSJ9