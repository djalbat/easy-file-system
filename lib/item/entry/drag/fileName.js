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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwibmFtZXMiOlsiTmFtZUJ1dHRvbiIsIkZpbGVOYW1lU1ZHIiwiRHJhZ0VudHJ5SXRlbSIsIkZpbGVOYW1lRW50cnlJdGVtRGl2IiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsIkZJTEVfTkFNRV9EUkFHX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEUiLCJGSUxFX05BTUVfTUFSS0VSX1RZUEUiLCJESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRSIsIkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsImlzQmVmb3JlIiwiZW50cnlJdGVtIiwiYmVmb3JlIiwiZW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJuYW1lIiwiZ2V0TmFtZSIsImVudHJ5SXRlbU5hbWUiLCJnZXRGaWxlTmFtZSIsInByb3BlcnRpZXMiLCJmaWxlTmFtZSIsImdldE5hbWVCdXR0b24iLCJjb25zdHJ1Y3RvciIsImdldEZpbGVOYW1lU1ZHIiwiZ2V0UGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsInBhdGhNYXAiLCJlbnRyeURpcmVjdG9yeSIsIk9iamVjdCIsImFzc2lnbiIsInJldHJpZXZlUGF0aE1hcHMiLCJwYXRoTWFwcyIsInB1c2giLCJjaGlsZEVsZW1lbnRzIiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInR5cGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFzQixDQUF0QixLQUFzQjtBQUNyQixHQUF1QixDQUF2QixTQUF1QjtBQUNyQixHQUEwQixDQUExQixLQUEwQjtBQUNuQixHQUFpQyxDQUFqQyxVQUFpQztBQUV4QixHQUF5QixDQUF6QixNQUF5QjtBQUM4QyxHQUFnQixDQUFoQixNQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVHLHFCQUFxQixpQkFBM0IsUUFBUTtjQUFGLHFCQUFxQjthQUFyQixxQkFBcUI7OEJBQXJCLHFCQUFxQjtnRUFBckIscUJBQXFCOztpQkFBckIscUJBQXFCOztZQUN6QyxHQUFRLEVBQVIsQ0FBUTttQkFBUixRQUFRLENBQVIsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNwQixHQUFHLENBQUMsTUFBTTtnQkFFVixHQUFLLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPO2dCQUV2QyxNQUFNLENBQUUsYUFBYTtvQkFDcEIsSUFBSSxDQVQwRyxNQUFnQjtvQkFVOUgsSUFBSSxDQVYwRyxNQUFnQjtvQkFXOUgsSUFBSSxDQVgwRyxNQUFnQjt3QkFZN0gsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxJQUN0QixhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU87d0JBRXBDLE1BQU0sT0FoQmdDLE1BQXlCLDRCQWdCNUIsSUFBSSxFQUFFLGFBQWE7d0JBQ3RELEtBQUs7b0JBRU4sSUFBSSxDQWxCMEcsTUFBZ0I7d0JBbUI3SCxNQUFNLEdBQUcsS0FBSzt3QkFDZCxLQUFLOztnQkFHUCxNQUFNLENBQUMsTUFBTTtZQUNkLENBQUM7OztZQUVELEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDZCxHQUFLLENBQVksV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQXhCLElBQUksR0FBSyxXQUFlLENBQXhCLElBQUksRUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkIsTUFBTSxDQUFDLFFBQVE7WUFDaEIsQ0FBQzs7O1lBRUQsR0FBYSxFQUFiLENBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNoQixHQUFLLENBQWtCLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQS9CLFVBQVUsR0FBSyxZQUFnQixDQUEvQixVQUFVO2dCQUVsQixNQUFNLENBQUMsVUFBVTtZQUNsQixDQUFDOzs7WUFFRCxHQUFjLEVBQWQsQ0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxHQUFHLENBQUM7Z0JBQ2pCLEdBQUssQ0FBbUIsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDLFdBQVcsRUFBaEMsV0FBVyxHQUFLLFlBQWdCLENBQWhDLFdBQVc7Z0JBRW5CLE1BQU0sQ0FBQyxXQUFXO1lBQ25CLENBQUM7OztZQUVELEdBQVUsRUFBVixDQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxDQUFDO2dCQUM3QyxHQUFLLENBQUMsT0FBTyx3QkE1Q00scUJBQXFCLGFBNENsQixDQUFVLGFBQWhCLElBQUssYUFBWSxlQUFlLEVBQUUsZUFBZSxHQUM5RCxjQUFjLEdBQUcsS0FBSztnQkFFekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdkIsY0FBYyxFQUFkLGNBQWM7Z0JBQ2YsQ0FBQztnQkFFRCxNQUFNLENBQUMsT0FBTztZQUNmLENBQUM7OztZQUVELEdBQWdCLEVBQWhCLENBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDN0QsR0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxlQUFlO2dCQUVoRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDdEIsQ0FBQzs7O1lBRUQsR0FBYSxFQUFiLENBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNkLEdBQUssQ0FBWSxXQUFlLEdBQWYsSUFBSSxDQUFDLFVBQVUsRUFBeEIsSUFBSSxHQUFLLFdBQWUsQ0FBeEIsSUFBSSxFQUNYLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFDL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjO2dCQUVwQyxNQUFNLG1DQXZFeUIsVUFBaUM7b0JBeUV6QyxJQUFJLEVBQUUsSUFBSTtvQkFBRSxRQUFRLEVBQUUsUUFBUTtvQkFBRSxVQUFVLEVBQUUsVUFBVTtvQkFBRSxXQUFXLEVBQUUsV0FBVzs7WUFHdkcsQ0FBQzs7O1dBdkVrQixxQkFBcUI7RUFOaEIsS0FBMEI7Z0JBTS9CLHFCQUFxQixFQXlFakMsQ0FBVSxhQWpGSSxLQUFzQjtnQkFReEIscUJBQXFCLEVBMkVsQyxDQUFXLGNBbEZLLFNBQXVCO2dCQU8xQixxQkFBcUIsRUE2RWpDLENBQUksT0EvRW9HLE1BQWdCO2dCQUU1RyxxQkFBcUIsRUErRWpDLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQVc7QUFDeEIsQ0FBQztrQkFqRmtCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYnV0dG9uL25hbWVcIjtcbmltcG9ydCBGaWxlTmFtZVNWRyBmcm9tIFwiLi4vLi4vLi4vc3ZnL2ZpbGVOYW1lXCI7XG5pbXBvcnQgRHJhZ0VudHJ5SXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9lbnRyeS9kcmFnXCI7XG5pbXBvcnQgRmlsZU5hbWVFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9lbnRyeUl0ZW0vZmlsZU5hbWVcIjtcblxuaW1wb3J0IHsgbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgRklMRV9OQU1FX0RSQUdfVFlQRSwgRElSRUNUT1JZX05BTUVfRFJBR19UWVBFLCBGSUxFX05BTUVfTUFSS0VSX1RZUEUsIERJUkVDVE9SWV9OQU1FX01BUktFUl9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSBleHRlbmRzIERyYWdFbnRyeUl0ZW0ge1xuXHRpc0JlZm9yZShlbnRyeUl0ZW0pIHtcblx0XHRsZXQgYmVmb3JlO1xuXG5cdFx0Y29uc3QgZW50cnlJdGVtVHlwZSA9IGVudHJ5SXRlbS5nZXRUeXBlKCk7XG5cblx0XHRzd2l0Y2ggKGVudHJ5SXRlbVR5cGUpIHtcblx0XHRcdGNhc2UgRklMRV9OQU1FX0RSQUdfVFlQRTpcblx0XHRcdGNhc2UgRklMRV9OQU1FX01BUktFUl9UWVBFOlxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9NQVJLRVJfVFlQRTpcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdFx0XHRlbnRyeUl0ZW1OYW1lID0gZW50cnlJdGVtLmdldE5hbWUoKTtcblxuXHRcdFx0XHRiZWZvcmUgPSBuYW1lSXNCZWZvcmVFbnRyeUl0ZW1OYW1lKG5hbWUsIGVudHJ5SXRlbU5hbWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBESVJFQ1RPUllfTkFNRV9EUkFHX1RZUEU6XG5cdFx0XHRcdGJlZm9yZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gYmVmb3JlO1xuXHR9XG5cblx0Z2V0RmlsZU5hbWUoKSB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXMsXG5cdFx0XHRcdFx0ZmlsZU5hbWUgPSBuYW1lO1x0Ly8vXG5cblx0XHRyZXR1cm4gZmlsZU5hbWU7XG5cdH1cblxuXHRnZXROYW1lQnV0dG9uKCkge1xuXHRcdGNvbnN0IHsgTmFtZUJ1dHRvbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBOYW1lQnV0dG9uO1xuXHR9XG5cblx0Z2V0RmlsZU5hbWVTVkcoKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZVNWRztcblx0fVxuXG5cdGdldFBhdGhNYXAoc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gc3VwZXIuZ2V0UGF0aE1hcChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCksXG5cdFx0XHRcdFx0ZW50cnlEaXJlY3RvcnkgPSBmYWxzZTtcblxuXHRcdE9iamVjdC5hc3NpZ24ocGF0aE1hcCwge1xuXHRcdFx0ZW50cnlEaXJlY3Rvcnlcblx0XHR9KTtcblxuXHRcdHJldHVybiBwYXRoTWFwO1xuXHR9XG5cblx0cmV0cmlldmVQYXRoTWFwcyhzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCwgcGF0aE1hcHMpIHtcblx0XHRjb25zdCBwYXRoTWFwID0gdGhpcy5nZXRQYXRoTWFwKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoKTtcblxuXHRcdHBhdGhNYXBzLnB1c2gocGF0aE1hcCk7XG5cdH1cblxuXHRjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuXHRcdFx0XHRcdGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuXHRcdFx0XHRcdE5hbWVCdXR0b24gPSB0aGlzLmdldE5hbWVCdXR0b24oKSxcblx0XHRcdFx0XHRGaWxlTmFtZVNWRyA9IHRoaXMuZ2V0RmlsZU5hbWVTVkcoKTtcblxuXHRcdHJldHVybiAoXG5cblx0XHRcdDxGaWxlTmFtZUVudHJ5SXRlbURpdiBuYW1lPXtuYW1lfSBleHBsb3Jlcj17ZXhwbG9yZXJ9IE5hbWVCdXR0b249e05hbWVCdXR0b259IEZpbGVOYW1lU1ZHPXtGaWxlTmFtZVNWR30gLz5cblxuXHRcdCk7XG4gIH1cblxuICBzdGF0aWMgTmFtZUJ1dHRvbiA9IE5hbWVCdXR0b247XG5cblx0c3RhdGljIEZpbGVOYW1lU1ZHID0gRmlsZU5hbWVTVkc7XG5cbiAgc3RhdGljIHR5cGUgPSBGSUxFX05BTUVfRFJBR19UWVBFO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZS1uYW1lXCJcbiAgfTtcbn1cbiJdfQ==