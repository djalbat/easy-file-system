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
            key: "getOpenRubbishBinSVG",
            value: function getOpenRubbishBinSVG() {
                var _constructor = this.constructor, OpenRubbishBinSVG = _constructor.OpenRubbishBinSVG;
                return OpenRubbishBinSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var OpenRubbishBinSVG = this.getOpenRubbishBinSVG();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9vcGVuLmpzIl0sIm5hbWVzIjpbIlJ1YmJpc2hCaW5EaXYiLCJPcGVuUnViYmlzaEJpblNWRyIsIk9wZW5SdWJiaXNoQmluRGl2IiwiZ2V0T3BlblJ1YmJpc2hCaW5TVkciLCJjb25zdHJ1Y3RvciIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0Iiwic2hvd09wZW5SdWJiaXNoQmluRGl2Iiwic2hvdyIsImJpbmQiLCJoaWRlT3BlblJ1YmJpc2hCaW5EaXYiLCJoaWRlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVjLEdBQXNCLENBQXRCLFdBQXNCO0FBQ2xCLEdBQTJCLENBQTNCLEtBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLGlCQUFpQixpQkFBdkIsUUFBUTtjQUFGLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztpQkFBakIsaUJBQWlCOztZQUNwQyxHQUFvQixHQUFwQixvQkFBb0I7bUJBQXBCLFFBQVEsQ0FBUixvQkFBb0IsR0FBRyxDQUFDO2dCQUN0QixHQUFLLENBQXlCLFlBQWdCLEdBQWhCLElBQUksQ0FBQyxXQUFXLEVBQXRDLGlCQUFpQixHQUFLLFlBQWdCLENBQXRDLGlCQUFpQjtnQkFFekIsTUFBTSxDQUFDLGlCQUFpQjtZQUMxQixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0I7Z0JBRW5ELE1BQU0sbUNBRUgsaUJBQWlCO1lBR3RCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUMzQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUVqRCxNQUFNLENBQUUsQ0FBQztvQkFDUCxxQkFBcUIsRUFBckIscUJBQXFCO29CQUNyQixxQkFBcUIsRUFBckIscUJBQXFCO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQzs7O1dBekJrQixpQkFBaUI7RUFIWixXQUFzQjtnQkFHM0IsaUJBQWlCLEdBMkI3QixpQkFBaUIsR0E3QkksS0FBMkI7Z0JBRXBDLGlCQUFpQixHQTZCN0IsT0FBTyxJQUFHLEdBQUs7Z0JBN0JILGlCQUFpQixHQStCN0IsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixTQUFTLEdBQUUsSUFBTTtBQUNuQixDQUFDO2tCQWpDa0IsaUJBQWlCIn0=