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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBPcGVuUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmltcG9ydCBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBub25OdWxsUGF0aEZyb21OYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwXCI7XG5pbXBvcnQgeyBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBSRU1PVkVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgUnViYmlzaEJpbiBleHRlbmRzIEVsZW1lbnQge1xuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldE9wZW5SdWJiaXNoQmluU1ZHKCkge1xuICAgIGNvbnN0IHsgT3BlblJ1YmJpc2hCaW5TVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gT3BlblJ1YmJpc2hCaW5TVkc7XG4gIH1cblxuICBnZXRDbG9zZWRSdWJiaXNoQmluU1ZHKCkge1xuICAgIGNvbnN0IHsgQ2xvc2VkUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBDbG9zZWRSdWJiaXNoQmluU1ZHO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd09wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5oaWRlQ2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlT3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLnNob3dDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgKCkgPT4ge1xuICAgICAgcGF0aE1hcHMuZm9yRWFjaCgocGF0aE1hcCkgPT4gdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7ICAvLy9cblxuICAgIGV4cGxvcmVyLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGZvckVhY2goZXZlbnRMaXN0ZW5lcnMsIChldmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICByZW1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZSZW1vdmUocmVtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSByZW1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudDsgIC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSk7XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZHJhZ0VsZW1lbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCA9IHRoaXMuaXNFeHBsb3Jlcklnbm9yZWQoZHJhZ0VudHJ5SXRlbUV4cGxvcmVyKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1QYXRoID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbUV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtUGF0aCksXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbCxcbiAgICAgICAgICBwYXRoTWFwcyA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuICAgICAgICAgIGV4cGxvcmVyID0gZHJhZ0VudHJ5SXRlbUV4cGxvcmVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvblJlbW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBvblJlbW92ZTsgLy8vXG5cbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25Ecm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHJlbW92ZUhhbmRsZXIgJiYgdGhpcy5vblJlbW92ZShyZW1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtUGF0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1hcmtlckVudHJ5SXRlbVBhdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbVBhdGg7XG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcigpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIobWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IE9wZW5SdWJiaXNoQmluU1ZHID0gdGhpcy5nZXRPcGVuUnViYmlzaEJpblNWRygpLFxuICAgICAgICAgIENsb3NlZFJ1YmJpc2hCaW5TVkcgPSB0aGlzLmdldENsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8T3BlblJ1YmJpc2hCaW5TVkcvPixcbiAgICAgIDxDbG9zZWRSdWJiaXNoQmluU1ZHLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbCxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG51bGw7XG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCxcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgT3BlblJ1YmJpc2hCaW5TVkcgPSBPcGVuUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgQ2xvc2VkUnViYmlzaEJpblNWRyA9IENsb3NlZFJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uUmVtb3ZlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnViYmlzaEJpbilgXG4gIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIlJFTU9WRV9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIlJ1YmJpc2hCaW4iLCJpc0V4cGxvcmVySWdub3JlZCIsImV4cGxvcmVyIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsInByb3BlcnRpZXMiLCJnZXRPcGVuUnViYmlzaEJpblNWRyIsIk9wZW5SdWJiaXNoQmluU1ZHIiwiY29uc3RydWN0b3IiLCJnZXRDbG9zZWRSdWJiaXNoQmluU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblNWRyIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJvcGVuIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiY2xvc2UiLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsInJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJwYXRoTWFwcyIsImRvbmUiLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsIm5hbWUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsInNvdXJjZUVudHJ5UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImV2ZW50VHlwZSIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJoYW5kbGVyIiwiZWxlbWVudCIsInJlbW92ZUhhbmRsZXIiLCJjYWxsIiwib25SZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmUmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImRyYWdFbnRyeUl0ZW0iLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldFR5cGUiLCJkcmFnRW50cnlJdGVtUGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21EcmFnRW50cnlJdGVtUGF0aCIsInRhcmdldEVudHJ5UGF0aCIsImdldFBhdGhNYXBzIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25Ecm9wIiwib25EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZEcm9wIiwib2ZmRHJhZ092ZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwic3RhdGUiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJjaGlsZEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRTdGF0ZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVaLElBQUEsZ0JBQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ1gsSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBQ0osSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRW5CLElBQUEsS0FBdUIsa0NBQXZCLHVCQUF1QixFQUFBO0FBQ3JCLElBQUEsT0FBeUIsa0NBQXpCLHlCQUF5QixFQUFBO0FBQ3JCLElBQUEsU0FBOEIsa0NBQTlCLDhCQUE4QixFQUFBO0FBQ3pCLElBQUEsY0FBbUMsa0NBQW5DLG1DQUFtQyxFQUFBO0FBRXhDLElBQUEsUUFBcUIsV0FBckIscUJBQXFCLENBQUE7QUFFaUIsSUFBQSxXQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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