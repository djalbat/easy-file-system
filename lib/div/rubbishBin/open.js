"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rubbishBin = _interopRequireDefault(require("../../div/rubbishBin"));
var _open = _interopRequireDefault(require("../../svg/rubbishBin/open"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var OpenRubbishBinDiv = /*#__PURE__*/ function(RubbishBinDiv) {
    _inherits(OpenRubbishBinDiv, RubbishBinDiv);
    function OpenRubbishBinDiv() {
        _classCallCheck(this, OpenRubbishBinDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(OpenRubbishBinDiv).apply(this, arguments));
    }
    _createClass(OpenRubbishBinDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, OpenRubbishBinSVG = _constructor.OpenRubbishBinSVG;
                return(/*#__PURE__*/ React.createElement(OpenRubbishBinSVG, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showOpenRubbishBinDiv = this.show.bind(this), hideOpenRubbishBinDiv = this.hide.bind(this);
                return {
                    showOpenRubbishBinDiv: showOpenRubbishBinDiv,
                    hideOpenRubbishBinDiv: hideOpenRubbishBinDiv
                };
            }
        }
    ]);
    return OpenRubbishBinDiv;
}(_rubbishBin.default);
_defineProperty(OpenRubbishBinDiv, "OpenRubbishBinSVG", _open.default);
_defineProperty(OpenRubbishBinDiv, "tagName", "div");
_defineProperty(OpenRubbishBinDiv, "defaultProperties", {
    className: "open"
});
exports.default = OpenRubbishBinDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9vcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnViYmlzaEJpbkRpdiBmcm9tIFwiLi4vLi4vZGl2L3J1YmJpc2hCaW5cIlxuaW1wb3J0IE9wZW5SdWJiaXNoQmluU1ZHIGZyb20gXCIuLi8uLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5SdWJiaXNoQmluRGl2IGV4dGVuZHMgUnViYmlzaEJpbkRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBPcGVuUnViYmlzaEJpblNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxPcGVuUnViYmlzaEJpblNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93T3BlblJ1YmJpc2hCaW5EaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSxcbiAgICAgICAgICBoaWRlT3BlblJ1YmJpc2hCaW5EaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd09wZW5SdWJiaXNoQmluRGl2LFxuICAgICAgaGlkZU9wZW5SdWJiaXNoQmluRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgT3BlblJ1YmJpc2hCaW5TVkcgPSBPcGVuUnViYmlzaEJpblNWRztcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvcGVuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVjLFdBQXNCO0lBQ2xCLEtBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLGlCQUFpQjtjQUFqQixpQkFBaUI7YUFBakIsaUJBQWlCOzhCQUFqQixpQkFBaUI7Z0VBQWpCLGlCQUFpQjs7aUJBQWpCLGlCQUFpQjs7WUFDcEMsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDbUIsWUFBZ0IsUUFBWCxXQUFXLEVBQXRDLGlCQUFpQixHQUFLLFlBQWdCLENBQXRDLGlCQUFpQjt5REFJdEIsaUJBQWlCOzs7O1lBS3RCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wscUJBQXFCLFFBQVEsSUFBSSxDQUFDLElBQUksUUFDdEMscUJBQXFCLFFBQVEsSUFBSSxDQUFDLElBQUk7O29CQUcxQyxxQkFBcUIsRUFBckIscUJBQXFCO29CQUNyQixxQkFBcUIsRUFBckIscUJBQXFCOzs7OztXQWpCTixpQkFBaUI7RUFIWixXQUFzQjtnQkFHM0IsaUJBQWlCLEdBcUI3QixpQkFBaUIsR0F2QkksS0FBMkI7Z0JBRXBDLGlCQUFpQixHQXVCN0IsT0FBTyxJQUFHLEdBQUs7Z0JBdkJILGlCQUFpQixHQXlCN0IsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxJQUFNOztrQkExQkEsaUJBQWlCIn0=