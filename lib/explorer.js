"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _entries = _interopRequireDefault(require("./list/entries"));
var _marker = _interopRequireDefault(require("./mixins/marker"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _defaults = require("./defaults");
var _pathMap = require("./utilities/pathMap");
var _eventTypes = require("./eventTypes");
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
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
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
            key: "isOptionPresent",
            value: function isOptionPresent(option) {
                var _properties = this.properties, _options = _properties.options, options = _options === void 0 ? _defaults.DEFAULT_OPTIONS : _options, optionPresent = !!options[option]; ///
                return optionPresent;
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
            key: "getReference",
            value: function getReference() {
                var _properties = this.properties, _reference = _properties.reference, reference = _reference === void 0 ? null : _reference;
                return reference;
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
            key: "getIgnoredReferences",
            value: function getIgnoredReferences() {
                var _properties = this.properties, _ignoredReferences = _properties.ignoredReferences, ignoredReferences = _ignoredReferences === void 0 ? [] : _ignoredReferences;
                return ignoredReferences;
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
                var directory = pathMap.directory;
                directory ? this.moveDirectoryNameDragEntryItem(pathMap, explorer) : this.moveFileNameDragEntryItem(pathMap, explorer);
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
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(fileNameDragEntryItem) {
                var fileName = fileNameDragEntryItem.getFileName();
                this.callOpenHandlers(fileName);
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
            key: "callOpenHandlers",
            value: function callOpenHandlers(fileName) {
                var eventType = _eventTypes.OPEN_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var handler = eventListener.handler, element = eventListener.element, openHandler = handler; ///
                    openHandler.call(element, fileName);
                });
            }
        },
        {
            key: "callMoveHandlers",
            value: function callMoveHandlers(pathMaps, done) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, done = next; ///
                    moveHandler.call(element, pathMaps, done);
                }, done);
            }
        },
        {
            key: "onOpen",
            value: function onOpen(openHandler, element) {
                var eventType = _eventTypes.OPEN_EVENT_TYPE, handler = openHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offOpen",
            value: function offOpen(openHandler, element) {
                var eventType = _eventTypes.OPEN_EVENT_TYPE, handler = openHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onMove",
            value: function onMove(moveHandler, element) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, handler = moveHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offMove",
            value: function offMove(moveHandler, element) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, handler = moveHandler; ///
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
                var _properties = this.properties, onMove = _properties.onMove, onOpen = _properties.onOpen, moveHandler = onMove, openHandler = onOpen; ///
                this.mounted = true;
                this.enableDrop();
                this.enableMarker();
                this.onDrop(this.dropHandler, this);
                moveHandler && this.onMove(moveHandler);
                openHandler && this.onOpen(openHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onMove = _properties.onMove, onOpen = _properties.onOpen, moveHandler = onMove, openHandler = onOpen; ///
                this.mounted = false;
                this.disableDrop();
                this.disableMarker();
                this.offDrop(this.dropHandler, this);
                moveHandler && this.offMove(moveHandler);
                openHandler && this.offOpen(openHandler);
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
    "onMove",
    "onOpen",
    "options",
    "reference",
    "ignoredReferences"
]);
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easyDragAndDrop.dropMixins);
Object.assign(Explorer.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJFbGVtZW50IiwiZHJvcE1peGlucyIsInBhdGhVdGlsaXRpZXMiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbnRyaWVzTGlzdCIsIm1hcmtlck1peGlucyIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiREVGQVVMVF9PUFRJT05TIiwibm9uTnVsbFBhdGhGcm9tTmFtZSIsIk9QRU5fRVZFTlRfVFlQRSIsIk1PVkVfRVZFTlRfVFlQRSIsImZvckVhY2giLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJFeHBsb3JlciIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3IiLCJtb3VudGVkIiwiZ2V0UGF0aCIsInBhdGgiLCJpc01vdW50ZWQiLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImlzT3B0aW9uUHJlc2VudCIsIm9wdGlvbiIsIm9wdGlvbnMiLCJwcm9wZXJ0aWVzIiwib3B0aW9uUHJlc2VudCIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRFbnRyaWVzTGlzdCIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImRpcmVjdG9yeSIsIm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImNhbGxNb3ZlSGFuZGxlcnMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWUiLCJnZXRGaWxlTmFtZSIsImNhbGxPcGVuSGFuZGxlcnMiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsInJlbW92ZUZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJlbGVtZW50Iiwib3BlbkhhbmRsZXIiLCJjYWxsIiwiZG9uZSIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtUGF0aCIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwibWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImdldFBhdGhNYXBzIiwicmVtb3ZlTWFya2VyIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwiZW5hYmxlTWFya2VyIiwib25Ecm9wIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsImRpc2FibGVNYXJrZXIiLCJvZmZEcm9wIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNILEdBQW9CLENBQXBCLGdCQUFvQjtBQUNNLEdBQVcsQ0FBWCxVQUFXO0FBRXhDLEdBQWdCLENBQWhCLFFBQWdCO0FBQ2YsR0FBaUIsQ0FBakIsT0FBaUI7QUFDUixHQUE0QixDQUE1QixTQUE0QjtBQUMxQixHQUE4QixDQUE5QixVQUE4QjtBQUMzQixHQUFpQyxDQUFqQyxjQUFpQztBQUMvQixHQUFtQyxDQUFuQyxlQUFtQztBQUU1QyxHQUFZLENBQVosU0FBWTtBQUNSLEdBQXFCLENBQXJCLFFBQXFCO0FBQ1IsR0FBYyxDQUFkLFdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZ1M1QiwrRUFNbkM7Ozs7Ozs7QUFwU0EsR0FBSyxDQUFHLE9BQU8sR0Fic0MsVUFBVyx1QkFheEQsT0FBTyxFQUNQLGlDQUFpQyxHQWRZLFVBQVcsZUFjeEQsaUNBQWlDO0lBRW5DLFFBQVEsaUJBQWQsUUFBUTtjQUFGLFFBQVE7YUFBUixRQUFRLENBQ0EsUUFBUSxFQUFFLE9BQU87OEJBRHpCLFFBQVE7O2lFQUFSLFFBQVEsYUFFSixRQUFRO2NBRVQsT0FBTyxHQUFHLE9BQU87OztpQkFKcEIsUUFBUTs7WUFPWixHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFD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