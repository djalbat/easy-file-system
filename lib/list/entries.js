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
        "\n\n  list-style: none;\n  margin-left: 2rem;\n  background-color: red;\n  \n  .topmost {\n    margin-left: 0;\n    padding-bottom: 2.4rem;\n  }\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
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
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName);
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
                        var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = false; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
                        if (removeEmptyParentDirectoriesOptionPresent) {
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
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath, param) {
                var collapsed = param === void 0 ? false : param;
                var directoryNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryName === null) {
                    var directoryName = directoryPath; ///
                    directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem === null) {
                        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed);
                        this.addEntryItem(directoryNameDragEntryItem);
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName);
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
                        var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = false; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
                        if (removeEmptyParentDirectoriesOptionPresent) {
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
                var explorer = this.getExplorer(), explorerMounted = explorer.isMounted();
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
                return markerEntryItem;
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
            value: function createDirectoryNameDragEntryItem(directoryName, param) {
                var collapsed = param === void 0 ? true : param;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveDragEntryItemPath = this.retrieveDragEntryItemPath.bind(this), retrieveMarkerEntryItemPath = this.retrieveMarkerEntryItemPath.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
                    addFilePath: addFilePath,
                    removeMarker: removeMarker,
                    removeFilePath: removeFilePath,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    forEachDragEntryItem: forEachDragEntryItem,
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
_defineProperty(EntriesList, "ignoredProperties", [
    "topmost",
    "explorer"
]);
_defineProperty(EntriesList, "defaultProperties", {
    className: "entries"
});
var _default = (0, _easyWithStyle).default(EntriesList)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSxcbiAgICAgICAgIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSxcbiAgICAgICAgIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSxcbiAgICAgICAgIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuICBpc1RvcG1vc3QoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gdG9wbW9zdDtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuXHRcdGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuXHRcdHJldHVybiBleHBsb3Jlcjtcblx0fVxuXG5cdGdldEVudHJ5SXRlbXMoKSB7XG5cdFx0Y29uc3QgY2hpbGRFbnRyeUl0ZW1FbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcImxpLmVudHJ5XCIpLFxuXHRcdFx0XHRcdGVudHJ5SXRlbXMgPSBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzOyAgLy8vXG5cblx0XHRyZXR1cm4gZW50cnlJdGVtcztcblx0fVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5SXRlbXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW1OYW1lID0gbWFya2VyRW50cnlJdGVtUGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKSxcbiAgICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlJdGVtKCk7XG4gIH1cblxuICBhZGRGaWxlUGF0aChmaWxlUGF0aCkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcbiAgICB9XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgcmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSBmYWxzZTsgLy8vZXhwbG9yZXIuaXNPcHRpb25QcmVzZW50KFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aDsgIC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSBmYWxzZTsgLy8vZXhwbG9yZXIuaXNPcHRpb25QcmVzZW50KFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlJdGVtLmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBlbnRyeUl0ZW0uZGlkTW91bnQgJiYgZW50cnlJdGVtLmRpZE1vdW50KCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGVudHJ5SXRlbS53aWxsVW5tb3VudCAmJiBlbnRyeUl0ZW0ud2lsbFVubW91bnQoKTsgIC8vL1xuICAgIH1cblxuICAgIGVudHJ5SXRlbS5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuXHRcdGNvbnN0IG5hbWUgPSBmaWxlTmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCA9IHRydWUpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbShjYWxsYmFjaykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNhbGxiYWNrKGVudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19UWVBFKTsgfVxuXG5cdGZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgc29tZUVudHJ5SXRlbShjYWxsYmFjaykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVudHJ5SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBzb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNvbWVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgc29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgc29tZURpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFKTsgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbShuYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDsgLy8vO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kTWFya2VyRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7ICAvLy9cbiAgICB9LCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSkge1xuICAgIGxldCBkcmFnRW50cnlJdGVtUGF0aCA9IG51bGw7XG5cbiAgICB0aGlzLnNvbWVFbnRyeUl0ZW0oKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgaWYgKGVudHJ5SXRlbSA9PT0gZHJhZ0VudHJ5SXRlbSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgIGRyYWdFbnRyeUl0ZW1QYXRoID0gZW50cnlJdGVtTmFtZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgZmluZE1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSBudWxsO1xuXG4gICAgdGhpcy5zb21lRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGlmIChlbnRyeUl0ZW0gPT09IG1hcmtlckVudHJ5SXRlbSkgeyAgLy8vXG4gICAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBlbnRyeUl0ZW1OYW1lOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKGZpbGVOYW1lLCBGSUxFX05BTUVfRFJBR19UWVBFKTsgfVxuXG5cdGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUpOyB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMuZmluZE1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgaWYgKG1hcmtlckVudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICAgICAgaWYgKG1hcmtlckVudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKSB7XG4gICAgbGV0IGRyYWdFbnRyeUl0ZW1QYXRoID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbVBhdGggPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1QYXRoICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBgJHtkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWV9LyR7ZHJhZ0VudHJ5SXRlbVBhdGh9YDtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbVBhdGg7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSB0aGlzLmZpbmRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICBpZiAobWFya2VyRW50cnlJdGVtUGF0aCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKTtcblxuICAgICAgICBpZiAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBgJHtkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWV9LyR7bWFya2VyRW50cnlJdGVtUGF0aH1gO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgdG9wbW9zdCA9IHRoaXMuaXNUb3Btb3N0KCk7XG5cbiAgICBpZiAodG9wbW9zdCkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcInRvcG1vc3RcIik7XG4gICAgfVxuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHRcdGNvbnN0IGV4cGFuZEVudHJpZXNMaXN0ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VudHJpZXNMaXN0Q29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVEaXJlY3RvcnlQYXRoID0gdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0gPSB0aGlzLmZvckVhY2hEcmFnRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aCA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtUGF0aCA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW1QYXRoLmJpbmQodGhpcyk7XG5cblx0XHRyZXR1cm4gKHtcbiAgICAgIGV4cGFuZEVudHJpZXNMaXN0LFxuICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCxcbiAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQsXG4gICAgICBpc0VtcHR5LFxuICAgICAgYWRkTWFya2VyLFxuXHRcdFx0YWRkRmlsZVBhdGgsXG4gICAgICByZW1vdmVNYXJrZXIsXG4gICAgICByZW1vdmVGaWxlUGF0aCxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICByZW1vdmVEaXJlY3RvcnlQYXRoLFxuICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSxcblx0XHRcdHJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGgsXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGhcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInRvcG1vc3RcIixcbiAgICBcImV4cGxvcmVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cmllc0xpc3QpYFxuXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAudG9wbW9zdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNHJlbTtcbiAgfVxuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0EsVUFBVztJQUtFLE1BQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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