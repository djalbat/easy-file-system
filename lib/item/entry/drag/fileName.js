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
var _fileName1 = /*#__PURE__*/ _interopRequireDefault(require("../../../div/item/entry/fileName"));
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
                var name = this.properties.name, _this_constructor = this.constructor, NameInput = _this_constructor.NameInput, NameButton = _this_constructor.NameButton, _$FileNameSVG = _this_constructor.FileNameSVG, explorer = this.getExplorer();
                return /*#__PURE__*/ React.createElement(_fileName1.default, {
                    name: name,
                    explorer: explorer,
                    NameInput: NameInput,
                    NameButton: NameButton,
                    FileNameSVG: _$FileNameSVG,
                    onNameChange: this.nameChangeHandler,
                    onNameCancel: this.nameCancelHandler,
                    onSVGButtonClick: this.svgButtonClickHandler
                });
            }
        }
    ]);
    return FileNameDragEntryItem;
}(_drag.default);
_defineProperty(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_defineProperty(FileNameDragEntryItem, "type", _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9pdGVtL2VudHJ5L2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGVudHJ5SXRlbU5hbWUpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldEZpbGVOYW1lKCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gc3VwZXIuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG5cdFx0XHRcdFx0ZW50cnlEaXJlY3RvcnkgPSBmYWxzZTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0ZW50cnlEaXJlY3Rvcnlcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgTmFtZUlucHV0LCBOYW1lQnV0dG9uLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxGaWxlTmFtZUVudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvcmVyPXtleHBsb3Jlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lSW5wdXQ9e05hbWVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lQnV0dG9uPXtOYW1lQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVOYW1lU1ZHPXtGaWxlTmFtZVNWR31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hbWVDaGFuZ2U9e3RoaXMubmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYW1lQ2FuY2VsPXt0aGlzLm5hbWVDYW5jZWxIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU1ZHQnV0dG9uQ2xpY2s9e3RoaXMuc3ZnQnV0dG9uQ2xpY2tIYW5kbGVyfVxuICAgICAgLz5cblx0XHQpO1xuICB9XG5cblx0c3RhdGljIEZpbGVOYW1lU1ZHID0gRmlsZU5hbWVTVkc7XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJnZXRGaWxlTmFtZSIsImZpbGVOYW1lIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsInJldHJpZXZlUGF0aE1hcHMiLCJwYXRoTWFwcyIsInB1c2giLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiTmFtZUlucHV0IiwiTmFtZUJ1dHRvbiIsIkZpbGVOYW1lU1ZHIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsIkZpbGVOYW1lRW50cnlJdGVtRGl2Iiwib25OYW1lQ2hhbmdlIiwibmFtZUNoYW5nZUhhbmRsZXIiLCJvbk5hbWVDYW5jZWwiLCJuYW1lQ2FuY2VsSGFuZGxlciIsIm9uU1ZHQnV0dG9uQ2xpY2siLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJEcmFnRW50cnlJdGVtIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs2REFQRzt5REFDRTs4REFDTztvQkFFUzswQkFDK0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUgsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNwQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCRixVQUFVRyxPQUFPO2dCQUV2QyxPQUFRRDtvQkFDUCxLQUFLRSxxQ0FBeUI7b0JBQzlCLEtBQUtDLHVDQUEyQjtvQkFDaEMsS0FBS0MsNENBQWdDO3dCQUNwQyxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUN0QkMsZ0JBQWdCVCxVQUFVUSxPQUFPO3dCQUVwQ1AsU0FBU1MsSUFBQUEsK0JBQXlCLEVBQUNILE1BQU1FO3dCQUV6QyxLQUFNO29CQUVQLEtBQUtFLDBDQUE4Qjt3QkFDbENWLFNBQVMsS0FBSzt3QkFFZCxLQUFNO2dCQUNSO2dCQUVBLE9BQU9BO1lBQ1I7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDYixJQUFNTCxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUN0QkssV0FBV04sTUFBTSxHQUFHO2dCQUV2QixPQUFPTTtZQUNSOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLGVBQWUsRUFBRUMsZUFBZSxFQUFFO2dCQUM1QyxJQUFNQyxVQUFVLHFCQWxDR25CLGtDQWtDR2dCLGNBQU4sSUFBSyxhQUFZQyxpQkFBaUJDLGtCQUMvQ0UsaUJBQWlCLEtBQUs7Z0JBRXpCQyxPQUFPQyxNQUFNLENBQUNILFNBQVM7b0JBQ3RCQyxnQkFBQUE7Z0JBQ0Q7Z0JBRUEsT0FBT0Q7WUFDUjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJOLGVBQWUsRUFBRUMsZUFBZSxFQUFFTSxRQUFRLEVBQUU7Z0JBQzVELElBQU1MLFVBQVUsSUFBSSxDQUFDSCxVQUFVLENBQUNDLGlCQUFpQkM7Z0JBRWpETSxTQUFTQyxJQUFJLENBQUNOO1lBQ2Y7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNiLElBQU0sQUFBRWpCLE9BQVMsSUFBSSxDQUFDa0IsVUFBVSxDQUF4QmxCLE1BQ3VDLG9CQUFBLElBQUksQ0FBQ21CLFdBQVcsRUFBdkRDLFlBQXVDLGtCQUF2Q0EsV0FBV0MsYUFBNEIsa0JBQTVCQSxZQUFZQyxnQkFBZ0Isa0JBQWhCQSxhQUM5QkMsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRTlCLHFCQUVDLG9CQUFDQyxrQkFBb0I7b0JBQUN6QixNQUFNQTtvQkFDSHVCLFVBQVVBO29CQUNWSCxXQUFXQTtvQkFDWEMsWUFBWUE7b0JBQ1pDLGFBQWFBO29CQUNiSSxjQUFjLElBQUksQ0FBQ0MsaUJBQWlCO29CQUNwQ0MsY0FBYyxJQUFJLENBQUNDLGlCQUFpQjtvQkFDcENDLGtCQUFrQixJQUFJLENBQUNDLHFCQUFxQjs7WUFHdEU7OztXQW5FbUJ4QztFQUE4QnlDLGFBQWE7QUFxRS9ELGdCQXJFb0J6Qyx1QkFxRWIrQixlQUFjQSxpQkFBVztBQUUvQixnQkF2RW1CL0IsdUJBdUVaMEMsUUFBT3BDLHFDQUF5QjtBQUV2QyxnQkF6RW1CTix1QkF5RVoyQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9