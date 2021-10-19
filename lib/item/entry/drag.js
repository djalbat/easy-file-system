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
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
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
            value: function stopDragHandler(dropElement, aborted, element, done) {
                if (dropElement !== null) {
                    done();
                    return;
                }
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                if (aborted) {
                    markerEntryItemExplorer.removeMarker();
                    done();
                    return;
                }
                var dragEntryItem = dragElement; ///
                markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OIH0gZnJvbSBcIi4uLy4uL29wdGlvbnNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cdFx0dGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGNvbnN0IHBhdGhNYXAgPSB7XG5cdFx0XHRzb3VyY2VFbnRyeVBhdGgsXG5cdFx0XHR0YXJnZXRFbnRyeVBhdGhcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGxldCBwYXRoTWFwcyA9IFtdO1xuXG5cdFx0dGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cblx0XHRwYXRoTWFwcy5yZXZlcnNlKCk7XG5cblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTik7XG5cblx0XHRpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXBzID0gdGhpcy5nZXRBc2NlbmRhbnRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgpO1xuXG5cdFx0XHRwYXRoTWFwcyA9IFsgLi4ucGF0aE1hcHMsIC4uLmFzY2VuZGFudFBhdGhNYXBzIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlRW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gdHJ1ZSxcblx0XHRcdFx0XHR0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzID0gW10sXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gdGhpcy5nZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMuZXZlcnkoKGFzY2VuZGFudEVudHJpZXNMaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPSBhc2NlbmRhbnRFbnRyaWVzTGlzdC5nZXRFbnRyeUl0ZW1zTGVuZ3RoKCk7XG5cblx0XHRcdGlmIChhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3Qgc291cmNlRW50cnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHNvdXJjZUVudHJ5UGF0aCk7XG5cblx0XHRcdFx0aWYgKHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcdC8vL1xuXG5cdFx0XHRcdFx0Y29uc3QgYXNjZW5kYW50UGF0aE1hcCA9IHtcblx0XHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5LFxuXHRcdFx0XHRcdFx0c291cmNlRW50cnlQYXRoLFxuXHRcdFx0XHRcdFx0dGFyZ2V0RW50cnlQYXRoXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzLnB1c2goYXNjZW5kYW50UGF0aE1hcCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudFBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50RW50cmllc0xpc3RzKCkge1xuXHRcdGNvbnN0IGFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHMgPSB0aGlzLmdldEFzY2VuZGFudEVsZW1lbnRzKFwidWwuZW50cmllc1wiKSxcblx0XHRcdFx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMgPSBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzO1x0Ly8vXG5cblx0XHRyZXR1cm4gYXNjZW5kYW50RW50cmllc0xpc3RzO1xuXHR9XG5cblx0cmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cblx0XHRyZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuXHR9XG5cblx0c3RhcnREcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG5cdHN0b3BEcmFnSGFuZGxlcihkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuXHRcdGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0ZG9uZSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG5cdGZvbnQtc2l6ZTogJHtkcmFnRW50cnlJdGVtRm9udFNpemV9O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwiRHJhZ0VudHJ5SXRlbSIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwicmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJhc2NlbmRhbnRQYXRoTWFwcyIsImdldEFzY2VuZGFudFBhdGhNYXBzIiwiZW50cnlEaXJlY3RvcnkiLCJhc2NlbmRhbnRFbnRyaWVzTGlzdHMiLCJnZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMiLCJldmVyeSIsImFzY2VuZGFudEVudHJpZXNMaXN0IiwiYXNjZW5kYW50RW50cmllc0xpc3RFbnRyeUl0ZW1zTGVuZ3RoIiwiZ2V0RW50cnlJdGVtc0xlbmd0aCIsInNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImFzY2VuZGFudFBhdGhNYXAiLCJwdXNoIiwiYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cyIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwic3RhcnREcmFnSGFuZGxlciIsImVsZW1lbnQiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJvcEVsZW1lbnQiLCJhYm9ydGVkIiwiZG9uZSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJhZ0VudHJ5SXRlbSIsImRyYWdFbGVtZW50IiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkaWRNb3VudCIsIm9uU3RhcnREcmFnIiwib25TdG9wRHJhZyIsImVuYWJsZURyYWciLCJ3aWxsVW5tb3VudCIsIm9mZlN0YXJ0RHJhZyIsIm9mZlN0b3BEcmFnIiwiZGlzYWJsZURyYWciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVosR0FBb0IsQ0FBcEIsZ0JBQW9CO0FBQ2pCLEdBQVcsQ0FBWCxVQUFXO0FBRW5CLEdBQWtCLENBQWxCLE1BQWtCO0FBRUYsR0FBYyxDQUFkLE9BQWM7QUFDRyxHQUFlLENBQWYsUUFBZTtBQUNULEdBQXlCLENBQXpCLFFBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpSjlDLENBRTVCO1FBQXdCLENBU3BDOzs7Ozs7O0FBMUpBLEdBQUssQ0FBR0EsaUNBQWlDLEdBUlgsVUFBVyxlQVFqQ0EsaUNBQWlDO0lBRW5DQyxhQUFhLGlCQUFuQixRQUFRO2NBQUZBLGFBQWE7YUFBYkEsYUFBYTs4QkFBYkEsYUFBYTtnRUFBYkEsYUFBYTs7aUJBQWJBLGFBQWE7O1lBQ2xCQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxDQUFDQyxlQUFlLEVBQUVDLGVBQWUsRUFBRSxDQUFDO2dCQUM3QyxHQUFLLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU87Z0JBRXpCSCxlQUFlLE9BUjRDLFFBQXlCLHdCQVE1Q0EsZUFBZSxFQUFFRSxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUNuRUQsZUFBZSxPQVQ0QyxRQUF5Qix3QkFTNUNBLGVBQWUsRUFBRUMsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbkUsR0FBSyxDQUFDRSxPQUFPLEdBQUcsQ0FBQztvQkFDaEJKLGVBQWUsRUFBZkEsZUFBZTtvQkFDZkMsZUFBZSxFQUFmQSxlQUFlO2dCQUNoQixDQUFDO2dCQUVELE1BQU0sQ0FBQ0csT0FBTztZQUNmLENBQUM7OztZQUVEQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDTCxlQUFlLEVBQUVDLGVBQWUsRUFBRSxDQUFDO2dCQUM5QyxHQUFHLENBQUNLLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNQLGVBQWUsRUFBRUMsZUFBZSxFQUFFSyxRQUFRO2dCQUVoRUEsUUFBUSxDQUFDRSxPQUFPO2dCQUVoQixHQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVcsSUFDOUJDLHlDQUF5QyxHQUFHRixRQUFRLENBQUNHLGVBQWUsQ0E1QmxCLFFBQWU7Z0JBOEJwRSxFQUFFLEVBQUVELHlDQUF5QyxFQUFFLENBQUM7b0JBQy9DLEdBQUssQ0FBQ0UsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ2QsZUFBZTtvQkFFbkVNLFFBQVEsc0JBQVFBLFFBQVEsNEJBQUtPLGlCQUFpQjtnQkFDL0MsQ0FBQztnQkFFRCxNQUFNLENBQUNQLFFBQVE7WUFDaEIsQ0FBQzs7O1lBRURRLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLENBQUNkLGVBQWUsRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUNFLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sSUFDdEJZLGNBQWMsR0FBRyxJQUFJLEVBQ3JCZCxlQUFlLEdBQUcsSUFBSSxFQUN0QlksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQ3RCRyxxQkFBcUIsR0FBRyxJQUFJLENBQUNDLHdCQUF3QjtnQkFFeERqQixlQUFlLE9BN0M0QyxRQUF5Qix3QkE2QzVDQSxlQUFlLEVBQUVFLElBQUksRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5FYyxxQkFBcUIsQ0FBQ0UsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsb0JBQW9CLEVBQUssQ0FBQztvQkFDdEQsR0FBSyxDQUFDQyxvQ0FBb0MsR0FBR0Qsb0JBQW9CLENBQUNFLG1CQUFtQjtvQkFFckYsRUFBRSxFQUFFRCxvQ0FBb0MsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDaEQsR0FBSyxDQUFDRSxvQ0FBb0MsR0FBR3pCLGlDQUFpQyxDQUFDRyxlQUFlO3dCQUU5RixFQUFFLEVBQUVzQixvQ0FBb0MsS0FBSyxJQUFJLEVBQUUsQ0FBQzs0QkFDbkR0QixlQUFlLEdBQUdzQixvQ0FBb0MsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7NEJBRTNELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsQ0FBQztnQ0FDekJSLGNBQWMsRUFBZEEsY0FBYztnQ0FDZGYsZUFBZSxFQUFmQSxlQUFlO2dDQUNmQyxlQUFlLEVBQWZBLGVBQWU7NEJBQ2hCLENBQUM7NEJBRURZLGlCQUFpQixDQUFDVyxJQUFJLENBQUNELGdCQUFnQjs0QkFFdkMsTUFBTSxDQUFDLElBQUk7d0JBQ1osQ0FBQztvQkFDRixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsTUFBTSxDQUFDVixpQkFBaUI7WUFDekIsQ0FBQzs7O1lBRURJLEdBQXdCLEVBQXhCQSxDQUF3QjttQkFBeEJBLFFBQVEsQ0FBUkEsd0JBQXdCLEdBQUcsQ0FBQztnQkFDM0IsR0FBSyxDQUFDUSw0QkFBNEIsR0FBRyxJQUFJLENBQUNDLG9CQUFvQixDQUFDLENBQVksY0FDeEVWLHFCQUFxQixHQUFHUyw0QkFBNEIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTVELE1BQU0sQ0FBQ1QscUJBQXFCO1lBQzdCLENBQUM7OztZQUVEVyxHQUF1QixFQUF2QkEsQ0FBdUI7bUJBQXZCQSxRQUFRLENBQVJBLHVCQUF1QixHQUFHLENBQUM7Z0JBQzFCLEdBQUssQ0FBR0MsZUFBZSxHQUFLQyxVQUFVLENBQTlCRCxlQUFlO2dCQUV2QixNQUFNLENBQUNBLGVBQWU7WUFDdkIsQ0FBQzs7O1lBRURFLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixHQUFLLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sSUFDbkIxQixRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXLElBQzNCMEIsaUJBQWlCLEdBQUdGLElBQUksRUFDeEJHLG1CQUFtQixHQUFHTCxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV0Q3ZCLFFBQVEsQ0FBQzZCLFNBQVMsQ0FBQ0QsbUJBQW1CLEVBQUVELGlCQUFpQjtZQUMzRCxDQUFDOzs7WUFFRkcsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsQ0FBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUVWLE9BQU8sRUFBRVcsSUFBSSxFQUFFLENBQUM7Z0JBQ3JELEVBQUUsRUFBRUYsV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUMxQkUsSUFBSTtvQkFFSixNQUFNO2dCQUNQLENBQUM7Z0JBRUQsR0FBSyxDQUFDZCxlQUFlLEdBQUcsSUFBSSxDQUFDRCx1QkFBdUIsSUFDakRnQix1QkFBdUIsR0FBR2YsZUFBZSxDQUFDbEIsV0FBVztnQkFFeEQsRUFBRSxFQUFFK0IsT0FBTyxFQUFFLENBQUM7b0JBQ2JFLHVCQUF1QixDQUFDQyxZQUFZO29CQUVwQ0YsSUFBSTtvQkFFSixNQUFNO2dCQUNQLENBQUM7Z0JBRUQsR0FBSyxDQUFDRyxhQUFhLEdBQUdDLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZDSCx1QkFBdUIsQ0FBQ0ksaUJBQWlCLENBQUNGLGFBQWEsRUFBRUgsSUFBSTtZQUM5RCxDQUFDOzs7WUFFRE0sR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ25CLGdCQUFnQixFQUFFLElBQUk7Z0JBRTNDLElBQUksQ0FBQ29CLFVBQVUsQ0FBQyxJQUFJLENBQUNYLGVBQWUsRUFBRSxJQUFJO2dCQUU1QyxJQUFJLENBQUNZLFVBQVU7WUFDaEIsQ0FBQzs7O1lBRURDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDWixJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUN2QixnQkFBZ0IsRUFBRSxJQUFJO2dCQUU3QyxJQUFJLENBQUN3QixXQUFXLENBQUMsSUFBSSxDQUFDZixlQUFlLEVBQUUsSUFBSTtnQkFFM0MsSUFBSSxDQUFDZ0IsV0FBVztZQUNuQixDQUFDOzs7WUFFREMsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQ0MsYUFBYTtZQUNuQixDQUFDOzs7V0FwSUkzRCxhQUFhO0VBUkcsTUFBa0I7Z0JBUWxDQSxhQUFhLEVBc0lYNEQsQ0FBaUIsb0JBQUcsQ0FBQztJQUMzQkMsU0FBUyxFQUFFLENBQU07QUFDbEIsQ0FBQztBQUdGQyxNQUFNLENBQUNDLE1BQU0sQ0FuSlMsTUFBa0IsU0FtSmhCQyxTQUFTLEVBdEpOLGdCQUFvQjttQkFGekIsY0FBaUIsVUEwSmRoRSxhQUFhLHFCQW5KQSxPQUFjIn0=