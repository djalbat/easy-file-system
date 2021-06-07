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
        "\n\n  background-color: yellow;\n      \n"
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
            value: function createDirectoryNameDragEntryDiv(directoryName, collapsed) {
                var name = directoryName, explorerDiv = this.getExplorerDiv(), DirectoryNameDragEntryDiv = explorerDiv.getDirectoryNameDragEntryDiv(), directoryNameDragEntryDiv = /*#__PURE__*/ React.createElement(DirectoryNameDragEntryDiv, {
                    name: name,
                    collapsed: collapsed,
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
                var topmostDirectoryNameDragEntryDiv2 = null;
                this.someDirectoryNameDragEntryDiv(function(directoryNameDragEntryDiv) {
                    var directoryNameDragEntryDivTopmost = directoryNameDragEntryDiv.isTopmost();
                    if (directoryNameDragEntryDivTopmost) {
                        topmostDirectoryNameDragEntryDiv2 = directoryNameDragEntryDiv; ///
                        return true;
                    }
                });
                return topmostDirectoryNameDragEntryDiv2;
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
            key: "parentContext",
            value: function parentContext() {
                var addFilePath = this.addFilePath.bind(this), retrieveDragEntryDivPath = this.retrieveDragEntryDivPath.bind(this);
                return {
                    addFilePath: addFilePath,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBGSUxFX05BTUVfVFlQRSwgRElSRUNUT1JZX05BTUVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuY2xhc3MgRW50cmllc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuXHRnZXRFeHBsb3JlckRpdigpIHtcblx0XHRjb25zdCB7IGV4cGxvcmVyRGl2IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gZXhwbG9yZXJEaXY7XG5cdH1cblxuXHRnZXRFbnRyeURpdnMoKSB7XG5cdFx0Y29uc3QgY2hpbGRFbnRyeURpdkVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiZGl2LmVudHJ5XCIpLFxuXHRcdFx0XHRcdGVudHJ5RGl2cyA9IGNoaWxkRW50cnlEaXZFbGVtZW50czsgIC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cztcblx0fVxuXG5cdGFkZEVudHJ5RGl2KGVudHJ5RGl2KSB7XG5cdFx0Y29uc3QgbmV4dEVudHJ5RGl2ID0gZW50cnlEaXYsICAvLy9cblx0XHRcdFx0XHRwcmV2aW91c0VudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXYoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXh0RW50cnlCZWZvcmVFbnRyeURpdiA9IG5leHRFbnRyeURpdi5pc0JlZm9yZShlbnRyeURpdik7XG5cblx0XHRcdFx0XHRcdGlmIChuZXh0RW50cnlCZWZvcmVFbnRyeURpdikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdGlmIChwcmV2aW91c0VudHJ5RGl2ID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLmFwcGVuZChlbnRyeURpdik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVudHJ5RGl2Lmluc2VydEJlZm9yZShwcmV2aW91c0VudHJ5RGl2KTtcblx0XHR9XG5cblx0XHRlbnRyeURpdi5kaWRNb3VudCAmJiBlbnRyeURpdi5kaWRNb3VudCgpOyAvLy9cblx0fVxuXG5cdGFkZEZpbGVQYXRoKGZpbGVQYXRoKSB7XG5cdFx0bGV0IGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gbnVsbDtcblxuXHRcdGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaWxlUGF0aCksXG5cdFx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpLFxuXHRcdFx0XHRcdGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpbGVQYXRoKTtcblxuXHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiAhPT0gbnVsbCkge1xuXHRcdFx0aWYgKGZpbGVQYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZSkge1xuXHRcdFx0XHRcdGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdi5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9IHRoaXMuZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWUpO1xuXG5cdFx0XHRcdGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbGxhcHNlZCA9IHRydWU7IC8vL1xuXG5cdFx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmNyZWF0ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYodG9wbW9zdERpcmVjdG9yeU5hbWUsIGNvbGxhcHNlZCk7XG5cblx0XHRcdFx0XHR0aGlzLmFkZEVudHJ5RGl2KHRvcG1vc3REaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGZpbGVQYXRoID0gZmlsZVBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7IC8vL1xuXG5cdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYuYWRkRmlsZVBhdGgoZmlsZVBhdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aCwgIC8vL1xuXHRcdFx0XHRcdFx0XHRmaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQgPSB0aGlzLmlzRmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KGZpbGVOYW1lKTtcblxuXHRcdFx0XHRpZiAoZmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmNyZWF0ZUZpbGVOYW1lRHJhZ0VudHJ5RGl2KGZpbGVOYW1lKTtcblxuXHRcdFx0XHRcdHRoaXMuYWRkRW50cnlEaXYoZmlsZU5hbWVEcmFnRW50cnlEaXYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cblx0Y3JlYXRlRmlsZU5hbWVEcmFnRW50cnlEaXYoZmlsZU5hbWUpIHtcblx0XHRjb25zdCBuYW1lID0gZmlsZU5hbWUsXHQvLy9cblx0XHRcdFx0XHRleHBsb3JlckRpdiA9IHRoaXMuZ2V0RXhwbG9yZXJEaXYoKSxcblx0XHRcdFx0XHRGaWxlTmFtZURyYWdFbnRyeURpdiA9IGV4cGxvcmVyRGl2LmdldEZpbGVOYW1lRHJhZ0VudHJ5RGl2KCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXYgPVxuXG5cdFx0XHRcdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlEaXYgbmFtZT17bmFtZX0gZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0XHRcdFx0O1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lRHJhZ0VudHJ5RGl2O1xuXHR9XG5cblx0Y3JlYXRlRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lLCBjb2xsYXBzZWQpIHtcblx0XHRjb25zdCBuYW1lID0gZGlyZWN0b3J5TmFtZSxcdC8vL1xuXHRcdFx0XHRcdGV4cGxvcmVyRGl2ID0gdGhpcy5nZXRFeHBsb3JlckRpdigpLFxuXHRcdFx0XHRcdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBleHBsb3JlckRpdi5nZXREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdiA9XG5cblx0XHRcdFx0XHRcdDxEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2IG5hbWU9e25hbWV9IGNvbGxhcHNlZD17Y29sbGFwc2VkfSBleHBsb3JlckRpdj17ZXhwbG9yZXJEaXZ9IC8+XG5cblx0XHRcdFx0XHQ7XG5cblx0XHRyZXR1cm4gZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG5cdGlzRmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KGZpbGVOYW1lKSB7XG5cdFx0Y29uc3QgZmlsZU5hbWVEcmFnRW50cnlEaXYgPSB0aGlzLmZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlEaXZQcmVzZW50ID0gKGZpbGVOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBmaWxlTmFtZURyYWdFbnRyeURpdlByZXNlbnQ7XG5cdH1cblxuXHRpc0RpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXZQcmVzZW50KGRpcmVjdG9yeU5hbWUpIHtcblx0XHRjb25zdCBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ID0gdGhpcy5maW5kRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihkaXJlY3RvcnlOYW1lKSxcblx0XHRcdFx0XHRkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudCA9IChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2ICE9PSBudWxsKTtcblxuXHRcdHJldHVybiBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2UHJlc2VudDtcblx0fVxuXG5cdHJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aChkcmFnRW50cnlEaXYpIHtcblx0XHRsZXQgZHJhZ0VudHJ5RGl2UGF0aCA9IHRoaXMuZmluZERyYWdFbnRyeURpdlBhdGgoZHJhZ0VudHJ5RGl2KTtcblxuXHRcdGlmIChkcmFnRW50cnlEaXZQYXRoID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNvbWVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KChkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2KSA9PiB7XG5cdFx0XHRcdGRyYWdFbnRyeURpdlBhdGggPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LnJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aChkcmFnRW50cnlEaXYpO1xuXG5cdFx0XHRcdGlmIChkcmFnRW50cnlEaXZQYXRoICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdk5hbWUgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmdldE5hbWUoKTtcblxuXHRcdFx0XHRcdGRyYWdFbnRyeURpdlBhdGggPSBgJHtkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2TmFtZX0vJHtkcmFnRW50cnlEaXZQYXRofWA7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRyYWdFbnRyeURpdlBhdGg7XG5cdH1cblxuXHRzb21lRmlsZU5hbWVEcmFnRW50cnlEaXYoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaEZpbGVOYW1lRHJhZ0VudHJ5RGl2KGNhbGxiYWNrKSB7IHRoaXMuZm9yRWFjaEVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0c29tZURpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgRElSRUNUT1JZX05BTUVfVFlQRSk7IH1cblxuXHRmb3JFYWNoRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdihjYWxsYmFjaykgeyB0aGlzLmZvckVhY2hFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIERJUkVDVE9SWV9OQU1FX1RZUEUpOyB9XG5cblx0Zm9yRWFjaEVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpO1xuXG5cdFx0ZW50cnlEaXZzLmZvckVhY2goKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeURpdlR5cGUgPSBlbnRyeURpdi5nZXRUeXBlKCksXG5cdFx0XHRcdFx0XHR0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlID0gdHlwZXMuaW5jbHVkZXMoZW50cnlEaXZUeXBlKTtcblxuXHRcdFx0aWYgKHR5cGVzSW5jbHVkZXNFbnRyeURpdlR5cGUpIHtcblx0XHRcdFx0Y2FsbGJhY2soZW50cnlEaXYpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c29tZUVudHJ5RGl2QnlUeXBlcyhjYWxsYmFjaywgLi4udHlwZXMpIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpO1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2cy5zb21lKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZUeXBlID0gZW50cnlEaXYuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5RGl2VHlwZSk7XG5cblx0XHRcdGlmICh0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5RGl2KTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Zm9yRWFjaEVudHJ5RGl2KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKTtcblxuXHRcdGVudHJ5RGl2cy5mb3JFYWNoKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y2FsbGJhY2soZW50cnlEaXYpO1xuXHRcdH0pO1xuXHR9XG5cblx0c29tZUVudHJ5RGl2KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKTtcblxuXHRcdHJldHVybiBlbnRyeURpdnMuc29tZSgoZW50cnlEaXYpID0+IHtcblx0XHRcdHJldHVybiBjYWxsYmFjayhlbnRyeURpdik7XG5cdFx0fSk7XG5cdH1cblxuXHRmaW5kRHJhZ0VudHJ5RGl2UGF0aChkcmFnRW50cnlEaXYpIHtcblx0XHRsZXQgZHJhZ0VudHJ5RGl2UGF0aCA9IG51bGw7XG5cblx0XHR0aGlzLnNvbWVFbnRyeURpdigoZW50cnlEaXYpID0+IHtcblx0XHRcdGlmIChlbnRyeURpdiA9PT0gZHJhZ0VudHJ5RGl2KSB7ICAvLy9cblx0XHRcdFx0Y29uc3QgZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGRyYWdFbnRyeURpdlBhdGggPSBlbnRyeURpdk5hbWU7ICAvLy9cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBkcmFnRW50cnlEaXZQYXRoO1xuXHR9XG5cblx0ZmluZERyYWdFbnRyeURpdihuYW1lKSB7IHJldHVybiB0aGlzLmZpbmRFbnRyeURpdkJ5TmFtZUFuZFR5cGVzKG5hbWUsIEZJTEVfTkFNRV9UWVBFLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZpbmRGaWxlTmFtZURyYWdFbnRyeURpdihmaWxlTmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhmaWxlTmFtZSwgRklMRV9OQU1FX1RZUEUpOyB9XG5cblx0ZmluZERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoZGlyZWN0b3J5TmFtZSkgeyByZXR1cm4gdGhpcy5maW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhkaXJlY3RvcnlOYW1lLCBESVJFQ1RPUllfTkFNRV9UWVBFKTsgfVxuXG5cdGZpbmRUb3Btb3N0RGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigpIHtcblx0XHRsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBudWxsO1xuXG5cdFx0dGhpcy5zb21lRGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdigoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlRvcG1vc3QgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2LmlzVG9wbW9zdCgpO1xuXG5cdFx0XHRpZiAoZGlyZWN0b3J5TmFtZURyYWdFbnRyeURpdlRvcG1vc3QpIHtcblx0XHRcdFx0dG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBkaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2OyAgLy8vXG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeU5hbWVBbmRUeXBlcyhuYW1lLCAuLi50eXBlcykge1xuXHRcdGNvbnN0IGVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXZCeVR5cGVzKChlbnRyeURpdikgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnlEaXZOYW1lID0gZW50cnlEaXYuZ2V0TmFtZSgpO1xuXG5cdFx0XHRpZiAoZW50cnlEaXZOYW1lID09PSBuYW1lKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIC4uLnR5cGVzKTtcblxuXHRcdHJldHVybiBlbnRyeURpdjtcblx0fVxuXG5cdGZpbmRFbnRyeURpdkJ5VHlwZXMoY2FsbGJhY2ssIC4uLnR5cGVzKSB7XG5cdFx0Y29uc3QgZW50cnlEaXZzID0gdGhpcy5nZXRFbnRyeURpdnMoKSxcblx0XHRcdFx0XHRlbnRyeURpdiA9IGVudHJ5RGl2cy5maW5kKChlbnRyeURpdikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgZW50cnlEaXZUeXBlID0gZW50cnlEaXYuZ2V0VHlwZSgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZXNJbmNsdWRlc0VudHJ5RGl2VHlwZSA9IHR5cGVzLmluY2x1ZGVzKGVudHJ5RGl2VHlwZSk7XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlc0luY2x1ZGVzRW50cnlEaXZUeXBlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudHJ5RGl2KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSB8fCBudWxsOyAvLy87XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXZCeU5hbWUobmFtZSkge1xuXHRcdGNvbnN0IGVudHJ5RGl2ID0gdGhpcy5maW5kRW50cnlEaXYoKGVudHJ5RGl2KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeURpdk5hbWUgPSBlbnRyeURpdi5nZXROYW1lKCk7XG5cblx0XHRcdGlmIChlbnRyeURpdk5hbWUgPT09IG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZW50cnlEaXY7XG5cdH1cblxuXHRmaW5kRW50cnlEaXYoY2FsbGJhY2spIHtcblx0XHRjb25zdCBlbnRyeURpdnMgPSB0aGlzLmdldEVudHJ5RGl2cygpLFxuXHRcdFx0XHRcdGVudHJ5RGl2ID0gZW50cnlEaXZzLmZpbmQoY2FsbGJhY2spIHx8IG51bGw7IC8vL1xuXG5cdFx0cmV0dXJuIGVudHJ5RGl2O1xuXHR9XG5cblx0cGFyZW50Q29udGV4dCgpIHtcblx0XHRjb25zdCBhZGRGaWxlUGF0aCA9IHRoaXMuYWRkRmlsZVBhdGguYmluZCh0aGlzKSxcblx0XHRcdFx0XHRyZXRyaWV2ZURyYWdFbnRyeURpdlBhdGggPSB0aGlzLnJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aC5iaW5kKHRoaXMpO1xuXG5cdFx0cmV0dXJuICh7XG5cdFx0XHRhZGRGaWxlUGF0aCxcblx0XHRcdHJldHJpZXZlRHJhZ0VudHJ5RGl2UGF0aFxuXHRcdH0pO1xuXHR9XG5cblx0c3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyaWVzRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDQSxVQUFXO0lBRVcsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQThTekIseUNBSXJDOzs7Ozs7O0lBaFRRLDRCQUE0QixHQUpOLFVBQVcsZUFJakMsNEJBQTRCLEVBQUUsdUNBQXVDLEdBSi9DLFVBQVcsZUFJSCx1Q0FBdUM7SUFFdkUsVUFBVTtjQUFWLFVBQVU7YUFBVixVQUFVOzhCQUFWLFVBQVU7Z0VBQVYsVUFBVTs7aUJBQVYsVUFBVTs7WUFDZixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjO29CQUNXLFdBQWUsUUFBVixVQUFVLEVBQS9CLFdBQVcsR0FBSyxXQUFlLENBQS9CLFdBQVc7dUJBRVosV0FBVzs7OztZQUduQixHQUFZ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