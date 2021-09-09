"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _necessary = require("necessary");
var _types = require("../types");
var _styles = require("../styles");
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
        "\n\n  list-style: none;\n  margin-left: ",
        ";\n  \n  .topmost {\n    margin-top: 0;\n    margin-left: 0;\n    padding-bottom: ",
        ";\n  }\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
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
            value: function createDirectoryNameDragEntryItem(directoryName, param) {
                var collapsed = param === void 0 ? false : param;
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
var _default = (0, _easyWithStyle).default(EntriesList)(_templateObject(), _styles.entriesListMarginLeft, _styles.topmostEntriesListPaddingBottom);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsInBhdGhVdGlsaXRpZXMiLCJGSUxFX05BTUVfRFJBR19UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIiwiZW50cmllc0xpc3RNYXJnaW5MZWZ0IiwidG9wbW9zdEVudHJpZXNMaXN0UGFkZGluZ0JvdHRvbSIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJtYXJrZXJFbnRyeUl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwiRW50cmllc0xpc3QiLCJpc1RvcG1vc3QiLCJ0b3Btb3N0IiwicHJvcGVydGllcyIsImdldEV4cGxvcmVyIiwiZXhwbG9yZXIiLCJnZXRFbnRyeUl0ZW1zIiwiY2hpbGRFbnRyeUl0ZW1FbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJlbnRyeUl0ZW1zIiwiZ2V0RW50cnlJdGVtc0xlbmd0aCIsImVudHJ5SXRlbXNMZW5ndGgiLCJsZW5ndGgiLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsImhhc0NsYXNzIiwiaXNFbXB0eSIsImVtcHR5IiwiYWRkTWFya2VyIiwibWFya2VyRW50cnlJdGVtUGF0aCIsImRyYWdFbnRyeUl0ZW1UeXBlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1OYW1lIiwiYWRkTWFya2VyRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZU1hcmtlciIsInJlbW92ZU1hcmtlckVudHJ5SXRlbSIsImFkZEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJmaWxlTmFtZSIsImZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJjcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJhZGRFbnRyeUl0ZW0iLCJjcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVFbnRyeUl0ZW0iLCJhZGREaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZSIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibmV4dEVudHJ5SXRlbSIsInByZXZpb3VzRW50cnlJdGVtIiwiZmluZEVudHJ5SXRlbSIsIm5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSIsImlzQmVmb3JlIiwiYXBwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiZXhwbG9yZXJNb3VudGVkIiwiaXNNb3VudGVkIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInJlbW92ZSIsIm5hbWUiLCJ0eXBlIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMiLCJjYWxsYmFjayIsInR5cGVzIiwiZm9yRWFjaCIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwidHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUiLCJpbmNsdWRlcyIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwic29tZUVudHJ5SXRlbUJ5VHlwZXMiLCJzb21lIiwicmVzdWx0IiwiZmluZCIsImZpbmRFbnRyeUl0ZW1CeVR5cGVzIiwiZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzIiwiZW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJjb2xsYXBzZSIsImFkZENsYXNzIiwiZXhwYW5kIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0IiwiZXhwYW5kRW50cmllc0xpc3QiLCJiaW5kIiwiY29sbGFwc2VFbnRyaWVzTGlzdCIsImlzRW50cmllc0xpc3RDb2xsYXBzZWQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBQ0EsR0FBVyxDQUFYLFVBQVc7QUFFcUIsR0FBVSxDQUFWLE1BQVU7QUFDRCxHQUFXLENBQVgsT0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9kNUMsd0NBR3ZCO1NBQXdCLGtGQUtuQjtTQUFrQyw2REFPdEQ7Ozs7Ozs7QUFqZUEsR0FBSyxDQUFHLDRCQUE0QixHQUxOLFVBQVcsZUFLakMsNEJBQTRCLEVBQUUsdUNBQXVDLEdBTC9DLFVBQVcsZUFLSCx1Q0FBdUM7QUFFN0UsR0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekIsZUFBZSxFQUFmLGVBQWU7QUFDakIsQ0FBQztJQUVLLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRixXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBQ2YsR0FBUyxHQUFULFNBQVM7bUJBQVQsUUFBUSxDQUFSLFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBZSxXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBM0IsT0FBTyxHQUFLLFdBQWUsQ0FBM0IsT0FBTztnQkFFZixNQUFNLENBQUMsT0FBTztZQUNoQixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFnQixXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBNUIsUUFBUSxHQUFLLFdBQWUsQ0FBNUIsUUFBUTtnQkFFaEIsTUFBTSxDQUFDLFFBQVE7WUFDaEIsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNoQixHQUFLLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFDLFFBQVUsSUFDNUQsVUFBVSxHQUFHLHNCQUFzQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFNUMsTUFBTSxDQUFDLFVBQVU7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1CO21CQUFuQixRQUFRLENBQVIsbUJBQW1CLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUMvQixnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTTtnQkFFMUMsTUFBTSxDQUFDLGdCQUFnQjtZQUN6QixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFDLFNBQVc7Z0JBRTNDLE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQy9CLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQ3BDLEtBQUssR0FBSSxnQkFBZ0IsS0FBSyxDQUFDO2dCQUVyQyxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztnQkFDakQsR0FBSyxDQUFDLG9CQUFvQixHQUFHLDRCQUE0QixDQUFDLG1CQUFtQjtnQkFFN0UsRUFBRSxFQUFFLG9CQUFvQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQyxHQUFLLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCO2dCQUNoRSxDQUFDLE1BQU0sQ0FBQztvQkFDTixHQUFLLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQixHQUM1Riw4Q0FBOEMsR0FBRyx1Q0FBdUMsQ0FBQyxtQkFBbUI7b0JBRWxILG1CQUFtQixHQUFHLDhDQUE4QyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFekUsaUNBQWlDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQjtnQkFDcEYsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQVksR0FBWixZQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLEdBQUcsQ0FBQztnQkFDZCxJQUFJLENBQUMscUJBQXFCO1lBQzVCLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxxQkFBcUI7Z0JBRXZCLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyw0QkFBNEIsQ0FBQyxRQUFRO2dCQUVsRSxFQUFFLEVBQUUsb0JBQW9CLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xDLEdBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFL0IscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVE7b0JBRS9ELEVBQUUsRUFBRSxxQkFBcUIsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVE7d0JBRWpFLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCO29CQUN6QyxDQUFDO2dCQUNILENBQUMsTUFBTSxDQUFDO29CQUNOLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsb0JBQW9CO29CQUVoRyxFQUFFLEVBQUUsaUNBQWlDLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQy9DLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxvQkFBb0I7d0JBRTlGLElBQUksQ0FBQyxZQUFZLENBQUMsaUNBQWlDO29CQUNyRCxDQUFDO29CQUVELEdBQUssQ0FBQyxtQ0FBbUMsR0FBRyx1Q0FBdUMsQ0FBQyxRQUFRO29CQUU1RixRQUFRLEdBQUcsbUNBQW1DLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVuRCxxQkFBcUIsR0FBRyxpQ0FBaUMsQ0FBQyxXQUFXLENBQUMsUUFBUTtnQkFDaEYsQ0FBQztnQkFFSCxNQUFNLENBQUMscUJBQXFCO1lBQzdCLENBQUM7OztZQUVBLEdBQWMsR0FBZCxjQUFjO21CQUFkLFFBQVEsQ0FBUixjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyw0QkFBNEIsQ0FBQyxRQUFRO2dCQUVsRSxFQUFFLEVBQUUsb0JBQW9CLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xDLEdBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUNuQixxQkFBcUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUTtvQkFFckUsRUFBRSxFQUFFLHFCQUFxQixLQUFLLElBQUksRUFBRSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQjtvQkFDNUMsQ0FBQztnQkFDSCxDQUFDLE1BQU0sQ0FBQztvQkFDTixHQUFLLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQjtvQkFFbEcsRUFBRSxFQUFFLGlDQUFpQyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUMvQyxHQUFLLENBQUMsbUNBQW1DLEdBQUcsdUNBQXVDLENBQUMsUUFBUTt3QkFFNUYsUUFBUSxHQUFHLG1DQUFtQyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt3QkFFbkQsaUNBQWlDLENBQUMsY0FBYyxDQUFDLFFBQVE7b0JBQzNELENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQWdCLEdBQWhCLGdCQUFnQjttQkFBaEIsUUFBUSxDQUFSLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxLQUFpQixFQUFFLENBQUM7b0JBQXBCLFNBQVMsR0FBVCxLQUFpQixjQUFMLEtBQUssR0FBakIsS0FBaUI7Z0JBQy9DLEdBQUcsQ0FBQywwQkFBMEI7Z0JBRTlCLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyw0QkFBNEIsQ0FBQyxhQUFhO2dCQUV2RSxFQUFFLEVBQUUsb0JBQW9CLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xDLEdBQUssQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFekMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWE7b0JBRTlFLEVBQUUsRUFBRSwwQkFBMEIsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDeEMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGFBQWEsRUFBRSxTQUFTO3dCQUUzRixJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQjtvQkFDOUMsQ0FBQztnQkFDSCxDQUFDLE1BQU0sQ0FBQztvQkFDTixHQUFHLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQjtvQkFFaEcsRUFBRSxFQUFFLGlDQUFpQyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUMvQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsb0JBQW9CO3dCQUU5RixJQUFJLENBQUMsWUFBWSxDQUFDLGlDQUFpQztvQkFDckQsQ0FBQztvQkFFRCxHQUFLLENBQUMsd0NBQXdDLEdBQUcsdUNBQXVDLENBQUMsYUFBYTtvQkFFdEcsYUFBYSxHQUFHLHdDQUF3QyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFN0QsMEJBQTBCLEdBQUcsaUNBQWlDLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFNBQVM7Z0JBQzFHLENBQUM7Z0JBRUQsTUFBTSxDQUFDLDBCQUEwQjtZQUNuQyxDQUFDOzs7WUFFRCxHQUFtQixHQUFuQixtQkFBbUI7bUJBQW5CLFFBQVEsQ0FBUixtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbEMsR0FBSyxDQUFDLG9CQUFvQixHQUFHLDRCQUE0QixDQUFDLGFBQWE7Z0JBRXZFLEVBQUUsRUFBRSxvQkFBb0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbEMsR0FBSyxDQUFDLGFBQWEsR0FBRyxhQUFhLEVBQzdCLDBCQUEwQixHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhO29CQUVwRixFQUFFLEVBQUUsMEJBQTBCLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCO29CQUNqRCxDQUFDO2dCQUNILENBQUMsTUFBTSxDQUFDO29CQUNOLEdBQUssQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsb0JBQW9CO29CQUVsRyxFQUFFLEVBQUUsaUNBQWlDLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQy9DLEdBQUssQ0FBQyx3Q0FBd0MsR0FBRyx1Q0FBdUMsQ0FBQyxhQUFhO3dCQUV0RyxhQUFhLEdBQUcsd0NBQXdDLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUU3RCxpQ0FBaUMsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhO29CQUNyRSxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzNCLGFBQWEsR0FBRyxTQUFTLEVBQ3pCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFQLFNBQVMsRUFBSyxDQUFDO29CQUNyRCxHQUFLLENBQUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTO29CQUVqRSxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO2dCQUVQLEVBQUUsRUFBRSxpQkFBaUIsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2dCQUN2QixDQUFDLE1BQU0sQ0FBQztvQkFDTixTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQztnQkFFRCxHQUFLLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTO2dCQUUxQyxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUM7b0JBQ3BCLFNBQVMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFFBQVEsR0FBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBQ2pELENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTttQkFBZixRQUFRLENBQVIsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMxQixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzNCLGVBQWUsR0FBRyxRQUFRLENBQUMsU0FBUztnQkFFMUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDO29CQUNwQixTQUFTLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEdBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUN4RCxDQUFDO2dCQUVELFNBQVMsQ0FBQyxNQUFNO1lBQ2xCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFELEdBQUcsQ0FBQyxlQUFlO2dCQUVuQixHQUFLLENBQUMsSUFBSSxHQUFHLG1CQUFtQixFQUMxQixJQUFJLEdBQUcsaUJBQWlCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVwQyxNQUFNLENBQUUsSUFBSTtvQkFDVixJQUFJLENBck9vRCxNQUFVO3dCQXFPdkMsQ0FBQzs0QkFDMUIsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUMzQix1QkFBdUIsR0FBRyxRQUFRLENBQUMsMEJBQTBCLElBQzdELHVCQUF1QixxQ0FFcEIsdUJBQXVCO2dDQUFDLElBQUksRUFBRSxJQUFJO2dDQUFFLFFBQVEsRUFBRSxRQUFROzs0QkFJL0QsZUFBZSxHQUFHLHVCQUF1QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs0QkFFL0MsS0FBSzt3QkFDUCxDQUFDO29CQUVELElBQUksQ0FuUG9ELE1BQVU7d0JBbVBsQyxDQUFDOzRCQUMvQixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzNCLDRCQUE0QixHQUFHLFFBQVEsQ0FBQywrQkFBK0IsSUFDdkUsNEJBQTRCLHFDQUV6Qiw0QkFBNEI7Z0NBQUMsSUFBSSxFQUFFLElBQUk7Z0NBQUUsUUFBUSxFQUFFLFFBQVE7OzRCQUlwRSxlQUFlLEdBQUcsNEJBQTRCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzRCQUVuRCxLQUFLO3dCQUNQLENBQUM7O2dCQUdILEdBQUssQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2dCQUUzQixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN6QixlQUFlLEVBQWYsZUFBZTtnQkFDakIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQXFCLEdBQXJCLHFCQUFxQjttQkFBckIsUUFBUSxDQUFSLHFCQUFxQixHQUFHLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHVCQUF1QjtnQkFFbEQsZUFBZSxDQUFDLE1BQU07Z0JBRXRCLGVBQWUsR0FBRyxJQUFJO2dCQUV0QixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN6QixlQUFlLEVBQWYsZUFBZTtnQkFDakIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQTJCLEdBQTNCLDJCQUEyQjttQkFBM0IsUUFBUSxDQUFSLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN2QyxHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzNCLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyx3QkFBd0IsSUFDekQscUJBQXFCLHFDQUVuQixxQkFBcUI7b0JBQUMsSUFBSSxFQUFFLElBQUk7b0JBQUUsUUFBUSxFQUFFLFFBQVE7O2dCQUl6RCxNQUFNLENBQUMscUJBQXFCO1lBQzdCLENBQUM7OztZQUVELEdBQWdDLEdBQWhDLGdDQUFnQzttQkFBaEMsUUFBUSxDQUFSLGdDQUFnQyxDQUFDLGFBQWEsRUFBRSxLQUFpQixFQUFFLENBQUM7b0JBQXBCLFNBQVMsR0FBVCxLQUFpQixjQUFMLEtBQUssR0FBakIsS0FBaUI7Z0JBQ2hFLEdBQUssQ0FBQyxJQUFJLEdBQUcsYUFBYSxFQUN2QixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFDM0IsMEJBQTBCLEdBQUcsUUFBUSxDQUFDLDZCQUE2QixJQUNuRSwwQkFBMEIscUNBRXhCLDBCQUEwQjtvQkFBQyxJQUFJLEVBQUUsSUFBSTtvQkFBRSxTQUFTLEVBQUUsU0FBUztvQkFBRSxRQUFRLEVBQUUsUUFBUTs7Z0JBSXBGLE1BQU0sQ0FBQywwQkFBMEI7WUFDbEMsQ0FBQzs7O1lBRUQsR0FBOEIsR0FBOUIsOEJBQThCO21CQUE5QixRQUFRLENBQVIsOEJBQThCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3pDLEdBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxHQUNsRSw0QkFBNEIsR0FBSSxxQkFBcUIsS0FBSyxJQUFJO2dCQUVqRSxNQUFNLENBQUMsNEJBQTRCO1lBQ3BDLENBQUM7OztZQUVELEdBQW1DLEdBQW5DLG1DQUFtQzttQkFBbkMsUUFBUSxDQUFSLG1DQUFtQyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNuRCxHQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWEsR0FDakYsaUNBQWlDLEdBQUksMEJBQTBCLEtBQUssSUFBSTtnQkFFM0UsTUFBTSxDQUFDLGlDQUFpQztZQUN6QyxDQUFDOzs7WUFFQSxHQUF1QixHQUF2Qix1QkFBdUI7bUJBQXZCLFFBQVEsQ0FBUix1QkFBdUIsQ0FBQyxRQUFRLEVBQVksQ0FBQztnQkFBWCxHQUFHLENBQUgsR0FBUSxDQUFSLElBQVEsR0FBUixTQUFRLENBQVIsTUFBUSxFQUFMLEtBQUssR0FBUixHQUFRLE9BQVIsSUFBUSxHQUFSLENBQVEsR0FBUixJQUFRLEdBQVIsQ0FBUSxHQUFSLENBQVEsR0FBUixJQUFRLEdBQVIsQ0FBUSxFQUFSLElBQVEsR0FBUixJQUFRLEVBQVIsSUFBUSxHQUFSLENBQUM7b0JBQUUsS0FBSyxDQUFSLElBQVEsR0FBUixDQUFRLElBQVIsU0FBUSxDQUFSLElBQVE7Z0JBQUQsQ0FBQztnQkFDeEMsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYTtnQkFFckMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsU0FBUyxFQUFLLENBQUM7b0JBQ2pDLEdBQUssQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFDbkMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhO29CQUU3RCxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQzt3QkFDL0IsUUFBUSxDQUFDLFNBQVM7b0JBQ3BCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBNVVWLE1BQVUsc0JBQVYsTUFBVTtZQTRVa0QsQ0FBQzs7O1lBRXpILEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixDQUFDLFFBQVEsRUFBWSxDQUFDO2dCQUFYLEdBQUcsQ0FBSCxHQUFRLENBQVIsSUFBUSxHQUFSLFNBQVEsQ0FBUixNQUFRLEVBQUwsS0FBSyxHQUFSLEdBQVEsT0FBUixJQUFRLEdBQVIsQ0FBUSxHQUFSLElBQVEsR0FBUixDQUFRLEdBQVIsQ0FBUSxHQUFSLElBQVEsR0FBUixDQUFRLEVBQVIsSUFBUSxHQUFSLElBQVEsRUFBUixJQUFRLEdBQVIsQ0FBQztvQkFBRSxLQUFLLENBQVIsSUFBUSxHQUFSLENBQVEsSUFBUixTQUFRLENBQVIsSUFBUTtnQkFBRCxDQUFDO2dCQUNyQyxHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhO2dCQUVyQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQVAsU0FBUyxFQUFLLENBQUM7b0JBQ3JDLEdBQUssQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sSUFDbkMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhO29CQUU3RCxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQzt3QkFDL0IsR0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsU0FBUzt3QkFFakMsTUFBTSxDQUFDLE1BQU07b0JBQ2YsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUMvQixTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFeEQsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBb0IsR0FBcEIsb0JBQW9CO21CQUFwQixRQUFRLENBQVIsb0JBQW9CLENBQUMsUUFBUSxFQUFZLENBQUM7Z0JBQVgsR0FBRyxDQUFILEdBQVEsQ0FBUixJQUFRLEdBQVIsU0FBUSxDQUFSLE1BQVEsRUFBTCxLQUFLLEdBQVIsR0FBUSxPQUFSLElBQVEsR0FBUixDQUFRLEdBQVIsSUFBUSxHQUFSLENBQVEsR0FBUixDQUFRLEdBQVIsSUFBUSxHQUFSLENBQVEsRUFBUixJQUFRLEdBQVIsSUFBUSxFQUFSLElBQVEsR0FBUixDQUFDO29CQUFFLEtBQUssQ0FBUixJQUFRLEdBQVIsQ0FBUSxJQUFSLFNBQVEsQ0FBUixJQUFRO2dCQUFELENBQUM7Z0JBQ3JDLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFDakMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFQLFNBQVMsRUFBSyxDQUFDO29CQUMxQyxHQUFLLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQ25DLDBCQUEwQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYTtvQkFFN0QsRUFBRSxFQUFFLDBCQUEwQixFQUFFLENBQUM7d0JBQy9CLEdBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVM7d0JBRWpDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs0QkFDWCxNQUFNLENBQUMsSUFBSTt3QkFDYixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQyxLQUFLLElBQUksQ0FBRSxDQUFJLEFBQUosRUFBSSxBQUFKLEVBQUk7Z0JBRXBCLE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7OztZQUVELEdBQTJCLEdBQTNCLDJCQUEyQjttQkFBM0IsUUFBUSxDQUFSLDJCQUEyQixDQUFDLElBQUksRUFBWSxDQUFDO2dCQUFYLEdBQUcsQ0FBSCxHQUFRLENBQVIsSUFBUSxHQUFSLFNBQVEsQ0FBUixNQUFRLEVBQUwsS0FBSyxHQUFSLEdBQVEsT0FBUixJQUFRLEdBQVIsQ0FBUSxHQUFSLElBQVEsR0FBUixDQUFRLEdBQVIsQ0FBUSxHQUFSLElBQVEsR0FBUixDQUFRLEVBQVIsSUFBUSxHQUFSLElBQVEsRUFBUixJQUFRLEdBQVIsQ0FBQztvQkFBRSxLQUFLLENBQVIsSUFBUSxHQUFSLENBQVEsSUFBUixTQUFRLENBQVIsSUFBUTtnQkFBRCxDQUFDO2dCQUN4QyxHQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBekIsS0FNTixDQU5NLElBQUksRUFBSixDQUFDO29CQUF5QixRQUFRLENBQVAsU0FBUyxFQUFLLENBQUM7d0JBQzFELEdBQUssQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXZDLEVBQUUsRUFBRSxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7NEJBQzNCLE1BQU0sQ0FBQyxJQUFJO3dCQUNiLENBQUM7b0JBQ0gsQ0FBQztnQkFBVSxDQUFDLENBTk0sTUFNTixvQkFBTixLQUFLLE9BQUssSUFBSTtnQkFFcEIsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBeUIsR0FBekIseUJBQXlCO21CQUF6QixRQUFRLENBQVIseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUNmLFNBQVMsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxFQXBZRyxNQUFVLHVCQXFZOUQscUJBQXFCLEdBQUcsU0FBUyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFN0MsTUFBTSxDQUFDLHFCQUFxQjtZQUM5QixDQUFDOzs7WUFFRCxHQUE4QixHQUE5Qiw4QkFBOEI7bUJBQTlCLFFBQVEsQ0FBUiw4QkFBOEIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDN0MsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxFQTNZTixNQUFVLDRCQTRZOUQsMEJBQTBCLEdBQUcsU0FBUyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakQsTUFBTSxDQUFDLDBCQUEwQjtZQUNuQyxDQUFDOzs7WUFFRCxHQUF1QixHQUF2Qix1QkFBdUI7bUJBQXZCLFFBQVEsQ0FBUix1QkFBdUIsR0FBRyxDQUFDO2dCQUN6QixHQUFLLENBQUcsZUFBZSxHQUFLLFVBQVUsQ0FBOUIsZUFBZTtnQkFFdkIsTUFBTSxDQUFDLGVBQWU7WUFDeEIsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNYLElBQUksQ0FBQyxRQUFRLEVBQUMsU0FBVztZQUMxQixDQUFDOzs7WUFFRixHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsRUFBQyxTQUFXO1lBQzdCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTO2dCQUU5QixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7b0JBQ1osSUFBSSxDQUFDLFFBQVEsRUFBQyxPQUFTO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO1lBQ2IsRUFBRyxBQUFILENBQUc7WUFDTCxDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2pCLEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ3ZDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksR0FDN0Msc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNuRCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUMxQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUM5QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksR0FDbEQsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ3hELG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUMxRCx1QkFBdUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBRXhFLE1BQU0sQ0FBRSxDQUFDO29CQUNMLGlCQUFpQixFQUFqQixpQkFBaUI7b0JBQ2pCLG1CQUFtQixFQUFuQixtQkFBbUI7b0JBQ25CLHNCQUFzQixFQUF0QixzQkFBc0I7b0JBQ3RCLE9BQU8sRUFBUCxPQUFPO29CQUNQLFNBQVMsRUFBVCxTQUFTO29CQUNaLFdBQVcsRUFBWCxXQUFXO29CQUNSLFlBQVksRUFBWixZQUFZO29CQUNaLGNBQWMsRUFBZCxjQUFjO29CQUNkLGdCQUFnQixFQUFoQixnQkFBZ0I7b0JBQ2hCLG1CQUFtQixFQUFuQixtQkFBbUI7b0JBQ25CLG9CQUFvQixFQUFwQixvQkFBb0I7b0JBQ3BCLHVCQUF1QixFQUF2Qix1QkFBdUI7Z0JBQzNCLENBQUM7WUFDRixDQUFDOzs7V0E1YkksV0FBVzttQkFkTyxLQUFNO2dCQWN4QixXQUFXLEdBOGJULE9BQU8sSUFBRyxFQUFJO2dCQTliaEIsV0FBVyxHQWdjUixpQkFBaUIsR0FBRyxDQUFDO0tBQzFCLE9BQVM7S0FDVCxRQUFVO0FBQ1osQ0FBQztnQkFuY0csV0FBVyxHQXFjUixpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxPQUFTO0FBQ3RCLENBQUM7bUJBdmRtQixjQUFpQixVQTBkZCxXQUFXLHFCQXBkbUMsT0FBVyx3QkFBWCxPQUFXIn0=