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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easydraganddrop = require("easy-drag-and-drop");
var _rubbishBin = /*#__PURE__*/ _interop_require_default(require("./mixins/rubbishBin"));
var _open = /*#__PURE__*/ _interop_require_default(require("./svg/rubbishBin/open"));
var _closed = /*#__PURE__*/ _interop_require_default(require("./svg/rubbishBin/closed"));
var _dragEntryItem = /*#__PURE__*/ _interop_require_default(require("./mixins/dragEntryItem"));
var _fileName = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/fileName"));
var _directoryName = /*#__PURE__*/ _interop_require_default(require("./item/entry/marker/directoryName"));
var _customEventTypes = require("./customEventTypes");
var _pathMap = require("./utilities/pathMap");
var _entryTypes = require("./entryTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  \n  display: inline-block;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RubbishBin = /*#__PURE__*/ function(Element) {
    _inherits(RubbishBin, Element);
    var _super = _create_super(RubbishBin);
    function RubbishBin() {
        _class_call_check(this, RubbishBin);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "dragOverCustomHandler", function(event, element, dragElement) {
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = null; ///
            markerEntryItemExplorer = _assert_this_initialized(_this); ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        });
        _define_property(_assert_this_initialized(_this), "dropCustomHandler", function(event, element, dragElement, aborted, done) {
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            markerEntryItemExplorer.dropDragEntryItem(event, element, dragEntryItem, done);
        });
        return _this;
    }
    _create_class(RubbishBin, [
        {
            key: "getReference",
            value: function getReference() {
                var _this_properties = this.properties, _this_properties_reference = _this_properties.reference, reference = _this_properties_reference === void 0 ? null : _this_properties_reference;
                return reference;
            }
        },
        {
            key: "getReferences",
            value: function getReferences() {
                var _this_properties = this.properties, _this_properties_references = _this_properties.references, references = _this_properties_references === void 0 ? [] : _this_properties_references;
                return references;
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
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(event, element, dragEntryItem, done) {
                var _this = this;
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(event, element, pathMaps, explorer, function() {
                    _this.removeMarker();
                    done();
                });
            }
        },
        {
            key: "removeDragEntryItems",
            value: function removeDragEntryItems(event, element, pathMaps, explorer, done) {
                var _this = this;
                var customEventType = _customEventTypes.REMOVE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, event, element, pathMaps, explorer, function() {
                    pathMaps.forEach(function(pathMap) {
                        _this.removeDragEntryItem(pathMap, explorer);
                    });
                    pathMaps.forEach(function(pathMap) {
                        _this.addDragEntryItem(pathMap, explorer);
                    });
                    done();
                });
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
                this.enableDrop();
                this.onCustomDrop(this.dropCustomHandler);
                this.onCustomDragOver(this.dragOverCustomHandler);
                this.close();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrop();
                this.offCustomDrop(this.dropCustomHandler);
                this.offCustomDragOver(this.dragOverCustomHandler);
            }
        },
        {
            key: "addFilePath",
            value: function addFilePath(filePath) {
                var readOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            ///
            }
        },
        {
            key: "removeFilePath",
            value: function removeFilePath(filePath) {
                var removeEmptyParentDirectories = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            ///
            }
        },
        {
            key: "removeAllPaths",
            value: function removeAllPaths() {
            ///
            }
        },
        {
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath) {
                var readOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, collapsed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
            ///
            }
        },
        {
            key: "removeDirectoryPath",
            value: function removeDirectoryPath(directoryPath) {
                var removeEmptyParentDirectories = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            ///
            }
        },
        {
            key: "getMarkerEntryItemPath",
            value: function getMarkerEntryItemPath() {
                var markerEntryItemPath = this.getState().markerEntryItemPath;
                return markerEntryItemPath;
            }
        },
        {
            key: "getMarkerEntryItemExplorer",
            value: function getMarkerEntryItemExplorer() {
                var markerEntryItemExplorer = this.getState().markerEntryItemExplorer;
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
            key: "setInitialState",
            value: function setInitialState() {
                var markerEntryItemPath = null, markerEntryItemExplorer = null;
                this.setState({
                    markerEntryItemPath: markerEntryItemPath,
                    markerEntryItemExplorer: markerEntryItemExplorer
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this_constructor = this.constructor, _$OpenRubbishBinSVG = _this_constructor.OpenRubbishBinSVG, _$ClosedRubbishBinSVG = _this_constructor.ClosedRubbishBinSVG;
                return [
                    /*#__PURE__*/ React.createElement(_$OpenRubbishBinSVG, null),
                    /*#__PURE__*/ React.createElement(_$ClosedRubbishBinSVG, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return RubbishBin;
}(_wrap_native_super(_easy.Element));
_define_property(RubbishBin, "OpenRubbishBinSVG", _open.default);
_define_property(RubbishBin, "ClosedRubbishBinSVG", _closed.default);
_define_property(RubbishBin, "tagName", "div");
_define_property(RubbishBin, "ignoredProperties", [
    "reference",
    "references"
]);
_define_property(RubbishBin, "defaultProperties", {
    className: "rubbish-bin"
});
Object.assign(RubbishBin.prototype, _easydraganddrop.dropMixins);
Object.assign(RubbishBin.prototype, _rubbishBin.default);
Object.assign(RubbishBin.prototype, _dragEntryItem.default);
var _default = (0, _easywithstyle.default)(RubbishBin)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBydWJiaXNoQmluTWl4aW5zIGZyb20gXCIuL21peGlucy9ydWJiaXNoQmluXCI7XG5pbXBvcnQgT3BlblJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vb3BlblwiO1xuaW1wb3J0IENsb3NlZFJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5pbXBvcnQgZHJhZ0VudHJ5SXRlbU1peGlucyBmcm9tIFwiLi9taXhpbnMvZHJhZ0VudHJ5SXRlbVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyYWdPdmVyQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGw7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBkcm9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCAoKSA9PiB7XG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcilcbiAgICAgIH0pO1xuXG4gICAgICBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNob3dPcGVuUnViYmlzaEJpblNWRygpO1xuICAgIHRoaXMuaGlkZUNsb3NlZFJ1YmJpc2hCaW5TVkcoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZU9wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5zaG93Q2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21EcmFnT3Zlcih0aGlzLmRyYWdPdmVyQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyb3AodGhpcy5kcm9wQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEZpbGVQYXRoKGZpbGVQYXRoLCByZWFkT25seSA9IGZhbHNlKSB7XG4gICAgLy8vXG4gIH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgLy8vXG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHkgPSBmYWxzZSwgY29sbGFwc2VkID0gdHJ1ZSkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbVBhdGgoKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW1QYXRoIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIGdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcjtcbiAgfVxuXG4gIHNldE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIobWFya2VyRW50cnlJdGVtRXhwbG9yZXIpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGwsXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoLFxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBPcGVuUnViYmlzaEJpblNWRywgQ2xvc2VkUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8T3BlblJ1YmJpc2hCaW5TVkcvPixcbiAgICAgIDxDbG9zZWRSdWJiaXNoQmluU1ZHLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgT3BlblJ1YmJpc2hCaW5TVkcgPSBPcGVuUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgQ2xvc2VkUnViYmlzaEJpblNWRyA9IENsb3NlZFJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlZmVyZW5jZVwiLFxuICAgIFwicmVmZXJlbmNlc1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWJiaXNoLWJpblwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgcnViYmlzaEJpbk1peGlucyk7XG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBkcmFnRW50cnlJdGVtTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1YmJpc2hCaW4pYFxuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbIlJ1YmJpc2hCaW4iLCJkcmFnT3ZlckN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcmFnRWxlbWVudCIsImRyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwibWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiLCJkcm9wQ3VzdG9tSGFuZGxlciIsImFib3J0ZWQiLCJkb25lIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnbG9iYWxUaGlzIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsIm9wZW4iLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJjbG9zZSIsIm5hbWUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImV4cGxvcmVyIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXBzIiwiZ2V0UGF0aE1hcHMiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsImN1c3RvbUV2ZW50VHlwZSIsIlJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVyc0FzeW5jIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsInNob3dPcGVuUnViYmlzaEJpblNWRyIsImhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaGlkZU9wZW5SdWJiaXNoQmluU1ZHIiwic2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkciLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkN1c3RvbURyb3AiLCJvbkN1c3RvbURyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkN1c3RvbURyb3AiLCJvZmZDdXN0b21EcmFnT3ZlciIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJyZWFkT25seSIsInJlbW92ZUZpbGVQYXRoIiwicmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyIsInJlbW92ZUFsbFBhdGhzIiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZ2V0TWFya2VyRW50cnlJdGVtUGF0aCIsImdldFN0YXRlIiwiZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwidXBkYXRlU3RhdGUiLCJzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwicnViYmlzaEJpbk1peGlucyIsImRyYWdFbnRyeUl0ZW1NaXhpbnMiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlJBOzs7ZUFBQTs7O29FQTNSc0I7b0JBRUU7K0JBQ0c7aUVBRUU7MkRBQ0M7NkRBQ0U7b0VBQ0E7K0RBQ0k7b0VBQ0s7Z0NBRUE7dUJBQ0k7MEJBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFB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