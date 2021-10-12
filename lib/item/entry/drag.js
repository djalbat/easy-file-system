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
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var name = this.getName();
                sourceEntryPath = (0, _pathMap).adjustSourceEntryPath(sourceEntryPath, name); ///
                targetEntryPath = (0, _pathMap).adjustTargetEntryPath(targetEntryPath, name); ///
                var pathMap = {
                    sourceEntryPath: sourceEntryPath,
                    targetEntryPath: targetEntryPath
                };
                return pathMap;
            }
        },
        {
            key: "getPathMaps",
            value: function getPathMaps(sourceEntryPath, targetEntryPath) {
                var pathMaps = [];
                this.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
                pathMaps.reverse();
                var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = explorer.isOptionPresent(_options.REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION);
                if (removeEmptyParentDirectoriesOptionPresent) {
                    var ascendantPathMaps = this.getAscendantPathMaps(sourceEntryPath);
                    pathMaps = _toConsumableArray(pathMaps).concat(_toConsumableArray(ascendantPathMaps));
                }
                return pathMaps;
            }
        },
        {
            key: "getAscendantPathMaps",
            value: function getAscendantPathMaps(sourceEntryPath) {
                var name = this.getName(), entryDirectory = true, targetEntryPath = null, ascendantPathMaps = [], ascendantEntriesLists = this.getAscendantEntriesLists();
                sourceEntryPath = (0, _pathMap).adjustSourceEntryPath(sourceEntryPath, name); ///
                ascendantEntriesLists.every(function(ascendantEntriesList) {
                    var ascendantEntriesListEntryItemsLength = ascendantEntriesList.getEntryItemsLength();
                    if (ascendantEntriesListEntryItemsLength === 1) {
                        var sourceEntryPathWithoutBottommostName = pathWithoutBottommostNameFromPath(sourceEntryPath);
                        if (sourceEntryPathWithoutBottommostName !== null) {
                            sourceEntryPath = sourceEntryPathWithoutBottommostName; ///
                            var ascendantPathMap = {
                                entryDirectory: entryDirectory,
                                sourceEntryPath: sourceEntryPath,
                                targetEntryPath: targetEntryPath
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
                    var explorer = this.getExplorer(), dragEntryItem = this; ///
                    aborted ? explorer.removeMarker() : explorer.dropDragEntryItem(dragEntryItem, function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OIH0gZnJvbSBcIi4uLy4uL29wdGlvbnNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cdFx0dGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGNvbnN0IHBhdGhNYXAgPSB7XG5cdFx0XHRzb3VyY2VFbnRyeVBhdGgsXG5cdFx0XHR0YXJnZXRFbnRyeVBhdGhcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGxldCBwYXRoTWFwcyA9IFtdO1xuXG5cdFx0dGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cblx0XHRwYXRoTWFwcy5yZXZlcnNlKCk7XG5cblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTik7XG5cblx0XHRpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXBzID0gdGhpcy5nZXRBc2NlbmRhbnRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgpO1xuXG5cdFx0XHRwYXRoTWFwcyA9IFsgLi4ucGF0aE1hcHMsIC4uLmFzY2VuZGFudFBhdGhNYXBzIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlRW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gdHJ1ZSxcblx0XHRcdFx0XHR0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzID0gW10sXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gdGhpcy5nZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMuZXZlcnkoKGFzY2VuZGFudEVudHJpZXNMaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPSBhc2NlbmRhbnRFbnRyaWVzTGlzdC5nZXRFbnRyeUl0ZW1zTGVuZ3RoKCk7XG5cblx0XHRcdGlmIChhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3Qgc291cmNlRW50cnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHNvdXJjZUVudHJ5UGF0aCk7XG5cblx0XHRcdFx0aWYgKHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcdC8vL1xuXG5cdFx0XHRcdFx0Y29uc3QgYXNjZW5kYW50UGF0aE1hcCA9IHtcblx0XHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5LFxuXHRcdFx0XHRcdFx0c291cmNlRW50cnlQYXRoLFxuXHRcdFx0XHRcdFx0dGFyZ2V0RW50cnlQYXRoXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzLnB1c2goYXNjZW5kYW50UGF0aE1hcCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudFBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50RW50cmllc0xpc3RzKCkge1xuXHRcdGNvbnN0IGFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHMgPSB0aGlzLmdldEFzY2VuZGFudEVsZW1lbnRzKFwidWwuZW50cmllc1wiKSxcblx0XHRcdFx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMgPSBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzO1x0Ly8vXG5cblx0XHRyZXR1cm4gYXNjZW5kYW50RW50cmllc0xpc3RzO1xuXHR9XG5cblx0c3RhcnREcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG5cdHN0b3BEcmFnSGFuZGxlcihkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCkge1xuXHRcdGlmIChkcm9wRWxlbWVudCA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gdGhpcztcdC8vL1xuXG5cdFx0XHRhYm9ydGVkID9cblx0XHRcdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCkgOlxuXHRcdFx0XHRcdGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sICgpID0+IHtcblx0XHRcdFx0XHQvLy9cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0aW5pdGlhbGlzZSgpIHtcblx0XHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcblx0XHRjbGFzc05hbWU6IFwiZHJhZ1wiXG5cdH07XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cnlJdGVtLnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcmFnRW50cnlJdGVtKWBcblxuXHRmb250LXNpemU6ICR7ZHJhZ0VudHJ5SXRlbUZvbnRTaXplfTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmRyYWdnaW5nIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFWixnQkFBb0I7SUFDakIsVUFBVztJQUVuQixNQUFrQjtJQUVGLE9BQWM7SUFDRyxRQUFlO0lBQ1QsUUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWlJOUMsaUJBRTVCO1NBQXdCLG1IQVNwQzs7Ozs7OztJQTFJUSxpQ0FBaUMsR0FSWCxVQUFXLGVBUWpDLGlDQUFpQztJQUVuQyxhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixh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