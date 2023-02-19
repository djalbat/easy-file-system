"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameDragEntryItem;
    }
});
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("../../../svg/fileName"));
var _drag = /*#__PURE__*/ _interopRequireDefault(require("../../../item/entry/drag"));
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("../../../div/item/entry/drag/fileName"));
var _name = require("../../../utilities/name");
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
                        before = (0, _name.nameIsBeforeEntryItemName)(name, entryItemName);
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
                var name = this.getName(), fileName = name; ///
                return fileName;
            }
        },
        {
            key: "isCollapsed",
            value: function isCollapsed() {
                var collapsed = null; ///
                return collapsed;
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
                var name = this.properties.name, _this_constructor = this.constructor, NameSpan = _this_constructor.NameSpan, _$FileNameSVG = _this_constructor.FileNameSVG, explorer = this.getExplorer();
                return /*#__PURE__*/ React.createElement(_fileName1.default, {
                    name: name,
                    explorer: explorer,
                    NameSpan: NameSpan,
                    FileNameSVG: _$FileNameSVG
                });
            }
        }
    ]);
    return FileNameDragEntryItem;
}(_drag.default);
_defineProperty(FileNameDragEntryItem, "type", _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
_defineProperty(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGVudHJ5SXRlbU5hbWUpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldEZpbGVOYW1lKCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVTcGFuLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXhwbG9yZXI9e2V4cGxvcmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHROYW1lU3Bhbj17TmFtZVNwYW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZpbGVOYW1lU1ZHPXtGaWxlTmFtZVNWR31cblx0XHRcdC8+XG5cblx0XHQpO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBGaWxlTmFtZVNWRyA9IEZpbGVOYW1lU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJnZXRGaWxlTmFtZSIsImZpbGVOYW1lIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcCIsInB1c2giLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiTmFtZVNwYW4iLCJGaWxlTmFtZVNWRyIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYiLCJEcmFnRW50cnlJdGVtIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs2REFQRzt5REFDRTs4REFDVztvQkFFSzswQkFDK0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFILElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDcEJDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQkYsVUFBVUcsT0FBTztnQkFFdkMsT0FBUUQ7b0JBQ1AsS0FBS0UscUNBQXlCO29CQUM5QixLQUFLQyx1Q0FBMkI7b0JBQ2hDLEtBQUtDLDRDQUFnQzt3QkFDcEMsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDdEJDLGdCQUFnQlQsVUFBVVEsT0FBTzt3QkFFcENQLFNBQVNTLElBQUFBLCtCQUF5QixFQUFDSCxNQUFNRTt3QkFFekMsS0FBTTtvQkFFUCxLQUFLRSwwQ0FBOEI7d0JBQ2xDVixTQUFTLEtBQUs7d0JBRWQsS0FBTTtnQkFDUjtnQkFFQSxPQUFPQTtZQUNSOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ2IsSUFBTUwsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDdEJLLFdBQVdOLE1BQU0sR0FBRztnQkFFdkIsT0FBT007WUFDUjs7O1lBRUNDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQU1DLFlBQVksSUFBSSxFQUFFLEdBQUc7Z0JBRTNCLE9BQU9BO1lBQ1Q7OztZQUVEQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsUUFBUSxFQUFFO2dCQUM1RCxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDSixpQkFBaUJDO2dCQUVqREMsU0FBU0csSUFBSSxDQUFDRjtZQUNmOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDYixJQUFNLEFBQUVoQixPQUFTLElBQUksQ0FBQ2lCLFVBQVUsQ0FBeEJqQixNQUMwQixvQkFBQSxJQUFJLENBQUNrQixXQUFXLEVBQTFDQyxXQUEwQixrQkFBMUJBLFVBQVVDLGdCQUFnQixrQkFBaEJBLGFBQ2pCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFOUIscUJBRUMsb0JBQUNDLGtCQUF3QjtvQkFBQ3ZCLE1BQU1BO29CQUNuQnFCLFVBQVVBO29CQUNWRixVQUFVQTtvQkFDVkMsYUFBYUE7O1lBSTNCOzs7V0EzRG1CN0I7RUFBOEJpQyxhQUFhO0FBNkQ5RCxnQkE3RG1CakMsdUJBNkRaa0MsUUFBTzVCLHFDQUF5QjtBQUV2QyxnQkEvRG1CTix1QkErRFo2QixlQUFjQSxpQkFBVztBQUVoQyxnQkFqRW1CN0IsdUJBaUVabUMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==