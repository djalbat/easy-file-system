"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _name = _interopRequireDefault(require("../../../button/name"));
var _fileName = _interopRequireDefault(require("../../../svg/entryItem/fileName"));
var _drag = _interopRequireDefault(require("../../../item/entry/drag"));
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
            key: "getPathMaps",
            value: function getPathMaps(sourcePath, targetPath, param) {
                var pathMaps = param === void 0 ? [] : param;
                var pathMap = this.getPathMap(sourcePath, targetPath);
                pathMaps.push(pathMap);
                return pathMaps;
            }
        },
        {
            key: "doubleClickHandler",
            value: function doubleClickHandler(event, element) {
                var explorer = this.getExplorer(), fileNameDragEntryItem = this; ///
                explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
                event.stopPropagation();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, name = _properties.name, NameButton = this.getNameButton(), doubleClickHandler = this.doubleClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_fileName.default, null),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: doubleClickHandler
                    }, name)
                ];
            }
        }
    ]);
    return FileNameDragEntryItem;
}(_drag.default);
_defineProperty(FileNameDragEntryItem, "NameButton", _name.default);
_defineProperty(FileNameDragEntryItem, "type", _types.FILE_NAME_DRAG_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameDragEntryItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9idXR0b24vbmFtZVwiO1xuaW1wb3J0IEZpbGVOYW1lU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvZW50cnlJdGVtL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfVFlQRSwgRklMRV9OQU1FX01BUktFUl9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW0gZXh0ZW5kcyBEcmFnRW50cnlJdGVtIHtcblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZShuYW1lLCBlbnRyeUl0ZW1OYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldEZpbGVOYW1lKCkge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGZpbGVOYW1lID0gbmFtZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHR9XG5cblx0Z2V0TmFtZUJ1dHRvbigpIHtcblx0XHRjb25zdCB7IE5hbWVCdXR0b24gfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cblx0XHRyZXR1cm4gTmFtZUJ1dHRvbjtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgpLFxuXHRcdFx0XHRcdGRpcmVjdG9yeSA9IGZhbHNlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRkaXJlY3Rvcnlcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0Z2V0UGF0aE1hcHMoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcGF0aE1hcHMgPSBbXSkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXBzO1xuXHR9XG5cblx0ZG91YmxlQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcztcdC8vL1xuXG5cdFx0ZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdE5hbWVCdXR0b24gPSB0aGlzLmdldE5hbWVCdXR0b24oKSxcblx0XHRcdFx0XHRkb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cblx0XHRcdDxGaWxlTmFtZVNWRy8+LFxuXHRcdFx0PE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17ZG91YmxlQ2xpY2tIYW5kbGVyfSA+XG5cdFx0XHRcdHtuYW1lfVxuXHRcdFx0PC9OYW1lQnV0dG9uPlxuXG5cdFx0XSk7XG4gIH1cblxuICBzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVXLEtBQXNCO0lBQ3JCLFNBQWlDO0lBQy9CLEtBQTBCO0lBRVYsTUFBeUI7SUFDOEMsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RyxxQkFBcUI7Y0FBckIscUJBQXFCO2FBQXJCLHFCQUFxQjs4QkFBckIscUJBQXFCO2dFQUFyQixxQkFBcUI7O2lCQUFyQixxQkFBcUI7O1lBQ3pDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxTQUFTO29CQUNiLE1BQU07b0JBRUosYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPO3VCQUUvQixhQUFhO3lCQVIwRixNQUFnQjt5QkFBaEIsTUFBZ0I7eUJBQWhCLE1BQWdCOzRCQVl2SCxJQUFJLFFBQVEsT0FBTyxJQUN0QixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXBDLE1BQU0sT0FoQmdDLE1BQXlCLDRCQWdCNUIsSUFBSSxFQUFFLGFBQWE7O3lCQWZ1RCxNQUFnQjt3QkFtQjdILE1BQU0sR0FBRyxLQUFLOzs7dUJBSVQsTUFBTTs7OztZQUdkLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ08sV0FBZSxRQUFWLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSSxFQUNULFFBQVEsR0FBRyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUVoQixRQUFROzs7O1lBR2hCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQS9CLFVBQVUsR0FBSyxZQUFnQixDQUEvQixVQUFVO3VCQUVYLFVBQVU7Ozs7WUFHbEIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVO29CQUMxQixPQUFPLHdCQXRDTSxxQkFBcUIsY0FzQ2xCLFVBQVUsb0JBQUMsVUFBVSxFQUFFLFVBQVUsR0FDcEQsU0FBUyxHQUFHLEtBQUs7Z0JBRXBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDcEIsU0FBUyxFQUFULFNBQVM7O3VCQUdILE9BQU87Ozs7WUFHZixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFhO29CQUFiLFFBQVEsR0FBUixLQUFhLG1CQUFiLEtBQWE7b0JBQzFDLE9BQU8sUUFBUSxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVU7Z0JBRXRELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTzt1QkFFZCxRQUFROzs7O1lBR2hCLEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQzFCLFFBQVEsUUFBUSxXQUFXLElBQzlCLHFCQUFxQixRQUFTLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFcEMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQjtnQkFFeEQsS0FBSyxDQUFDLGVBQWU7Ozs7WUFHdEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTyxXQUFlLFFBQVYsVUFBVSxFQUF4QixJQUFJLEdBQUssV0FBZSxDQUF4QixJQUFJLEVBQ1gsVUFBVSxRQUFRLGFBQWEsSUFDL0Isa0JBQWtCLFFBQVEsa0JBQWtCLENBQUMsSUFBSTs7c0RBMUU5QixTQUFpQztzREErRXJELFVBQVU7d0JBQUMsYUFBYSxFQUFFLGtCQUFrQjt1QkFDM0MsSUFBSTs7Ozs7V0ExRVkscUJBQXFCO0VBTGhCLEtBQTBCO2dCQUsvQixxQkFBcUIsR0FnRmpDLFVBQVUsR0F2RkksS0FBc0I7Z0JBT3hCLHFCQUFxQixHQWtGakMsSUFBSSxHQXBGb0csTUFBZ0I7Z0JBRTVHLHFCQUFxQixHQW9GakMsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXOztrQkFyRkwscUJBQXFCIn0=