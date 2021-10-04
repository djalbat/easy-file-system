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
                sourceEntryPath = (0, _pathMap).adjustSourceEnryPath(sourceEntryPath, name);
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
                var explorer = this.getExplorer(), dragEntryItem = dragElement, markerEntryItem = explorer.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                if (aborted) {
                    markerEntryItemExplorer.removeMarker();
                    done();
                    return;
                }
                markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IE5hbWVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2J1dHRvbi9uYW1lXCI7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vdG9nZ2xlXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvZW50cnlJdGVtL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgaXNQYXRoVG9wbW9zdFBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IGFkanVzdFNvdXJjZUVucnlQYXRoLCBhZGp1c3RUYXJnZXRFbnRyeVBhdGggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIH0gZnJvbSBcIi4uLy4uLy4uL29wdGlvbnNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gdHJ1ZTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gKG5hbWUubG9jYWxlQ29tcGFyZShlbnRyeUl0ZW1OYW1lKSA8IDApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IHRydWU7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGNvbGxhcHNlZCxcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGlzQ29sbGFwc2VkKCkge1xuXHRcdGNvbnN0IGVudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0VudHJpZXNMaXN0Q29sbGFwc2VkKCksXG5cdFx0XHRcdFx0Y29sbGFwc2VkID0gZW50cmllc0xpc3RDb2xsYXBzZWQ7XHQvLy9cblxuXHRcdHJldHVybiBjb2xsYXBzZWQ7XG5cdH1cblxuXHRnZXROYW1lQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgTmFtZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBOYW1lQnV0dG9uO1xuXHR9XG5cblx0Z2V0VG9nZ2xlQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgVG9nZ2xlQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIFRvZ2dsZUJ1dHRvbjtcblx0fVxuXG5cdGdldERpcmVjdG9yeU5hbWVTVkcoKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVTVkc7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cblx0XHRzb3VyY2VFbnRyeVBhdGggPSBhZGp1c3RTb3VyY2VFbnJ5UGF0aChzb3VyY2VFbnRyeVBhdGgsIG5hbWUpO1xuXHRcdHRhcmdldEVudHJ5UGF0aCA9IGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpO1xuXG5cdFx0dGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0ZHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRDb2xsYXBzZWQoY29sbGFwc2VkKSB7XG5cdFx0Y29sbGFwc2VkID9cblx0XHRcdHRoaXMuY29sbGFwc2UoKSA6XG5cdFx0XHRcdHRoaXMuZXhwYW5kKCk7XG5cdH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlRW50cmllc0xpc3QoKTtcblx0XHR0aGlzLmNvbGxhcHNlVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5leHBhbmRFbnRyaWVzTGlzdCgpO1xuXHRcdHRoaXMuZXhwYW5kVG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG5cdFx0bGV0IGNvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcblxuXHRcdGNvbGxhcHNlZCA9ICFjb2xsYXBzZWQ7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXHR9XG5cblx0ZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcblx0XHRjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsXHQvLy9cblx0XHRcdFx0XHRtYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cblx0XHRpZiAoYWJvcnRlZCkge1xuXHRcdFx0bWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdGRvbmUoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuXHR9XG5cblx0ZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuXG5cdFx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cblx0XHRcdFx0XHRkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IGV4cGxvcmVyLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cblx0XHRpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQgPSBleHBsb3Jlci5pc09wdGlvblByZXNlbnQoRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT04pO1xuXG5cdFx0aWYgKGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQpIHtcblx0XHRcdGNvbnN0IHBhdGhUb3Btb3N0UGF0aCA9IGlzUGF0aFRvcG1vc3RQYXRoKHBhdGgpO1xuXG5cdFx0XHRpZiAoIXBhdGhUb3Btb3N0UGF0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1OYW1lID0gZHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG5cdFx0XHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuXHRcdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG5cdFx0bWFya2VyRW50cnlJdGVtUGF0aCA9IGAke3BhdGh9LyR7ZHJhZ0VudHJ5SXRlbU5hbWV9YDtcblxuXHRcdG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gZXhwbG9yZXI7ICAvLy9cblxuXHRcdGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG5cdFx0XHRjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0XHRwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG5cdFx0XHRtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdGRpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHR0aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuXG5cdFx0dGhpcy5lbmFibGVEcm9wKCk7XG5cblx0XHR0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuXHRcdHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci5kaWRNb3VudCgpO1xuXHR9XG5cblx0d2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5kaXNhYmxlRHJvcCgpO1xuXG5cdFx0dGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG5cdFx0dGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cblx0XHRzdXBlci53aWxsVW5tb3VudCgpO1xuXHR9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHROYW1lQnV0dG9uID0gdGhpcy5nZXROYW1lQnV0dG9uKCksXG5cdFx0XHRcdFx0RW50cmllc0xpc3QgPSBleHBsb3Jlci5nZXRFbnRyaWVzTGlzdCgpLFxuXHRcdFx0XHRcdFRvZ2dsZUJ1dHRvbiA9IHRoaXMuZ2V0VG9nZ2xlQnV0dG9uKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZVNWRyA9IHRoaXMuZ2V0RGlyZWN0b3J5TmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChbXG5cblx0XHRcdDxEaXJlY3RvcnlOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVG9nZ2xlQnV0dG9uPXtUb2dnbGVCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBEaXJlY3RvcnlOYW1lU1ZHPXtEaXJlY3RvcnlOYW1lU1ZHfVxuXHRcdFx0Lz4sXG5cdFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSAvPixcblxuXHRcdF0pO1xuXHR9XG5cblx0c3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBUb2dnbGVCdXR0b24gPSBUb2dnbGVCdXR0b247XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVTVkcgPSBEaXJlY3RvcnlOYW1lU1ZHO1xuXG5cdHN0YXRpYyB0eXBlID0gRElSRUNUT1JZX05BTUVfRFJBR19UWVBFO1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGlyZWN0b3J5LW5hbWVcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZSxnQkFBb0I7SUFFeEIsS0FBc0I7SUFDcEIsT0FBd0I7SUFDdkIsS0FBMEI7SUFDdkIsY0FBNEI7SUFDbkIsZUFBc0M7SUFFMUMsS0FBeUI7SUFDQyxRQUE0QjtJQUM5QixRQUFrQjtJQUNxQyxNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVHLDBCQUEwQjtjQUExQiwwQkFBMEI7YUFBMUIsMEJBQTBCOzhCQUExQiwwQkFBMEI7Z0VBQTFCLDBCQUEwQjs7aUJBQTFCLDBCQUEwQjs7WUFDOUMsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxDQUFDLFNBQVM7b0JBQ2IsTUFBTTtvQkFFSixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87dUJBRS9CLGFBQWE7eUJBUjBGLE1BQWdCO3lCQUFoQixNQUFnQjt5QkFBaEIsTUFBZ0I7d0JBWTdILE1BQU0sR0FBRyxJQUFJOzt5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