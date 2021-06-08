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
        "\n\n  width: fit-content;\n  background-color: red;\n  \n  .collapsed {\n    display: none;\n  }\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath = _necessary.pathUtilities.pathWithoutTopmostDirectoryNameFromPath;
var EntriesDiv = /*#__PURE__*/ function(Element1) {
    _inherits(EntriesDiv, Element1);
    function EntriesDiv() {
        _classCallCheck(this, EntriesDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(EntriesDiv).apply(this, arguments));
    }
    _createClass(EntriesDiv, [
        {
            key: "getExplorerDiv",
            value: function getExplorerDiv() {
                var _properties = this.properties, explorerDiv = _properties.explorerDiv;
                return explorerDiv;
            }
        },
        {
            key: "getEntryDivs",
            value: function getEntryDivs() {
                var childEntryDivElements = this.getChildElements("div.entry"), entryDivs = childEntryDivElements; ///
                return entryDivs;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var entryDivs = this.getEntryDivs(), entryDivsLength = entryDivs.length, empty = entryDivsLength === 0;
                return empty;
            }
        },
        {
            key: "addEntryDiv",
            value: function addEntryDiv(entryDiv) {
                var nextEntryDiv = entryDiv, previousEntryDiv = this.findEntryDiv(function(entryDiv1) {
                    var nextEntryBeforeEntryDiv = nextEntryDiv.isBefore(entryDiv1);
                    if (nextEntryBeforeEntryDiv) {
                        return true;
                    }
                });
                if (previousEntryDiv === null) {
                    this.append(entryDiv);
                } else {
                    entryDiv.insertBefore(previousEntryDiv);
                }
                entryDiv.didMount && entryDiv.didMount(); ///
            }
        },
        {
            key: "removeEntryDiv",
            value: function removeEntryDiv(entryDiv) {
                entryDiv.willUnmount && entryDiv.willUnmount(); ///
                entryDiv.remove();
            }
        },
        {
            key: "addFilePath",
            value: function addFilePath(filePath) {
                var fileNameDragEntryDiv = null;
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath), topmostDirectoryNameDragEntryDiv = this.findTopmostDirectoryNameDragEntryDiv(), filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);
                if (topmostDirectoryNameDragEntryDiv !== null) {
                    if (filePathWithoutTopmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryDivName = topmostDirectoryNameDragEntryDiv.getName();
                        if (topmostDirectoryName === topmostDirectoryNameDragEntryDivName) {
                            filePath = filePathWithoutTopmostDirectoryName; ///
                            fileNameDragEntryDiv = topmostDirectoryNameDragEntryDiv.addFilePath(filePath);
                        }
                    }
                } else {
                    if (topmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryDiv1 = this.findDirectoryNameDragEntryDiv(topmostDirectoryName);
                        if (topmostDirectoryNameDragEntryDiv1 === null) {
                            var collapsed = true; ///
                            topmostDirectoryNameDragEntryDiv1 = this.createDirectoryNameDragEntryDiv(topmostDirectoryName, collapsed);
                            this.addEntryDiv(topmostDirectoryNameDragEntryDiv1);
                        }
                        var filePath1 = filePathWithoutTopmostDirectoryName; ///
                        fileNameDragEntryDiv = topmostDirectoryNameDragEntryDiv1.addFilePath(filePath1);
                    } else {
                        var fileName = filePath, fileNameDragEntryDivPresent = this.isFileNameDragEntryDivPresent(fileName);
                        if (fileNameDragEntryDivPresent) {
                            fileNameDragEntryDiv = this.findFileNameDragEntryDiv(fileName);
                        } else {
                            fileNameDragEntryDiv = this.createFileNameDragEntryDiv(fileName);
                            this.addEntryDiv(fileNameDragEntryDiv);
                        }
                    }
                }
                return fileNameDragEntryDiv;
            }
        },
        {
            key: "removeFilePath",
            value: function removeFilePath(filePath2) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(filePath2), filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath2);
                if (topmostDirectoryName !== null) {
                    var directoryName = topmostDirectoryName, directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);
                    if (directoryNameDragEntryDiv !== null) {
                        filePath2 = filePathWithoutTopmostDirectoryName; ///
                        directoryNameDragEntryDiv.removeFilePath(filePath2);
                        var explorerDiv = this.getExplorerDiv(), removeEmptyParentDirectoriesOptionPresent = true; ///explorerDiv.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
                        if (removeEmptyParentDirectoriesOptionPresent) {
                            var topmostDirectoryNameDragEntryDiv2 = this.findTopmostDirectoryNameDragEntryDiv();
                            if (directoryNameDragEntryDiv !== topmostDirectoryNameDragEntryDiv2) {
                                var directoryNameDragEntryDivEmpty = directoryNameDragEntryDiv.isEmpty();
                                if (directoryNameDragEntryDivEmpty) {
                                    this.removeEntryDiv(directoryNameDragEntryDiv);
                                }
                            }
                        }
                    }
                } else {
                    var fileName = filePath2, fileNameDragEntryDiv = this.findFileNameDragEntryDiv(fileName);
                    if (fileNameDragEntryDiv !== null) {
                        this.removeEntryDiv(fileNameDragEntryDiv);
                    }
                }
            }
        },
        {
            key: "addDirectoryPath",
            value: function addDirectoryPath(directoryPath, param) {
                var collapsed = param === void 0 ? false : param;
                var directoryNameDragEntryDiv = null;
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath), topmostDirectoryNameDragEntryDiv3 = this.findTopmostDirectoryNameDragEntryDiv(), directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);
                if (topmostDirectoryNameDragEntryDiv3 !== null) {
                    if (directoryPathWithoutTopmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryDivName = topmostDirectoryNameDragEntryDiv3.getName();
                        if (topmostDirectoryName === topmostDirectoryNameDragEntryDivName) {
                            directoryPath = directoryPathWithoutTopmostDirectoryName; ///
                            directoryNameDragEntryDiv = topmostDirectoryNameDragEntryDiv3.addDirectoryPath(directoryPath, collapsed);
                        }
                    }
                } else {
                    if (topmostDirectoryName !== null) {
                        var topmostDirectoryNameDragEntryDiv4 = this.findDirectoryNameDragEntryDiv(topmostDirectoryName);
                        if (topmostDirectoryNameDragEntryDiv4 === null) {
                            var collapsed1 = true; ///
                            topmostDirectoryNameDragEntryDiv4 = this.createDirectoryNameDragEntryDiv(topmostDirectoryName, collapsed1);
                            this.addEntryDiv(topmostDirectoryNameDragEntryDiv4);
                        }
                        var directoryPath1 = directoryPathWithoutTopmostDirectoryName; ///
                        directoryNameDragEntryDiv = topmostDirectoryNameDragEntryDiv4.addDirectoryPath(directoryPath1, collapsed);
                    } else {
                        var directoryName = directoryPath, directoryNameDragEntryDivPresent = this.isDirectoryNameDragEntryDivPresent(directoryName);
                        if (directoryNameDragEntryDivPresent) {
                            directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);
                        } else {
                            directoryNameDragEntryDiv = this.createDirectoryNameDragEntryDiv(directoryName, collapsed);
                            this.addEntryDiv(directoryNameDragEntryDiv);
                        }
                        directoryNameDragEntryDiv.setCollapsed(collapsed);
                    }
                }
                return directoryNameDragEntryDiv;
            }
        },
        {
            key: "removeDirectoryPath",
            value: function removeDirectoryPath(directoryPath2) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath2), directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath2);
                if (topmostDirectoryName !== null) {
                    var directoryName = topmostDirectoryName, directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);
                    if (directoryNameDragEntryDiv !== null) {
                        directoryPath2 = directoryPathWithoutTopmostDirectoryName; ///
                        directoryNameDragEntryDiv.removeDirectoryPath(directoryPath2);
                        var explorerDiv = this.getExplorerDiv(), removeEmptyParentDirectoriesOptionPresent = true; ///explorerDiv.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);
                        if (removeEmptyParentDirectoriesOptionPresent) {
                            var topmostDirectoryNameDragEntryDiv3 = this.findTopmostDirectoryNameDragEntryDiv();
                            if (directoryNameDragEntryDiv !== topmostDirectoryNameDragEntryDiv3) {
                                var directoryNameDragEntryDivEmpty = directoryNameDragEntryDiv.isEmpty();
                                if (directoryNameDragEntryDivEmpty) {
                                    this.removeEntryDiv(directoryNameDragEntryDiv);
                                }
                            }
                        }
                    }
                } else {
                    var directoryName = directoryPath2, directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);
                    if (directoryNameDragEntryDiv !== null) {
                        this.removeEntryDiv(directoryNameDragEntryDiv);
                    }
                }
            }
        },
        {
            key: "createFileNameDragEntryDiv",
            value: function createFileNameDragEntryDiv(fileName) {
                var name = fileName, explorerDiv = this.getExplorerDiv(), FileNameDragEntryDiv = explorerDiv.getFileNameDragEntryDiv(), fileNameDragEntryDiv = /*#__PURE__*/ React.createElement(FileNameDragEntryDiv, {
                    name: name,
                    explorerDiv: explorerDiv
                });
                return fileNameDragEntryDiv;
            }
        },
        {
            key: "createDirectoryNameDragEntryDiv",
            value: function createDirectoryNameDragEntryDiv(directoryName, collapsed2) {
                var name = directoryName, explorerDiv = this.getExplorerDiv(), DirectoryNameDragEntryDiv = explorerDiv.getDirectoryNameDragEntryDiv(), directoryNameDragEntryDiv = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryDiv, {
                    name: name,
                    collapsed: collapsed2,
                    explorerDiv: explorerDiv
                });
                return directoryNameDragEntryDiv;
            }
        },
        {
            key: "isFileNameDragEntryDivPresent",
            value: function isFileNameDragEntryDivPresent(fileName) {
                var fileNameDragEntryDiv = this.findFileNameDragEntryDiv(fileName), fileNameDragEntryDivPresent = fileNameDragEntryDiv !== null;
                return fileNameDragEntryDivPresent;
            }
        },
        {
            key: "isDirectoryNameDragEntryDivPresent",
            value: function isDirectoryNameDragEntryDivPresent(directoryName) {
                var directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName), directoryNameDragEntryDivPresent = directoryNameDragEntryDiv !== null;
                return directoryNameDragEntryDivPresent;
            }
        },
        {
            key: "retrieveDragEntryDivPath",
            value: function retrieveDragEntryDivPath(dragEntryDiv) {
                var dragEntryDivPath = this.findDragEntryDivPath(dragEntryDiv);
                if (dragEntryDivPath === null) {
                    this.someDirectoryNameDragEntryDiv(function(directoryNameDragEntryDiv) {
                        dragEntryDivPath = directoryNameDragEntryDiv.retrieveDragEntryDivPath(dragEntryDiv);
                        if (dragEntryDivPath !== null) {
                            var directoryNameDragEntryDivName = directoryNameDragEntryDiv.getName();
                            dragEntryDivPath = "".concat(directoryNameDragEntryDivName, "/").concat(dragEntryDivPath);
                            return true;
                        }
                    });
                }
                return dragEntryDivPath;
            }
        },
        {
            key: "someFileNameDragEntryDiv",
            value: function someFileNameDragEntryDiv(callback) {
                return this.someEntryDivByTypes(callback, _types.FILE_NAME_TYPE);
            }
        },
        {
            key: "forEachFileNameDragEntryDiv",
            value: function forEachFileNameDragEntryDiv(callback) {
                this.forEachEntryDivByTypes(callback, _types.FILE_NAME_TYPE);
            }
        },
        {
            key: "someDirectoryNameDragEntryDiv",
            value: function someDirectoryNameDragEntryDiv(callback) {
                return this.someEntryDivByTypes(callback, _types.DIRECTORY_NAME_TYPE);
            }
        },
        {
            key: "forEachDirectoryNameDragEntryDiv",
            value: function forEachDirectoryNameDragEntryDiv(callback) {
                this.forEachEntryDivByTypes(callback, _types.DIRECTORY_NAME_TYPE);
            }
        },
        {
            key: "forEachEntryDivByTypes",
            value: function forEachEntryDivByTypes(callback) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryDivs = this.getEntryDivs();
                entryDivs.forEach(function(entryDiv) {
                    var entryDivType = entryDiv.getType(), typesIncludesEntryDivType = types.includes(entryDivType);
                    if (typesIncludesEntryDivType) {
                        callback(entryDiv);
                    }
                });
            }
        },
        {
            key: "someEntryDivByTypes",
            value: function someEntryDivByTypes(callback) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryDivs = this.getEntryDivs();
                return entryDivs.some(function(entryDiv) {
                    var entryDivType = entryDiv.getType(), typesIncludesEntryDivType = types.includes(entryDivType);
                    if (typesIncludesEntryDivType) {
                        var result = callback(entryDiv);
                        return result;
                    }
                });
            }
        },
        {
            key: "forEachEntryDiv",
            value: function forEachEntryDiv(callback) {
                var entryDivs = this.getEntryDivs();
                entryDivs.forEach(function(entryDiv) {
                    callback(entryDiv);
                });
            }
        },
        {
            key: "someEntryDiv",
            value: function someEntryDiv(callback) {
                var entryDivs = this.getEntryDivs();
                return entryDivs.some(function(entryDiv) {
                    return callback(entryDiv);
                });
            }
        },
        {
            key: "findDragEntryDivPath",
            value: function findDragEntryDivPath(dragEntryDiv) {
                var dragEntryDivPath = null;
                this.someEntryDiv(function(entryDiv) {
                    if (entryDiv === dragEntryDiv) {
                        var entryDivName = entryDiv.getName();
                        dragEntryDivPath = entryDivName; ///
                        return true;
                    }
                });
                return dragEntryDivPath;
            }
        },
        {
            key: "findDragEntryDiv",
            value: function findDragEntryDiv(name) {
                return this.findEntryDivByNameAndTypes(name, _types.FILE_NAME_TYPE, _types.DIRECTORY_NAME_TYPE);
            }
        },
        {
            key: "findFileNameDragEntryDiv",
            value: function findFileNameDragEntryDiv(fileName) {
                return this.findEntryDivByNameAndTypes(fileName, _types.FILE_NAME_TYPE);
            }
        },
        {
            key: "findDirectoryNameDragEntryDiv",
            value: function findDirectoryNameDragEntryDiv(directoryName) {
                return this.findEntryDivByNameAndTypes(directoryName, _types.DIRECTORY_NAME_TYPE);
            }
        },
        {
            key: "findTopmostDirectoryNameDragEntryDiv",
            value: function findTopmostDirectoryNameDragEntryDiv() {
                var topmostDirectoryNameDragEntryDiv5 = null;
                this.someDirectoryNameDragEntryDiv(function(directoryNameDragEntryDiv) {
                    var directoryNameDragEntryDivTopmost = directoryNameDragEntryDiv.isTopmost();
                    if (directoryNameDragEntryDivTopmost) {
                        topmostDirectoryNameDragEntryDiv5 = directoryNameDragEntryDiv; ///
                        return true;
                    }
                });
                return topmostDirectoryNameDragEntryDiv5;
            }
        },
        {
            key: "findEntryDivByNameAndTypes",
            value: function findEntryDivByNameAndTypes(name) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryDiv = this.findEntryDivByTypes.apply(this, [
                    function(entryDiv1) {
                        var entryDivName = entryDiv1.getName();
                        if (entryDivName === name) {
                            return true;
                        }
                    }
                ].concat(_toConsumableArray(types)));
                return entryDiv;
            }
        },
        {
            key: "findEntryDivByTypes",
            value: function findEntryDivByTypes(callback) {
                for(var _len = arguments.length, types = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    types[_key - 1] = arguments[_key];
                }
                var entryDivs = this.getEntryDivs(), entryDiv = entryDivs.find(function(entryDiv1) {
                    var entryDivType = entryDiv1.getType(), typesIncludesEntryDivType = types.includes(entryDivType);
                    if (typesIncludesEntryDivType) {
                        var result = callback(entryDiv1);
                        if (result) {
                            return true;
                        }
                    }
                }) || null; ///;
                return entryDiv;
            }
        },
        {
            key: "findEntryDivByName",
            value: function findEntryDivByName(name) {
                var entryDiv = this.findEntryDiv(function(entryDiv1) {
                    var entryDivName = entryDiv1.getName();
                    if (entryDivName === name) {
                        return true;
                    }
                });
                return entryDiv;
            }
        },
        {
            key: "findEntryDiv",
            value: function findEntryDiv(callback) {
                var entryDivs = this.getEntryDivs(), entryDiv = entryDivs.find(callback) || null; ///
                return entryDiv;
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
                var expandEntriesDiv = this.expand.bind(this), collapseEntriesDiv = this.collapse.bind(this), isEmpty = this.isEmpty.bind(this), addFilePath = this.addFilePath.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), retrieveDragEntryDivPath = this.retrieveDragEntryDivPath.bind(this);
                return {
                    expandEntriesDiv: expandEntriesDiv,
                    collapseEntriesDiv: collapseEntriesDiv,
                    isEmpty: isEmpty,
                    addFilePath: addFilePath,
                    removeFilePath: removeFilePath,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    retrieveDragEntryDivPath: retrieveDragEntryDivPath
                };
            }
        }
    ]);
    return EntriesDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(EntriesDiv, "tagName", "div");
