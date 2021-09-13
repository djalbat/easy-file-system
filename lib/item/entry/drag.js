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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiZHJhZ01peGlucyIsInBhdGhVdGlsaXRpZXMiLCJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRm9udFNpemUiLCJhZGp1c3RTb3VyY2VQYXRoIiwiYWRqdXN0VGFyZ2V0UGF0aCIsIlJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVNfT1BUSU9OIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwiRHJhZ0VudHJ5SXRlbSIsImlzSWdub3JlZCIsImV4cGxvcmVyIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImlnbm9yZWQiLCJnZXRQYXRoTWFwIiwic291cmNlUGF0aCIsInRhcmdldFBhdGgiLCJuYW1lIiwiZ2V0TmFtZSIsInBhdGhNYXAiLCJnZXRQYXRoTWFwcyIsInBhdGhNYXBzIiwicmV0cmlldmVQYXRoTWFwcyIsInJldmVyc2UiLCJnZXRFeHBsb3JlciIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50IiwiaXNPcHRpb25QcmVzZW50IiwiYXNjZW5kYW50UGF0aE1hcHMiLCJnZXRBc2NlbmRhbnRQYXRoTWFwcyIsImRpcmVjdG9yeSIsImFzY2VuZGFudEVudHJpZXNMaXN0cyIsImdldEFzY2VuZGFudEVudHJpZXNMaXN0cyIsImV2ZXJ5IiwiYXNjZW5kYW50RW50cmllc0xpc3QiLCJhc2NlbmRhbnRFbnRyaWVzTGlzdEVudHJ5SXRlbXNMZW5ndGgiLCJnZXRFbnRyeUl0ZW1zTGVuZ3RoIiwic291cmNlUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImFzY2VuZGFudFBhdGhNYXAiLCJwdXNoIiwiYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cyIsImdldEFzY2VuZGFudEVsZW1lbnRzIiwic3RhcnREcmFnSGFuZGxlciIsImVsZW1lbnQiLCJwYXRoIiwiZ2V0UGF0aCIsInR5cGUiLCJnZXRUeXBlIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiYWRkTWFya2VyIiwic3RvcERyYWdIYW5kbGVyIiwicmVtb3ZlTWFya2VyIiwiZGlkTW91bnQiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJlbmFibGVEcmFnIiwid2lsbFVubW91bnQiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsImRpc2FibGVEcmFnIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFWixHQUFvQixDQUFwQixnQkFBb0I7QUFDakIsR0FBVyxDQUFYLFVBQVc7QUFFbkIsR0FBa0IsQ0FBbEIsTUFBa0I7QUFFRixHQUFjLENBQWQsT0FBYztBQUNELEdBQXlCLENBQXpCLFFBQXlCO0FBQ3JCLEdBQWUsQ0FBZixRQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FzSTlCLGlCQUU1QjtTQUF3Qix5SUFVcEM7Ozs7Ozs7QUFoSkEsR0FBSyxDQUFHLGlDQUFpQyxHQVJYLFVBQVcsZUFRakMsaUNBQWlDO0lBRW5DLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2xCLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFDaEMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixJQUNqRCxrQ0FBa0MsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUN6RSxPQUFPLEdBQUcsa0NBQWtDLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVwRCxNQUFNLENBQUMsT0FBTztZQUNmLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNuQyxHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUV6QixVQUFVLE9BbEJ1QyxRQUF5QixtQkFrQjVDLFVBQVUsRUFBRSxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUNwRCxVQUFVLE9BbkJ1QyxRQUF5QixtQkFtQjVDLFVBQVUsRUFBRSxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVwRCxHQUFLLENBQUMsT0FBTyxHQUFHLENBQUM7b0JBQ2hCLFVBQVUsRUFBVixVQUFVO29CQUNWLFVBQVUsRUFBVixVQUFVO2dCQUNYLENBQUM7Z0JBRUQsTUFBTSxDQUFDLE9BQU87WUFDZixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDcEMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVE7Z0JBRXRELFFBQVEsQ0FBQyxPQUFPO2dCQUVoQixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzlCLHlDQUF5QyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBcENsQixRQUFlO2dCQXNDcEUsRUFBRSxFQUFFLHlDQUF5QyxFQUFFLENBQUM7b0JBQy9DLEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVTtvQkFFOUQsUUFBUSxzQkFBUSxRQUFRLDRCQUFLLGlCQUFpQjtnQkFDL0MsQ0FBQztnQkFFRCxNQUFNLENBQUMsUUFBUTtZQUNoQixDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUM5QixTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVk7Z0JBRXBDLE1BQU0sQ0FBQyxTQUFTO1lBQ2pCLENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ3RCLFNBQVMsR0FBRyxJQUFJLEVBQ2hCLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUN0QixxQkFBcUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2dCQUV4RCxVQUFVLE9BOUR1QyxRQUF5QixtQkE4RDVDLFVBQVUsRUFBRSxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVwRCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFQLG9CQUFvQixFQUFLLENBQUM7b0JBQ3RELEdBQUssQ0FBQyxvQ0FBb0MsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBbUI7b0JBRXJGLEVBQUUsRUFBRSxvQ0FBb0MsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDaEQsR0FBSyxDQUFDLCtCQUErQixHQUFHLGlDQUFpQyxDQUFDLFVBQVU7d0JBRXBGLEVBQUUsRUFBRSwrQkFBK0IsS0FBSyxJQUFJLEVBQUUsQ0FBQzs0QkFDOUMsVUFBVSxHQUFHLCtCQUErQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFakQsR0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUM7Z0NBQ3pCLFNBQVMsRUFBVCxTQUFTO2dDQUNULFVBQVUsRUFBVixVQUFVO2dDQUNWLFVBQVUsRUFBVixVQUFVOzRCQUNYLENBQUM7NEJBRUQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQjs0QkFFdkMsTUFBTSxDQUFDLElBQUk7d0JBQ1osQ0FBQztvQkFDRixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsTUFBTSxDQUFDLGlCQUFpQjtZQUN6QixDQUFDOzs7WUFFRCxHQUF3QixHQUF4Qix3QkFBd0I7bUJBQXhCLFFBQVEsQ0FBUix3QkFBd0IsR0FBRyxDQUFDO2dCQUMzQixHQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFDLFVBQVksSUFDeEUscUJBQXFCLEdBQUcsNEJBQTRCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU1RCxNQUFNLENBQUMscUJBQXFCO1lBQzdCLENBQUM7OztZQUVELEdBQWdCLEdBQWhCLGdCQUFnQjttQkFBaEIsUUFBUSxDQUFSLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxJQUNuQixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFDM0IsaUJBQWlCLEdBQUcsSUFBSSxFQUN4QixtQkFBbUIsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUV0QyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQjtZQUMzRCxDQUFDOzs7WUFFRixHQUFlLEdBQWYsZUFBZTttQkFBZixRQUFRLENBQVIsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO2dCQUVqQyxRQUFRLENBQUMsWUFBWTtZQUN0QixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFFM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUk7Z0JBRTVDLElBQUksQ0FBQyxVQUFVO1lBQ2hCLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUU3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSTtnQkFFM0MsSUFBSSxDQUFDLFdBQVc7WUFDbkIsQ0FBQzs7O1dBekhJLGFBQWE7RUFSRyxNQUFrQjtnQkFRbEMsYUFBYSxHQTJIWCxpQkFBaUIsR0FBRyxDQUFDO0lBQzNCLFNBQVMsR0FBRSxJQUFNO0FBQ2xCLENBQUM7QUFHRixNQUFNLENBQUMsTUFBTSxDQXhJUyxNQUFrQixTQXdJaEIsU0FBUyxFQTNJTixnQkFBb0I7bUJBRnpCLGNBQWlCLFVBK0lkLGFBQWEscUJBeElBLE9BQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyeUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZW50cnlcIjtcblxuaW1wb3J0IHsgZHJhZ0VudHJ5SXRlbUZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlUGF0aCwgYWRqdXN0VGFyZ2V0UGF0aCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFU19PUFRJT04gfSBmcm9tIFwiLi4vLi4vb3B0aW9uc1wiO1xuXG5jb25zdCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRHJhZ0VudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG5cdGlzSWdub3JlZChleHBsb3Jlcikge1xuXHRcdGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG5cdFx0XHRcdFx0aWdub3JlZFJlZmVyZW5jZXMgPSBleHBsb3Jlci5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuXHRcdFx0XHRcdGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuXHRcdFx0XHRcdGlnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cblx0XHRyZXR1cm4gaWdub3JlZDtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblxuXHRcdHNvdXJjZVBhdGggPSBhZGp1c3RTb3VyY2VQYXRoKHNvdXJjZVBhdGgsIG5hbWUpO1x0Ly8vXG5cdFx0dGFyZ2V0UGF0aCA9IGFkanVzdFRhcmdldFBhdGgodGFyZ2V0UGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGNvbnN0IHBhdGhNYXAgPSB7XG5cdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0dGFyZ2V0UGF0aFxuXHRcdH07XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpIHtcblx0XHRsZXQgcGF0aE1hcHMgPSBbXTtcblxuXHRcdHRoaXMucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwYXRoTWFwcyk7XG5cblx0XHRwYXRoTWFwcy5yZXZlcnNlKCk7XG5cblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IGV4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTX09QVElPTik7XG5cblx0XHRpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXBzID0gdGhpcy5nZXRBc2NlbmRhbnRQYXRoTWFwcyhzb3VyY2VQYXRoKTtcblxuXHRcdFx0cGF0aE1hcHMgPSBbIC4uLnBhdGhNYXBzLCAuLi5hc2NlbmRhbnRQYXRoTWFwcyBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXRoTWFwcztcblx0fVxuXG5cdGdldFJlZmVyZW5jZSgpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRyZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKTtcblxuXHRcdHJldHVybiByZWZlcmVuY2U7XG5cdH1cblxuXHRnZXRBc2NlbmRhbnRQYXRoTWFwcyhzb3VyY2VQYXRoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeSA9IHRydWUsXG5cdFx0XHRcdFx0dGFyZ2V0UGF0aCA9IG51bGwsXG5cdFx0XHRcdFx0YXNjZW5kYW50UGF0aE1hcHMgPSBbXSxcblx0XHRcdFx0XHRhc2NlbmRhbnRFbnRyaWVzTGlzdHMgPSB0aGlzLmdldEFzY2VuZGFudEVudHJpZXNMaXN0cygpO1xuXG5cdFx0c291cmNlUGF0aCA9IGFkanVzdFNvdXJjZVBhdGgoc291cmNlUGF0aCwgbmFtZSk7XHQvLy9cblxuXHRcdGFzY2VuZGFudEVudHJpZXNMaXN0cy5ldmVyeSgoYXNjZW5kYW50RW50cmllc0xpc3QpID0+IHtcblx0XHRcdGNvbnN0IGFzY2VuZGFudEVudHJpZXNMaXN0RW50cnlJdGVtc0xlbmd0aCA9IGFzY2VuZGFudEVudHJpZXNMaXN0LmdldEVudHJ5SXRlbXNMZW5ndGgoKTtcblxuXHRcdFx0aWYgKGFzY2VuZGFudEVudHJpZXNMaXN0RW50cnlJdGVtc0xlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRjb25zdCBzb3VyY2VQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHNvdXJjZVBhdGgpO1xuXG5cdFx0XHRcdGlmIChzb3VyY2VQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0c291cmNlUGF0aCA9IHNvdXJjZVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XHQvLy9cblxuXHRcdFx0XHRcdGNvbnN0IGFzY2VuZGFudFBhdGhNYXAgPSB7XG5cdFx0XHRcdFx0XHRkaXJlY3RvcnksXG5cdFx0XHRcdFx0XHRzb3VyY2VQYXRoLFxuXHRcdFx0XHRcdFx0dGFyZ2V0UGF0aFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRhc2NlbmRhbnRQYXRoTWFwcy5wdXNoKGFzY2VuZGFudFBhdGhNYXApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBhc2NlbmRhbnRQYXRoTWFwcztcblx0fVxuXG5cdGdldEFzY2VuZGFudEVudHJpZXNMaXN0cygpIHtcblx0XHRjb25zdCBhc2NlbmRhbnRFbnRyaWVzTGlzdEVsZW1lbnRzID0gdGhpcy5nZXRBc2NlbmRhbnRFbGVtZW50cyhcInVsLmVudHJpZXNcIiksXG5cdFx0XHRcdFx0YXNjZW5kYW50RW50cmllc0xpc3RzID0gYXNjZW5kYW50RW50cmllc0xpc3RFbGVtZW50cztcdC8vL1xuXG5cdFx0cmV0dXJuIGFzY2VuZGFudEVudHJpZXNMaXN0cztcblx0fVxuXG5cdHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcbiAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVR5cGUgPSB0eXBlLCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IHBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gIH1cblxuXHRzdG9wRHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcblx0ICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5lbmFibGVEcmFnKCk7XG5cdH1cblxuXHR3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cdH1cblxuXHRzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBcImRyYWdcIlxuXHR9O1xufVxuXG5PYmplY3QuYXNzaWduKEVudHJ5SXRlbS5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJhZ0VudHJ5SXRlbSlgXG5cblx0Zm9udC1zaXplOiAke2RyYWdFbnRyeUl0ZW1Gb250U2l6ZX07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5kcmFnZ2luZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbmA7XG4iXX0=