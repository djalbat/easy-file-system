"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _necessary = require("necessary");
var _styles = require("../styles");
var _types = require("../types");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var markerEntryItem1 = null;
Object.assign(globalThis, {
    markerEntryItem: markerEntryItem1
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
            key: "getFilePaths",
            value: function getFilePaths() {
                var filePaths = [];
                this.forEachFileNameDragEntryItem(function(fileNameDragEntryItem) {
                    var fileNameDragEntryItemPath = fileNameDragEntryItem.getPath(), filePath = fileNameDragEntryItemPath; ///
                    filePaths.push(filePath);
                });
                return filePaths;
            }
        },
        {
            key: "getDirectoryPaths",
            value: function getDirectoryPaths() {
                var directoryPaths = [];
                this.forEachDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                    var directoryNameDragEntryItemPath = directoryNameDragEntryItem.getPath(), directoryPath = directoryNameDragEntryItemPath; ///
                    directoryPaths.push(directoryPath);
                });
                return directoryPaths;
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
            value: function removeFilePath(filePath, param) {
                var removeEmptyParentDirectories = param === void 0 ? false : param;
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
            value: function addDirectoryPath(directoryPath, param) {
                var collapsed = param === void 0 ? true : param;
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
            value: function removeDirectoryPath(directoryPath, param) {
                var removeEmptyParentDirectories = param === void 0 ? false : param;
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
                var markerEntryItem;
                var name = markerEntryItemName, type = dragEntryItemType; ///
                switch(type){
                    case _types.FILE_NAME_DRAG_TYPE:
                        {
                            var explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
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
                this.forEachEntryItemByTypes(callback, _types.FILE_NAME_DRAG_TYPE, _types.DIRECTORY_NAME_DRAG_TYPE);
            }
        },
        {
            key: "forEachFileNameDragEntryItem",
            value: function forEachFileNameDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _types.FILE_NAME_DRAG_TYPE);
            }
        },
        {
            key: "forEachDirectoryNameDragEntryItem",
            value: function forEachDirectoryNameDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _types.DIRECTORY_NAME_DRAG_TYPE);
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
                var name = fileName, entryItem = this.findEntryItemByNameAndTypes(name, _types.FILE_NAME_DRAG_TYPE), fileNameDragEntryItem = entryItem; ///
                return fileNameDragEntryItem;
            }
        },
        {
            key: "findDirectoryNameDragEntryItem",
            value: function findDirectoryNameDragEntryItem(directoryName) {
                var entryItem = this.findEntryItemByNameAndTypes(directoryName, _types.DIRECTORY_NAME_DRAG_TYPE), directoryNameDragEntryItem = entryItem; ///
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), getFilePaths = this.getFilePaths.bind(this), getDirectoryPaths = this.getDirectoryPaths.bind(this), addMarker = this.addMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
                    getFilePaths: getFilePaths,
                    getDirectoryPaths: getDirectoryPaths,
                    addMarker: addMarker,
                    addFilePath: addFilePath,
                    removeMarker: removeMarker,
                    removeFilePath: removeFilePath,
                    removeAllPaths: removeAllPaths,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    forEachDragEntryItem: forEachDragEntryItem,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZW50cmllc0xpc3RQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSBbXTtcblxuICAgIHRoaXMuZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICAgIH1cblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWxsUGF0aHMoKSB7XG4gICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW1zKCk7XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCA9IHRydWUpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlJdGVtLmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMgPSBlbnRyeUl0ZW0uZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgICBlbnRyeUl0ZW1FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlJdGVtLFxuICAgICAgICAgICAgICAuLi5lbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMuZm9yRWFjaCgoZW50cnlJdGVtRWxlbWVudCkgPT4gKGVudHJ5SXRlbUVsZW1lbnQuZGlkTW91bnQgJiYgZW50cnlJdGVtRWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMgPSBlbnRyeUl0ZW0uZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgICBlbnRyeUl0ZW1FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlJdGVtLFxuICAgICAgICAgICAgICAuLi5lbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLmZvckVhY2goKGVudHJ5SXRlbUVsZW1lbnQpID0+IChlbnRyeUl0ZW1FbGVtZW50LndpbGxVbm1vdW50ICYmIGVudHJ5SXRlbUVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG4gICAgfVxuXG4gICAgZW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4gdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuXHRjcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsOyAvLy87XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlUeXBlcygoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGVudHJ5SXRlbU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgLi4udHlwZXMpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcblx0ICB0aGlzLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0ZXhwYW5kKCkge1xuXHQgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0xpc3QgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRGaWxlUGF0aHMgPSB0aGlzLmdldEZpbGVQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldERpcmVjdG9yeVBhdGhzID0gdGhpcy5nZXREaXJlY3RvcnlQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZE1hcmtlciA9IHRoaXMuYWRkTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlTWFya2VyID0gdGhpcy5yZW1vdmVNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVGaWxlUGF0aCA9IHRoaXMucmVtb3ZlRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVBbGxQYXRocyA9IHRoaXMucmVtb3ZlQWxsUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGREaXJlY3RvcnlQYXRoID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCA9IHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtID0gdGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbS5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG4gICAgICBleHBhbmRFbnRyaWVzTGlzdCxcbiAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QsXG4gICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkLFxuICAgICAgaXNFbXB0eSxcbiAgICAgIGdldEZpbGVQYXRocyxcbiAgICAgIGdldERpcmVjdG9yeVBhdGhzLFxuICAgICAgYWRkTWFya2VyLFxuXHRcdFx0YWRkRmlsZVBhdGgsXG4gICAgICByZW1vdmVNYXJrZXIsXG4gICAgICByZW1vdmVGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUFsbFBhdGhzLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG4gICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIm1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJFbnRyaWVzTGlzdCIsImlzVG9wbW9zdCIsInRvcG1vc3QiLCJwcm9wZXJ0aWVzIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsImdldEVudHJ5SXRlbXMiLCJjaGlsZEVudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImVudHJ5SXRlbXMiLCJnZXRFbnRyeUl0ZW1zTGVuZ3RoIiwiZW50cnlJdGVtc0xlbmd0aCIsImxlbmd0aCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VkIiwiaGFzQ2xhc3MiLCJpc0VtcHR5IiwiZW1wdHkiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aCIsInB1c2giLCJnZXREaXJlY3RvcnlQYXRocyIsImRpcmVjdG9yeVBhdGhzIiwiZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwiYWRkTWFya2VyIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImRyYWdFbnRyeUl0ZW1UeXBlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZU1hcmtlciIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsImFkZEZpbGVQYXRoIiwiZmlsZU5hbWUiLCJmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZUZpbGVQYXRoIiwicmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyIsInJlbW92ZUVudHJ5SXRlbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5IiwicmVtb3ZlQWxsUGF0aHMiLCJyZW1vdmVFbnRyeUl0ZW1zIiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWUiLCJjb2xsYXBzZSIsImV4cGFuZCIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibmV4dEVudHJ5SXRlbSIsInByZXZpb3VzRW50cnlJdGVtIiwiZmluZEVudHJ5SXRlbSIsIm5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSIsImlzQmVmb3JlIiwiYXBwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiZXhwbG9yZXJNb3VudGVkIiwiaXNNb3VudGVkIiwiZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZW50cnlJdGVtRWxlbWVudHMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImVudHJ5SXRlbUVsZW1lbnQiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwicmVtb3ZlIiwibmFtZSIsInR5cGUiLCJGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJyZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsIkRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyIsImNhbGxiYWNrIiwidHlwZXMiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsInR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlIiwiaW5jbHVkZXMiLCJmb3JFYWNoRHJhZ0VudHJ5SXRlbSIsInNvbWVFbnRyeUl0ZW1CeVR5cGVzIiwic29tZSIsInJlc3VsdCIsImZpbmQiLCJmaW5kRW50cnlJdGVtQnlUeXBlcyIsImZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyIsImVudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJleHBhbmRFbnRyaWVzTGlzdCIsImJpbmQiLCJjb2xsYXBzZUVudHJpZXNMaXN0IiwiaXNFbnRyaWVzTGlzdENvbGxhcHNlZCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxD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