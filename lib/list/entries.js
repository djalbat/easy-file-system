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
var _necessary = require("necessary");
var _styles = require("../styles");
var _entryTypes = require("../entryTypes");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "\n\n  list-style: none;\n  padding-left: ",
        ";\n  \n  .topmost {\n    padding-left: 0;\n  }\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var filter = _necessary.arrayUtilities.filter, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
function getMarkerEntryItem() {
    var markerEntryItem = globalThis.markerEntryItem;
    return markerEntryItem;
}
function setMarkerEntryItem(markerEntryItem) {
    Object.assign(globalThis, {
        markerEntryItem: markerEntryItem
    });
}
function resetMarkerEntryItem() {
    var markerEntryItem = null;
    setMarkerEntryItem(markerEntryItem);
}
Object.assign(globalThis, {
    getMarkerEntryItem: getMarkerEntryItem,
    setMarkerEntryItem: setMarkerEntryItem,
    resetMarkerEntryItem: resetMarkerEntryItem
});
resetMarkerEntryItem();
var EntriesList = /*#__PURE__*/ function(Element) {
    _inherits(EntriesList, Element);
    function EntriesList() {
        _class_call_check(this, EntriesList);
        return _call_super(this, EntriesList, arguments);
    }
    _create_class(EntriesList, [
        {
            key: "isTopmost",
            value: function isTopmost() {
                var _this_properties = this.properties, _this_properties_topmost = _this_properties.topmost, topmost = _this_properties_topmost === void 0 ? false : _this_properties_topmost;
                return topmost;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this.properties.explorer;
                return explorer;
            }
        },
        {
            key: "getEntryItems",
            value: function getEntryItems() {
                var childEntryItemElements = this.getChildElements("li.entry"), entryItems = childEntryItemElements; ///
                return entryItems;
            }
        },
        {
            key: "getEntryItemsLength",
            value: function getEntryItemsLength() {
                var entryItems = this.getEntryItems(), entryItemsLength = entryItems.length;
                return entryItemsLength;
            }
        },
        {
            key: "isCollapsed",
            value: function isCollapsed() {
                var collapsed = this.hasClass("collapsed");
                return collapsed;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var entryItems = this.getEntryItems(), entryItemsLength = entryItems.length, empty = entryItemsLength === 0;
                return empty;
            }
        },
        {
            key: "addMarker",
            value: function addMarker(markerEntryItemPath, dragEntryItemType) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(markerEntryItemPath);
                if (topmostDirectoryName === null) {
                    var markerEntryItemName = markerEntryItemPath; ///
                    this.addMarkerEntryItem(markerEntryItemName, dragEntryItemType);
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName), markerEntryItemPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(markerEntryItemPath);
                    markerEntryItemPath = markerEntryItemPathWithoutTopmostDirectoryName; ///
                    topmostDirectoryNameDragEntryItem.addMarker(markerEntryItemPath, dragEntryItemType);
                }
            }
        },
        {
            key: "removeMarker",
            value: function removeMarker() {
                this.removeMarkerEntryItem();
            }
        },
        {
            key: "selectPath",
            value: function selectPath(path) {
                var dragEntryItem = null;
                var topmostDirectoryName = topmostDirectoryNameFromPath(path);
                if (topmostDirectoryName === null) {
                    var name = path; ///
                    dragEntryItem = this.findDragEntryItem(name);
                    if (dragEntryItem !== null) {
                        dragEntryItem.select();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem !== null) {
                        var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path);
                        path = filePathWithoutTopmostDirectoryName; ///
                        topmostDirectoryNameDragEntryItem.expand();
                        dragEntryItem = topmostDirectoryNameDragEntryItem.selectPath(path);
                    }
                }
                return dragEntryItem;
            }
        },
        {
            key: "deselectPath",
            value: function deselectPath(path) {
                var dragEntryItem = null;
                var topmostDirectoryName = topmostDirectoryNameFromPath(path);
                if (topmostDirectoryName === null) {
                    var name = path; ///
                    dragEntryItem = this.findDragEntryItem(name);
                    if (dragEntryItem !== null) {
                        dragEntryItem.deselect();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem !== null) {
                        var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path);
                        path = filePathWithoutTopmostDirectoryName; ///
                        dragEntryItem = topmostDirectoryNameDragEntryItem.deselectPath(path);
                    }
                }
                return dragEntryItem;
            }
        },
        {
            key: "addFilePath",
            value: function addFilePath(filePath) {
                var readOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var fileNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath);
                if (topmostDirectoryName === null) {
                    var fileName = filePath; ///
                    fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
                    if (fileNameDragEntryItem === null) {
                        fileNameDragEntryItem = this.createFileNameDragEntryItem(fileName, readOnly);
                        this.addEntryItem(fileNameDragEntryItem);
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        var collapsed = true;
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, readOnly, collapsed);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                    filePath = filePathWithoutTopmostDirectoryName; ///
                    fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath, readOnly);
                }
                return fileNameDragEntryItem;
            }
        },
        {
            key: "removeFilePath",
            value: function removeFilePath(filePath) {
                var removeEmptyParentDirectories = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath);
                if (topmostDirectoryName === null) {
                    var fileName = filePath, fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
                    if (fileNameDragEntryItem !== null) {
                        this.removeEntryItem(fileNameDragEntryItem);
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem !== null) {
                        var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                        filePath = filePathWithoutTopmostDirectoryName; ///
                        topmostDirectoryNameDragEntryItem.removeFilePath(filePath, removeEmptyParentDirectories);
                        if (removeEmptyParentDirectories) {
                            var topmostDirectoryNameDragEntryItemEmpty = topmostDirectoryNameDragEntryItem.isEmpty();
                            if (topmostDirectoryNameDragEntryItemEmpty) {
                                this.removeEntryItem(topmostDirectoryNameDragEntryItem);
                            }
                        }
                    }
                }
            }
        },
        {
            key: "removeAllPaths",
            value: function removeAllPaths() {
                this.removeEntryItems();
            }
        },
        {
            key: "deselectAllPaths",
            value: function deselectAllPaths() {
                var dragEntryItems = this.retrieveDragEntryItems();
                dragEntryItems.forEach(function(dragEntryItem) {
                    dragEntryItem.deselect();
                });
            }
        },
        {
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath) {
                var readOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, collapsed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var directoryNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryName === null) {
                    var directoryName = directoryPath; ///
                    directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem === null) {
                        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, readOnly, collapsed);
                        this.addEntryItem(directoryNameDragEntryItem);
                    } else {
                        collapsed ? directoryNameDragEntryItem.collapse() : directoryNameDragEntryItem.expand();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, readOnly, collapsed);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);
                    directoryPath = directoryPathWithoutTopmostDirectoryName; ///
                    directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem.addDirectoryPath(directoryPath, readOnly, collapsed);
                }
                return directoryNameDragEntryItem;
            }
        },
        {
            key: "removeDirectoryPath",
            value: function removeDirectoryPath(directoryPath) {
                var removeEmptyParentDirectories = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryName === null) {
                    var directoryName = directoryPath, directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem !== null) {
                        this.removeEntryItem(directoryNameDragEntryItem);
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem !== null) {
                        var directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);
                        directoryPath = directoryPathWithoutTopmostDirectoryName; ///
                        topmostDirectoryNameDragEntryItem.removeDirectoryPath(directoryPath, removeEmptyParentDirectories);
                        if (removeEmptyParentDirectories) {
                            var topmostDirectoryNameDragEntryItemEmpty = topmostDirectoryNameDragEntryItem.isEmpty();
                            if (topmostDirectoryNameDragEntryItemEmpty) {
                                this.removeEntryItem(topmostDirectoryNameDragEntryItem);
                            }
                        }
                    }
                }
            }
        },
        {
            key: "addEntryItem",
            value: function addEntryItem(entryItem) {
                var nextEntryItem = entryItem, previousEntryItem = this.findEntryItem(function(entryItem) {
                    var nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);
                    if (nextEntryBeforeEntryItem) {
                        return true;
                    }
                });
                if (previousEntryItem === null) {
                    this.mount(entryItem);
                } else {
                    entryItem.mountBefore(previousEntryItem);
                }
            }
        },
        {
            key: "removeEntryItem",
            value: function removeEntryItem(entryItem) {
                this.unmount(entryItem);
            }
        },
        {
            key: "removeEntryItems",
            value: function removeEntryItems() {
                var _this = this;
                var entryItems = this.getEntryItems();
                entryItems.forEach(function(entryItem) {
                    _this.removeEntryItem(entryItem);
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
                            var explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer1 = this.getExplorer(), DirectoryNameMarkerEntryItem = explorer1.getDirectoryNameMarkerEntryItem(), directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer1
                            });
                            markerEntryItem = directoryNameMarkerEntryItem; ///
                            break;
                        }
                }
                var entryItem = markerEntryItem; ///
                this.addEntryItem(entryItem);
                setMarkerEntryItem(markerEntryItem);
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                var markerEntryItem = this.retrieveMarkerEntryItem();
                markerEntryItem.remove();
                resetMarkerEntryItem();
                resetDropElement();
            }
        },
        {
            key: "createFileNameDragEntryItem",
            value: function createFileNameDragEntryItem(fileName, readOnly) {
                var name = fileName, explorer = this.getExplorer(), FileNameDragEntryItem = explorer.getFileNameDragEntryItem(readOnly), fileNameDragEntryItem = /*#__PURE__*/ React.createElement(FileNameDragEntryItem, {
                    name: name,
                    readOnly: readOnly,
                    explorer: explorer
                });
                return fileNameDragEntryItem;
            }
        },
        {
            key: "createDirectoryNameDragEntryItem",
            value: function createDirectoryNameDragEntryItem(directoryName, readOnly, collapsed) {
                var name = directoryName, topmost = this.isTopmost(), explorer = this.getExplorer(), DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(readOnly, topmost), directoryNameDragEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryItem, {
                    name: name,
                    explorer: explorer,
                    readOnly: readOnly,
                    topmost: topmost,
                    collapsed: collapsed
                });
                return directoryNameDragEntryItem;
            }
        },
        {
            key: "isFileNameDragEntryItemPresent",
            value: function isFileNameDragEntryItemPresent(fileName) {
                var fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName), fileNameDragEntryItemPresent = fileNameDragEntryItem !== null;
                return fileNameDragEntryItemPresent;
            }
        },
        {
            key: "isDirectoryNameDragEntryItemPresent",
            value: function isDirectoryNameDragEntryItemPresent(directoryName) {
                var directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName), directoryNameDragEntryItemPresent = directoryNameDragEntryItem !== null;
                return directoryNameDragEntryItemPresent;
            }
        },
        {
            key: "forEachEntryItemByTypes",
            value: function forEachEntryItemByTypes(callback) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryItems = this.getEntryItems();
                entryItems.forEach(function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        callback(entryItem);
                    }
                });
            }
        },
        {
            key: "forEachDragEntryItem",
            value: function forEachDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
            }
        },
        {
            key: "forEachFileNameDragEntryItem",
            value: function forEachFileNameDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
            }
        },
        {
            key: "forEachDirectoryNameDragEntryItem",
            value: function forEachDirectoryNameDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE);
            }
        },
        {
            key: "findEntryItem",
            value: function findEntryItem(callback) {
                var entryItems = this.getEntryItems(), entryItem = entryItems.find(callback) || null; ///
                return entryItem;
            }
        },
        {
            key: "findEntryItemByTypes",
            value: function findEntryItemByTypes(callback) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryItems = this.getEntryItems(), entryItem = entryItems.find(function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        var result = callback(entryItem);
                        if (result) {
                            return true;
                        }
                    }
                }) || null; ///;
                return entryItem;
            }
        },
        {
            key: "findEntryItemsByTypes",
            value: function findEntryItemsByTypes() {
                for(var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++){
                    types[_key] = arguments[_key];
                }
                var entryItems = this.getEntryItems();
                var filteredEntryItems = filter(entryItems, function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        return true;
                    }
                });
                return filteredEntryItems;
            }
        },
        {
            key: "findEntryItemByNameAndTypes",
            value: function findEntryItemByNameAndTypes(name) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryItem = this.findEntryItemByTypes.apply(this, [
                    function(entryItem) {
                        var entryItemName = entryItem.getName();
                        if (entryItemName === name) {
                            return true;
                        }
                    }
                ].concat(_to_consumable_array(types))) || null;
                return entryItem;
            }
        },
        {
            key: "findDragEntryItem",
            value: function findDragEntryItem(name) {
                var entryItem = this.findEntryItemByNameAndTypes(name, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), dragEntryItem = entryItem; ///
                return dragEntryItem;
            }
        },
        {
            key: "findDragEntryItems",
            value: function findDragEntryItems() {
                var entryItems = this.findEntryItemsByTypes(_entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), dragEntryItems = entryItems; ///
                return dragEntryItems;
            }
        },
        {
            key: "findFileNameDragEntryItem",
            value: function findFileNameDragEntryItem(fileName) {
                var name = fileName, entryItem = this.findEntryItemByNameAndTypes(name, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE), fileNameDragEntryItem = entryItem; ///
                return fileNameDragEntryItem;
            }
        },
        {
            key: "findDirectoryNameDragEntryItem",
            value: function findDirectoryNameDragEntryItem(directoryName) {
                var entryItem = this.findEntryItemByNameAndTypes(directoryName, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), directoryNameDragEntryItem = entryItem; ///
                return directoryNameDragEntryItem;
            }
        },
        {
            key: "retrieveDragEntryItems",
            value: function retrieveDragEntryItems() {
                var dragEntryItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                this.forEachDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                    var dragEntryItem = directoryNameDragEntryItem; ///
                    directoryNameDragEntryItem.retrieveDragEntryItems(dragEntryItems);
                    dragEntryItems.push(dragEntryItem);
                });
                this.forEachFileNameDragEntryItem(function(fileNameDragEntryItem) {
                    var dragEntryItem = fileNameDragEntryItem; ///
                    dragEntryItems.push(dragEntryItem);
                });
                return dragEntryItems;
            }
        },
        {
            key: "retrieveFileNameDragEntryItems",
            value: function retrieveFileNameDragEntryItems() {
                var fileNameDragEntryItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                this.forEachDragEntryItem(function(dragEntryItem) {
                    var dragEntryItemDirectoryNameDragEntryItem = dragEntryItem.isDirectoryNameDragEntryItem();
                    if (dragEntryItemDirectoryNameDragEntryItem) {
                        var directoryNameDragEntryItem = dragEntryItem; ///
                        directoryNameDragEntryItem.retrieveFileNameDragEntryItems(fileNameDragEntryItems);
                    } else {
                        var fileNameDragEntryItem = dragEntryItem; ///
                        fileNameDragEntryItems.push(fileNameDragEntryItem);
                    }
                });
                return fileNameDragEntryItems;
            }
        },
        {
            key: "retrieveDirectoryNameDragEntryItems",
            value: function retrieveDirectoryNameDragEntryItems() {
                var directoryNameDragEntryItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                this.forEachDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                    directoryNameDragEntryItem.retrieveDirectoryNameDragEntryItems(directoryNameDragEntryItems);
                    directoryNameDragEntryItems.push(directoryNameDragEntryItem);
                });
                return directoryNameDragEntryItems;
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
            key: "retrieveEditableDragEntryItem",
            value: function retrieveEditableDragEntryItem() {
                var dragEntryItems = this.retrieveDragEntryItems(), editableDragEntryItem = dragEntryItems.find(function(dragEntryItem) {
                    var dragEntryItemEditable = dragEntryItem.isEditable();
                    if (dragEntryItemEditable) {
                        return true;
                    }
                }) || null;
                return editableDragEntryItem;
            }
        },
        {
            key: "retrieveSelectedDragEntryItem",
            value: function retrieveSelectedDragEntryItem() {
                var dragEntryItems = this.retrieveDragEntryItems(), selectedDragEntryItem = dragEntryItems.find(function(dragEntryItem) {
                    var selected = dragEntryItem.isSelected();
                    if (selected) {
                        return true;
                    }
                }) || null;
                return selectedDragEntryItem;
            }
        },
        {
            key: "retrieveFileNameDragEntryItem",
            value: function retrieveFileNameDragEntryItem(filePath) {
                var fileNameDragEntryItems = this.retrieveFileNameDragEntryItems(), fileNameDragEntryItem = fileNameDragEntryItems.find(function(fileNameDragEntryItem) {
                    var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath();
                    if (fileNameDragEntryItemPath === filePath) {
                        return true;
                    }
                }) || null; ///
                return fileNameDragEntryItem;
            }
        },
        {
            key: "retrieveDirectoryNameDragEntryItem",
            value: function retrieveDirectoryNameDragEntryItem(directoryPath) {
                var directoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems(), directoryNameDragEntryItem = directoryNameDragEntryItems.find(function(directoryNameDragEntryItem) {
                    var directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath();
                    if (directoryNameDragEntryItemPath === directoryPath) {
                        return true;
                    }
                }) || null; ///
                return directoryNameDragEntryItem;
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.addClass("collapsed");
            }
        },
        {
            key: "expand",
            value: function expand() {
                this.removeClass("collapsed");
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var topmost = this.isTopmost();
                if (topmost) {
                    this.addClass("topmost");
                }
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), deselectPath = this.deselectPath.bind(this), removeMarker = this.removeMarker.bind(this), addEntryItem = this.addEntryItem.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), removeEntryItem = this.removeEntryItem.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this), retrieveEditableDragEntryItem = this.retrieveEditableDragEntryItem.bind(this), retrieveFileNameDragEntryItem = this.retrieveFileNameDragEntryItem.bind(this), retrieveFileNameDragEntryItems = this.retrieveFileNameDragEntryItems.bind(this), retrieveDirectoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem.bind(this), retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
                    selectPath: selectPath,
                    addFilePath: addFilePath,
                    deselectPath: deselectPath,
                    removeMarker: removeMarker,
                    addEntryItem: addEntryItem,
                    removeFilePath: removeFilePath,
                    removeAllPaths: removeAllPaths,
                    removeEntryItem: removeEntryItem,
                    deselectAllPaths: deselectAllPaths,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    forEachDragEntryItem: forEachDragEntryItem,
                    retrieveDragEntryItems: retrieveDragEntryItems,
                    retrieveMarkerEntryItem: retrieveMarkerEntryItem,
                    retrieveSelectedDragEntryItem: retrieveSelectedDragEntryItem,
                    retrieveEditableDragEntryItem: retrieveEditableDragEntryItem,
                    retrieveFileNameDragEntryItem: retrieveFileNameDragEntryItem,
                    retrieveFileNameDragEntryItems: retrieveFileNameDragEntryItems,
                    retrieveDirectoryNameDragEntryItem: retrieveDirectoryNameDragEntryItem,
                    retrieveDirectoryNameDragEntryItems: retrieveDirectoryNameDragEntryItems
                };
            }
        }
    ]);
    return EntriesList;
}(_wrap_native_super(_easy.Element));
_define_property(EntriesList, "tagName", "ul");
_define_property(EntriesList, "ignoredProperties", [
    "topmost",
    "explorer"
]);
_define_property(EntriesList, "defaultProperties", {
    className: "entries"
});
var _default = (0, _easywithstyle.default)(EntriesList)(_templateObject(), _styles.entriesListPaddingLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZnVuY3Rpb24gZ2V0TWFya2VyRW50cnlJdGVtKCkge1xuICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xufVxuXG5mdW5jdGlvbiBzZXRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSB7XG4gIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgIG1hcmtlckVudHJ5SXRlbVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG59XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBnZXRNYXJrZXJFbnRyeUl0ZW0sXG4gIHNldE1hcmtlckVudHJ5SXRlbSxcbiAgcmVzZXRNYXJrZXJFbnRyeUl0ZW1cbn0pO1xuXG5yZXNldE1hcmtlckVudHJ5SXRlbSgpO1xuXG5jbGFzcyBFbnRyaWVzTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBpc1RvcG1vc3QoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0ID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgc2VsZWN0UGF0aChwYXRoKSB7XG4gICAgbGV0IGRyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGF0aDsgIC8vL1xuXG4gICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbShuYW1lKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcblxuICAgICAgICBkcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBkZXNlbGVjdFBhdGgocGF0aCkge1xuICAgIGxldCBkcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhdGg7ICAvLy9cblxuICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERyYWdFbnRyeUl0ZW0obmFtZSk7XG5cbiAgICAgIGlmIChkcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZGVzZWxlY3RQYXRoKHBhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lLCByZWFkT25seSk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCwgcmVhZE9ubHkpO1xuICAgIH1cblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWxsUGF0aHMoKSB7XG4gICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW1zKCk7XG4gIH1cblxuICBkZXNlbGVjdEFsbFBhdGhzKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5ID0gZmFsc2UsIGNvbGxhcHNlZCA9IHRydWUpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGFwc2VkID9cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5jb2xsYXBzZSgpIDpcbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmV4cGFuZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZWFkT25seSwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3VudChlbnRyeUl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUl0ZW0ubW91bnRCZWZvcmUocHJldmlvdXNFbnRyeUl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICB0aGlzLnVubW91bnQoZW50cnlJdGVtKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbXMoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgc2V0TWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuXG4gICAgcmVzZXRNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIHJlc2V0RHJvcEVsZW1lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSwgcmVhZE9ubHkpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gcmVhZE9ubHk9e3JlYWRPbmx5fSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG4gICAgICAgICAgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSByZWFkT25seT17cmVhZE9ubHl9IHRvcG1vc3Q9e3RvcG1vc3R9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtc0J5VHlwZXMoLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBmaWx0ZXIoZW50cnlJdGVtcywgKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcztcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREcmFnRW50cnlJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW1zKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmZpbmRFbnRyeUl0ZW1zQnlUeXBlcyhGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1zID0gZW50cnlJdGVtczsgIC8vL1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMpO1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKChmaWxlTmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcyhmaWxlTmFtZURyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcyhmaWxlTmFtZURyYWdFbnRyeUl0ZW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW1zLnB1c2goZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyk7XG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5wdXNoKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBnZXRNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZUVkaXRhYmxlRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIGVkaXRhYmxlRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW1zLmZpbmQoKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1FZGl0YWJsZSA9IGRyYWdFbnRyeUl0ZW0uaXNFZGl0YWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbUVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZWRpdGFibGVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBzZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtcy5maW5kKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzZWxlY3RlZERyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMuZmluZCgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5maW5kKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID09PSBkaXJlY3RvcnlQYXRoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cbiAgICBpZiAodG9wbW9zdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZWxlY3RQYXRoID0gdGhpcy5zZWxlY3RQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3RQYXRoID0gdGhpcy5kZXNlbGVjdFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEVudHJ5SXRlbSA9IHRoaXMuYWRkRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlQWxsUGF0aHMgPSB0aGlzLnJlbW92ZUFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRW50cnlJdGVtID0gdGhpcy5yZW1vdmVFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdEFsbFBhdGhzID0gdGhpcy5kZXNlbGVjdEFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVFZGl0YWJsZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgYWRkTWFya2VyLFxuICAgICAgc2VsZWN0UGF0aCxcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgZGVzZWxlY3RQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgYWRkRW50cnlJdGVtLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIHJlbW92ZUVudHJ5SXRlbSxcbiAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICBhZGREaXJlY3RvcnlQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcbiAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZUVkaXRhYmxlRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImdldE1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJzZXRNYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJyZXNldE1hcmtlckVudHJ5SXRlbSIsIkVudHJpZXNMaXN0IiwiaXNUb3Btb3N0IiwicHJvcGVydGllcyIsInRvcG1vc3QiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0RW50cnlJdGVtcyIsImNoaWxkRW50cnlJdGVtRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZW50cnlJdGVtcyIsImdldEVudHJ5SXRlbXNMZW5ndGgiLCJlbnRyeUl0ZW1zTGVuZ3RoIiwibGVuZ3RoIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJoYXNDbGFzcyIsImlzRW1wdHkiLCJlbXB0eSIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVNYXJrZXIiLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJzZWxlY3RQYXRoIiwicGF0aCIsImRyYWdFbnRyeUl0ZW0iLCJuYW1lIiwiZmluZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3QiLCJmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsImV4cGFuZCIsImRlc2VsZWN0UGF0aCIsImRlc2VsZWN0IiwiYWRkRmlsZVBhdGgiLCJmaWxlUGF0aCIsInJlYWRPbmx5IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWUiLCJmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMiLCJyZW1vdmVFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsInJlbW92ZUFsbFBhdGhzIiwicmVtb3ZlRW50cnlJdGVtcyIsImRlc2VsZWN0QWxsUGF0aHMiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWUiLCJjb2xsYXBzZSIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibmV4dEVudHJ5SXRlbSIsInByZXZpb3VzRW50cnlJdGVtIiwiZmluZEVudHJ5SXRlbSIsIm5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSIsImlzQmVmb3JlIiwibW91bnQiLCJtb3VudEJlZm9yZSIsInVubW91bnQiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwicmVtb3ZlIiwicmVzZXREcm9wRWxlbWVudCIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyIsImNhbGxiYWNrIiwidHlwZXMiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlIiwiaW5jbHVkZXMiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsImZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaW5kIiwiZmluZEVudHJ5SXRlbUJ5VHlwZXMiLCJyZXN1bHQiLCJmaW5kRW50cnlJdGVtc0J5VHlwZXMiLCJmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMiLCJlbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsImZpbmREcmFnRW50cnlJdGVtcyIsInB1c2giLCJyZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1zIiwiZHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVFZGl0YWJsZURyYWdFbnRyeUl0ZW0iLCJlZGl0YWJsZURyYWdFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtRWRpdGFibGUiLCJpc0VkaXRhYmxlIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJyZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwicGFyZW50Q29udGV4dCIsImV4cGFuZEVudHJpZXNMaXN0IiwiYmluZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa3RCQTs7O2VBQUE7OztvRUFodEJzQjtvQkFFRTt5QkFDc0I7c0JBRVA7MEJBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUUsSUFBTSxBQUFFQSxTQUFXQyx5QkFBYyxDQUF6QkQsUUFDQUUsK0JBQTBFQyx3QkFBYSxDQUF2RkQsOEJBQThCRSwwQ0FBNENELHdCQUFhLENBQXpEQztBQUV0QyxTQUFTQztJQUNQLElBQU0sQUFBRUMsa0JBQW9CQyxXQUFwQkQ7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU0UsbUJBQW1CRixlQUFlO0lBQ3pDRyxPQUFPQyxNQUFNLENBQUNILFlBQVk7UUFDeEJELGlCQUFBQTtJQUNGO0FBQ0Y7QUFFQSxTQUFTSztJQUNQLElBQU1MLGtCQUFrQjtJQUV4QkUsbUJBQW1CRjtBQUNyQjtBQUVBRyxPQUFPQyxNQUFNLENBQUNILFlBQVk7SUFDeEJGLG9CQUFBQTtJQUNBRyxvQkFBQUE7SUFDQUcsc0JBQUFBO0FBQ0Y7QUFFQUE7QUFFQSxJQUFBLEFBQU1DLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUE0QixtQkFBQSxJQUFJLENBQUNDLFVBQVUsNkJBQWYsaUJBQXBCQyxTQUFBQSxnREFBVTtnQkFFbEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21C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
