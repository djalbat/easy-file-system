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
            key: "retrievePathMaps",
            value: function retrievePathMaps(sourcePath, targetPath, pathMaps) {
                var pathMap = this.getPathMap(sourcePath, targetPath);
                pathMaps.push(pathMap);
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
                var _properties = this.properties, name = _properties.name, _constructor = this.constructor, FileNameSVG = _constructor.FileNameSVG, NameButton = this.getNameButton(), doubleClickHandler = this.doubleClickHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(FileNameSVG, null),
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
_defineProperty(FileNameDragEntryItem, "FileNameSVG", _fileName.default);
_defineProperty(FileNameDragEntryItem, "type", _types.FILE_NAME_DRAG_TYPE);
_defineProperty(FileNameDragEntryItem, "defaultProperties", {
    className: "file-name"
});
exports.default = FileNameDragEntryItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L2RyYWcvZmlsZU5hbWUuanMiXSwibmFtZXMiOlsiTmFtZUJ1dHRvbiIsIkZpbGVOYW1lU1ZHIiwiRHJhZ0VudHJ5SXRlbSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJGSUxFX05BTUVfRFJBR19UWVBFIiwiRElSRUNUT1JZX05BTUVfRFJBR19UWVBFIiwiRklMRV9OQU1FX01BUktFUl9UWVBFIiwiRElSRUNUT1JZX05BTUVfTUFSS0VSX1RZUEUiLCJGaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJpc0JlZm9yZSIsImVudHJ5SXRlbSIsImJlZm9yZSIsImVudHJ5SXRlbVR5cGUiLCJnZXRUeXBlIiwibmFtZSIsImdldE5hbWUiLCJlbnRyeUl0ZW1OYW1lIiwiZ2V0RmlsZU5hbWUiLCJwcm9wZXJ0aWVzIiwiZmlsZU5hbWUiLCJnZXROYW1lQnV0dG9uIiwiY29uc3RydWN0b3IiLCJnZXRQYXRoTWFwIiwic291cmNlUGF0aCIsInRhcmdldFBhdGgiLCJwYXRoTWFwIiwiZGlyZWN0b3J5IiwiT2JqZWN0IiwiYXNzaWduIiwicmV0cmlldmVQYXRoTWFwcyIsInBhdGhNYXBzIiwicHVzaCIsImRvdWJsZUNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJmaWxlTmFtZURyYWdFbnRyeUl0ZW0iLCJvcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJvbkRvdWJsZUNsaWNrIiwidHlwZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVXLEdBQXNCLENBQXRCLEtBQXNCO0FBQ3JCLEdBQWlDLENBQWpDLFNBQWlDO0FBQy9CLEdBQTBCLENBQTFCLEtBQTBCO0FBRVYsR0FBeUIsQ0FBekIsTUFBeUI7QUFDOEMsR0FBZ0IsQ0FB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