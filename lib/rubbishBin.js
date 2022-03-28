"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyDragAndDrop = require("easy-drag-and-drop");
var _easy = require("easy");
var _necessary = require("necessary");
var _open = _interopRequireDefault(require("./svg/rubbishBin/open"));
var _closed = _interopRequireDefault(require("./svg/rubbishBin/closed"));
var _fileName = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/marker/directoryName"));
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
        return _super.apply(this, arguments);
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
                var _$OpenRubbishBinSVG = this.constructor.OpenRubbishBinSVG;
                return _$OpenRubbishBinSVG;
            }
        },
        {
            key: "getClosedRubbishBinSVG",
            value: function getClosedRubbishBinSVG() {
                var _$ClosedRubbishBinSVG = this.constructor.ClosedRubbishBinSVG;
                return _$ClosedRubbishBinSVG;
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
                var _$OpenRubbishBinSVG = this.getOpenRubbishBinSVG(), _$ClosedRubbishBinSVG = this.getClosedRubbishBinSVG();
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
var _default = (0, _easyWithStyle).default(RubbishBin)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBSRU1PVkVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgUnViYmlzaEJpbiBleHRlbmRzIEVsZW1lbnQge1xuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldE9wZW5SdWJiaXNoQmluU1ZHKCkge1xuICAgIGNvbnN0IHsgT3BlblJ1YmJpc2hCaW5TVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gT3BlblJ1YmJpc2hCaW5TVkc7XG4gIH1cblxuICBnZXRDbG9zZWRSdWJiaXNoQmluU1ZHKCkge1xuICAgIGNvbnN0IHsgQ2xvc2VkUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBDbG9zZWRSdWJiaXNoQmluU1ZHO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd09wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5oaWRlQ2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlT3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLnNob3dDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZSZW1vdmUocmVtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSByZW1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IHRoaXMuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtUGF0aCksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvblJlbW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBvblJlbW92ZTsgLy8vXG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHJlbW92ZUhhbmRsZXIgJiYgdGhpcy5vblJlbW92ZShyZW1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtUGF0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1hcmtlckVudHJ5SXRlbVBhdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbVBhdGg7XG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcigpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIobWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IE9wZW5SdWJiaXNoQmluU1ZHID0gdGhpcy5nZXRPcGVuUnViYmlzaEJpblNWRygpLFxuICAgICAgICAgIENsb3NlZFJ1YmJpc2hCaW5TVkcgPSB0aGlzLmdldENsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8T3BlblJ1YmJpc2hCaW5TVkcvPixcbiAgICAgIDxDbG9zZWRSdWJiaXNoQmluU1ZHLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbCxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG51bGw7XG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCxcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgT3BlblJ1YmJpc2hCaW5TVkcgPSBPcGVuUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgQ2xvc2VkUnViYmlzaEJpblNWRyA9IENsb3NlZFJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uUmVtb3ZlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnViYmlzaEJpbilgXG4gIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIlJFTU9WRV9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIlJ1YmJpc2hCaW4iLCJpc0V4cGxvcmVySWdub3JlZCIsImV4cGxvcmVyIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsInByb3BlcnRpZXMiLCJnZXRPcGVuUnViYmlzaEJpblNWRyIsIk9wZW5SdWJiaXNoQmluU1ZHIiwiY29uc3RydWN0b3IiLCJnZXRDbG9zZWRSdWJiaXNoQmluU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblNWRyIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJvcGVuIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiY2xvc2UiLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsInJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImRvbmUiLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsIm5hbWUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsInNvdXJjZUVudHJ5UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJoYW5kbGVyIiwiZWxlbWVudCIsInJlbW92ZUhhbmRsZXIiLCJjYWxsIiwib25SZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmUmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtUGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImdldFBhdGhNYXBzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRTdGF0ZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFpQixDQUFqQixjQUFpQjtBQUVaLEdBQW9CLENBQXBCLGdCQUFvQjtBQUNYLEdBQU0sQ0FBTixLQUFNO0FBQ0osR0FBVyxDQUFYLFVBQVc7QUFFbkIsR0FBdUIsQ0FBdkIsS0FBdUI7QUFDckIsR0FBeUIsQ0FBekIsT0FBeUI7QUFDckIsR0FBOEIsQ0FBOUIsU0FBOEI7QUFDekIsR0FBbUMsQ0FBbkMsY0FBbUM7QUFFeEMsR0FBcUIsQ0FBckIsUUFBcUI7QUFFaUIsR0FBYyxDQUFkLFdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQWZ4Rjs7Ozs7Ozs7c0NBQUE7Ozs7OztpQ0FBQTs7O2lFQUFBOztTQUFBOzs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozs4QkFBQTs7Ozs7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