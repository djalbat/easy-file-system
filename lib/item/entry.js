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
var _default = (0, _easyWithStyle).default(EntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsImFycmF5VXRpbGl0aWVzIiwiRWxlbWVudCIsImZpcnN0IiwiRW50cnlJdGVtIiwiZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImhlaWdodCIsImFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMiLCJnZXRBc2NlbmRhbnRFbGVtZW50cyIsImFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCIsImdldFBhdGgiLCJwYXRoIiwibmFtZSIsImdldE5hbWUiLCJwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRUeXBlIiwidHlwZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVSLEdBQVcsQ0FBWCxVQUFXO0FBRWxCLEdBQU0sQ0FBTixLQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9FTSxDQU1wQzs7Ozs7OztBQXhFQSxHQUFLLENBQUcsS0FBSyxHQUprQixVQUFXLGdCQUlsQyxLQUFLO0lBRVAsU0FBUyxpQkFBZixRQUFRO2NBQUYsU0FBUzthQUFULFNBQVM7OEJBQVQsU0FBUztnRUFBVCxTQUFTOztpQkFBVCxTQUFTOztZQUNiLEdBQW1DLEVBQW5DLENBQW1DO21CQUFuQyxRQUFRLENBQVIsbUNBQW1DLEdBQUcsQ0FBQztnQkFDckMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLElBQUk7Z0JBRTNDLEdBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNWLDJDQUEyQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUE4QiwrQkFBRSxNQUFNLEdBQzlHLGlEQUFpRCxHQUFHLDJDQUEyQyxDQUFDLE1BQU07Z0JBRTVHLEVBQUUsRUFBRSxpREFBaUQsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDMUQsR0FBSyxDQUFDLCtDQUErQyxHQUFHLEtBQUssQ0FBQywyQ0FBMkM7b0JBRXpHLGdDQUFnQyxHQUFHLCtDQUErQyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDMUYsQ0FBQztnQkFFRCxNQUFNLENBQUMsZ0NBQWdDO1lBQ3pDLENBQUM7OztZQUVELEdBQU8sRUFBUCxDQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVixHQUFHLENBQUMsSUFBSTtnQkFFUixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ3JCLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxtQ0FBbUM7Z0JBRS9FLEVBQUUsRUFBRSxnQ0FBZ0MsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBQ2xCLENBQUMsTUFBTSxDQUFDO29CQUNQLEdBQUssQ0FBQyxvQ0FBb0MsR0FBRyxnQ0FBZ0MsQ0FBQyxPQUFPO29CQUVyRixJQUFJLEdBQUksQ0FBQSxFQUEwQyxNQUFJLENBQTVDLG9DQUFvQyxFQUFDLENBQUMsSUFBTyxNQUFBLENBQUwsSUFBSTtnQkFDdkQsQ0FBQztnQkFFRCxNQUFNLENBQUMsSUFBSTtZQUNaLENBQUM7OztZQUVELEdBQU8sRUFBUCxDQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxHQUFLLENBQVksWUFBZ0IsR0FBaEIsSUFBSSxDQUFDLFdBQVcsRUFBekIsSUFBSSxHQUFLLFlBQWdCLENBQXpCLElBQUk7Z0JBRVosTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7WUFFRCxHQUFPLEVBQVAsQ0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFZLFdBQWUsR0FBZixJQUFJLENBQUMsVUFBVSxFQUF4QixJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJO2dCQUVaLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7O1lBRUQsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLEdBQUssQ0FBZ0IsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQTVCLFFBQVEsR0FBSyxXQUFlLENBQTVCLFFBQVE7Z0JBRWhCLE1BQU0sQ0FBQyxRQUFRO1lBQ2pCLENBQUM7OztXQWxERyxTQUFTO21CQUpTLEtBQU07Z0JBSXhCLFNBQVMsRUFvRE4sQ0FBTyxVQUFHLENBQUk7Z0JBcERqQixTQUFTLEVBc0ROLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsQ0FBTTtJQUNOLENBQVU7QUFDWixDQUFDO2dCQXpERyxTQUFTLEVBMkROLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQU87QUFDcEIsQ0FBQzttQkFyRW1CLGNBQWlCLFVBd0VkLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgRW50cnlJdGVtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuICAgIGxldCBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBjb25zdCBoZWlnaHQgPSAyLFxuICAgICAgICAgIGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldEFzY2VuZGFudEVsZW1lbnRzKFwibGkuZW50cnkuZHJhZy5kaXJlY3RvcnktbmFtZVwiLCBoZWlnaHQpLFxuICAgICAgICAgIGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGggPSBhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RBc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnQgPSBmaXJzdChhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzKTtcblxuICAgICAgcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gIFx0bGV0IHBhdGg7XG5cbiAgXHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgXHRcdFx0cGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmdldFBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgXHRpZiAocGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgXHRcdHBhdGggPSBuYW1lOyAgLy8vXG4gIFx0fSBlbHNlIHtcbiAgXHRcdGNvbnN0IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICBcdFx0cGF0aCA9IGAke3BhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aH0vJHtuYW1lfWA7XG4gIFx0fVxuXG4gIFx0cmV0dXJuIHBhdGg7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibmFtZVwiLFxuICAgIFwiZXhwbG9yZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cnlcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cnlJdGVtKWBcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBcbmA7XG4iXX0=