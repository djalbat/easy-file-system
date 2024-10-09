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
                var explorer = this.getExplorer(), mounted = explorer.isMounted(), nextEntryItem = entryItem, previousEntryItem = this.findEntryItem(function(entryItem) {
                    var nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);
                    if (nextEntryBeforeEntryItem) {
                        return true;
                    }
                });
                if (previousEntryItem === null) {
                    mounted ? this.mount(entryItem) : this.add(entryItem);
                } else {
                    mounted ? entryItem.mountBefore(previousEntryItem) : entryItem.insertBefore(previousEntryItem);
                }
            }
        },
        {
            key: "removeEntryItem",
            value: function removeEntryItem(entryItem) {
                var explorer = this.getExplorer(), mounted = explorer.isMounted();
                mounted ? this.unmount(entryItem) : this.remove(entryItem);
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
                var markerEntryItem = getMarkerEntryItem();
                return markerEntryItem;
            }
        },
        {
            key: "retrieveEditableDragEntryItem",
            value: function retrieveEditableDragEntryItem() {
                var dragEntryItems = this.retrieveDragEntryItems(), editableDragEntryItem = dragEntryItems.find(function(dragEntryItem) {
                    var editable = dragEntryItem.isEditable();
                    if (editable) {
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), addEntryItem = this.addEntryItem.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), removeEntryItem = this.removeEntryItem.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this), retrieveEditableDragEntryItem = this.retrieveEditableDragEntryItem.bind(this), retrieveFileNameDragEntryItem = this.retrieveFileNameDragEntryItem.bind(this), retrieveFileNameDragEntryItems = this.retrieveFileNameDragEntryItems.bind(this), retrieveDirectoryNameDragEntryItem = this.retrieveDirectoryNameDragEntryItem.bind(this), retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZnVuY3Rpb24gZ2V0TWFya2VyRW50cnlJdGVtKCkge1xuICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xufVxuXG5mdW5jdGlvbiBzZXRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtKSB7XG4gIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgIG1hcmtlckVudHJ5SXRlbVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgc2V0TWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG59XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBnZXRNYXJrZXJFbnRyeUl0ZW0sXG4gIHNldE1hcmtlckVudHJ5SXRlbSxcbiAgcmVzZXRNYXJrZXJFbnRyeUl0ZW1cbn0pO1xuXG5yZXNldE1hcmtlckVudHJ5SXRlbSgpO1xuXG5jbGFzcyBFbnRyaWVzTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBpc1RvcG1vc3QoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0ID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgc2VsZWN0UGF0aChwYXRoKSB7XG4gICAgbGV0IGRyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGF0aDsgIC8vL1xuXG4gICAgICBkcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbShuYW1lKTtcblxuICAgICAgaWYgKGRyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKTtcblxuICAgICAgICBwYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcblxuICAgICAgICBkcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCwgcmVhZE9ubHkgPSBmYWxzZSkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUsIHJlYWRPbmx5KTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZEZpbGVQYXRoKGZpbGVQYXRoLCByZWFkT25seSk7XG4gICAgfVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbXMoKTtcbiAgfVxuXG4gIGRlc2VsZWN0QWxsUGF0aHMoKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKTtcblxuICAgIGRyYWdFbnRyeUl0ZW1zLmZvckVhY2goKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRyYWdFbnRyeUl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHkgPSBmYWxzZSwgY29sbGFwc2VkID0gdHJ1ZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCByZWFkT25seSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlYWRPbmx5LCBjb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgbW91bnRlZCA/XG4gICAgICAgIHRoaXMubW91bnQoZW50cnlJdGVtKSA6XG4gICAgICAgICAgdGhpcy5hZGQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW91bnRlZCA/XG4gICAgICAgIGVudHJ5SXRlbS5tb3VudEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSkgOlxuICAgICAgICAgIGVudHJ5SXRlbS5pbnNlcnRCZWZvcmUocHJldmlvdXNFbnRyeUl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBtb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBtb3VudGVkID9cbiAgICAgIHRoaXMudW5tb3VudChlbnRyeUl0ZW0pIDpcbiAgICAgICAgdGhpcy5yZW1vdmUoZW50cnlJdGVtKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbXMoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgc2V0TWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbS5yZW1vdmUoKTtcblxuICAgIHJlc2V0TWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICByZXNldERyb3BFbGVtZW50KCk7XG4gIH1cblxuICBjcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUsIHJlYWRPbmx5KSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKHJlYWRPbmx5KSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IHJlYWRPbmx5PXtyZWFkT25seX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIHJlYWRPbmx5LCBjb2xsYXBzZWQpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuICAgICAgICAgIHRvcG1vc3QgPSB0aGlzLmlzVG9wbW9zdCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocmVhZE9ubHksIHRvcG1vc3QpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gcmVhZE9ubHk9e3JlYWRPbmx5fSB0b3Btb3N0PXt0b3Btb3N0fSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG4gIGZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY2FsbGJhY2soZW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2hEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpOyB9XG5cbiAgZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmaW5kRW50cnlJdGVtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsOyAvLy87XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbXNCeVR5cGVzKC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZmlsdGVyKGVudHJ5SXRlbXMsIChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXM7XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeVR5cGVzKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAuLi50eXBlcykgfHwgbnVsbDtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbShuYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREcmFnRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5maW5kRW50cnlJdGVtc0J5VHlwZXMoRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtcyA9IGVudHJ5SXRlbXM7ICAvLy9cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlsZU5hbWUsICAvLy9cbiAgICAgICAgICBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSkge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKGRpcmVjdG9yeU5hbWUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyhkcmFnRW50cnlJdGVtcyA9IFtdKSB7XG4gICAgdGhpcy5mb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zKTtcblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1zLnB1c2goZHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICByZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMoZmlsZU5hbWVEcmFnRW50cnlJdGVtcyA9IFtdKSB7XG4gICAgdGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbSgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbS5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgIGlmIChkcmFnRW50cnlJdGVtRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMoZmlsZU5hbWVEcmFnRW50cnlJdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtcy5wdXNoKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IFtdKSB7XG4gICAgdGhpcy5mb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyhkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMpO1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMucHVzaChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gZ2V0TWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVFZGl0YWJsZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgZHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlZGl0YWJsZURyYWdFbnRyeUl0ZW0gPSBkcmFnRW50cnlJdGVtcy5maW5kKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGl0YWJsZSA9IGRyYWdFbnRyeUl0ZW0uaXNFZGl0YWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAoZWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlZGl0YWJsZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IGRyYWdFbnRyeUl0ZW1zLmZpbmQoKGRyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZHJhZ0VudHJ5SXRlbS5pc1NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtcy5maW5kKChmaWxlTmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcygpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmZpbmQoKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPT09IGRpcmVjdG9yeVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcblx0ICB0aGlzLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0ZXhwYW5kKCkge1xuXHQgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0xpc3QgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNlbGVjdFBhdGggPSB0aGlzLnNlbGVjdFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEVudHJ5SXRlbSA9IHRoaXMuYWRkRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlQWxsUGF0aHMgPSB0aGlzLnJlbW92ZUFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRW50cnlJdGVtID0gdGhpcy5yZW1vdmVFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICBkZXNlbGVjdEFsbFBhdGhzID0gdGhpcy5kZXNlbGVjdEFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVFZGl0YWJsZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgYWRkTWFya2VyLFxuICAgICAgc2VsZWN0UGF0aCxcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgYWRkRW50cnlJdGVtLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIHJlbW92ZUVudHJ5SXRlbSxcbiAgICAgIGRlc2VsZWN0QWxsUGF0aHMsXG4gICAgICBhZGREaXJlY3RvcnlQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcbiAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZUVkaXRhYmxlRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRmlsZU5hbWVEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zLFxuICAgICAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsImdldE1hcmtlckVudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbSIsImdsb2JhbFRoaXMiLCJzZXRNYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJyZXNldE1hcmtlckVudHJ5SXRlbSIsIkVudHJpZXNMaXN0IiwiaXNUb3Btb3N0IiwicHJvcGVydGllcyIsInRvcG1vc3QiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0RW50cnlJdGVtcyIsImNoaWxkRW50cnlJdGVtRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZW50cnlJdGVtcyIsImdldEVudHJ5SXRlbXNMZW5ndGgiLCJlbnRyeUl0ZW1zTGVuZ3RoIiwibGVuZ3RoIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJoYXNDbGFzcyIsImlzRW1wdHkiLCJlbXB0eSIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVNYXJrZXIiLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJzZWxlY3RQYXRoIiwicGF0aCIsImRyYWdFbnRyeUl0ZW0iLCJuYW1lIiwiZmluZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3QiLCJmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsImV4cGFuZCIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJyZWFkT25seSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lIiwiZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEVudHJ5SXRlbSIsImNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzIiwicmVtb3ZlRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJyZW1vdmVBbGxQYXRocyIsInJlbW92ZUVudHJ5SXRlbXMiLCJkZXNlbGVjdEFsbFBhdGhzIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImRlc2VsZWN0IiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWUiLCJjb2xsYXBzZSIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibW91bnRlZCIsImlzTW91bnRlZCIsIm5leHRFbnRyeUl0ZW0iLCJwcmV2aW91c0VudHJ5SXRlbSIsImZpbmRFbnRyeUl0ZW0iLCJuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsIm1vdW50IiwiYWRkIiwibW91bnRCZWZvcmUiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwicmVtb3ZlIiwidHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsInJlc2V0RHJvcEVsZW1lbnQiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMiLCJjYWxsYmFjayIsInR5cGVzIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJ0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSIsImluY2x1ZGVzIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmluZCIsImZpbmRFbnRyeUl0ZW1CeVR5cGVzIiwicmVzdWx0IiwiZmluZEVudHJ5SXRlbXNCeVR5cGVzIiwiZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzIiwiZW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJmaW5kRHJhZ0VudHJ5SXRlbXMiLCJwdXNoIiwicmV0cmlldmVGaWxlTmFtZURyYWdFbnRyeUl0ZW1zIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW1EaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRWRpdGFibGVEcmFnRW50cnlJdGVtIiwiZWRpdGFibGVEcmFnRW50cnlJdGVtIiwiZWRpdGFibGUiLCJpc0VkaXRhYmxlIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJyZXRyaWV2ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRQYXRoIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwicGFyZW50Q29udGV4dCIsImV4cGFuZEVudHJpZXNMaXN0IiwiYmluZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK3JCQTs7O2VBQUE7OztvRUE3ckJzQjtvQkFFRTt5QkFDc0I7c0JBRVA7MEJBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUUsSUFBTSxBQUFFQSxTQUFXQyx5QkFBYyxDQUF6QkQsUUFDQUUsK0JBQTBFQyx3QkFBYSxDQUF2RkQsOEJBQThCRSwwQ0FBNENELHdCQUFhLENBQXpEQztBQUV0QyxTQUFTQztJQUNQLElBQU0sQUFBRUMsa0JBQW9CQyxXQUFwQkQ7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU0UsbUJBQW1CRixlQUFlO0lBQ3pDRyxPQUFPQyxNQUFNLENB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