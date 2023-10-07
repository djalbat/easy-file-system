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
        "\n\n  list-style: none;\n  padding-left: ",
        ";\n  \n  .topmost {\n    padding-left: 0;\n  }\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var filter = _necessary.arrayUtilities.filter, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
var markerEntryItem = null;
Object.assign(globalThis, {
    markerEntryItem: markerEntryItem
});
var EntriesList = /*#__PURE__*/ function(Element) {
    _inherits(EntriesList, Element);
    var _super = _create_super(EntriesList);
    function EntriesList() {
        _class_call_check(this, EntriesList);
        return _super.apply(this, arguments);
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
                var topmostDirectoryName = topmostDirectoryNameFromPath(path);
                if (topmostDirectoryName === null) {
                    var name = path, dragEntryItem = this.findDragEntryItem(name);
                    if (dragEntryItem !== null) {
                        dragEntryItem.select();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem !== null) {
                        var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path);
                        path = filePathWithoutTopmostDirectoryName; ///
                        topmostDirectoryNameDragEntryItem.expand();
                        topmostDirectoryNameDragEntryItem.selectPath(path);
                    }
                }
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
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem
                });
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                var markerEntryItem = this.retrieveMarkerEntryItem();
                markerEntryItem.remove();
                markerEntryItem = null;
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem
                });
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
            key: "someEntryItemByTypes",
            value: function someEntryItemByTypes(callback) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryItems = this.getEntryItems();
                return entryItems.some(function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        var result = callback(entryItem);
                        return result;
                    }
                });
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
                filter(entryItems, function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        return true;
                    }
                });
                return entryItems;
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
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), isTopmost = this.isTopmost.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), addEntryItem = this.addEntryItem.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), removeEntryItem = this.removeEntryItem.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this), retrieveFileNameDragEntryItem = this.retrieveFileNameDragEntryItem.bind(this), retrieveFileNameDragEntryItems = this.retrieveFileNameDragEntryItems.bind(this), retrieveDirectoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem.bind(this), retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
                    isTopmost: isTopmost,
                    addMarker: addMarker,
                    selectPath: selectPath,
                    addFilePath: addFilePath,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHRvcG1vc3Q7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zTGVuZ3RoKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW1zTGVuZ3RoID0gZW50cnlJdGVtcy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtc0xlbmd0aDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5SXRlbXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKSxcbiAgICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG4gIH1cblxuICBzZWxlY3RQYXRoKHBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLCAgLy8vXG4gICAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbShuYW1lKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uc2VsZWN0UGF0aChwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCwgcmVhZE9ubHkgPSBmYWxzZSkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUsIHJlYWRPbmx5KTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZEZpbGVQYXRoKGZpbGVQYXRoLCByZWFkT25seSk7XG4gICAgfVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbXMoKTtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsUGF0aHMoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHkgPSBmYWxzZSwgY29sbGFwc2VkID0gdHJ1ZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCByZWFkT25seSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBuZXh0RW50cnlJdGVtID0gZW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNFbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtID0gbmV4dEVudHJ5SXRlbS5pc0JlZm9yZShlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZXZpb3VzRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1vdW50KGVudHJ5SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5SXRlbS5tb3VudEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIHRoaXMudW5tb3VudChlbnRyeUl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0ucmVtb3ZlKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSwgcmVhZE9ubHkpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gcmVhZE9ubHk9e3JlYWRPbmx5fSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG4gICAgICAgICAgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSByZWFkT25seT17cmVhZE9ubHl9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbShjYWxsYmFjaykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW0gPSBlbnRyeUl0ZW1zLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW0gPSBlbnRyeUl0ZW1zLmZpbmQoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1zQnlUeXBlcyguLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGZpbHRlcihlbnRyeUl0ZW1zLCAoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlUeXBlcygoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGVudHJ5SXRlbU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgLi4udHlwZXMpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW0obmFtZSkge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbXMoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZmluZEVudHJ5SXRlbXNCeVR5cGVzKEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbXMgPSBlbnRyeUl0ZW1zOyAgLy8vXG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICBmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGZpbGVOYW1lLCAgLy8vXG4gICAgICAgICAgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMgPSBbXSkge1xuICAgIHRoaXMuZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVEcmFnRW50cnlJdGVtcyhkcmFnRW50cnlJdGVtcyk7XG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1zLnB1c2goZHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMgPSBbXSkge1xuICAgIHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0oKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW0uaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICBpZiAoZHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMucHVzaChmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSBbXSkge1xuICAgIHRoaXMuZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKTtcblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLnB1c2goZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbXMuZmluZCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWREcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW1zLmZpbmQoKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuZmluZCgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKTtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9PT0gZGlyZWN0b3J5UGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuXHQgIHRoaXMuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuXHRleHBhbmQoKSB7XG5cdCAgdGhpcy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHRvcG1vc3QgPSB0aGlzLmlzVG9wbW9zdCgpO1xuXG4gICAgaWYgKHRvcG1vc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ0b3Btb3N0XCIpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBleHBhbmRFbnRyaWVzTGlzdCA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBjb2xsYXBzZUVudHJpZXNMaXN0ID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNFbXB0eSA9IHRoaXMuaXNFbXB0eS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGlzVG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZWxlY3RQYXRoID0gdGhpcy5zZWxlY3RQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlTWFya2VyID0gdGhpcy5yZW1vdmVNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRFbnRyeUl0ZW0gPSB0aGlzLmFkZEVudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUFsbFBhdGhzID0gdGhpcy5yZW1vdmVBbGxQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUVudHJ5SXRlbSA9IHRoaXMucmVtb3ZlRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3RBbGxQYXRocyA9IHRoaXMuZGVzZWxlY3RBbGxQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVEaXJlY3RvcnlQYXRoID0gdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0gPSB0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcy5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG4gICAgICBleHBhbmRFbnRyaWVzTGlzdCxcbiAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QsXG4gICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkLFxuICAgICAgaXNFbXB0eSxcbiAgICAgIGlzVG9wbW9zdCxcbiAgICAgIGFkZE1hcmtlcixcbiAgICAgIHNlbGVjdFBhdGgsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZU1hcmtlcixcbiAgICAgIGFkZEVudHJ5SXRlbSxcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgcmVtb3ZlQWxsUGF0aHMsXG4gICAgICByZW1vdmVFbnRyeUl0ZW0sXG4gICAgICBkZXNlbGVjdEFsbFBhdGhzLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG4gICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMsXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMsXG4gICAgICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXNcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInRvcG1vc3RcIixcbiAgICBcImV4cGxvcmVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cmllc0xpc3QpYFxuXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogJHtlbnRyaWVzTGlzdFBhZGRpbmdMZWZ0fTtcbiAgXG4gIC50b3Btb3N0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIC5jb2xsYXBzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoVXRpbGl0aWVzIiwicGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwibWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2xvYmFsVGhpcyIsIkVudHJpZXNMaXN0IiwiaXNUb3Btb3N0IiwicHJvcGVydGllcyIsInRvcG1vc3QiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0RW50cnlJdGVtcyIsImNoaWxkRW50cnlJdGVtRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZW50cnlJdGVtcyIsImdldEVudHJ5SXRlbXNMZW5ndGgiLCJlbnRyeUl0ZW1zTGVuZ3RoIiwibGVuZ3RoIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJoYXNDbGFzcyIsImlzRW1wdHkiLCJlbXB0eSIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVNYXJrZXIiLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJzZWxlY3RQYXRoIiwicGF0aCIsIm5hbWUiLCJkcmFnRW50cnlJdGVtIiwiZmluZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3QiLCJmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsImV4cGFuZCIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJyZWFkT25seSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lIiwiZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEVudHJ5SXRlbSIsImNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzIiwicmVtb3ZlRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJyZW1vdmVBbGxQYXRocyIsInJlbW92ZUVudHJ5SXRlbXMiLCJkZXNlbGVjdEFsbFBhdGhzIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImRlc2VsZWN0IiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWUiLCJjb2xsYXBzZSIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibmV4dEVudHJ5SXRlbSIsInByZXZpb3VzRW50cnlJdGVtIiwiZmluZEVudHJ5SXRlbSIsIm5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSIsImlzQmVmb3JlIiwibW91bnQiLCJtb3VudEJlZm9yZSIsInVubW91bnQiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwicmVtb3ZlIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzIiwiY2FsbGJhY2siLCJ0eXBlcyIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwidHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUiLCJpbmNsdWRlcyIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInNvbWVFbnRyeUl0ZW1CeVR5cGVzIiwic29tZSIsInJlc3VsdCIsImZpbmQiLCJmaW5kRW50cnlJdGVtQnlUeXBlcyIsImZpbmRFbnRyeUl0ZW1zQnlUeXBlcyIsImZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyIsImVudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwiZmluZERyYWdFbnRyeUl0ZW1zIiwicHVzaCIsInJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtcyIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMiLCJkcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsInJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJwYXJlbnRDb250ZXh0IiwiZXhwYW5kRW50cmllc0xpc3QiLCJiaW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJlbnRyaWVzTGlzdFBhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpcUJBOzs7ZUFBQTs7O29FQS9wQnNCO29CQUVFO3lCQUNzQjtzQkFFUDswQkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRSxJQUFNLEFBQUVBLFNBQVdDLHlCQUFjLENBQXpCRCxRQUNBRSwrQkFBMEVDLHdCQUFhLENBQXZGRCw4QkFBOEJFLDBDQUE0Q0Qsd0JBQWEsQ0FBekRDO0FBRXRDLElBQU1DLGtCQUFrQjtBQUV4QkMsT0FBT0MsTUFBTSxDQUFDQyxZQUFZO0lBQ3hCSCxpQkFBQUE7QUFDRjtBQUVBLElBQUEsQUFBTUksNEJBOG9CSCxBQTlvQkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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