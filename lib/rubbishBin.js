"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _easy = require("easy");
var _necessary = require("necessary");
var _open = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/open"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/closed"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _pathMap = require("./utilities/pathMap");
var _entryTypes = require("./entryTypes");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    "@swc/helpers - typeof";
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
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
        "\n  \n  display: inline-block;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach, REMOVE_EVENT_TYPE = _easy.eventTypes.REMOVE_EVENT_TYPE;
var RubbishBin = /*#__PURE__*/ function(Element) {
    _inherits(RubbishBin, Element);
    var _super = _createSuper(RubbishBin);
    function RubbishBin() {
        _classCallCheck(this, RubbishBin);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "dropHandler", function(dragElement, aborted, element, done) {
            var markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            var dragEntryItem = dragElement; ///
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        _defineProperty(_assertThisInitialized(_this), "dragOverHandler", function(dragElement, element) {
            var dragEntryItem = dragElement, dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemExplorerIgnored = _this.isExplorerIgnored(dragEntryItemExplorer);
            if (dragEntryItemExplorerIgnored) {
                return;
            }
            var markerEntryItem = _this.retrieveMarkerEntryItem();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = null; ///
            markerEntryItemExplorer = _assertThisInitialized(_this); ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
        return _this;
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
                    pathMaps.forEach(function(pathMap) {
                        return _this.removeDragEntryItem(pathMap, explorer);
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
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer = this, fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_fileName.default, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer1 = this, directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(_directoryName.default, {
                                name: name,
                                explorer: explorer1
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
                var sourceEntryPath = pathMap.sourceEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                var filePath = sourceEntryPath; ///
                explorer.removeFilePath(filePath);
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourceEntryPath = pathMap.sourceEntryPath;
                if (sourceEntryPath === null) {
                    return;
                }
                var directoryPath = sourceEntryPath; ///
                explorer.removeDirectoryPath(directoryPath);
            }
        },
        {
            key: "callRemoveHandlersAsync",
            value: function callRemoveHandlersAsync(pathMaps, done) {
                var eventType = REMOVE_EVENT_TYPE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, removeHandler = handler, _$done = next; ///
                    removeHandler.call(element, pathMaps, _$done);
                }, done);
            }
        },
        {
            key: "onRemove",
            value: function onRemove(removeHandler, element) {
                var eventType = REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offRemove",
            value: function offRemove(removeHandler, element) {
                var eventType = REMOVE_EVENT_TYPE, handler = removeHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem, done) {
                var _this = this;
                var dragEntryItemPath = dragEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromDragEntryItemPath)(dragEntryItemPath), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(pathMaps, explorer, function() {
                    _this.removeMarker();
                    done();
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var onRemove = this.properties.onRemove, removeHandler = onRemove; ///
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
                var onRemove = this.properties.onRemove, removeHandler = onRemove; ///
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
                var _constructor = this.constructor, _$OpenRubbishBinSVG = _constructor.OpenRubbishBinSVG, _$ClosedRubbishBinSVG = _constructor.ClosedRubbishBinSVG;
                return [
                    /*#__PURE__*/ React.createElement(_$OpenRubbishBinSVG, null),
                    /*#__PURE__*/ React.createElement(_$ClosedRubbishBinSVG, null)
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
var _default = (0, _easyWithStyle.default)(RubbishBin)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBSRU1PVkVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgUnViYmlzaEJpbiBleHRlbmRzIEVsZW1lbnQge1xuICBkcm9wSGFuZGxlciA9IChkcmFnRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpO1xuXG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQ7ICAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQgPSB0aGlzLmlzRXhwbG9yZXJJZ25vcmVkKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcik7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aCwgLy8vXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbDsgLy8vXG5cbiAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IHRoaXM7ICAvLy9cblxuICAgIGlmICgobWFya2VyRW50cnlJdGVtRXhwbG9yZXIgIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHx8IChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgpKSB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtVHlwZSA9IGRyYWdFbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG4gICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlzRXhwbG9yZXJJZ25vcmVkKGV4cGxvcmVyKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZXhwbG9yZXIuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXMgPSB0aGlzLmdldElnbm9yZWRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSA9IGlnbm9yZWRSZWZlcmVuY2VzLmluY2x1ZGVzKHJlZmVyZW5jZSksXG4gICAgICAgICAgZXhwbG9yZXJJZ25vcmVkID0gaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZTtcdC8vL1xuXG4gICAgcmV0dXJuIGV4cGxvcmVySWdub3JlZDtcbiAgfVxuXG4gIGdldElnbm9yZWRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHsgaWdub3JlZFJlZmVyZW5jZXMgPSBbXSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIGlnbm9yZWRSZWZlcmVuY2VzO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd09wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5oaWRlQ2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlT3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLnNob3dDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZSZW1vdmUocmVtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSByZW1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZlJlbW92ZShyZW1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluU1ZHLCBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpblNWRy8+LFxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5TVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbnVsbDtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoLFxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBPcGVuUnViYmlzaEJpblNWRyA9IE9wZW5SdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyBDbG9zZWRSdWJiaXNoQmluU1ZHID0gQ2xvc2VkUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25SZW1vdmVcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSdWJiaXNoQmluKWBcbiAgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiUkVNT1ZFX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiUnViYmlzaEJpbiIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcmFnRW50cnlJdGVtIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkIiwiaXNFeHBsb3Jlcklnbm9yZWQiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJhZGRNYXJrZXIiLCJleHBsb3JlciIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImlnbm9yZWRSZWZlcmVuY2VzIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlc0luY2x1ZGVzUmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJleHBsb3Jlcklnbm9yZWQiLCJwcm9wZXJ0aWVzIiwiZ2xvYmFsVGhpcyIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJvcGVuIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiY2xvc2UiLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsInJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImNhbGxSZW1vdmVIYW5kbGVyc0FzeW5jIiwibmFtZSIsInR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlRW50cnlQYXRoIiwiZmlsZVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsImRpcmVjdG9yeVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZXZlbnRUeXBlIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJldmVudExpc3RlbmVyIiwibmV4dCIsImhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiY2FsbCIsIm9uUmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZlJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcmFnRW50cnlJdGVtUGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImdldFBhdGhNYXBzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJPcGVuUnViYmlzaEJpblNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldFN0YXRlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiZHJvcE1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQWdWYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBbFZvQixpQkFBaUI7K0JBRVosb0JBQW9CO29CQUNYLE1BQU07eUJBQ0osV0FBVzt5REFFbkIsdUJBQXVCOzJEQUNyQix5QkFBeUI7NkRBQ3JCLDhCQUE4QjtrRUFDekIsbUNBQW1DO3VCQUV4QyxxQkFBcUI7MEJBRWlCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RixJQUFNLEFBQUVBLE9BQU8sR0FBS0MsVUFBcUIsc0JBQUEsQ0FBakNELE9BQU8sQUFBMEIsRUFDbkMsQUFBRUUsaUJBQWlCLEdBQUtDLEtBQVUsV0FBQSxDQUFoQ0QsaUJBQWlCLEFBQWUsQUFBQztBQUV6QyxJQUFBLEFBQU1FLFVBQVUsaUJBMFRiLEFBMVRIOzs7YUFBTUEsVUFBVTs7OztRQUNkQywrQ0FBQUEsYUFBVyxFQUFHLFNBQUNDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBSztZQUNyRCxJQUFNQyxlQUFlLEdBQUcsTUFBS0MsdUJBQXVCLEVBQUUsRUFDaERDLHVCQUF1QixHQUFHRixlQUFlLENBQUNHLFdBQVcsRUFBRSxBQUFDO1lBRTlELElBQUlOLE9BQU8sRUFBRTtnQkFDWEssdUJBQXVCLENBQUNFLFlBQVksRUFBRSxDQUFDO2dCQUV2Q0wsSUFBSSxFQUFFLENBQUM7Z0JBRVAsT0FBTzthQUNSO1lBRUQsSUFBTU0sYUFBYSxHQUFHVCxX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