"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _necessary = require("necessary");
var _drop = _interopRequireDefault(require("./mixins/drop"));
var _entries = _interopRequireDefault(require("./list/entries"));
var _marker = _interopRequireDefault(require("./mixins/marker"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _constants = require("./constants");
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
        "\n  \n  width: fit-content;\n      \n"
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
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this; ///
                return explorer;
            }
        },
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
                var explorer = this, markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer();
                if (explorer !== dragEntryItemExplorer || dragEntryItemPath !== markerEntryItemPath) {
                    var dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath), sourcePath = dragEntryItemPathWithoutBottommostName, targetPath = markerEntryItemPathWithoutBottommostName, pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath);
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
Object.assign(Explorer.prototype, _drop.default);
Object.assign(Explorer.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkcm9wTWl4aW5zIGZyb20gXCIuL21peGlucy9kcm9wXCI7XG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuL21peGlucy9tYXJrZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBNT1ZFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbW91bnRlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW91bnRlZCA9IG1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cblx0Z2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoTWFwO1xuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRSA6XG4gICAgICAgIHRoaXMubW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIDpcbiAgICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMubW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZVBhdGgsIHRhcmdldFBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICB0aGlzLnJlbW92ZUZpbGVQYXRoKHNvdXJjZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICAgIGV4cGxvcmVyLmFkZEZpbGVQYXRoKHRhcmdldFBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlUGF0aCwgdGFyZ2V0UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aChzb3VyY2VQYXRoKTtcblxuICAgIGlmICh0YXJnZXRQYXRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gcGF0aE1hcDtcblxuICAgICAgZXhwbG9yZXIuYWRkRGlyZWN0b3J5UGF0aCh0YXJnZXRQYXRoLCBjb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxNb3ZlSGFuZGxlcnMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIG1vdmVIYW5kbGVyLmNhbGwoZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgb25Nb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50O1x0Ly8vXG5cbiAgICB0aGlzLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmICgoZXhwbG9yZXIgIT09IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKGRyYWdFbnRyeUl0ZW1QYXRoICE9PSBtYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICAgIHNvdXJjZVBhdGggPSBkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSxcdC8vL1xuICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsXHQvLy9cbiAgICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIpO1xuXG4gICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbk1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZTsgLy8vXG5cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLmVuYWJsZU1hcmtlcigpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9uTW92ZShtb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1vdmVIYW5kbGVyID0gb25Nb3ZlOyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlTWFya2VyKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZk1vdmUobW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgXHRjb25zdCBleHBsb3JlciA9IHRoaXM7XG5cbiAgXHRyZXR1cm4gKFxuXG4gIFx0XHQ8RW50cmllc0xpc3QgZXhwbG9yZXI9e2V4cGxvcmVyfSB0b3Btb3N0IC8+XG5cblx0XHQpO1xuXHR9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgXHR0aGlzLmFzc2lnbkNvbnRleHQoKTtcblx0fVxuXG5cdHN0YXRpYyBFbnRyaWVzTGlzdCA9IEVudHJpZXNMaXN0O1xuXG5cdHN0YXRpYyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgc3RhdGljIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbk1vdmVcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIG1hcmtlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDdUIsVUFBVztJQUV6QyxLQUFlO0lBQ2QsUUFBZ0I7SUFDZixPQUFpQjtJQUNSLFNBQTRCO0lBQzFCLFVBQThCO0lBQzNCLGNBQWlDO0lBQy9CLGVBQW1DO0lBRXZELFVBQWE7SUFDNEIsTUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F3T3BDLHFDQUluQzs7Ozs7OztJQTFPUSxPQUFPLEdBYnNDLFVBQVcsdUJBYXhELE9BQU8sRUFDUCxpQ0FBaUMsR0FkWSxVQUFXLGVBY3hELGlDQUFpQztJQUVuQyxRQUFRO2NBQVIsUUFBUTthQUFSLFFBQVEsQ0FDQSxRQUFRLEVBQUUsT0FBTzs4QkFEekIsUUFBUTs7aUVBQVIsUUFBUSxhQUVKLFFBQVE7Y0FFVCxPQUFPLEdBQUcsT0FBTzs7O2lCQUpwQixRQUFROztZQU9aLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsUUFBUSxRQUFVLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFcEIsUUFBUTs7OztZQUdqQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPO29CQUNDLElBQUksR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUVoQixJQUFJOzs7O1lBR2IsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxPQUFPOzs7O1lBR3JCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7b0JBQ1csWUFB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