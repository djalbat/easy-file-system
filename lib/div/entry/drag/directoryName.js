"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _necessary = require("necessary");
var _drop = _interopRequireDefault(require("../../../mixins/drop"));
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
            key: "setCollapsed",
            value: function setCollapsed(collapsed) {
                collapsed ? this.collapse() : this.expand();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.collapseEntriesDiv();
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.expandEntriesDiv();
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement) {
                var name = this.getName(), dragEntryDiv = dragElement, dragEntryDivName = dragEntryDiv.getName();
                console.log("Drop '".concat(dragEntryDivName, "' onto ").concat(name, "'"));
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement) {
                var name = this.getName(), dragEntryDiv = dragElement, dragEntryDivName = dragEntryDiv.getName();
                console.log("Drag '".concat(dragEntryDivName, "' out of ").concat(name, "'"));
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement) {
                var name = this.getName(), dragEntryDiv = dragElement, dragEntryDivName = dragEntryDiv.getName();
                console.log("Drag '".concat(dragEntryDivName, "' over ").concat(name, "'"));
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
                _get(_getPrototypeOf(DirectoryNameDragEntryDiv.prototype), "didMount", this).call(this);
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
                _get(_getPrototypeOf(DirectoryNameDragEntryDiv.prototype), "willUnmount", this).call(this);
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
Object.assign(DirectoryNameDragEntryDiv.prototype, _drop.default);
var _default = (0, _easyWithStyle).default(DirectoryNameDragEntryDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZHJvcE1peGlucyBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2Ryb3BcIjtcbmltcG9ydCBEcmFnRW50cnlEaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IEZJTEVfTkFNRV9UWVBFLCBESVJFQ1RPUllfTkFNRV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2IGV4dGVuZHMgRHJhZ0VudHJ5RGl2IHtcbiAgaXNUb3Btb3N0KCkge1xuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpLFxuXHRcdFx0XHRcdHRvcG1vc3QgPSAocGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gdG9wbW9zdDtcblx0fVxuXG5cdGlzQmVmb3JlKGVudHJ5RGl2KSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5RGl2VHlwZSA9IGVudHJ5RGl2LmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlEaXZUeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSB0cnVlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlEaXZOYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuICBzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG4gICAgY29sbGFwc2VkID9cbiAgICAgIHRoaXMuY29sbGFwc2UoKSA6XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0RpdigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0RpdigpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZHJhZ0VudHJ5RGl2ID0gZHJhZ0VsZW1lbnQsIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeURpdk5hbWUgPSBkcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG4gICAgY29uc29sZS5sb2coYERyb3AgJyR7ZHJhZ0VudHJ5RGl2TmFtZX0nIG9udG8gJHtuYW1lfSdgKVxuICB9XG5cbiAgZHJhZ091dEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZHJhZ0VudHJ5RGl2ID0gZHJhZ0VsZW1lbnQsIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeURpdk5hbWUgPSBkcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG4gICAgY29uc29sZS5sb2coYERyYWcgJyR7ZHJhZ0VudHJ5RGl2TmFtZX0nIG91dCBvZiAke25hbWV9J2ApXG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZHJhZ0VudHJ5RGl2ID0gZHJhZ0VsZW1lbnQsIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeURpdk5hbWUgPSBkcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG4gICAgY29uc29sZS5sb2coYERyYWcgJyR7ZHJhZ0VudHJ5RGl2TmFtZX0nIG92ZXIgJHtuYW1lfSdgKVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG5cdCAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cblx0ICBpZiAodG9wbW9zdCkge1xuXHQgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ091dCh0aGlzLmRyYWdPdXRIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHN1cGVyLmRpZE1vdW50KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdXQodGhpcy5kcmFnT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgZXhwbG9yZXJEaXYgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRFbnRyaWVzRGl2ID0gZXhwbG9yZXJEaXYuZ2V0RW50cmllc0RpdigpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdG5hbWUsXG5cdFx0XHQ8RW50cmllc0RpdiBleHBsb3JlckRpdj17ZXhwbG9yZXJEaXZ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX1RZUEU7XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXJlY3RvcnktbmFtZVwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdilgXG5cbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBcbiAgLnRvcG1vc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVULFVBQVc7SUFFbEIsS0FBc0I7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