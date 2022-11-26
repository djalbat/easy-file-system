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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9pdGVtL2VudHJ5L2ZpbGVOYW1lXCI7XG5cbmltcG9ydCB7IG5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEUsIERJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSwgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFLCBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9lbnRyeVR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9FTlRSWV9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfRU5UUllfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGVudHJ5SXRlbU5hbWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX0VOVFJZX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0RmlsZU5hbWUoKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpbGVOYW1lID0gbmFtZTtcdC8vL1xuXG5cdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHR9XG5cblx0Z2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSBzdXBlci5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKSxcblx0XHRcdFx0XHRlbnRyeURpcmVjdG9yeSA9IGZhbHNlO1xuXG5cdFx0T2JqZWN0LmFzc2lnbihwYXRoTWFwLCB7XG5cdFx0XHRlbnRyeURpcmVjdG9yeVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHBhdGhNYXA7XG5cdH1cblxuXHRyZXRyaWV2ZVBhdGhNYXBzKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwYXRoTWFwcykge1xuXHRcdGNvbnN0IHBhdGhNYXAgPSB0aGlzLmdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpO1xuXG5cdFx0cGF0aE1hcHMucHVzaChwYXRoTWFwKTtcblx0fVxuXG5cdGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgeyBOYW1lSW5wdXQsIE5hbWVCdXR0b24sIEZpbGVOYW1lU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PEZpbGVOYW1lRW50cnlJdGVtRGl2IG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9yZXI9e2V4cGxvcmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVJbnB1dD17TmFtZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVCdXR0b249e05hbWVCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZU5hbWVTVkc9e0ZpbGVOYW1lU1ZHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmFtZUNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hbWVDYW5jZWw9e3RoaXMubmFtZUNhbmNlbEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TVkdCdXR0b25DbGljaz17dGhpcy5zdmdCdXR0b25DbGlja0hhbmRsZXJ9XG4gICAgICAvPlxuXHRcdCk7XG4gIH1cblxuXHRzdGF0aWMgRmlsZU5hbWVTVkcgPSBGaWxlTmFtZVNWRztcblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfTkFNRV9EUkFHX0VOVFJZX1RZUEU7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwiRklMRV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsIkZJTEVfTkFNRV9NQVJLRVJfRU5UUllfVFlQRSIsIkRJUkVDVE9SWV9OQU1FX01BUktFUl9FTlRSWV9UWVBFIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkRJUkVDVE9SWV9OQU1FX0RSQUdfRU5UUllfVFlQRSIsImdldEZpbGVOYW1lIiwiZmlsZU5hbWUiLCJnZXRQYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwicGF0aE1hcCIsImVudHJ5RGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJOYW1lSW5wdXQiLCJOYW1lQnV0dG9uIiwiRmlsZU5hbWVTVkciLCJleHBsb3JlciIsImdldEV4cGxvcmVyIiwiRmlsZU5hbWVFbnRyeUl0ZW1EaXYiLCJvbk5hbWVDaGFuZ2UiLCJuYW1lQ2hhbmdlSGFuZGxlciIsIm9uTmFtZUNhbmNlbCIsIm5hbWVDYW5jZWxIYW5kbGVyIiwib25TVkdCdXR0b25DbGljayIsInN2Z0J1dHRvbkNsaWNrSGFuZGxlciIsIkRyYWdFbnRyeUl0ZW0iLCJ0eXBlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzZEQVBHO3lEQUNFOzhEQUNPO29CQUVTOzBCQUMrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxSCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ3BCQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsU0FBUyxFQUFFO2dCQUNuQixJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0JGLFVBQVVHLE9BQU87Z0JBRXZDLE9BQVFEO29CQUNQLEtBQUtFLHFDQUF5QjtvQkFDOUIsS0FBS0MsdUNBQTJCO29CQUNoQyxLQUFLQyw0Q0FBZ0M7d0JBQ3BDLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3RCQyxnQkFBZ0JULFVBQVVRLE9BQU87d0JBRXBDUCxTQUFTUyxJQUFBQSwrQkFBeUIsRUFBQ0gsTUFBTUU7d0JBQ3pDLEtBQU07b0JBRVAsS0FBS0UsMENBQThCO3dCQUNsQ1YsU0FBUyxLQUFLO3dCQUNkLEtBQU07Z0JBQ1I7Z0JBRUEsT0FBT0E7WUFDUjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNiLElBQU1MLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3RCSyxXQUFXTixNQUFNLEdBQUc7Z0JBRXZCLE9BQU9NO1lBQ1I7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsZUFBZSxFQUFFQyxlQUFlLEVBQUU7Z0JBQzVDLElBQU1DLFVBQVUscUJBaENHbkIsa0NBZ0NHZ0IsY0FBTixJQUFLLGFBQVlDLGlCQUFpQkMsa0JBQy9DRSxpQkFBaUIsS0FBSztnQkFFekJDLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztvQkFDdEJDLGdCQUFBQTtnQkFDRDtnQkFFQSxPQUFPRDtZQUNSOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQk4sZUFBZSxFQUFFQyxlQUFlLEVBQUVNLFFBQVEsRUFBRTtnQkFDNUQsSUFBTUwsVUFBVSxJQUFJLENBQUNILFVBQVUsQ0FBQ0MsaUJBQWlCQztnQkFFakRNLFNBQVNDLElBQUksQ0FBQ047WUFDZjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2IsSUFBTSxBQUFFakIsT0FBUyxJQUFJLENBQUNrQixVQUFVLENBQXhCbEIsTUFDdUMsb0JBQUEsSUFBSSxDQUFDbUIsV0FBVyxFQUF2REMsWUFBdUMsa0JBQXZDQSxXQUFXQyxhQUE0QixrQkFBNUJBLFlBQVlDLGdCQUFnQixrQkFBaEJBLGFBQzlCQyxXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFOUIscUJBRUMsb0JBQUNDLGtCQUFvQjtvQkFBQ3pCLE1BQU1BO29CQUNIdUIsVUFBVUE7b0JBQ1ZILFdBQVdBO29CQUNYQyxZQUFZQTtvQkFDWkMsYUFBYUE7b0JBQ2JJLGNBQWMsSUFBSSxDQUFDQyxpQkFBaUI7b0JBQ3BDQyxjQUFjLElBQUksQ0FBQ0MsaUJBQWlCO29CQUNwQ0Msa0JBQWtCLElBQUksQ0FBQ0MscUJBQXFCOztZQUd0RTs7O1dBakVtQnhDO0VBQThCeUMsYUFBYTtBQW1FL0QsZ0JBbkVvQnpDLHVCQW1FYitCLGVBQWNBLGlCQUFXO0FBRS9CLGdCQXJFbUIvQix1QkFxRVowQyxRQUFPcEMscUNBQXlCO0FBRXZDLGdCQXZFbUJOLHVCQXVFWjJDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=