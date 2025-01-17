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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        },
        {
            key: "remove",
            value: function remove() {
                var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                _get(_get_prototype_of(EntryItem.prototype), "remove", this).call(this, element);
                if (element === null) {
                    this.destroy();
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyeUl0ZW0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IGhlaWdodCA9IDIsXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50cyA9IHRoaXMuZ2V0QXNjZW5kYW50RWxlbWVudHMoXCJsaS5lbnRyeS5kcmFnLmRpcmVjdG9yeS1uYW1lXCIsIGhlaWdodCksXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50c0xlbmd0aCA9IGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCA9IGZpcnN0KGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGZpcnN0QXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgXHRsZXQgcGF0aDtcblxuICBcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICBcdFx0XHRwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICBcdGlmIChwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICBcdFx0cGF0aCA9IG5hbWU7ICAvLy9cbiAgXHR9IGVsc2Uge1xuICBcdFx0Y29uc3QgcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gIFx0XHRwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuICBcdH1cblxuICBcdHJldHVybiBwYXRoO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50ID0gbnVsbCkge1xuICAgIHN1cGVyLnJlbW92ZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyeVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyeUl0ZW0pYFxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJFbnRyeUl0ZW0iLCJnZXRQYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaGVpZ2h0IiwiYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50cyIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwiYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0QXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50IiwiZ2V0UGF0aCIsInBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsInBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImdldFR5cGUiLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInJlbW92ZSIsImVsZW1lbnQiLCJkZXN0cm95IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRkE7OztlQUFBOzs7b0VBakZzQjt5QkFFd0I7b0JBRXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxtQkFBcUJDLHdCQUFhLENBQWxDRDtBQUVSLElBQUEsQUFBTUUsMEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQ0FBbUM7Z0JBRXZDLElBQU1DLFNBQVMsR0FDVEMsOENBQThDLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMsZ0NBQWdDRixTQUN4R0csb0RBQW9ERiw0Q0FBNENHLE1BQU07Z0JBRTVHLElBQUlELG9EQUFvRCxHQUFHO29CQUN6RCxJQUFNRSxrREFBa0RaLE1BQU1RO29CQUU5REYsbUNBQW1DTSxpREFBa0QsR0FBRztnQkFDMUY7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQyxJQUFJQztnQkFFSixJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNyQlYsbUNBQW1DLElBQUksQ0FBQ0QsbUNBQW1DO2dCQUUvRSxJQUFJQyxxQ0FBcUMsTUFBTTtvQkFDOUNRLE9BQU9DLE1BQU8sR0FBRztnQkFDbEIsT0FBTztvQkFDTixJQUFNRSx1Q0FBdUNYLGlDQUFpQ08sT0FBTztvQkFFckZDLE9BQU9aLGlCQUFpQmUsc0NBQXNDRjtnQkFDL0Q7Z0JBRUEsT0FBT0Q7WUFDUjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLE9BQVMsSUFBSSxDQUFDQyxXQUFXLENBQXpCRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsT0FBUyxJQUFJLENBQUNNLFVBQVUsQ0FBeEJOO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxXQUFhLElBQUksQ0FBQ0YsVUFBVSxDQUE1QkU7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBT0MsVUFBQUEsaUVBQVU7Z0JBQ2YsdUJBckRFckIsc0JBcURJb0IsVUFBTixJQUFLLGFBQVFDO2dCQUViLElBQUlBLFlBQVksTUFBTTtvQkFDcEIsSUFBSSxDQUFDQyxPQUFPO2dCQUNkO1lBQ0Y7OztXQTFESXRCO3FCQUFrQnVCLGFBQU87QUE0RDdCLGlCQTVESXZCLFdBNERHd0IsV0FBVTtBQUVqQixpQkE5REl4QixXQThER3lCLHFCQUFvQjtJQUN6QjtJQUNBO0NBQ0Q7QUFFRCxpQkFuRUl6QixXQW1FRzBCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzVCIn0=