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
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _styles = require("./styles");
var _defaults = require("./defaults");
var _pathMap = require("./utilities/pathMap");
var _eventTypes = require("./eventTypes");
var _options = require("./options");
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
        "\n  \n  padding: ",
        "; \n  \n"
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
            key: "isMounted",
            value: function isMounted() {
                return this.mounted;
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
            key: "isOptionPresent",
            value: function isOptionPresent(option) {
                var _properties = this.properties, _options = _properties.options, options = _options === void 0 ? _defaults.DEFAULT_OPTIONS : _options, optionPresent = !!options[option]; ///
                return optionPresent;
            }
        },
        {
            key: "isExplorerIgnored",
            value: function isExplorerIgnored(explorer) {
                var reference = explorer.getReference(), ignoredReferences = this.getIgnoredReferences(), ignoredReferencesIncludesReference = ignoredReferences.includes(reference), explorerIgnored = ignoredReferencesIncludesReference; ///
                return explorerIgnored;
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
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.moveDirectoryNameDragEntryItem(pathMap, explorer) : this.moveFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callMoveHandlers(pathMaps, function() {
                    var _this1 = _this;
                    pathMaps.forEach(function(pathMap) {
                        return _this1.moveDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(fileNameDragEntryItem) {
                var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath; ///
                this.callOpenHandlers(filePath);
            }
        },
        {
            key: "moveFileNameDragEntryItem",
            value: function moveFileNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === targetEntryPath) {
                    return;
                }
                this.removeFilePath(sourceEntryPath);
                if (targetEntryPath === null) {
                    return;
                }
                explorer.addFilePath(targetEntryPath);
            }
        },
        {
            key: "moveDirectoryNameDragEntryItem",
            value: function moveDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === targetEntryPath) {
                    return;
                }
                this.removeDirectoryPath(sourceEntryPath);
                if (targetEntryPath === null) {
                    return;
                }
                var collapsed = pathMap.collapsed;
                explorer.addDirectoryPath(targetEntryPath, collapsed);
            }
        },
        {
            key: "callOpenHandlers",
            value: function callOpenHandlers(filePath) {
                var _this = this;
                var eventType = _eventTypes.OPEN_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var handler = eventListener.handler, element = eventListener.element, openHandler = handler; ///
                    openHandler.call(element, filePath, _this); ///
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
            value: function dropHandler(dragElement, aborted, element, done) {
                var explorer = this, dragEntryItem = dragElement; ///
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
                var dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);
                if (dragEntryItemExplorerIgnored) {
                    return;
                }
                var dragIntoTopmostDirectoriesOnlyOptionPresent = this.isOptionPresent(_options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION);
                if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
                    return;
                }
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemName = dragEntryItem.getName();
                var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
                markerEntryItemPath = dragEntryItemName; ///
                markerEntryItemExplorer = this; ///
                if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                    var dragEntryItemType = dragEntryItem.getType();
                    previousMarkerEntryItemExplorer.removeMarker();
                    markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
                }
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem, done) {
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath), sourceEntryPath = (0, _pathMap).nonNullPathFromName(dragEntryItemPathWithoutBottommostName), targetEntryPath = (0, _pathMap).nonNullPathFromName(markerEntryItemPathWithoutBottommostName), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = this; ///
                dragEntryItemExplorer.moveDragEntryItems(pathMaps, explorer, function() {
                    dragEntryItemExplorer.removeMarker();
                    done();
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, onMove = _properties.onMove, onOpen = _properties.onOpen, moveHandler = onMove, openHandler = onOpen; ///
                this.mounted = true;
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOver(this.dragOverHandler, this);
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
                this.offDrop(this.dropHandler, this);
                this.offDragOver(this.dragOverHandler, this);
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
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject(), _styles.explorerPadding);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJFbGVtZW50IiwiZHJvcE1peGlucyIsInBhdGhVdGlsaXRpZXMiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbnRyaWVzTGlzdCIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZXhwbG9yZXJQYWRkaW5nIiwiREVGQVVMVF9PUFRJT05TIiwibm9uTnVsbFBhdGhGcm9tTmFtZSIsIk9QRU5fRVZFTlRfVFlQRSIsIk1PVkVfRVZFTlRfVFlQRSIsIkRSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIiwiZm9yRWFjaCIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJpc01vdW50ZWQiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicHJvcGVydGllcyIsImdldEVudHJpZXNMaXN0IiwiaXNPcHRpb25QcmVzZW50Iiwib3B0aW9uIiwib3B0aW9ucyIsIm9wdGlvblByZXNlbnQiLCJpc0V4cGxvcmVySWdub3JlZCIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtcyIsInBhdGhNYXBzIiwiZG9uZSIsImNhbGxNb3ZlSGFuZGxlcnMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiZWxlbWVudCIsIm9wZW5IYW5kbGVyIiwiY2FsbCIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImRyYWdFbnRyeUl0ZW0iLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJkcmFnSW50b1RvcG1vc3REaXJlY3Rvcmllc09ubHlPcHRpb25QcmVzZW50IiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJnZXRQYXRoTWFwcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNILEdBQW9CLENBQXBCLGdCQUFvQjtBQUNNLEdBQVcsQ0FBWCxVQUFXO0FBRXhDLEdBQWdCLENBQWhCLFFBQWdCO0FBQ04sR0FBNEIsQ0FBNUIsU0FBNEI7QUFDMUIsR0FBOEIsQ0FBOUIsVUFBOEI7QUFDM0IsR0FBaUMsQ0FBakMsY0FBaUM7QUFDL0IsR0FBbUMsQ0FBbkMsZUFBbUM7QUFFNUMsR0FBVSxDQUFWLE9BQVU7QUFDVixHQUFZLENBQVosU0FBWTtBQUNSLEdBQXFCLENBQXJCLFFBQXFCO0FBQ1IsR0FBYyxDQUFkLFdBQWM7QUFDTCxHQUFXLENBQVgsUUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFRLEVBdVRMLENBQTRCLCtCQWxVSSxlQUFtQztnQkFXdEUsUUFBUSxFQXlUTCxDQUFPLFVBQUcsQ0FBSztnQkF6VGxCLFFBQVEsRUEyVEwsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixDQUFRO0lBQ1IsQ0FBUTtJQUNSLENBQVM7SUFDVCxDQUFXO0lBQ1gsQ0FBbUI7QUFDckIsQ0FBQztnQkFqVUcsUUFBUSxFQW1VTCxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFVO0FBQ3ZCLENBQUM7QUFVSCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBaldMLGdCQUFvQjttQkFIekIsY0FBaUIsVUFzV2QsUUFBUSxxQkExVkQsT0FBVSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbnRyaWVzTGlzdCBmcm9tIFwiLi9saXN0L2VudHJpZXNcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBleHBsb3JlclBhZGRpbmcgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfT1BUSU9OUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IE9QRU5fRVZFTlRfVFlQRSwgTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT04gfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEV4cGxvcmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb3VudGVkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5tb3VudGVkID0gbW91bnRlZDtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudGVkO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UgPSBudWxsIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgPSBERUZBVUxUX09QVElPTlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBvcHRpb25QcmVzZW50ID0gISFvcHRpb25zW29wdGlvbl07ICAvLy9cblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMubW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGg7IC8vL1xuXG4gICAgdGhpcy5jYWxsT3BlbkhhbmRsZXJzKGZpbGVQYXRoKTtcbiAgfVxuXG4gIG1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVGaWxlUGF0aChzb3VyY2VFbnRyeVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLmFkZEZpbGVQYXRoKHRhcmdldEVudHJ5UGF0aCk7XG4gIH1cblxuICBtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoKHNvdXJjZUVudHJ5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBleHBsb3Jlci5hZGREaXJlY3RvcnlQYXRoKHRhcmdldEVudHJ5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzKHBhdGhNYXBzLCBkb25lKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIG1vdmVIYW5kbGVyLmNhbGwoZWxlbWVudCwgcGF0aE1hcHMsIGRvbmUpO1xuICAgIH0sIGRvbmUpO1xuICB9XG5cbiAgb25PcGVuKG9wZW5IYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gT1BFTl9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBvcGVuSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZPcGVuKG9wZW5IYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gT1BFTl9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBvcGVuSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvbk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50O1x0Ly8vXG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZX09QVElPTik7XG5cbiAgICBpZiAoZHJhZ0ludG9Ub3Btb3N0RGlyZWN0b3JpZXNPbmx5T3B0aW9uUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChkcmFnRW50cnlJdGVtUGF0aCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBub25OdWxsUGF0aEZyb21OYW1lKGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbm9uTnVsbFBhdGhGcm9tTmFtZShtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlci5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl19