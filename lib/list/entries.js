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
                if (markerEntryItem1 === null) {
                    debugger;
                }
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this);
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
var _default = (0, _easyWithStyle).default(EntriesList)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCwgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jb25zdCBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgbWFya2VyRW50cnlJdGVtXG59KTtcblxuY2xhc3MgRW50cmllc0xpc3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNUb3Btb3N0KCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHRvcG1vc3Q7XG4gIH1cblxuICBnZXRFeHBsb3JlcigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXI7XG5cdH1cblxuXHRnZXRFbnRyeUl0ZW1zKCkge1xuXHRcdGNvbnN0IGNoaWxkRW50cnlJdGVtRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJsaS5lbnRyeVwiKSxcblx0XHRcdFx0XHRlbnRyeUl0ZW1zID0gY2hpbGRFbnRyeUl0ZW1FbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5SXRlbXM7XG5cdH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG4gICAgfVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIHJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50ID0gZmFsc2U7IC8vL2V4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQgPSBmYWxzZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGg7ICAvLy9cblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50ID0gZmFsc2U7IC8vL2V4cGxvcmVyLmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG5leHRFbnRyeUl0ZW0gPSBlbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICBwcmV2aW91c0VudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0gPSBuZXh0RW50cnlJdGVtLmlzQmVmb3JlKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocHJldmlvdXNFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwZW5kKGVudHJ5SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5SXRlbS5pbnNlcnRCZWZvcmUocHJldmlvdXNFbnRyeUl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGxvcmVyTW91bnRlZCA9IGV4cGxvcmVyLmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyTW91bnRlZCkge1xuICAgICAgZW50cnlJdGVtLmRpZE1vdW50ICYmIGVudHJ5SXRlbS5kaWRNb3VudCgpOyAvLy9cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBlbnRyeUl0ZW0ud2lsbFVubW91bnQgJiYgZW50cnlJdGVtLndpbGxVbm1vdW50KCk7ICAvLy9cbiAgICB9XG5cbiAgICBlbnRyeUl0ZW0ucmVtb3ZlKCk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgaWYgKG1hcmtlckVudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0ucmVtb3ZlKCk7XG5cbiAgICBtYXJrZXJFbnRyeUl0ZW0gPSBudWxsO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuXHRcdGNvbnN0IG5hbWUgPSBmaWxlTmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCA9IHRydWUpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsOyAvLy87XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlUeXBlcygoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGVudHJ5SXRlbU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgLi4udHlwZXMpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcblx0ICB0aGlzLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0ZXhwYW5kKCkge1xuXHQgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0xpc3QgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEZpbGVQYXRoID0gdGhpcy5hZGRGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZU1hcmtlciA9IHRoaXMucmVtb3ZlTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZm9yRWFjaERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0uYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0xpc3QsXG4gICAgICBjb2xsYXBzZUVudHJpZXNMaXN0LFxuICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZU1hcmtlcixcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG4gICAgICBmb3JFYWNoRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBcbiAgLnRvcG1vc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjRyZW07XG4gIH1cbiAgXG4gIC5jb2xsYXBzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUNBLFVBQVc7SUFFcUIsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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