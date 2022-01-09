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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZW50cmllc0xpc3RQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSB9IGZyb20gXCIuLi9lbnRyeVR5cGVzXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgbWFya2VyRW50cnlJdGVtXG59KTtcblxuY2xhc3MgRW50cmllc0xpc3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNUb3Btb3N0KCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHRvcG1vc3Q7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zTGVuZ3RoKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW1zTGVuZ3RoID0gZW50cnlJdGVtcy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtc0xlbmd0aDtcbiAgfVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5SXRlbXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKSxcbiAgICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gdHJ1ZTtcblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG4gICAgfVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbXMoKTtcbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkID0gdHJ1ZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZCA/XG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uY29sbGFwc2UoKSA6XG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5leHBhbmQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuZXh0RW50cnlJdGVtID0gZW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNFbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtID0gbmV4dEVudHJ5SXRlbS5pc0JlZm9yZShlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZXZpb3VzRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLmFwcGVuZChlbnRyeUl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUl0ZW0uaW5zZXJ0QmVmb3JlKHByZXZpb3VzRW50cnlJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50cyA9IGVudHJ5SXRlbS5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICAgIGVudHJ5SXRlbUVsZW1lbnRzID0gW1xuICAgICAgICAgICAgICBlbnRyeUl0ZW0sXG4gICAgICAgICAgICAgIC4uLmVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgICAgXTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgICBlbnRyeUl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbnRyeUl0ZW1FbGVtZW50KSA9PiAoZW50cnlJdGVtRWxlbWVudC5kaWRNb3VudCAmJiBlbnRyeUl0ZW1FbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50cyA9IGVudHJ5SXRlbS5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICAgIGVudHJ5SXRlbUVsZW1lbnRzID0gW1xuICAgICAgICAgICAgICBlbnRyeUl0ZW0sXG4gICAgICAgICAgICAgIC4uLmVudHJ5SXRlbURlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgICAgXTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMuZm9yRWFjaCgoZW50cnlJdGVtRWxlbWVudCkgPT4gKGVudHJ5SXRlbUVsZW1lbnQud2lsbFVubW91bnQgJiYgZW50cnlJdGVtRWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cbiAgICB9XG5cbiAgICBlbnRyeUl0ZW0ucmVtb3ZlKCk7XG4gIH1cblxuICByZW1vdmVFbnRyeUl0ZW1zKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB0aGlzLnJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pKTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0ucmVtb3ZlKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuXHRcdGNvbnN0IG5hbWUgPSBmaWxlTmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuXHRpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZmlsZU5hbWUpIHtcblx0XHRjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cblx0aXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZGlyZWN0b3J5TmFtZSkge1xuXHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuICBmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNhbGxiYWNrKGVudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpOyB9XG5cbiAgZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpOyB9XG5cbiAgc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXMuc29tZSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbShjYWxsYmFjaykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW0gPSBlbnRyeUl0ZW1zLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeVR5cGVzKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAuLi50eXBlcykgfHwgbnVsbDtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGZpbGVOYW1lLCAgLy8vXG4gICAgICAgICAgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAvLy9cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IHsgbWFya2VyRW50cnlJdGVtIH0gPSBnbG9iYWxUaGlzO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMgPSBbXSkge1xuICAgIHRoaXMuZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVEcmFnRW50cnlJdGVtcyhkcmFnRW50cnlJdGVtcyk7XG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1zLnB1c2goZHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZHJhZ0VudHJ5SXRlbSA9IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cbiAgICBpZiAodG9wbW9zdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUFsbFBhdGhzID0gdGhpcy5yZW1vdmVBbGxQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVEaXJlY3RvcnlQYXRoID0gdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0gPSB0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbS5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG4gICAgICBleHBhbmRFbnRyaWVzTGlzdCxcbiAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QsXG4gICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkLFxuICAgICAgaXNFbXB0eSxcbiAgICAgIGFkZE1hcmtlcixcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICByZW1vdmVEaXJlY3RvcnlQYXRoLFxuICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLFxuICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW1cblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInRvcG1vc3RcIixcbiAgICBcImV4cGxvcmVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cmllc0xpc3QpYFxuXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogJHtlbnRyaWVzTGlzdFBhZGRpbmdMZWZ0fTtcbiAgXG4gIC50b3Btb3N0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIC5jb2xsYXBzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwibWFya2VyRW50cnlJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2xvYmFsVGhpcyIsIkVudHJpZXNMaXN0IiwiaXNUb3Btb3N0IiwidG9wbW9zdCIsInByb3BlcnRpZXMiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwiZ2V0RW50cnlJdGVtcyIsImNoaWxkRW50cnlJdGVtRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZW50cnlJdGVtcyIsImdldEVudHJ5SXRlbXNMZW5ndGgiLCJlbnRyeUl0ZW1zTGVuZ3RoIiwibGVuZ3RoIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJoYXNDbGFzcyIsImlzRW1wdHkiLCJlbXB0eSIsImFkZE1hcmtlciIsIm1hcmtlckVudHJ5SXRlbVBhdGgiLCJkcmFnRW50cnlJdGVtVHlwZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwibWFya2VyRW50cnlJdGVtTmFtZSIsImFkZE1hcmtlckVudHJ5SXRlbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsIm1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVNYXJrZXIiLCJyZW1vdmVNYXJrZXJFbnRyeUl0ZW0iLCJhZGRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWUiLCJmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZUZpbGVQYXRoIiwicmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyIsInJlbW92ZUVudHJ5SXRlbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwicmVtb3ZlQWxsUGF0aHMiLCJyZW1vdmVFbnRyeUl0ZW1zIiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWUiLCJjb2xsYXBzZSIsImV4cGFuZCIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibmV4dEVudHJ5SXRlbSIsInByZXZpb3VzRW50cnlJdGVtIiwiZmluZEVudHJ5SXRlbSIsIm5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSIsImlzQmVmb3JlIiwiYXBwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiZXhwbG9yZXJNb3VudGVkIiwiaXNNb3VudGVkIiwiZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZW50cnlJdGVtRWxlbWVudHMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImVudHJ5SXRlbUVsZW1lbnQiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwicmVtb3ZlIiwibmFtZSIsInR5cGUiLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyIsImNhbGxiYWNrIiwidHlwZXMiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlIiwiaW5jbHVkZXMiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsImZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJzb21lRW50cnlJdGVtQnlUeXBlcyIsInNvbWUiLCJyZXN1bHQiLCJmaW5kIiwiZmluZEVudHJ5SXRlbUJ5VHlwZXMiLCJmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMiLCJlbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJkcmFnRW50cnlJdGVtcyIsImRyYWdFbnRyeUl0ZW0iLCJwdXNoIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJleHBhbmRFbnRyaWVzTGlzdCIsImJpbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDQSxHQUFXLENBQVgsVUFBVztBQUVGLEdBQVcsQ0FBWCxPQUFXO0FBQ3dCLEdBQWUsQ0FBZixXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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