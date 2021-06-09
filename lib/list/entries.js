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
                    case _types.FILE_NAME_TYPE:
                        {
                            var explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                                name: name
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _types.DIRECTORY_NAME_TYPE:
                        {
                            var explorer = this.getExplorer(), DirectoryNameMarkerEntryItem = explorer.getDirectoryNameMarkerEntryItem(), directoryNameMarkerEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryItem, {
                                name: name
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
            key: "someFileNameDragEntryItem",
            value: function someFileNameDragEntryItem(callback) {
                return this.someEntryItemByTypes(callback, _types.FILE_NAME_TYPE);
            }
        },
        {
            key: "forEachFileNameDragEntryItem",
            value: function forEachFileNameDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _types.FILE_NAME_TYPE);
            }
        },
        {
            key: "someDirectoryNameDragEntryItem",
            value: function someDirectoryNameDragEntryItem(callback) {
                return this.someEntryItemByTypes(callback, _types.DIRECTORY_NAME_TYPE);
            }
        },
        {
            key: "forEachDirectoryNameDragEntryItem",
            value: function forEachDirectoryNameDragEntryItem(callback) {
                this.forEachEntryItemByTypes(callback, _types.DIRECTORY_NAME_TYPE);
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
            key: "forEachEntryItem",
            value: function forEachEntryItem(callback) {
                var entryItems = this.getEntryItems();
                entryItems.forEach(function(entryItem) {
                    callback(entryItem);
                });
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
            key: "findDragEntryItem",
            value: function findDragEntryItem(name) {
                return this.findEntryItemByNameAndTypes(name, _types.FILE_NAME_TYPE, _types.DIRECTORY_NAME_TYPE);
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
            key: "findFileNameDragEntryItem",
            value: function findFileNameDragEntryItem(fileName) {
                return this.findEntryItemByNameAndTypes(fileName, _types.FILE_NAME_TYPE);
            }
        },
        {
            key: "findDirectoryNameDragEntryItem",
            value: function findDirectoryNameDragEntryItem(directoryName) {
                return this.findEntryItemByNameAndTypes(directoryName, _types.DIRECTORY_NAME_TYPE);
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
            key: "findEntryItem",
            value: function findEntryItem(callback) {
                var entryItems = this.getEntryItems(), entryItem = entryItems.find(callback) || null; ///
                return entryItem;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), removeMarker = this.removeMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveDragEntryItemPath = this.retrieveDragEntryItemPath.bind(this);
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
                    retrieveDragEntryItemPath: retrieveDragEntryItemPath
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRklMRV9OQU1FX1RZUEUsIERJUkVDVE9SWV9OQU1FX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG5cdGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGdldEVudHJ5SXRlbXMoKSB7XG5cdFx0Y29uc3QgY2hpbGRFbnRyeUl0ZW1FbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImxpLmVudHJ5XCIpLFxuXHRcdFx0XHRcdGVudHJ5SXRlbXMgPSBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzOyAgLy8vXG5cblx0XHRyZXR1cm4gZW50cnlJdGVtcztcblx0fVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuXHRcdGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCksXG5cdFx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kVG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG5cdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuXHRcdFx0aWYgKGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZSkge1xuXHRcdFx0XHRcdGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuXHRcdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29sbGFwc2VkID0gdHJ1ZTsgLy8vXG5cblx0XHRcdFx0XHR0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG5cdFx0XHRcdFx0dGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG5cdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG5cdFx0XHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSB0aGlzLmlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChmaWxlTmFtZSk7XG5cblx0XHRcdFx0aWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQpIHtcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuXHRcdFx0XHRcdHRoaXMuYWRkRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgcmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50ID0gdHJ1ZTsgLy8vZXhwbG9yZXIuaXNPcHRpb25QcmVzZW50KFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkID0gZmFsc2UpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICBpZiAoZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWUpIHtcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gdGhpcy5pc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KSB7XG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnNldENvbGxhcHNlZChjb2xsYXBzZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IHRydWU7IC8vL2V4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBuZXh0RW50cnlJdGVtID0gZW50cnlJdGVtLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNFbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtID0gbmV4dEVudHJ5SXRlbS5pc0JlZm9yZShlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHByZXZpb3VzRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLmFwcGVuZChlbnRyeUl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeUl0ZW0uaW5zZXJ0QmVmb3JlKHByZXZpb3VzRW50cnlJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGVudHJ5SXRlbS5kaWRNb3VudCAmJiBlbnRyeUl0ZW0uZGlkTW91bnQoKTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyTW91bnRlZCA9IGV4cGxvcmVyLmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyTW91bnRlZCkge1xuICAgICAgZW50cnlJdGVtLndpbGxVbm1vdW50ICYmIGVudHJ5SXRlbS53aWxsVW5tb3VudCgpOyAgLy8vXG4gICAgfVxuXG4gICAgZW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbTtcblxuICAgIGNvbnN0IG5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1OYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gZHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGRpcmVjdG9yeU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gY29sbGFwc2VkPXtjb2xsYXBzZWR9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdHJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSkge1xuXHRcdGxldCBkcmFnRW50cnlJdGVtUGF0aCA9IHRoaXMuZmluZERyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW0pO1xuXG5cdFx0aWYgKGRyYWdFbnRyeUl0ZW1QYXRoID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdFx0ZHJhZ0VudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW0pO1xuXG5cdFx0XHRcdGlmIChkcmFnRW50cnlJdGVtUGF0aCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRcdGRyYWdFbnRyeUl0ZW1QYXRoID0gYCR7ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lfS8ke2RyYWdFbnRyeUl0ZW1QYXRofWA7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRyYWdFbnRyeUl0ZW1QYXRoO1xuXHR9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMuZmluZE1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgaWYgKG1hcmtlckVudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICAgICAgaWYgKG1hcmtlckVudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgc29tZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfVFlQRSk7IH1cblxuXHRzb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG5cdFx0Y29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG5cdFx0ZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuXHRcdFx0aWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cblx0XHRyZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuXHRcdFx0aWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZvckVhY2hFbnRyeUl0ZW0oY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cblx0XHRlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soZW50cnlJdGVtKTtcblx0XHR9KTtcblx0fVxuXG5cdHNvbWVFbnRyeUl0ZW0oY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cblx0XHRyZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcblx0XHRcdHJldHVybiBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZmluZERyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW0pIHtcblx0XHRsZXQgZHJhZ0VudHJ5SXRlbVBhdGggPSBudWxsO1xuXG5cdFx0dGhpcy5zb21lRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcblx0XHRcdGlmIChlbnRyeUl0ZW0gPT09IGRyYWdFbnRyeUl0ZW0pIHsgIC8vL1xuXHRcdFx0XHRjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRkcmFnRW50cnlJdGVtUGF0aCA9IGVudHJ5SXRlbU5hbWU7ICAvLy9cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBkcmFnRW50cnlJdGVtUGF0aDtcblx0fVxuXG5cdGZpbmREcmFnRW50cnlJdGVtKG5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9UWVBFLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG4gIGZpbmRNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlUeXBlcygoZW50cnlJdGVtKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vL1xuICAgIH0sIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUpO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKGZpbGVOYW1lLCBGSUxFX05BTUVfVFlQRSk7IH1cblxuXHRmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfVFlQRSk7IH1cblxuXHRmaW5kVG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBudWxsO1xuXG5cdFx0dGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVRvcG1vc3QgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc1RvcG1vc3QoKTtcblxuXHRcdFx0aWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVG9wbW9zdCkge1xuXHRcdFx0XHR0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgIC8vL1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIC4uLnR5cGVzKTtcblxuXHRcdHJldHVybiBlbnRyeUl0ZW07XG5cdH1cblxuXHRmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG5cdFx0XHRcdFx0ZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuXHRcdFx0XHRcdFx0aWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgfHwgbnVsbDsgLy8vO1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbTtcblx0fVxuXG5cdGZpbmRFbnRyeUl0ZW1CeU5hbWUobmFtZSkge1xuXHRcdGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbSgoZW50cnlJdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0aWYgKGVudHJ5SXRlbU5hbWUgPT09IG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZW50cnlJdGVtO1xuXHR9XG5cblx0ZmluZEVudHJ5SXRlbShjYWxsYmFjaykge1xuXHRcdGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW0gPSBlbnRyeUl0ZW1zLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbTtcblx0fVxuXG5cdGNvbGxhcHNlKCkge1xuXHQgIHRoaXMuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuXHRleHBhbmQoKSB7XG5cdCAgdGhpcy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0xpc3QgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZU1hcmtlciA9IHRoaXMucmVtb3ZlTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1QYXRoID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1QYXRoLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG4gICAgICByZW1vdmVNYXJrZXIsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSxcblx0XHRcdHJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGhcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyaWVzTGlzdClgXG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBsaXN0LXN0eTtlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDQSxVQUFXO0lBRThELE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EwakIzRSwrSEFVdEM7Ozs7Ozs7SUFsa0JRLDRCQUE0QixHQUpOLFVBQVcsZUFJakMsNEJBQTRCLEVBQUUsdUNBQXVDLEdBSi9DLFVBQVcsZUFJSCx1Q0FBdUM7SUFFdkUsV0FBVztjQUFYLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7Z0VBQVgsV0FBVzs7aUJBQVgsV0FBVzs7WUFDaEIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVyxXQUFlLFFBQVYsVUFBVSxFQUE1QixRQUFRLEdBQUssV0FBZSxDQUE1QixRQUFRO3VCQUVULFFBQVE7Ozs7WUFHaEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTixzQkFBc0IsUUFBUSxnQkFBZ0IsRUFBQyxRQUFVLElBQzVELFVBQVUsR0FBRyxzQkFBc0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXJDLFVBQVU7Ozs7WUFHakIsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTztvQkFDQyxVQUFVLFFBQVEsYUFBYSxJQUMvQixnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUNwQyxLQUFLLEdBQUksZ0JBQWdCLEtBQUssQ0FBQzt1QkFF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