"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _necessary = require("necessary");
var _open = _interopRequireDefault(require("./div/rubbishBin/open"));
var _closed = _interopRequireDefault(require("./div/rubbishBin/closed"));
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
            key: "getIgnoredReferences",
            value: function getIgnoredReferences() {
                var _properties = this.properties, _ignoredReferences = _properties.ignoredReferences, ignoredReferences = _ignoredReferences === void 0 ? [] : _ignoredReferences;
                return ignoredReferences;
            }
        },
        {
            key: "getOpenRubbishBinDiv",
            value: function getOpenRubbishBinDiv() {
                var _constructor = this.constructor, OpenRubbishBinDiv = _constructor.OpenRubbishBinDiv;
                return OpenRubbishBinDiv;
            }
        },
        {
            key: "getClosedRubbishBinDiv",
            value: function getClosedRubbishBinDiv() {
                var _constructor = this.constructor, ClosedRubbishBinDiv = _constructor.ClosedRubbishBinDiv;
                return ClosedRubbishBinDiv;
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
            key: "openRubbishBin",
            value: function openRubbishBin() {
                this.showOpenRubbishBinDiv();
                this.hideClosedRubbishBinDiv();
            }
        },
        {
            key: "closeRubbishBin",
            value: function closeRubbishBin() {
                this.hideOpenRubbishBinDiv();
                this.showClosedRubbishBinDiv();
            }
        },
        {
            key: "removeDragEntryItem",
            value: function removeDragEntryItem(pathMap, explorer) {
                var directory = pathMap.directory;
                directory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(pathMaps, explorer) {
                this.callRemoveHandlers(pathMaps, (function() {
                    pathMaps.forEach((function(pathMap) {
                        return this.removeDragEntryItem(pathMap, explorer);
                    }).bind(this));
                }).bind(this));
            }
        },
        {
            key: "removeFileNameDragEntryItem",
            value: function removeFileNameDragEntryItem(pathMap, explorer) {
                var sourcePath = pathMap.sourcePath, targetPath = pathMap.targetPath;
                explorer.removeFilePath(sourcePath);
                if (targetPath !== null) {
                    explorer.addFilePath(targetPath);
                }
            }
        },
        {
            key: "removeDirectoryNameDragEntryItem",
            value: function removeDirectoryNameDragEntryItem(pathMap, explorer) {
                var sourcePath = pathMap.sourcePath, targetPath = pathMap.targetPath;
                explorer.removeDirectoryPath(sourcePath);
                if (targetPath !== null) {
                    var collapsed = pathMap.collapsed;
                    explorer.addDirectoryPath(targetPath, collapsed);
                }
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
            value: function dropHandler(dragElement, element) {
                var dragEntryItem = dragElement; ///
                this.dropDragEntryItem(dragEntryItem);
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(dragEntryItem) {
                var dragEntryItemPath = dragEntryItem.getPath(), dragEntryItemExplorer = dragEntryItem.getExplorer(), dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath), sourcePath = (0, _pathMap).nonNullPathFromName(dragEntryItemPathWithoutBottommostName), targetPath = null, pathMaps = dragEntryItem.getPathMaps(sourcePath, targetPath), explorer = dragEntryItemExplorer; ///
                this.closeRubbishBin();
                this.removeDragEntryItems(pathMaps, explorer);
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement, element) {
                var explorer = this, dragEntryItem = dragElement, dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);
                if (dragEntryItemIgnored) {
                    return;
                }
                var dragEntryItemType = dragEntryItem.getType(), markerEntryItemPath = this.getMarkerEntryItemPath(), markerEntryItemExplorer = this.getMarkerEntryItemExplorer();
                this.closeRubbishBin();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement, element) {
                var explorer = this, dragEntryItem = dragElement, dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);
                if (dragEntryItemIgnored) {
                    return;
                }
                var markerEntryItem = this.retrieveMarkerEntryItem(), markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer();
                this.openRubbishBin();
                this.setMarkerEntryItemPath(markerEntryItemPath);
                this.setMarkerEntryItemExplorer(markerEntryItemExplorer);
                markerEntryItemExplorer.removeMarker();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, onRemove = _properties.onRemove, removeHandler = onRemove; ///
                this.enableDrop();
                this.onDrop(this.dropHandler, this);
                this.onDragOut(this.dragOutHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                removeHandler && this.onRemove(removeHandler);
                this.closeRubbishBin();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onRemove = _properties.onRemove, removeHandler = onRemove; ///
                this.disableDrop();
                this.offDrop(this.dropHandler, this);
                this.offDragOut(this.dragOutHandler, this);
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
                var OpenRubbishBinDiv = this.getOpenRubbishBinDiv(), ClosedRubbishBinDiv = this.getClosedRubbishBinDiv();
                return [
                    /*#__PURE__*/ React.createElement(OpenRubbishBinDiv, null),
                    /*#__PURE__*/ React.createElement(ClosedRubbishBinDiv, null)
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
_defineProperty(RubbishBin, "OpenRubbishBinDiv", _open.default);
_defineProperty(RubbishBin, "ClosedRubbishBinDiv", _closed.default);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkVsZW1lbnQiLCJkcm9wTWl4aW5zIiwicGF0aFV0aWxpdGllcyIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIk9wZW5SdWJiaXNoQmluRGl2IiwiQ2xvc2VkUnViYmlzaEJpbkRpdiIsIlJFTU9WRV9FVkVOVF9UWVBFIiwibm9uTnVsbFBhdGhGcm9tTmFtZSIsImZvckVhY2giLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJSdWJiaXNoQmluIiwiZ2V0SWdub3JlZFJlZmVyZW5jZXMiLCJpZ25vcmVkUmVmZXJlbmNlcyIsInByb3BlcnRpZXMiLCJnZXRPcGVuUnViYmlzaEJpbkRpdiIsImNvbnN0cnVjdG9yIiwiZ2V0Q2xvc2VkUnViYmlzaEJpbkRpdiIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwiZ2xvYmFsVGhpcyIsIm9wZW5SdWJiaXNoQmluIiwic2hvd09wZW5SdWJiaXNoQmluRGl2IiwiaGlkZUNsb3NlZFJ1YmJpc2hCaW5EaXYiLCJjbG9zZVJ1YmJpc2hCaW4iLCJoaWRlT3BlblJ1YmJpc2hCaW5EaXYiLCJzaG93Q2xvc2VkUnViYmlzaEJpbkRpdiIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJwYXRoTWFwIiwiZXhwbG9yZXIiLCJkaXJlY3RvcnkiLCJyZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZURyYWdFbnRyeUl0ZW1zIiwicGF0aE1hcHMiLCJjYWxsUmVtb3ZlSGFuZGxlcnMiLCJzb3VyY2VQYXRoIiwidGFyZ2V0UGF0aCIsInJlbW92ZUZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwiYWRkRGlyZWN0b3J5UGF0aCIsImRvbmUiLCJldmVudFR5cGUiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImV2ZW50TGlzdGVuZXIiLCJuZXh0IiwiaGFuZGxlciIsImVsZW1lbnQiLCJyZW1vdmVIYW5kbGVyIiwiY2FsbCIsIm9uUmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZlJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcm9wSGFuZGxlciIsImRyYWdFbGVtZW50IiwiZHJhZ0VudHJ5SXRlbSIsImRyb3BEcmFnRW50cnlJdGVtIiwiZHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsImdldFBhdGhNYXBzIiwiZHJhZ091dEhhbmRsZXIiLCJkcmFnRW50cnlJdGVtSWdub3JlZCIsImlzSWdub3JlZCIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImFkZE1hcmtlciIsImRyYWdPdmVySGFuZGxlciIsInNldE1hcmtlckVudHJ5SXRlbVBhdGgiLCJzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInJlbW92ZU1hcmtlciIsImRpZE1vdW50IiwiZW5hYmxlRHJvcCIsIm9uRHJvcCIsIm9uRHJhZ091dCIsIm9uRHJhZ092ZXIiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVEcm9wIiwib2ZmRHJvcCIsIm9mZkRyYWdPdXQiLCJvZmZEcmFnT3ZlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldFN0YXRlIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNILEdBQW9CLENBQXBCLGdCQUFvQjtBQUNNLEdBQVcsQ0FBWCxVQUFXO0FBRWxDLEdBQXVCLENBQXZCLEtBQXVCO0FBQ3JCLEdBQXlCLENBQXpCLE9BQXlCO0FBRXZCLEdBQWMsQ0FBZCxXQUFjO0FBQ1osR0FBcUIsQ0FBckIsUUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBdVFwQix3Q0FJckM7Ozs7Ozs7QUF6UUEsR0FBSyxDQUFHLE9BQU8sR0FSc0MsVUFBVyx1QkFReEQsT0FBTyxFQUNQLGlDQUFpQyxHQVRZLFVBQVcsZUFTeEQsaUNBQWlDO0lBRW5DLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRixVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVO2dFQUFWLFVBQVU7O2lCQUFWLFVBQVU7O1lBQ2QsR0FBb0IsR0FBcEIsb0JBQW9CO21CQUFwQixRQUFRLENBQVIsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsR0FBSyxDQUE4QixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsdUJBQWYsV0FBZSxDQUExQyxpQkFBaUIsRUFBakIsaUJBQWlCLG1DQUFHLENBQUMsQ0FBQztnQkFFOUIsTUFBTSxDQUFDLGlCQUFpQjtZQUMxQixDQUFDOzs7WUFFRCxHQUFvQixHQUFwQixvQkFBb0I7bUJBQXBCLFFBQVEsQ0FBUixvQkFBb0IsR0FBRyxDQUFDO2dCQUN0QixHQUFLLENBQXlCLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQXRDLGlCQUFpQixHQUFLLFlBQWdCLENBQXRDLGlCQUFpQjtnQkFFekIsTUFBTSxDQUFDLGlCQUFpQjtZQUMxQixDQUFDOzs7WUFFRCxHQUFzQixHQUF0QixzQkFBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsR0FBRyxDQUFDO2dCQUN4QixHQUFLLENBQTJCLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQXhDLG1CQUFtQixHQUFLLFlBQWdCLENBQXhDLG1CQUFtQjtnQkFFM0IsTUFBTSxDQUFDLG1CQUFtQjtZQUM1QixDQUFDOzs7WUFFRCxHQUF1QixHQUF2Qix1QkFBdUI7bUJBQXZCLFFBQVEsQ0FBUix1QkFBdUIsR0FBRyxDQUFDO2dCQUN6QixHQUFLLENBQUcsZUFBZSxHQUFLLFVBQVUsQ0FBOUIsZUFBZTtnQkFFdkIsTUFBTSxDQUFDLGVBQWU7WUFDeEIsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMscUJBQXFCO2dCQUMxQixJQUFJLENBQUMsdUJBQXVCO1lBQzlCLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLHFCQUFxQjtnQkFDMUIsSUFBSSxDQUFDLHVCQUF1QjtZQUM5QixDQUFDOzs7WUFFRCxHQUFtQixHQUFuQixtQkFBbUI7bUJBQW5CLFFBQVEsQ0FBUixtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3RDLEdBQUssQ0FBRyxTQUFTLEdBQUssT0FBTyxDQUFyQixTQUFTO2dCQUVqQixTQUFTLEdBQ1AsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLE9BQU8sRUFBRSxRQUFRLElBQ3JELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLEVBQUUsUUFBUTtZQUN4RCxDQUFDOzs7WUFFRCxHQUFvQixHQUFwQixvQkFBb0I7bUJBQXBCLFFBQVEsQ0FBUixvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUUsUUFDdEMsR0FENEMsQ0FBQztvQkFDdkMsUUFBUSxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQVAsT0FBTzt3QkFBSyxNQUFNLENBQU4sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxRQUFROztnQkFDMUUsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQTJCLEdBQTNCLDJCQUEyQjttQkFBM0IsUUFBUSxDQUFSLDJCQUEyQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDOUMsR0FBSyxDQUFHLFVBQVUsR0FBaUIsT0FBTyxDQUFsQyxVQUFVLEVBQUUsVUFBVSxHQUFLLE9BQU8sQ0FBdEIsVUFBVTtnQkFFOUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVO2dCQUVsQyxFQUFFLEVBQUUsVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUN4QixRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQ2pDLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFnQyxHQUFoQyxnQ0FBZ0M7bUJBQWhDLFFBQVEsQ0FBUixnQ0FBZ0MsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ25ELEdBQUssQ0FBRyxVQUFVLEdBQWlCLE9BQU8sQ0FBbEMsVUFBVSxFQUFFLFVBQVUsR0FBSyxPQUFPLENBQXRCLFVBQVU7Z0JBRTlCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVO2dCQUV2QyxFQUFFLEVBQUUsVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUN4QixHQUFLLENBQUcsU0FBUyxHQUFLLE9BQU8sQ0FBckIsU0FBUztvQkFFakIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxTQUFTO2dCQUNqRCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNsQyxHQUFLLENBQUMsU0FBUyxHQTlFZSxXQUFjLG9CQStFdEMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTO2dCQUV4RCxPQUFPLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBUCxhQUFhLEVBQUUsSUFBSSxFQUFLLENBQUM7b0JBQ2hELEdBQUssQ0FBRyxPQUFPLEdBQWMsYUFBYSxDQUFsQyxPQUFPLEVBQUUsT0FBTyxHQUFLLGFBQWEsQ0FBekIsT0FBTyxFQUNsQixhQUFhLEdBQUcsT0FBTyxFQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7Z0JBQzVDLENBQUMsRUFBRSxJQUFJO1lBQ1QsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUM7Z0JBQ2hDLEdBQUssQ0FBQyxTQUFTLEdBM0ZlLFdBQWMsb0JBNEZ0QyxPQUFPLEdBQUcsYUFBYSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTztZQUNuRCxDQUFDOzs7WUFFRCxHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDakMsR0FBSyxDQUFDLFNBQVMsR0FsR2UsV0FBYyxvQkFtR3RDLE9BQU8sR0FBRyxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPO1lBQ3RELENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXRDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQ3RDLENBQUM7OztZQUVELEdBQWlCLEdBQWpCLGlCQUFpQjttQkFBakIsUUFBUSxDQUFSLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNoQyxHQUFLLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLE9BQU8sSUFDekMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLFdBQVcsSUFDakQsc0NBQXNDLEdBQUcsaUNBQWlDLENBQUMsaUJBQWlCLEdBQzVGLFVBQVUsT0FqSGdCLFFBQXFCLHNCQWlIZCxzQ0FBc0MsR0FDdkUsVUFBVSxHQUFHLElBQUksRUFDakIsUUFBUSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FDM0QsUUFBUSxHQUFHLHFCQUFxQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFNUMsSUFBSSxDQUFDLGVBQWU7Z0JBRXBCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsUUFBUTtZQUM5QyxDQUFDOzs7WUFFRCxHQUFjLEdBQWQsY0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDcEMsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQ2YsYUFBYSxHQUFHLFdBQVcsRUFDM0Isb0JBQW9CLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUU3RCxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixDQUFDO2dCQUVELEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsT0FBTyxJQUN6QyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLElBQ2pELHVCQUF1QixHQUFHLElBQUksQ0FBQywwQkFBMEI7Z0JBRS9ELElBQUksQ0FBQyxlQUFlO2dCQUVwQix1QkFBdUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCO1lBQzFFLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUNyQyxHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksRUFDZixhQUFhLEdBQUcsV0FBVyxFQUMzQixvQkFBb0IsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVE7Z0JBRTdELEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO29CQUN6QixNQUFNO2dCQUNSLENBQUM7Z0JBRUQsR0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLElBQzlDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxPQUFPLElBQzdDLHVCQUF1QixHQUFHLGVBQWUsQ0FBQyxXQUFXO2dCQUUzRCxJQUFJLENBQUMsY0FBYztnQkFFbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQjtnQkFFL0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLHVCQUF1QjtnQkFFdkQsdUJBQXVCLENBQUMsWUFBWTtZQUN0QyxDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFnQixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBNUIsUUFBUSxHQUFLLFdBQWUsQ0FBNUIsUUFBUSxFQUNWLGFBQWEsR0FBRyxRQUFRLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuQyxJQUFJLENBQUMsVUFBVTtnQkFFZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSTtnQkFFbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUk7Z0JBRXhDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJO2dCQUUxQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhO2dCQUU1QyxJQUFJLENBQUMsZUFBZTtZQUN0QixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFnQixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBNUIsUUFBUSxHQUFLLFdBQWUsQ0FBNUIsUUFBUSxFQUNWLGFBQWEsR0FBRyxRQUFRLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuQyxJQUFJLENBQUMsV0FBVztnQkFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUk7Z0JBRW5DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJO2dCQUV6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSTtnQkFFM0MsYUFBYSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYTtZQUMvQyxDQUFDOzs7WUFFRCxHQUFzQixHQUF0QixzQkFBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsR0FBRyxDQUFDO2dCQUN4QixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQ25CLG1CQUFtQixHQUFLLEtBQUssQ0FBN0IsbUJBQW1CO2dCQUUzQixNQUFNLENBQUMsbUJBQW1CO1lBQzVCLENBQUM7OztZQUVELEdBQTBCLEdBQTFCLDBCQUEwQjttQkFBMUIsUUFBUSxDQUFSLDBCQUEwQixHQUFHLENBQUM7Z0JBQzVCLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFDbkIsdUJBQXVCLEdBQUssS0FBSyxDQUFqQyx1QkFBdUI7Z0JBRS9CLE1BQU0sQ0FBQyx1QkFBdUI7WUFDaEMsQ0FBQzs7O1lBRUQsR0FBc0IsR0FBdEIsc0JBQXNCO21CQUF0QixRQUFRLENBQVIsc0JBQXNCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNoQixtQkFBbUIsRUFBbkIsbUJBQW1CO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBMEIsR0FBMUIsMEJBQTBCO21CQUExQixRQUFRLENBQVIsMEJBQTBCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNoQix1QkFBdUIsRUFBdkIsdUJBQXVCO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLElBQzdDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0I7Z0JBRXZELE1BQU0sQ0FBRSxDQUFDO3NEQUVOLGlCQUFpQjtzREFDakIsbUJBQW1CO2dCQUV0QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLEdBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEVBQzFCLHVCQUF1QixHQUFHLElBQUk7Z0JBRXBDLElBQUksQ0FBQyxhQUFhO2dCQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2IsbUJBQW1CLEVBQW5CLG1CQUFtQjtvQkFDbkIsdUJBQXVCLEVBQXZCLHVCQUF1QjtnQkFDekIsQ0FBQztZQUNILENBQUM7OztXQTlPRyxVQUFVO21CQWJRLEtBQU07Z0JBYXhCLFVBQVUsR0FnUFAsaUJBQWlCLEdBelBJLEtBQXVCO2dCQVMvQyxVQUFVLEdBa1BQLG1CQUFtQixHQTFQSSxPQUF5QjtnQkFRbkQsVUFBVSxHQW9QUCxPQUFPLElBQUcsR0FBSztnQkFwUGxCLFVBQVUsR0FzUFAsaUJBQWlCLEdBQUcsQ0FBQztLQUMxQixRQUFVO0tBQ1YsaUJBQW1CO0FBQ3JCLENBQUM7Z0JBelBHLFVBQVUsR0EyUFAsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsV0FBYTtBQUMxQixDQUFDO0FBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQTVRUCxnQkFBb0I7bUJBSHpCLGNBQWlCLFVBaVJkLFVBQVUifQ==