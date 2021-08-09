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
            key: "childElements",
            value: function childElements() {
                return(/*#__PURE__*/ React.createElement(_closed.default, null));
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
_defineProperty(ClosedRubbishBinDiv, "tagName", "div");
_defineProperty(ClosedRubbishBinDiv, "defaultProperties", {
    className: "closed"
});
exports.default = ClosedRubbishBinDiv;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWJiaXNoQmluRGl2IGZyb20gXCIuLi8uLi9kaXYvcnViYmlzaEJpblwiXG5pbXBvcnQgQ2xvc2VkUnViYmlzaEJpblNWRyBmcm9tIFwiLi4vLi4vc3ZnL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlZFJ1YmJpc2hCaW5EaXYgZXh0ZW5kcyBSdWJiaXNoQmluRGl2IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q2xvc2VkUnViYmlzaEJpblNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93Q2xvc2VkUnViYmlzaEJpbkRpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhpZGVDbG9zZWRSdWJiaXNoQmluRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dDbG9zZWRSdWJiaXNoQmluRGl2LFxuICAgICAgaGlkZUNsb3NlZFJ1YmJpc2hCaW5EaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNsb3NlZFwiXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFYyxXQUFzQjtJQUNoQixPQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4QyxtQkFBbUI7Y0FBbkIsbUJBQW1CO2FBQW5CLG1CQUFtQjs4QkFBbkIsbUJBQW1CO2dFQUFuQixtQkFBbUI7O2lCQUFuQixtQkFBbUI7O1lBQ3RDLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7eURBSGlCLE9BQTZCOzs7O1lBVzNELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsdUJBQXVCLFFBQVEsSUFBSSxDQUFDLElBQUksUUFDeEMsdUJBQXVCLFFBQVEsSUFBSSxDQUFDLElBQUk7O29CQUc1Qyx1QkFBdUIsRUFBdkIsdUJBQXVCO29CQUN2Qix1QkFBdUIsRUFBdkIsdUJBQXVCOzs7OztXQWZSLG1CQUFtQjtFQUhkLFdBQXNCO2dCQUczQixtQkFBbUIsR0FtQi9CLE9BQU8sSUFBRyxHQUFLO2dCQW5CSCxtQkFBbUIsR0FxQi9CLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsTUFBUTs7a0JBdEJGLG1CQUFtQiJ9