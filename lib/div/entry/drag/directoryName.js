"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _necessary = require("necessary");
var _drag = _interopRequireDefault(require("../../../div/entry/drag"));
var _types = require("../../../types");
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  font-size: 2rem;\n  background-color: lightblue;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
var DirectoryNameDragEntryDiv = /*#__PURE__*/ function(DragEntryDiv) {
    _inherits(DirectoryNameDragEntryDiv, DragEntryDiv);
    function DirectoryNameDragEntryDiv() {
        _classCallCheck(this, DirectoryNameDragEntryDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameDragEntryDiv).apply(this, arguments));
    }
    _createClass(DirectoryNameDragEntryDiv, [
        {
            key: "isTopmost",
            value: function isTopmost() {
                var path = this.getPath(), pathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path), topmost = pathWithoutTopmostDirectoryName === null;
                return topmost;
            }
        },
        {
            key: "isBefore",
            value: function isBefore(entryDiv) {
                var before;
                var entryDivType = entryDiv.getType();
                switch(entryDivType){
                    case _types.FILE_NAME_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        before = true;
                        break;
                    case _types.DIRECTORY_NAME_TYPE:
                        var name = this.getName(), entryDivName = entryDiv.getName();
                        before = name.localeCompare(entryDivName) < 0;
                        break;
                }
                return before;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorerDiv = _properties.explorerDiv, EntriesDiv = explorerDiv.getEntriesDiv();
                return [
                    name,
                    /*#__PURE__*/ React.createElement(EntriesDiv, {
                        explorerDiv: explorerDiv
                    })
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return DirectoryNameDragEntryDiv;
}(_drag.default);
_defineProperty(DirectoryNameDragEntryDiv, "type", _types.DIRECTORY_NAME_TYPE);
_defineProperty(DirectoryNameDragEntryDiv, "defaultProperties", {
    className: "directory-name"
});
var _default = (0, _easyWithStyle).default(DirectoryNameDragEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRHJhZ0VudHJ5RGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvZW50cnkvZHJhZ1wiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiBleHRlbmRzIERyYWdFbnRyeURpdiB7XG5cdGlzVG9wbW9zdCgpIHtcblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0cGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSxcblx0XHRcdFx0XHR0b3Btb3N0ID0gKHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIHRvcG1vc3Q7XG5cdH1cblxuXHRpc0JlZm9yZShlbnRyeURpdikge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeURpdlR5cGUgPSBlbnRyeURpdi5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5RGl2VHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5RGl2TmFtZSA9IGVudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5RGl2TmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUsIGV4cGxvcmVyRGl2IH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0RW50cmllc0RpdiA9IGV4cGxvcmVyRGl2LmdldEVudHJpZXNEaXYoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHRuYW1lLFxuXHRcdFx0PEVudHJpZXNEaXYgZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0XSk7XG5cdH1cblxuXHRpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIHR5cGUgPSBESVJFQ1RPUllfTkFNRV9UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdilgXG5cbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVULFVBQVc7SUFFaEIsS0FBeUI7SUFFcUQsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E2RG5FLGdFQUtwRDs7Ozs7OztJQWhFUSx1Q0FBdUMsR0FOakIsVUFBVyxlQU1qQyx1Q0FBdUM7SUFFekMseUJBQXlCO2NBQXpCLHlCQUF5QjthQUF6Qix5QkFBeUI7OEJBQXpCLHlCQUF5QjtnRUFBekIseUJBQXlCOztpQkFBekIseUJBQXlCOztZQUM5QixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTO29CQUNGLElBQUksUUFBUSxPQUFPLElBQ3RCLCtCQUErQixHQUFHLHVDQUF1QyxDQUFDLElBQUksR0FDOUUsT0FBTyxHQUFJLCtCQUErQixLQUFLLElBQUk7dUJBRS9DLE9BQU87Ozs7WUFHZixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsUUFBUTtvQkFDWixNQUFNO29CQUVKLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTzt1QkFFN0IsWUFBWTt5QkFsQmlGLE1BQWdCO3lCQUFoQixNQUFnQjt5QkFBaEIsTUFBZ0I7d0JBc0JuSCxNQUFNLEdBQUcsSUFBSTs7eUJBdEJzRixNQUFnQjs0QkEyQjdHLElBQUksUUFBUSxPQUFPLElBQ3RCLFlBQVksR0FBRyxRQUFRLENBQUMsT0FBTzt3QkFFbEMsTUFBTSxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUM7Ozt1QkFLekMsTUFBTTs7OztZQUdkLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ2tCLFdBQWUsUUFBVixVQUFVLEVBQXJDLElBQUksR0FBa0IsV0FBZSxDQUFyQyxJQUFJLEVBQUUsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVyxFQUN0QixVQUFVLEdBQUcsV0FBVyxDQUFDLGFBQWE7O29CQUl4QyxJQUFJO3NEQUNILFVBQVU7d0JBQUMsV0FBVyxFQUFFLFdBQVc7Ozs7OztZQUt0QyxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVO3FCQUNKLGFBQWE7Ozs7V0EvQ2QseUJBQXlCO0VBTk4sS0FBeUI7Z0JBTTVDLHlCQUF5QixHQWtEdkIsSUFBSSxHQXREMkYsTUFBZ0I7Z0JBSWpILHlCQUF5QixHQW9EdkIsaUJBQWlCO0lBQ3JCLFNBQVMsR0FBRSxjQUFnQjs7bUJBL0RULGNBQWlCLFVBbUVkLHlCQUF5QiJ9