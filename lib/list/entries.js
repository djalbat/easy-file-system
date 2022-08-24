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
var _easy = require("easy");
var _necessary = require("necessary");
var _styles = require("../styles");
var _entryTypes = require("../entryTypes");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
        "\n\n  list-style: none;\n  padding-left: ",
        ";\n  \n  .topmost {\n    padding-left: 0;\n  }\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
var markerEntryItem = null;
Object.assign(globalThis, {
    markerEntryItem: markerEntryItem
});
var EntriesList = /*#__PURE__*/ function(Element) {
    _inherits(EntriesList, Element);
    var _super = _createSuper(EntriesList);
    function EntriesList() {
        _classCallCheck(this, EntriesList);
        return _super.apply(this, arguments);
    }
    _createClass(EntriesList, [
        {
            key: "isTopmost",
            value: function isTopmost() {
                var topmost = this.properties.topmost;
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
            key: "addFilePath",
            value: function addFilePath(filePath) {
                var fileNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath);
                if (topmostDirectoryName === null) {
                    var fileName = filePath; ///
                    fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
                    if (fileNameDragEntryItem === null) {
                        fileNameDragEntryItem = this.createFileNameDragEntryItem(fileName);
                        this.addEntryItem(fileNameDragEntryItem);
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        var collapsed = true;
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                    filePath = filePathWithoutTopmostDirectoryName; ///
                    fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath);
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
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath) {
                var collapsed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var directoryNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryName === null) {
                    var directoryName = directoryPath; ///
                    directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem === null) {
                        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed);
                        this.addEntryItem(directoryNameDragEntryItem);
                    } else {
                        collapsed ? directoryNameDragEntryItem.collapse() : directoryNameDragEntryItem.expand();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);
                    directoryPath = directoryPathWithoutTopmostDirectoryName; ///
                    directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem.addDirectoryPath(directoryPath, collapsed);
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
                var explorer = this.getExplorer(), nextEntryItem = entryItem, previousEntryItem = this.findEntryItem(function(entryItem) {
                    var nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);
                    if (nextEntryBeforeEntryItem) {
                        return true;
                    }
                });
                if (previousEntryItem === null) {
                    this.append(entryItem);
                } else {
                    entryItem.insertBefore(previousEntryItem);
                }
                var explorerMounted = explorer.isMounted();
                if (explorerMounted) {
                    var entryItemDescendantElements = entryItem.getDescendantElements(), entryItemElements = [
                        entryItem
                    ].concat(_toConsumableArray(entryItemDescendantElements));
                    entryItemElements.reverse();
                    entryItemElements.forEach(function(entryItemElement) {
                        return entryItemElement.didMount && entryItemElement.didMount();
                    }); ///
                }
            }
        },
        {
            key: "removeEntryItem",
            value: function removeEntryItem(entryItem) {
                var explorer = this.getExplorer(), explorerMounted = explorer.isMounted();
                if (explorerMounted) {
                    var entryItemDescendantElements = entryItem.getDescendantElements(), entryItemElements = [
                        entryItem
                    ].concat(_toConsumableArray(entryItemDescendantElements));
                    entryItemElements.forEach(function(entryItemElement) {
                        return entryItemElement.willUnmount && entryItemElement.willUnmount();
                    }); ///
                }
                entryItem.remove();
            }
        },
        {
            key: "removeEntryItems",
            value: function removeEntryItems() {
                var _this = this;
                var entryItems = this.getEntryItems();
                entryItems.forEach(function(entryItem) {
                    return _this.removeEntryItem(entryItem);
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
            value: function createFileNameDragEntryItem(fileName) {
                var name = fileName, explorer = this.getExplorer(), FileNameDragEntryItem = explorer.getFileNameDragEntryItem(), fileNameDragEntryItem = /*#__PURE__*/ React.createElement(FileNameDragEntryItem, {
                    name: name,
                    explorer: explorer
                });
                return fileNameDragEntryItem;
            }
        },
        {
            key: "createDirectoryNameDragEntryItem",
            value: function createDirectoryNameDragEntryItem(directoryName, collapsed) {
                var name = directoryName, explorer = this.getExplorer(), DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(), directoryNameDragEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryItem, {
                    name: name,
                    collapsed: collapsed,
                    explorer: explorer
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
                ].concat(_toConsumableArray(types))) || null;
                return entryItem;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
                    addFilePath: addFilePath,
                    removeMarker: removeMarker,
                    removeFilePath: removeFilePath,
                    removeAllPaths: removeAllPaths,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    forEachDragEntryItem: forEachDragEntryItem,
                    retrieveDragEntryItems: retrieveDragEntryItems,
                    retrieveMarkerEntryItem: retrieveMarkerEntryItem
                };
            }
        }
    ]);
    return EntriesList;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(EntriesList, "tagName", "ul");
