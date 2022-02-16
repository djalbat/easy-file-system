"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _name = _interopRequireDefault(require("../../../button/name"));
var _fileName = _interopRequireDefault(require("../../../svg/fileName"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
var _fileName1 = _interopRequireDefault(require("../../../div/entryItem/fileName"));
var _name1 = require("../../../utilities/name");
var _entryTypes = require("../../../entryTypes");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var FileNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(FileNameDragEntryItem, DragEntryItem);
    var _super = _createSuper(FileNameDragEntryItem);
    function FileNameDragEntryItem() {
        _classCallCheck(this, FileNameDragEntryItem);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameDragEntryItem, [
        {
            key: "isBefore",
            value: function isBefore(entryItem) {
                var before;
                var entryItemType = entryItem.getType();
                switch(entryItemType){
                    case _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE:
                    case _entryTypes.FILE_NAME_MARKER_ENTRY_TYPE:
                    case _entryTypes.DIRECTORY_NAME_MARKER_ENTRY_TYPE:
                        var name = this.getName(), entryItemName = entryItem.getName();
                        before = (0, _name1).nameIsBeforeEntryItemName(name, entryItemName);
                        break;
                    case _entryTypes.DIRECTORY_NAME_DRAG_ENTRY_TYPE:
                        before = false;
                        break;
                }
                return before;
            }
        },
        {
            key: "getFileName",
            value: function getFileName() {
                var name = this.properties.name, fileName = name; ///
                return fileName;
            }
        },
        {
            key: "getNameButton",
            value: function getNameButton() {
                var NameButton = this.constructor.NameButton;
                return NameButton;
            }
        },
        {
            key: "getFileNameSVG",
            value: function getFileNameSVG() {
                var FileNameSVG = this.constructor.FileNameSVG;
                return FileNameSVG;
            }
        },
        {
            key: "getPathMap",
            value: function getPathMap(sourceEntryPath, targetEntryPath) {
                var pathMap = _get(_getPrototypeOf(FileNameDragEntryItem.prototype), "getPathMap", this).call(this, sourceEntryPath, targetEntryPath), entryDirectory = false;
                Object.assign(pathMap, {
                    entryDirectory: entryDirectory
                });
                return pathMap;
            }
        },
        {
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourceEntryPath, targetEntryPath, pathMaps) {
                var pathMap = this.getPathMap(sourceEntryPath, targetEntryPath);
                pathMaps.push(pathMap);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var name = this.properties.name, explorer = this.getExplorer(), NameButton = this.getNameButton(), FileNameSVG = this.getFileNameSVG();
                return(/*#__PURE__*/ React.createElement(_fileName1.default, {
                    name: name,
                    explorer: explorer,
                    NameButton: NameButton,
                    FileNameSVG: FileNameSVG
                }));
            }
        }
    ]);
    return FileNameDragEntryItem;
}(_drag.default);
exports.default = FileNameDragEntryItem;
_defineProperty(FileNameDragEntryItem, "NameButton", _name.default);
_defineProperty(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_defineProperty(FileNameDragEntryItem, "type", _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZmlsZU5hbWVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2VudHJ5SXRlbS9maWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZShuYW1lLCBlbnRyeUl0ZW1OYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldEZpbGVOYW1lKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGZpbGVOYW1lID0gbmFtZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHR9XG5cblx0Z2V0TmFtZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IE5hbWVCdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gTmFtZUJ1dHRvbjtcblx0fVxuXG5cdGdldEZpbGVOYW1lU1ZHKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVTVkc7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gZmFsc2U7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHROYW1lQnV0dG9uID0gdGhpcy5nZXROYW1lQnV0dG9uKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVTVkcgPSB0aGlzLmdldEZpbGVOYW1lU1ZHKCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8RmlsZU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufSBGaWxlTmFtZVNWRz17RmlsZU5hbWVTVkd9IC8+XG5cblx0XHQpO1xuICB9XG5cbiAgc3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBGaWxlTmFtZVNWRyA9IEZpbGVOYW1lU1ZHO1xuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJnZXRGaWxlTmFtZSIsInByb3BlcnRpZXMiLCJmaWxlTmFtZSIsImdldE5hbWVCdXR0b24iLCJOYW1lQnV0dG9uIiwiY29uc3RydWN0b3IiLCJnZXRGaWxlTmFtZVNWRyIsIkZpbGVOYW1lU1ZHIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsInJldHJpZXZlUGF0aE1hcHMiLCJwYXRoTWFwcyIsInB1c2giLCJjaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIkZpbGVOYW1lRW50cnlJdGVtRGl2IiwiRHJhZ0VudHJ5SXRlbSIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFzQixDQUF0QixLQUFzQjtBQUNyQixHQUF1QixDQUF2QixTQUF1QjtBQUNyQixHQUEwQixDQUExQixLQUEwQjtBQUNuQixHQUFpQyxDQUFqQyxVQUFpQztBQUV4QixHQUF5QixDQUF6QixNQUF5QjtBQUNzRSxHQUFxQixDQUFyQixXQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6SUEscUJBQXFCLGlCQUEzQixRQUFROzs7YUFBRkEscUJBQXFCOzs7Ozs7WUFDekNDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLENBQUNDLFNBQVMsRUFBRSxDQUFDO2dCQUNwQixHQUFHLENBQUNDLE1BQU07Z0JBRVYsR0FBSyxDQUFDQyxhQUFhLEdBQUdGLFNBQVMsQ0FBQ0csT0FB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