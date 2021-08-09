"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("@djalbat/easy-drag-and-drop");
var _necessary = require("necessary");
var _entry = _interopRequireDefault(require("../../item/entry"));
var _styles = require("../../styles");
var _options = require("../../options");
var _pathMap = require("../../utilities/pathMap");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n\tfont-size: ",
        ";\n  user-select: none;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    margin-top: 0;\n    pointer-events: none;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
var DragEntryItem = /*#__PURE__*/ function(EntryItem) {
    _inherits(DragEntryItem, EntryItem);
    function DragEntryItem() {
        _classCallCheck(this, DragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(DragEntryItem).apply(this, arguments));
    }
    _createClass(DragEntryItem, [
        {
            key: "isIgnored",
            value: function isIgnored(explorer) {
                var reference = this.getReference(), ignoredReferences = explorer.getIgnoredReferences(), ignoredReferencesIncludesReference = ignoredReferences.includes(reference), ignored = ignoredReferencesIncludesReference; ///
                return ignored;
            }
        },
        {
            key: "getPathMap",
            value: function getPathMap(sourcePath, targetPath) {
                var name = this.getName();
                sourcePath = (0, _pathMap).adjustSourcePath(sourcePath, name); ///
                targetPath = (0, _pathMap).adjustTargetPath(targetPath, name); ///
                var pathMap = {
                    sourcePath: sourcePath,
                    targetPath: targetPath
                };
                return pathMap;
            }
        },
        {
            key: "getPathMaps",
            value: function getPathMaps(sourcePath, targetPath) {
                var pathMaps = [];
                this.retrievePathMaps(sourcePath, targetPath, pathMaps);
                pathMaps.reverse();
                var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = explorer.isOptionPresent(_options.REMOVE_EMPTY_PARENT_DIRECTORIES);
                if (removeEmptyParentDirectoriesOptionPresent) {
                    var ascendantPathMaps = this.getAscendantPathMaps(sourcePath);
                    pathMaps = _toConsumableArray(pathMaps).concat(_toConsumableArray(ascendantPathMaps));
                }
                return pathMaps;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                var explorer = this.getExplorer(), reference = explorer.getReference();
                return reference;
            }
        },
        {
            key: "getAscendantPathMaps",
            value: function getAscendantPathMaps(sourcePath) {
                var name = this.getName(), directory = true, targetPath = null, ascendantPathMaps = [], ascendantEntriesLists = this.getAscendantEntriesLists();
                sourcePath = (0, _pathMap).adjustSourcePath(sourcePath, name); ///
                ascendantEntriesLists.every(function(ascendantEntriesList) {
                    var ascendantEntriesListEntryItemsLength = ascendantEntriesList.getEntryItemsLength();
                    if (ascendantEntriesListEntryItemsLength === 1) {
                        var sourcePathWithoutBottommostName = pathWithoutBottommostNameFromPath(sourcePath);
                        if (sourcePathWithoutBottommostName !== null) {
                            sourcePath = sourcePathWithoutBottommostName; ///
                            var ascendantPathMap = {
                                directory: directory,
                                sourcePath: sourcePath,
                                targetPath: targetPath
                            };
                            ascendantPathMaps.push(ascendantPathMap);
                            return true;
                        }
                    }
                });
                return ascendantPathMaps;
            }
        },
        {
            key: "getAscendantEntriesLists",
            value: function getAscendantEntriesLists() {
                var ascendantEntriesListElements = this.getAscendantElements("ul.entries"), ascendantEntriesLists = ascendantEntriesListElements; ///
                return ascendantEntriesLists;
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(element) {
                var path = this.getPath(), type = this.getType(), explorer = this.getExplorer(), dragEntryItemType = type, markerEntryItemPath = path; ///
                explorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(element) {
                var explorer = this.getExplorer();
                explorer.removeMarker();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onStartDrag(this.startDragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.enableDrag();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offStartDrag(this.startDragHandler, this);
                this.offStopDrag(this.stopDragHandler, this);
                this.disableDrag();
            }
        }
    ]);
    return DragEntryItem;
}(_entry.default);
_defineProperty(DragEntryItem, "defaultProperties", {
    className: "drag"
});
Object.assign(_entry.default.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle).default(DragEntryItem)(_templateObject(), _styles.dragEntryItemFontSize);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiQGRqYWxiYXQvZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMgfSBmcm9tIFwiLi4vLi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlUGF0aCwgYWRqdXN0VGFyZ2V0UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG5cdGlzSWdub3JlZChleHBsb3Jlcikge1xuXHRcdGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG5cdFx0XHRcdFx0aWdub3JlZFJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuXHRcdFx0XHRcdGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuXHRcdFx0XHRcdGlnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cblx0XHRyZXR1cm4gaWdub3JlZDtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1x0Ly8vXG5cdFx0dGFyZ2V0UGF0aCA9IGFkanVzdFRhcmdldFBhdGgodGFyZ2V0UGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGNvbnN0IHBhdGhNYXAgPSB7XG5cdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0dGFyZ2V0UGF0aFxuXHRcdH07XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRsZXQgcGF0aE1hcHMgPSBbXTtcblxuXHRcdHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwYXRoTWFwcyk7XG5cblx0XHRwYXRoTWFwcy5yZXZlcnNlKCk7XG5cblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuXHRcdGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuXHRcdFx0Y29uc3QgYXNjZW5kYW50UGF0aE1hcHMgPSB0aGlzLmdldEFzY2VuZGFudFBhdGhNYXBzKHNvdXJjZVBhdGgpO1xuXG5cdFx0XHRwYXRoTWFwcyA9IFsgLi4ucGF0aE1hcHMsIC4uLmFzY2VuZGFudFBhdGhNYXBzIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0UmVmZXJlbmNlKCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpO1xuXG5cdFx0cmV0dXJuIHJlZmVyZW5jZTtcblx0fVxuXG5cdGdldEFzY2VuZGFudFBhdGhNYXBzKHNvdXJjZVBhdGgpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5ID0gdHJ1ZSxcblx0XHRcdFx0XHR0YXJnZXRQYXRoID0gbnVsbCxcblx0XHRcdFx0XHRhc2NlbmRhbnRQYXRoTWFwcyA9IFtdLFxuXHRcdFx0XHRcdGFzY2VuZGFudEVudHJpZXNMaXN0cyA9IHRoaXMuZ2V0QXNjZW5kYW50RW50cmllc0xpc3RzKCk7XG5cblx0XHRzb3VyY2VQYXRoID0gYWRqdXN0U291cmNlUGF0aChzb3VyY2VQYXRoLCBuYW1lKTtcdC8vL1xuXG5cdFx0YXNjZW5kYW50RW50cmllc0xpc3RzLmV2ZXJ5KChhc2NlbmRhbnRFbnRyaWVzTGlzdCkgPT4ge1xuXHRcdFx0Y29uc3QgYXNjZW5kYW50RW50cmllc0xpc3RFbnRyeUl0ZW1zTGVuZ3RoID0gYXNjZW5kYW50RW50cmllc0xpc3QuZ2V0RW50cnlJdGVtc0xlbmd0aCgpO1xuXG5cdFx0XHRpZiAoYXNjZW5kYW50RW50cmllc0xpc3RFbnRyeUl0ZW1zTGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdGNvbnN0IHNvdXJjZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoc291cmNlUGF0aCk7XG5cblx0XHRcdFx0aWYgKHNvdXJjZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRzb3VyY2VQYXRoID0gc291cmNlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcdC8vL1xuXG5cdFx0XHRcdFx0Y29uc3QgYXNjZW5kYW50UGF0aE1hcCA9IHtcblx0XHRcdFx0XHRcdGRpcmVjdG9yeSxcblx0XHRcdFx0XHRcdHNvdXJjZVBhdGgsXG5cdFx0XHRcdFx0XHR0YXJnZXRQYXRoXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzLnB1c2goYXNjZW5kYW50UGF0aE1hcCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudFBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50RW50cmllc0xpc3RzKCkge1xuXHRcdGNvbnN0IGFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHMgPSB0aGlzLmdldEFzY2VuZGFudEVsZW1lbnRzKFwidWwuZW50cmllc1wiKSxcblx0XHRcdFx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMgPSBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzO1x0Ly8vXG5cblx0XHRyZXR1cm4gYXNjZW5kYW50RW50cmllc0xpc3RzO1xuXHR9XG5cblx0c3RhcnREcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG5cdHN0b3BEcmFnSGFuZGxlcihlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCk7XG5cblx0XHRleHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuXHRmb250LXNpemU6ICR7ZHJhZ0VudHJ5SXRlbUZvbnRTaXplfTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRVosZ0JBQTZCO0lBQzFCLFVBQVc7SUFFbkIsTUFBa0I7SUFFRixPQUFjO0lBQ0osUUFBZTtJQUNaLFFBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FzSXBDLGlCQUU1QjtTQUF3Qix5SUFVcEM7Ozs7Ozs7SUFoSlEsaUNBQWlDLEdBUlgsVUFBVyxlQVFqQyxpQ0FBaUM7SUFFbkMsYUFBYTtjQUFiLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDbEIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLFFBQVE7b0JBQ1gsU0FBUyxRQUFRLFlBQVksSUFDaEMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixJQUNqRCxrQ0FBa0MsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUN6RSxPQUFPLEdBQUcsa0NBQWtDLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUU3QyxPQUFPOzs7O1lBR2YsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVO29CQUMxQixJQUFJLFFBQVEsT0FBTztnQkFFekIsVUFBVSxPQWpCdUMsUUFBeUIsbUJBaUI1QyxVQUFVLEVBQUUsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDcEQsVUFBVSxPQWxCdUMsUUFBeUIsbUJBa0I1QyxVQUFVLEVBQUUsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFOUMsT0FBTztvQkFDWixVQUFVLEVBQVYsVUFBVTtvQkFDVixVQUFVLEVBQVYsVUFBVTs7dUJBR0osT0FBTzs7OztZQUdmLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVTtvQkFDN0IsUUFBUTtxQkFFUCxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVE7Z0JBRXRELFFBQVEsQ0FBQyxPQUFPO29CQUVWLFFBQVEsUUFBUSxXQUFXLElBQzlCLHlDQUF5QyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBckN6QixRQUFlO29CQXVDekQseUNBQXlDO3dCQUN0QyxpQkFBaUIsUUFBUSxvQkFBb0IsQ0FBQyxVQUFVO29CQUU5RCxRQUFRLHNCQUFRLFFBQVEsNEJBQUssaUJBQWlCOzt1QkFHeEMsUUFBUTs7OztZQUdoQixHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZO29CQUNMLFFBQVEsUUFBUSxXQUFXLElBQzlCLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWTt1QkFFN0IsU0FBUzs7OztZQUdqQixHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQixDQUFDLFVBQVU7b0JBQ3hCLElBQUksUUFBUSxPQUFPLElBQ3RCLFNBQVMsR0FBRyxJQUFJLEVBQ2hCLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGlCQUFpQixPQUNqQixxQkFBcUIsUUFBUSx3QkFBd0I7Z0JBRXhELFVBQVUsT0E3RHVDLFFBQXlCLG1CQTZENUMsVUFBVSxFQUFFLElBQUksRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXBELHFCQUFxQixDQUFDLEtBQUssVUFBRSxvQkFBb0I7d0JBQzFDLG9DQUFvQyxHQUFHLG9CQUFvQixDQUFDLG1CQUFtQjt3QkFFakYsb0NBQW9DLEtBQUssQ0FBQzs0QkFDdkMsK0JBQStCLEdBQUcsaUNBQWlDLENBQUMsVUFBVTs0QkFFaEYsK0JBQStCLEtBQUssSUFBSTs0QkFDM0MsVUFBVSxHQUFHLCtCQUErQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQ0FFM0MsZ0JBQWdCO2dDQUNyQixTQUFTLEVBQVQsU0FBUztnQ0FDVCxVQUFVLEVBQVYsVUFBVTtnQ0FDVixVQUFVLEVBQVYsVUFBVTs7NEJBR1gsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQjttQ0FFaEMsSUFBSTs7Ozt1QkFLUCxpQkFBaUI7Ozs7WUFHekIsR0FBd0IsR0FBeEIsd0JBQXdCOzRCQUF4Qix3QkFBd0I7b0JBQ2pCLDRCQUE0QixRQUFRLG9CQUFvQixFQUFDLFVBQVksSUFDeEUscUJBQXFCLEdBQUcsNEJBQTRCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUVyRCxxQkFBcUI7Ozs7WUFHN0IsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxPQUFPO29CQUNmLElBQUksUUFBUSxPQUFPLElBQ25CLElBQUksUUFBUSxPQUFPLElBQ25CLFFBQVEsUUFBUSxXQUFXLElBQzNCLGlCQUFpQixHQUFHLElBQUksRUFDeEIsbUJBQW1CLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUI7Ozs7WUFHNUQsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLE9BQU87b0JBQ2hCLFFBQVEsUUFBUSxXQUFXO2dCQUVqQyxRQUFRLENBQUMsWUFBWTs7OztZQUd0QixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNELFdBQVcsTUFBTSxnQkFBZ0I7cUJBRWhDLFVBQVUsTUFBTSxlQUFlO3FCQUVqQyxVQUFVOzs7O1lBR2hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7cUJBQ0gsWUFBWSxNQUFNLGdCQUFnQjtxQkFFbEMsV0FBVyxNQUFNLGVBQWU7cUJBRWhDLFdBQVc7Ozs7V0F4SGQsYUFBYTtFQVJHLE1BQWtCO2dCQVFsQyxhQUFhLEdBMkhYLGlCQUFpQjtJQUN2QixTQUFTLEdBQUUsSUFBTTs7QUFJbkIsTUFBTSxDQUFDLE1BQU0sQ0F4SVMsTUFBa0IsU0F3SWhCLFNBQVMsRUEzSU4sZ0JBQTZCO21CQUZsQyxjQUFpQixVQStJZCxhQUFhLHFCQXhJQSxPQUFjIn0=