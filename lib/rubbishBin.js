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
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var entryDirectory = pathMap.entryDirectory;
                entryDirectory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBkcm9wTWl4aW5zIH0gZnJvbSBcImVhc3ktZHJhZy1hbmQtZHJvcFwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvZHJhZ1wiO1xuaW1wb3J0IE9wZW5SdWJiaXNoQmluU1ZHIGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL29wZW5cIjtcbmltcG9ydCBDbG9zZWRSdWJiaXNoQmluU1ZHIGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IG5vbk51bGxQYXRoRnJvbU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgc291cmNlRW50cnlQYXRoRnJvbURyYWdFbnRyeUl0ZW1QYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBcIjtcbmltcG9ydCB7IERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuL2VudHJ5VHlwZXNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IFJFTU9WRV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3BIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VsZW1lbnREcmFnRW50cnlJdGVtID0gKGRyYWdFbGVtZW50IGluc3RhbmNlb2YgRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoIWRyYWdFbGVtZW50RHJhZ0VudHJ5SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkcmFnRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtRXhwbG9yZXJJZ25vcmVkID0gdGhpcy5pc0V4cGxvcmVySWdub3JlZChkcmFnRW50cnlJdGVtRXhwbG9yZXIpO1xuXG4gICAgaWYgKGRyYWdFbnRyeUl0ZW1FeHBsb3Jlcklnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGgsIC8vL1xuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGw7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBpc0V4cGxvcmVySWdub3JlZChleHBsb3Jlcikge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGV4cGxvcmVyLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzID0gdGhpcy5nZXRJZ25vcmVkUmVmZXJlbmNlcygpLFxuICAgICAgICAgIGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2UgPSBpZ25vcmVkUmVmZXJlbmNlcy5pbmNsdWRlcyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cGxvcmVySWdub3JlZCA9IGlnbm9yZWRSZWZlcmVuY2VzSW5jbHVkZXNSZWZlcmVuY2U7XHQvLy9cblxuICAgIHJldHVybiBleHBsb3Jlcklnbm9yZWQ7XG4gIH1cblxuICBnZXRJZ25vcmVkUmVmZXJlbmNlcygpIHtcbiAgICBjb25zdCB7IGlnbm9yZWRSZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBpZ25vcmVkUmVmZXJlbmNlcztcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbU5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1QYXRoOyAgLy8vXG5cbiAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbTtcblxuICAgIGNvbnN0IG5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1OYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gZHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVtb3ZlKHJlbW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gcmVtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZSZW1vdmUocmVtb3ZlSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFTU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSByZW1vdmVIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtUGF0aCA9IGRyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbVBhdGgpLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIHRoaXMuY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xuICB9XG5cbiAgcmVtb3ZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gICAgZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgICBleHBsb3Jlci5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgY2FsbFJlbW92ZUhhbmRsZXJzQXN5bmMocGF0aE1hcHMsIGRvbmUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRU1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XG5cbiAgICBmb3JFYWNoKGV2ZW50TGlzdGVuZXJzLCAoZXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxuICAgICAgICAgIHJlbW92ZUhhbmRsZXIgPSBoYW5kbGVyLCAgLy8vXG4gICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgcmVtb3ZlSGFuZGxlci5jYWxsKGVsZW1lbnQsIHBhdGhNYXBzLCBkb25lKTtcbiAgICB9LCBkb25lKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zaG93T3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLmhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuc2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25SZW1vdmUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICByZW1vdmVIYW5kbGVyID0gb25SZW1vdmU7IC8vL1xuXG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICByZW1vdmVIYW5kbGVyICYmIHRoaXMub25SZW1vdmUocmVtb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uUmVtb3ZlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcmVtb3ZlSGFuZGxlciA9IG9uUmVtb3ZlOyAvLy9cblxuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZ092ZXIodGhpcy5kcmFnT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgcmVtb3ZlSGFuZGxlciAmJiB0aGlzLm9mZlJlbW92ZShyZW1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluU1ZHLCBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpblNWRy8+LFxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5TVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbnVsbDtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoLFxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBPcGVuUnViYmlzaEJpblNWRyA9IE9wZW5SdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyBDbG9zZWRSdWJiaXNoQmluU1ZHID0gQ2xvc2VkUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25SZW1vdmVcIixcbiAgICBcImlnbm9yZWRSZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSdWJiaXNoQmluKWBcbiAgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiUkVNT1ZFX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiUnViYmlzaEJpbiIsImRyb3BIYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJkcmFnRWxlbWVudERyYWdFbnRyeUl0ZW0iLCJEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVySWdub3JlZCIsImlzRXhwbG9yZXJJZ25vcmVkIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGgiLCJwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiYWRkTWFya2VyIiwiZXhwbG9yZXIiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJpZ25vcmVkUmVmZXJlbmNlcyIsImdldElnbm9yZWRSZWZlcmVuY2VzIiwiaWdub3JlZFJlZmVyZW5jZXNJbmNsdWRlc1JlZmVyZW5jZSIsImluY2x1ZGVzIiwiZXhwbG9yZXJJZ25vcmVkIiwicHJvcGVydGllcyIsImdsb2JhbFRoaXMiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwib3BlbiIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsImNsb3NlIiwibmFtZSIsInR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwib25SZW1vdmUiLCJyZW1vdmVIYW5kbGVyIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZSZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJzb3VyY2VFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRHJhZ0VudHJ5SXRlbVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjYWxsUmVtb3ZlSGFuZGxlcnNBc3luYyIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiZW50cnlEaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZXZlbnRMaXN0ZW5lciIsIm5leHQiLCJjYWxsIiwic2hvd09wZW5SdWJiaXNoQmluU1ZHIiwiaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkciLCJoaWRlT3BlblJ1YmJpc2hCaW5TVkciLCJzaG93Q2xvc2VkUnViYmlzaEJpblNWRyIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdmVyIiwiZ2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInNldE1hcmtlckVudHJ5SXRlbVBhdGgiLCJ1cGRhdGVTdGF0ZSIsInNldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRTdGF0ZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThWQTs7O2VBQUE7OztrRUE1VnNCOytCQUVLO29CQUNTO3lCQUNFO3lEQUVaO3lEQUNJOzJEQUNFOzZEQUNJO2tFQUNLO3VCQUVMOzBCQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRSxJQUFNLEFBQUVBLFVBQVlDLGdDQUFxQixDQUFqQ0QsU0FDRixBQUFFRSxvQkFBc0JDLGdCQUFVLENBQWhDRDtBQUVSLElBQUEsQUFBTUUsMkJBdVVILEFBdlVIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNKQywr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