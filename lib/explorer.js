"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("@djalbat/easy-drag-and-drop");
var _necessary = require("necessary");
var _entries = _interopRequireDefault(require("./list/entries"));
var _marker = _interopRequireDefault(require("./mixins/marker"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _constants = require("./constants");
var _pathMap = require("./utilities/pathMap");
var _types = require("./types");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  \n  width: fit-content;\n  min-width: 10rem;\n  min-height: 2rem;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
var Explorer = /*#__PURE__*/ function(Element1) {
    _inherits(Explorer, Element1);
    function Explorer(selector, mounted) {
        _classCallCheck(this, Explorer);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Explorer).call(this, selector));
        _this.mounted = mounted;
        return _this;
    }
    _createClass(Explorer, [
        {
            key: "getPath",
            value: function getPath() {
                var path = null; ///
                return path;
            }
        },
        {
            key: "isMounted",
            value: function isMounted() {
                return this.mounted;
            }
        },
        {
            key: "isCollapsed",
            value: function isCollapsed() {
                var collapsed = false;
                return collapsed;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this; ///
                return explorer;
            }
        },
        {
            key: "getEntriesList",
            value: function getEntriesList() {
                var _constructor = this.constructor, EntriesList = _constructor.EntriesList;
                return EntriesList;
            }
        },
        {
            key: "getFileNameDragEntryItem",
            value: function getFileNameDragEntryItem() {
                var _constructor = this.constructor, FileNameDragEntryItem = _constructor.FileNameDragEntryItem;
                return FileNameDragEntryItem;
            }
        },
        {
            key: "getFileNameMarkerEntryItem",
            value: function getFileNameMarkerEntryItem() {
                var _constructor = this.constructor, FileNameMarkerEntryItem = _constructor.FileNameMarkerEntryItem;
                return FileNameMarkerEntryItem;
            }
        },
        {
            key: "getDirectoryNameDragEntryItem",
            value: function getDirectoryNameDragEntryItem() {
                var _constructor = this.constructor, DirectoryNameDragEntryItem = _constructor.DirectoryNameDragEntryItem;
                return DirectoryNameDragEntryItem;
            }
        },
        {
            key: "getDirectoryNameMarkerEntryItem",
            value: function getDirectoryNameMarkerEntryItem() {
                var _constructor = this.constructor, DirectoryNameMarkerEntryItem = _constructor.DirectoryNameMarkerEntryItem;
                return DirectoryNameMarkerEntryItem;
            }
        },
        {
            key: "moveDragEntryItem",
            value: function moveDragEntryItem(pathMap, explorer) {
                var type = pathMap.type;
                switch(type){
                    case _types.FILE_NAME_DRAG_TYPE:
                        this.moveFileNameDragEntryItem(pathMap, explorer);
                        break;
                }
                switch(type){
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        this.moveDirectoryNameDragEntryItem(pathMap, explorer);
                        break;
                }
            }
        },
        {
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps, explorer) {
                this.callMoveHandlers(pathMaps, (function() {
                    pathMaps.forEach((function(pathMap) {
                        return this.moveDragEntryItem(pathMap, explorer);
                    }).bind(this));
                }).bind(this));
            }
        },
        {
            key: "moveFileNameDragEntryItem",
            value: function moveFileNameDragEntryItem(pathMap, explorer) {
                var sourcePath = pathMap.sourcePath, targetPath = pathMap.targetPath;
                this.removeFilePath(sourcePath);
                if (targetPath !== null) {
                    explorer.addFilePath(targetPath);
                }
            }
        },
        {
            key: "moveDirectoryNameDragEntryItem",
            value: function moveDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourcePath = pathMap.sourcePath, targetPath = pathMap.targetPath;
                this.removeDirectoryPath(sourcePath);
                if (targetPath !== null) {
                    var collapsed = pathMap.collapsed;
                    explorer.addDirectoryPath(targetPath, collapsed);
                }
            }
        },
        {
            key: "callMoveHandlers",
            value: function callMoveHandlers(pathMaps, done) {
                var eventType = _constants.MOVE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, done1 = next; ///
                    moveHandler.call(element, pathMaps, done1);
                }, done);
            }
        },
        {
            key: "onMove",
            value: function onMove(moveHandler, element) {
                var eventType = _constants.MOVE, handler = moveHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offMove",
            value: function offMove(moveHandler, element) {
                var eventType = _constants.MOVE, handler = moveHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement, element) {
                var dragEntryItem = dragElement; ///
                this.dropDragEntryItem(dragEntryItem);
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem) {
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                if (dragEntryItemExplorer !== markerEntryItemExplorer || dragEntryItemPath !== markerEntryItemPath) {
                    var dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath), sourcePath = (0, _pathMap).nonNullPathFromName(dragEntryItemPathWithoutBottommostName), targetPath = (0, _pathMap).nonNullPathFromName(markerEntryItemPathWithoutBottommostName), pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath), explorer = this; ///
                    dragEntryItemExplorer.moveDragEntryItems(pathMaps, explorer);
                    dragEntryItemExplorer.removeMarker();
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, onMove = _properties.onMove, moveHandler = onMove; ///
                this.mounted = true;
                this.enableDrop();
                this.enableMarker();
                this.onDrop(this.dropHandler, this);
                moveHandler && this.onMove(moveHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onMove = _properties.onMove, moveHandler = onMove; ///
                this.mounted = false;
                this.disableDrop();
                this.disableMarker();
                this.offDrop(this.dropHandler, this);
                moveHandler && this.offMove(moveHandler, this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorer = this;
                return(/*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
                }));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var mounted = false, explorer = _easy.Element.fromClass(Class, properties, mounted);
                return explorer;
            }
        }
    ]);
    return Explorer;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Explorer, "EntriesList", _entries.default);
_defineProperty(Explorer, "FileNameDragEntryItem", _fileName.default);
_defineProperty(Explorer, "FileNameMarkerEntryItem", _fileName1.default);
_defineProperty(Explorer, "DirectoryNameDragEntryItem", _directoryName.default);
_defineProperty(Explorer, "DirectoryNameMarkerEntryItem", _directoryName1.default);
_defineProperty(Explorer, "tagName", "div");
_defineProperty(Explorer, "ignoredProperties", [
    "onMove"
]);
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easyDragAndDrop.dropMixins);
Object.assign(Explorer.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcIkBkamFsYmF0L2Vhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuL21peGlucy9tYXJrZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBNT1ZFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb3VudGVkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5tb3VudGVkID0gbW91bnRlZDtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb2xsYXBzZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldEVudHJpZXNMaXN0KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0xpc3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgXHRyZXR1cm4gRW50cmllc0xpc3Q7XG5cdH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGhNYXA7XG5cbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfRFJBR19UWVBFIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgOlxuICAgICAgICB0aGlzLm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3Jlcikge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVycyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlUGF0aCwgdGFyZ2V0UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIHRoaXMucmVtb3ZlRmlsZVBhdGgoc291cmNlUGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0UGF0aCAhPT0gbnVsbCkge1xuICAgICAgZXhwbG9yZXIuYWRkRmlsZVBhdGgodGFyZ2V0UGF0aCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VQYXRoLCB0YXJnZXRQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoKHNvdXJjZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSBwYXRoTWFwO1xuXG4gICAgICBleHBsb3Jlci5hZGREaXJlY3RvcnlQYXRoKHRhcmdldFBhdGgsIGNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgY2FsbE1vdmVIYW5kbGVycyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFLFxuICAgICAgICAgIGhhbmRsZXIgPSBtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZNb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7XHQvLy9cblxuICAgIHRoaXMuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoKGRyYWdFbnRyeUl0ZW1FeHBsb3JlciAhPT0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChkcmFnRW50cnlJdGVtUGF0aCAhPT0gbWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCksXG4gICAgICAgICAgICBzb3VyY2VQYXRoID0gbm9uTnVsbFBhdGhGcm9tTmFtZShkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSksIC8vL1xuICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IG5vbk51bGxQYXRoRnJvbU5hbWUobWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSksIC8vL1xuICAgICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpLFxuICAgICAgICAgICAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlci5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyKTtcblxuICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuICAgIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmU7IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZXIoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZTsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMuZGlzYWJsZU1hcmtlcigpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZNb3ZlKG1vdmVIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBtYXJrZXJNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBtaW4taGVpZ2h0OiAycmVtO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0gsZ0JBQTZCO0lBQ0gsVUFBVztJQUV4QyxRQUFnQjtJQUNmLE9BQWlCO0lBQ1IsU0FBNEI7SUFDMUIsVUFBOEI7SUFDM0IsY0FBaUM7SUFDL0IsZUFBbUM7SUFFdkQsVUFBYTtJQUNFLFFBQXFCO0lBQ0ssTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErT3BDLCtFQU1uQzs7Ozs7OztJQW5QUSxPQUFPLEdBYnNDLFVBQVcsdUJBYXhELE9BQU8sRUFDUCxpQ0FBaUMsR0FkWSxVQUFXLGVBY3hELGlDQUFpQztJQUVuQyxRQUFRO2NBQVIsUUFBUTthQUFSLFFBQVEsQ0FDQSxRQUFRLEVBQUUsT0FBTzs4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