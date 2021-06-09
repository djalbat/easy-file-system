"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _necessary = require("necessary");
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
        "\n\n  width: fit-content;\n  list-sty;e: none;\n  background-color: red;\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
var EntriesList = /*#__PURE__*/ function(Element1) {
    _inherits(EntriesList, Element1);
    function EntriesList() {
        _classCallCheck(this, EntriesList);
        return _possibleConstructorReturn(this, _getPrototypeOf(EntriesList).apply(this, arguments));
    }
    _createClass(EntriesList, [
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
                var fileNameDragEntryItem = null;
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath), topmostDirectoryNameDragEntryItem = this.findTopmostDirectoryNameDragEntryItem(), filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                if (topmostDirectoryNameDragEntryItem !== null) {
                    if (filePathWithoutTopmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryItemName = topmostDirectoryNameDragEntryItem.getName();
                        if (topmostDirectoryName === topmostDirectoryNameDragEntryItemName) {
                            filePath = filePathWithoutTopmostDirectoryName; ///
                            fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath);
                        }
                    }
                } else {
                    if (topmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryItem1 = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                        if (topmostDirectoryNameDragEntryItem1 === null) {
                            var collapsed = true; ///
                            topmostDirectoryNameDragEntryItem1 = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed);
                            this.addEntryItem(topmostDirectoryNameDragEntryItem1);
                        }
                        var filePath1 = filePathWithoutTopmostDirectoryName; ///
                        fileNameDragEntryItem = topmostDirectoryNameDragEntryItem1.addFilePath(filePath1);
                    } else {
                        var fileName = filePath, fileNameDragEntryItemPresent = this.isFileNameDragEntryItemPresent(fileName);
                        if (fileNameDragEntryItemPresent) {
                            fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
                        } else {
                            fileNameDragEntryItem = this.createFileNameDragEntryItem(fileName);
                            this.addEntryItem(fileNameDragEntryItem);
                        }
                    }
                }
                return fileNameDragEntryItem;
            }
        },
        {
            key: "removeFilePath",
            value: function removeFilePath(filePath2) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath2), filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath2);
                if (topmostDirectoryName !== null) {
                    var directoryName = topmostDirectoryName, directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem !== null) {
                        filePath2 = filePathWithoutTopmostDirectoryName; ///
                        directoryNameDragEntryItem.removeFilePath(filePath2);
                        var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = true; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
                        if (removeEmptyParentDirectoriesOptionPresent) {
                            var topmostDirectoryNameDragEntryItem2 = this.findTopmostDirectoryNameDragEntryItem();
                            if (directoryNameDragEntryItem !== topmostDirectoryNameDragEntryItem2) {
                                var directoryNameDragEntryItemEmpty = directoryNameDragEntryItem.isEmpty();
                                if (directoryNameDragEntryItemEmpty) {
                                    this.removeEntryItem(directoryNameDragEntryItem);
                                }
                            }
                        }
                    }
                } else {
                    var fileName = filePath2, fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
                    if (fileNameDragEntryItem !== null) {
                        this.removeEntryItem(fileNameDragEntryItem);
                    }
                }
            }
        },
        {
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath, param) {
                var collapsed = param === void 0 ? false : param;
                var directoryNameDragEntryItem = null;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath), topmostDirectoryNameDragEntryItem3 = this.findTopmostDirectoryNameDragEntryItem(), directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryNameDragEntryItem3 !== null) {
                    if (directoryPathWithoutTopmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryItemName = topmostDirectoryNameDragEntryItem3.getName();
                        if (topmostDirectoryName === topmostDirectoryNameDragEntryItemName) {
                            directoryPath = directoryPathWithoutTopmostDirectoryName; ///
                            directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem3.addDirectoryPath(directoryPath, collapsed);
                        }
                    }
                } else {
                    if (topmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryItem4 = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                        if (topmostDirectoryNameDragEntryItem4 === null) {
                            var collapsed1 = true; ///
                            topmostDirectoryNameDragEntryItem4 = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed1);
                            this.addEntryItem(topmostDirectoryNameDragEntryItem4);
                        }
                        var directoryPath1 = directoryPathWithoutTopmostDirectoryName; ///
                        directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem4.addDirectoryPath(directoryPath1, collapsed);
                    } else {
                        var directoryName = directoryPath, directoryNameDragEntryItemPresent = this.isDirectoryNameDragEntryItemPresent(directoryName);
                        if (directoryNameDragEntryItemPresent) {
                            directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                        } else {
                            directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed);
                            this.addEntryItem(directoryNameDragEntryItem);
                        }
                        directoryNameDragEntryItem.setCollapsed(collapsed);
                    }
                }
                return directoryNameDragEntryItem;
            }
        },
        {
            key: "removeDirectoryPath",
            value: function removeDirectoryPath(directoryPath2) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath2), directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath2);
                if (topmostDirectoryName !== null) {
                    var directoryName = topmostDirectoryName, directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem !== null) {
                        directoryPath2 = directoryPathWithoutTopmostDirectoryName; ///
                        directoryNameDragEntryItem.removeDirectoryPath(directoryPath2);
                        var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = true; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
                        if (removeEmptyParentDirectoriesOptionPresent) {
                            var topmostDirectoryNameDragEntryItem3 = this.findTopmostDirectoryNameDragEntryItem();
                            if (directoryNameDragEntryItem !== topmostDirectoryNameDragEntryItem3) {
                                var directoryNameDragEntryItemEmpty = directoryNameDragEntryItem.isEmpty();
                                if (directoryNameDragEntryItemEmpty) {
                                    this.removeEntryItem(directoryNameDragEntryItem);
                                }
                            }
                        }
                    }
                } else {
                    var directoryName = directoryPath2, directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem !== null) {
                        this.removeEntryItem(directoryNameDragEntryItem);
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
                    entryItem.didMount && entryItem.didMount(); ///
                }
            }
        },
        {
            key: "removeEntryItem",
            value: function removeEntryItem(entryItem) {
                var explorerMounted = explorer.isMounted();
                if (explorerMounted) {
                    entryItem.willUnmount && entryItem.willUnmount(); ///
                }
                entryItem.remove();
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
                            var explorer = this.getExplorer(), DirectoryNameMarkerEntryItem = explorer.getDirectoryNameMarkerEntryItem(), directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = directoryNameMarkerEntryItem; ///
                            break;
                        }
                }
                var entryItem = markerEntryItem; ///
                this.addEntryItem(entryItem);
            }
        },
        {
            key: "removeMarkerEntryItem",
            value: function removeMarkerEntryItem() {
                var markerEntryItem = this.retrieveMarkerEntryItem();
                markerEntryItem.remove();
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
            key: "forEachEntryItem",
            value: function forEachEntryItem(callback) {
                var entryItems = this.getEntryItems();
                entryItems.forEach(function(entryItem) {
                    callback(entryItem);
                });
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
            key: "someEntryItem",
            value: function someEntryItem(callback) {
                var entryItems = this.getEntryItems();
                return entryItems.some(function(entryItem) {
                    return callback(entryItem);
                });
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
            key: "someFileNameDragEntryItem",
            value: function someFileNameDragEntryItem(callback) {
                return this.someEntryItemByTypes(callback, _types.FILE_NAME_DRAG_TYPE);
            }
        },
        {
            key: "someDirectoryNameDragEntryItem",
            value: function someDirectoryNameDragEntryItem(callback) {
                return this.someEntryItemByTypes(callback, _types.DIRECTORY_NAME_DRAG_TYPE);
            }
        },
        {
            key: "someDirectoryNameMarkerEntryItem",
            value: function someDirectoryNameMarkerEntryItem(callback) {
                return this.someEntryItemByTypes(callback, _types.DIRECTORY_NAME_MARKER_TYPE);
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
            key: "findDragEntryItem",
            value: function findDragEntryItem(name) {
                return this.findEntryItemByNameAndTypes(name, _types.FILE_NAME_DRAG_TYPE, _types.DIRECTORY_NAME_DRAG_TYPE);
            }
        },
        {
            key: "findEntryItemByName",
            value: function findEntryItemByName(name) {
                var entryItem = this.findEntryItem(function(entryItem1) {
                    var entryItemName = entryItem1.getName();
                    if (entryItemName === name) {
                        return true;
                    }
                });
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
                ].concat(_toConsumableArray(types)));
                return entryItem;
            }
        },
        {
            key: "findMarkerEntryItem",
            value: function findMarkerEntryItem() {
                var markerEntryItem = this.findEntryItemByTypes(function(entryItem) {
                    return true; ///
                }, _types.FILE_NAME_MARKER_TYPE, _types.DIRECTORY_NAME_MARKER_TYPE);
                return markerEntryItem;
            }
        },
        {
            key: "findDragEntryItemPath",
            value: function findDragEntryItemPath(dragEntryItem) {
                var dragEntryItemPath = null;
                this.someEntryItem(function(entryItem) {
                    if (entryItem === dragEntryItem) {
                        var entryItemName = entryItem.getName();
                        dragEntryItemPath = entryItemName; ///
                        return true;
                    }
                });
                return dragEntryItemPath;
            }
        },
        {
            key: "findMarkerEntryItemPath",
            value: function findMarkerEntryItemPath(markerEntryItem) {
                var markerEntryItemPath = null;
                this.someEntryItem(function(entryItem) {
                    if (entryItem === markerEntryItem) {
                        var entryItemName = entryItem.getName();
                        markerEntryItemPath = entryItemName; ///
                        return true;
                    }
                });
                return markerEntryItemPath;
            }
        },
        {
            key: "findFileNameDragEntryItem",
            value: function findFileNameDragEntryItem(fileName) {
                return this.findEntryItemByNameAndTypes(fileName, _types.FILE_NAME_DRAG_TYPE);
            }
        },
        {
            key: "findDirectoryNameDragEntryItem",
            value: function findDirectoryNameDragEntryItem(directoryName) {
                return this.findEntryItemByNameAndTypes(directoryName, _types.DIRECTORY_NAME_DRAG_TYPE);
            }
        },
        {
            key: "findTopmostDirectoryNameDragEntryItem",
            value: function findTopmostDirectoryNameDragEntryItem() {
                var topmostDirectoryNameDragEntryItem5 = null;
                this.someDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                    var directoryNameDragEntryItemTopmost = directoryNameDragEntryItem.isTopmost();
                    if (directoryNameDragEntryItemTopmost) {
                        topmostDirectoryNameDragEntryItem5 = directoryNameDragEntryItem; ///
                        return true;
                    }
                });
                return topmostDirectoryNameDragEntryItem5;
            }
        },
        {
            key: "retrieveMarkerEntryItem",
            value: function retrieveMarkerEntryItem() {
                var markerEntryItem = this.findMarkerEntryItem();
                if (markerEntryItem === null) {
                    this.someDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                        markerEntryItem = directoryNameDragEntryItem.retrieveMarkerEntryItem();
                        if (markerEntryItem !== null) {
                            return true;
                        }
                    });
                }
                return markerEntryItem;
            }
        },
        {
            key: "retrieveDragEntryItemPath",
            value: function retrieveDragEntryItemPath(dragEntryItem) {
                var dragEntryItemPath = this.findDragEntryItemPath(dragEntryItem);
                if (dragEntryItemPath === null) {
                    this.someDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                        dragEntryItemPath = directoryNameDragEntryItem.retrieveDragEntryItemPath(dragEntryItem);
                        if (dragEntryItemPath !== null) {
                            var directoryNameDragEntryItemName = directoryNameDragEntryItem.getName();
                            dragEntryItemPath = "".concat(directoryNameDragEntryItemName, "/").concat(dragEntryItemPath);
                            return true;
                        }
                    });
                }
                return dragEntryItemPath;
            }
        },
        {
            key: "retrieveMarkerEntryItemPath",
            value: function retrieveMarkerEntryItemPath(markerEntryItem) {
                var markerEntryItemPath = this.findMarkerEntryItemPath(markerEntryItem);
                if (markerEntryItemPath === null) {
                    this.someDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                        markerEntryItemPath = directoryNameDragEntryItem.retrieveMarkerEntryItemPath(markerEntryItem);
                        if (markerEntryItemPath !== null) {
                            var directoryNameDragEntryItemName = directoryNameDragEntryItem.getName();
                            markerEntryItemPath = "".concat(directoryNameDragEntryItemName, "/").concat(markerEntryItemPath);
                            return true;
                        }
                    });
                }
                return markerEntryItemPath;
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
            key: "parentContext",
            value: function parentContext() {
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), removeMarker = this.removeMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveDragEntryItemPath = this.retrieveDragEntryItemPath.bind(this), retrieveMarkerEntryItemPath = this.retrieveMarkerEntryItemPath.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
                    removeMarker: removeMarker,
                    addFilePath: addFilePath,
                    removeFilePath: removeFilePath,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    retrieveMarkerEntryItem: retrieveMarkerEntryItem,
                    retrieveDragEntryItemPath: retrieveDragEntryItemPath,
                    retrieveMarkerEntryItemPath: retrieveMarkerEntryItemPath
                };
            }
        }
    ]);
    return EntriesList;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(EntriesList, "tagName", "ul");
