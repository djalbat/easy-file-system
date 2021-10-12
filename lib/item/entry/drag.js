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
                    ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiZHJhZ01peGlucyIsInBhdGhVdGlsaXRpZXMiLCJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRm9udFNpemUiLCJSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTiIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkRyYWdFbnRyeUl0ZW0iLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwibmFtZSIsImdldE5hbWUiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcHMiLCJwYXRoTWFwcyIsInJldHJpZXZlUGF0aE1hcHMiLCJyZXZlcnNlIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50IiwiaXNPcHRpb25QcmVzZW50IiwiYXNjZW5kYW50UGF0aE1hcHMiLCJnZXRBc2NlbmRhbnRQYXRoTWFwcyIsImVudHJ5RGlyZWN0b3J5IiwiYXNjZW5kYW50RW50cmllc0xpc3RzIiwiZ2V0QXNjZW5kYW50RW50cmllc0xpc3RzIiwiZXZlcnkiLCJhc2NlbmRhbnRFbnRyaWVzTGlzdCIsImFzY2VuZGFudEVudHJpZXNMaXN0RW50cnlJdGVtc0xlbmd0aCIsImdldEVudHJ5SXRlbXNMZW5ndGgiLCJzb3VyY2VFbnRyeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJhc2NlbmRhbnRQYXRoTWFwIiwicHVzaCIsImFzY2VuZGFudEVudHJpZXNMaXN0RWxlbWVudHMiLCJnZXRBc2NlbmRhbnRFbGVtZW50cyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJlbGVtZW50IiwicGF0aCIsImdldFBhdGgiLCJ0eXBlIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1UeXBlIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImFkZE1hcmtlciIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImRyYWdFbnRyeUl0ZW0iLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRpZE1vdW50Iiwib25TdGFydERyYWciLCJvblN0b3BEcmFnIiwiZW5hYmxlRHJhZyIsIndpbGxVbm1vdW50Iiwib2ZmU3RhcnREcmFnIiwib2ZmU3RvcERyYWciLCJkaXNhYmxlRHJhZyIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFWixHQUFvQixDQUFwQixnQkFBb0I7QUFDakIsR0FBVyxDQUFYLFVBQVc7QUFFbkIsR0FBa0IsQ0FBbEIsTUFBa0I7QUFFRixHQUFjLENBQWQsT0FBYztBQUNHLEdBQWUsQ0FBZixRQUFlO0FBQ1QsR0FBeUIsQ0FBekIsUUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWlJOUMsQ0FFNUI7UUFBd0IsQ0FTcEM7Ozs7Ozs7QUExSUEsR0FBSyxDQUFHLGlDQUFpQyxHQVJYLFVBQVcsZUFRakMsaUNBQWlDO0lBRW5DLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2xCLEdBQVUsRUFBVixDQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxDQUFDO2dCQUM3QyxHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUV6Qixl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SUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUk7Z0JBRTNDLElBQUksQ0FBQyxXQUFXO1lBQ25CLENBQUM7OztZQUVELEdBQVUsRUFBVixDQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDYixJQUFJLENBQUMsYUFBYTtZQUNuQixDQUFDOzs7V0FwSEksYUFBYTtFQVJHLE1BQWtCO2dCQVFsQyxhQUFhLEVBc0hYLENBQWlCLG9CQUFHLENBQUM7SUFDM0IsU0FBUyxFQUFFLENBQU07QUFDbEIsQ0FBQztBQUdGLE1BQU0sQ0FBQyxNQUFNLENBbklTLE1BQWtCLFNBbUloQixTQUFTLEVBdElOLGdCQUFvQjttQkFGekIsY0FBaUIsVUEwSWQsYUFBYSxxQkFuSUEsT0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcmFnTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuXG5pbXBvcnQgeyBkcmFnRW50cnlJdGVtRm9udFNpemUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTiB9IGZyb20gXCIuLi8uLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBhZGp1c3RTb3VyY2VFbnRyeVBhdGgsIGFkanVzdFRhcmdldEVudHJ5UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG5cdGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1x0Ly8vXG5cblx0XHRjb25zdCBwYXRoTWFwID0ge1xuXHRcdFx0c291cmNlRW50cnlQYXRoLFxuXHRcdFx0dGFyZ2V0RW50cnlQYXRoXG5cdFx0fTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0Z2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRsZXQgcGF0aE1hcHMgPSBbXTtcblxuXHRcdHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXG5cdFx0cGF0aE1hcHMucmV2ZXJzZSgpO1xuXG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0cmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSBleHBsb3Jlci5pc09wdGlvblByZXNlbnQoUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFU19PUFRJT04pO1xuXG5cdFx0aWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50KSB7XG5cdFx0XHRjb25zdCBhc2NlbmRhbnRQYXRoTWFwcyA9IHRoaXMuZ2V0QXNjZW5kYW50UGF0aE1hcHMoc291cmNlRW50cnlQYXRoKTtcblxuXHRcdFx0cGF0aE1hcHMgPSBbIC4uLnBhdGhNYXBzLCAuLi5hc2NlbmRhbnRQYXRoTWFwcyBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoTWFwcztcblx0fVxuXG5cdGdldEFzY2VuZGFudFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWUsXG5cdFx0XHRcdFx0dGFyZ2V0RW50cnlQYXRoID0gbnVsbCxcblx0XHRcdFx0XHRhc2NlbmRhbnRQYXRoTWFwcyA9IFtdLFxuXHRcdFx0XHRcdGFzY2VuZGFudEVudHJpZXNMaXN0cyA9IHRoaXMuZ2V0QXNjZW5kYW50RW50cmllc0xpc3RzKCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcdC8vL1xuXG5cdFx0YXNjZW5kYW50RW50cmllc0xpc3RzLmV2ZXJ5KChhc2NlbmRhbnRFbnRyaWVzTGlzdCkgPT4ge1xuXHRcdFx0Y29uc3QgYXNjZW5kYW50RW50cmllc0xpc3RFbnRyeUl0ZW1zTGVuZ3RoID0gYXNjZW5kYW50RW50cmllc0xpc3QuZ2V0RW50cnlJdGVtc0xlbmd0aCgpO1xuXG5cdFx0XHRpZiAoYXNjZW5kYW50RW50cmllc0xpc3RFbnRyeUl0ZW1zTGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdGNvbnN0IHNvdXJjZUVudHJ5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChzb3VyY2VFbnRyeVBhdGgpO1xuXG5cdFx0XHRcdGlmIChzb3VyY2VFbnRyeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XHQvLy9cblxuXHRcdFx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXAgPSB7XG5cdFx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSxcblx0XHRcdFx0XHRcdHNvdXJjZUVudHJ5UGF0aCxcblx0XHRcdFx0XHRcdHRhcmdldEVudHJ5UGF0aFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRhc2NlbmRhbnRQYXRoTWFwcy5wdXNoKGFzY2VuZGFudFBhdGhNYXApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBhc2NlbmRhbnRQYXRoTWFwcztcblx0fVxuXG5cdGdldEFzY2VuZGFudEVudHJpZXNMaXN0cygpIHtcblx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzID0gdGhpcy5nZXRBc2NlbmRhbnRFbGVtZW50cyhcInVsLmVudHJpZXNcIiksXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cztcdC8vL1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudEVudHJpZXNMaXN0cztcblx0fVxuXG5cdHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQpIHtcblx0XHRpZiAoZHJvcEVsZW1lbnQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IHRoaXM7XHQvLy9cblxuXHRcdFx0YWJvcnRlZCA/XG5cdFx0XHRcdGV4cGxvcmVyLnJlbW92ZU1hcmtlcigpIDpcblx0XHRcdFx0XHRleHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCAoKSA9PiB7XG5cdFx0XHRcdFx0Ly8vXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHQgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cblx0XHR0aGlzLmVuYWJsZURyYWcoKTtcblx0fVxuXG5cdHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcblx0fVxuXG5cdGluaXRpYWxpc2UoKSB7XG5cdFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cblx0Zm9udC1zaXplOiAke2RyYWdFbnRyeUl0ZW1Gb250U2l6ZX07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuYDtcbiJdfQ==