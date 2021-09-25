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
var FileNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(FileNameDragEntryItem, DragEntryItem);
    function FileNameDragEntryItem() {
        _classCallCheck(this, FileNameDragEntryItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(FileNameDragEntryItem).apply(this, arguments));
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
                var _properties = this.properties, name = _properties.name, fileName = name; ///
                return fileName;
            }
        },
        {
            key: "getNameButton",
            value: function getNameButton() {
                var _constructor = this.constructor, NameButton = _constructor.NameButton;
                return NameButton;
            }
        },
        {
            key: "getFileNameSVG",
            value: function getFileNameSVG() {
                var _constructor = this.constructor, FileNameSVG = _constructor.FileNameSVG;
                return FileNameSVG;
            }
        },
        {
            key: "getPathMap",
            value: function getPathMap(sourcePath, targetPath) {
                var pathMap = _get(_getPrototypeOf(FileNameDragEntryItem.prototype), "getPathMap", this).call(this, sourcePath, targetPath), directory = false;
                Object.assign(pathMap, {
                    directory: directory
                });
                return pathMap;
            }
        },
        {
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourcePath, targetPath, pathMaps) {
                var pathMap = this.getPathMap(sourcePath, targetPath);
                pathMaps.push(pathMap);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, explorer = this.getExplorer(), NameButton = this.getNameButton(), FileNameSVG = this.getFileNameSVG();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZmlsZU5hbWVcIjtcbmltcG9ydCBEcmFnRW50cnlJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2VudHJ5L2RyYWdcIjtcbmltcG9ydCBGaWxlTmFtZUVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L2VudHJ5SXRlbS9maWxlTmFtZVwiO1xuXG5pbXBvcnQgeyBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGSUxFX05BTUVfRFJBR19UWVBFLCBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUsIEZJTEVfTkFNRV9NQVJLRVJfVFlQRSwgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVEcmFnRW50cnlJdGVtIGV4dGVuZHMgRHJhZ0VudHJ5SXRlbSB7XG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZW50cnlJdGVtTmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRGaWxlTmFtZSgpIHtcblx0XHRjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG5cdGdldE5hbWVCdXR0b24oKSB7XG5cdFx0Y29uc3QgeyBOYW1lQnV0dG9uIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIE5hbWVCdXR0b247XG5cdH1cblxuXHRnZXRGaWxlTmFtZVNWRygpIHtcblx0XHRjb25zdCB7IEZpbGVOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIEZpbGVOYW1lU1ZHO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHN1cGVyLmdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCksXG5cdFx0XHRcdFx0ZGlyZWN0b3J5ID0gZmFsc2U7XG5cblx0XHRPYmplY3QuYXNzaWduKHBhdGhNYXAsIHtcblx0XHRcdGRpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdE5hbWVCdXR0b24gPSB0aGlzLmdldE5hbWVCdXR0b24oKSxcblx0XHRcdFx0XHRGaWxlTmFtZVNWRyA9IHRoaXMuZ2V0RmlsZU5hbWVTVkcoKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxGaWxlTmFtZUVudHJ5SXRlbURpdiBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IE5hbWVCdXR0b249e05hbWVCdXR0b259IEZpbGVOYW1lU1ZHPXtGaWxlTmFtZVNWR30gLz5cblxuXHRcdCk7XG4gIH1cblxuICBzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cblx0c3RhdGljIEZpbGVOYW1lU1ZHID0gRmlsZU5hbWVTVkc7XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVXLEtBQXNCO0lBQ3JCLFNBQXVCO0lBQ3JCLEtBQTBCO0lBQ25CLFVBQWlDO0lBRXhCLE1BQXlCO0lBQzhDLE1BQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUcscUJBQXFCO2NBQXJCLHFCQUFxQjthQUFyQixxQkFBcUI7OEJBQXJCLHFCQUFxQjtnRUFBckIscUJBQXFCOztpQkFBckIscUJBQXFCOztZQUN6QyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsU0FBUztvQkFDYixNQUFNO29CQUVKLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTzt1QkFFL0IsYUFBYTt5QkFSMEYsTUFBZ0I7eUJBQWhCLE1BQWdCO3lCQUFoQixNQUFnQjs0QkFZdkgsSUFBSSxRQUFRLE9BQU8sSUFDdEIsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPO3dCQUVwQyxNQUFNLE9BaEJnQyxNQUF5Qiw0QkFnQjVCLElBQUksRUFBRSxhQUFhOzt5QkFmdUQsTUFBZ0I7d0JBbUI3SCxNQUFNLEdBQUcsS0FBSzs7O3VCQUlULE1BQU07Ozs7WUFHZCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNPLFdBQWUsUUFBVixVQUFVLEVBQXhCLElBQUksR0FBSyxXQUFlLENBQXhCLElBQUksRUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFaEIsUUFBUTs7OztZQUdoQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNXLFlBQWdCLFFBQVgsV0FBVyxFQUEvQixVQUFVLEdBQUssWUFBZ0IsQ0FBL0IsVUFBVTt1QkFFWCxVQUFVOzs7O1lBR2xCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQWhDLFdBQVcsR0FBSyxZQUFnQixDQUFoQyxXQUFXO3VCQUVaLFdBQVc7Ozs7WUFHbkIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVO29CQUMxQixPQUFPLHdCQTVDTSxxQkFBcUIsY0E0Q2xCLFVBQVUsb0JBQUMsVUFBVSxFQUFFLFVBQVUsR0FDcEQsU0FBUyxHQUFHLEtBQUs7Z0JBRXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDcEIsU0FBUyxFQUFULFNBQVM7O3VCQUdILE9BQU87Ozs7WUFHZixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUTtvQkFDMUMsT0FBTyxRQUFRLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVTtnQkFFdEQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBR3RCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ08sV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSSxFQUNYLFFBQVEsUUFBUSxXQUFXLElBQzNCLFVBQVUsUUFBUSxhQUFhLElBQy9CLFdBQVcsUUFBUSxjQUFjO3lEQXJFTCxVQUFpQztvQkF5RXpDLElBQUksRUFBRSxJQUFJO29CQUFFLFFBQVEsRUFBRSxRQUFRO29CQUFFLFVBQVUsRUFBRSxVQUFVO29CQUFFLFdBQVcsRUFBRSxXQUFXOzs7OztXQXBFcEYscUJBQXFCO0VBTmhCLEtBQTBCO2dCQU0vQixxQkFBcUIsR0F5RWpDLFVBQVUsR0FqRkksS0FBc0I7Z0JBUXhCLHFCQUFxQixHQTJFbEMsV0FBVyxHQWxGSyxTQUF1QjtnQkFPMUIscUJBQXFCLEdBNkVqQyxJQUFJLEdBL0VvRyxNQUFnQjtnQkFFNUcscUJBQXFCLEdBK0VqQyxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFNBQVc7O2tCQWhGTCxxQkFBcUIifQ==