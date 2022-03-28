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
                var _$NameButton = this.constructor.NameButton;
                return _$NameButton;
            }
        },
        {
            key: "getFileNameSVG",
            value: function getFileNameSVG() {
                var _$FileNameSVG = this.constructor.FileNameSVG;
                return _$FileNameSVG;
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
                var name = this.properties.name, explorer = this.getExplorer(), _$NameButton = this.getNameButton(), _$FileNameSVG = this.getFileNameSVG();
                return /*#__PURE__*/ React.createElement(_fileName1.default, {
                    name: name,
                    explorer: explorer,
                    NameButton: _$NameButton,
                    FileNameSVG: _$FileNameSVG
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZmlsZU5hbWVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2VudHJ5SXRlbS9maWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vZW50cnlUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZShuYW1lLCBlbnRyeUl0ZW1OYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldEZpbGVOYW1lKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGZpbGVOYW1lID0gbmFtZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHR9XG5cblx0Z2V0TmFtZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IE5hbWVCdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gTmFtZUJ1dHRvbjtcblx0fVxuXG5cdGdldEZpbGVOYW1lU1ZHKCkge1xuXHRcdGNvbnN0IHsgRmlsZU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gRmlsZU5hbWVTVkc7XG5cdH1cblxuXHRnZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpLFxuXHRcdFx0XHRcdGVudHJ5RGlyZWN0b3J5ID0gZmFsc2U7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGVudHJ5RGlyZWN0b3J5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcGF0aE1hcDtcblx0fVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHROYW1lQnV0dG9uID0gdGhpcy5nZXROYW1lQnV0dG9uKCksXG5cdFx0XHRcdFx0RmlsZU5hbWVTVkcgPSB0aGlzLmdldEZpbGVOYW1lU1ZHKCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8RmlsZU5hbWVFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX0gZXhwbG9yZXI9e2V4cGxvcmVyfSBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufSBGaWxlTmFtZVNWRz17RmlsZU5hbWVTVkd9IC8+XG5cblx0XHQpO1xuICB9XG5cbiAgc3RhdGljIE5hbWVCdXR0b24gPSBOYW1lQnV0dG9uO1xuXG5cdHN0YXRpYyBGaWxlTmFtZVNWRyA9IEZpbGVOYW1lU1ZHO1xuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lIiwiRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFIiwiZ2V0RmlsZU5hbWUiLCJwcm9wZXJ0aWVzIiwiZmlsZU5hbWUiLCJnZXROYW1lQnV0dG9uIiwiTmFtZUJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiZ2V0RmlsZU5hbWVTVkciLCJGaWxlTmFtZVNWRyIsImdldFBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwIiwiZW50cnlEaXJlY3RvcnkiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXRyaWV2ZVBhdGhNYXBzIiwicGF0aE1hcHMiLCJwdXNoIiwiY2hpbGRFbGVtZW50cyIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJGaWxlTmFtZUVudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFVSxJQUFBLEtBQXNCLGtDQUF0QixzQkFBc0IsRUFBQTtBQUNyQixJQUFBLFNBQXVCLGtDQUF2Qix1QkFBdUIsRUFBQTtBQUNyQixJQUFBLEtBQTBCLGtDQUExQiwwQkFBMEIsRUFBQTtBQUNuQixJQUFBLFVBQWlDLGtDQUFqQyxpQ0FBaUMsRUFBQTtBQUV4QixJQUFBLE1BQXlCLFdBQXpCLHlCQUF5QixDQUFBO0FBQ3NFLElBQUEsV0FBcUIsV0FBckIscUJBQXFCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0ksSUFBQSxBQUFNQSxxQkFBcUIsaUJDVnZDLEFEVVk7OzthQUFNQSxxQkFBcUI7Ozs7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