"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _move = _interopRequireDefault(require("../../move"));
var _drag = _interopRequireDefault(require("../../mixins/drag"));
var _coordinates = _interopRequireDefault(require("../../coordinates"));
var _coordinates1 = _interopRequireDefault(require("../../mixins/coordinates"));
var _coordinates2 = require("../../utilities/coordinates");
var _styles = require("../../styles");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  position: absolute;\n  \n  .drag {\n    z-index: 1;\n    position: fixed;\n  }\n  \n  .no-pointer-events {\n    pointer-events: none;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PieceDiv = /*#__PURE__*/ function(Element1) {
    _inherits(PieceDiv, Element1);
    function PieceDiv(selector, coordinates) {
        _classCallCheck(this, PieceDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(PieceDiv).call(this, selector));
        _this.coordinates = coordinates;
        return _this;
    }
    _createClass(PieceDiv, [
        {
            key: "getCollapsedBounds",
            value: function getCollapsedBounds() {
                var bounds = this.getBounds(), collapsedBounds = bounds;
                return collapsedBounds;
            }
        },
        {
            key: "getCoordinates",
            value: function getCoordinates() {
                return this.coordinates;
            }
        },
        {
            key: "setCoordinates",
            value: function setCoordinates(coordinates) {
                this.coordinates = coordinates;
            }
        },
        {
            key: "stopDragHandler",
            value: function stopDragHandler(relativeMouseTop, relativeMouseLeft) {
                var relativeMouseCoordinates = (0, _coordinates2).coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft), coordinates = this.coordinates.add(relativeMouseCoordinates), coordinatesValid = coordinates.areValid();
                coordinatesValid ? this.move(coordinates) : this.move(this.coordinates);
                _sufficient.controller.unhighlightMoves();
                _sufficient.controller.enablePieceDivsPointerEvents();
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(relativeMouseTop, relativeMouseLeft) {
                _sufficient.controller.disablePieceDivsPointerEvents();
            }
        },
        {
            key: "mouseOutHandler",
            value: function mouseOutHandler(event, element) {
                _sufficient.controller.unhighlightMoves();
            }
        },
        {
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                var moves = this.generateMoves();
                _sufficient.controller.highlightMoves(moves);
            }
        },
        {
            key: "enablePointerEvents",
            value: function enablePointerEvents() {
                this.removeClass("no-pointer-events");
            }
        },
        {
            key: "disablePointerEvents",
            value: function disablePointerEvents() {
                this.addClass("no-pointer-events");
            }
        },
        {
            key: "generateMoves",
            value: function generateMoves() {
                var _this = this, _loop = function(magnitude) {
                    directions.forEach((function(direction) {
                        var relativeCoordinates = _coordinates.default.fromMagnitudeAndDirection(magnitude, direction), coordinates = _this.coordinates.add(relativeCoordinates), coordinatesValid = coordinates.areValid();
                        if (coordinatesValid) {
                            var pieceDiv = _this, move = _move.default.fromPieceDivAndCoordinates(pieceDiv, coordinates);
                            moves.push(move);
                        }
                    }).bind(_this));
                };
                var moves = [], _constructor = this.constructor, directions = _constructor.directions, maximumMagnitude = _constructor.maximumMagnitude;
                for(var magnitude = 1; magnitude <= maximumMagnitude; magnitude++)_loop(magnitude);
                return moves;
            }
        },
        {
            key: "move",
            value: function move(coordinates) {
                this.coordinates = coordinates;
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableDrag();
                this.onStopDrag(this.stopDragHandler, this);
                this.onStartDrag(this.startDragHandler, this);
                this.onMouseOut(this.mouseOutHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.applyCoordinates(this.coordinates);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableDrag();
                this.offStopDrag(this.stopDragHandler, this);
                this.offStartDrag(this.startDragHandler, this);
                this.offMouseOver(this.mouseOverHandler, this);
                this.offMouseOut(this.mouseOutHandler, this);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _constructor = this.constructor, SVG = _constructor.SVG;
                return(/*#__PURE__*/ React.createElement(SVG, null));
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var coordinates = properties.coordinates, pieceDiv = _easy.Element.fromClass(Class, properties, coordinates);
                return pieceDiv;
            }
        }
    ]);
    return PieceDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PieceDiv, "tagName", "div");
_defineProperty(PieceDiv, "defaultProperties", {
    className: "piece"
});
Object.assign(PieceDiv.prototype, _drag.default);
Object.assign(PieceDiv.prototype, _coordinates1.default);
var _default = (0, _easyWithStyle).default(PieceDiv)(_templateObject(), _styles.pieceDivWidth, _styles.pieceDivHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3BpZWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwic3VmZmljaWVudFwiO1xuXG5pbXBvcnQgTW92ZSBmcm9tIFwiLi4vLi4vbW92ZVwiO1xuaW1wb3J0IGRyYWdNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9kcmFnXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uLy4uL2Nvb3JkaW5hdGVzXCI7XG5pbXBvcnQgY29vcmRpbmF0ZXNNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb29yZGluYXRlc1wiO1xuXG5pbXBvcnQgeyBjb29yZGluYXRlc0Zyb21Ub3BBbmRMZWZ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb29yZGluYXRlc1wiO1xuaW1wb3J0IHsgcGllY2VEaXZXaWR0aCwgcGllY2VEaXZIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIFBpZWNlRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjb29yZGluYXRlcykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGdldENvbGxhcHNlZEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpLFxuICAgICAgICAgIGNvbGxhcHNlZEJvdW5kcyA9IGJvdW5kcztcblxuICAgIHJldHVybiBjb2xsYXBzZWRCb3VuZHM7XG4gIH1cblxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb29yZGluYXRlcztcbiAgfVxuXG4gIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgc3RvcERyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCksXG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgY29vcmRpbmF0ZXNWYWxpZCA/XG4gICAgICB0aGlzLm1vdmUoY29vcmRpbmF0ZXMpIDpcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY29vcmRpbmF0ZXMpO1xuXG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodE1vdmVzKCk7XG5cbiAgICBjb250cm9sbGVyLmVuYWJsZVBpZWNlRGl2c1BvaW50ZXJFdmVudHMoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb250cm9sbGVyLmRpc2FibGVQaWVjZURpdnNQb2ludGVyRXZlbnRzKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb250cm9sbGVyLnVuaGlnaGxpZ2h0TW92ZXMoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBtb3ZlcyA9IHRoaXMuZ2VuZXJhdGVNb3ZlcygpO1xuXG4gICAgY29udHJvbGxlci5oaWdobGlnaHRNb3Zlcyhtb3Zlcyk7XG4gIH1cblxuICBlbmFibGVQb2ludGVyRXZlbnRzKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuby1wb2ludGVyLWV2ZW50c1wiKTtcbiAgfVxuXG4gIGRpc2FibGVQb2ludGVyRXZlbnRzKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJuby1wb2ludGVyLWV2ZW50c1wiKTtcbiAgfVxuXG4gIGdlbmVyYXRlTW92ZXMoKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXSxcbiAgICAgICAgICB7IGRpcmVjdGlvbnMsIG1heGltdW1NYWduaXR1ZGUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBmb3IgKGxldCBtYWduaXR1ZGUgPSAxOyBtYWduaXR1ZGUgPD0gbWF4aW11bU1hZ25pdHVkZTsgbWFnbml0dWRlKyspIHtcbiAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlQ29vcmRpbmF0ZXMgPSBDb29yZGluYXRlcy5mcm9tTWFnbml0dWRlQW5kRGlyZWN0aW9uKG1hZ25pdHVkZSwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzLmFkZChyZWxhdGl2ZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZXNWYWxpZCA9IGNvb3JkaW5hdGVzLmFyZVZhbGlkKCk7XG5cbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzVmFsaWQpIHtcbiAgICAgICAgICBjb25zdCBwaWVjZURpdiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgICBtb3ZlID0gTW92ZS5mcm9tUGllY2VEaXZBbmRDb29yZGluYXRlcyhwaWVjZURpdiwgY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgbW92ZShjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuYXBwbHlDb29yZGluYXRlcyh0aGlzLmNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vblN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25TdGFydERyYWcodGhpcy5zdGFydERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXModGhpcy5jb29yZGluYXRlcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVEcmFnKCk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGllY2VcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBpZWNlRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBwaWVjZURpdjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFBpZWNlRGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5PYmplY3QuYXNzaWduKFBpZWNlRGl2LnByb3RvdHlwZSwgY29vcmRpbmF0ZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGllY2VEaXYpYFxuXG4gIHdpZHRoOiAke3BpZWNlRGl2V2lkdGh9O1xuICBoZWlnaHQ6ICR7cGllY2VEaXZIZWlnaHR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICAuZHJhZyB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbiAgXG4gIC5uby1wb2ludGVyLWV2ZW50cyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuYDtcblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFZixLQUFNO0lBQ0gsV0FBWTtJQUV0QixLQUFZO0lBQ04sS0FBbUI7SUFDbEIsWUFBbUI7SUFDYixhQUEwQjtJQUVkLGFBQTZCO0lBQ3pCLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkl6QixhQUUxQjtTQUFnQixhQUNmO1NBQWlCLG1KQVkzQjs7Ozs7OztJQTFKTSxRQUFRO2NBQVIsUUFBUTthQUFSLFFBQVEsQ0FDQSxRQUFRLEVBQUUsV0FBVzs4QkFEN0IsUUFBUTs7aUVBQVIsUUFBUSxhQUVKLFFBQVE7Y0FFVCxXQUFXLEdBQUcsV0FBVzs7O2lCQUo1QixRQUFROztZQU9aLEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCO29CQUNWLE1BQU0sUUFBUSxTQUFTLElBQ3ZCLGVBQWUsR0FBRyxNQUFNO3VCQUV2QixlQUFlOzs7O1lBR3hCLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWM7NEJBQ0EsV0FBVzs7OztZQUd6QixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLENBQUMsV0FBVztxQkFDbkIsV0FBVyxHQUFHLFdBQVc7Ozs7WUFHaEMsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtvQkFDM0Msd0JBQXdCLE9BMUJRLGFBQTZCLDRCQTBCUixnQkFBZ0IsRUFBRSxpQkFBaUIsR0FDeEYsV0FBVyxRQUFRLFdBQVcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQzNELGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxRQUFRO2dCQUU3QyxnQkFBZ0IsUUFDVCxJQUFJLENBQUMsV0FBVyxTQUNkLElBQUksTUFBTSxXQUFXO2dCQXZDUCxXQUFZLFlBeUN4QixnQkFBZ0I7Z0JBekNKLFdBQVksWUEyQ3hCLDRCQUE0Qjs7OztZQUd6QyxHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtnQkE5QzNCLFdBQVksWUErQ3hCLDZCQUE2Qjs7OztZQUcxQyxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU87Z0JBbERMLFdBQVksWUFtRHhCLGdCQUFnQjs7OztZQUc3QixHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPO29CQUN2QixLQUFLLFFBQVEsYUFBYTtnQkF2RFQsV0FBWSxZQXlEeEIsY0FBYyxDQUFDLEtBQUs7Ozs7WUFHakMsR0FBbUIsR0FBbkIsbUJBQW1COzRCQUFuQixtQkFBbUI7cUJBQ1osV0FBVyxFQUFDLGlCQUFtQjs7OztZQUd0QyxHQUFvQixHQUFwQixvQkFBb0I7NEJBQXBCLG9CQUFvQjtxQkFDYixRQUFRLEVBQUMsaUJBQW1COzs7O1lBR25DLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7O29CQUtULFVBQVUsQ0FBQyxPQUFPLFdBQUUsU0FBUzs0QkFDckIsbUJBQW1CLEdBdEVULFlBQW1CLFNBc0VLLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxTQUFTLEdBQ2hGLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FDdEQsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFFBQVE7NEJBRXpDLGdCQUFnQjtnQ0FDWixRQUFRLEdBQUcsS0FBSSxFQUNmLElBQUksR0E5RUgsS0FBWSxTQThFRCwwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsV0FBVzs0QkFFbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O29CQWJmLEtBQUssT0FDOEIsWUFBZ0IsUUFBWCxXQUFXLEVBQWpELFVBQVUsR0FBdUIsWUFBZ0IsQ0FBakQsVUFBVSxFQUFFLGdCQUFnQixHQUFLLFlBQWdCLENBQXJDLGdCQUFnQjt3QkFFM0IsU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLElBQUksZ0JBQWdCLEVBQUUsU0FBUzt1QkFlekQsS0FBSzs7OztZQUdkLEdBQUksR0FBSixJQUFJOzRCQUFKLElBQUksQ0FBQyxXQUFXO3FCQUNULFdBQVcsR0FBRyxXQUFXO3FCQUV6QixnQkFBZ0IsTUFBTSxXQUFXOzs7O1lBR3hDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0QsVUFBVTtxQkFFVixVQUFVLE1BQU0sZUFBZTtxQkFFL0IsV0FBVyxNQUFNLGdCQUFnQjtxQkFFakMsVUFBVSxNQUFNLGVBQWU7cUJBRS9CLFdBQVcsTUFBTSxnQkFBZ0I7cUJBRWpDLGdCQUFnQixNQUFNLFdBQVc7Ozs7WUFHeEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztxQkFDSixXQUFXO3FCQUVYLFdBQVcsTUFBTSxlQUFlO3FCQUVoQyxZQUFZLE1BQU0sZ0JBQWdCO3FCQUVsQyxZQUFZLE1BQU0sZ0JBQWdCO3FCQUVsQyxXQUFXLE1BQU0sZUFBZTs7OztZQUd2QyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNLLFlBQWdCLFFBQVgsV0FBVyxFQUF4QixHQUFHLEdBQUssWUFBZ0IsQ0FBeEIsR0FBRzt5REFJUixHQUFHOzs7OztZQVdELEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVTtvQkFDeEIsV0FBVyxHQUFLLFVBQVUsQ0FBMUIsV0FBVyxFQUNiLFFBQVEsR0E3SU0sS0FBTSxTQTZJRCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXO3VCQUUxRCxRQUFROzs7O1dBcEliLFFBQVE7bUJBWFUsS0FBTTtnQkFXeEIsUUFBUSxHQTBITCxPQUFPLElBQUcsR0FBSztnQkExSGxCLFFBQVEsR0E0SEwsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxLQUFPOztBQVd0QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBL0lULEtBQW1CO0FBZ0oxQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBOUlGLGFBQTBCO21CQVJsQyxjQUFpQixVQXdKZCxRQUFRLHFCQTdJYSxPQUFjLGdCQUFkLE9BQWMifQ==