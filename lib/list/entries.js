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
var EntriesList = /*#__PURE__*/ function(Element1) {
    _inherits(EntriesList, Element1);
    function EntriesList() {
        _classCallCheck(this, EntriesList);
        return _possibleConstructorReturn(this, _getPrototypeOf(EntriesList).apply(this, arguments));
    }
    _createClass(EntriesList, [
        {
            key: "isTopmost",
            value: function isTopmost() {
                var _properties = this.properties, topmost = _properties.topmost;
                return topmost;
            }
        },
        {
            key: "getExplorer",
            value: function getExplorer() {
                var _properties = this.properties, explorer = _properties.explorer;
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
            value: function addFilePath(filePath, param) {
                var collapsed = param === void 0 ? false : param;
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
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                    filePath = filePathWithoutTopmostDirectoryName; ///
                    fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath, collapsed);
                }
                return fileNameDragEntryItem;
            }
        },
        {
            key: "removeFilePath",
            value: function removeFilePath(filePath) {
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
                        topmostDirectoryNameDragEntryItem.removeFilePath(filePath);
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
                var collapsed = param === void 0 ? false : param;
                var directoryNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryName === null) {
                    var directoryName = directoryPath; ///
                    directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem === null) {
                        var collapsed1 = false;
                        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed1);
                        this.addEntryItem(directoryNameDragEntryItem);
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
                        topmostDirectoryNameDragEntryItem.removeDirectoryPath(directoryPath);
                    }
                }
            }
        },
        {
            key: "addEntryItem",
            value: function addEntryItem(entryItem) {
                var explorer = this.getExplorer(), nextEntryItem = entryItem, previousEntryItem = this.findEntryItem(function(entryItem1) {
                    var nextEntryBeforeEntryItem = nextEntryItem.isBefore(entryItem1);
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
                var entryItems = this.getEntryItems();
                entryItems.forEach((function(entryItem) {
                    return this.removeEntryItem(entryItem);
                }).bind(this));
            }
        },
        {
            key: "addMarkerEntryItem",
            value: function addMarkerEntryItem(markerEntryItemName, dragEntryItemType) {
                var markerEntryItem1;
                var name = markerEntryItemName, type = dragEntryItemType; ///
                switch(type){
                    case _types.FILE_NAME_DRAG_TYPE:
                        {
                            var explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem1 = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        {
                            var explorer = this.getExplorer(), DirectoryNameMarkerEntryItem = explorer.getDirectoryNameMarkerEntryItem(), directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
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
                var markerEntryItem1 = this.retrieveMarkerEntryItem();
                markerEntryItem1.remove();
                markerEntryItem1 = null;
                Object.assign(globalThis, {
                    markerEntryItem: markerEntryItem1
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
            value: function createDirectoryNameDragEntryItem(directoryName, collapsed2) {
                var name = directoryName, explorer = this.getExplorer(), DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(), directoryNameDragEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryItem, {
                    name: name,
                    collapsed: collapsed2,
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
                var entryItems = this.getEntryItems(), entryItem = entryItems.find(function(entryItem1) {
                    var entryItemType = entryItem1.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        var result = callback(entryItem1);
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
                    function(entryItem1) {
                        var entryItemName = entryItem1.getName();
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
                var markerEntryItem1 = globalThis.markerEntryItem;
                return markerEntryItem1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZW50cmllc0xpc3RQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSBbXTtcblxuICAgIHRoaXMuZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtUGF0aDsgLy8vXG5cbiAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IFtdO1xuXG4gICAgdGhpcy5mb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXRQYXRoKCksXG4gICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoOyAvLy9cblxuICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgsIGNvbGxhcHNlZCA9IGZhbHNlKSB7XG5cdFx0bGV0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGg7ICAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgcmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxQYXRocygpIHtcbiAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbXMoKTtcbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkID0gZmFsc2UpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG5leHRFbnRyeUl0ZW0gPSBlbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICBwcmV2aW91c0VudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0gPSBuZXh0RW50cnlJdGVtLmlzQmVmb3JlKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocHJldmlvdXNFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwZW5kKGVudHJ5SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5SXRlbS5pbnNlcnRCZWZvcmUocHJldmlvdXNFbnRyeUl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGxvcmVyTW91bnRlZCA9IGV4cGxvcmVyLmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyTW91bnRlZCkge1xuICAgICAgY29uc3QgZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzID0gZW50cnlJdGVtLmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgICAgZW50cnlJdGVtRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAgIGVudHJ5SXRlbSxcbiAgICAgICAgICAgICAgLi4uZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgICBdO1xuXG4gICAgICBlbnRyeUl0ZW1FbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLmZvckVhY2goKGVudHJ5SXRlbUVsZW1lbnQpID0+IChlbnRyeUl0ZW1FbGVtZW50LmRpZE1vdW50ICYmIGVudHJ5SXRlbUVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGV4cGxvcmVyTW91bnRlZCA9IGV4cGxvcmVyLmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyTW91bnRlZCkge1xuICAgICAgY29uc3QgZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzID0gZW50cnlJdGVtLmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgICAgZW50cnlJdGVtRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAgIGVudHJ5SXRlbSxcbiAgICAgICAgICAgICAgLi4uZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgICBdO1xuXG4gICAgICBlbnRyeUl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbnRyeUl0ZW1FbGVtZW50KSA9PiAoZW50cnlJdGVtRWxlbWVudC53aWxsVW5tb3VudCAmJiBlbnRyeUl0ZW1FbGVtZW50LndpbGxVbm1vdW50KCkpKTsgIC8vL1xuICAgIH1cblxuICAgIGVudHJ5SXRlbS5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbXMoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHRoaXMucmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkpO1xuICB9XG5cbiAgYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbTtcblxuICAgIGNvbnN0IG5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1OYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gZHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfRFJBR19UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeUl0ZW0gPSBtYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgdGhpcy5hZGRFbnRyeUl0ZW0oZW50cnlJdGVtKTtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbS5yZW1vdmUoKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGRpcmVjdG9yeU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gY29sbGFwc2VkPXtjb2xsYXBzZWR9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG4gIGZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY2FsbGJhY2soZW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2hEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSk7IH1cblxuICBmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSk7IH1cblxuICBzb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRW50cnlJdGVtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICBlbnRyeUl0ZW0gPSBlbnRyeUl0ZW1zLmZpbmQoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDsgLy8vO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlsZU5hbWUsICAvLy9cbiAgICAgICAgICBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19UWVBFKSxcbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSkge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKGRpcmVjdG9yeU5hbWUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cbiAgICBpZiAodG9wbW9zdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0RmlsZVBhdGhzID0gdGhpcy5nZXRGaWxlUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXREaXJlY3RvcnlQYXRocyA9IHRoaXMuZ2V0RGlyZWN0b3J5UGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEZpbGVQYXRoID0gdGhpcy5hZGRGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZU1hcmtlciA9IHRoaXMucmVtb3ZlTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlQWxsUGF0aHMgPSB0aGlzLnJlbW92ZUFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0uYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0xpc3QsXG4gICAgICBjb2xsYXBzZUVudHJpZXNMaXN0LFxuICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBnZXRGaWxlUGF0aHMsXG4gICAgICBnZXREaXJlY3RvcnlQYXRocyxcbiAgICAgIGFkZE1hcmtlcixcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICByZW1vdmVBbGxQYXRocyxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICByZW1vdmVEaXJlY3RvcnlQYXRoLFxuICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVxuXHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHRhZ05hbWUgPSBcInVsXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwidG9wbW9zdFwiLFxuICAgIFwiZXhwbG9yZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyaWVzTGlzdClgXG5cbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAke2VudHJpZXNMaXN0UGFkZGluZ0xlZnR9O1xuICBcbiAgLnRvcG1vc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0EsVUFBVztJQUVGLE9BQVc7SUFDWSxNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBa2hCbEMseUNBR3RCO1NBQXlCLHFHQVV6Qzs7Ozs7OztJQTdoQlEsNEJBQTRCLEdBTE4sVUFBVyxlQUtqQyw0QkFBNEIsRUFBRSx1Q0FBdUMsR0FML0MsVUFBVyxlQUtILHVDQUF1QztJQUV2RSxlQUFlLEdBQUcsSUFBSTtBQUU1QixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVU7SUFDdEIsZUFBZSxFQUFmLGVBQWU7O0lBR1gsV0FBVztjQUFYLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7Z0VBQVgsV0FBVzs7aUJBQVgsV0FBVzs7WUFDZixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTO29CQUNhLFdBQWUsUUFBVixVQUFVLEVBQTNCLE9BQU8sR0FBSyxXQUFlLENBQTNCLE9BQU87dUJBRVIsT0FBTzs7OztZQUdoQixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNVLFdBQWUsUUFBVixVQUFVLEVBQTVCLFFBQVEsR0FBSyxXQUFlLENBQTVCLFFBQVE7dUJBRVQsUUFBUTs7OztZQUdoQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNOLHNCQUFzQixRQUFRLGdCQUFnQixFQUFDLFFBQVUsSUFDNUQsVUFBVSxHQUFHLHNCQUFzQixDQUFHLENBQUcsQUFB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