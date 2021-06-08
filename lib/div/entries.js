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
            key: "addMarker",
            value: function addMarker(markerEntryDivPath, dragEntryDivType) {
                var topmostDirectoryName = topmostDirectoryNameFromPath(markerEntryDivPath);
                if (topmostDirectoryName === null) {
                    var markerEntryDivName = markerEntryDivPath; ///
                    this.addMarkerEntryDiv(markerEntryDivName, dragEntryDivType);
                } else {
                    var topmostDirectoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(topmostDirectoryName), markerEntryDivPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(markerEntryDivPath);
                    markerEntryDivPath = markerEntryDivPathWithoutTopmostDirectoryName; ///
                    topmostDirectoryNameDragEntryDiv.addMarker(markerEntryDivPath, dragEntryDivType);
                }
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
            key: "addEntryDiv",
            value: function addEntryDiv(entryDiv) {
                var explorerDiv = this.getExplorerDiv(), nextEntryDiv = entryDiv, previousEntryDiv = this.findEntryDiv(function(entryDiv1) {
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
                var explorerDivMounted = explorerDiv.isMounted();
                if (explorerDivMounted) {
                    entryDiv.didMount && entryDiv.didMount(); ///
                }
            }
        },
        {
            key: "removeEntryDiv",
            value: function removeEntryDiv(entryDiv) {
                var explorerDivMounted = explorerDiv.isMounted();
                if (explorerDivMounted) {
                    entryDiv.willUnmount && entryDiv.willUnmount(); ///
                }
                entryDiv.remove();
            }
        },
        {
            key: "addMarkerEntryDiv",
            value: function addMarkerEntryDiv(markerEntryDivName, dragEntryDivType) {
                var markerEntryDiv;
                var name = markerEntryDivName, type = dragEntryDivType; ///
                switch(type){
                    case _types.FILE_NAME_TYPE:
                        {
                            var explorerDiv = this.getExplorerDiv(), FileNameMarkerEntryDiv = explorerDiv.getFileNameMarkerEntryDiv(), fileNameMarkerEntryDiv = /*#__PURE__*/ React.createElement(FileNameMarkerEntryDiv, {
                                name: name
                            });
                            markerEntryDiv = fileNameMarkerEntryDiv; ///
                            break;
                        }
                    case _types.DIRECTORY_NAME_TYPE:
                        {
                            var explorerDiv = this.getExplorerDiv(), DirectoryNameMarkerEntryDiv = explorerDiv.getDirectoryNameMarkerEntryDiv(), directoryNameMarkerEntryDiv = /*#__PURE__*/ React.createElement(DirectoryNameMarkerEntryDiv, {
                                name: name
                            });
                            markerEntryDiv = directoryNameMarkerEntryDiv; ///
                            break;
                        }
                }
                var entryDiv = markerEntryDiv; ///
                this.addEntryDiv(entryDiv);
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
                var expandEntriesDiv = this.expand.bind(this), collapseEntriesDiv = this.collapse.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), retrieveDragEntryDivPath = this.retrieveDragEntryDivPath.bind(this);
                return {
                    expandEntriesDiv: expandEntriesDiv,
                    collapseEntriesDiv: collapseEntriesDiv,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuXHRnZXRFeHBsb3JlckRpdigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyRGl2IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXJEaXY7XG5cdH1cblxuXHRnZXRFbnRyeURpdnMoKSB7XG5cdFx0Y29uc3QgY2hpbGRFbnRyeURpdkVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmVudHJ5XCIpLFxuXHRcdFx0XHRcdGVudHJ5RGl2cyA9IGNoaWxkRW50cnlEaXZFbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cztcblx0fVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcbiAgICAgICAgICBlbnRyeURpdnNMZW5ndGggPSBlbnRyeURpdnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5RGl2c0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyRW50cnlEaXZQYXRoLCBkcmFnRW50cnlEaXZUeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5RGl2UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtlckVudHJ5RGl2TmFtZSA9IG1hcmtlckVudHJ5RGl2UGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5RGl2KG1hcmtlckVudHJ5RGl2TmFtZSwgZHJhZ0VudHJ5RGl2VHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeURpdlBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlEaXZQYXRoKTtcblxuICAgICAgbWFya2VyRW50cnlEaXZQYXRoID0gbWFya2VyRW50cnlEaXZQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuYWRkTWFya2VyKG1hcmtlckVudHJ5RGl2UGF0aCwgZHJhZ0VudHJ5RGl2VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmlsZVBhdGgoZmlsZVBhdGgpIHtcblx0XHRsZXQgZmlsZU5hbWVEcmFnRW50cnlEaXYgPSBudWxsO1xuXG5cdFx0Y29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKSxcblx0XHRcdFx0XHR0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCksXG5cdFx0XHRcdFx0ZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG5cdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG5cdFx0XHRpZiAoZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lKSB7XG5cdFx0XHRcdFx0ZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmFkZEZpbGVQYXRoKGZpbGVQYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cblx0XHRcdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29sbGFwc2VkID0gdHJ1ZTsgLy8vXG5cblx0XHRcdFx0XHR0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuXHRcdFx0XHRcdHRoaXMuYWRkRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgZmlsZVBhdGggPSBmaWxlUGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cblx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG5cdFx0XHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IHRoaXMuaXNGaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQoZmlsZU5hbWUpO1xuXG5cdFx0XHRcdGlmIChmaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQpIHtcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpO1xuXG5cdFx0XHRcdFx0dGhpcy5hZGRFbnRyeURpdihmaWxlTmFtZURyYWdFbnRyeURpdik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuICByZW1vdmVGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuICAgICAgICAgICAgICByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IHRydWU7IC8vL2V4cGxvcmVyRGl2LmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCk7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuaXNFbXB0eSgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdkVtcHR5KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlEaXYoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpO1xuXG4gICAgICBpZiAoZmlsZU5hbWVEcmFnRW50cnlEaXYgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeURpdihmaWxlTmFtZURyYWdFbnRyeURpdik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQgPSBmYWxzZSkge1xuICAgIGxldCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gbnVsbDtcblxuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuICAgICAgaWYgKGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lKSB7XG4gICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKTtcblxuICAgICAgICAgIHRoaXMuYWRkRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gZGlyZWN0b3J5UGF0aCwgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IHRoaXMuaXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudChkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQpIHtcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5jcmVhdGVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVudHJ5RGl2KGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5zZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcbiAgfVxuXG4gIHJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUsIC8vL1xuICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LnJlbW92ZURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgICAgY29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG4gICAgICAgICAgICAgIHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50ID0gdHJ1ZTsgLy8vZXhwbG9yZXJEaXYuaXNPcHRpb25QcmVzZW50KFJFTU9WRV9FTVBUWV9QQVJFTlRfRElSRUNUT1JJRVMpO1xuXG4gICAgICAgIGlmIChyZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kVG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdkVtcHR5ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5pc0VtcHR5KCk7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2RW1wdHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbnRyeURpdihkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVudHJ5RGl2KGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5RGl2KGVudHJ5RGl2KSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG4gICAgICAgICAgbmV4dEVudHJ5RGl2ID0gZW50cnlEaXYsICAvLy9cbiAgICAgICAgICBwcmV2aW91c0VudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXYoKGVudHJ5RGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RW50cnlCZWZvcmVFbnRyeURpdiA9IG5leHRFbnRyeURpdi5pc0JlZm9yZShlbnRyeURpdik7XG5cbiAgICAgICAgICAgIGlmIChuZXh0RW50cnlCZWZvcmVFbnRyeURpdikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwcmV2aW91c0VudHJ5RGl2ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmFwcGVuZChlbnRyeURpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudHJ5RGl2Lmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5RGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBsb3JlckRpdk1vdW50ZWQgPSBleHBsb3JlckRpdi5pc01vdW50ZWQoKTtcblxuICAgIGlmIChleHBsb3JlckRpdk1vdW50ZWQpIHtcbiAgICAgIGVudHJ5RGl2LmRpZE1vdW50ICYmIGVudHJ5RGl2LmRpZE1vdW50KCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5RGl2KGVudHJ5RGl2KSB7XG4gICAgY29uc3QgZXhwbG9yZXJEaXZNb3VudGVkID0gZXhwbG9yZXJEaXYuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJEaXZNb3VudGVkKSB7XG4gICAgICBlbnRyeURpdi53aWxsVW5tb3VudCAmJiBlbnRyeURpdi53aWxsVW5tb3VudCgpOyAgLy8vXG4gICAgfVxuXG4gICAgZW50cnlEaXYucmVtb3ZlKCk7XG4gIH1cblxuICBhZGRNYXJrZXJFbnRyeURpdihtYXJrZXJFbnRyeURpdk5hbWUsIGRyYWdFbnRyeURpdlR5cGUpIHtcbiAgICBsZXQgbWFya2VyRW50cnlEaXY7XG5cbiAgICBjb25zdCBuYW1lID0gbWFya2VyRW50cnlEaXZOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gZHJhZ0VudHJ5RGl2VHlwZTsgIC8vL1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZJTEVfTkFNRV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcbiAgICAgICAgICAgICAgRmlsZU5hbWVNYXJrZXJFbnRyeURpdiA9IGV4cGxvcmVyRGl2LmdldEZpbGVOYW1lTWFya2VyRW50cnlEaXYoKSxcbiAgICAgICAgICAgICAgZmlsZU5hbWVNYXJrZXJFbnRyeURpdiA9XG5cbiAgICAgICAgICAgICAgICA8RmlsZU5hbWVNYXJrZXJFbnRyeURpdiBuYW1lPXtuYW1lfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeURpdiA9IGZpbGVOYW1lTWFya2VyRW50cnlEaXY7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9UWVBFIDoge1xuICAgICAgICBjb25zdCBleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcbiAgICAgICAgICAgICAgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2ID0gZXhwbG9yZXJEaXYuZ2V0RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2KCksXG4gICAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdiA9XG5cbiAgICAgICAgICAgICAgICA8RGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2IG5hbWU9e25hbWV9IC8+XG5cbiAgICAgICAgICAgICAgO1xuXG4gICAgICAgIG1hcmtlckVudHJ5RGl2ID0gZGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5RGl2OyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeURpdiA9IG1hcmtlckVudHJ5RGl2OyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnlEaXYoZW50cnlEaXYpO1xuICB9XG5cbiAgY3JlYXRlRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeURpdiA9IGV4cGxvcmVyRGl2LmdldEZpbGVOYW1lRHJhZ0VudHJ5RGl2KCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPVxuXG5cdFx0XHRcdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlEaXYgbmFtZT17bmFtZX0gZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBleHBsb3JlckRpdi5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2IG5hbWU9e25hbWV9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBleHBsb3JlckRpdj17ZXhwbG9yZXJEaXZ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudDtcblx0fVxuXG5cdHJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aChkcmFnRW50cnlEaXYpIHtcblx0XHRsZXQgZHJhZ0VudHJ5RGl2UGF0aCA9IHRoaXMuZmluZERyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KTtcblxuXHRcdGlmIChkcmFnRW50cnlEaXZQYXRoID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KSA9PiB7XG5cdFx0XHRcdGRyYWdFbnRyeURpdlBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LnJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aChkcmFnRW50cnlEaXYpO1xuXG5cdFx0XHRcdGlmIChkcmFnRW50cnlEaXZQYXRoICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdk5hbWUgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRcdGRyYWdFbnRyeURpdlBhdGggPSBgJHtkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZX0vJHtkcmFnRW50cnlEaXZQYXRofWA7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRyYWdFbnRyeURpdlBhdGg7XG5cdH1cblxuXHRzb21lRmlsZU5hbWVEcmFnRW50cnlEaXYoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5RGl2KGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0c29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfVFlQRSk7IH1cblxuXHRmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaEVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpO1xuXG5cdFx0ZW50cnlEaXZzLmZvckVhY2goKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeURpdlR5cGUgPSBlbnRyeURpdi5nZXRUeXBlKCksXG5cdFx0XHRcdFx0XHR0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlEaXZUeXBlKTtcblxuXHRcdFx0aWYgKHR5cGVzSW5jbHVkZXNFbnRyeURpdlR5cGUpIHtcblx0XHRcdFx0Y2FsbGJhY2soZW50cnlEaXYpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c29tZUVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpO1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cy5zb21lKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZUeXBlID0gZW50cnlEaXYuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5RGl2VHlwZSk7XG5cblx0XHRcdGlmICh0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5RGl2KTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Zm9yRWFjaEVudHJ5RGl2KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKTtcblxuXHRcdGVudHJ5RGl2cy5mb3JFYWNoKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y2FsbGJhY2soZW50cnlEaXYpO1xuXHRcdH0pO1xuXHR9XG5cblx0c29tZUVudHJ5RGl2KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKTtcblxuXHRcdHJldHVybiBlbnRyeURpdnMuc29tZSgoZW50cnlEaXYpID0+IHtcblx0XHRcdHJldHVybiBjYWxsYmFjayhlbnRyeURpdik7XG5cdFx0fSk7XG5cdH1cblxuXHRmaW5kRHJhZ0VudHJ5RGl2UGF0aChkcmFnRW50cnlEaXYpIHtcblx0XHRsZXQgZHJhZ0VudHJ5RGl2UGF0aCA9IG51bGw7XG5cblx0XHR0aGlzLnNvbWVFbnRyeURpdigoZW50cnlEaXYpID0+IHtcblx0XHRcdGlmIChlbnRyeURpdiA9PT0gZHJhZ0VudHJ5RGl2KSB7ICAvLy9cblx0XHRcdFx0Y29uc3QgZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGRyYWdFbnRyeURpdlBhdGggPSBlbnRyeURpdk5hbWU7ICAvLy9cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBkcmFnRW50cnlEaXZQYXRoO1xuXHR9XG5cblx0ZmluZERyYWdFbnRyeURpdihuYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeURpdkJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9UWVBFLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhmaWxlTmFtZSwgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0ZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpIHtcblx0XHRsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBudWxsO1xuXG5cdFx0dGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlRvcG1vc3QgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmlzVG9wbW9zdCgpO1xuXG5cdFx0XHRpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlRvcG1vc3QpIHtcblx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2OyAgLy8vXG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXZCeVR5cGVzKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRpZiAoZW50cnlEaXZOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIC4uLnR5cGVzKTtcblxuXHRcdHJldHVybiBlbnRyeURpdjtcblx0fVxuXG5cdGZpbmRFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcblx0XHRcdFx0XHRlbnRyeURpdiA9IGVudHJ5RGl2cy5maW5kKChlbnRyeURpdikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZW50cnlEaXZUeXBlID0gZW50cnlEaXYuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5RGl2VHlwZSk7XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5RGl2KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSB8fCBudWxsOyAvLy87XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeU5hbWUobmFtZSkge1xuXHRcdGNvbnN0IGVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXYoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeURpdk5hbWUgPSBlbnRyeURpdi5nZXROYW1lKCk7XG5cblx0XHRcdGlmIChlbnRyeURpdk5hbWUgPT09IG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXYoY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpLFxuXHRcdFx0XHRcdGVudHJ5RGl2ID0gZW50cnlEaXZzLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2O1xuXHR9XG5cblx0Y29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0cGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBleHBhbmRFbnRyaWVzRGl2ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0RpdiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZEZpbGVQYXRoID0gdGhpcy5hZGRGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZUZpbGVQYXRoID0gdGhpcy5yZW1vdmVGaWxlUGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGFkZERpcmVjdG9yeVBhdGggPSB0aGlzLmFkZERpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZW1vdmVEaXJlY3RvcnlQYXRoID0gdGhpcy5yZW1vdmVEaXJlY3RvcnlQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlEaXZQYXRoID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeURpdlBhdGguYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0RpdixcbiAgICAgIGNvbGxhcHNlRW50cmllc0RpdixcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG5cdFx0XHRyZXRyaWV2ZURyYWdFbnRyeURpdlBhdGhcblx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRW50cmllc0RpdilgXG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDQSxVQUFXO0lBRVcsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9oQnpCLDBHQVNyQzs7Ozs7OztJQTNoQlEs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