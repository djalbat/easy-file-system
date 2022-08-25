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
var _drag = /*#__PURE__*/ _interopRequireDefault(require("./item/entry/drag"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
            var dragElementDragEntryItem = _instanceof(dragElement, _drag.default);
            if (!dragElementDragEntryItem) {
                done();
                return;
            }
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        _defineProperty(_assertThisInitialized(_this), "dragOverHandler", function(dragElement, element) {
            var dragElementDragEntryItem = _instanceof(dragElement, _drag.default);
            if (!dragElementDragEntryItem) {
                return;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IE9wZW5SdWJiaXNoQmluU1ZHIGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL29wZW5cIjtcbmltcG9ydCBDbG9zZWRSdWJiaXNoQmluU1ZHIGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IG5vbk51bGxQYXRoRnJvbU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IFJFTU9WRV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGw7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbU5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1QYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNob3dPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZU9wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5zaG93Q2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICAgIGNvbnN0IHsgZW50cnlEaXJlY3RvcnkgfSA9IHBhdGhNYXA7XG5cbiAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICB0aGlzLnJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IGhhbmRsZXIsICAvLy9cbiAgICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvblJlbW92ZShyZW1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHJlbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wRHJhZ0VudHJ5SXRlbShkcmFnRW50cnlJdGVtLCBkb25lKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbVBhdGggPSBkcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW1QYXRoKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5vbkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvblJlbW92ZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBvblJlbW92ZTsgLy8vXG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkRyb3AodGhpcy5kcm9wSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHJlbW92ZUhhbmRsZXIgJiYgdGhpcy5vZmZSZW1vdmUocmVtb3ZlSGFuZGxlcik7XG4gIH1cblxuICBnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWFya2VyRW50cnlJdGVtUGF0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcihtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlcikge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBPcGVuUnViYmlzaEJpblNWRywgQ2xvc2VkUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8T3BlblJ1YmJpc2hCaW5TVkcvPixcbiAgICAgIDxDbG9zZWRSdWJiaXNoQmluU1ZHLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbCxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG51bGw7XG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCxcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgT3BlblJ1YmJpc2hCaW5TVkcgPSBPcGVuUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgQ2xvc2VkUnViYmlzaEJpblNWRyA9IENsb3NlZFJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uUmVtb3ZlXCIsXG4gICAgXCJpZ25vcmVkUmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnViYmlzaEJpbilgXG4gIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIlJFTU9WRV9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIlJ1YmJpc2hCaW4iLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwiZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtIiwiRHJhZ0VudHJ5SXRlbSIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJyZW1vdmVNYXJrZXIiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImRyYWdPdmVySGFuZGxlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQiLCJpc0V4cGxvcmVySWdub3JlZCIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsImFkZE1hcmtlciIsImV4cGxvcmVyIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiaWdub3JlZFJlZmVyZW5jZXMiLCJnZXRJZ25vcmVkUmVmZXJlbmNlcyIsImlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UiLCJpbmNsdWRlcyIsImV4cGxvcmVySWdub3JlZCIsInByb3BlcnRpZXMiLCJnbG9iYWxUaGlzIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsIm9wZW4iLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJjbG9zZSIsInNob3dPcGVuUnViYmlzaEJpblNWRyIsImhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaGlkZU9wZW5SdWJiaXNoQmluU1ZHIiwic2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkciLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwicmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsInBhdGhNYXBzIiwiY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMiLCJuYW1lIiwidHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJzb3VyY2VFbnRyeVBhdGgiLCJmaWxlUGF0aCIsInJlbW92ZUZpbGVQYXRoIiwiZGlyZWN0b3J5UGF0aCIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJuZXh0IiwiaGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJjYWxsIiwib25SZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmUmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyYWdFbnRyeUl0ZW1QYXRoIiwic291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwiZ2V0UGF0aE1hcHMiLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkRyb3AiLCJvZmZEcmFnT3ZlciIsImdldE1hcmtlckVudHJ5SXRlbVBhdGgiLCJzdGF0ZSIsImdldFN0YXRlIiwiZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwidXBkYXRlU3RhdGUiLCJzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImNoaWxkRWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsIk9wZW5SdWJiaXNoQmluU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblNWRyIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0U3RhdGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBOFZiLFNBSUU7OztlQUpGLFFBSUU7OztrRUFoV29CLGlCQUFpQjsrQkFFWixvQkFBb0I7b0JBQ1gsTUFBTTt5QkFDSixXQUFXO3lEQUV2QixtQkFBbUI7eURBQ2YsdUJBQXVCOzJEQUNyQix5QkFBeUI7NkRBQ3JCLDhCQUE4QjtrRUFDekIsbUNBQW1DO3VCQUV4QyxxQkFBcUI7MEJBRWlCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEYsSUFBTSxBQUFFQSxPQUFPLEdBQUtDLFVBQXFC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