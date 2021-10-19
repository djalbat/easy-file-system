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
var forEach = _necessary.asynchronousUtilities.forEach;
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
                this.callRemoveHandlersAsync(pathMaps, function() {
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
                var filePath = sourceEntryPath; ///
                explorer.removeFilePath(filePath);
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
                if (sourceEntryPath === targetEntryPath) {
                    return;
                }
                var directoryPath = sourceEntryPath; ///
                explorer.removeDirectoryPath(directoryPath);
            }
        },
        {
            key: "callRemoveHandlersAsync",
            value: function callRemoveHandlersAsync(pathMaps, done) {
                var eventType = _eventTypes.REMOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, removeHandler = handler, done1 = next; ///
                    removeHandler.call(element, pathMaps, done1);
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
                var dragEntryItemPath = dragEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap).sourceEntryPathFromDragEntryItemPath(dragEntryItemPath), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(pathMaps, explorer, function() {
                    _this.removeMarker();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJkcm9wTWl4aW5zIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiUkVNT1ZFX0VWRU5UX1RZUEUiLCJub25OdWxsUGF0aEZyb21OYW1lIiwic291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIiwiRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIiwiRklMRV9OQU1FX0RSQUdfVFlQRSIsImZvckVhY2giLCJSdWJiaXNoQmluIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJleHBsb3JlciIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJwcm9wZXJ0aWVzIiwiZ2V0T3BlblJ1YmJpc2hCaW5TVkciLCJjb25zdHJ1Y3RvciIsImdldENsb3NlZFJ1YmJpc2hCaW5TVkciLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJhZGRNYXJrZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwib3BlbiIsInJlbW92ZU1hcmtlciIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsImNsb3NlIiwic2hvd09wZW5SdWJiaXNoQmluU1ZHIiwiaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkciLCJoaWRlT3BlblJ1YmJpc2hCaW5TVkciLCJzaG93Q2xvc2VkUnViYmlzaEJpblNWRyIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwicGF0aE1hcHMiLCJkb25lIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJuYW1lIiwidHlwZSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJoYW5kbGVyIiwiZWxlbWVudCIsInJlbW92ZUhhbmRsZXIiLCJjYWxsIiwib25SZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmUmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtUGF0aCIsImdldFBhdGhNYXBzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRTdGF0ZSIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDSCxHQUFvQixDQUFwQixnQkFBb0I7QUFDVCxHQUFXLENBQVgsVUFBVztBQUVuQixHQUF1QixDQUF2QixLQUF1QjtBQUNyQixHQUF5QixDQUF6QixPQUF5QjtBQUNyQixHQUE4QixDQUE5QixTQUE4QjtBQUN6QixHQUFtQyxDQUFuQyxjQUFtQztBQUUxQyxHQUFjLENBQWQsV0FBYztBQUNaLEdBQXFCLENBQXJCLFFBQXFCO0FBRUssR0FBUyxDQUFULE1BQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBNlVsQyxDQUlyQzs7Ozs7OztBQS9VQSxHQUFLLENBQUcsT0FBTyxHQVp1QixVQUFXLHVCQVl6QyxPQUFPO0lBRVQsVUFBVSxpQkFBaEIsUUFBUTtjQUFGLFVBQVU7YUFBVixVQUFVOzhCQUFWLFVBQVU7Z0VBQVYsVUFBVTs7aUJBQVYs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QUFhO0FBQzFCLENBQUM7QUFHSCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBdFZQLGdCQUFvQjttQkFIekIsY0FBaUIsVUEyVmQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBSRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IG5vbk51bGxQYXRoRnJvbU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX0RSQUdfVFlQRSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0T3BlblJ1YmJpc2hCaW5TVkcoKSB7XG4gICAgY29uc3QgeyBPcGVuUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBPcGVuUnViYmlzaEJpblNWRztcbiAgfVxuXG4gIGdldENsb3NlZFJ1YmJpc2hCaW5TVkcoKSB7XG4gICAgY29uc3QgeyBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIENsb3NlZFJ1YmJpc2hCaW5TVkc7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICByZW1vdmVNYXJrZXIoKSB7XG4gICAgdGhpcy5yZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zaG93T3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLmhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuc2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgZW50cnlEaXJlY3RvcnkgP1xuICAgICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgICB0aGlzLnJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jKHBhdGhNYXBzLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbTtcblxuICAgIGNvbnN0IG5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1OYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gZHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfRFJBR19UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSB0YXJnZXRFbnRyeVBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvblJlbW92ZShyZW1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wSGFuZGxlcihkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGRyYWdFbGVtZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbDsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZlJlbW92ZShyZW1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBPcGVuUnViYmlzaEJpblNWRyA9IHRoaXMuZ2V0T3BlblJ1YmJpc2hCaW5TVkcoKSxcbiAgICAgICAgICBDbG9zZWRSdWJiaXNoQmluU1ZHID0gdGhpcy5nZXRDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE9wZW5SdWJiaXNoQmluU1ZHLz4sXG4gICAgICA8Q2xvc2VkUnViYmlzaEJpblNWRy8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGwsXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBudWxsO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGgsXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIE9wZW5SdWJiaXNoQmluU1ZHID0gT3BlblJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIENsb3NlZFJ1YmJpc2hCaW5TVkcgPSBDbG9zZWRSdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvblJlbW92ZVwiLFxuICAgIFwiaWdub3JlZFJlZmVyZW5jZXNcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnViYmlzaC1iaW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcm9wTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1YmJpc2hCaW4pYFxuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgXG5gO1xuIl19