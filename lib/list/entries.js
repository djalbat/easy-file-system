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
                var created = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var fileNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath);
                if (topmostDirectoryName === null) {
                    var fileName = filePath; ///
                    fileNameDragEntryItem = this.findFileNameDragEntryItem(fileName);
                    if (fileNameDragEntryItem === null) {
                        fileNameDragEntryItem = this.createFileNameDragEntryItem(fileName, created);
                        this.addEntryItem(fileNameDragEntryItem);
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        var created1 = false, collapsed = true;
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed, created1);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                    filePath = filePathWithoutTopmostDirectoryName; ///
                    fileNameDragEntryItem = topmostDirectoryNameDragEntryItem.addFilePath(filePath, created);
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
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath) {
                var collapsed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, created = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var directoryNameDragEntryItem;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryName === null) {
                    var directoryName = directoryPath; ///
                    directoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(directoryName);
                    if (directoryNameDragEntryItem === null) {
                        directoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(directoryName, collapsed, created);
                        this.addEntryItem(directoryNameDragEntryItem);
                    } else {
                        collapsed ? directoryNameDragEntryItem.collapse() : directoryNameDragEntryItem.expand();
                    }
                } else {
                    var topmostDirectoryNameDragEntryItem = this.findDirectoryNameDragEntryItem(topmostDirectoryName);
                    if (topmostDirectoryNameDragEntryItem === null) {
                        var created1 = false;
                        topmostDirectoryNameDragEntryItem = this.createDirectoryNameDragEntryItem(topmostDirectoryName, collapsed, created1);
                        this.addEntryItem(topmostDirectoryNameDragEntryItem);
                    }
                    var directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);
                    directoryPath = directoryPathWithoutTopmostDirectoryName; ///
                    directoryNameDragEntryItem = topmostDirectoryNameDragEntryItem.addDirectoryPath(directoryPath, collapsed, created);
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
            value: function createFileNameDragEntryItem(fileName, created) {
                var name = fileName, explorer = this.getExplorer(), FileNameDragEntryItem = explorer.getFileNameDragEntryItem(), fileNameDragEntryItem = /*#__PURE__*/ React.createElement(FileNameDragEntryItem, {
                    name: name,
                    explorer: explorer,
                    created: created
                });
                return fileNameDragEntryItem;
            }
        },
        {
            key: "createDirectoryNameDragEntryItem",
            value: function createDirectoryNameDragEntryItem(directoryName, collapsed, created) {
                var name = directoryName, explorer = this.getExplorer(), DirectoryNameDragEntryItem = explorer.getDirectoryNameDragEntryItem(), directoryNameDragEntryItem = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryItem, {
                    name: name,
                    explorer: explorer,
                    collapsed: collapsed,
                    created: created
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
            key: "retrieveDirectoryNameDragEntryItems",
            value: function retrieveDirectoryNameDragEntryItems() {
                var directoryNameDragEntryItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                this.forEachDirectoryNameDragEntryItem(function(directoryNameDragEntryItem) {
                    directoryNameDragEntryItem.retrieveDragEntryItems(directoryNameDragEntryItems);
                    directoryNameDragEntryItems.push(directoryNameDragEntryItem);
                });
                return directoryNameDragEntryItems;
            }
        },
        {
            key: "retrieveSelectedDragEntryItem",
            value: function retrieveSelectedDragEntryItem() {
                var dragEntryItems = this.retrieveDragEntryItems(), selectedDragEntryItem = dragEntryItems.find(function(dragEntryItem) {
                    var selected = dragEntryItem.isSelected();
                    if (selected) {
                        return true;
                    }
                }) || null;
                return selectedDragEntryItem;
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
                var expandEntriesList = this.expand.bind(this), collapseEntriesList = this.collapse.bind(this), isEntriesListCollapsed = this.isCollapsed.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), selectPath = this.selectPath.bind(this), addFilePath = this.addFilePath.bind(this), removeMarker = this.removeMarker.bind(this), removeFilePath = this.removeFilePath.bind(this), removeAllPaths = this.removeAllPaths.bind(this), deselectAllPaths = this.deselectAllPaths.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), forEachDragEntryItem = this.forEachDragEntryItem.bind(this), retrieveDragEntryItems = this.retrieveDragEntryItems.bind(this), retrieveMarkerEntryItem = this.retrieveMarkerEntryItem.bind(this), retrieveSelectedDragEntryItem = this.retrieveSelectedDragEntryItem.bind(this), retrieveDirectoryNameDragEntryItems = this.retrieveDirectoryNameDragEntryItems.bind(this);
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
                    removeDirectoryPath: removeDirectoryPath,
                    forEachDragEntryItem: forEachDragEntryItem,
                    retrieveDragEntryItems: retrieveDragEntryItems,
                    retrieveMarkerEntryItem: retrieveMarkerEntryItem,
                    retrieveSelectedDragEntryItem: retrieveSelectedDragEntryItem,
                    retrieveDirectoryNameDragEntryItems: retrieveDirectoryNameDragEntryItems
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGVudHJpZXNMaXN0UGFkZGluZ0xlZnQgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vZW50cnlUeXBlc1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY29uc3QgbWFya2VyRW50cnlJdGVtID0gbnVsbDtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIG1hcmtlckVudHJ5SXRlbVxufSk7XG5cbmNsYXNzIEVudHJpZXNMaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzVG9wbW9zdCgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3QgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiB0b3Btb3N0O1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgeyBleHBsb3JlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIGV4cGxvcmVyO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtcygpIHtcblx0XHRjb25zdCBjaGlsZEVudHJ5SXRlbUVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwibGkuZW50cnlcIiksXG5cdFx0XHRcdFx0ZW50cnlJdGVtcyA9IGNoaWxkRW50cnlJdGVtRWxlbWVudHM7ICAvLy9cblxuXHRcdHJldHVybiBlbnRyeUl0ZW1zO1xuXHR9XG5cblx0Z2V0RW50cnlJdGVtc0xlbmd0aCgpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgZW50cnlJdGVtc0xlbmd0aCA9IGVudHJ5SXRlbXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXNMZW5ndGg7XG4gIH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmhhc0NsYXNzKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbXNMZW5ndGggPSBlbnRyeUl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChlbnRyeUl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGFkZE1hcmtlcihtYXJrZXJFbnRyeUl0ZW1QYXRoLCBkcmFnRW50cnlJdGVtVHlwZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChtYXJrZXJFbnRyeUl0ZW1QYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2VyRW50cnlJdGVtTmFtZSA9IG1hcmtlckVudHJ5SXRlbVBhdGg7ICAvLy9cblxuICAgICAgdGhpcy5hZGRNYXJrZXJFbnRyeUl0ZW0obWFya2VyRW50cnlJdGVtTmFtZSwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5SXRlbVBhdGgpO1xuXG4gICAgICBtYXJrZXJFbnRyeUl0ZW1QYXRoID0gbWFya2VyRW50cnlJdGVtUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGRNYXJrZXIobWFya2VyRW50cnlJdGVtUGF0aCwgZHJhZ0VudHJ5SXRlbVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU1hcmtlcigpIHtcbiAgICB0aGlzLnJlbW92ZU1hcmtlckVudHJ5SXRlbSgpO1xuICB9XG5cbiAgc2VsZWN0UGF0aChwYXRoKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGF0aCwgIC8vL1xuICAgICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERyYWdFbnRyeUl0ZW0obmFtZSk7XG5cbiAgICAgIGlmIChkcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGRyYWdFbnRyeUl0ZW0uc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCk7XG5cbiAgICAgICAgcGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnNlbGVjdFBhdGgocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgsIGNyZWF0ZWQgPSBmYWxzZSkge1xuXHRcdGxldCBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoOyAgLy8vXG5cbiAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5jcmVhdGVGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUsIGNyZWF0ZWQpO1xuXG4gICAgICAgIHRoaXMuYWRkRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCwgY3JlYXRlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmFkZEZpbGVQYXRoKGZpbGVQYXRoLCBjcmVhdGVkKTtcbiAgICB9XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cbiAgcmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSk7XG5cbiAgICAgIGlmIChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgsIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbUVtcHR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUFsbFBhdGhzKCkge1xuICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtcygpO1xuICB9XG5cbiAgZGVzZWxlY3RBbGxQYXRocygpIHtcbiAgICBjb25zdCBkcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEcmFnRW50cnlJdGVtcygpO1xuXG4gICAgZHJhZ0VudHJ5SXRlbXMuZm9yRWFjaCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgZHJhZ0VudHJ5SXRlbS5kZXNlbGVjdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQgPSB0cnVlLCBjcmVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoOyAgLy8vXG5cbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkLCBjcmVhdGVkKTtcblxuICAgICAgICB0aGlzLmFkZEVudHJ5SXRlbShkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWQgP1xuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLmNvbGxhcHNlKCkgOlxuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZXhwYW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCwgY3JlYXRlZCk7XG5cbiAgICAgICAgdGhpcy5hZGRFbnRyeUl0ZW0odG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCwgY3JlYXRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSh0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllcyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXMpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbXB0eSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlJdGVtKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIG5leHRFbnRyeUl0ZW0gPSBlbnRyeUl0ZW0sICAvLy9cbiAgICAgICAgICBwcmV2aW91c0VudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbSgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0gPSBuZXh0RW50cnlJdGVtLmlzQmVmb3JlKGVudHJ5SXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0RW50cnlCZWZvcmVFbnRyeUl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocHJldmlvdXNFbnRyeUl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXBwZW5kKGVudHJ5SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5SXRlbS5pbnNlcnRCZWZvcmUocHJldmlvdXNFbnRyeUl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGxvcmVyTW91bnRlZCA9IGV4cGxvcmVyLmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyTW91bnRlZCkge1xuICAgICAgY29uc3QgZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzID0gZW50cnlJdGVtLmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgICAgZW50cnlJdGVtRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAgIGVudHJ5SXRlbSxcbiAgICAgICAgICAgICAgLi4uZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgICBdO1xuXG4gICAgICBlbnRyeUl0ZW1FbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgIGVudHJ5SXRlbUVsZW1lbnRzLmZvckVhY2goKGVudHJ5SXRlbUVsZW1lbnQpID0+IChlbnRyeUl0ZW1FbGVtZW50LmRpZE1vdW50ICYmIGVudHJ5SXRlbUVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIGV4cGxvcmVyTW91bnRlZCA9IGV4cGxvcmVyLmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyTW91bnRlZCkge1xuICAgICAgY29uc3QgZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzID0gZW50cnlJdGVtLmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgICAgZW50cnlJdGVtRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAgIGVudHJ5SXRlbSxcbiAgICAgICAgICAgICAgLi4uZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgICBdO1xuXG4gICAgICBlbnRyeUl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbnRyeUl0ZW1FbGVtZW50KSA9PiAoZW50cnlJdGVtRWxlbWVudC53aWxsVW5tb3VudCAmJiBlbnRyeUl0ZW1FbGVtZW50LndpbGxVbm1vdW50KCkpKTsgIC8vL1xuICAgIH1cblxuICAgIGVudHJ5SXRlbS5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbW92ZUVudHJ5SXRlbXMoKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZW50cnlJdGVtcy5mb3JFYWNoKChlbnRyeUl0ZW0pID0+IHRoaXMucmVtb3ZlRW50cnlJdGVtKGVudHJ5SXRlbSkpO1xuICB9XG5cbiAgYWRkTWFya2VyRW50cnlJdGVtKG1hcmtlckVudHJ5SXRlbU5hbWUsIGRyYWdFbnRyeUl0ZW1UeXBlKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbTtcblxuICAgIGNvbnN0IG5hbWUgPSBtYXJrZXJFbnRyeUl0ZW1OYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gZHJhZ0VudHJ5SXRlbVR5cGU7ICAvLy9cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcbiAgICAgICAgICAgICAgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpLFxuICAgICAgICAgICAgICBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBmaWxlTmFtZU1hcmtlckVudHJ5SXRlbTsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgICAgIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBleHBsb3Jlci5nZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtKCksXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeUl0ZW0gPSBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeUl0ZW0gPSBtYXJrZXJFbnRyeUl0ZW07IC8vL1xuXG4gICAgdGhpcy5hZGRFbnRyeUl0ZW0oZW50cnlJdGVtKTtcblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgbWFya2VyRW50cnlJdGVtXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbS5yZW1vdmUoKTtcblxuICAgIG1hcmtlckVudHJ5SXRlbSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgICAgIG1hcmtlckVudHJ5SXRlbVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lLCBjcmVhdGVkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlJdGVtID0gZXhwbG9yZXIuZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IGNyZWF0ZWQ9e2NyZWF0ZWR9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlJdGVtO1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkLCBjcmVhdGVkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGRpcmVjdG9yeU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGV4cGxvcmVyLmdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gY3JlYXRlZD17Y3JlYXRlZH0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gIT09IG51bGwpO1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudDtcblx0fVxuXG4gIGZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuICAgIGNvbnN0IGVudHJ5SXRlbXMgPSB0aGlzLmdldEVudHJ5SXRlbXMoKTtcblxuICAgIGVudHJ5SXRlbXMuZm9yRWFjaCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgY2FsbGJhY2soZW50cnlJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2hEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUpOyB9XG5cbiAgZm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSk7IH1cblxuICBzb21lRW50cnlJdGVtQnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5nZXRFbnRyeUl0ZW1zKCk7XG5cbiAgICByZXR1cm4gZW50cnlJdGVtcy5zb21lKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlJdGVtVHlwZSk7XG5cbiAgICAgIGlmICh0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeUl0ZW0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRW50cnlJdGVtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbUJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpLFxuICAgICAgICAgIGVudHJ5SXRlbSA9IGVudHJ5SXRlbXMuZmluZCgoZW50cnlJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0eXBlc0luY2x1ZGVzRW50cnlJdGVtVHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5SXRlbVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlJdGVtKTtcblxuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsOyAvLy87XG5cbiAgICByZXR1cm4gZW50cnlJdGVtO1xuICB9XG5cbiAgZmluZEVudHJ5SXRlbXNCeVR5cGVzKC4uLnR5cGVzKSB7XG4gICAgY29uc3QgZW50cnlJdGVtcyA9IHRoaXMuZ2V0RW50cnlJdGVtcygpO1xuXG4gICAgZmlsdGVyKGVudHJ5SXRlbXMsIChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeUl0ZW1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVzSW5jbHVkZXNFbnRyeUl0ZW1UeXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVudHJ5SXRlbXM7XG4gIH1cblxuICBmaW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgLi4udHlwZXMpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeVR5cGVzKChlbnRyeUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoZW50cnlJdGVtTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAuLi50eXBlcykgfHwgbnVsbDtcblxuICAgIHJldHVybiBlbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRHJhZ0VudHJ5SXRlbShuYW1lKSB7XG4gICAgY29uc3QgZW50cnlJdGVtID0gdGhpcy5maW5kRW50cnlJdGVtQnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtID0gZW50cnlJdGVtOyAgLy8vXG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbTtcbiAgfVxuXG4gIGZpbmREcmFnRW50cnlJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyeUl0ZW1zID0gdGhpcy5maW5kRW50cnlJdGVtc0J5VHlwZXMoRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBkcmFnRW50cnlJdGVtcyA9IGVudHJ5SXRlbXM7ICAvLy9cblxuICAgIHJldHVybiBkcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gZmlsZU5hbWUsICAvLy9cbiAgICAgICAgICBlbnRyeUl0ZW0gPSB0aGlzLmZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFKSxcbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07ICAvLy9cblxuICAgIHJldHVybiBmaWxlTmFtZURyYWdFbnRyeUl0ZW07XG4gIH1cblxuICBmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oZGlyZWN0b3J5TmFtZSkge1xuICAgIGNvbnN0IGVudHJ5SXRlbSA9IHRoaXMuZmluZEVudHJ5SXRlbUJ5TmFtZUFuZFR5cGVzKGRpcmVjdG9yeU5hbWUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSksXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBlbnRyeUl0ZW07IC8vL1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zID0gW10pIHtcbiAgICB0aGlzLmZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSgoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pID0+IHtcbiAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMoZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zKTtcblxuICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zLnB1c2goZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcztcbiAgfVxuXG4gIHJldHJpZXZlU2VsZWN0ZWREcmFnRW50cnlJdGVtKCkge1xuICAgIGNvbnN0IGRyYWdFbnRyeUl0ZW1zID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKCksXG4gICAgICAgICAgc2VsZWN0ZWREcmFnRW50cnlJdGVtID0gZHJhZ0VudHJ5SXRlbXMuZmluZCgoZHJhZ0VudHJ5SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkcmFnRW50cnlJdGVtLmlzU2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWREcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBtYXJrZXJFbnRyeUl0ZW0gfSA9IGdsb2JhbFRoaXM7XG5cbiAgICByZXR1cm4gbWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgcmV0cmlldmVEcmFnRW50cnlJdGVtcyhkcmFnRW50cnlJdGVtcyA9IFtdKSB7XG4gICAgdGhpcy5mb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW07IC8vL1xuXG4gICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbS5yZXRyaWV2ZURyYWdFbnRyeUl0ZW1zKGRyYWdFbnRyeUl0ZW1zKTtcblxuICAgICAgZHJhZ0VudHJ5SXRlbXMucHVzaChkcmFnRW50cnlJdGVtKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgoZmlsZU5hbWVEcmFnRW50cnlJdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcmFnRW50cnlJdGVtID0gZmlsZU5hbWVEcmFnRW50cnlJdGVtOyAgLy8vXG5cbiAgICAgIGRyYWdFbnRyeUl0ZW1zLnB1c2goZHJhZ0VudHJ5SXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZHJhZ0VudHJ5SXRlbXM7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcblx0ICB0aGlzLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0ZXhwYW5kKCkge1xuXHQgIHRoaXMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB0b3Btb3N0ID0gdGhpcy5pc1RvcG1vc3QoKTtcblxuICAgIGlmICh0b3Btb3N0KSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwidG9wbW9zdFwiKTtcbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0xpc3QgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgY29sbGFwc2VFbnRyaWVzTGlzdCA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW50cmllc0xpc3RDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNlbGVjdFBhdGggPSB0aGlzLnNlbGVjdFBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVNYXJrZXIgPSB0aGlzLnJlbW92ZU1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUFsbFBhdGhzID0gdGhpcy5yZW1vdmVBbGxQYXRocy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRlc2VsZWN0QWxsUGF0aHMgPSB0aGlzLmRlc2VsZWN0QWxsUGF0aHMuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGREaXJlY3RvcnlQYXRoID0gdGhpcy5hZGREaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCA9IHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGZvckVhY2hEcmFnRW50cnlJdGVtID0gdGhpcy5mb3JFYWNoRHJhZ0VudHJ5SXRlbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJldHJpZXZlRHJhZ0VudHJ5SXRlbXMgPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSA9IHRoaXMucmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtcyA9IHRoaXMucmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMuYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0xpc3QsXG4gICAgICBjb2xsYXBzZUVudHJpZXNMaXN0LFxuICAgICAgaXNFbnRyaWVzTGlzdENvbGxhcHNlZCxcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG4gICAgICBzZWxlY3RQYXRoLFxuXHRcdFx0YWRkRmlsZVBhdGgsXG4gICAgICByZW1vdmVNYXJrZXIsXG4gICAgICByZW1vdmVGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUFsbFBhdGhzLFxuICAgICAgZGVzZWxlY3RBbGxQYXRocyxcbiAgICAgIGFkZERpcmVjdG9yeVBhdGgsXG4gICAgICByZW1vdmVEaXJlY3RvcnlQYXRoLFxuICAgICAgZm9yRWFjaERyYWdFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZURyYWdFbnRyeUl0ZW1zLFxuICAgICAgcmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0sXG4gICAgICByZXRyaWV2ZVNlbGVjdGVkRHJhZ0VudHJ5SXRlbSxcbiAgICAgIHJldHJpZXZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1zXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ0b3Btb3N0XCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNMaXN0KWBcblxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6ICR7ZW50cmllc0xpc3RQYWRkaW5nTGVmdH07XG4gIFxuICAudG9wbW9zdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsIm1hcmtlckVudHJ5SXRlbSIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJFbnRyaWVzTGlzdCIsImlzVG9wbW9zdCIsInRvcG1vc3QiLCJwcm9wZXJ0aWVzIiwiZ2V0RXhwbG9yZXIiLCJleHBsb3JlciIsImdldEVudHJ5SXRlbXMiLCJjaGlsZEVudHJ5SXRlbUVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImVudHJ5SXRlbXMiLCJnZXRFbnRyeUl0ZW1zTGVuZ3RoIiwiZW50cnlJdGVtc0xlbmd0aCIsImxlbmd0aCIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VkIiwiaGFzQ2xhc3MiLCJpc0VtcHR5IiwiZW1wdHkiLCJhZGRNYXJrZXIiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwiZHJhZ0VudHJ5SXRlbVR5cGUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1hcmtlckVudHJ5SXRlbU5hbWUiLCJhZGRNYXJrZXJFbnRyeUl0ZW0iLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJmaW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJtYXJrZXJFbnRyeUl0ZW1QYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lIiwicmVtb3ZlTWFya2VyIiwicmVtb3ZlTWFya2VyRW50cnlJdGVtIiwic2VsZWN0UGF0aCIsInBhdGgiLCJuYW1lIiwiZHJhZ0VudHJ5SXRlbSIsImZpbmREcmFnRW50cnlJdGVtIiwic2VsZWN0IiwiZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJleHBhbmQiLCJhZGRGaWxlUGF0aCIsImZpbGVQYXRoIiwiY3JlYXRlZCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZpbGVOYW1lIiwiZmluZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEVudHJ5SXRlbSIsImNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtIiwicmVtb3ZlRmlsZVBhdGgiLCJyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzIiwicmVtb3ZlRW50cnlJdGVtIiwidG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRW1wdHkiLCJyZW1vdmVBbGxQYXRocyIsInJlbW92ZUVudHJ5SXRlbXMiLCJkZXNlbGVjdEFsbFBhdGhzIiwiZHJhZ0VudHJ5SXRlbXMiLCJyZXRyaWV2ZURyYWdFbnRyeUl0ZW1zIiwiZm9yRWFjaCIsImRlc2VsZWN0IiwiYWRkRGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImRpcmVjdG9yeU5hbWUiLCJjb2xsYXBzZSIsImRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZW50cnlJdGVtIiwibmV4dEVudHJ5SXRlbSIsInByZXZpb3VzRW50cnlJdGVtIiwiZmluZEVudHJ5SXRlbSIsIm5leHRFbnRyeUJlZm9yZUVudHJ5SXRlbSIsImlzQmVmb3JlIiwiYXBwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiZXhwbG9yZXJNb3VudGVkIiwiaXNNb3VudGVkIiwiZW50cnlJdGVtRGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZW50cnlJdGVtRWxlbWVudHMiLCJyZXZlcnNlIiwiZW50cnlJdGVtRWxlbWVudCIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJyZW1vdmUiLCJ0eXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZpbGVOYW1lTWFya2VyRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJmaWxlTmFtZU1hcmtlckVudHJ5SXRlbSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIiwiZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSIsInJldHJpZXZlTWFya2VyRW50cnlJdGVtIiwiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZ2V0RmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJnZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImlzRmlsZU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbVByZXNlbnQiLCJpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImRpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtUHJlc2VudCIsImZvckVhY2hFbnRyeUl0ZW1CeVR5cGVzIiwiY2FsbGJhY2siLCJ0eXBlcyIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwidHlwZXNJbmNsdWRlc0VudHJ5SXRlbVR5cGUiLCJpbmNsdWRlcyIsImZvckVhY2hEcmFnRW50cnlJdGVtIiwiZm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInNvbWVFbnRyeUl0ZW1CeVR5cGVzIiwic29tZSIsInJlc3VsdCIsImZpbmQiLCJmaW5kRW50cnlJdGVtQnlUeXBlcyIsImZpbmRFbnRyeUl0ZW1zQnlUeXBlcyIsImZpbmRFbnRyeUl0ZW1CeU5hbWVBbmRUeXBlcyIsImVudHJ5SXRlbU5hbWUiLCJnZXROYW1lIiwiZmluZERyYWdFbnRyeUl0ZW1zIiwicmV0cmlldmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbXMiLCJwdXNoIiwicmV0cmlldmVTZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZERyYWdFbnRyeUl0ZW0iLCJzZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImV4cGFuZEVudHJpZXNMaXN0IiwiYmluZCIsImNvbGxhcHNlRW50cmllc0xpc3QiLCJpc0VudHJpZXNMaXN0Q29sbGFwc2VkIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcW9CQTs7O2VBQUE7OztrRUFub0JzQjtvQkFFRTt5QkFDc0I7c0JBRVA7MEJBQ21DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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