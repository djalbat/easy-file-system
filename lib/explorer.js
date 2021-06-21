"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _necessary = require("necessary");
var _drop = _interopRequireDefault(require("./mixins/drop"));
var _entries = _interopRequireDefault(require("./list/entries"));
var _marker = _interopRequireDefault(require("./mixins/marker"));
var _fileName = _interopRequireDefault(require("./item/entry/drag/fileName"));
var _fileName1 = _interopRequireDefault(require("./item/entry/marker/fileName"));
var _directoryName = _interopRequireDefault(require("./item/entry/drag/directoryName"));
var _directoryName1 = _interopRequireDefault(require("./item/entry/marker/directoryName"));
var _constants = require("./constants");
var _types = require("./types");
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
        "\n  \n  width: fit-content;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var forEach = _necessary.asynchronousUtilities.forEach;
var Explorer = /*#__PURE__*/ function(Element1) {
    _inherits(Explorer, Element1);
    function Explorer(selector, mounted) {
        _classCallCheck(this, Explorer);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Explorer).call(this, selector));
        _this.mounted = mounted;
        return _this;
    }
    _createClass(Explorer, [
        {
            key: "getExplorer",
            value: function getExplorer() {
                var explorer = this; ///
                return explorer;
            }
        },
        {
            key: "getPath",
            value: function getPath() {
                var path = null; ///
                return path;
            }
        },
        {
            key: "isMounted",
            value: function isMounted() {
                return this.mounted;
            }
        },
        {
            key: "getEntriesList",
            value: function getEntriesList() {
                var _constructor = this.constructor, EntriesList = _constructor.EntriesList;
                return EntriesList;
            }
        },
        {
            key: "getFileNameDragEntryItem",
            value: function getFileNameDragEntryItem() {
                var _constructor = this.constructor, FileNameDragEntryItem = _constructor.FileNameDragEntryItem;
                return FileNameDragEntryItem;
            }
        },
        {
            key: "getFileNameMarkerEntryItem",
            value: function getFileNameMarkerEntryItem() {
                var _constructor = this.constructor, FileNameMarkerEntryItem = _constructor.FileNameMarkerEntryItem;
                return FileNameMarkerEntryItem;
            }
        },
        {
            key: "getDirectoryNameDragEntryItem",
            value: function getDirectoryNameDragEntryItem() {
                var _constructor = this.constructor, DirectoryNameDragEntryItem = _constructor.DirectoryNameDragEntryItem;
                return DirectoryNameDragEntryItem;
            }
        },
        {
            key: "getDirectoryNameMarkerEntryItem",
            value: function getDirectoryNameMarkerEntryItem() {
                var _constructor = this.constructor, DirectoryNameMarkerEntryItem = _constructor.DirectoryNameMarkerEntryItem;
                return DirectoryNameMarkerEntryItem;
            }
        },
        {
            key: "moveDragEntryItem",
            value: function moveDragEntryItem(pathMap) {
                var type = pathMap.type;
                switch(type){
                    case _types.FILE_NAME_DRAG_TYPE:
                        this.moveFileNameDragEntryItem(pathMap);
                        break;
                }
                switch(type){
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
                        this.moveDirectoryNameDragEntryItem(pathMap);
                        break;
                }
            }
        },
        {
            key: "moveDragEntryItems",
            value: function moveDragEntryItems(pathMaps) {
                this.callMoveHandlers(pathMaps, (function() {
                    pathMaps.forEach((function(pathMap) {
                        return this.moveDragEntryItem(pathMap);
                    }).bind(this));
                }).bind(this));
            }
        },
        {
            key: "moveFileNameDragEntryItem",
            value: function moveFileNameDragEntryItem(pathMap) {
                var sourcePath = pathMap.sourcePath;
                if (sourcePath !== null) {
                    var targetPath = pathMap.targetPath;
                    this.removeFilePath(sourcePath);
                    if (targetPath !== null) {
                        this.addFilePath(targetPath);
                    }
                }
            }
        },
        {
            key: "moveDirectoryNameDragEntryItem",
            value: function moveDirectoryNameDragEntryItem(pathMap) {
                var sourcePath = pathMap.sourcePath;
                if (sourcePath !== null) {
                    var targetPath = pathMap.targetPath;
                    this.removeDirectoryPath(sourcePath);
                    if (targetPath !== null) {
                        var collapsed = pathMap.collapsed;
                        this.addDirectoryPath(targetPath, collapsed);
                    }
                }
            }
        },
        {
            key: "callMoveHandlers",
            value: function callMoveHandlers(pathMaps, done) {
                var eventType = _constants.MOVE, eventListeners = this.findEventListeners(eventType);
                forEach(eventListeners, function(eventListener, next) {
                    var handler = eventListener.handler, element = eventListener.element, moveHandler = handler, done1 = next; ///
                    moveHandler.call(element, pathMaps, done1);
                }, done);
            }
        },
        {
            key: "onMove",
            value: function onMove(moveHandler, element) {
                var eventType = _constants.MOVE, handler = moveHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offMove",
            value: function offMove(moveHandler, element) {
                var eventType = _constants.MOVE, handler = moveHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.mounted = true;
                this.enableDrop();
                this.enableMarker();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.mounted = false;
                this.disableDrop();
                this.disableMarker();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorer = this;
                return(/*#__PURE__*/ React.createElement(_entries.default, {
                    explorer: explorer,
                    topmost: true
                }));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var mounted = false, explorer = _easy.Element.fromClass(Class, properties, mounted);
                return explorer;
            }
        }
    ]);
    return Explorer;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Explorer, "EntriesList", _entries.default);
