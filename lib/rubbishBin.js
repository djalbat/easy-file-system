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
        _define_property(_assert_this_initialized(_this), "dropCustomHandler", function(dragElement, aborted, element, done) {
            var dragEntryItem = dragElement, markerEntryItem = _this.retrieveMarkerEntryItem(), markerEntryItemExplorer = markerEntryItem.getExplorer();
            if (aborted) {
                markerEntryItemExplorer.removeMarker();
                done();
                return;
            }
            markerEntryItemExplorer.dropDragEntryItem(dragEntryItem, done);
        });
        _define_property(_assert_this_initialized(_this), "dragOverCustomHandler", function(dragElement, element) {
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
            value: function dropDragEntryItem(dragEntryItem, done) {
                var _this = this;
                var dragEntryItemExplorer = dragEntryItem.getExplorer(), sourceEntryPath = (0, _pathMap.sourceEntryPathFromEntryItem)(dragEntryItem), targetEntryPath = null, pathMaps = dragEntryItem.getPathMaps(sourceEntryPath, targetEntryPath), explorer = dragEntryItemExplorer; ///
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
                var customEventType = _customEventTypes.REMOVE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlersAsync(customEventType, pathMaps, explorer, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGRyb3BNaXhpbnMgfSBmcm9tIFwiZWFzeS1kcmFnLWFuZC1kcm9wXCI7XG5cbmltcG9ydCBydWJiaXNoQmluTWl4aW5zIGZyb20gXCIuL21peGlucy9ydWJiaXNoQmluXCI7XG5pbXBvcnQgT3BlblJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vb3BlblwiO1xuaW1wb3J0IENsb3NlZFJ1YmJpc2hCaW5TVkcgZnJvbSBcIi4vc3ZnL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5pbXBvcnQgZHJhZ0VudHJ5SXRlbU1peGlucyBmcm9tIFwiLi9taXhpbnMvZHJhZ0VudHJ5SXRlbVwiO1xuaW1wb3J0IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIGZyb20gXCIuL2l0ZW0vZW50cnkvbWFya2VyL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L21hcmtlci9kaXJlY3RvcnlOYW1lXCI7XG5cbmltcG9ydCB7IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNvdXJjZUVudHJ5UGF0aEZyb21FbnRyeUl0ZW0gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aE1hcFwiO1xuaW1wb3J0IHsgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIH0gZnJvbSBcIi4vZW50cnlUeXBlc1wiO1xuXG5jbGFzcyBSdWJiaXNoQmluIGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3BDdXN0b21IYW5kbGVyID0gKGRyYWdFbGVtZW50LCBhYm9ydGVkLCBlbGVtZW50LCBkb25lKSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gbWFya2VyRW50cnlJdGVtLmdldEV4cGxvcmVyKCk7XG5cbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmRyb3BEcmFnRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0sIGRvbmUpO1xuICB9XG5cbiAgZHJhZ092ZXJDdXN0b21IYW5kbGVyID0gKGRyYWdFbGVtZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRyYWdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbS5nZXRFeHBsb3JlcigpLFxuICAgICAgICBwcmV2aW91c01hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoLCAvLy9cbiAgICAgICAgcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsOyAvLy9cblxuICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyID0gdGhpczsgIC8vL1xuXG4gICAgaWYgKChtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciAhPT0gcHJldmlvdXNNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcikgfHwgKG1hcmtlckVudHJ5SXRlbVBhdGggIT09IHByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1UeXBlID0gZHJhZ0VudHJ5SXRlbS5nZXRUeXBlKCk7XG5cbiAgICAgIHByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlID0gbnVsbCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VzID0gW10gfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcblxuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgZHJvcERyYWdFbnRyeUl0ZW0oZHJhZ0VudHJ5SXRlbSwgZG9uZSkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FeHBsb3JlciA9IGRyYWdFbnRyeUl0ZW0uZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGRyYWdFbnRyeUl0ZW0pLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGwsXG4gICAgICAgICAgcGF0aE1hcHMgPSBkcmFnRW50cnlJdGVtLmdldFBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcbiAgICAgICAgICBleHBsb3JlciA9IGRyYWdFbnRyeUl0ZW1FeHBsb3JlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtcyhwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURyYWdFbnRyeUl0ZW1zKHBhdGhNYXBzLCBleHBsb3JlciwgZG9uZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCBwYXRoTWFwcywgZXhwbG9yZXIsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKVxuICAgICAgfSk7XG5cbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgICAgdGhpcy5hZGREcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd09wZW5SdWJiaXNoQmluU1ZHKCk7XG4gICAgdGhpcy5oaWRlQ2xvc2VkUnViYmlzaEJpblNWRygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlT3BlblJ1YmJpc2hCaW5TVkcoKTtcbiAgICB0aGlzLnNob3dDbG9zZWRSdWJiaXNoQmluU1ZHKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyb3AoKTtcblxuICAgIHRoaXMub25DdXN0b21Ecm9wKHRoaXMuZHJvcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdPdmVyKHRoaXMuZHJhZ092ZXJDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZURyb3AoKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJvcCh0aGlzLmRyb3BDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ092ZXIodGhpcy5kcmFnT3ZlckN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbW92ZUFsbFBhdGhzKCkge1xuICAgIC8vL1xuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSA9IGZhbHNlLCBjb2xsYXBzZWQgPSB0cnVlKSB7XG4gICAgLy8vXG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtUGF0aCgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbVBhdGggfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIoKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbUV4cGxvcmVyO1xuICB9XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlcihtYXJrZXJFbnRyeUl0ZW1FeHBsb3Jlcikge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2VyRW50cnlJdGVtRXhwbG9yZXJcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbCxcbiAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGgsXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlclxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE9wZW5SdWJiaXNoQmluU1ZHLCBDbG9zZWRSdWJiaXNoQmluU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpblNWRy8+LFxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5TVkcvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBPcGVuUnViYmlzaEJpblNWRyA9IE9wZW5SdWJiaXNoQmluU1ZHO1xuXG4gIHN0YXRpYyBDbG9zZWRSdWJiaXNoQmluU1ZHID0gQ2xvc2VkUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwicmVmZXJlbmNlXCIsXG4gICAgXCJyZWZlcmVuY2VzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihSdWJiaXNoQmluLnByb3RvdHlwZSwgZHJvcE1peGlucyk7XG5PYmplY3QuYXNzaWduKFJ1YmJpc2hCaW4ucHJvdG90eXBlLCBydWJiaXNoQmluTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUnViYmlzaEJpbi5wcm90b3R5cGUsIGRyYWdFbnRyeUl0ZW1NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnViYmlzaEJpbilgXG4gIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiUnViYmlzaEJpbiIsImRyb3BDdXN0b21IYW5kbGVyIiwiZHJhZ0VsZW1lbnQiLCJhYm9ydGVkIiwiZWxlbWVudCIsImRvbmUiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsImdldEV4cGxvcmVyIiwicmVtb3ZlTWFya2VyIiwiZHJvcERyYWdFbnRyeUl0ZW0iLCJkcmFnT3ZlckN1c3RvbUhhbmRsZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZ2V0UGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtUGF0aCIsInByZXZpb3VzTWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJhZGRNYXJrZXIiLCJnZXRSZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnbG9iYWxUaGlzIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsIm9wZW4iLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJjbG9zZSIsIm5hbWUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImV4cGxvcmVyIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiZHJhZ0VudHJ5SXRlbUV4cGxvcmVyIiwic291cmNlRW50cnlQYXRoIiwic291cmNlRW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXBzIiwiZ2V0UGF0aE1hcHMiLCJyZW1vdmVEcmFnRW50cnlJdGVtcyIsImN1c3RvbUV2ZW50VHlwZSIsIlJFTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVyc0FzeW5jIiwiZm9yRWFjaCIsInBhdGhNYXAiLCJyZW1vdmVEcmFnRW50cnlJdGVtIiwiYWRkRHJhZ0VudHJ5SXRlbSIsInNob3dPcGVuUnViYmlzaEJpblNWRyIsImhpZGVDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaGlkZU9wZW5SdWJiaXNoQmluU1ZHIiwic2hvd0Nsb3NlZFJ1YmJpc2hCaW5TVkciLCJkaWRNb3VudCIsImVuYWJsZURyb3AiLCJvbkN1c3RvbURyb3AiLCJvbkN1c3RvbURyYWdPdmVyIiwid2lsbFVubW91bnQiLCJkaXNhYmxlRHJvcCIsIm9mZkN1c3RvbURyb3AiLCJvZmZDdXN0b21EcmFnT3ZlciIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJyZWFkT25seSIsInJlbW92ZUZpbGVQYXRoIiwicmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyIsInJlbW92ZUFsbFBhdGhzIiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJjb2xsYXBzZWQiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZ2V0TWFya2VyRW50cnlJdGVtUGF0aCIsImdldFN0YXRlIiwiZ2V0TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJzZXRNYXJrZXJFbnRyeUl0ZW1QYXRoIiwidXBkYXRlU3RhdGUiLCJzZXRNYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJkcm9wTWl4aW5zIiwicnViYmlzaEJpbk1peGlucyIsImRyYWdFbnRyeUl0ZW1NaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7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