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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9waWVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcblxuaW1wb3J0IE1vdmUgZnJvbSBcIi4uLy4uL21vdmVcIjtcbmltcG9ydCBkcmFnTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvZHJhZ1wiO1xuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuLi8uLi9jb29yZGluYXRlc1wiO1xuaW1wb3J0IGNvb3JkaW5hdGVzTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29vcmRpbmF0ZXNcIjtcblxuaW1wb3J0IHsgY29vcmRpbmF0ZXNGcm9tVG9wQW5kTGVmdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7IHBpZWNlRGl2V2lkdGgsIHBpZWNlRGl2SGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBQaWVjZURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRDb2xsYXBzZWRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKSxcbiAgICAgICAgICBjb2xsYXBzZWRCb3VuZHMgPSBib3VuZHM7XG5cbiAgICByZXR1cm4gY29sbGFwc2VkQm91bmRzO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29vcmRpbmF0ZXM7XG4gIH1cblxuICBzZXRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIHN0b3BEcmFnSGFuZGxlcihyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzRnJvbVRvcEFuZExlZnQocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpLFxuICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBjb29yZGluYXRlc1ZhbGlkID0gY29vcmRpbmF0ZXMuYXJlVmFsaWQoKTtcblxuICAgIGNvb3JkaW5hdGVzVmFsaWQgP1xuICAgICAgdGhpcy5tb3ZlKGNvb3JkaW5hdGVzKSA6XG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmNvb3JkaW5hdGVzKTtcblxuICAgIGNvbnRyb2xsZXIudW5oaWdobGlnaHRNb3ZlcygpO1xuXG4gICAgY29udHJvbGxlci5lbmFibGVQaWVjZURpdnNQb2ludGVyRXZlbnRzKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29udHJvbGxlci5kaXNhYmxlUGllY2VEaXZzUG9pbnRlckV2ZW50cygpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29udHJvbGxlci51bmhpZ2hsaWdodE1vdmVzKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgbW92ZXMgPSB0aGlzLmdlbmVyYXRlTW92ZXMoKTtcblxuICAgIGNvbnRyb2xsZXIuaGlnaGxpZ2h0TW92ZXMobW92ZXMpO1xuICB9XG5cbiAgZW5hYmxlUG9pbnRlckV2ZW50cygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG4gIH1cblxuICBkaXNhYmxlUG9pbnRlckV2ZW50cygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG4gIH1cblxuICBnZW5lcmF0ZU1vdmVzKCkge1xuICAgIGNvbnN0IG1vdmVzID0gW10sXG4gICAgICAgICAgeyBkaXJlY3Rpb25zLCBtYXhpbXVtTWFnbml0dWRlIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgZm9yIChsZXQgbWFnbml0dWRlID0gMTsgbWFnbml0dWRlIDw9IG1heGltdW1NYWduaXR1ZGU7IG1hZ25pdHVkZSsrKSB7XG4gICAgICBkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGl2ZUNvb3JkaW5hdGVzID0gQ29vcmRpbmF0ZXMuZnJvbU1hZ25pdHVkZUFuZERpcmVjdGlvbihtYWduaXR1ZGUsIGRpcmVjdGlvbiksXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcy5hZGQocmVsYXRpdmVDb29yZGluYXRlcyksXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzVmFsaWQgPSBjb29yZGluYXRlcy5hcmVWYWxpZCgpO1xuXG4gICAgICAgIGlmIChjb29yZGluYXRlc1ZhbGlkKSB7XG4gICAgICAgICAgY29uc3QgcGllY2VEaXYgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgICAgbW92ZSA9IE1vdmUuZnJvbVBpZWNlRGl2QW5kQ29vcmRpbmF0ZXMocGllY2VEaXYsIGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgIG1vdmVzLnB1c2gobW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmFwcGx5Q29vcmRpbmF0ZXModGhpcy5jb29yZGluYXRlcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgIHRoaXMub25TdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5hcHBseUNvb3JkaW5hdGVzKHRoaXMuY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vZmZTdG9wRHJhZyh0aGlzLnN0b3BEcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBpZWNlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwaWVjZURpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gcGllY2VEaXY7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGRyYWdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQaWVjZURpdi5wcm90b3R5cGUsIGNvb3JkaW5hdGVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBpZWNlRGl2KWBcblxuICB3aWR0aDogJHtwaWVjZURpdldpZHRofTtcbiAgaGVpZ2h0OiAke3BpZWNlRGl2SGVpZ2h0fTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgLmRyYWcge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIFxuICAubm8tcG9pbnRlci1ldmVudHMge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmA7XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWYsS0FBTTtJQUNILFdBQVk7SUFFdEIsS0FBWTtJQUNOLEtBQW1CO0lBQ2xCLFlBQW1CO0lBQ2IsYUFBMEI7SUFFZCxhQUE2QjtJQUN6QixPQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTZJekIsYUFFMUI7U0FBZ0IsYUFDZjtTQUFpQixtSkFZM0I7Ozs7Ozs7SUExSk0sUUFBUTtjQUFSLFFBQVE7YUFBUixRQUFRLENBQ0EsUUFBUSxFQUFFLFdBQVc7OEJBRDdCLFFBQVE7O2lFQUFSLFFBQVEsYUFFSixRQUFRO2NBRVQsV0FBVyxHQUFHLFdBQVc7OztpQkFKNUIsUUFBUTs7WUFPWixHQUFrQixHQUFsQixrQkFBa0I7NEJBQWxCLGtCQUFrQjtvQkFDVixNQUFNLFFBQVEsU0FBUyxJQUN2QixlQUFlLEdBQUcsTUFBTTt1QkFFdkIsZUFBZTs7OztZQUd4QixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjOzRCQUNBLFdBQVc7Ozs7WUFHekIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFdBQVc7cUJBQ25CLFdBQVcsR0FBRyxXQUFXOzs7O1lBR2hDLEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUI7b0JBQzNDLHdCQUF3QixPQTFCUSxhQUE2Qiw0QkEwQlIsZ0JBQWdCLEVBQUUsaUJBQWlCLEdBQ3hGLFdBQVcsUUFBUSxXQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUMzRCxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsUUFBUTtnQkFFN0MsZ0JBQWdCLFFBQ1QsSUFBSSxDQUFDLFdBQVcsU0FDZCxJQUFJLE1BQU0sV0FBVztnQkF2Q1AsV0FBWSxZQXlDeEIsZ0JBQWdCO2dCQXpDSixXQUFZLFlBMkN4Qiw0QkFBNEI7Ozs7WUFHekMsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUI7Z0JBOUMzQixXQUFZLFlBK0N4Qiw2QkFBNkI7Ozs7WUFHMUMsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPO2dCQWxETCxXQUFZLFlBbUR4QixnQkFBZ0I7Ozs7WUFHN0IsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsS0FBSyxRQUFRLGFBQWE7Z0JBdkRULFdBQVksWUF5RHhCLGNBQWMsQ0FBQyxLQUFLOzs7O1lBR2pDLEdBQW1CLEdBQW5CLG1CQUFtQjs0QkFBbkIsbUJBQW1CO3FCQUNaLFdBQVcsRUFBQyxpQkFBbUI7Ozs7WUFHdEMsR0FBb0IsR0FBcEIsb0JBQW9COzRCQUFwQixvQkFBb0I7cUJBQ2IsUUFBUSxFQUFDLGlCQUFtQjs7OztZQUduQyxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhOztvQkFLVCxVQUFVLENBQUMsT0FBTyxXQUFFLFNBQVM7NEJBQ3JCLG1CQUFtQixHQXRFVCxZQUFtQixTQXNFSyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxHQUNoRixXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQ3RELGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxRQUFROzRCQUV6QyxnQkFBZ0I7Z0NBQ1osUUFBUSxHQUFHLEtBQUksRUFDZixJQUFJLEdBOUVILEtBQVksU0E4RUQsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFdBQVc7NEJBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztvQkFiZixLQUFLLE9BQzhCLFlBQWdCLFFBQVgsV0FBVyxFQUFqRCxVQUFVLEdBQXVCLFlBQWdCLENBQWpELFVBQVUsRUFBRSxnQkFBZ0IsR0FBSyxZQUFnQixDQUFyQyxnQkFBZ0I7d0JBRTNCLFNBQVMsR0FBRyxDQUFDLEVBQUUsU0FBUyxJQUFJLGdCQUFnQixFQUFFLFNBQVM7dUJBZXpELEtBQUs7Ozs7WUFHZCxHQUFJLEdBQUosSUFBSTs0QkFBSixJQUFJLENBQUMsV0FBVztxQkFDVCxXQUFXLEdBQUcsV0FBVztxQkFFekIsZ0JBQWdCLE1BQU0sV0FBVzs7OztZQUd4QyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO3FCQUNELFVBQVU7cUJBRVYsVUFBVSxNQUFNLGVBQWU7cUJBRS9CLFdBQVcsTUFBTSxnQkFBZ0I7cUJBRWpDLFVBQVUsTUFBTSxlQUFlO3FCQUUvQixXQUFXLE1BQU0sZ0JBQWdCO3FCQUVqQyxnQkFBZ0IsTUFBTSxXQUFXOzs7O1lBR3hDLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7cUJBQ0osV0FBVztxQkFFWCxXQUFXLE1BQU0sZUFBZTtxQkFFaEMsWUFBWSxNQUFNLGdCQUFnQjtxQkFFbEMsWUFBWSxNQUFNLGdCQUFnQjtxQkFFbEMsV0FBVyxNQUFNLGVBQWU7Ozs7WUFHdkMsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDSyxZQUFnQixRQUFYLFdBQVcsRUFBeEIsR0FBRyxHQUFLLFlBQWdCLENBQXhCLEdBQUc7eURBSVIsR0FBRzs7Ozs7WUFXRCxHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7b0JBQ3hCLFdBQVcsR0FBSyxVQUFVLENBQTFCLFdBQVcsRUFDYixRQUFRLEdBN0lNLEtBQU0sU0E2SUQsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVzt1QkFFMUQsUUFBUTs7OztXQXBJYixRQUFRO21CQVhVLEtBQU07Z0JBV3hCLFFBQVEsR0EwSEwsT0FBTyxJQUFHLEdBQUs7Z0JBMUhsQixRQUFRLEdBNEhMLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsS0FBTzs7QUFXdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQS9JVCxLQUFtQjtBQWdKMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQTlJRixhQUEwQjttQkFSbEMsY0FBaUIsVUF3SmQsUUFBUSxxQkE3SWEsT0FBYyxnQkFBZCxPQUFjIn0=