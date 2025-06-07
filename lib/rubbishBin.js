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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function RubbishBin() {
        _class_call_check(this, RubbishBin);
        var _this;
        _this = _call_super(this, RubbishBin, arguments), _define_property(_this, "dragOverCustomHandler", function(event, element, dragElement) {
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem();
            var markerEntryItemPath = markerEntryItem.getPath(), markerEntryItemExplorer = markerEntryItem.getExplorer(), previousMarkerEntryItemPath = markerEntryItemPath, previousMarkerEntryItemExplorer = markerEntryItemExplorer; ///
            markerEntryItemPath = null; ///
            markerEntryItemExplorer = _this; ///
            if (markerEntryItemExplorer !== previousMarkerEntryItemExplorer || markerEntryItemPath !== previousMarkerEntryItemPath) {
                var dragEntryItemType = dragEntryItem.getType();
                previousMarkerEntryItemExplorer.removeMarker();
                markerEntryItemExplorer.addMarker(markerEntryItemPath, dragEntryItemType);
            }
        }), _define_property(_this, "dropCustomHandler", function(event, element, dragElement, aborted, done) {
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
                var markerEntryItem = getMarkerEntryItem();
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
                setMarkerEntryItem(markerEntryItem);
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                resetMarkerEntryItem();
                resetDropElement();
            }
        },
        {
            key: "dropDragEntryItem",
            value: function dropDragEntryItem(event, element, dragEntryItem, done) {
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
                this.removeDragEntryItems(event, element, pathMaps, explorer, done);
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
                    _this.removeMarker();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBydWJiaXNoQmluTWl4aW5zIGZyb20gXCIuL21peGlucy9ydWJiaXNoQmluXCI7XG5pbXBvcnQgT3BlblJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vb3BlblwiO1xuaW1wb3J0IENsb3NlZFJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5pbXBvcnQgZHJhZ0VudHJ5SXRlbU1peGlucyBmcm9tIFwiLi9taXhpbnMvZHJhZ0VudHJ5SXRlbVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyYWdPdmVyQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtRXhwbG9yZXI7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG51bGw7IC8vL1xuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBpZiAoKG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyICE9PSBwcmV2aW91c01hcmtlckVudHJ5SXRlbUV4cGxvcmVyKSB8fCAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoKSkge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbVR5cGUgPSBkcmFnRW50cnlJdGVtLmdldFR5cGUoKTtcblxuICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICBkcm9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJhZ0VsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZHJhZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIgPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKTtcblxuICAgIGlmIChhYm9ydGVkKSB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlci5yZW1vdmVNYXJrZXIoKTtcblxuICAgICAgZG9uZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIuZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gZ2V0TWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICByZXNldE1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgcmVzZXREcm9wRWxlbWVudCgpO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZXZlbnQsIGVsZW1lbnQsIGRyYWdFbnRyeUl0ZW0sIGRvbmUpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtRXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbShkcmFnRW50cnlJdGVtKSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGggPSBudWxsLFxuICAgICAgICAgIHBhdGhNYXBzID0gZHJhZ0VudHJ5SXRlbS5nZXRQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgZXhwbG9yZXIgPSBkcmFnRW50cnlJdGVtRXhwbG9yZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRHJhZ0VudHJ5SXRlbXMoZXZlbnQsIGVsZW1lbnQsIHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSk7XG4gIH1cblxuICByZW1vdmVEcmFnRW50cnlJdGVtcyhldmVudCwgZWxlbWVudCwgcGF0aE1hcHMsIGV4cGxvcmVyLCBkb25lKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUkVNT1ZFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKVxuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbW92ZU1hcmtlcigpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd09wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5oaWRlQ2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlT3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLnNob3dDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25DdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbW92ZUFsbFBhdGhzKCkge1xuICAgIC8vL1xuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSA9IGZhbHNlLCBjb2xsYXBzZWQgPSB0cnVlKSB7XG4gICAgLy8vXG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtUGF0aCgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbVBhdGggfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcihtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlcikge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbCxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGgsXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluU1ZHLCBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpblNWRy8+LFxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5TVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBPcGVuUnViYmlzaEJpblNWRyA9IE9wZW5SdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyBDbG9zZWRSdWJiaXNoQmluU1ZHID0gQ2xvc2VkUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJyZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBydWJiaXNoQmluTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIGRyYWdFbnRyeUl0ZW1NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnViYmlzaEJpbilgXG4gIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiUnViYmlzaEJpbiIsImRyYWdPdmVyQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdFbGVtZW50IiwiZHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1QYXRoIiwicHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImRyYWdFbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInJlbW92ZU1hcmtlciIsImFkZE1hcmtlciIsImRyb3BDdXN0b21IYW5kbGVyIiwiYWJvcnRlZCIsImRvbmUiLCJkcm9wRHJhZ0VudHJ5SXRlbSIsImdldFJlZmVyZW5jZSIsInByb3BlcnRpZXMiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldE1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJvcGVuIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiY2xvc2UiLCJuYW1lIiwidHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJleHBsb3JlciIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInNldE1hcmtlckVudHJ5SXRlbSIsInJlc2V0TWFya2VyRW50cnlJdGVtIiwicmVzZXREcm9wRWxlbWVudCIsImRyYWdFbnRyeUl0ZW1FeHBsb3JlciIsInNvdXJjZUVudHJ5UGF0aCIsInNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0iLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsImdldFBhdGhNYXBzIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbXMiLCJjdXN0b21FdmVudFR5cGUiLCJSRU1PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyIsImZvckVhY2giLCJwYXRoTWFwIiwicmVtb3ZlRHJhZ0VudHJ5SXRlbSIsImFkZERyYWdFbnRyeUl0ZW0iLCJzaG93T3BlblJ1YmJpc2hCaW5TVkciLCJoaWRlQ2xvc2VkUnViYmlzaEJpblNWRyIsImhpZGVPcGVuUnViYmlzaEJpblNWRyIsInNob3dDbG9zZWRSdWJiaXNoQmluU1ZHIiwiZGlkTW91bnQiLCJlbmFibGVEcm9wIiwib25DdXN0b21Ecm9wIiwib25DdXN0b21EcmFnT3ZlciIsIndpbGxVbm1vdW50IiwiZGlzYWJsZURyb3AiLCJvZmZDdXN0b21Ecm9wIiwib2ZmQ3VzdG9tRHJhZ092ZXIiLCJhZGRGaWxlUGF0aCIsImZpbGVQYXRoIiwicmVhZE9ubHkiLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMiLCJyZW1vdmVBbGxQYXRocyIsImFkZERpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiY29sbGFwc2VkIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImdldE1hcmtlckVudHJ5SXRlbVBhdGgiLCJnZXRTdGF0ZSIsImdldE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwic2V0TWFya2VyRW50cnlJdGVtUGF0aCIsInVwZGF0ZVN0YXRlIiwic2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJPcGVuUnViYmlzaEJpblNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5TVkciLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyb3BNaXhpbnMiLCJydWJiaXNoQmluTWl4aW5zIiwiZHJhZ0VudHJ5SXRlbU1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdVJBOzs7ZUFBQTs7O29FQXJSc0I7b0JBRUU7K0JBQ0c7aUVBRUU7MkRBQ0M7NkRBQ0U7b0VBQ0E7K0RBQ0k7b0VBQ0s7Z0NBRUE7dUJBQ0k7MEJBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsMkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsd0JBQ0pDLHdCQUFBQSx5QkFBd0IsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDdkMsSUFBTUMsZ0JBQWdCRCxhQUNoQkUsa0JBQWtCLE1BQUtDLHVCQUF1QjtZQUVwRCxJQUFJQyxzQkFBc0JGLGdCQUFnQkcsT0FBTyxJQUMzQ0MsMEJBQTBCSixnQkFBZ0JLLFdBQVcsSUFDckRDLDhCQUE4QkoscUJBQzlCSyxrQ0FBa0NILHlCQUF5QixHQUFHO1lBRXBFRixzQkFBc0IsTUFBTSxHQUFHO1lBRS9CRSxpQ0FBaUMsR0FBRztZQUVwQyxJQUFJLEFBQUNBLDRCQUE0QkcsbUNBQXFDTCx3QkFBd0JJLDZCQUE4QjtnQkFDMUgsSUFBTUUsb0JBQW9CVCxjQUFjVSxPQUFPO2dCQUUvQ0YsZ0NBQWdDRyxZQUFZO2dCQUU1Q04sd0JBQXdCTyxTQUFTLENBQUNULHFCQUFxQk07WUFDekQ7UUFDRixJQUVBSSx3QkFBQUEscUJBQW9CLFNBQUNoQixPQUFPQyxTQUFTQyxhQUFhZSxTQUFTQztZQUN6RCxJQUFNZixnQkFBZ0JELGFBQ2hCRSxrQkFBa0IsTUFBS0MsdUJBQXVCLElBQzlDRywwQkFBMEJKLGdCQUFnQkssV0FBVztZQUUzRCxJQUFJUSxT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