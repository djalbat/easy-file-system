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
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                        {
                            var explorer = this.getExplorer(), FileNameMarkerEntryItem = explorer.getFileNameMarkerEntryItem(), fileNameMarkerEntryItem = /*#__PURE__*/ React.createElement(FileNameMarkerEntryItem, {
                                name: name,
                                explorer: explorer
                            });
                            markerEntryItem = fileNameMarkerEntryItem; ///
                            break;
                        }
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
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
                var markerEntryItem = globalThis.markerEntryItem;
                return markerEntryItem;
            }
        },
        {
            key: "retrieveDragEntryItems",
            value: function retrieveDragEntryItems(param) {
                var dragEntryItems = param === void 0 ? [] : param;
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