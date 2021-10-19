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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiZHJhZ01peGlucyIsInBhdGhVdGlsaXRpZXMiLCJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRm9udFNpemUiLCJSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTiIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkRyYWdFbnRyeUl0ZW0iLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwibmFtZSIsImdldE5hbWUiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50IiwiaXNPcHRpb25QcmVzZW50IiwiYXNjZW5kYW50UGF0aE1hcHMiLCJnZXRBc2NlbmRhbnRQYXRoTWFwcyIsImVudHJ5RGlyZWN0b3J5IiwiYXNjZW5kYW50RW50cmllc0xpc3RzIiwiZ2V0QXNjZW5kYW50RW50cmllc0xpc3RzIiwiZXZlcnkiLCJhc2NlbmRhbnRFbnRyaWVzTGlzdCIsImFzY2VuZGFudEVudHJpZXNMaXN0RW50cnlJdGVtc0xlbmd0aCIsImdldEVudHJ5SXRlbXNMZW5ndGgiLCJzb3VyY2VFbnRyeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJhc2NlbmRhbnRQYXRoTWFwIiwicHVzaCIsImFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHMiLCJnZXRBc2NlbmRhbnRFbGVtZW50cyIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJlbGVtZW50IiwicGF0aCIsImdldFBhdGgiLCJ0eXBlIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImFkZE1hcmtlciIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyYWdFbnRyeUl0ZW0iLCJkcmFnRWxlbWVudCIsImRyb3BEcmFnRW50cnlJdGVtIiwiZGlkTW91bnQiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsImRpc2FibGVEcmFnIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVaLEdBQW9CLENBQXBCLGdCQUFvQjtBQUNqQixHQUFXLENBQVgsVUFBVztBQUVuQixHQUFrQixDQUFsQixNQUFrQjtBQUVGLEdBQWMsQ0FBZCxPQUFjO0FBQ0csR0FBZSxDQUFmLFFBQWU7QUFDVCxHQUF5QixDQUF6QixRQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUo5QyxDQUU1QjtRQUF3QixDQVNwQzs7Ozs7OztBQTFKQSxHQUFLLENBQUcsaUNBQWlDLEdBUlgsVUFBVyxlQVFqQyxpQ0FBaUM7SUFFbkMsYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDbEIsR0FBVSxFQUFWLENB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QyxhQUFhLEVBQUUsSUFBSTtZQUM5RCxDQUFDOzs7WUFFRCxHQUFRLEVBQVIsQ0FBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFFM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUk7Z0JBRTVDLElBQUksQ0FBQyxVQUFVO1lBQ2hCLENBQUM7OztZQUVELEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUU3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSTtnQkFFM0MsSUFBSSxDQUFDLFdBQVc7WUFDbkIsQ0FBQzs7O1lBRUQsR0FBVSxFQUFWLENBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQyxhQUFhO1lBQ25CLENBQUM7OztXQXBJSSxhQUFhO0VBUkcsTUFBa0I7Z0JBUWxDLGFBQWEsRUFzSVgsQ0FBaUIsb0JBQUcsQ0FBQztJQUMzQixTQUFTLEVBQUUsQ0FBTTtBQUNsQixDQUFDO0FBR0YsTUFBTSxDQUFDLE1BQU0sQ0FuSlMsTUFBa0IsU0FtSmhCLFNBQVMsRUF0Sk4sZ0JBQW9CO21CQUZ6QixjQUFpQixVQTBKZCxhQUFhLHFCQW5KQSxPQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGRyYWdNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cnlJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2VudHJ5XCI7XG5cbmltcG9ydCB7IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcbmltcG9ydCB7IFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OIH0gZnJvbSBcIi4uLy4uL29wdGlvbnNcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVudHJ5UGF0aCwgYWRqdXN0VGFyZ2V0RW50cnlQYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5cbmNvbnN0IHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBEcmFnRW50cnlJdGVtIGV4dGVuZHMgRW50cnlJdGVtIHtcblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cdFx0dGFyZ2V0RW50cnlQYXRoID0gYWRqdXN0VGFyZ2V0RW50cnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGNvbnN0IHBhdGhNYXAgPSB7XG5cdFx0XHRzb3VyY2VFbnRyeVBhdGgsXG5cdFx0XHR0YXJnZXRFbnRyeVBhdGhcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRnZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGxldCBwYXRoTWFwcyA9IFtdO1xuXG5cdFx0dGhpcy5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cblx0XHRwYXRoTWFwcy5yZXZlcnNlKCk7XG5cblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTik7XG5cblx0XHRpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXBzID0gdGhpcy5nZXRBc2NlbmRhbnRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgpO1xuXG5cdFx0XHRwYXRoTWFwcyA9IFsgLi4ucGF0aE1hcHMsIC4uLmFzY2VuZGFudFBhdGhNYXBzIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlRW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gdHJ1ZSxcblx0XHRcdFx0XHR0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzID0gW10sXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gdGhpcy5nZXRBc2NlbmRhbnRFbnRyaWVzTGlzdHMoKTtcblxuXHRcdHNvdXJjZUVudHJ5UGF0aCA9IGFkanVzdFNvdXJjZUVudHJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMuZXZlcnkoKGFzY2VuZGFudEVudHJpZXNMaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPSBhc2NlbmRhbnRFbnRyaWVzTGlzdC5nZXRFbnRyeUl0ZW1zTGVuZ3RoKCk7XG5cblx0XHRcdGlmIChhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3Qgc291cmNlRW50cnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHNvdXJjZUVudHJ5UGF0aCk7XG5cblx0XHRcdFx0aWYgKHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcdC8vL1xuXG5cdFx0XHRcdFx0Y29uc3QgYXNjZW5kYW50UGF0aE1hcCA9IHtcblx0XHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5LFxuXHRcdFx0XHRcdFx0c291cmNlRW50cnlQYXRoLFxuXHRcdFx0XHRcdFx0dGFyZ2V0RW50cnlQYXRoXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGFzY2VuZGFudFBhdGhNYXBzLnB1c2goYXNjZW5kYW50UGF0aE1hcCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudFBhdGhNYXBzO1xuXHR9XG5cblx0Z2V0QXNjZW5kYW50RW50cmllc0xpc3RzKCkge1xuXHRcdGNvbnN0IGFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHMgPSB0aGlzLmdldEFzY2VuZGFudEVsZW1lbnRzKFwidWwuZW50cmllc1wiKSxcblx0XHRcdFx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMgPSBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzO1x0Ly8vXG5cblx0XHRyZXR1cm4gYXNjZW5kYW50RW50cmllc0xpc3RzO1xuXHR9XG5cblx0cmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cblx0XHRyZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuXHR9XG5cblx0c3RhcnREcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtVHlwZSA9IHR5cGUsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gcGF0aDsgIC8vL1xuXG4gICAgZXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgfVxuXG5cdHN0b3BEcmFnSGFuZGxlcihkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuXHRcdGlmIChkcm9wRWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0ZG9uZSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRpbml0aWFsaXNlKCkge1xuXHRcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHRcdGNsYXNzTmFtZTogXCJkcmFnXCJcblx0fTtcbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyeUl0ZW0ucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyYWdFbnRyeUl0ZW0pYFxuXG5cdGZvbnQtc2l6ZTogJHtkcmFnRW50cnlJdGVtRm9udFNpemV9O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZHJhZ2dpbmcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG4iXX0=