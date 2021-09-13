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
var EntryItem = /*#__PURE__*/ function(Element1) {
    _inherits(EntryItem, Element1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGVudHJ5SXRlbU1pbkhlaWdodCwgZW50cnlJdGVtTWFyZ2luVG9wIH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgRW50cnlJdGVtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGxldCBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBjb25zdCBoZWlnaHQgPSAyLFxuICAgICAgICAgIGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldEFzY2VuZGFudEVsZW1lbnRzKFwibGkuZW50cnkuZHJhZy5kaXJlY3RvcnktbmFtZVwiLCBoZWlnaHQpLFxuICAgICAgICAgIGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGggPSBhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RBc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnQgPSBmaXJzdChhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzKTtcblxuICAgICAgcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gIFx0bGV0IHBhdGg7XG5cbiAgXHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgXHRcdFx0cGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldFBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgXHRpZiAocGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgXHRcdHBhdGggPSBuYW1lOyAgLy8vXG4gIFx0fSBlbHNlIHtcbiAgXHRcdGNvbnN0IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICBcdFx0cGF0aCA9IGAke3BhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aH0vJHtuYW1lfWA7XG4gIFx0fVxuXG4gIFx0cmV0dXJuIHBhdGg7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibmFtZVwiLFxuICAgIFwiZXhwbG9yZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cnlcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cnlJdGVtKWBcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtaW4taGVpZ2h0OiAke2VudHJ5SXRlbU1pbkhlaWdodH07XG4gIG1hcmdpbi10b3A6ICR7ZW50cnlJdGVtTWFyZ2luVG9wfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFUixVQUFXO0lBRWxCLEtBQU07SUFFeUIsT0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FvRTlCLGlGQUt0QjtTQUFxQixpQkFDckI7U0FBcUIsT0FFbkM7Ozs7Ozs7SUExRVEsS0FBSyxHQU5rQixVQUFXLGdCQU1sQyxLQUFLO0lBRVAsU0FBUztjQUFULFNBQVM7YUFBVCxTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7aUJBQVQsU0FBUzs7WUFDYixHQUFtQyxHQUFuQyxtQ0FBbUM7NEJBQW5DLG1DQUFtQztvQkFDN0IsZ0NBQWdDLEdBQUcsSUFBSTtvQkFFckMsTUFBTSxHQUFHLENBQUMsRUFDViwyQ0FBMkMsUUFBUSxvQkFBb0IsRUFBQyw0QkFBOEIsR0FBRSxNQUFNLEdBQzlHLGlEQUFpRCxHQUFHLDJDQUEyQyxDQUFDLE1BQU07b0JBRXhHLGlEQUFpRCxHQUFHLENBQUM7d0JBQ2pELCtDQUErQyxHQUFHLEtBQUssQ0FBQywyQ0FBMkM7b0JBRXpHLGdDQUFnQyxHQUFHLCtDQUErQyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7dUJBR25GLGdDQUFnQzs7OztZQUd6QyxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNGLElBQUk7b0JBRUYsSUFBSSxRQUFRLE9BQU8sSUFDckIsZ0NBQWdDLFFBQVEsbUNBQW1DO29CQUUzRSxnQ0FBZ0MsS0FBSyxJQUFJO29CQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7d0JBRVgsb0NBQW9DLEdBQUcsZ0NBQWdDLENBQUMsT0FBTztvQkFFckYsSUFBSSxNQUE4QyxNQUFJLENBQTVDLG9DQUFvQyxHQUFDLENBQUMsR0FBTyxNQUFBLENBQUwsSUFBSTs7dUJBR2hELElBQUk7Ozs7WUFHWixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNZLFlBQWdCLFFBQVgsV0FBVyxFQUF6QixJQUFJLEdBQUssWUFBZ0IsQ0FBekIsSUFBSTt1QkFFTCxJQUFJOzs7O1lBR2IsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTztvQkFDWSxXQUFlLFFBQVYsVUFBVSxFQUF4QixJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJO3VCQUVMLElBQUk7Ozs7WUFHYixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNZLFdBQWUsUUFBVixVQUFVLEVBQTVCLFFBQVEsR0FBSyxXQUFlLENBQTVCLFFBQVE7dUJBRVQsUUFBUTs7OztXQWpEYixTQUFTO21CQU5TLEtBQU07Z0JBTXhCLFNBQVMsR0FvRE4sT0FBTyxJQUFHLEVBQUk7Z0JBcERqQixTQUFTLEdBc0ROLGlCQUFpQjtLQUN0QixJQUFNO0tBQ04sUUFBVTs7Z0JBeERSLFNBQVMsR0EyRE4saUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOzttQkF0RUEsY0FBaUIsVUEwRWQsU0FBUyxxQkFwRXFCLE9BQVcscUJBQVgsT0FBVyJ9