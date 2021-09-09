"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _necessary = require("necessary");
var _easy = require("easy");
var _styles = require("../styles");
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
        "\n\n  width: fit-content;\n  display: block;\n  list-style: none;\n  min-height: ",
        ";\n  margin-top: ",
        ";\n  \n"
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
                var _constructor = this.constructor, type = _constructor.type;
                return type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                var _properties = this.properties, name = _properties.name;
                return name;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var _properties = this.properties, explorer = _properties.explorer;
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
var _default = (0, _easyWithStyle).default(EntryItem)(_templateObject(), _styles.entryItemMinHeight, _styles.entryItemMarginTop);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsImFycmF5VXRpbGl0aWVzIiwiRWxlbWVudCIsImVudHJ5SXRlbU1pbkhlaWdodCIsImVudHJ5SXRlbU1hcmdpblRvcCIsImZpcnN0IiwiRW50cnlJdGVtIiwiZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImhlaWdodCIsImFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMiLCJnZXRBc2NlbmRhbnRFbGVtZW50cyIsImFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCIsImdldFBhdGgiLCJwYXRoIiwibmFtZSIsImdldE5hbWUiLCJwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRUeXBlIiwidHlwZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVSLEdBQVcsQ0FBWCxVQUFXO0FBRWxCLEdBQU0sQ0FBTixLQUFNO0FBRXlCLEdBQVcsQ0FBWCxPQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9FOUIsaUZBS3RC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