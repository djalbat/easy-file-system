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
            key: "removeMarker",
            value: function removeMarker() {
                this.removeMarkerEntryDiv();
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
            key: "removeMarkerEntryDiv",
            value: function removeMarkerEntryDiv() {
                var markerEntryDiv = this.retrieveMarkerEntryDiv();
                markerEntryDiv.remove();
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
            key: "retrieveMarkerEntryDiv",
            value: function retrieveMarkerEntryDiv() {
                var markerEntryDiv = this.findMarkerEntryDiv();
                if (markerEntryDiv === null) {
                    this.someDirectoryNameDragEntryDiv(function(directoryNameDragEntryDiv) {
                        markerEntryDiv = directoryNameDragEntryDiv.retrieveMarkerEntryDiv();
                        if (markerEntryDiv !== null) {
                            return true;
                        }
                    });
                }
                return markerEntryDiv;
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
            key: "findMarkerEntryDiv",
            value: function findMarkerEntryDiv() {
                var markerEntryDiv = this.findEntryDivByTypes(function(entryDiv) {
                    return true; ///
                }, _types.FILE_NAME_MARKER_TYPE, _types.DIRECTORY_NAME_MARKER_TYPE);
                return markerEntryDiv;
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
                var expandEntriesDiv = this.expand.bind(this), collapseEntriesDiv = this.collapse.bind(this), isEmpty = this.isEmpty.bind(this), addMarker = this.addMarker.bind(this), removeMarker = this.removeMarker.bind(this), addFilePath = this.addFilePath.bind(this), removeFilePath = this.removeFilePath.bind(this), addDirectoryPath = this.addDirectoryPath.bind(this), removeDirectoryPath = this.removeDirectoryPath.bind(this), retrieveMarkerEntryDiv = this.retrieveMarkerEntryDiv.bind(this), retrieveDragEntryDivPath = this.retrieveDragEntryDivPath.bind(this);
                return {
                    expandEntriesDiv: expandEntriesDiv,
                    collapseEntriesDiv: collapseEntriesDiv,
                    isEmpty: isEmpty,
                    addMarker: addMarker,
                    removeMarker: removeMarker,
                    addFilePath: addFilePath,
                    removeFilePath: removeFilePath,
                    addDirectoryPath: addDirectoryPath,
                    removeDirectoryPath: removeDirectoryPath,
                    retrieveMarkerEntryDiv: retrieveMarkerEntryDiv,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuXHRnZXRFeHBsb3JlckRpdigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyRGl2IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXJEaXY7XG5cdH1cblxuXHRnZXRFbnRyeURpdnMoKSB7XG5cdFx0Y29uc3QgY2hpbGRFbnRyeURpdkVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmVudHJ5XCIpLFxuXHRcdFx0XHRcdGVudHJ5RGl2cyA9IGNoaWxkRW50cnlEaXZFbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cztcblx0fVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcbiAgICAgICAgICBlbnRyeURpdnNMZW5ndGggPSBlbnRyeURpdnMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGVudHJ5RGl2c0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBhZGRNYXJrZXIobWFya2VyRW50cnlEaXZQYXRoLCBkcmFnRW50cnlEaXZUeXBlKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKG1hcmtlckVudHJ5RGl2UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtlckVudHJ5RGl2TmFtZSA9IG1hcmtlckVudHJ5RGl2UGF0aDsgIC8vL1xuXG4gICAgICB0aGlzLmFkZE1hcmtlckVudHJ5RGl2KG1hcmtlckVudHJ5RGl2TmFtZSwgZHJhZ0VudHJ5RGl2VHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdih0b3Btb3N0RGlyZWN0b3J5TmFtZSksXG4gICAgICAgICAgICBtYXJrZXJFbnRyeURpdlBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgobWFya2VyRW50cnlEaXZQYXRoKTtcblxuICAgICAgbWFya2VyRW50cnlEaXZQYXRoID0gbWFya2VyRW50cnlEaXZQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuYWRkTWFya2VyKG1hcmtlckVudHJ5RGl2UGF0aCwgZHJhZ0VudHJ5RGl2VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTWFya2VyKCkge1xuICAgIHRoaXMucmVtb3ZlTWFya2VyRW50cnlEaXYoKTtcbiAgfVxuXG4gIGFkZEZpbGVQYXRoKGZpbGVQYXRoKSB7XG5cdFx0bGV0IGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gbnVsbDtcblxuXHRcdGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCksXG5cdFx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpLFxuXHRcdFx0XHRcdGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuXHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuXHRcdFx0aWYgKGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZSkge1xuXHRcdFx0XHRcdGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG5cdFx0XHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7IC8vL1xuXG5cdFx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cblx0XHRcdFx0XHR0aGlzLmFkZEVudHJ5RGl2KHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG5cdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuXHRcdFx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQgPSB0aGlzLmlzRmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KGZpbGVOYW1lKTtcblxuXHRcdFx0XHRpZiAoZmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKTtcblxuXHRcdFx0XHRcdHRoaXMuYWRkRW50cnlEaXYoZmlsZU5hbWVEcmFnRW50cnlEaXYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cbiAgcmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICBjb25zdCBleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQgPSB0cnVlOyAvLy9leHBsb3JlckRpdi5pc09wdGlvblByZXNlbnQoUkVNT1ZFX0VNUFRZX1BBUkVOVF9ESVJFQ1RPUklFUyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUVtcHR5UGFyZW50RGlyZWN0b3JpZXNPcHRpb25QcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpO1xuXG4gICAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgIT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2RW1wdHkgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmlzRW1wdHkoKTtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZFbXB0eSkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVudHJ5RGl2KGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLCAgLy8vXG4gICAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZEZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKTtcblxuICAgICAgaWYgKGZpbGVOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRW50cnlEaXYoZmlsZU5hbWVEcmFnRW50cnlEaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgY29sbGFwc2VkID0gZmFsc2UpIHtcbiAgICBsZXQgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IG51bGw7XG5cbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpLFxuICAgICAgICAgIGRpcmVjdG9yeVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgIT09IG51bGwpIHtcbiAgICAgIGlmIChkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZSkge1xuICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGREaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgsIGNvbGxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG4gICAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVudHJ5RGl2KHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lOyAvLy9cblxuICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuYWRkRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoLCBjb2xsYXBzZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IGRpcmVjdG9yeVBhdGgsICAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQgPSB0aGlzLmlzRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQoZGlyZWN0b3J5TmFtZSk7XG5cbiAgICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KSB7XG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuY3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpO1xuXG4gICAgICAgICAgdGhpcy5hZGRFbnRyeURpdihkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG4gIH1cblxuICByZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAvLy9cbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGRpcmVjdG9yeU5hbWUpO1xuXG4gICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTsgLy8vXG5cbiAgICAgICAgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5yZW1vdmVEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuICAgICAgICAgICAgICByZW1vdmVFbXB0eVBhcmVudERpcmVjdG9yaWVzT3B0aW9uUHJlc2VudCA9IHRydWU7IC8vL2V4cGxvcmVyRGl2LmlzT3B0aW9uUHJlc2VudChSRU1PVkVfRU1QVFlfUEFSRU5UX0RJUkVDVE9SSUVTKTtcblxuICAgICAgICBpZiAocmVtb3ZlRW1wdHlQYXJlbnREaXJlY3Rvcmllc09wdGlvblByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZFRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCk7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZFbXB0eSA9IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuaXNFbXB0eSgpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdkVtcHR5KSB7XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlRW50cnlEaXYoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBkaXJlY3RvcnlQYXRoLCAgLy8vXG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lKTtcblxuICAgICAgaWYgKGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbnRyeURpdihkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRFbnRyeURpdihlbnRyeURpdikge1xuICAgIGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuICAgICAgICAgIG5leHRFbnRyeURpdiA9IGVudHJ5RGl2LCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNFbnRyeURpdiA9IHRoaXMuZmluZEVudHJ5RGl2KChlbnRyeURpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dEVudHJ5QmVmb3JlRW50cnlEaXYgPSBuZXh0RW50cnlEaXYuaXNCZWZvcmUoZW50cnlEaXYpO1xuXG4gICAgICAgICAgICBpZiAobmV4dEVudHJ5QmVmb3JlRW50cnlEaXYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAocHJldmlvdXNFbnRyeURpdiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5hcHBlbmQoZW50cnlEaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeURpdi5pbnNlcnRCZWZvcmUocHJldmlvdXNFbnRyeURpdik7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwbG9yZXJEaXZNb3VudGVkID0gZXhwbG9yZXJEaXYuaXNNb3VudGVkKCk7XG5cbiAgICBpZiAoZXhwbG9yZXJEaXZNb3VudGVkKSB7XG4gICAgICBlbnRyeURpdi5kaWRNb3VudCAmJiBlbnRyeURpdi5kaWRNb3VudCgpOyAvLy9cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnRyeURpdihlbnRyeURpdikge1xuICAgIGNvbnN0IGV4cGxvcmVyRGl2TW91bnRlZCA9IGV4cGxvcmVyRGl2LmlzTW91bnRlZCgpO1xuXG4gICAgaWYgKGV4cGxvcmVyRGl2TW91bnRlZCkge1xuICAgICAgZW50cnlEaXYud2lsbFVubW91bnQgJiYgZW50cnlEaXYud2lsbFVubW91bnQoKTsgIC8vL1xuICAgIH1cblxuICAgIGVudHJ5RGl2LnJlbW92ZSgpO1xuICB9XG5cbiAgYWRkTWFya2VyRW50cnlEaXYobWFya2VyRW50cnlEaXZOYW1lLCBkcmFnRW50cnlEaXZUeXBlKSB7XG4gICAgbGV0IG1hcmtlckVudHJ5RGl2O1xuXG4gICAgY29uc3QgbmFtZSA9IG1hcmtlckVudHJ5RGl2TmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IGRyYWdFbnRyeURpdlR5cGU7ICAvLy9cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGSUxFX05BTUVfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG4gICAgICAgICAgICAgIEZpbGVOYW1lTWFya2VyRW50cnlEaXYgPSBleHBsb3JlckRpdi5nZXRGaWxlTmFtZU1hcmtlckVudHJ5RGl2KCksXG4gICAgICAgICAgICAgIGZpbGVOYW1lTWFya2VyRW50cnlEaXYgPVxuXG4gICAgICAgICAgICAgICAgPEZpbGVOYW1lTWFya2VyRW50cnlEaXYgbmFtZT17bmFtZX0gLz5cblxuICAgICAgICAgICAgICA7XG5cbiAgICAgICAgbWFya2VyRW50cnlEaXYgPSBmaWxlTmFtZU1hcmtlckVudHJ5RGl2OyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRElSRUNUT1JZX05BTUVfVFlQRSA6IHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG4gICAgICAgICAgICAgIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdiA9IGV4cGxvcmVyRGl2LmdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdigpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlOYW1lTWFya2VyRW50cnlEaXYgPVxuXG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdiBuYW1lPXtuYW1lfSAvPlxuXG4gICAgICAgICAgICAgIDtcblxuICAgICAgICBtYXJrZXJFbnRyeURpdiA9IGRpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeURpdjsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnlEaXYgPSBtYXJrZXJFbnRyeURpdjsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5RGl2KGVudHJ5RGl2KTtcbiAgfVxuXG4gIHJlbW92ZU1hcmtlckVudHJ5RGl2KCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5RGl2ID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5RGl2KCk7XG5cbiAgICBtYXJrZXJFbnRyeURpdi5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGZpbGVOYW1lLFx0Ly8vXG5cdFx0XHRcdFx0ZXhwbG9yZXJEaXYgPSB0aGlzLmdldEV4cGxvcmVyRGl2KCksXG5cdFx0XHRcdFx0RmlsZU5hbWVEcmFnRW50cnlEaXYgPSBleHBsb3JlckRpdi5nZXRGaWxlTmFtZURyYWdFbnRyeURpdigpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID1cblxuXHRcdFx0XHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5RGl2IG5hbWU9e25hbWV9IGV4cGxvcmVyRGl2PXtleHBsb3JlckRpdn0gLz5cblxuXHRcdFx0XHRcdDtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG5cdGNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSwgY29sbGFwc2VkKSB7XG5cdFx0Y29uc3QgbmFtZSA9IGRpcmVjdG9yeU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcblx0XHRcdFx0XHREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gZXhwbG9yZXJEaXYuZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPVxuXG5cdFx0XHRcdFx0XHQ8RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiBuYW1lPXtuYW1lfSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRpc0ZpbGVOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudChmaWxlTmFtZSkge1xuXHRcdGNvbnN0IGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IChmaWxlTmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50O1xuXHR9XG5cblx0aXNEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudChkaXJlY3RvcnlOYW1lKSB7XG5cdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQgPSAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlByZXNlbnQ7XG5cdH1cblxuXHRyZXRyaWV2ZURyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KSB7XG5cdFx0bGV0IGRyYWdFbnRyeURpdlBhdGggPSB0aGlzLmZpbmREcmFnRW50cnlEaXZQYXRoKGRyYWdFbnRyeURpdik7XG5cblx0XHRpZiAoZHJhZ0VudHJ5RGl2UGF0aCA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikgPT4ge1xuXHRcdFx0XHRkcmFnRW50cnlEaXZQYXRoID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5yZXRyaWV2ZURyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KTtcblxuXHRcdFx0XHRpZiAoZHJhZ0VudHJ5RGl2UGF0aCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGRpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZOYW1lID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5nZXROYW1lKCk7XG5cblx0XHRcdFx0XHRkcmFnRW50cnlEaXZQYXRoID0gYCR7ZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdk5hbWV9LyR7ZHJhZ0VudHJ5RGl2UGF0aH1gO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBkcmFnRW50cnlEaXZQYXRoO1xuXHR9XG5cbiAgcmV0cmlldmVNYXJrZXJFbnRyeURpdigpIHtcbiAgICBsZXQgbWFya2VyRW50cnlEaXYgPSB0aGlzLmZpbmRNYXJrZXJFbnRyeURpdigpO1xuXG4gICAgaWYgKG1hcmtlckVudHJ5RGl2ID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KSA9PiB7XG4gICAgICAgIG1hcmtlckVudHJ5RGl2ID0gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5yZXRyaWV2ZU1hcmtlckVudHJ5RGl2KCk7XG5cbiAgICAgICAgaWYgKG1hcmtlckVudHJ5RGl2ICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrZXJFbnRyeURpdjtcbiAgfVxuXG4gIHNvbWVGaWxlTmFtZURyYWdFbnRyeURpdihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfVFlQRSk7IH1cblxuXHRmb3JFYWNoRmlsZU5hbWVEcmFnRW50cnlEaXYoY2FsbGJhY2spIHsgdGhpcy5mb3JFYWNoRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCBGSUxFX05BTUVfVFlQRSk7IH1cblxuXHRzb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZvckVhY2hEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfVFlQRSk7IH1cblxuXHRmb3JFYWNoRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5RGl2cyA9IHRoaXMuZ2V0RW50cnlEaXZzKCk7XG5cblx0XHRlbnRyeURpdnMuZm9yRWFjaCgoZW50cnlEaXYpID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5RGl2VHlwZSA9IGVudHJ5RGl2LmdldFR5cGUoKSxcblx0XHRcdFx0XHRcdHR5cGVzSW5jbHVkZXNFbnRyeURpdlR5cGUgPSB0eXBlcy5pbmNsdWRlcyhlbnRyeURpdlR5cGUpO1xuXG5cdFx0XHRpZiAodHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSkge1xuXHRcdFx0XHRjYWxsYmFjayhlbnRyeURpdik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzb21lRW50cnlEaXZCeVR5cGVzKGNhbGxiYWNrLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5RGl2cyA9IHRoaXMuZ2V0RW50cnlEaXZzKCk7XG5cblx0XHRyZXR1cm4gZW50cnlEaXZzLnNvbWUoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeURpdlR5cGUgPSBlbnRyeURpdi5nZXRUeXBlKCksXG5cdFx0XHRcdFx0XHR0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlEaXZUeXBlKTtcblxuXHRcdFx0aWYgKHR5cGVzSW5jbHVkZXNFbnRyeURpdlR5cGUpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZW50cnlEaXYpO1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmb3JFYWNoRW50cnlEaXYoY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpO1xuXG5cdFx0ZW50cnlEaXZzLmZvckVhY2goKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjYWxsYmFjayhlbnRyeURpdik7XG5cdFx0fSk7XG5cdH1cblxuXHRzb21lRW50cnlEaXYoY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpO1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cy5zb21lKChlbnRyeURpdikgPT4ge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVudHJ5RGl2KTtcblx0XHR9KTtcblx0fVxuXG5cdGZpbmREcmFnRW50cnlEaXZQYXRoKGRyYWdFbnRyeURpdikge1xuXHRcdGxldCBkcmFnRW50cnlEaXZQYXRoID0gbnVsbDtcblxuXHRcdHRoaXMuc29tZUVudHJ5RGl2KChlbnRyeURpdikgPT4ge1xuXHRcdFx0aWYgKGVudHJ5RGl2ID09PSBkcmFnRW50cnlEaXYpIHsgIC8vL1xuXHRcdFx0XHRjb25zdCBlbnRyeURpdk5hbWUgPSBlbnRyeURpdi5nZXROYW1lKCk7XG5cblx0XHRcdFx0ZHJhZ0VudHJ5RGl2UGF0aCA9IGVudHJ5RGl2TmFtZTsgIC8vL1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGRyYWdFbnRyeURpdlBhdGg7XG5cdH1cblxuXHRmaW5kRHJhZ0VudHJ5RGl2KG5hbWUpIHsgcmV0dXJuIHRoaXMuZmluZEVudHJ5RGl2QnlOYW1lQW5kVHlwZXMobmFtZSwgRklMRV9OQU1FX1RZUEUsIERJUkVDVE9SWV9OQU1FX1RZUEUpOyB9XG5cbiAgZmluZE1hcmtlckVudHJ5RGl2KCkge1xuICAgIGNvbnN0IG1hcmtlckVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXZCeVR5cGVzKChlbnRyeURpdikgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7ICAvLy9cbiAgICB9LCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFKTtcblxuICAgIHJldHVybiBtYXJrZXJFbnRyeURpdjtcbiAgfVxuXG4gIGZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhmaWxlTmFtZSwgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0ZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpIHtcblx0XHRsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBudWxsO1xuXG5cdFx0dGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlRvcG1vc3QgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmlzVG9wbW9zdCgpO1xuXG5cdFx0XHRpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlRvcG1vc3QpIHtcblx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2OyAgLy8vXG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXZCeVR5cGVzKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRpZiAoZW50cnlEaXZOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIC4uLnR5cGVzKTtcblxuXHRcdHJldHVybiBlbnRyeURpdjtcblx0fVxuXG5cdGZpbmRFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcblx0XHRcdFx0XHRlbnRyeURpdiA9IGVudHJ5RGl2cy5maW5kKChlbnRyeURpdikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZW50cnlEaXZUeXBlID0gZW50cnlEaXYuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5RGl2VHlwZSk7XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5RGl2KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSB8fCBudWxsOyAvLy87XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeU5hbWUobmFtZSkge1xuXHRcdGNvbnN0IGVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXYoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeURpdk5hbWUgPSBlbnRyeURpdi5nZXROYW1lKCk7XG5cblx0XHRcdGlmIChlbnRyeURpdk5hbWUgPT09IG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXYoY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpLFxuXHRcdFx0XHRcdGVudHJ5RGl2ID0gZW50cnlEaXZzLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2O1xuXHR9XG5cblx0Y29sbGFwc2UoKSB7XG5cdCAgdGhpcy5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcbiAgfVxuXG5cdGV4cGFuZCgpIHtcblx0ICB0aGlzLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpO1xuICB9XG5cblx0cGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBleHBhbmRFbnRyaWVzRGl2ID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGNvbGxhcHNlRW50cmllc0RpdiA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSxcbiAgICAgICAgICBhZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZU1hcmtlciA9IHRoaXMucmVtb3ZlTWFya2VyLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRmlsZVBhdGggPSB0aGlzLmFkZEZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcmVtb3ZlRmlsZVBhdGggPSB0aGlzLnJlbW92ZUZpbGVQYXRoLmJpbmQodGhpcyksXG4gICAgICAgICAgYWRkRGlyZWN0b3J5UGF0aCA9IHRoaXMuYWRkRGlyZWN0b3J5UGF0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGggPSB0aGlzLnJlbW92ZURpcmVjdG9yeVBhdGguYmluZCh0aGlzKSxcbiAgICAgICAgICByZXRyaWV2ZU1hcmtlckVudHJ5RGl2ID0gdGhpcy5yZXRyaWV2ZU1hcmtlckVudHJ5RGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgcmV0cmlldmVEcmFnRW50cnlEaXZQYXRoID0gdGhpcy5yZXRyaWV2ZURyYWdFbnRyeURpdlBhdGguYmluZCh0aGlzKTtcblxuXHRcdHJldHVybiAoe1xuICAgICAgZXhwYW5kRW50cmllc0RpdixcbiAgICAgIGNvbGxhcHNlRW50cmllc0RpdixcbiAgICAgIGlzRW1wdHksXG4gICAgICBhZGRNYXJrZXIsXG4gICAgICByZW1vdmVNYXJrZXIsXG5cdFx0XHRhZGRGaWxlUGF0aCxcbiAgICAgIHJlbW92ZUZpbGVQYXRoLFxuICAgICAgYWRkRGlyZWN0b3J5UGF0aCxcbiAgICAgIHJlbW92ZURpcmVjdG9yeVBhdGgsXG4gICAgICByZXRyaWV2ZU1hcmtlckVudHJ5RGl2LFxuXHRcdFx0cmV0cmlldmVEcmFnRW50cnlEaXZQYXRoXG5cdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyaWVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEVudHJpZXNEaXYpYFxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAgICAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0EsVUFBVztJQUU4RCxNQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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