_defineProperty(Explorer, "FileNameDragEntryItem", _fileName.default);
_defineProperty(Explorer, "FileNameMarkerEntryItem", _fileName1.default);
_defineProperty(Explorer, "DirectoryNameDragEntryItem", _directoryName.default);
_defineProperty(Explorer, "DirectoryNameMarkerEntryItem", _directoryName1.default);
_defineProperty(Explorer, "tagName", "div");
_defineProperty(Explorer, "defaultProperties", {
    className: "explorer"
});
Object.assign(Explorer.prototype, _drop.default);
Object.assign(Explorer.prototype, _marker.default);
var _default = (0, _easyWithStyle).default(Explorer)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHBsb3Jlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkcm9wTWl4aW5zIGZyb20gXCIuL21peGlucy9kcm9wXCI7XG5pbXBvcnQgRW50cmllc0xpc3QgZnJvbSBcIi4vbGlzdC9lbnRyaWVzXCI7XG5pbXBvcnQgbWFya2VyTWl4aW5zIGZyb20gXCIuL21peGlucy9tYXJrZXJcIjtcbmltcG9ydCBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZmlsZU5hbWVcIjtcbmltcG9ydCBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi9pdGVtL2VudHJ5L2RyYWcvZGlyZWN0b3J5TmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0gZnJvbSBcIi4vaXRlbS9lbnRyeS9tYXJrZXIvZGlyZWN0b3J5TmFtZVwiO1xuXG5pbXBvcnQgeyBNT1ZFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG1vdW50ZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1vdW50ZWQgPSBtb3VudGVkO1xuICB9XG5cbiAgZ2V0RXhwbG9yZXIoKSB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudGVkO1xuICB9XG5cbiAgZ2V0RW50cmllc0xpc3QoKSB7XG4gIFx0Y29uc3QgeyBFbnRyaWVzTGlzdCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzTGlzdDtcblx0fVxuXG5cdGdldEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeUl0ZW07XG5cdH1cblxuICBnZXRGaWxlTmFtZU1hcmtlckVudHJ5SXRlbSgpIHtcbiAgICBjb25zdCB7IEZpbGVOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIEZpbGVOYW1lTWFya2VyRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblx0fVxuXG4gIGdldERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW0oKSB7XG4gICAgY29uc3QgeyBEaXJlY3RvcnlOYW1lTWFya2VyRW50cnlJdGVtIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbShwYXRoTWFwKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoTWFwO1xuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRSA6XG4gICAgICAgIHRoaXMubW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUgOlxuICAgICAgICB0aGlzLm1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBtb3ZlRHJhZ0VudHJ5SXRlbXMocGF0aE1hcHMpIHtcbiAgICB0aGlzLmNhbGxNb3ZlSGFuZGxlcnMocGF0aE1hcHMsICgpID0+IHtcbiAgICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHRoaXMubW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwKSB7XG4gICAgY29uc3QgeyBzb3VyY2VQYXRoIH0gPSBwYXRoTWFwO1xuXG4gICAgaWYgKHNvdXJjZVBhdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgICAgdGhpcy5yZW1vdmVGaWxlUGF0aChzb3VyY2VQYXRoKTtcblxuICAgICAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hZGRGaWxlUGF0aCh0YXJnZXRQYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCkge1xuICAgIGNvbnN0IHsgc291cmNlUGF0aCB9ID0gcGF0aE1hcDtcblxuICAgIGlmIChzb3VyY2VQYXRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHRhcmdldFBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICAgIHRoaXMucmVtb3ZlRGlyZWN0b3J5UGF0aChzb3VyY2VQYXRoKTtcblxuICAgICAgaWYgKHRhcmdldFBhdGggIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHBhdGhNYXA7XG5cbiAgICAgICAgdGhpcy5hZGREaXJlY3RvcnlQYXRoKHRhcmdldFBhdGgsIGNvbGxhcHNlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbE1vdmVIYW5kbGVycyhwYXRoTWFwcywgZG9uZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1PVkUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZm9yRWFjaChldmVudExpc3RlbmVycywgKGV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyID0gaGFuZGxlciwgIC8vL1xuICAgICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgICAgbW92ZUhhbmRsZXIuY2FsbChlbGVtZW50LCBwYXRoTWFwcywgZG9uZSk7XG4gICAgfSwgZG9uZSk7XG4gIH1cblxuICBvbk1vdmUobW92ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBNT1ZFLFxuICAgICAgICAgIGhhbmRsZXIgPSBtb3ZlSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZNb3ZlKG1vdmVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTU9WRSxcbiAgICAgICAgICBoYW5kbGVyID0gbW92ZUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNhYmxlRHJvcCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlTWFya2VyKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyID0gdGhpcztcblxuICBcdHJldHVybiAoXG5cbiAgXHRcdDxFbnRyaWVzTGlzdCBleHBsb3Jlcj17ZXhwbG9yZXJ9IHRvcG1vc3QgLz5cblxuXHRcdCk7XG5cdH1cblxuICBpbml0aWFsaXNlKCkge1xuICBcdHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXHR9XG5cblx0c3RhdGljIEVudHJpZXNMaXN0ID0gRW50cmllc0xpc3Q7XG5cblx0c3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IEZpbGVOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRmlsZU5hbWVNYXJrZXJFbnRyeUl0ZW0gPSBGaWxlTmFtZU1hcmtlckVudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0gPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbTtcblxuICBzdGF0aWMgRGlyZWN0b3J5TmFtZU1hcmtlckVudHJ5SXRlbSA9IERpcmVjdG9yeU5hbWVNYXJrZXJFbnRyeUl0ZW07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwbG9yZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VudGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwbG9yZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbW91bnRlZCk7XG5cbiAgICByZXR1cm4gZXhwbG9yZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFeHBsb3Jlci5wcm90b3R5cGUsIG1hcmtlck1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFeHBsb3JlcilgXG4gIFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFDUSxVQUFXO0lBRTFCLEtBQWU7SUFDZCxRQUFnQjtJQUNmLE9BQWlCO0lBQ1IsU0FBNEI7SUFDMUIsVUFBOEI7SUFDM0IsY0FBaUM7SUFDL0IsZUFBbUM7SUFFdkQsVUFBYTtJQUM0QixNQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW1NcEMscUNBSW5DOzs7Ozs7O0lBck1RLE9BQU8sR0FidUIsVUFBVyx1QkFhekMsT0FBTztJQUVULFFBQVE7Y0FBUixRQUFRO2FBQVIsUUFBUSxDQUNBLFFBQVEsRUFBRSxPQUFPOzhCQUR6QixRQUFROztpRUFBUixRQUFRLGFBRUosUUFBUTtjQUVULE9BQU8sR0FBRyxPQUFPOzs7aUJBSnBCLFFBQVE7O1lBT1osR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDSCxRQUFR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