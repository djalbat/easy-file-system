"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _entry = _interopRequireDefault(require("../../item/entry"));
var _styles = require("../../styles");
var _pathMap = require("../../utilities/pathMap");
var _options = require("../../options");
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
        ";\n  user-select: none;\n\n  .dragging {\n    z-index: 1;\n    position: fixed;\n    pointer-events: none;\n  }\n\n"
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
                var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = explorer.isOptionPresent(_options.REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION);
                if (removeEmptyParentDirectoriesOptionPresent) {
                    var ascendantPathMaps = this.getAscendantPathMaps(sourcePath);
                    pathMaps = _toConsumableArray(pathMaps).concat(_toConsumableArray(ascendantPathMaps));
                }
                return pathMaps;
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
            value: function stopDragHandler(dropElement, aborted, element) {
                if (dropElement === null) {
                    var explorer = this.getExplorer(), dragEntryItem = this, markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                    aborted ? markerEntryItemExplorer.removeMarker() : markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, function() {
                    });
                }
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
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZVBhdGgsIGFkanVzdFRhcmdldFBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OIH0gZnJvbSBcIi4uLy4uL29wdGlvbnNcIjtcblxuY29uc3QgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuXHRnZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cblx0XHRzb3VyY2VQYXRoID0gYWRqdXN0U291cmNlUGF0aChzb3VyY2VQYXRoLCBuYW1lKTtcdC8vL1xuXHRcdHRhcmdldFBhdGggPSBhZGp1c3RUYXJnZXRQYXRoKHRhcmdldFBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRjb25zdCBwYXRoTWFwID0ge1xuXHRcdFx0c291cmNlUGF0aCxcblx0XHRcdHRhcmdldFBhdGhcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSB7XG5cdFx0bGV0IHBhdGhNYXBzID0gW107XG5cblx0XHR0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMpO1xuXG5cdFx0cGF0aE1hcHMucmV2ZXJzZSgpO1xuXG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0cmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSBleHBsb3Jlci5pc09wdGlvblByZXNlbnQoUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFU19PUFRJT04pO1xuXG5cdFx0aWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50KSB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRQYXRoTWFwcyA9IHRoaXMuZ2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlUGF0aCk7XG5cblx0XHRcdHBhdGhNYXBzID0gWyAuLi5wYXRoTWFwcywgLi4uYXNjZW5kYW50UGF0aE1hcHMgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aE1hcHM7XG5cdH1cblxuXHRnZXRBc2NlbmRhbnRQYXRoTWFwcyhzb3VyY2VQYXRoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeSA9IHRydWUsXG5cdFx0XHRcdFx0dGFyZ2V0UGF0aCA9IG51bGwsXG5cdFx0XHRcdFx0YXNjZW5kYW50UGF0aE1hcHMgPSBbXSxcblx0XHRcdFx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMgPSB0aGlzLmdldEFzY2VuZGFudEVudHJpZXNMaXN0cygpO1xuXG5cdFx0c291cmNlUGF0aCA9IGFkanVzdFNvdXJjZVBhdGgoc291cmNlUGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGFzY2VuZGFudEVudHJpZXNMaXN0cy5ldmVyeSgoYXNjZW5kYW50RW50cmllc0xpc3QpID0+IHtcblx0XHRcdGNvbnN0IGFzY2VuZGFudEVudHJpZXNMaXN0RW50cnlJdGVtc0xlbmd0aCA9IGFzY2VuZGFudEVudHJpZXNMaXN0LmdldEVudHJ5SXRlbXNMZW5ndGgoKTtcblxuXHRcdFx0aWYgKGFzY2VuZGFudEVudHJpZXNMaXN0RW50cnlJdGVtc0xlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRjb25zdCBzb3VyY2VQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHNvdXJjZVBhdGgpO1xuXG5cdFx0XHRcdGlmIChzb3VyY2VQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0c291cmNlUGF0aCA9IHNvdXJjZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XHQvLy9cblxuXHRcdFx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXAgPSB7XG5cdFx0XHRcdFx0XHRkaXJlY3RvcnksXG5cdFx0XHRcdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0XHRcdFx0dGFyZ2V0UGF0aFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRhc2NlbmRhbnRQYXRoTWFwcy5wdXNoKGFzY2VuZGFudFBhdGhNYXApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBhc2NlbmRhbnRQYXRoTWFwcztcblx0fVxuXG5cdGdldEFzY2VuZGFudEVudHJpZXNMaXN0cygpIHtcblx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzID0gdGhpcy5nZXRBc2NlbmRhbnRFbGVtZW50cyhcInVsLmVudHJpZXNcIiksXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cztcdC8vL1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudEVudHJpZXNMaXN0cztcblx0fVxuXG5cdHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQpIHtcblx0XHRpZiAoZHJvcEVsZW1lbnQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IHRoaXMsXHQvLy9cblx0XHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG5cdFx0XHRhYm9ydGVkID9cblx0XHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCkgOlxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcblx0XHRcdFx0XHQvLy9cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0aW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuXHRmb250LXNpemU6ICR7ZHJhZ0VudHJ5SXRlbUZvbnRTaXplfTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFWixnQkFBb0I7SUFDakIsVUFBVztJQUVuQixNQUFrQjtJQUVGLE9BQWM7SUFDRCxRQUF5QjtJQUNyQixRQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtSTlCLGlCQUU1QjtTQUF3QixtSEFTcEM7Ozs7Ozs7SUE1SVEsaUNBQWlDLEdBUlgsVUFBVyxlQVFqQyxpQ0FBaUM7SUFFbkMsYUFBYTtjQUFiLGFBQWE7YUFBYixhQUFhOzhCQUFi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