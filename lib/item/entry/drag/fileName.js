"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _name = _interopRequireDefault(require("../../../button/name"));
var _fileName = _interopRequireDefault(require("../../../svg/fileName"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
var _fileName1 = _interopRequireDefault(require("../../../div/item/entry/fileName"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZmlsZU5hbWVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZmlsZU5hbWVcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2VudHJ5VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZW50cnlJdGVtTmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRGaWxlTmFtZSgpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG5cdGdldE5hbWVCdXR0b24oKSB7XG5cdFx0Y29uc3QgeyBOYW1lQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIE5hbWVCdXR0b247XG5cdH1cblxuXHRnZXRGaWxlTmFtZVNWRygpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lU1ZHO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IGZhbHNlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRlbnRyeURpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0TmFtZUJ1dHRvbiA9IHRoaXMuZ2V0TmFtZUJ1dHRvbigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lU1ZHID0gdGhpcy5nZXRGaWxlTmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PEZpbGVOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gTmFtZUJ1dHRvbj17TmFtZUJ1dHRvbn0gRmlsZU5hbWVTVkc9e0ZpbGVOYW1lU1ZHfSAvPlxuXG5cdFx0KTtcbiAgfVxuXG4gIHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuXHRzdGF0aWMgRmlsZU5hbWVTVkcgPSBGaWxlTmFtZVNWRztcblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImdldEZpbGVOYW1lIiwicHJvcGVydGllcyIsImZpbGVOYW1lIiwiZ2V0TmFtZUJ1dHRvbiIsIk5hbWVCdXR0b24iLCJjb25zdHJ1Y3RvciIsImdldEZpbGVOYW1lU1ZHIiwiRmlsZU5hbWVTVkciLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImNoaWxkRWxlbWVudHMiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiRmlsZU5hbWVFbnRyeUl0ZW1EaXYiLCJEcmFnRW50cnlJdGVtIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVUsSUFBQSxLQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7QUFDckIsSUFBQSxTQUF1QixrQ0FBdkIsdUJBQXVCLEVBQUE7QUFDckIsSUFBQSxLQUEwQixrQ0FBMUIsMEJBQTBCLEVBQUE7QUFDbkIsSUFBQSxVQUFrQyxrQ0FBbEMsa0NBQWtDLEVBQUE7QUFFekIsSUFBQSxNQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNzRSxJQUFBLFdBQXFCLFdBQXJCLHFCQUFxQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9JLElBQUEsQUFBTUEscUJBQXFCLGlCQ1Z2QyxBRFVZOzs7YUFBTUEscUJBQXFCOzs7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