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
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem() {
                var explorer = this.getExplorer(), fileNameDragEntryItem = this; ///
                explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
            }
        },
        {
            key: "doubleClick",
            value: function doubleClick() {
                this.openFileNameDragEntryItem();
            }
        },
        {
            key: "singleClick",
            value: function singleClick() {
                this.openFileNameDragEntryItem();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKCkge1xuXHRcdGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXM7XHQvLy9cblxuXHRcdGV4cGxvcmVyLm9wZW5GaWxlTmFtZURyYWdFbnRyeUl0ZW0oZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcblx0fVxuXG5cdGRvdWJsZUNsaWNrKCkge1xuXHRcdHRoaXMub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSgpO1xuXHR9XG5cblx0c2luZ2xlQ2xpY2soKSB7XG5cdFx0dGhpcy5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKCk7XG5cdH1cblxuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGVudHJ5SXRlbU5hbWUpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJlZm9yZTtcblx0fVxuXG5cdGdldEZpbGVOYW1lKCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcblx0XHRcdFx0XHRmaWxlTmFtZSA9IG5hbWU7XHQvLy9cblxuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIGNvbGxhcHNlZDtcbiAgfVxuXG5cdHJldHJpZXZlUGF0aE1hcHMoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIHBhdGhNYXBzKSB7XG5cdFx0Y29uc3QgcGF0aE1hcCA9IHRoaXMuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCk7XG5cblx0XHRwYXRoTWFwcy5wdXNoKHBhdGhNYXApO1xuXHR9XG5cblx0cmVtb3ZlKCkge1xuXHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKSxcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKSxcblx0XHRcdFx0XHRmaWxlUGF0aCA9IHBhdGg7XHQvLy9cblxuXHRcdGV4cGxvcmVyLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyBOYW1lU3BhbiwgRmlsZU5hbWVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0XHRcdFx0ZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCk7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8RmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4cGxvcmVyPXtleHBsb3Jlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0TmFtZVNwYW49e05hbWVTcGFufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRGaWxlTmFtZVNWRz17RmlsZU5hbWVTVkd9XG5cdFx0XHQvPlxuXG5cdFx0KTtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTtcblxuICBzdGF0aWMgRmlsZU5hbWVTVkcgPSBGaWxlTmFtZVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJkb3VibGVDbGljayIsInNpbmdsZUNsaWNrIiwiaXNCZWZvcmUiLCJlbnRyeUl0ZW0iLCJiZWZvcmUiLCJlbnRyeUl0ZW1UeXBlIiwiZ2V0VHlwZSIsIkZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIm5hbWUiLCJnZXROYW1lIiwiZW50cnlJdGVtTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEUiLCJnZXRGaWxlTmFtZSIsImZpbGVOYW1lIiwiaXNDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJyZXRyaWV2ZVBhdGhNYXBzIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcHMiLCJwYXRoTWFwIiwiZ2V0UGF0aE1hcCIsInB1c2giLCJyZW1vdmUiLCJwYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoIiwicmVtb3ZlRmlsZVBhdGgiLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiTmFtZVNwYW4iLCJGaWxlTmFtZVNWRyIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBHOzJEQUNFO2dFQUNXO29CQUVLOzBCQUMrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUgsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0MsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDOUJDLHdCQUF3QixJQUFJLEVBQUUsR0FBRztnQkFFcENGLFNBQVNELHlCQUF5QixDQUFDRztZQUNwQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQyxJQUFJLENBQUNKLHlCQUF5QjtZQUMvQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQyxJQUFJLENBQUNMLHlCQUF5QjtZQUMvQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTO2dCQUNqQixJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0JGLFVBQVVHLE9BQU87Z0JBRXZDLE9BQVFEO29CQUNQLEtBQUtFLHFDQUF5QjtvQkFDOUIsS0FBS0MsdUNBQTJCO29CQUNoQyxLQUFLQyw0Q0FBZ0M7d0JBQ3BDLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3RCQyxnQkFBZ0JULFVBQVVRLE9BQU87d0JBRXBDUCxTQUFTUyxJQUFBQSwrQkFBeUIsRUFBQ0gsTUFBTUU7d0JBRXpDO29CQUVELEtBQUtFLDBDQUE4Qjt3QkFDbENWLFNBQVM7d0JBRVQ7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDUjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQyxJQUFNTCxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUN0QkssV0FBV04sTUFBTSxHQUFHO2dCQUV2QixPQUFPTTtZQUNSOzs7WUFFQ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksTUFBTSxHQUFHO2dCQUUzQixPQUFPQTtZQUNUOzs7WUFFREMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLFFBQVE7Z0JBQzFELElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLENBQUNKLGlCQUFpQkM7Z0JBRWpEQyxTQUFTRyxJQUFJLENBQUNGO1lBQ2Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0MsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDdEIvQixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQitCLFdBQVdGLE1BQU0sR0FBRztnQkFFdkI5QixTQUFTaUMsY0FBYyxDQUFDRDtZQUN6Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRyxJQUFNLEFBQUVyQixPQUFTLElBQUksQ0FBQ3NCLFVBQVUsQ0FBeEJ0QixNQUMwQixvQkFBQSxJQUFJLENBQUN1QixXQUFXLEVBQTFDQyxXQUEwQixrQkFBMUJBLFVBQVVDLGdCQUFnQixrQkFBaEJBLGFBQ2pCdEMsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRTlCLHFCQUVDLG9CQUFDc0Msa0JBQXdCO29CQUFDMUIsTUFBTUE7b0JBQ25CYixVQUFVQTtvQkFDVnFDLFVBQVVBO29CQUNWQyxhQUFhQTs7WUFJM0I7OztXQWxGbUJ4QztFQUE4QjBDLGFBQWE7QUFvRjlELGlCQXBGbUIxQyx1QkFvRloyQyxRQUFPL0IscUNBQXlCO0FBRXZDLGlCQXRGbUJaLHVCQXNGWndDLGVBQWNBLGlCQUFXO0FBRWhDLGlCQXhGbUJ4Qyx1QkF3Rlo0QyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9