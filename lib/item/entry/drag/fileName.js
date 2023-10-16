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
var _fileName = /*#__PURE__*/ _interop_require_default(require("../../../svg/fileName"));
var _drag = /*#__PURE__*/ _interop_require_default(require("../../../item/entry/drag"));
var _fileName1 = /*#__PURE__*/ _interop_require_default(require("../../../div/item/entry/drag/fileName"));
var _name = require("../../../utilities/name");
var _entryTypes = require("../../../entryTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var FileNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(FileNameDragEntryItem, DragEntryItem);
    var _super = _create_super(FileNameDragEntryItem);
    function FileNameDragEntryItem() {
        _class_call_check(this, FileNameDragEntryItem);
        return _super.apply(this, arguments);
    }
    _create_class(FileNameDragEntryItem, [
        {
            key: "delayedDoubleClick",
            value: function delayedDoubleClick() {
                var explorer = this.getExplorer(), fileNameDragEntryItem = this; ///
                explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
            }
        },
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
            key: "remove",
            value: function remove() {
                var path = this.getPath(), explorer = this.getExplorer(), filePath = path; ///
                explorer.removeFilePath(filePath);
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
_define_property(FileNameDragEntryItem, "type", _entryTypes.FILE_NAME_DRAG_ENTRY_TYPE);
_define_property(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_define_property(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRkZWxheWVkRG91YmxlQ2xpY2soKSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcztcdC8vL1xuXG5cdFx0ZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShmaWxlTmFtZURyYWdFbnRyeUl0ZW0pO1xuXHR9XG5cblx0aXNCZWZvcmUoZW50cnlJdGVtKSB7XG5cdFx0bGV0IGJlZm9yZTtcblxuXHRcdGNvbnN0IGVudHJ5SXRlbVR5cGUgPSBlbnRyeUl0ZW0uZ2V0VHlwZSgpO1xuXG5cdFx0c3dpdGNoIChlbnRyeUl0ZW1UeXBlKSB7XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIEZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRcdFx0ZW50cnlJdGVtTmFtZSA9IGVudHJ5SXRlbS5nZXROYW1lKCk7XG5cblx0XHRcdFx0YmVmb3JlID0gbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZShuYW1lLCBlbnRyeUl0ZW1OYW1lKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IGZhbHNlO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZWZvcmU7XG5cdH1cblxuXHRnZXRGaWxlTmFtZSgpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWUgPSBuYW1lO1x0Ly8vXG5cblx0XHRyZXR1cm4gZmlsZU5hbWU7XG5cdH1cblxuICBpc0NvbGxhcHNlZCgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSBudWxsOyAvLy9cblxuICAgIHJldHVybiBjb2xsYXBzZWQ7XG4gIH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCksXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZmlsZVBhdGggPSBwYXRoO1x0Ly8vXG5cblx0XHRleHBsb3Jlci5yZW1vdmVGaWxlUGF0aChmaWxlUGF0aCk7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIHsgTmFtZVNwYW4sIEZpbGVOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PEZpbGVOYW1lRHJhZ0VudHJ5SXRlbURpdiBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleHBsb3Jlcj17ZXhwbG9yZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE5hbWVTcGFuPXtOYW1lU3Bhbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0RmlsZU5hbWVTVkc9e0ZpbGVOYW1lU1ZHfVxuXHRcdFx0Lz5cblxuXHRcdCk7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIEZpbGVOYW1lU1ZHID0gRmlsZU5hbWVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImRlbGF5ZWREb3VibGVDbGljayIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJnZXRGaWxlTmFtZSIsImZpbGVOYW1lIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcCIsInB1c2giLCJyZW1vdmUiLCJwYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiTmFtZVNwYW4iLCJGaWxlTmFtZVNWRyIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBHOzJEQUNFO2dFQUNXO29CQUVLOzBCQUMrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUgsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzlCQyx3QkFBd0IsSUFBSSxFQUFFLEdBQUc7Z0JBRXBDRixTQUFTRyx5QkFBeUIsQ0FBQ0Q7WUFDcEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsU0FBUztnQkFDakIsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCRixVQUFVRyxPQUFPO2dCQUV2QyxPQUFRRDtvQkFDUCxLQUFLRSxxQ0FBeUI7b0JBQzlCLEtBQUtDLHVDQUEyQjtvQkFDaEMsS0FBS0MsNENBQWdDO3dCQUNwQyxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUN0QkMsZ0JBQWdCVCxVQUFVUSxPQUFPO3dCQUVwQ1AsU0FBU1MsSUFBQUEsK0JBQXlCLEVBQUNILE1BQU1FO3dCQUV6QztvQkFFRCxLQUFLRSwwQ0FBOEI7d0JBQ2xDVixTQUFTO3dCQUVUO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1I7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0MsSUFBTUwsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDdEJLLFdBQVdOLE1BQU0sR0FBRztnQkFFdkIsT0FBT007WUFDUjs7O1lBRUNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLE1BQU0sR0FBRztnQkFFM0IsT0FBT0E7WUFDVDs7O1lBRURDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxRQUFRO2dCQUMxRCxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDSixpQkFBaUJDO2dCQUVqREMsU0FBU0csSUFBSSxDQUFDRjtZQUNmOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3RCOUIsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0I4QixXQUFXRixNQUFNLEdBQUc7Z0JBRXZCN0IsU0FBU2dDLGNBQWMsQ0FBQ0Q7WUFDekI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0csSUFBTSxBQUFFckIsT0FBUyxJQUFJLENBQUNzQixVQUFVLENBQXhCdEIsTUFDMEIsb0JBQUEsSUFBSSxDQUFDdUIsV0FBVyxFQUExQ0MsV0FBMEIsa0JBQTFCQSxVQUFVQyxnQkFBZ0Isa0JBQWhCQSxhQUNqQnJDLFdBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUU5QixxQkFFQyxvQkFBQ3FDLGtCQUF3QjtvQkFBQzFCLE1BQU1BO29CQUNuQlosVUFBVUE7b0JBQ1ZvQyxVQUFVQTtvQkFDVkMsYUFBYUE7O1lBSTNCOzs7V0ExRW1CdkM7RUFBOEJ5QyxhQUFhO0FBNEU5RCxpQkE1RW1CekMsdUJBNEVaMEMsUUFBTy9CLHFDQUF5QjtBQUV2QyxpQkE5RW1CWCx1QkE4RVp1QyxlQUFjQSxpQkFBVztBQUVoQyxpQkFoRm1CdkMsdUJBZ0ZaMkMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==