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
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement) {
                console.log("drag out");
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.mounted = true;
                // this.onDragOut(this.dragOutHandler, this);
                this.enableDrop();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.mounted = false;
                // this.offDragOut(this.dragOutHandler, this);
                this.disableDrop();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBkcm9wTWl4aW5zIGZyb20gXCIuL21peGlucy9kcm9wXCI7XG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuL21peGlucy9tYXJrZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cblx0Z2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGRyYWdPdXRIYW5kbGVyKGRyYWdFbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnIG91dFwiKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICAvLyB0aGlzLm9uRHJhZ091dCh0aGlzLmRyYWdPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgLy8gdGhpcy5lbmFibGVNYXJrZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5vZmZEcmFnT3V0KHRoaXMuZHJhZ091dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgLy8gdGhpcy5kaXNhYmxlTWFya2VyKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpcztcblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cblx0c3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIG1hcmtlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFUCxLQUFlO0lBQ2QsUUFBZ0I7SUFDZixPQUFpQjtJQUNSLFNBQTRCO0lBQzFCLFVBQThCO0lBQzNCLGNBQWlDO0lBQy9CLGVBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXdIekMscUNBSW5DOzs7Ozs7O0lBMUhNLFFBQVE7Y0FBUixRQUFRO2FBQVIsUUFBUSxDQUNBLFFBQVEsRUFBRSxPQUFPOzhCQUR6QixRQUFROztpRUFBUixRQUFRLGFBRUosUUFBUTtjQUVULE9BQU8sR0FBRyxPQUFPOzs7aUJBSnBCLFFBQVE7O1lBT1osR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDSCxRQUFRLFFBQVUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUVwQixRQUFROzs7O1lBR2pCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87b0JBQ0MsSUFBSSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRWhCLElBQUk7Ozs7WUFHYixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTOzRCQUNL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