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
var _eventTypes = require("./eventTypes");
var _pathMap = require("./utilities/pathMap");
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
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
var forEach = _necessary.asynchronousUtilities.forEach;
var Explorer = /*#__PURE__*/ function(Element) {
    _inherits(Explorer, Element);
    var _super = _createSuper(Explorer);
    function Explorer(selector, mounted) {
        _classCallCheck(this, Explorer);
        var _this;
        _this = _super.call(this, selector);
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
                var EntriesList = this.constructor.EntriesList;
                return EntriesList;
            }
        },
        {
            key: "isDirectoryEmpty",
            value: function isDirectoryEmpty(directoryPath) {
                var directoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem(directoryPath), directoryNameDragEntryItemEmpty = directoryNameDragEntryItem.isEmpty(), directoryEmpty = directoryNameDragEntryItemEmpty; ///
                return directoryEmpty;
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
                var FileNameDragEntryItem = this.constructor.FileNameDragEntryItem;
                return FileNameDragEntryItem;
            }
        },
        {
            key: "getFileNameMarkerEntryItem",
            value: function getFileNameMarkerEntryItem() {
                var FileNameMarkerEntryItem = this.constructor.FileNameMarkerEntryItem;
                return FileNameMarkerEntryItem;
            }
        },
        {
            key: "getDirectoryNameDragEntryItem",
            value: function getDirectoryNameDragEntryItem() {
                var DirectoryNameDragEntryItem = this.constructor.DirectoryNameDragEntryItem;
                return DirectoryNameDragEntryItem;
            }
        },
        {
            key: "getDirectoryNameMarkerEntryItem",
            value: function getDirectoryNameMarkerEntryItem() {
                var DirectoryNameMarkerEntryItem = this.constructor.DirectoryNameMarkerEntryItem;
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
                this.callMoveHandlersAsync(pathMaps, function() {
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
                var filePath;
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                filePath = sourceEntryPath; ///
                explorer.removeFilePath(filePath);
                if (targetEntryPath === null) {
                    return;
                }
                filePath = targetEntryPath; ///
                this.addFilePath(filePath);
            }
        },
        {
            key: "moveDirectoryNameDragEntryItem",
            value: function moveDirectoryNameDragEntryItem(pathMap, explorer) {
                var directoryPath;
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                directoryPath = sourceEntryPath; ///
                explorer.removeDirectoryPath(directoryPath);
                if (targetEntryPath === null) {
                    return;
                }
                var collapsed = pathMap.collapsed;
                directoryPath = targetEntryPath; ///
                this.addDirectoryPath(directoryPath, collapsed);
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
            key: "callMoveHandlersAsync",
            value: function callMoveHandlersAsync(pathMaps, done1) {
                var eventType = _eventTypes.MOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, done = next; ///
                    moveHandler.call(element, pathMaps, done);
                }, done1);
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
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);
                if (dragEntryItemExplorerIgnored) {
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
                var markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemPath = dragEntryItem.getPath(), markerEntryItemPath = markerEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap).sourceEntryPathFromDragEntryItemPath(dragEntryItemPath), targetEntryPath = (0, _pathMap).targetEntryPathFromMarkerEntryItemPath(markerEntryItemPath), pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
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
    "reference",
    "ignoredReferences"
]);
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _easyDragAndDrop.dropMixins);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject(), _styles.explorerPadding);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2RpcmVjdG9yeU5hbWVcIjtcblxuaW1wb3J0IHsgZXhwbG9yZXJQYWRkaW5nIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBPUEVOX0VWRU5UX1RZUEUsIE1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCwgdGFyZ2V0RW50cnlQYXRoRnJvbU1hcmtlckVudHJ5SXRlbVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLm1vdW50ZWQ7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSA9IG51bGwgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRFbnRyaWVzTGlzdCgpIHtcbiAgXHRjb25zdCB7IEVudHJpZXNMaXN0IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gIFx0cmV0dXJuIEVudHJpZXNMaXN0O1xuXHR9XG5cbiAgaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKSxcbiAgICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHk7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xuICB9XG5cbiAgaXNFeHBsb3Jlcklnbm9yZWQoZXhwbG9yZXIpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBleHBsb3Jlci5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlcyA9IHRoaXMuZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlID0gaWdub3JlZFJlZmVyZW5jZXMuaW5jbHVkZXMocmVmZXJlbmNlKSxcbiAgICAgICAgICBleHBsb3Jlcklnbm9yZWQgPSBpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlO1x0Ly8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXJJZ25vcmVkO1xuICB9XG5cbiAgZ2V0SWdub3JlZFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyBpZ25vcmVkUmVmZXJlbmNlcyA9IFtdIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gaWdub3JlZFJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IHsgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5tb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5tb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIG1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5tb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICB0aGlzLmNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGxldCBmaWxlUGF0aDtcblxuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICAgIHRoaXMuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgbGV0IGRpcmVjdG9yeVBhdGg7XG5cbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICBkaXJlY3RvcnlQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNhbGxPcGVuSGFuZGxlcnMoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgb3BlbkhhbmRsZXIgPSBoYW5kbGVyOyAgLy8vXG5cbiAgICAgIG9wZW5IYW5kbGVyLmNhbGwoZWxlbWVudCwgZmlsZVBhdGgsIHRoaXMpOyAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBjYWxsTW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZk9wZW4ob3BlbkhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBPUEVOX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IG9wZW5IYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9uTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmTW92ZShtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGVsZW1lbnQsIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50OyAgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5kcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKTtcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbU5hbWUgPSBkcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbU5hbWU7Ly8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSB0YXJnZXRFbnRyeVBhdGhGcm9tTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLm1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgbW92ZUhhbmRsZXIgJiYgdGhpcy5vbk1vdmUobW92ZUhhbmRsZXIpO1xuICAgIG9wZW5IYW5kbGVyICYmIHRoaXMub25PcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25Nb3ZlLCBvbk9wZW4gfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtb3ZlSGFuZGxlciA9IG9uTW92ZSwgLy8vXG4gICAgICAgICAgb3BlbkhhbmRsZXIgPSBvbk9wZW47IC8vL1xuXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIG1vdmVIYW5kbGVyICYmIHRoaXMub2ZmTW92ZShtb3ZlSGFuZGxlcik7XG4gICAgb3BlbkhhbmRsZXIgJiYgdGhpcy5vZmZPcGVuKG9wZW5IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gIFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzO1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNMaXN0IGV4cGxvcmVyPXtleHBsb3Jlcn0gdG9wbW9zdCAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0xpc3QgPSBFbnRyaWVzTGlzdDtcblxuICBzdGF0aWMgRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gRmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gIHN0YXRpYyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25Nb3ZlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXIpYFxuICBcbiAgcGFkZGluZzogJHtleHBsb3JlclBhZGRpbmd9OyBcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImZvckVhY2giLCJFeHBsb3JlciIsInNlbGVjdG9yIiwibW91bnRlZCIsImlzTW91bnRlZCIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0RW50cmllc0xpc3QiLCJFbnRyaWVzTGlzdCIsImNvbnN0cnVjdG9yIiwiaXNEaXJlY3RvcnlFbXB0eSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwiaXNFbXB0eSIsImRpcmVjdG9yeUVtcHR5IiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIm1vdmVEcmFnRW50cnlJdGVtcyIsInBhdGhNYXBzIiwiZG9uZSIsImNhbGxNb3ZlSGFuZGxlcnNBc3luYyIsIm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoIiwiY2FsbE9wZW5IYW5kbGVycyIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInJlbW92ZUZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwiYWRkRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJlbGVtZW50Iiwib3BlbkhhbmRsZXIiLCJjYWxsIiwibmV4dCIsIm1vdmVIYW5kbGVyIiwib25PcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZk9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwib2ZmTW92ZSIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImFkZE1hcmtlciIsImRyYWdFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aE1hcHMiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImNoaWxkRWxlbWVudHMiLCJ0b3Btb3N0IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDSCxHQUFvQixDQUFwQixnQkFBb0I7QUFDVCxHQUFXLENBQVgsVUFBVztBQUV6QixHQUFnQixDQUFoQixRQUFnQjtBQUNOLEdBQTRCLENBQTVCLFNBQTRCO0FBQzFCLEdBQThCLENBQTlCLFVBQThCO0FBQzNCLEdBQWlDLENBQWpDLGNBQWlDO0FBQy9CLEdBQW1DLENBQW5DLGVBQW1DO0FBRTVDLEdBQVUsQ0FBVixPQUFVO0FBQ08sR0FBYyxDQUFkLFdBQWM7QUFDOEIsR0FBcUIsQ0FBckIsUUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJWL0UsQ0FFeEI7UUFBa0IsQ0FFN0I7Ozs7Ozs7QUE3VkEsR0FBSyxDQUFHQSxPQUFPLEdBWnVCLFVBQVcsdUJBWXpDQSxPQUFPO0lBRVRDLFFBQVEsaUJBQWQsUUFBUTtjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVEsQ0FDQUMsUUFBUSxFQUFFQyxPQUFPOzhCQUR6QkYsUUFBUTs7a0NBRUpDLFFBQVE7Y0FFVEMsT0FBTyxHQUFHQSxPQUFPOzs7aUJBSnBCRixRQUFROztZQU9aRyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEs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