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
                        var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = true; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
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
                        var explorer = this.getExplorer(), removeEmptyParentDirectoriesOptionPresent = true; ///explorer.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
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
                var topmostDirectoryNameDragEntryItem = null;
                this.someDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                    var directoryNameDragEntryItemTopmost = directoryNameDragEntryItem.isTopmost();
                    if (directoryNameDragEntryItemTopmost) {
                        topmostDirectoryNameDragEntryItem = directoryNameDragEntryItem; ///
                        return true;
                    }
                });
                return topmostDirectoryNameDragEntryItem;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzTGlzdCBleHRlbmRzIEVsZW1lbnQge1xuXHRnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKSxcbiAgICAgICAgICBlbnRyeUl0ZW1zTGVuZ3RoID0gZW50cnlJdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoZW50cnlJdGVtc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlJdGVtUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtlckVudHJ5SXRlbU5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1QYXRoOyAgLy8vXG5cbiAgICAgIHRoaXMuYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpLFxuICAgICAgICAgICAgbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgICAgbWFya2VyRW50cnlJdGVtUGF0aCA9IG1hcmtlckVudHJ5SXRlbVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkTWFya2VyKG1hcmtlckVudHJ5SXRlbVBhdGgsIGRyYWdFbnRyeUl0ZW1UeXBlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVNYXJrZXIoKSB7XG4gICAgdGhpcy5yZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKTtcbiAgfVxuXG4gIGFkZEZpbGVQYXRoKGZpbGVQYXRoKSB7XG5cdFx0bGV0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGg7ICAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICAgIH1cblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IHRydWU7IC8vL2V4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQgPSBmYWxzZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50ID0gdHJ1ZTsgLy8vZXhwbG9yZXIuaXNPcHRpb25QcmVzZW50KFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlJdGVtLmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBlbnRyeUl0ZW0uZGlkTW91bnQgJiYgZW50cnlJdGVtLmRpZE1vdW50KCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbShlbnRyeUl0ZW0pIHtcbiAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICBleHBsb3Jlck1vdW50ZWQgPSBleHBsb3Jlci5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3Jlck1vdW50ZWQpIHtcbiAgICAgIGVudHJ5SXRlbS53aWxsVW5tb3VudCAmJiBlbnRyeUl0ZW0ud2lsbFVubW91bnQoKTsgIC8vL1xuICAgIH1cblxuICAgIGVudHJ5SXRlbS5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkZE1hcmtlckVudHJ5SXRlbShtYXJrZXJFbnRyeUl0ZW1OYW1lLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW07XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlJdGVtTmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeUl0ZW1UeXBlOyAgLy8vXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlJdGVtID0gbWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlJdGVtKGVudHJ5SXRlbSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkID0gdHJ1ZSkge1xuXHRcdGNvbnN0IG5hbWUgPSBkaXJlY3RvcnlOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuXHRpc0ZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZmlsZU5hbWUpIHtcblx0XHRjb25zdCBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZmlsZU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cblx0aXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQoZGlyZWN0b3J5TmFtZSkge1xuXHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuICBmb3JFYWNoRW50cnlJdGVtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNhbGxiYWNrKGVudHJ5SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY2FsbGJhY2soZW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfVFlQRSk7IH1cblxuXHRmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgc29tZUVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXMuc29tZSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzb21lRmlsZU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIHNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIHNvbWVEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSk7IH1cblxuICBmaW5kRW50cnlJdGVtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW0obmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGVudHJ5SXRlbU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeVR5cGVzKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAuLi50eXBlcyk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZE1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeVR5cGVzKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB0cnVlOyAgLy8vXG4gICAgfSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSk7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW1QYXRoKGRyYWdFbnRyeUl0ZW0pIHtcbiAgICBsZXQgZHJhZ0VudHJ5SXRlbVBhdGggPSBudWxsO1xuXG4gICAgdGhpcy5zb21lRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGlmIChlbnRyeUl0ZW0gPT09IGRyYWdFbnRyeUl0ZW0pIHsgIC8vL1xuICAgICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGVudHJ5SXRlbU5hbWU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtUGF0aDtcbiAgfVxuXG4gIGZpbmRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbSkge1xuICAgIGxldCBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUVudHJ5SXRlbSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBpZiAoZW50cnlJdGVtID09PSBtYXJrZXJFbnRyeUl0ZW0pIHsgIC8vL1xuICAgICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gZW50cnlJdGVtTmFtZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcmtlckVudHJ5SXRlbVBhdGg7XG4gIH1cblxuICBmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhmaWxlTmFtZSwgRklMRV9OQU1FX0RSQUdfVFlQRSk7IH1cblxuXHRmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG5cdGZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0bGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IG51bGw7XG5cblx0XHR0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtVG9wbW9zdCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzVG9wbW9zdCgpO1xuXG5cdFx0XHRpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1Ub3Btb3N0KSB7XG5cdFx0XHRcdHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMuZmluZE1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgaWYgKG1hcmtlckVudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlTWFya2VyRW50cnlJdGVtKCk7XG5cbiAgICAgICAgaWYgKG1hcmtlckVudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEcmFnRW50cnlJdGVtUGF0aChkcmFnRW50cnlJdGVtKSB7XG4gICAgbGV0IGRyYWdFbnRyeUl0ZW1QYXRoID0gdGhpcy5maW5kRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBpZiAoZHJhZ0VudHJ5SXRlbVBhdGggPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICBkcmFnRW50cnlJdGVtUGF0aCA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGgoZHJhZ0VudHJ5SXRlbSk7XG5cbiAgICAgICAgaWYgKGRyYWdFbnRyeUl0ZW1QYXRoICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1OYW1lID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbVBhdGggPSBgJHtkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWV9LyR7ZHJhZ0VudHJ5SXRlbVBhdGh9YDtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbVBhdGg7XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbVBhdGggPSB0aGlzLmZpbmRNYXJrZXJFbnRyeUl0ZW1QYXRoKG1hcmtlckVudHJ5SXRlbSk7XG5cbiAgICBpZiAobWFya2VyRW50cnlJdGVtUGF0aCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGgobWFya2VyRW50cnlJdGVtKTtcblxuICAgICAgICBpZiAobWFya2VyRW50cnlJdGVtUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtTmFtZSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgICAgIG1hcmtlckVudHJ5SXRlbVBhdGggPSBgJHtkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbU5hbWV9LyR7bWFya2VyRW50cnlJdGVtUGF0aH1gO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW1QYXRoO1xuICB9XG5cbiAgY29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0cGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBleHBhbmRFbnRyaWVzTGlzdCA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBjb2xsYXBzZUVudHJpZXNMaXN0ID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNFbXB0eSA9IHRoaXMuaXNFbXB0eS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZE1hcmtlciA9IHRoaXMuYWRkTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlTWFya2VyID0gdGhpcy5yZW1vdmVNYXJrZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVGaWxlUGF0aCA9IHRoaXMucmVtb3ZlRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGREaXJlY3RvcnlQYXRoID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCA9IHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGggPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbVBhdGggPSB0aGlzLnJldHJpZXZlTWFya2VyRW50cnlJdGVtUGF0aC5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG4gICAgICBleHBhbmRFbnRyaWVzTGlzdCxcbiAgICAgIGNvbGxhcHNlRW50cmllc0xpc3QsXG4gICAgICBpc0VtcHR5LFxuICAgICAgYWRkTWFya2VyLFxuICAgICAgcmVtb3ZlTWFya2VyLFxuXHRcdFx0YWRkRmlsZVBhdGgsXG4gICAgICByZW1vdmVGaWxlUGF0aCxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICByZW1vdmVEaXJlY3RvcnlQYXRoLFxuICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0sXG5cdFx0XHRyZXRyaWV2ZURyYWdFbnRyeUl0ZW1QYXRoLFxuICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW1QYXRoXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cmllc0xpc3QpYFxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbGlzdC1zdHk7ZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0EsVUFBVztJQUV3RSxNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMmpCckYsK0hBVXRDOzs7Ozs7O0lBbmtCUSw0QkFBNEIsR0FKTixVQUFXLGVBSWpDLDRCQUE0QixFQUFFLHVDQUF1QyxHQUovQyxVQUFXLGVBSUgsdUNBQXVDO0lBRXZFLFdBQVc7Y0FBWCxXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBQ2hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ1csV0FBZSxRQUFWLFVBQVUsRUFBNUIsUUFBUSxHQUFLLFdBQWUsQ0FBNUIsUUFBUTt1QkFFVCxRQUFROzs7O1lBR2hCLEdBQWEs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