"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
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
    "@swc/helpers - typeof";
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
var filter = _necessary.arrayUtilities.filter, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
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
            key: "selectPath",
            value: function selectPath(path) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(path);
                if (topmostDirectoryName === null) {
                    var name = path, dragEntryItem = this.findDragEntryItem(name);
                    if (dragEntryItem !== null) {
                        dragEntryItem.select();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem !== null) {
                        var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(path);
                        path = filePathWithoutTopmostDirectoryName; ///
                        topmostDirectoryNameDragEntryItem.expand();
                        topmostDirectoryNameDragEntryItem.selectPath(path);
                    }
                }
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
            key: "deselectAllPaths",
            value: function deselectAllPaths() {
                var dragEntryItems = this.retrieveDragEntryItems();
                dragEntryItems.forEach(function(dragEntryItem) {
                    dragEntryItem.deselect();
                });
            }
        },
        {
            key: "editSelectedPath",
            value: function editSelectedPath() {
                var dragEntryItems = this.retrieveDragEntryItems();
                dragEntryItems.some(function(dragEntryItem) {
                    var selected = dragEntryItem.isSelected();
                    if (selected) {
                        dragEntryItem.edit();
                        return true;
                    }
                });
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
            key: "findEntryItemsByTypes",
            value: function findEntryItemsByTypes() {
                for(var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++){
                    types[_key] = arguments[_key];
                }
                var entryItems = this.getEntryItems();
                filter(entryItems, function(entryItem) {
                    var entryItemType = entryItem.getType(), typesIncludesEntryItemType = types.includes(entryItemType);
                    if (typesIncludesEntryItemType) {
                        return true;
                    }
                });
                return entryItems;
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
            key: "findDragEntryItem",
            value: function findDragEntryItem(name) {
                var entryItem = this.findEntryItemByNameAndTypes(name, _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), dragEntryItem = entryItem; ///
                return dragEntryItem;
            }
        },
        {
            key: "findDragEntryItems",
            value: function findDragEntryItems() {
                var entryItems = this.findEntryItemsByTypes(_entryTypes.FILE_NAME_DRAG_ENTRY_TYPE, _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE), dragEntryItems = entryItems; ///
                return dragEntryItems;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), editSelectedPath = this.editSelectedPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this);
                return {
                    expandEntriesList: expandEntriesList,
                    collapseEntriesList: collapseEntriesList,
                    isEntriesListCollapsed: isEntriesListCollapsed,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
                    selectPath: selectPath,
                    addFilePath: addFilePath,
                    removeMarker: removeMarker,
                    removeFilePath: removeFilePath,
                    removeAllPaths: removeAllPaths,
                    deselectAllPaths: deselectAllPaths,
                    addDirectoryPath: addDirectoryPath,
                    editSelectedPath: editSelectedPath,
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
var _default = (0, _easyWithStyle.default)(EntriesList)(_templateObject(), _styles.entriesListPaddingLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgc2VsZWN0UGF0aChwYXRoKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGF0aCwgIC8vL1xuICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERyYWdFbnRyeUl0ZW0obmFtZSk7XG5cbiAgICAgIGlmIChkcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuICAgIH1cblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3RvcmllcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWxsUGF0aHMoKSB7XG4gICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW1zKCk7XG4gIH1cblxuICBkZXNlbGVjdEFsbFBhdGhzKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5mb3JFYWNoKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBkcmFnRW50cnlJdGVtLmRlc2VsZWN0KCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0U2VsZWN0ZWRQYXRoKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCk7XG5cbiAgICBkcmFnRW50cnlJdGVtcy5zb21lKChkcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGRyYWdFbnRyeUl0ZW0uaXNTZWxlY3RlZCgpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgZHJhZ0VudHJ5SXRlbS5lZGl0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCA9IHRydWUpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcykge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgbmV4dEVudHJ5SXRlbSA9IGVudHJ5SXRlbSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSA9IG5leHRFbnRyeUl0ZW0uaXNCZWZvcmUoZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgaWYgKG5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50cnlJdGVtLmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMgPSBlbnRyeUl0ZW0uZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgICBlbnRyeUl0ZW1FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlJdGVtLFxuICAgICAgICAgICAgICAuLi5lbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgICAgZW50cnlJdGVtRWxlbWVudHMuZm9yRWFjaCgoZW50cnlJdGVtRWxlbWVudCkgPT4gKGVudHJ5SXRlbUVsZW1lbnQuZGlkTW91bnQgJiYgZW50cnlJdGVtRWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZXhwbG9yZXJNb3VudGVkID0gZXhwbG9yZXIuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJNb3VudGVkKSB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMgPSBlbnRyeUl0ZW0uZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgICBlbnRyeUl0ZW1FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgZW50cnlJdGVtLFxuICAgICAgICAgICAgICAuLi5lbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLmZvckVhY2goKGVudHJ5SXRlbUVsZW1lbnQpID0+IChlbnRyeUl0ZW1FbGVtZW50LndpbGxVbm1vdW50ICYmIGVudHJ5SXRlbUVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG4gICAgfVxuXG4gICAgZW50cnlJdGVtLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBlbnRyeUl0ZW1zLmZvckVhY2goKGVudHJ5SXRlbSkgPT4gdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZW50cnlJdGVtKSk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtO1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5SXRlbU5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBkcmFnRW50cnlJdGVtVHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUgOiB7XG4gICAgICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgICAgICBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldEZpbGVOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlJdGVtID1cblxuICAgICAgICAgICAgICAgIDxGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGZpbGVOYW1lTWFya2VyRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5SXRlbSA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5SXRlbSA9IG1hcmtlckVudHJ5SXRlbTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5SXRlbShlbnRyeUl0ZW0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICBtYXJrZXJFbnRyeUl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBsZXQgbWFya2VyRW50cnlJdGVtID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtLnJlbW92ZSgpO1xuXG4gICAgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlJdGVtIG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuXHRjcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0aXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lKSxcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG5cdGlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50O1xuXHR9XG5cbiAgZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaERyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKTsgfVxuXG4gIHNvbWVFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIHJldHVybiBlbnRyeUl0ZW1zLnNvbWUoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtID0gZW50cnlJdGVtcy5maW5kKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7IC8vLztcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRW50cnlJdGVtc0J5VHlwZXMoLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICBmaWx0ZXIoZW50cnlJdGVtcywgKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcztcbiAgfVxuXG4gIGZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5VHlwZXMoKGVudHJ5SXRlbSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChlbnRyeUl0ZW1OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIC4uLnR5cGVzKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREcmFnRW50cnlJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZmluZERyYWdFbnRyeUl0ZW1zKCkge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmZpbmRFbnRyeUl0ZW1zQnlUeXBlcyhGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGRyYWdFbnRyeUl0ZW1zID0gZW50cnlJdGVtczsgIC8vL1xuXG4gICAgcmV0dXJuIGRyYWdFbnRyeUl0ZW1zO1xuICB9XG5cbiAgZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpLFxuICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgIC8vL1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGVudHJ5SXRlbTsgLy8vXG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IG1hcmtlckVudHJ5SXRlbSB9ID0gZ2xvYmFsVGhpcztcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTsgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZHJhZ0VudHJ5SXRlbXMpO1xuXG4gICAgICBkcmFnRW50cnlJdGVtcy5wdXNoKGRyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKChmaWxlTmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW0gPSBmaWxlTmFtZURyYWdFbnRyeUl0ZW07ICAvLy9cblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuXHQgIHRoaXMuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuXHRleHBhbmQoKSB7XG5cdCAgdGhpcy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHRvcG1vc3QgPSB0aGlzLmlzVG9wbW9zdCgpO1xuXG4gICAgaWYgKHRvcG1vc3QpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ0b3Btb3N0XCIpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBleHBhbmRFbnRyaWVzTGlzdCA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBjb2xsYXBzZUVudHJpZXNMaXN0ID0gdGhpcy5jb2xsYXBzZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNFbXB0eSA9IHRoaXMuaXNFbXB0eS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZE1hcmtlciA9IHRoaXMuYWRkTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2VsZWN0UGF0aCA9IHRoaXMuc2VsZWN0UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEZpbGVQYXRoID0gdGhpcy5hZGRGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZU1hcmtlciA9IHRoaXMucmVtb3ZlTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlQWxsUGF0aHMgPSB0aGlzLnJlbW92ZUFsbFBhdGhzLmJpbmQodGhpcyksXG4gICAgICAgICAgZGVzZWxlY3RBbGxQYXRocyA9IHRoaXMuZGVzZWxlY3RBbGxQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBlZGl0U2VsZWN0ZWRQYXRoID0gdGhpcy5lZGl0U2VsZWN0ZWRQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCA9IHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtID0gdGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0uYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0xpc3QsXG4gICAgICBjb2xsYXBzZUVudHJpZXNMaXN0LFxuICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG4gICAgICBzZWxlY3RQYXRoLFxuXHRcdFx0YWRkRmlsZVBhdGgsXG4gICAgICByZW1vdmVNYXJrZXIsXG4gICAgICByZW1vdmVGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUFsbFBhdGhzLFxuICAgICAgZGVzZWxlY3RBbGxQYXRocyxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICBlZGl0U2VsZWN0ZWRQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcbiAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtLFxuICAgICAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyxcbiAgICAgIHJldHJpZXZlTWFya2VyRW50cnlJdGVtXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIm1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJFbnRyaWVzTGlzdCIsImlzVG9wbW9zdCIsInRvcG1vc3QiLCJwcm9wZXJ0aWVzIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsImdldEVudHJ5SXRlbXMiLCJjaGlsZEVudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImVudHJ5SXRlbXMiLCJnZXRFbnRyeUl0ZW1zTGVuZ3RoIiwiZW50cnlJdGVtc0xlbmd0aCIsImxlbmd0aCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VkIiwiaGFzQ2xhc3MiLCJpc0VtcHR5IiwiZW1wdHkiLCJhZGRNYXJrZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwic2VsZWN0UGF0aCIsInBhdGgiLCJuYW1lIiwiZHJhZ0VudHJ5SXRlbSIsImZpbmREcmFnRW50cnlJdGVtIiwic2VsZWN0IiwiZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJleHBhbmQiLCJhZGRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZmlsZU5hbWUiLCJmaW5kRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiYWRkRW50cnlJdGVtIiwiY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVGaWxlUGF0aCIsInJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMiLCJyZW1vdmVFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSIsInJlbW92ZUFsbFBhdGhzIiwicmVtb3ZlRW50cnlJdGVtcyIsImRlc2VsZWN0QWxsUGF0aHMiLCJkcmFnRW50cnlJdGVtcyIsInJldHJpZXZlRHJhZ0VudHJ5SXRlbXMiLCJmb3JFYWNoIiwiZGVzZWxlY3QiLCJlZGl0U2VsZWN0ZWRQYXRoIiwic29tZSIsInNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsImVkaXQiLCJhZGREaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZSIsImNvbGxhcHNlIiwiZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInJlbW92ZURpcmVjdG9yeVBhdGgiLCJlbnRyeUl0ZW0iLCJuZXh0RW50cnlJdGVtIiwicHJldmlvdXNFbnRyeUl0ZW0iLCJmaW5kRW50cnlJdGVtIiwibmV4dEVudHJ5QmVmb3JlRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJhcHBlbmQiLCJpbnNlcnRCZWZvcmUiLCJleHBsb3Jlck1vdW50ZWQiLCJpc01vdW50ZWQiLCJlbnRyeUl0ZW1EZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJlbnRyeUl0ZW1FbGVtZW50cyIsInJldmVyc2UiLCJlbnRyeUl0ZW1FbGVtZW50IiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInJlbW92ZSIsInR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsImZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJnZXRGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwiaXNGaWxlTmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QcmVzZW50IiwiZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMiLCJjYWxsYmFjayIsInR5cGVzIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJ0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSIsImluY2x1ZGVzIiwiZm9yRWFjaERyYWdFbnRyeUl0ZW0iLCJmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwic29tZUVudHJ5SXRlbUJ5VHlwZXMiLCJyZXN1bHQiLCJmaW5kIiwiZmluZEVudHJ5SXRlbUJ5VHlwZXMiLCJmaW5kRW50cnlJdGVtc0J5VHlwZXMiLCJmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMiLCJlbnRyeUl0ZW1OYW1lIiwiZ2V0TmFtZSIsImZpbmREcmFnRW50cnlJdGVtcyIsInB1c2giLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImV4cGFuZEVudHJpZXNMaXN0IiwiYmluZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdW5CQTs7O2VBQUE7OztrRUFybkJzQjtvQkFFRTt5QkFDc0I7c0JBRVA7MEJBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUx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