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
                var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = explorer.isOptionPresent(_options.REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiQGRqYWxiYXQvZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZVBhdGgsIGFkanVzdFRhcmdldFBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OIH0gZnJvbSBcIi4uLy4uL29wdGlvbnNcIjtcblxuY29uc3QgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIERyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBFbnRyeUl0ZW0ge1xuXHRpc0lnbm9yZWQoZXhwbG9yZXIpIHtcblx0XHRjb25zdCByZWZlcmVuY2UgPSB0aGlzLmdldFJlZmVyZW5jZSgpLFxuXHRcdFx0XHRcdGlnbm9yZWRSZWZlcmVuY2VzID0gZXhwbG9yZXIuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcblx0XHRcdFx0XHRpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcblx0XHRcdFx0XHRpZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGlnbm9yZWQ7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cblx0XHRzb3VyY2VQYXRoID0gYWRqdXN0U291cmNlUGF0aChzb3VyY2VQYXRoLCBuYW1lKTtcdC8vL1xuXHRcdHRhcmdldFBhdGggPSBhZGp1c3RUYXJnZXRQYXRoKHRhcmdldFBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRjb25zdCBwYXRoTWFwID0ge1xuXHRcdFx0c291cmNlUGF0aCxcblx0XHRcdHRhcmdldFBhdGhcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSB7XG5cdFx0bGV0IHBhdGhNYXBzID0gW107XG5cblx0XHR0aGlzLnJldHJpZXZlUGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMpO1xuXG5cdFx0cGF0aE1hcHMucmV2ZXJzZSgpO1xuXG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0cmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSBleHBsb3Jlci5pc09wdGlvblByZXNlbnQoUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFU19PUFRJT04pO1xuXG5cdFx0aWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50KSB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRQYXRoTWFwcyA9IHRoaXMuZ2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlUGF0aCk7XG5cblx0XHRcdHBhdGhNYXBzID0gWyAuLi5wYXRoTWFwcywgLi4uYXNjZW5kYW50UGF0aE1hcHMgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGF0aE1hcHM7XG5cdH1cblxuXHRnZXRSZWZlcmVuY2UoKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0cmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCk7XG5cblx0XHRyZXR1cm4gcmVmZXJlbmNlO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlUGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRkaXJlY3RvcnkgPSB0cnVlLFxuXHRcdFx0XHRcdHRhcmdldFBhdGggPSBudWxsLFxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzID0gW10sXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gdGhpcy5nZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMuZXZlcnkoKGFzY2VuZGFudEVudHJpZXNMaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPSBhc2NlbmRhbnRFbnRyaWVzTGlzdC5nZXRFbnRyeUl0ZW1zTGVuZ3RoKCk7XG5cblx0XHRcdGlmIChhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3Qgc291cmNlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChzb3VyY2VQYXRoKTtcblxuXHRcdFx0XHRpZiAoc291cmNlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNvdXJjZVBhdGggPSBzb3VyY2VQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1x0Ly8vXG5cblx0XHRcdFx0XHRjb25zdCBhc2NlbmRhbnRQYXRoTWFwID0ge1xuXHRcdFx0XHRcdFx0ZGlyZWN0b3J5LFxuXHRcdFx0XHRcdFx0c291cmNlUGF0aCxcblx0XHRcdFx0XHRcdHRhcmdldFBhdGhcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0YXNjZW5kYW50UGF0aE1hcHMucHVzaChhc2NlbmRhbnRQYXRoTWFwKTtcblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXNjZW5kYW50UGF0aE1hcHM7XG5cdH1cblxuXHRnZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKSB7XG5cdFx0Y29uc3QgYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cyA9IHRoaXMuZ2V0QXNjZW5kYW50RWxlbWVudHMoXCJ1bC5lbnRyaWVzXCIpLFxuXHRcdFx0XHRcdGFzY2VuZGFudEVudHJpZXNMaXN0cyA9IGFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHM7XHQvLy9cblxuXHRcdHJldHVybiBhc2NlbmRhbnRFbnRyaWVzTGlzdHM7XG5cdH1cblxuXHRzdGFydERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cblx0c3RvcERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuXHRcdGV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG5cdGZvbnQtc2l6ZTogJHtkcmFnRW50cnlJdGVtRm9udFNpemV9O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFWixnQkFBNkI7SUFDMUIsVUFBVztJQUVuQixNQUFrQjtJQUVGLE9BQWM7SUFDRCxRQUF5QjtJQUNyQixRQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FzSTlCLGlCQUU1QjtTQUF3Qix5SUFVcEM7Ozs7Ozs7SUFoSlEsaUNBQWlDLEdBUlgsVUFB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