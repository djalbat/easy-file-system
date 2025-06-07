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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FileNameDragEntryItem = /*#__PURE__*/ function(DragEntryItem) {
    _inherits(FileNameDragEntryItem, DragEntryItem);
    function FileNameDragEntryItem() {
        _class_call_check(this, FileNameDragEntryItem);
        return _call_super(this, FileNameDragEntryItem, arguments);
    }
    _create_class(FileNameDragEntryItem, [
        {
            key: "openFileNameDragEntryItem",
            value: function openFileNameDragEntryItem(event, element) {
                var explorer = this.getExplorer(), fileNameDragEntryItem = this; ///
                explorer.openFileNameDragEntryItem(event, element, fileNameDragEntryItem);
            }
        },
        {
            key: "doubleClick",
            value: function doubleClick(event, element) {
                this.openFileNameDragEntryItem(event, element);
            }
        },
        {
            key: "singleClick",
            value: function singleClick(event, element) {
                this.openFileNameDragEntryItem(event, element);
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
            key: "removeFromExplorer",
            value: function removeFromExplorer() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0Y29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG5cdFx0XHRcdFx0ZmlsZU5hbWVEcmFnRW50cnlJdGVtID0gdGhpcztcdC8vL1xuXG5cdFx0ZXhwbG9yZXIub3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbShldmVudCwgZWxlbWVudCwgZmlsZU5hbWVEcmFnRW50cnlJdGVtKTtcblx0fVxuXG5cdGRvdWJsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50KTtcblx0fVxuXG5cdHNpbmdsZUNsaWNrKGV2ZW50LCBlbGVtZW50KSB7XG5cdFx0dGhpcy5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50KTtcblx0fVxuXG5cdGlzQmVmb3JlKGVudHJ5SXRlbSkge1xuXHRcdGxldCBiZWZvcmU7XG5cblx0XHRjb25zdCBlbnRyeUl0ZW1UeXBlID0gZW50cnlJdGVtLmdldFR5cGUoKTtcblxuXHRcdHN3aXRjaCAoZW50cnlJdGVtVHlwZSkge1xuXHRcdFx0Y2FzZSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBGSUxFX05BTUVfTUFSS0VSX0VOVFJZX1RZUEU6XG5cdFx0XHRjYXNlIERJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG5cdFx0XHRcdFx0XHRcdGVudHJ5SXRlbU5hbWUgPSBlbnRyeUl0ZW0uZ2V0TmFtZSgpO1xuXG5cdFx0XHRcdGJlZm9yZSA9IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUobmFtZSwgZW50cnlJdGVtTmFtZSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRElSRUNUT1JZX05BTUVfRFJBR19FTlRSWV9UWVBFOlxuXHRcdFx0XHRiZWZvcmUgPSBmYWxzZTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0RmlsZU5hbWUoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lID0gbmFtZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHR9XG5cbiAgaXNDb2xsYXBzZWQoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gY29sbGFwc2VkO1xuICB9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cdH1cblxuXHRyZW1vdmVGcm9tRXhwbG9yZXIoKSB7XG5cdFx0Y29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdGZpbGVQYXRoID0gcGF0aDtcdC8vL1xuXG5cdFx0ZXhwbG9yZXIucmVtb3ZlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXHR9XG5cblx0Y2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB7IE5hbWVTcGFuLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRleHBsb3JlciA9IHRoaXMuZ2V0RXhwbG9yZXIoKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXhwbG9yZXI9e2V4cGxvcmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHROYW1lU3Bhbj17TmFtZVNwYW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZpbGVOYW1lU1ZHPXtGaWxlTmFtZVNWR31cblx0XHRcdC8+XG5cblx0XHQpO1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19FTlRSWV9UWVBFO1xuXG4gIHN0YXRpYyBGaWxlTmFtZVNWRyA9IEZpbGVOYW1lU1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsImZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImRvdWJsZUNsaWNrIiwic2luZ2xlQ2xpY2siLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImdldEZpbGVOYW1lIiwiZmlsZU5hbWUiLCJpc0NvbGxhcHNlZCIsImNvbGxhcHNlZCIsInJldHJpZXZlUGF0aE1hcHMiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJwYXRoTWFwcyIsInBhdGhNYXAiLCJnZXRQYXRoTWFwIiwicHVzaCIsInJlbW92ZUZyb21FeHBsb3JlciIsInBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiTmFtZVNwYW4iLCJGaWxlTmFtZVNWRyIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbURpdiIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBHOzJEQUNFO2dFQUNXO29CQUVLOzBCQUMrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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