_defineProperty(EntriesList, "ignoredProperties", [
    "topmost",
    "explorer"
]);
_defineProperty(EntriesList, "defaultProperties", {
    className: "entries"
});
var _default = (0, _easyWithStyle.default)(EntriesList)(_templateObject(), _styles.entriesListPaddingLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZW50cmllc0xpc3RQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgbWFya2VyRW50cnlJdGVtXG59KTtcblxuY2xhc3MgRW50cmllc0xpc3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNUb3Btb3N0KCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHRvcG1vc3Q7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zTGVuZ3RoKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW1zTGVuZ3RoID0gZW50cnlJdGVtcy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtc0xlbmd0aDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5SXRlbXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKSxcbiAgICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gdHJ1ZTtcblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG4gICAgfVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbXMoKTtcbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkID0gdHJ1ZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZCA/XG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY29sbGFwc2UoKSA6XG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuZXh0RW50cnlJdGVtID0gZW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNFbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtID0gbmV4dEVudHJ5SXRlbS5pc0JlZm9yZShlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZXZpb3VzRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLmFwcGVuZChlbnRyeUl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUl0ZW0uaW5zZXJ0QmVmb3JlKHByZXZpb3VzRW50cnlJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50cyA9IGVudHJ5SXRlbS5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICAgIGVudHJ5SXRlbUVsZW1lbnRzID0gW1xuICAgICAgICAgICAgICBlbnRyeUl0ZW0sXG4gICAgICAgICAgICAgIC4uLmVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgICAgXTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgICBlbnRyeUl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbnRyeUl0ZW1FbGVtZW50KSA9PiAoZW50cnlJdGVtRWxlbWVudC5kaWRNb3VudCAmJiBlbnRyeUl0ZW1FbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50cyA9IGVudHJ5SXRlbS5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICAgIGVudHJ5SXRlbUVsZW1lbnRzID0gW1xuICAgICAgICAgICAgICBlbnRyeUl0ZW0sXG4gICAgICAgICAgICAgIC4uLmVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgICAgXTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMuZm9yRWFjaCgoZW50cnlJdGVtRWxlbWVudCkgPT4gKGVudHJ5SXRlbUVsZW1lbnQud2lsbFVubW91bnQgJiYgZW50cnlJdGVtRWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cbiAgICB9XG5cbiAgICBlbnRyeUl0ZW0ucmVtb3ZlKCk7XG4gIH1cblxuICByZW1vdmVFbnRyeUl0ZW1zKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB0aGlzLnJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pKTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0ucmVtb3ZlKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuXHRcdGNvbnN0IG5hbWUgPSBmaWxlTmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuXHRpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZmlsZU5hbWUpIHtcblx0XHRjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cblx0aXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZGlyZWN0b3J5TmFtZSkge1xuXHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuICBmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNhbGxiYWNrKGVudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpOyB9XG5cbiAgZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpOyB9XG5cbiAgc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXMuc29tZSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbShjYWxsYmFjaykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW0gPSBlbnRyeUl0ZW1zLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeVR5cGVzKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAuLi50eXBlcykgfHwgbnVsbDtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGZpbGVOYW1lLCAgLy8vXG4gICAgICAgICAgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMgPSBbXSkge1xuICAgIHRoaXMuZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVEcmFnRW50cnlJdGVtcyhkcmFnRW50cnlJdGVtcyk7XG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1zLnB1c2goZHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cbiAgICBpZiAodG9wbW9zdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUFsbFBhdGhzID0gdGhpcy5yZW1vdmVBbGxQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVEaXJlY3RvcnlQYXRoID0gdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0gPSB0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbS5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG4gICAgICBleHBhbmRFbnRyaWVzTGlzdCxcbiAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QsXG4gICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkLFxuICAgICAgaXNFbXB0eSxcbiAgICAgIGFkZE1hcmtlcixcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICByZW1vdmVEaXJlY3RvcnlQYXRoLFxuICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLFxuICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW1cblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInRvcG1vc3RcIixcbiAgICBcImV4cGxvcmVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cmllc0xpc3QpYFxuXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogJHtlbnRyaWVzTGlzdFBhZGRpbmdMZWZ0fTtcbiAgXG4gIC50b3Btb3N0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIC5jb2xsYXBzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIm1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJFbnRyaWVzTGlzdCIsImlzVG9wbW9zdCIsInRvcG1vc3QiLCJwcm9wZXJ0aWVzIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsImdldEVudHJ5SXRlbXMiLCJjaGlsZEVudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImVudHJ5SXRlbXMiLCJnZXRFbnRyeUl0ZW1zTGVuZ3RoIiwiZW50cnlJdGVtc0xlbmd0aCIsImxlbmd0aCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VkIiwiaGFzQ2xhc3MiLCJpc0VtcHR5IiwiZW1wdHkiLCJhZGRNYXJrZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwiYWRkRmlsZVBhdGgiLCJmaWxlUGF0aCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lIiwiZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEVudHJ5SXRlbSIsImNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMiLCJyZW1vdmVFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsInJlbW92ZUFsbFBhdGhzIiwicmVtb3ZlRW50cnlJdGVtcyIsImFkZERpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lIiwiY29sbGFwc2UiLCJleHBhbmQiLCJkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlRGlyZWN0b3J5UGF0aCIsImVudHJ5SXRlbSIsIm5leHRFbnRyeUl0ZW0iLCJwcmV2aW91c0VudHJ5SXRlbSIsImZpbmRFbnRyeUl0ZW0iLCJuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImFwcGVuZCIsImluc2VydEJlZm9yZSIsImV4cGxvcmVyTW91bnRlZCIsImlzTW91bnRlZCIsImVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImVudHJ5SXRlbUVsZW1lbnRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJlbnRyeUl0ZW1FbGVtZW50IiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInJlbW92ZSIsIm5hbWUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzIiwiY2FsbGJhY2siLCJ0eXBlcyIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwidHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUiLCJpbmNsdWRlcyIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInNvbWVFbnRyeUl0ZW1CeVR5cGVzIiwic29tZSIsInJlc3VsdCIsImZpbmQiLCJmaW5kRW50cnlJdGVtQnlUeXBlcyIsImZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyIsImVudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwicmV0cmlldmVEcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW1zIiwiZHJhZ0VudHJ5SXRlbSIsInB1c2giLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImV4cGFuZEVudHJpZXNMaXN0IiwiYmluZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQW9pQmIsU0FhRTs7O2VBYkYsUUFhRTs7O2tFQS9pQm9CLGlCQUFpQjtvQkFFZixNQUFNO3lCQUNBLFdBQVc7c0JBRUYsV0FBVzswQkFDd0IsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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