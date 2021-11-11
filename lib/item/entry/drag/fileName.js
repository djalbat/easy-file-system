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
var _types = require("../../../types");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
                    case _types.FILE_NAME_DRAG_TYPE:
                    case _types.FILE_NAME_MARKER_TYPE:
                    case _types.DIRECTORY_NAME_MARKER_TYPE:
                        var name = this.getName(), entryItemName = entryItem.getName();
                        before = (0, _name1).nameIsBeforeEntryItemName(name, entryItemName);
                        break;
                    case _types.DIRECTORY_NAME_DRAG_TYPE:
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
_defineProperty(FileNameDragEntryItem, "NameButton", _name.default);
_defineProperty(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_defineProperty(FileNameDragEntryItem, "type", _types.FILE_NAME_DRAG_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameDragEntryItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZmlsZU5hbWVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2VudHJ5SXRlbS9maWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZW50cnlJdGVtTmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRGaWxlTmFtZSgpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG5cdGdldE5hbWVCdXR0b24oKSB7XG5cdFx0Y29uc3QgeyBOYW1lQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIE5hbWVCdXR0b247XG5cdH1cblxuXHRnZXRGaWxlTmFtZVNWRygpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lU1ZHO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IGZhbHNlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRlbnRyeURpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0TmFtZUJ1dHRvbiA9IHRoaXMuZ2V0TmFtZUJ1dHRvbigpLFxuXHRcdFx0XHRcdEZpbGVOYW1lU1ZHID0gdGhpcy5nZXRGaWxlTmFtZVNWRygpO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PEZpbGVOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9IGV4cGxvcmVyPXtleHBsb3Jlcn0gTmFtZUJ1dHRvbj17TmFtZUJ1dHRvbn0gRmlsZU5hbWVTVkc9e0ZpbGVOYW1lU1ZHfSAvPlxuXG5cdFx0KTtcbiAgfVxuXG4gIHN0YXRpYyBOYW1lQnV0dG9uID0gTmFtZUJ1dHRvbjtcblxuXHRzdGF0aWMgRmlsZU5hbWVTVkcgPSBGaWxlTmFtZVNWRztcblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX1RZUEU7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJnZXRGaWxlTmFtZSIsInByb3BlcnRpZXMiLCJmaWxlTmFtZSIsImdldE5hbWVCdXR0b24iLCJOYW1lQnV0dG9uIiwiY29uc3RydWN0b3IiLCJnZXRGaWxlTmFtZVNWRyIsIkZpbGVOYW1lU1ZHIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsInJldHJpZXZlUGF0aE1hcHMiLCJwYXRoTWFwcyIsInB1c2giLCJjaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFzQixDQUF0QixLQUFzQjtBQUNyQixHQUF1QixDQUF2QixTQUF1QjtBQUNyQixHQUEwQixDQUExQixLQUEwQjtBQUNuQixHQUFpQyxDQUFqQyxVQUFpQztBQUV4QixHQUF5QixDQUF6QixNQUF5QjtBQUM4QyxHQUFnQixDQUFoQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1R0EscUJBQXFCLGlCQUEzQixRQUFRO2NBQUZBLHFCQUFxQjs4QkFBckJBLHFCQUFxQjthQUFyQkEscUJBQXFCOzhCQUFyQkEscUJBQXFCOzs7aUJBQXJCQSxxQkFBcUI7O1lBQ3pDQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEIsR0FBRyxDQUFDQyxNQUFNO2dCQUVWLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRixTQUFTLENBQUNHLE9BQU87Z0JBRXZDLE1BQU0sQ0FBRUQsYUFBYTtvQkFDcEIsSUFBSSxDQVQwRyxNQUFnQjtvQkFVOUgsSUFBSSxDQVYwRyxNQUFnQjtvQkFXOUgsSUFBSSxDQVgwRyxNQUFnQjt3QkFZN0gsR0FBSyxDQUFDRSxJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLElBQ3RCQyxhQUFhLEdBQUdOLFNBQVMsQ0FBQ0ssT0FBTzt3QkFFcENKLE1BQU0sT0FoQmdDLE1B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