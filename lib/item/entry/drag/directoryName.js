"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _necessary = require("necessary");
var _drop = _interopRequireDefault(require("../../../mixins/drop"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
        "\n\n  font-size: 2rem;\n  margin-left: 2rem;\n  background-color: lightblue;\n  \n  .topmost {\n    margin-left: 0;\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    function DirectoryNameDragEntryItem() {
        _classCallCheck(this, DirectoryNameDragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameDragEntryItem).apply(this, arguments));
    }
    _createClass(DirectoryNameDragEntryItem, [
        {
            key: "isTopmost",
            value: function isTopmost() {
                var path = this.getPath(), pathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path), topmost = pathWithoutTopmostDirectoryName === null;
                return topmost;
            }
        },
        {
            key: "isBefore",
            value: function isBefore(entryItem) {
                var before;
                var entryItemType = entryItem.getType();
                switch(entryItemType){
                    case _types.FILE_NAME_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        before = true;
                        break;
                    case _types.DIRECTORY_NAME_TYPE:
                        var name = this.getName(), entryItemName = entryItem.getName();
                        before = name.localeCompare(entryItemName) < 0;
                        break;
                }
                return before;
            }
        },
        {
            key: "setCollapsed",
            value: function setCollapsed(collapsed) {
                collapsed ? this.collapse() : this.expand();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.collapseEntriesList();
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.expandEntriesList();
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement) {
                var name = this.getName(), dragEntryItem = dragElement, dragEntryItemName = dragEntryItem.getName();
                console.log("Drop '".concat(dragEntryItemName, "' onto ").concat(name, "'"));
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement) {
                var name = this.getName(), dragEntryItem = dragElement, dragEntryItemName = dragEntryItem.getName();
                console.log("Drag '".concat(dragEntryItemName, "' out of ").concat(name, "'"));
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement) {
                var name = this.getName(), dragEntryItem = dragElement, dragEntryItemName = dragEntryItem.getName();
                console.log("Drag '".concat(dragEntryItemName, "' over ").concat(name, "'"));
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var topmost = this.isTopmost();
                if (topmost) {
                    this.addClass("topmost");
                }
                this.onDrop(this.dropHandler, this);
                this.onDragOut(this.dragOutHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                this.enableDrop();
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var topmost = this.isTopmost();
                if (topmost) {
                    this.removeClass("topmost");
                }
                this.offDrop(this.dropHandler, this);
                this.offDragOut(this.dragOutHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                this.disableDrop();
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorer = _properties.explorer, EntriesList = explorer.getEntriesList();
                return [
                    name,
                    /*#__PURE__*/ React.createElement(EntriesList, {
                        explorer: explorer
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
    return DirectoryNameDragEntryItem;
}(_drag.default);
_defineProperty(DirectoryNameDragEntryItem, "type", _types.DIRECTORY_NAME_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _drop.default);
var _default = (0, _easyWithStyle).default(DirectoryNameDragEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uLy4uL21peGlucy9kcm9wXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IEZJTEVfTkFNRV9UWVBFLCBESVJFQ1RPUllfTkFNRV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuICBpc1RvcG1vc3QoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCksXG5cdFx0XHRcdFx0dG9wbW9zdCA9IChwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKTtcblxuXHRcdHJldHVybiB0b3Btb3N0O1xuXHR9XG5cblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuICBzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG4gICAgY29sbGFwc2VkID9cbiAgICAgIHRoaXMuY29sbGFwc2UoKSA6XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG4gIH1cblxuICBkcm9wSGFuZGxlcihkcmFnRWxlbWVudCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgRHJvcCAnJHtkcmFnRW50cnlJdGVtTmFtZX0nIG9udG8gJHtuYW1lfSdgKVxuICB9XG5cbiAgZHJhZ091dEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgY29uc29sZS5sb2coYERyYWcgJyR7ZHJhZ0VudHJ5SXRlbU5hbWV9JyBvdXQgb2YgJHtuYW1lfSdgKVxuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGNvbnNvbGUubG9nKGBEcmFnICcke2RyYWdFbnRyeUl0ZW1OYW1lfScgb3ZlciAke25hbWV9J2ApXG4gIH1cblxuICBkaWRNb3VudCgpIHtcblx0ICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuXHQgIGlmICh0b3Btb3N0KSB7XG5cdCAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3V0KHRoaXMuZHJhZ091dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgc3VwZXIuZGlkTW91bnQoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHRvcG1vc3QgPSB0aGlzLmlzVG9wbW9zdCgpO1xuXG4gICAgaWYgKHRvcG1vc3QpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJ0b3Btb3N0XCIpO1xuICAgIH1cblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ091dCh0aGlzLmRyYWdPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdEVudHJpZXNMaXN0ID0gZXhwbG9yZXIuZ2V0RW50cmllc0xpc3QoKTtcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHRuYW1lLFxuXHRcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdF0pO1xuXHR9XG5cblx0aW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pYFxuXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgXG4gIC50b3Btb3N0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFF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