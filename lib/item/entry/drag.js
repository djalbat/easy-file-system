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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiQGRqYWxiYXQvZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMgfSBmcm9tIFwiLi4vLi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlUGF0aCwgYWRqdXN0VGFyZ2V0UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG5cdGdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1x0Ly8vXG5cdFx0dGFyZ2V0UGF0aCA9IGFkanVzdFRhcmdldFBhdGgodGFyZ2V0UGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGNvbnN0IHBhdGhNYXAgPSB7XG5cdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0dGFyZ2V0UGF0aFxuXHRcdH07XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRsZXQgcGF0aE1hcHMgPSBbXTtcblxuXHRcdHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwYXRoTWFwcyk7XG5cblx0XHRwYXRoTWFwcy5yZXZlcnNlKCk7XG5cblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuXHRcdGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuXHRcdFx0Y29uc3QgYXNjZW5kYW50UGF0aE1hcHMgPSB0aGlzLmdldEFzY2VuZGFudFBhdGhNYXBzKHNvdXJjZVBhdGgpO1xuXG5cdFx0XHRwYXRoTWFwcyA9IFsgLi4ucGF0aE1hcHMsIC4uLmFzY2VuZGFudFBhdGhNYXBzIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlUGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRkaXJlY3RvcnkgPSB0cnVlLFxuXHRcdFx0XHRcdHRhcmdldFBhdGggPSBudWxsLFxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzID0gW10sXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gdGhpcy5nZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMuZXZlcnkoKGFzY2VuZGFudEVudHJpZXNMaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPSBhc2NlbmRhbnRFbnRyaWVzTGlzdC5nZXRFbnRyeUl0ZW1zTGVuZ3RoKCk7XG5cblx0XHRcdGlmIChhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3Qgc291cmNlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChzb3VyY2VQYXRoKTtcblxuXHRcdFx0XHRpZiAoc291cmNlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNvdXJjZVBhdGggPSBzb3VyY2VQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1x0Ly8vXG5cblx0XHRcdFx0XHRjb25zdCBhc2NlbmRhbnRQYXRoTWFwID0ge1xuXHRcdFx0XHRcdFx0ZGlyZWN0b3J5LFxuXHRcdFx0XHRcdFx0c291cmNlUGF0aCxcblx0XHRcdFx0XHRcdHRhcmdldFBhdGhcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0YXNjZW5kYW50UGF0aE1hcHMucHVzaChhc2NlbmRhbnRQYXRoTWFwKTtcblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXNjZW5kYW50UGF0aE1hcHM7XG5cdH1cblxuXHRnZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKSB7XG5cdFx0Y29uc3QgYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cyA9IHRoaXMuZ2V0QXNjZW5kYW50RWxlbWVudHMoXCJ1bC5lbnRyaWVzXCIpLFxuXHRcdFx0XHRcdGFzY2VuZGFudEVudHJpZXNMaXN0cyA9IGFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHM7XHQvLy9cblxuXHRcdHJldHVybiBhc2NlbmRhbnRFbnRyaWVzTGlzdHM7XG5cdH1cblxuXHRzdGFydERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1UeXBlID0gdHlwZSwgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBwYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICB9XG5cblx0c3RvcERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuXHRcdGV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXHR9XG5cblx0ZGlkTW91bnQoKSB7XG5cdCAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMuZW5hYmxlRHJhZygpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZTdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG5cdGZvbnQtc2l6ZTogJHtkcmFnRW50cnlJdGVtRm9udFNpemV9O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFWixnQkFBNkI7SUFDMUIsVUFBVztJQUVuQixNQUFrQjtJQUVGLE9BQWM7SUFDSixRQUFlO0lBQ1osUUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXNIcEMsaUJBRTVCO1NBQXdCLHlJQVVwQzs7Ozs7OztJQWhJUSxpQ0FBaUMsR0FSWCxVQUFXLGVBUWpDLGlDQUFpQztJQUVuQyxhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNsQixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVU7b0JBQzFCLElBQUksUUFBUSxPQUFPO2dCQUV6QixVQUFVLE9BUnVDLFFBQXlCLG1CQVE1QyxVQUFVLEVBQUUsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDcEQsVUFBVSxPQVR1QyxRQUF5QixtQkFTNUMsVUFBVSxFQUFFLElBQUksRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRTlDLE9BQU87b0JBQ1osVUFBVSxFQUFWLFVBQVU7b0JBQ1YsVUFBVSxFQUFWLFVBQVU7O3VCQUdKLE9BQU87Ozs7WUFHZixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsVUFBVSxFQUFFLFVBQVU7b0JBQzdCLFFBQVE7cUJBRVAsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVB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