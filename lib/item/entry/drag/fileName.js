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
function _get(target1, property1, receiver1) {
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
    return _get(target1, property1, receiver1 || target1);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
_defineProperty(FileNameDragEntryItem, "NameButton", _name.default);
_defineProperty(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_defineProperty(FileNameDragEntryItem, "type", _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameDragEntryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZmlsZU5hbWVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZmlsZU5hbWVcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFLCBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2VudHJ5VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZW50cnlJdGVtTmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRGaWxlTmFtZSgpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG5cdGdldE5hbWVCdXR0b24oKSB7XG5cdFx0Y29uc3QgeyBOYW1lQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIE5hbWVCdXR0b247XG5cdH1cblxuXHRnZXRGaWxlTmFtZVNWRygpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lU1ZHO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IGZhbHNlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRlbnRyeURpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0TmFtZUJ1dHRvbiA9IHRoaXMuZ2V0TmFtZUJ1dHRvbigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lU1ZHID0gdGhpcy5nZXRGaWxlTmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PEZpbGVOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gTmFtZUJ1dHRvbj17TmFtZUJ1dHRvbn0gRmlsZU5hbWVTVkc9e0ZpbGVOYW1lU1ZHfSAvPlxuXG5cdFx0KTtcbiAgfVxuXG4gIHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuXHRzdGF0aWMgRmlsZU5hbWVTVkcgPSBGaWxlTmFtZVNWRztcblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImdldEZpbGVOYW1lIiwicHJvcGVydGllcyIsImZpbGVOYW1lIiwiZ2V0TmFtZUJ1dHRvbiIsIk5hbWVCdXR0b24iLCJjb25zdHJ1Y3RvciIsImdldEZpbGVOYW1lU1ZHIiwiRmlsZU5hbWVTVkciLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImNoaWxkRWxlbWVudHMiLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiRmlsZU5hbWVFbnRyeUl0ZW1EaXYiLCJEcmFnRW50cnlJdGVtIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVUsSUFBQSxLQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7QUFDckIsSUFBQSxTQUF1QixrQ0FBdkIsdUJBQXVCLEVBQUE7QUFDckIsSUFBQSxLQUEwQixrQ0FBMUIsMEJBQTBCLEVBQUE7QUFDbkIsSUFBQSxVQUFrQyxrQ0FBbEMsa0NBQWtDLEVBQUE7QUFFekIsSUFBQSxNQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUNzRSxJQUFBLFdBQXFCLFdBQXJCLHFCQUFxQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9JLElBQUEsQUFBTUEscUJBQXFCLGlCQUEzQjs7O2FBQU1BLHFCQUFxQjs7Ozs7O1lB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