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
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), addEntryItem = this.addEntryItem.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), removeEntryItem = this.removeEntryItem.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this), retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHRvcG1vc3Q7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zTGVuZ3RoKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW1zTGVuZ3RoID0gZW50cnlJdGVtcy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtc0xlbmd0aDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5SXRlbXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKSxcbiAgICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG4gIH1cblxuICBzZWxlY3RQYXRoKHBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLCAgLy8vXG4gICAgICAgICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbShuYW1lKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uc2VsZWN0UGF0aChwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCwgcmVhZE9ubHkgPSBmYWxzZSkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUsIHJlYWRPbmx5KTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZEZpbGVQYXRoKGZpbGVQYXRoLCByZWFkT25seSk7XG4gICAgfVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbXMoKTtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsUGF0aHMoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHkgPSBmYWxzZSwgY29sbGFwc2VkID0gdHJ1ZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCByZWFkT25seSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBuZXh0RW50cnlJdGVtID0gZW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNFbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtID0gbmV4dEVudHJ5SXRlbS5pc0JlZm9yZShlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZXZpb3VzRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1vdW50KGVudHJ5SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5SXRlbS5tb3VudEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIHRoaXMudW5tb3VudChlbnRyeUl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0ucmVtb3ZlKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSwgcmVhZE9ubHkpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHkpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gcmVhZE9ubHk9e3JlYWRPbmx5fSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG4gICAgICAgICAgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShyZWFkT25seSwgdG9wbW9zdCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSByZWFkT25seT17cmVhZE9ubHl9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtc0J5VHlwZXMoLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBmaWx0ZXIoZW50cnlJdGVtcywgKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcztcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREcmFnRW50cnlJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW1zKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmZpbmRFbnRyeUl0ZW1zQnlUeXBlcyhGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1zID0gZW50cnlJdGVtczsgIC8vL1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSBbXSkge1xuICAgIHRoaXMuZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKTtcblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLnB1c2goZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIHJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbXMuZmluZCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWREcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyhkcmFnRW50cnlJdGVtcyA9IFtdKSB7XG4gICAgdGhpcy5mb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zKTtcblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1zLnB1c2goZHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcblx0ICB0aGlzLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0ZXhwYW5kKCkge1xuXHQgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0xpc3QgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNlbGVjdFBhdGggPSB0aGlzLnNlbGVjdFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEVudHJ5SXRlbSA9IHRoaXMuYWRkRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlQWxsUGF0aHMgPSB0aGlzLnJlbW92ZUFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRW50cnlJdGVtID0gdGhpcy5yZW1vdmVFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdEFsbFBhdGhzID0gdGhpcy5kZXNlbGVjdEFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgYWRkTWFya2VyLFxuICAgICAgc2VsZWN0UGF0aCxcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgYWRkRW50cnlJdGVtLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIHJlbW92ZUVudHJ5SXRlbSxcbiAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICBhZGREaXJlY3RvcnlQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcbiAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtc1xuXHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHRhZ05hbWUgPSBcInVsXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwidG9wbW9zdFwiLFxuICAgIFwiZXhwbG9yZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyaWVzTGlzdClgXG5cbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAke2VudHJpZXNMaXN0UGFkZGluZ0xlZnR9O1xuICBcbiAgLnRvcG1vc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhVdGlsaXRpZXMiLCJwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJtYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwiRW50cmllc0xpc3QiLCJpc1RvcG1vc3QiLCJwcm9wZXJ0aWVzIiwidG9wbW9zdCIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRFbnRyeUl0ZW1zIiwiY2hpbGRFbnRyeUl0ZW1FbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJlbnRyeUl0ZW1zIiwiZ2V0RW50cnlJdGVtc0xlbmd0aCIsImVudHJ5SXRlbXNMZW5ndGgiLCJsZW5ndGgiLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImhhc0NsYXNzIiwiaXNFbXB0eSIsImVtcHR5IiwiYWRkTWFya2VyIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImRyYWdFbnRyeUl0ZW1UeXBlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZU1hcmtlciIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsInNlbGVjdFBhdGgiLCJwYXRoIiwibmFtZSIsImRyYWdFbnRyeUl0ZW0iLCJmaW5kRHJhZ0VudHJ5SXRlbSIsInNlbGVjdCIsImZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZXhwYW5kIiwiYWRkRmlsZVBhdGgiLCJmaWxlUGF0aCIsInJlYWRPbmx5IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWUiLCJmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMiLCJyZW1vdmVFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsInJlbW92ZUFsbFBhdGhzIiwicmVtb3ZlRW50cnlJdGVtcyIsImRlc2VsZWN0QWxsUGF0aHMiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiZGVzZWxlY3QiLCJhZGREaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZSIsImNvbGxhcHNlIiwiZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJlbnRyeUl0ZW0iLCJuZXh0RW50cnlJdGVtIiwicHJldmlvdXNFbnRyeUl0ZW0iLCJmaW5kRW50cnlJdGVtIiwibmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJtb3VudCIsIm1vdW50QmVmb3JlIiwidW5tb3VudCIsInR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJyZW1vdmUiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMiLCJjYWxsYmFjayIsInR5cGVzIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJ0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSIsImluY2x1ZGVzIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwic29tZUVudHJ5SXRlbUJ5VHlwZXMiLCJzb21lIiwicmVzdWx0IiwiZmluZCIsImZpbmRFbnRyeUl0ZW1CeVR5cGVzIiwiZmluZEVudHJ5SXRlbXNCeVR5cGVzIiwiZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzIiwiZW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJmaW5kRHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInB1c2giLCJyZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkRHJhZ0VudHJ5SXRlbSIsInNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwicGFyZW50Q29udGV4dCIsImV4cGFuZEVudHJpZXNMaXN0IiwiYmluZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNm1CQTs7O2VBQUE7OztvRUEzbUJzQjtvQkFFRTt5QkFDc0I7c0JBRVA7MEJBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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