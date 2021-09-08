"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rubbishBin = _interopRequireDefault(require("../../div/rubbishBin"));
var _closed = _interopRequireDefault(require("../../svg/rubbishBin/closed"));
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
var ClosedRubbishBinDiv = /*#__PURE__*/ function(RubbishBinDiv) {
    _inherits(ClosedRubbishBinDiv, RubbishBinDiv);
    function ClosedRubbishBinDiv() {
        _classCallCheck(this, ClosedRubbishBinDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(ClosedRubbishBinDiv).apply(this, arguments));
    }
    _createClass(ClosedRubbishBinDiv, [
        {
            key: "getClosedRubbishBinSVG",
            value: function getClosedRubbishBinSVG() {
                var _constructor = this.constructor, ClosedRubbishBinSVG = _constructor.ClosedRubbishBinSVG;
                return ClosedRubbishBinSVG;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var ClosedRubbishBinSVG = this.getClosedRubbishBinSVG();
                return(/*#__PURE__*/ React.createElement(ClosedRubbishBinSVG, null));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showClosedRubbishBinDiv = this.show.bind(this), hideClosedRubbishBinDiv = this.hide.bind(this);
                return {
                    showClosedRubbishBinDiv: showClosedRubbishBinDiv,
                    hideClosedRubbishBinDiv: hideClosedRubbishBinDiv
                };
            }
        }
    ]);
    return ClosedRubbishBinDiv;
}(_rubbishBin.default);
_defineProperty(ClosedRubbishBinDiv, "ClosedRubbishBinSVG", _closed.default);
_defineProperty(ClosedRubbishBinDiv, "tagName", "div");
_defineProperty(ClosedRubbishBinDiv, "defaultProperties", {
    className: "closed"
});
exports.default = ClosedRubbishBinDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWJiaXNoQmluRGl2IGZyb20gXCIuLi8uLi9kaXYvcnViYmlzaEJpblwiXG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi4vLi4vc3ZnL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlZFJ1YmJpc2hCaW5EaXYgZXh0ZW5kcyBSdWJiaXNoQmluRGl2IHtcbiAgZ2V0Q2xvc2VkUnViYmlzaEJpblNWRygpIHtcbiAgICBjb25zdCB7IENsb3NlZFJ1YmJpc2hCaW5TVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gQ2xvc2VkUnViYmlzaEJpblNWRztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgQ2xvc2VkUnViYmlzaEJpblNWRyA9IHRoaXMuZ2V0Q2xvc2VkUnViYmlzaEJpblNWRygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENsb3NlZFJ1YmJpc2hCaW5TVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Nsb3NlZFJ1YmJpc2hCaW5EaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSxcbiAgICAgICAgICBoaWRlQ2xvc2VkUnViYmlzaEJpbkRpdiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93Q2xvc2VkUnViYmlzaEJpbkRpdixcbiAgICAgIGhpZGVDbG9zZWRSdWJiaXNoQmluRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgQ2xvc2VkUnViYmlzaEJpblNWRyA9IENsb3NlZFJ1YmJpc2hCaW5TVkc7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2xvc2VkXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVjLFdBQXNCO0lBQ2hCLE9BQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhDLG1CQUFtQjtjQUFuQixtQkFBbUI7YUFBbkIsbUJBQW1COzhCQUFuQixtQkFBbUI7Z0VBQW5CLG1CQUFtQjs7aUJBQW5CLG1CQUFtQjs7WUFDdEMsR0FBc0IsR0FBdEIsc0JBQXNCOzRCQUF0QixzQkFBc0I7b0JBQ1ksWUFBZ0IsUUFBWCxXQUFXLEVBQXhDLG1CQUFtQixHQUFLLFlBQWdCLENBQXhDLG1CQUFtQjt1QkFFcEIsbUJBQW1COzs7O1lBRzVCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsbUJBQW1CLFFBQVEsc0JBQXNCO3lEQUlwRCxtQkFBbUI7Ozs7WUFLeEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCx1QkFBdUIsUUFBUSxJQUFJLENBQUMsSUFBSSxRQUN4Qyx1QkFBdUIsUUFBUSxJQUFJLENBQUMsSUFBSTs7b0JBRzVDLHVCQUF1QixFQUF2Qix1QkFBdUI7b0JBQ3ZCLHVCQUF1QixFQUF2Qix1QkFBdUI7Ozs7O1dBdkJSLG1CQUFtQjtFQUhkLFdBQXNCO2dCQUczQixtQkFBbUIsR0EyQi9CLG1CQUFtQixHQTdCSSxPQUE2QjtnQkFFeEMsbUJBQW1CLEdBNkIvQixPQUFPLElBQUcsR0FBSztnQkE3QkgsbUJBQW1CLEdBK0IvQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O2tCQWhDRixtQkFBbUIifQ==