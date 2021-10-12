"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyDragAndDrop = require("easy-drag-and-drop");
var _name = _interopRequireDefault(require("../../../button/name"));
var _toggle = _interopRequireDefault(require("../../../button/toggle"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
var _directoryName = _interopRequireDefault(require("../../../svg/directoryName"));
var _directoryName1 = _interopRequireDefault(require("../../../div/entryItem/directoryName"));
var _path = require("../../../utilities/path");
var _pathMap = require("../../../utilities/pathMap");
var _options = require("../../../options");
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
            key: "getPathMap",
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var pathMap = _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "getPathMap", this).call(this, sourceEntryPath, targetEntryPath), collapsed = this.isCollapsed(), entryDirectory = true;
                Object.assign(pathMap, {
                    collapsed: collapsed,
                    entryDirectory: entryDirectory
                });
                return pathMap;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var _properties = this.properties, explorer = _properties.explorer;
                return explorer;
            }
        },
        {
            key: "isCollapsed",
            value: function isCollapsed() {
                var entriesListCollapsed = this.isEntriesListCollapsed(), collapsed = entriesListCollapsed; ///
                return collapsed;
            }
        },
        {
            key: "getNameButton",
            value: function getNameButton() {
                var _constructor = this.constructor, NameButton = _constructor.NameButton;
                return NameButton;
            }
        },
        {
            key: "getToggleButton",
            value: function getToggleButton() {
                var _constructor = this.constructor, ToggleButton = _constructor.ToggleButton;
                return ToggleButton;
            }
        },
        {
            key: "getDirectoryNameSVG",
            value: function getDirectoryNameSVG() {
                var _constructor = this.constructor, DirectoryNameSVG = _constructor.DirectoryNameSVG;
                return DirectoryNameSVG;
            }
        },
        {
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
                var name = this.getName(), pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);
                pathMaps.push(pathMap);
                sourceEntryPath = (0, _pathMap).adjustSourceEntryPath(sourceEntryPath, name);
                targetEntryPath = (0, _pathMap).adjustTargetEntryPath(targetEntryPath, name);
                this.forEachDragEntryItem(function(dragEntryItem) {
                    dragEntryItem.retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps);
                });
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
                this.collapseToggleButton();
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.expandEntriesList();
                this.expandToggleButton();
            }
        },
        {
            key: "toggle",
            value: function toggle() {
                var collapsed = this.isCollapsed();
                collapsed = !collapsed;
                this.setCollapsed(collapsed);
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement, aborted, element, done) {
                var explorer = this.getExplorer(), dragEntryItem = dragElement; ///
                if (aborted) {
                    explorer.removeMarker();
                    done();
                    return;
                }
                explorer.dropDragEntryItem(dragEntryItem, done);
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var collapsed = this.isCollapsed();
                if (collapsed) {
                    return;
                }
                var path = this.getPath(), explorer = this.getExplorer(), dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = explorer.isExplorerIgnored(dragEntryItemExplorer);
                if (dragEntryItemExplorerIgnored) {
                    return;
                }
                var dragIntoTopmostDirectoriesOnlyOptionPresent = explorer.isOptionPresent(_options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION);
                if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
                    var pathTopmostPath = (0, _path).isPathTopmostPath(path);
                    if (!pathTopmostPath) {
                        return;
                    }
                }
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
                var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
                markerEntryItemPath = "".concat(path, "/").concat(dragEntryItemName);
                markerEntryItemExplorer = explorer; ///
                if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                    var dragEntryItemType = dragEntryItem.getType();
                    previousMarkerEntryItemExplorer.removeMarker();
                    markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, collapsed = _properties.collapsed;
                this.setCollapsed(collapsed);
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                _get(_getPrototypeOf(DirectoryNameDragEntryItem.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorer = this.getExplorer(), NameButton = this.getNameButton(), EntriesList = explorer.getEntriesList(), ToggleButton = this.getToggleButton(), DirectoryNameSVG = this.getDirectoryNameSVG();
                return [
                    /*#__PURE__*/ React.createElement(_directoryName1.default, {
                        name: name,
                        NameButton: NameButton,
                        ToggleButton: ToggleButton,
                        DirectoryNameSVG: DirectoryNameSVG
                    }),
                    /*#__PURE__*/ React.createElement(EntriesList, {
                        explorer: explorer
                    }), 
                ];
            }
        }
    ]);
    return DirectoryNameDragEntryItem;
}(_drag.default);
_defineProperty(DirectoryNameDragEntryItem, "NameButton", _name.default);
_defineProperty(DirectoryNameDragEntryItem, "ToggleButton", _toggle.default);
_defineProperty(DirectoryNameDragEntryItem, "DirectoryNameSVG", _directoryName.default);
_defineProperty(DirectoryNameDragEntryItem, "type", _types.DIRECTORY_NAME_DRAG_TYPE);
_defineProperty(DirectoryNameDragEntryItem, "defaultProperties", {
    className: "directory-name"
});
exports.default = DirectoryNameDragEntryItem;
Object.assign(DirectoryNameDragEntryItem.prototype, _easyDragAndDrop.dropMixins);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJuYW1lcyI6WyJkcm9wTWl4aW5zIiwiTmFtZUJ1dHRvbiIsIlRvZ2dsZUJ1dHRvbiIsIkRyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lU1ZHIiwiRGlyZWN0b3J5TmFtZUVudHJ5SXRlbURpdiIsImlzUGF0aFRvcG1vc3RQYXRoIiwiYWRqdXN0U291cmNlRW50cnlQYXRoIiwiYWRqdXN0VGFyZ2V0RW50cnlQYXRoIiwiRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT04iLCJGSUxFX05BTUVfRFJBR19UWVBFIiwiRklMRV9OQU1FX01BUktFUl9UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUiLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJjb2xsYXBzZWQiLCJpc0NvbGxhcHNlZCIsImVudHJ5RGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsInByb3BlcnRpZXMiLCJlbnRyaWVzTGlzdENvbGxhcHNlZCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJnZXROYW1lQnV0dG9uIiwiY29uc3RydWN0b3IiLCJnZXRUb2dnbGVCdXR0b24iLCJnZXREaXJlY3RvcnlOYW1lU1ZHIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsInNldENvbGxhcHNlZCIsImNvbGxhcHNlIiwiZXhwYW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImNvbGxhcHNlVG9nZ2xlQnV0dG9uIiwiZXhwYW5kRW50cmllc0xpc3QiLCJleHBhbmRUb2dnbGVCdXR0b24iLCJ0b2dnbGUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJwYXRoIiwiZ2V0UGF0aCIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsImRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJwYXRoVG9wbW9zdFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW1OYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aCIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiYWRkTWFya2VyIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJjaGlsZEVsZW1lbnRzIiwiRW50cmllc0xpc3QiLCJnZXRFbnRyaWVzTGlzdCIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUFvQixDQUFwQixnQkFBb0I7QUFFeEIsR0FBc0IsQ0FBdEIsS0FBc0I7QUFDcEIsR0FBd0IsQ0FBeEIs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QixFQUFFLGdCQUFnQjs7c0RBRS9DLFdBQVc7d0JBQUMsUUFBUSxFQUFFLFFBQVE7O2dCQUVoQyxDQUFDO1lBQ0YsQ0FBQzs7O1dBck5tQiwwQkFBMEI7RUFUckIsS0FBMEI7Z0JBUy9CLDBCQUEwQixFQXVOdkMsQ0FBVSxhQWxPSyxLQUFzQjtnQkFXeEIsMEJBQTBCLEVBeU52QyxDQUFZLGVBbk9LLE9BQXdCO2dCQVU1QiwwQkFBMEIsRUEyTnZDLENBQWdCLG1CQW5PSyxjQUE0QjtnQkFRcEMsMEJBQTBCLEVBNk52QyxDQUFJLE9BL05xRyxNQUFnQjtnQkFFNUcsMEJBQTBCLEVBK052QyxDQUFpQixvQkFBRyxDQUFDO0lBQ3pCLFNBQVMsRUFBRSxDQUFnQjtBQUM3QixDQUFDO2tCQWpPa0IsMEJBQTBCO0FBb08vQyxNQUFNLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsRUFqUHZCLGdCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuXG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL25hbWVcIjtcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi90b2dnbGVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9lbnRyeUl0ZW0vZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBpc1BhdGhUb3Btb3N0UGF0aCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgYWRqdXN0U291cmNlRW50cnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIH0gZnJvbSBcIi4uLy4uLy4uL29wdGlvbnNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWU7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZCxcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRnZXROYW1lQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgTmFtZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBOYW1lQnV0dG9uO1xuXHR9XG5cblx0Z2V0VG9nZ2xlQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgVG9nZ2xlQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIFRvZ2dsZUJ1dHRvbjtcblx0fVxuXG5cdGdldERpcmVjdG9yeU5hbWVTVkcoKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVTVkc7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnRyeVBhdGgoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcblx0XHR0YXJnZXRFbnRyeVBhdGggPSBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lKTtcblxuXHRcdHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGRyYWdFbnRyeUl0ZW0ucmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2V0Q29sbGFwc2VkKGNvbGxhcHNlZCkge1xuXHRcdGNvbGxhcHNlZCA/XG5cdFx0XHR0aGlzLmNvbGxhcHNlKCkgOlxuXHRcdFx0XHR0aGlzLmV4cGFuZCgpO1xuXHR9XG5cbiAgY29sbGFwc2UoKSB7XG4gICAgdGhpcy5jb2xsYXBzZUVudHJpZXNMaXN0KCk7XG5cdFx0dGhpcy5jb2xsYXBzZVRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZXhwYW5kKCkge1xuICAgIHRoaXMuZXhwYW5kRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmV4cGFuZFRvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuXHRcdGxldCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cblx0XHRjb2xsYXBzZWQgPSAhY29sbGFwc2VkO1xuXG5cdFx0dGhpcy5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcblx0fVxuXG5cdGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50O1x0Ly8vXG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0ZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuXHR9XG5cblx0ZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cblx0XHRpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQgPSBleHBsb3Jlci5pc09wdGlvblByZXNlbnQoRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT04pO1xuXG5cdFx0aWYgKGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IHBhdGhUb3Btb3N0UGF0aCA9IGlzUGF0aFRvcG1vc3RQYXRoKHBhdGgpO1xuXG5cdFx0XHRpZiAoIXBhdGhUb3Btb3N0UGF0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGAke3BhdGh9LyR7ZHJhZ0VudHJ5SXRlbU5hbWV9YDtcblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuXHRcdGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG5cdFx0XHRjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHROYW1lQnV0dG9uID0gdGhpcy5nZXROYW1lQnV0dG9uKCksXG5cdFx0XHRcdFx0RW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpLFxuXHRcdFx0XHRcdFRvZ2dsZUJ1dHRvbiA9IHRoaXMuZ2V0VG9nZ2xlQnV0dG9uKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZVNWRyA9IHRoaXMuZ2V0RGlyZWN0b3J5TmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPixcblxuXHRcdF0pO1xuXHR9XG5cblx0c3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBUb2dnbGVCdXR0b24gPSBUb2dnbGVCdXR0b247XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVTVkcgPSBEaXJlY3RvcnlOYW1lU1ZHO1xuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG4iXX0=