_defineProperty(EntriesList, "defaultProperties", {
    className: "entries"
});
var _default = (0, _easyWithStyle).default(EntriesList)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuXHRnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW1zTGVuZ3RoID0gZW50cnlJdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoZW50cnlJdGVtc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbU5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1QYXRoOyAgLy8vXG5cbiAgICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpLFxuICAgICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVNYXJrZXIoKSB7XG4gICAgdGhpcy5yZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKTtcbiAgfVxuXG4gIGFkZEZpbGVQYXRoKGZpbGVQYXRoKSB7XG5cdFx0bGV0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cblx0XHRjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpLFxuXHRcdFx0XHRcdHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuXHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcblx0XHRcdGlmIChmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWUpIHtcblx0XHRcdFx0XHRmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cblx0XHRcdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7IC8vL1xuXG5cdFx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuXHRcdFx0XHRcdHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuXHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuXHRcdFx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gdGhpcy5pc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZmlsZU5hbWUpO1xuXG5cdFx0XHRcdGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cblx0XHRcdFx0XHR0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZSwgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IHRydWU7IC8vL2V4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lKSB7XG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCkge1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSB0cnVlOyAvLy9leHBsb3Jlci5pc09wdGlvblByZXNlbnQoUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFUyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kVG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlJdGVtLmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBlbnRyeUl0ZW0uZGlkTW91bnQgJiYgZW50cnlJdGVtLmRpZE1vdW50KCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGVudHJ5SXRlbS53aWxsVW5tb3VudCAmJiBlbnRyeUl0ZW0ud2lsbFVubW91bnQoKTsgIC8vL1xuICAgIH1cblxuICAgIGVudHJ5SXRlbS5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGRpcmVjdG9yeU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gY29sbGFwc2VkPXtjb2xsYXBzZWR9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG4gIGZvckVhY2hFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY2FsbGJhY2soZW50cnlJdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19UWVBFKTsgfVxuXG5cdGZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgc29tZUVudHJ5SXRlbShjYWxsYmFjaykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVudHJ5SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBzb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNvbWVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgc29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgc29tZURpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFKTsgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbShuYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7ICAvLy9cbiAgICB9LCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSkge1xuICAgIGxldCBkcmFnRW50cnlJdGVtUGF0aCA9IG51bGw7XG5cbiAgICB0aGlzLnNvbWVFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgaWYgKGVudHJ5SXRlbSA9PT0gZHJhZ0VudHJ5SXRlbSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgIGRyYWdFbnRyeUl0ZW1QYXRoID0gZW50cnlJdGVtTmFtZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZmluZE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsO1xuXG4gICAgdGhpcy5zb21lRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGlmIChlbnRyeUl0ZW0gPT09IG1hcmtlckVudHJ5SXRlbSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBlbnRyeUl0ZW1OYW1lOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKGZpbGVOYW1lLCBGSUxFX05BTUVfRFJBR19UWVBFKTsgfVxuXG5cdGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cblx0ZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuXHRcdHRoaXMuc29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1Ub3Btb3N0ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNUb3Btb3N0KCk7XG5cblx0XHRcdGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVRvcG1vc3QpIHtcblx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtID0gdGhpcy5maW5kTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICBpZiAobWFya2VyRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgICAgICBpZiAobWFya2VyRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBsZXQgZHJhZ0VudHJ5SXRlbVBhdGggPSB0aGlzLmZpbmREcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKTtcblxuICAgIGlmIChkcmFnRW50cnlJdGVtUGF0aCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW1QYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKTtcblxuICAgICAgICBpZiAoZHJhZ0VudHJ5SXRlbVBhdGggIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWUgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGAke2RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZX0vJHtkcmFnRW50cnlJdGVtUGF0aH1gO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIHJldHJpZXZlTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW0pIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtUGF0aCA9IHRoaXMuZmluZE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKTtcblxuICAgIGlmIChtYXJrZXJFbnRyeUl0ZW1QYXRoID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlTWFya2VyRW50cnlJdGVtUGF0aChtYXJrZXJFbnRyeUl0ZW0pO1xuXG4gICAgICAgIGlmIChtYXJrZXJFbnRyeUl0ZW1QYXRoICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IGAke2RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZX0vJHttYXJrZXJFbnRyeUl0ZW1QYXRofWA7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbVBhdGg7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcblx0ICB0aGlzLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0ZXhwYW5kKCkge1xuXHQgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuXHRwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEZpbGVQYXRoID0gdGhpcy5hZGRGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVEaXJlY3RvcnlQYXRoID0gdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aCA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtUGF0aCA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW1QYXRoLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG4gICAgICByZW1vdmVNYXJrZXIsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSxcblx0XHRcdHJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGgsXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGhcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyaWVzTGlzdClgXG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBsaXN0LXN0eTtlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDQSxVQUFXO0lBRXdFLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FrbUJyRiwrSEFVdEM7Ozs7Ozs7SUExbUJR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