"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameEntryItemDiv;
    }
});
var _svg = /*#__PURE__*/ _interopRequireDefault(require("../../../../button/svg"));
var _background = /*#__PURE__*/ _interopRequireDefault(require("../../../../div/background"));
var _name = /*#__PURE__*/ _interopRequireDefault(require("../../../../div/item/entry/name"));
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
var FileNameEntryItemDiv = /*#__PURE__*/ function(NameEntryItemDiv) {
    _inherits(FileNameEntryItemDiv, NameEntryItemDiv);
    var _super = _createSuper(FileNameEntryItemDiv);
    function FileNameEntryItemDiv() {
        _classCallCheck(this, FileNameEntryItemDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "nameButtonDoubleClickHandler", function(event, element) {
            var explorer = _this.getExplorer(), parentElement = _this.getParentElement(), fileNameDragEntryItem = parentElement; ///
            explorer.openFileNameDragEntryItem(fileNameDragEntryItem);
            event.stopPropagation();
        });
        return _this;
    }
    _createClass(FileNameEntryItemDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, name = _this_properties.name, NameInput = _this_properties.NameInput, NameButton = _this_properties.NameButton, FileNameSVG = _this_properties.FileNameSVG;
                return [
                    /*#__PURE__*/ React.createElement(_svg.default, {
                        onClick: this.svgButtonClickHandler
                    }, /*#__PURE__*/ React.createElement(FileNameSVG, null)),
                    /*#__PURE__*/ React.createElement(NameButton, {
                        onDoubleClick: this.nameButtonDoubleClickHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(NameInput, {
                        onChange: this.nameInputChangeHandler
                    }, name),
                    /*#__PURE__*/ React.createElement(_background.default, null)
                ];
            }
        }
    ]);
    return FileNameEntryItemDiv;
}(_name.default);
_defineProperty(FileNameEntryItemDiv, "defaultProperties", {
    className: "file"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9uYW1lL2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTVkdCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2J1dHRvbi9zdmdcIjtcbmltcG9ydCBCYWNrZ3JvdW5kRGl2IGZyb20gXCIuLi8uLi8uLi8uLi9kaXYvYmFja2dyb3VuZFwiO1xuaW1wb3J0IE5hbWVFbnRyeUl0ZW1EaXYgZnJvbSBcIi4uLy4uLy4uLy4uL2Rpdi9pdGVtL2VudHJ5L25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZU5hbWVFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBOYW1lRW50cnlJdGVtRGl2IHtcbiAgbmFtZUJ1dHRvbkRvdWJsZUNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGV4cGxvcmVyID0gdGhpcy5nZXRFeHBsb3JlcigpLFxuICAgICAgICAgIHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKSxcbiAgICAgICAgICBmaWxlTmFtZURyYWdFbnRyeUl0ZW0gPSBwYXJlbnRFbGVtZW50O1x0Ly8vXG5cbiAgICBleHBsb3Jlci5vcGVuRmlsZU5hbWVEcmFnRW50cnlJdGVtKGZpbGVOYW1lRHJhZ0VudHJ5SXRlbSk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBOYW1lSW5wdXQsIE5hbWVCdXR0b24sIEZpbGVOYW1lU1ZHIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFNWR0J1dHRvbiBvbkNsaWNrPXt0aGlzLnN2Z0J1dHRvbkNsaWNrSGFuZGxlcn0gPlxuICAgICAgICA8RmlsZU5hbWVTVkcvPlxuICAgICAgPC9TVkdCdXR0b24+LFxuICAgICAgPE5hbWVCdXR0b24gb25Eb3VibGVDbGljaz17dGhpcy5uYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyfSA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lQnV0dG9uPixcbiAgICAgIDxOYW1lSW5wdXQgb25DaGFuZ2U9e3RoaXMubmFtZUlucHV0Q2hhbmdlSGFuZGxlcn0gPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZUlucHV0PixcbiAgICAgIDxCYWNrZ3JvdW5kRGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaWxlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZU5hbWVFbnRyeUl0ZW1EaXYiLCJuYW1lQnV0dG9uRG91YmxlQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXhwbG9yZXIiLCJnZXRFeHBsb3JlciIsInBhcmVudEVsZW1lbnQiLCJnZXRQYXJlbnRFbGVtZW50IiwiZmlsZU5hbWVEcmFnRW50cnlJdGVtIiwib3BlbkZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk5hbWVJbnB1dCIsIk5hbWVCdXR0b24iLCJGaWxlTmFtZVNWRyIsIlNWR0J1dHRvbiIsIm9uQ2xpY2siLCJzdmdCdXR0b25DbGlja0hhbmRsZXIiLCJvbkRvdWJsZUNsaWNrIiwib25DaGFuZ2UiLCJuYW1lSW5wdXRDaGFuZ2VIYW5kbGVyIiwiQmFja2dyb3VuZERpdiIsIk5hbWVFbnRyeUl0ZW1EaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7d0RBSkM7K0RBQ0k7eURBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDbkJDLCtDQUFBQSxnQ0FBK0IsU0FBQ0MsT0FBT0MsU0FBWTtZQUNqRCxJQUFNQyxXQUFXLE1BQUtDLFdBQVcsSUFDM0JDLGdCQUFnQixNQUFLQyxnQkFBZ0IsSUFDckNDLHdCQUF3QkYsZUFBZSxHQUFHO1lBRWhERixTQUFTSyx5QkFBeUIsQ0FBQ0Q7WUFFbkNOLE1BQU1RLGVBQWU7UUFDdkI7OztpQkFUbUJWOztZQVduQlcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFxRCxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBNURDLE9BQTZDLGlCQUE3Q0EsTUFBTUMsWUFBdUMsaUJBQXZDQSxXQUFXQyxhQUE0QixpQkFBNUJBLFlBQVlDLGNBQWdCLGlCQUFoQkE7Z0JBRXJDLE9BQVE7a0NBRU4sb0JBQUNDLFlBQVM7d0JBQUNDLFNBQVMsSUFBSSxDQUFDQyxxQkFBcUI7cUNBQzVDLG9CQUFDSDtrQ0FFSCxvQkFBQ0Q7d0JBQVdLLGVBQWUsSUFBSSxDQUFDbkIsNEJBQTRCO3VCQUN6RFk7a0NBRUgsb0JBQUNDO3dCQUFVTyxVQUFVLElBQUksQ0FBQ0Msc0JBQXNCO3VCQUM3Q1Q7a0NBRUgsb0JBQUNVLG1CQUFhO2lCQUVmO1lBQ0g7OztXQTVCbUJ2QjtFQUE2QndCLGFBQWdCO0FBOEJoRSxnQkE5Qm1CeEIsc0JBOEJaeUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==