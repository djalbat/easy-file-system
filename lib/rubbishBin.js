"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _open = _interopRequireDefault(require("./svg/rubbishBin/open"));
var _closed = _interopRequireDefault(require("./svg/rubbishBin/closed"));
var _fileName = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _eventTypes = require("./eventTypes");
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
        "\n  \n  display: inline-block;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach, pathWithoutBottommostNameFromPath = _necessary.pathUtilities.pathWithoutBottommostNameFromPath;
var RubbishBin = /*#__PURE__*/ function(Element) {
    _inherits(RubbishBin, Element);
    function RubbishBin() {
        _classCallCheck(this, RubbishBin);
        return _possibleConstructorReturn(this, _getPrototypeOf(RubbishBin).apply(this, arguments));
    }
    _createClass(RubbishBin, [
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
            key: "getOpenRubbishBinSVG",
            value: function getOpenRubbishBinSVG() {
                var _constructor = this.constructor, OpenRubbishBinSVG = _constructor.OpenRubbishBinSVG;
                return OpenRubbishBinSVG;
            }
        },
        {
            key: "getClosedRubbishBinSVG",
            value: function getClosedRubbishBinSVG() {
                var _constructor = this.constructor, ClosedRubbishBinSVG = _constructor.ClosedRubbishBinSVG;
                return ClosedRubbishBinSVG;
            }
        },
        {
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
            }
        },
        {
            key: "addMarker",
            value: function addMarker(markerEntryItemPath, dragEntryItemType) {
                var markerEntryItemName = markerEntryItemPath; ///
                this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);
                this.open();
            }
        },
        {
            key: "removeMarker",
            value: function removeMarker() {
                this.removeMarkerEntryItem();
                this.close();
            }
        },
        {
            key: "open",
            value: function open() {
                this.showOpenRubbishBinSVG();
                this.hideClosedRubbishBinSVG();
            }
        },
        {
            key: "close",
            value: function close() {
                this.hideOpenRubbishBinSVG();
                this.showClosedRubbishBinSVG();
            }
        },
        {
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(pathMaps, explorer, done) {
                var _this = this;
                this.callRemoveHandlers(pathMaps, function() {
                    var _this1 = _this;
                    pathMaps.forEach(function(pathMap) {
                        return _this1.removeDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
            }
        },
        {
            key: "addMarkerEntryItem",
            value: function addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
                var markerEntryItem;
                var name = markerEntryItemName, type = dragEntryItemType; ///
                switch(type){
                    case _types.FILE_NAME_DRAG_TYPE:
                        {
                            var explorer = this, fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_fileName.default, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        {
                            var explorer = this, directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_directoryName.default, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = directoryNameMarkerEntryItem; ///
                            break;
                        }
                }
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem
                });
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                var markerEntryItem = null;
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem
                });
            }
        },
        {
            key: "removeFileNameDragEntryItem",
            value: function removeFileNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === targetEntryPath) {
                    return;
                }
                explorer.removeFilePath(sourceEntryPath);
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === targetEntryPath) {
                    return;
                }
                explorer.removeDirectoryPath(sourceEntryPath);
            }
        },
        {
            key: "callRemoveHandlers",
            value: function callRemoveHandlers(pathMaps, done) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, removeHandler = handler, done = next; ///
                    removeHandler.call(element, pathMaps, done);
                }, done);
            }
        },
        {
            key: "onRemove",
            value: function onRemove(removeHandler, element) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offRemove",
            value: function offRemove(removeHandler, element) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "dropHandler",
            value: function dropHandler(dragElement, aborted, element, done) {
                var explorer = this, dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = this.isExplorerIgnored(dragEntryItemExplorer);
                aborted = aborted || dragEntryItemExplorerIgnored; ///
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
                var markerEntryItem = this.retrieveMarkerEntryItem();
                var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
                markerEntryItemPath = null; ///
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
                var dragEntryItemPath = dragEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), sourceEntryPath = (0, _pathMap).nonNullPathFromName(dragEntryItemPathWithoutBottommostName), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(pathMaps, explorer, function() {
                    _this.close();
                    done();
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, onRemove = _properties.onRemove, removeHandler = onRemove; ///
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                removeHandler && this.onRemove(removeHandler);
                this.close();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onRemove = _properties.onRemove, removeHandler = onRemove; ///
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                removeHandler && this.offRemove(removeHandler);
            }
        },
        {
            key: "getMarkerEntryItemPath",
            value: function getMarkerEntryItemPath() {
                var state = this.getState(), markerEntryItemPath = state.markerEntryItemPath;
                return markerEntryItemPath;
            }
        },
        {
            key: "getMarkerEntryItemExplorer",
            value: function getMarkerEntryItemExplorer() {
                var state = this.getState(), markerEntryItemExplorer = state.markerEntryItemExplorer;
                return markerEntryItemExplorer;
            }
        },
        {
            key: "setMarkerEntryItemPath",
            value: function setMarkerEntryItemPath(markerEntryItemPath) {
                this.updateState({
                    markerEntryItemPath: markerEntryItemPath
                });
            }
        },
        {
            key: "setMarkerEntryItemExplorer",
            value: function setMarkerEntryItemExplorer(markerEntryItemExplorer) {
                this.updateState({
                    markerEntryItemExplorer: markerEntryItemExplorer
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var OpenRubbishBinSVG = this.getOpenRubbishBinSVG(), ClosedRubbishBinSVG = this.getClosedRubbishBinSVG();
                return [
                    /*#__PURE__*/ React.createElement(OpenRubbishBinSVG, null),
                    /*#__PURE__*/ React.createElement(ClosedRubbishBinSVG, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var markerEntryItemPath = null, markerEntryItemExplorer = null;
                this.assignContext();
                this.setState({
                    markerEntryItemPath: markerEntryItemPath,
                    markerEntryItemExplorer: markerEntryItemExplorer
                });
            }
        }
    ]);
    return RubbishBin;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(RubbishBin, "OpenRubbishBinSVG", _open.default);
_defineProperty(RubbishBin, "ClosedRubbishBinSVG", _closed.default);
_defineProperty(RubbishBin, "tagName", "div");
_defineProperty(RubbishBin, "ignoredProperties", [
    "onRemove",
    "ignoredReferences"
]);
_defineProperty(RubbishBin, "defaultProperties", {
    className: "rubbish-bin"
});
Object.assign(RubbishBin.prototype, _easyDragAndDrop.dropMixins);
var _default = (0, _easyWithStyle).default(RubbishBin)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJkcm9wTWl4aW5zIiwicGF0aFV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIk9wZW5SdWJiaXNoQmluU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblNWRyIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIlJFTU9WRV9FVkVOVF9UWVBFIiwibm9uTnVsbFBhdGhGcm9tTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSIsIkZJTEVfTkFNRV9EUkFHX1RZUEUiLCJmb3JFYWNoIiwicGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIiwiUnViYmlzaEJpbiIsImlzRXhwbG9yZXJJZ25vcmVkIiwiZXhwbG9yZXIiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwicHJvcGVydGllcyIsImdldE9wZW5SdWJiaXNoQmluU1ZHIiwiY29uc3RydWN0b3IiLCJnZXRDbG9zZWRSdWJiaXNoQmluU1ZHIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJnbG9iYWxUaGlzIiwiYWRkTWFya2VyIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImRyYWdFbnRyeUl0ZW1UeXBlIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsIm9wZW4iLCJyZW1vdmVNYXJrZXIiLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJjbG9zZSIsInNob3dPcGVuUnViYmlzaEJpblNWRyIsImhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaGlkZU9wZW5SdWJiaXNoQmluU1ZHIiwic2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkciLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwicmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsInBhdGhNYXBzIiwiZG9uZSIsImNhbGxSZW1vdmVIYW5kbGVycyIsIm5hbWUiLCJ0eXBlIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZXZlbnRUeXBlIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwibmV4dCIsImhhbmRsZXIiLCJlbGVtZW50IiwicmVtb3ZlSGFuZGxlciIsImNhbGwiLCJvblJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZSZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJvcEhhbmRsZXIiLCJkcmFnRWxlbWVudCIsImFib3J0ZWQiLCJkcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJnZXRQYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0VHlwZSIsImRyYWdFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJnZXRQYXRoTWFwcyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiZ2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInNldE1hcmtlckVudHJ5SXRlbVBhdGgiLCJ1cGRhdGVTdGF0ZSIsInNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiY2hpbGRFbGVtZW50cyIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0U3RhdGUiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBQ0gsR0FBb0IsQ0FBcEIsZ0JBQW9CO0FBQ00sR0FBVyxDQUFYLFVBQVc7QUFFbEMsR0FBdUIsQ0FBdkIsS0FBdUI7QUFDckIsR0FBeUIsQ0FBekIsT0FBeUI7QUFDckIsR0FBOEIsQ0FBOUIsU0FBOEI7QUFDekIsR0FBbUMsQ0FBbkMsY0FBbUM7QUFFMUMsR0FBYyxDQUFkLFdBQWM7QUFDWixHQUFxQixDQUFyQixRQUFxQjtBQUNLLEdBQVMsQ0FBVCxNQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTZVbEMsQ0FJckM7Ozs7Ozs7QUEvVUEsR0FBSyxDQUFHLE9BQU8sR0FYc0MsVUFBVyx1QkFXeEQsT0FBTyxFQUNQLGlDQUFpQyxHQVpZLFVBQVcsZUFZeEQsaUNBQWlDO0lBRW5DLFVBQVUsaUJB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LENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQWE7QUFDMUIsQ0FBQztBQUdILE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFyVlAsZ0JBQW9CO21CQUh6QixjQUFpQixVQTBWZCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJvcE1peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE9wZW5SdWJiaXNoQmluU1ZHIGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL29wZW5cIjtcbmltcG9ydCBDbG9zZWRSdWJiaXNoQmluU1ZHIGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IFJFTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgbm9uTnVsbFBhdGhGcm9tTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9EUkFHX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0T3BlblJ1YmJpc2hCaW5TVkcoKSB7XG4gICAgY29uc3QgeyBPcGVuUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBPcGVuUnViYmlzaEJpblNWRztcbiAgfVxuXG4gIGdldENsb3NlZFJ1YmJpc2hCaW5TVkcoKSB7XG4gICAgY29uc3QgeyBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIENsb3NlZFJ1YmJpc2hCaW5TVkc7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICByZW1vdmVNYXJrZXIoKSB7XG4gICAgdGhpcy5yZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zaG93T3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLmhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuc2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgICB0aGlzLnJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW1vdmVIYW5kbGVycyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gdGFyZ2V0RW50cnlQYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoc291cmNlRW50cnlQYXRoKTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IHRhcmdldEVudHJ5UGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoc291cmNlRW50cnlQYXRoKTtcbiAgfVxuXG4gIGNhbGxSZW1vdmVIYW5kbGVycyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZSZW1vdmUocmVtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSByZW1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBhYm9ydGVkID0gYWJvcnRlZCB8fCBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkOyAgLy8vXG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgZXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbDsvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBub25OdWxsUGF0aEZyb21OYW1lKGRyYWdFbnRyeUl0ZW1QYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lKSwgLy8vXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbCxcdC8vL1xuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZlJlbW92ZShyZW1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBPcGVuUnViYmlzaEJpblNWRyA9IHRoaXMuZ2V0T3BlblJ1YmJpc2hCaW5TVkcoKSxcbiAgICAgICAgICBDbG9zZWRSdWJiaXNoQmluU1ZHID0gdGhpcy5nZXRDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE9wZW5SdWJiaXNoQmluU1ZHLz4sXG4gICAgICA8Q2xvc2VkUnViYmlzaEJpblNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGwsXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBudWxsO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGgsXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIE9wZW5SdWJiaXNoQmluU1ZHID0gT3BlblJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIENsb3NlZFJ1YmJpc2hCaW5TVkcgPSBDbG9zZWRSdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvblJlbW92ZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1YmJpc2hCaW4pYFxuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgXG5gO1xuIl19