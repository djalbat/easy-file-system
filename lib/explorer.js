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
                explorer.removeFilePath(sourceEntryPath);
                if (targetEntryPath === null) {
                    return;
                }
                this.addFilePath(targetEntryPath);
            }
        },
        {
            key: "moveDirectoryNameDragEntryItem",
            value: function moveDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === targetEntryPath) {
                    return;
                }
                explorer.removeDirectoryPath(sourceEntryPath);
                if (targetEntryPath === null) {
                    return;
                }
                var collapsed = pathMap.collapsed;
                this.addDirectoryPath(targetEntryPath, collapsed);
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
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, done1 = next; ///
                    moveHandler.call(element, pathMaps, done1);
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
                var explorer = this, dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);
                aborted = aborted || dragEntryItemExplorerIgnored; ///
                if (aborted) {
                    var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                    markerEntryItemExplorer.removeMarker();
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
                var _this = this;
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath), sourceEntryPath = (0, _pathMap).nonNullPathFromName(dragEntryItemPathWithoutBottommostName), targetEntryPath = (0, _pathMap).nonNullPathFromName(markerEntryItemPathWithoutBottommostName), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.moveDragEntryItems(pathMaps, explorer, function() {
                    _this.removeMarker();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJFbGVtZW50IiwiZHJvcE1peGlucyIsInBhdGhVdGlsaXRpZXMiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbnRyaWVzTGlzdCIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZXhwbG9yZXJQYWRkaW5nIiwiREVGQVVMVF9PUFRJT05TIiwibm9uTnVsbFBhdGhGcm9tTmFtZSIsIk9QRU5fRVZFTlRfVFlQRSIsIk1PVkVfRVZFTlRfVFlQRSIsIkRSQUdfSU5UT19UT1BNT1NUX0RJUkVDVE9SSUVTX09OTFlfT1BUSU9OIiwiZm9yRWFjaCIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsIkV4cGxvcmVyIiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsIm1vdW50ZWQiLCJpc01vdW50ZWQiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicHJvcGVydGllcyIsImdldEVudHJpZXNMaXN0IiwiaXNPcHRpb25QcmVzZW50Iiwib3B0aW9uIiwib3B0aW9ucyIsIm9wdGlvblByZXNlbnQiLCJpc0V4cGxvcmVySWdub3JlZCIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtcyIsInBhdGhNYXBzIiwiZG9uZSIsImNhbGxNb3ZlSGFuZGxlcnMiLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aCIsImNhbGxPcGVuSGFuZGxlcnMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsImFkZEZpbGVQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImNvbGxhcHNlZCIsImFkZERpcmVjdG9yeVBhdGgiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiZWxlbWVudCIsIm9wZW5IYW5kbGVyIiwiY2FsbCIsIm5leHQiLCJtb3ZlSGFuZGxlciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZPcGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsIm9mZk1vdmUiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImRyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0ludG9Ub3Btb3N0RGlyZWN0b3JpZXNPbmx5T3B0aW9uUHJlc2VudCIsImRyYWdFbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJnZXRQYXRoTWFwcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiY2hpbGRFbGVtZW50cyIsInRvcG1vc3QiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNILEdBQW9CLENBQXBCLGdCQUFvQjtBQUNNLEdBQVcsQ0FBWCxVQUFXO0FBRXhDLEdBQWdCLENBQWhCLFFBQWdCO0FBQ04sR0FBNEIsQ0FBNUIsU0FBNEI7QUFDMUIsR0FBOEIsQ0FBOUIsVUFBOEI7QUFDM0IsR0FBaUMsQ0FBakMsY0FBaUM7QUFDL0IsR0FBbUMsQ0FBbkMsZUFBbUM7QUFFNUMsR0FBVSxDQUFWLE9BQVU7QUFDVixHQUFZLENBQVosU0FBWTtBQUNSLEdBQXFCLENBQXJCLFFBQXFCO0FBQ1IsR0FBYyxDQUFkLFdBQWM7QUFDTCxHQUFXLENBQVgsUUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Qzs7O1dBblZHLFFBQVE7bUJBbkJVLEtBQU07Z0JBbUJ4QixRQUFRLEVBc1ROLENBQVcsY0FyVUssUUFBZ0I7Z0JBZWxDLFFBQVEsRUF3VEwsQ0FBcUIsd0JBdFVJLFNBQTRCO2dCQWN4RCxRQUFRLEVBMFRMLENBQXVCLDBCQXZVSSxVQUE4QjtnQkFhNUQsUUFBUSxFQTRUTCxDQUEwQiw2QkF4VUksY0FBaUM7Z0JBWWxFLFFBQVEsRUE4VEwsQ0FBNEIsK0JBelVJLGVBQW1DO2dCQVd0RSxRQUFRLEVBZ1VMLENBQU8sVUFBRyxDQUFLO2dCQWhVbEIsUUFBUSxFQWtVTCxDQUFpQixvQkFBRyxDQUFDO0lBQzFCLENBQVE7SUFDUixDQUFRO0lBQ1IsQ0FBUztJQUNULENBQVc7SUFDWCxDQUFtQjtBQUNyQixDQUFDO2dCQXhVRyxRQUFRLEVBMFVMLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQVU7QUFDdkIsQ0FBQztBQVVILE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUF4V0wsZ0JBQW9CO21CQUh6QixjQUFpQixVQTZXZCxRQUFRLHFCQWpXRCxPQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVudHJpZXNMaXN0IGZyb20gXCIuL2xpc3QvZW50cmllc1wiO1xuaW1wb3J0IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWVcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9kaXJlY3RvcnlOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IGV4cGxvcmVyUGFkZGluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9PUFRJT05TIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG5vbk51bGxQYXRoRnJvbU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgT1BFTl9FVkVOVF9UWVBFLCBNT1ZFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZX09QVElPTiB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNPcHRpb25QcmVzZW50KG9wdGlvbikge1xuICAgIGNvbnN0IHsgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG9wdGlvblByZXNlbnQgPSAhIW9wdGlvbnNbb3B0aW9uXTsgIC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgICB0aGlzLm1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbE1vdmVIYW5kbGVycyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChzb3VyY2VFbnRyeVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgodGFyZ2V0RW50cnlQYXRoKTtcbiAgfVxuXG4gIG1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKHNvdXJjZUVudHJ5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBjb2xsYXBzZWQpO1xuICB9XG5cbiAgY2FsbE9wZW5IYW5kbGVycyhmaWxlUGF0aCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE9QRU5fRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBvcGVuSGFuZGxlciA9IGhhbmRsZXI7ICAvLy9cblxuICAgICAgb3BlbkhhbmRsZXIuY2FsbChlbGVtZW50LCBmaWxlUGF0aCwgdGhpcyk7ICAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxNb3ZlSGFuZGxlcnMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBhYm9ydGVkID0gYWJvcnRlZCB8fCBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkOyAgLy8vXG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChEUkFHX0lOVE9fVE9QTU9TVF9ESVJFQ1RPUklFU19PTkxZX09QVElPTik7XG5cbiAgICBpZiAoZHJhZ0ludG9Ub3Btb3N0RGlyZWN0b3JpZXNPbmx5T3B0aW9uUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtTmFtZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtTmFtZTsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChkcmFnRW50cnlJdGVtUGF0aCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBub25OdWxsUGF0aEZyb21OYW1lKGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbm9uTnVsbFBhdGhGcm9tTmFtZShtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuOyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub25Nb3ZlKG1vdmVIYW5kbGVyKTtcbiAgICBvcGVuSGFuZGxlciAmJiB0aGlzLm9uT3BlbihvcGVuSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uTW92ZSwgb25PcGVuIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbW92ZUhhbmRsZXIgPSBvbk1vdmUsIC8vL1xuICAgICAgICAgIG9wZW5IYW5kbGVyID0gb25PcGVuOyAvLy9cblxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICBtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub2ZmT3BlbihvcGVuSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpcztcblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cbiAgc3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uTW92ZVwiLFxuICAgIFwib25PcGVuXCIsXG4gICAgXCJvcHRpb25zXCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbW91bnRlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cGxvcmVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG1vdW50ZWQpO1xuXG4gICAgcmV0dXJuIGV4cGxvcmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRXhwbG9yZXIucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEV4cGxvcmVyKWBcbiAgXG4gIHBhZGRpbmc6ICR7ZXhwbG9yZXJQYWRkaW5nfTsgXG4gIFxuYDtcbiJdfQ==