"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _necessary = require("necessary");
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
        "\n\n  width: fit-content;\n  display: block;\n  list-style: none;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first;
var EntryItem = /*#__PURE__*/ function(Element) {
    _inherits(EntryItem, Element);
    function EntryItem() {
        _classCallCheck(this, EntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(EntryItem).apply(this, arguments));
    }
    _createClass(EntryItem, [
        {
            key: "getParentDirectoryNameDragEntryItem",
            value: function getParentDirectoryNameDragEntryItem() {
                var parentDirectoryNameDragEntryItem = null;
                var height = 2, ascendantDirectoryNameDragEntryItemElements = this.getAscendantElements("li.entry.drag.directory-name", height), ascendantDirectoryNameDragEntryItemElementsLength = ascendantDirectoryNameDragEntryItemElements.length;
                if (ascendantDirectoryNameDragEntryItemElementsLength > 0) {
                    var firstAscendantDirectoryNameDragEntryItemElement = first(ascendantDirectoryNameDragEntryItemElements);
                    parentDirectoryNameDragEntryItem = firstAscendantDirectoryNameDragEntryItemElement; ///
                }
                return parentDirectoryNameDragEntryItem;
            }
        },
        {
            key: "getPath",
            value: function getPath() {
                var path;
                var name = this.getName(), parentDirectoryNameDragEntryItem = this.getParentDirectoryNameDragEntryItem();
                if (parentDirectoryNameDragEntryItem === null) {
                    path = name; ///
                } else {
                    var parentDirectoryNameDragEntryItemPath = parentDirectoryNameDragEntryItem.getPath();
                    path = "".concat(parentDirectoryNameDragEntryItemPath, "/").concat(name);
                }
                return path;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type = this.constructor.type;
                return type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var name = this.properties.name;
                return name;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this.properties.explorer;
                return explorer;
            }
        }
    ]);
    return EntryItem;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(EntryItem, "tagName", "li");
_defineProperty(EntryItem, "ignoredProperties", [
    "name",
    "explorer"
]);
_defineProperty(EntryItem, "defaultProperties", {
    className: "entry"
});
var _default = (0, _easyWithStyle).default(EntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyeUl0ZW0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IGhlaWdodCA9IDIsXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50cyA9IHRoaXMuZ2V0QXNjZW5kYW50RWxlbWVudHMoXCJsaS5lbnRyeS5kcmFnLmRpcmVjdG9yeS1uYW1lXCIsIGhlaWdodCksXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50c0xlbmd0aCA9IGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCA9IGZpcnN0KGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGZpcnN0QXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgXHRsZXQgcGF0aDtcblxuICBcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICBcdFx0XHRwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICBcdGlmIChwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICBcdFx0cGF0aCA9IG5hbWU7ICAvLy9cbiAgXHR9IGVsc2Uge1xuICBcdFx0Y29uc3QgcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gIFx0XHRwYXRoID0gYCR7cGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRofS8ke25hbWV9YDtcbiAgXHR9XG5cbiAgXHRyZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyeVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyeUl0ZW0pYFxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsIkVudHJ5SXRlbSIsImdldFBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJoZWlnaHQiLCJhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0QXNjZW5kYW50RWxlbWVudHMiLCJhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RBc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnQiLCJnZXRQYXRoIiwicGF0aCIsIm5hbWUiLCJnZXROYW1lIiwicGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0VHlwZSIsInR5cGUiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUixHQUFXLENBQVgsVUFBVztBQUVsQixHQUFNLENBQU4sS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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