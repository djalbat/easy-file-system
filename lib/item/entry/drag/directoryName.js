"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _drop = _interopRequireDefault(require("../../../mixins/drop"));
var _marker = _interopRequireDefault(require("../../../mixins/marker"));
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
        "\n\n  font-size: 2rem;\n  background-color: lightblue;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(DirectoryNameDragEntryItem, DragEntryItem);
    function DirectoryNameDragEntryItem() {
        _classCallCheck(this, DirectoryNameDragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(DirectoryNameDragEntryItem).apply(this, arguments));
    }
    _createClass(DirectoryNameDragEntryItem, [
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
            key: "stopDragHandler",
            value: function stopDragHandler(event, element) {
                var explorer = this.getExplorer(), markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath();
                explorer.removeMarker();
                var path = this.getPath();
                if (path !== markerEntryItemPath) {
                    var directoryPath;
                    directoryPath = path; ///
                    explorer.removeDirectoryPath(directoryPath);
                    directoryPath = markerEntryItemPath; ///
                    explorer.addDirectoryPath(directoryPath);
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrop();
                this.enableMarker();
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.disableMarker();
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
Object.assign(DirectoryNameDragEntryItem.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(DirectoryNameDragEntryItem)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IGRyb3BNaXhpbnMgZnJvbSBcIi4uLy4uLy4uL21peGlucy9kcm9wXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbWFya2VyXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuICBzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG4gICAgY29sbGFwc2VkID9cbiAgICAgIHRoaXMuY29sbGFwc2UoKSA6XG4gICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICB0aGlzLmV4cGFuZEVudHJpZXNMaXN0KCk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG5cblx0XHRpZiAocGF0aCAhPT0gbWFya2VyRW50cnlJdGVtUGF0aCkge1xuXHRcdFx0bGV0IGRpcmVjdG9yeVBhdGg7XG5cblx0XHRcdGRpcmVjdG9yeVBhdGggPSBwYXRoO1x0Ly8vXG5cblx0XHRcdGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cblx0XHRcdGRpcmVjdG9yeVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoO1x0Ly8vXG5cblx0XHRcdGV4cGxvcmVyLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cdFx0fVxuXHR9XG4gIGRpZE1vdW50KCkge1xuXHRcdHRoaXMuZW5hYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5lbmFibGVNYXJrZXIoKTtcblxuXHRcdHN1cGVyLmRpZE1vdW50KCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLmRpc2FibGVEcm9wKCk7XG5cblx0XHR0aGlzLmRpc2FibGVNYXJrZXIoKTtcblxuXHRcdHN1cGVyLndpbGxVbm1vdW50KCk7XG5cdH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRFbnRyaWVzTGlzdCA9IGV4cGxvcmVyLmdldEVudHJpZXNMaXN0KCk7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0bmFtZSxcblx0XHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRdKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgdHlwZSA9IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5wcm90b3R5cGUsIG1hcmtlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSlgXG5cbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFp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