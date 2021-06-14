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
var pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
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
                    case _types.FILE_NAME_DRAG_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        before = true;
                        break;
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
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
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement) {
                var path = this.getPath(), explorer = this.getExplorer(), markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath(), directoryNameDragEntryItemPath = path, markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath);
                if (directoryNameDragEntryItemPath !== markerEntryItemPathWithoutBottommostName) {
                    var dragEntryItem = dragElement, dragEntryItemType = dragEntryItem.getType(), dragEntryItemName = dragEntryItem.getName(), markerEntryItemPath1 = "".concat(directoryNameDragEntryItemPath, "/").concat(dragEntryItemName);
                    explorer.removeMarker();
                    explorer.addMarker(markerEntryItemPath1, dragEntryItemType);
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var topmost = this.isTopmost();
                if (topmost) {
                    this.addClass("topmost");
                }
                // this.onDrop(this.dropHandler, this);
                //
                // this.onDragOver(this.dragOverHandler, this);
                //
                // this.enableDrop();
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
                // this.offDrop(this.dropHandler, this);
                //
                // this.offDragOver(this.dragOverHandler, this);
                //
                // this.disableDrop();
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
_defineProperty(DirectoryNameDragEntryItem, "type", _types.DIRECTORY_NAME_DRAG_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
Object.assign(DirectoryNameDragEntryItem.prototype, _drop.default);
var _default = (0, _easyWithStyle).default(DirectoryNameDragEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uLy4uL21peGlucy9kcm9wXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuICBpc1RvcG1vc3QoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCksXG5cdFx0XHRcdFx0dG9wbW9zdCA9IChwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKTtcblxuXHRcdHJldHVybiB0b3Btb3N0O1xuXHR9XG5cblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IHRydWU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IChuYW1lLmxvY2FsZUNvbXBhcmUoZW50cnlJdGVtTmFtZSkgPCAwKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cbiAgc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuICAgIGNvbGxhcHNlZCA/XG4gICAgICB0aGlzLmNvbGxhcHNlKCkgOlxuICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5leHBhbmRFbnRyaWVzTGlzdCgpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgY29uc29sZS5sb2coYERyb3AgJyR7ZHJhZ0VudHJ5SXRlbU5hbWV9JyBvbnRvICR7bmFtZX0nYClcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IHBhdGgsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCAhPT0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAvLy9cbiAgICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGAke2RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aH0vJHtkcmFnRW50cnlJdGVtTmFtZX1gO1xuXG4gICAgICBleHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcblx0ICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuXHQgIGlmICh0b3Btb3N0KSB7XG5cdCAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcbiAgICAvL1xuICAgIC8vIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG4gICAgLy9cbiAgICAvLyB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHN1cGVyLmRpZE1vdW50KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG4gICAgLy9cbiAgICAvLyB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0bmFtZSxcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pYFxuXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgXG4gIC50b3Btb3N0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFVCxVQUFXO0lBRWxCLEtBQXNCO0lBQ25CLEtBQTBCO0lBRTZELE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F5STVFLGtJQVVyRDs7Ozs7OztJQWpKUSxpQ0FBaUMsR0FQWCxVQUFXLGVBT2pDLGlDQUFpQyxFQUFFLHVDQUF1QyxHQVBwRCxVQUFXLGVBT0UsdUNBQXVDO0lBRTVFLDBCQUEwQjtjQUExQiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDOUIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUztvQkFDSCxJQUFJLFFBQVEsT0FBTyxJQUN0QiwrQkFBK0IsR0FBRyx1Q0FBdUMsQ0FBQyxJQUFJLEdBQzlFLE9BQU8sR0FBSSwrQkFBK0IsS0FBSyxJQUFJO3VCQUUvQyxPQUFPOzs7O1lBR2YsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFNBQVM7b0JBQ2IsTUFB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