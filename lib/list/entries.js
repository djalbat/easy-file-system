"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
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
            value: function addEntryItem(entryItem1) {
                var explorer = this.getExplorer(), nextEntryItem = entryItem1, previousEntryItem = this.findEntryItem(function(entryItem) {
                    var nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem);
                    if (nextEntryBeforeEntryItem) {
                        return true;
                    }
                });
                if (previousEntryItem === null) {
                    this.append(entryItem1);
                } else {
                    entryItem1.insertBefore(previousEntryItem);
                }
                var explorerMounted = explorer.isMounted();
                if (explorerMounted) {
                    var entryItemDescendantElements = entryItem1.getDescendantElements(), entryItemElements = [
                        entryItem1
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
                var markerEntryItem1;
                var name = markerEntryItemName, type = dragEntryItemType; ///
                switch(type){
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem1 = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer1 = this.getExplorer(), DirectoryNameMarkerEntryItem = explorer1.getDirectoryNameMarkerEntryItem(), directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer1
                            });
                            markerEntryItem1 = directoryNameMarkerEntryItem; ///
                            break;
                        }
                }
                var entryItem = markerEntryItem1; ///
                this.addEntryItem(entryItem);
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem1
                });
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                var markerEntryItem2 = this.retrieveMarkerEntryItem();
                markerEntryItem2.remove();
                markerEntryItem2 = null;
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem2
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
                var entryItems = this.getEntryItems(), entryItem2 = entryItems.find(function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        var result = callback(entryItem);
                        if (result) {
                            return true;
                        }
                    }
                }) || null; ///;
                return entryItem2;
            }
        },
        {
            key: "findEntryItemByNameAndTypes",
            value: function findEntryItemByNameAndTypes(name) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryItem3 = this.findEntryItemByTypes.apply(this, [
                    function(entryItem) {
                        var entryItemName = entryItem.getName();
                        if (entryItemName === name) {
                            return true;
                        }
                    }
                ].concat(_toConsumableArray(types))) || null;
                return entryItem3;
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
                var markerEntryItem3 = globalThis.markerEntryItem;
                return markerEntryItem3;
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
var _default = (0, _easyWithStyle).default(EntriesList)(_templateObject(), _styles.entriesListPaddingLeft);
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICAgIH1cblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWxsUGF0aHMoKSB7XG4gICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW1zKCk7XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCA9IHRydWUpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlJdGVtLmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMgPSBlbnRyeUl0ZW0uZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgICBlbnRyeUl0ZW1FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlJdGVtLFxuICAgICAgICAgICAgICAuLi5lbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMuZm9yRWFjaCgoZW50cnlJdGVtRWxlbWVudCkgPT4gKGVudHJ5SXRlbUVsZW1lbnQuZGlkTW91bnQgJiYgZW50cnlJdGVtRWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMgPSBlbnRyeUl0ZW0uZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgICBlbnRyeUl0ZW1FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlJdGVtLFxuICAgICAgICAgICAgICAuLi5lbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLmZvckVhY2goKGVudHJ5SXRlbUVsZW1lbnQpID0+IChlbnRyeUl0ZW1FbGVtZW50LndpbGxVbm1vdW50ICYmIGVudHJ5SXRlbUVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG4gICAgfVxuXG4gICAgZW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4gdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuXHRjcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsOyAvLy87XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlUeXBlcygoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGVudHJ5SXRlbU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgLi4udHlwZXMpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMpO1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKChmaWxlTmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuXHQgIHRoaXMuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuXHRleHBhbmQoKSB7XG5cdCAgdGhpcy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHRvcG1vc3QgPSB0aGlzLmlzVG9wbW9zdCgpO1xuXG4gICAgaWYgKHRvcG1vc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ0b3Btb3N0XCIpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBleHBhbmRFbnRyaWVzTGlzdCA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBjb2xsYXBzZUVudHJpZXNMaXN0ID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNFbXB0eSA9IHRoaXMuaXNFbXB0eS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZE1hcmtlciA9IHRoaXMuYWRkTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlTWFya2VyID0gdGhpcy5yZW1vdmVNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVGaWxlUGF0aCA9IHRoaXMucmVtb3ZlRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVBbGxQYXRocyA9IHRoaXMucmVtb3ZlQWxsUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGREaXJlY3RvcnlQYXRoID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCA9IHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtID0gdGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0uYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0xpc3QsXG4gICAgICBjb2xsYXBzZUVudHJpZXNMaXN0LFxuICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZU1hcmtlcixcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgcmVtb3ZlQWxsUGF0aHMsXG4gICAgICBhZGREaXJlY3RvcnlQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcbiAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhVdGlsaXRpZXMiLCJwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJtYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwiRW50cmllc0xpc3QiLCJpc1RvcG1vc3QiLCJ0b3Btb3N0IiwicHJvcGVydGllcyIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRFbnRyeUl0ZW1zIiwiY2hpbGRFbnRyeUl0ZW1FbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJlbnRyeUl0ZW1zIiwiZ2V0RW50cnlJdGVtc0xlbmd0aCIsImVudHJ5SXRlbXNMZW5ndGgiLCJsZW5ndGgiLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImhhc0NsYXNzIiwiaXNFbXB0eSIsImVtcHR5IiwiYWRkTWFya2VyIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImRyYWdFbnRyeUl0ZW1UeXBlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZU1hcmtlciIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZSIsImZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJjcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJhZGRFbnRyeUl0ZW0iLCJjcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzIiwicmVtb3ZlRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJyZW1vdmVBbGxQYXRocyIsInJlbW92ZUVudHJ5SXRlbXMiLCJhZGREaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZSIsImNvbGxhcHNlIiwiZXhwYW5kIiwiZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJlbnRyeUl0ZW0iLCJuZXh0RW50cnlJdGVtIiwicHJldmlvdXNFbnRyeUl0ZW0iLCJmaW5kRW50cnlJdGVtIiwibmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJhcHBlbmQiLCJpbnNlcnRCZWZvcmUiLCJleHBsb3Jlck1vdW50ZWQiLCJpc01vdW50ZWQiLCJlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJlbnRyeUl0ZW1FbGVtZW50cyIsInJldmVyc2UiLCJmb3JFYWNoIiwiZW50cnlJdGVtRWxlbWVudCIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJyZW1vdmUiLCJuYW1lIiwidHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyIsImNhbGxiYWNrIiwidHlwZXMiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlIiwiaW5jbHVkZXMiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsImZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJzb21lRW50cnlJdGVtQnlUeXBlcyIsInNvbWUiLCJyZXN1bHQiLCJmaW5kIiwiZmluZEVudHJ5SXRlbUJ5VHlwZXMiLCJmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMiLCJlbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJkcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW0iLCJwdXNoIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJleHBhbmRFbnRyaWVzTGlzdCIsImJpbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImVudHJpZXNMaXN0UGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVmLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FB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