_defineProperty(EntriesDiv, "defaultProperties", {
    className: "entries"
});
var _default = (0, _easyWithStyle).default(EntriesDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuXHRnZXRFeHBsb3JlckRpdigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyRGl2IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXJEaXY7XG5cdH1cblxuXHRnZXRFbnRyeURpdnMoKSB7XG5cdFx0Y29uc3QgY2hpbGRFbnRyeURpdkVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmVudHJ5XCIpLFxuXHRcdFx0XHRcdGVudHJ5RGl2cyA9IGNoaWxkRW50cnlEaXZFbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cztcblx0fVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcbiAgICAgICAgICBlbnRyeURpdnNMZW5ndGggPSBlbnRyeURpdnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5RGl2c0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBhZGRFbnRyeURpdihlbnRyeURpdikge1xuXHRcdGNvbnN0IG5leHRFbnRyeURpdiA9IGVudHJ5RGl2LCAgLy8vXG5cdFx0XHRcdFx0cHJldmlvdXNFbnRyeURpdiA9IHRoaXMuZmluZEVudHJ5RGl2KChlbnRyeURpdikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlEaXYgPSBuZXh0RW50cnlEaXYuaXNCZWZvcmUoZW50cnlEaXYpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlEaXYpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRpZiAocHJldmlvdXNFbnRyeURpdiA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hcHBlbmQoZW50cnlEaXYpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbnRyeURpdi5pbnNlcnRCZWZvcmUocHJldmlvdXNFbnRyeURpdik7XG5cdFx0fVxuXG5cdFx0ZW50cnlEaXYuZGlkTW91bnQgJiYgZW50cnlEaXYuZGlkTW91bnQoKTsgLy8vXG5cdH1cblxuICByZW1vdmVFbnRyeURpdihlbnRyeURpdikge1xuICAgIGVudHJ5RGl2LndpbGxVbm1vdW50ICYmIGVudHJ5RGl2LndpbGxVbm1vdW50KCk7ICAvLy9cblxuICAgIGVudHJ5RGl2LnJlbW92ZSgpO1xuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlEaXYgPSBudWxsO1xuXG5cdFx0Y29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKSxcblx0XHRcdFx0XHR0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCksXG5cdFx0XHRcdFx0ZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG5cdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG5cdFx0XHRpZiAoZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lKSB7XG5cdFx0XHRcdFx0ZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cblx0XHRcdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29sbGFwc2VkID0gdHJ1ZTsgLy8vXG5cblx0XHRcdFx0XHR0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuXHRcdFx0XHRcdHRoaXMuYWRkRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cblx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG5cdFx0XHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IHRoaXMuaXNGaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQoZmlsZU5hbWUpO1xuXG5cdFx0XHRcdGlmIChmaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQpIHtcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpO1xuXG5cdFx0XHRcdFx0dGhpcy5hZGRFbnRyeURpdihmaWxlTmFtZURyYWdFbnRyeURpdik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuICAgICAgICAgICAgICByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IHRydWU7IC8vL2V4cGxvcmVyRGl2LmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCk7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuaXNFbXB0eSgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdkVtcHR5KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlEaXYoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlEaXYgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeURpdihmaWxlTmFtZURyYWdFbnRyeURpdik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQgPSBmYWxzZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gbnVsbDtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuICAgICAgaWYgKGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lKSB7XG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICAgIHRoaXMuYWRkRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudChkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQpIHtcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVudHJ5RGl2KGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgY29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG4gICAgICAgICAgICAgIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50ID0gdHJ1ZTsgLy8vZXhwbG9yZXJEaXYuaXNPcHRpb25QcmVzZW50KFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kVG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdkVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5pc0VtcHR5KCk7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2RW1wdHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeURpdihkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5RGl2KGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlEaXYgPSBleHBsb3JlckRpdi5nZXRGaWxlTmFtZURyYWdFbnRyeURpdigpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5RGl2IG5hbWU9e25hbWV9IGV4cGxvcmVyRGl2PXtleHBsb3JlckRpdn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGRpcmVjdG9yeU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gZXhwbG9yZXJEaXYuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRpc0ZpbGVOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50O1xuXHR9XG5cblx0aXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQ7XG5cdH1cblxuXHRyZXRyaWV2ZURyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KSB7XG5cdFx0bGV0IGRyYWdFbnRyeURpdlBhdGggPSB0aGlzLmZpbmREcmFnRW50cnlEaXZQYXRoKGRyYWdFbnRyeURpdik7XG5cblx0XHRpZiAoZHJhZ0VudHJ5RGl2UGF0aCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikgPT4ge1xuXHRcdFx0XHRkcmFnRW50cnlEaXZQYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5yZXRyaWV2ZURyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KTtcblxuXHRcdFx0XHRpZiAoZHJhZ0VudHJ5RGl2UGF0aCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5nZXROYW1lKCk7XG5cblx0XHRcdFx0XHRkcmFnRW50cnlEaXZQYXRoID0gYCR7ZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdk5hbWV9LyR7ZHJhZ0VudHJ5RGl2UGF0aH1gO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBkcmFnRW50cnlEaXZQYXRoO1xuXHR9XG5cblx0c29tZUZpbGVOYW1lRHJhZ0VudHJ5RGl2KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9UWVBFKTsgfVxuXG5cdGZvckVhY2hGaWxlTmFtZURyYWdFbnRyeURpdihjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIEZJTEVfTkFNRV9UWVBFKTsgfVxuXG5cdHNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnNvbWVFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZvckVhY2hFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKTtcblxuXHRcdGVudHJ5RGl2cy5mb3JFYWNoKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZUeXBlID0gZW50cnlEaXYuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5RGl2VHlwZSk7XG5cblx0XHRcdGlmICh0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlKSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVudHJ5RGl2KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNvbWVFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKTtcblxuXHRcdHJldHVybiBlbnRyeURpdnMuc29tZSgoZW50cnlEaXYpID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5RGl2VHlwZSA9IGVudHJ5RGl2LmdldFR5cGUoKSxcblx0XHRcdFx0XHRcdHR5cGVzSW5jbHVkZXNFbnRyeURpdlR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeURpdlR5cGUpO1xuXG5cdFx0XHRpZiAodHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeURpdik7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZvckVhY2hFbnRyeURpdihjYWxsYmFjaykge1xuXHRcdGNvbnN0IGVudHJ5RGl2cyA9IHRoaXMuZ2V0RW50cnlEaXZzKCk7XG5cblx0XHRlbnRyeURpdnMuZm9yRWFjaCgoZW50cnlEaXYpID0+IHtcblx0XHRcdGNhbGxiYWNrKGVudHJ5RGl2KTtcblx0XHR9KTtcblx0fVxuXG5cdHNvbWVFbnRyeURpdihjYWxsYmFjaykge1xuXHRcdGNvbnN0IGVudHJ5RGl2cyA9IHRoaXMuZ2V0RW50cnlEaXZzKCk7XG5cblx0XHRyZXR1cm4gZW50cnlEaXZzLnNvbWUoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soZW50cnlEaXYpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZmluZERyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KSB7XG5cdFx0bGV0IGRyYWdFbnRyeURpdlBhdGggPSBudWxsO1xuXG5cdFx0dGhpcy5zb21lRW50cnlEaXYoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRpZiAoZW50cnlEaXYgPT09IGRyYWdFbnRyeURpdikgeyAgLy8vXG5cdFx0XHRcdGNvbnN0IGVudHJ5RGl2TmFtZSA9IGVudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRkcmFnRW50cnlEaXZQYXRoID0gZW50cnlEaXZOYW1lOyAgLy8vXG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZHJhZ0VudHJ5RGl2UGF0aDtcblx0fVxuXG5cdGZpbmREcmFnRW50cnlEaXYobmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhuYW1lLCBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSk7IH1cblxuXHRmaW5kRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5RGl2QnlOYW1lQW5kVHlwZXMoZmlsZU5hbWUsIEZJTEVfTkFNRV9UWVBFKTsgfVxuXG5cdGZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5RGl2QnlOYW1lQW5kVHlwZXMoZGlyZWN0b3J5TmFtZSwgRElSRUNUT1JZX05BTUVfVFlQRSk7IH1cblxuXHRmaW5kVG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoKSB7XG5cdFx0bGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gbnVsbDtcblxuXHRcdHRoaXMuc29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpID0+IHtcblx0XHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZUb3Btb3N0ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5pc1RvcG1vc3QoKTtcblxuXHRcdFx0aWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZUb3Btb3N0KSB7XG5cdFx0XHRcdHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjsgIC8vL1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cblx0ZmluZEVudHJ5RGl2QnlOYW1lQW5kVHlwZXMobmFtZSwgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeURpdiA9IHRoaXMuZmluZEVudHJ5RGl2QnlUeXBlcygoZW50cnlEaXYpID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5RGl2TmFtZSA9IGVudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0aWYgKGVudHJ5RGl2TmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LCAuLi50eXBlcyk7XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5RGl2cyA9IHRoaXMuZ2V0RW50cnlEaXZzKCksXG5cdFx0XHRcdFx0ZW50cnlEaXYgPSBlbnRyeURpdnMuZmluZCgoZW50cnlEaXYpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5RGl2VHlwZSA9IGVudHJ5RGl2LmdldFR5cGUoKSxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGVzSW5jbHVkZXNFbnRyeURpdlR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeURpdlR5cGUpO1xuXG5cdFx0XHRcdFx0XHRpZiAodHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbnRyeURpdik7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgfHwgbnVsbDsgLy8vO1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2O1xuXHR9XG5cblx0ZmluZEVudHJ5RGl2QnlOYW1lKG5hbWUpIHtcblx0XHRjb25zdCBlbnRyeURpdiA9IHRoaXMuZmluZEVudHJ5RGl2KChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRpZiAoZW50cnlEaXZOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2O1xuXHR9XG5cblx0ZmluZEVudHJ5RGl2KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcblx0XHRcdFx0XHRlbnRyeURpdiA9IGVudHJ5RGl2cy5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cblxuXHRcdHJldHVybiBlbnRyeURpdjtcblx0fVxuXG5cdGNvbGxhcHNlKCkge1xuXHQgIHRoaXMuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XG4gIH1cblxuXHRleHBhbmQoKSB7XG5cdCAgdGhpcy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdHBhcmVudENvbnRleHQoKSB7XG5cdFx0Y29uc3QgZXhwYW5kRW50cmllc0RpdiA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBjb2xsYXBzZUVudHJpZXNEaXYgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZURyYWdFbnRyeURpdlBhdGggPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aC5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG4gICAgICBleHBhbmRFbnRyaWVzRGl2LFxuICAgICAgY29sbGFwc2VFbnRyaWVzRGl2LFxuICAgICAgaXNFbXB0eSxcblx0XHRcdGFkZEZpbGVQYXRoLFxuICAgICAgcmVtb3ZlRmlsZVBhdGgsXG4gICAgICBhZGREaXJlY3RvcnlQYXRoLFxuICAgICAgcmVtb3ZlRGlyZWN0b3J5UGF0aCxcblx0XHRcdHJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aFxuXHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyaWVzRGl2KWBcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgXG4gIC5jb2xsYXBzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgICAgIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUNBLFVBQVc7SUFFVyxNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBK2N6QiwwR0FTckM7Ozs7Ozs7SUF0ZFEsNEJBQTRCLEdBSk4sVUFBVyxlQUlqQyw0QkFBNEIsRUFBRSx1Q0FBdUMsR0FKL0MsVUFBVyxlQUlILHVDQUF1QztJQUV2RSxVQUFVO2NBQVYsVUFBVTthQUFWLFVBQVU7OEJBQVYsVUFBVTtnRUFBVixVQUFVOztpQkFBVixVQUFVOztZQUNmLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7b0JBQ1csV0FBZSxRQUFWLFVBQVUsRUFBL0IsV0FBVyxHQUFLLFdBQWUsQ0FBL0IsV0FBVzt1QkFFWixXQUFXOzs7O1lBR25CLEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVk7b0JBQ0wscUJBQXFCLFFBQVEsZ0JBQWdCLEVBQUMsU0FBVyxJQUM1RCxT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