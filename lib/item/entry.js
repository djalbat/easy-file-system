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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _necessary = require("necessary");
var _easy = require("easy");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: fit-content;\n  display: block;\n  list-style: none;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first, concatenatePaths = _necessary.pathUtilities.concatenatePaths;
var EntryItem = /*#__PURE__*/ function(Element) {
    _inherits(EntryItem, Element);
    function EntryItem() {
        _class_call_check(this, EntryItem);
        return _call_super(this, EntryItem, arguments);
    }
    _create_class(EntryItem, [
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
                    path = concatenatePaths(parentDirectoryNameDragEntryItemPath, name);
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
}(_wrap_native_super(_easy.Element));
_define_property(EntryItem, "tagName", "li");
_define_property(EntryItem, "ignoredProperties", [
    "name",
    "explorer"
]);
_define_property(EntryItem, "defaultProperties", {
    className: "entry"
});
var _default = (0, _easywithstyle.default)(EntryItem)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyeUl0ZW0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IGhlaWdodCA9IDIsXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50cyA9IHRoaXMuZ2V0QXNjZW5kYW50RWxlbWVudHMoXCJsaS5lbnRyeS5kcmFnLmRpcmVjdG9yeS1uYW1lXCIsIGhlaWdodCksXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50c0xlbmd0aCA9IGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCA9IGZpcnN0KGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGZpcnN0QXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgXHRsZXQgcGF0aDtcblxuICBcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICBcdFx0XHRwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICBcdGlmIChwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICBcdFx0cGF0aCA9IG5hbWU7ICAvLy9cbiAgXHR9IGVsc2Uge1xuICBcdFx0Y29uc3QgcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gIFx0XHRwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuICBcdH1cblxuICBcdHJldHVybiBwYXRoO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJsaVwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm5hbWVcIixcbiAgICBcImV4cGxvcmVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJ5XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJ5SXRlbSlgXG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsIkVudHJ5SXRlbSIsImdldFBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJoZWlnaHQiLCJhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0QXNjZW5kYW50RWxlbWVudHMiLCJhc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RBc2NlbmRhbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVsZW1lbnQiLCJnZXRQYXRoIiwicGF0aCIsIm5hbWUiLCJnZXROYW1lIiwicGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0VHlwZSIsInR5cGUiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyRUE7OztlQUFBOzs7b0VBekVzQjt5QkFFd0I7b0JBRXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsbUJBQXFCQyx3QkFBYSxDQUFsQ0Q7QUFFUixJQUFBLEFBQU1FLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1DQUFtQztnQkFFdkMsSUFBTUMsU0FBUyxHQUNUQyw4Q0FBOEMsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxnQ0FBZ0NGLFNBQ3hHRyxvREFBb0RGLDRDQUE0Q0csTUFBTTtnQkFFNUcsSUFBSUQsb0RBQW9ELEdBQUc7b0JBQ3pELElBQU1FLGtEQUFrRFosTUFBTVE7b0JBRTlERixtQ0FBbUNNLGlEQUFrRCxHQUFHO2dCQUMxRjtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQUlDO2dCQUVKLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3JCVixtQ0FBbUMsSUFBSSxDQUFDRCxtQ0FBbUM7Z0JBRS9FLElBQUlDLHFDQUFxQyxNQUFNO29CQUM5Q1EsT0FBT0MsTUFBTyxHQUFHO2dCQUNsQixPQUFPO29CQUNOLElBQU1FLHVDQUF1Q1gsaUNBQWlDTyxPQUFPO29CQUVyRkMsT0FBT1osaUJBQWlCZSxzQ0FBc0NGO2dCQUMvRDtnQkFFQSxPQUFPRDtZQUNSOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsT0FBUyxJQUFJLENBQUNDLFdBQVcsQ0FBekJEO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxPQUFTLElBQUksQ0FBQ00sVUFBVSxDQUF4Qk47Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFdBQWEsSUFBSSxDQUFDRixVQUFVLENBQTVCRTtnQkFFUixPQUFPQTtZQUNUOzs7V0FsREluQjtxQkFBa0JvQixhQUFPO0FBb0Q3QixpQkFwRElwQixXQW9ER3FCLFdBQVU7QUFFakIsaUJBdERJckIsV0FzREdzQixxQkFBb0I7SUFDekI7SUFDQTtDQUNEO0FBRUQsaUJBM0RJdEIsV0EyREd1QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN6QiJ9