"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _drop = _interopRequireDefault(require("../mixins/drop"));
var _entries = _interopRequireDefault(require("../div/entries"));
var _fileName = _interopRequireDefault(require("../div/entry/drag/fileName"));
var _directoryName = _interopRequireDefault(require("../div/entry/drag/directoryName"));
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
        "\n\n  grid-area: explorer-div;\n  background-color: red;\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ExplorerDiv = /*#__PURE__*/ function(Element1) {
    _inherits(ExplorerDiv, Element1);
    function ExplorerDiv() {
        _classCallCheck(this, ExplorerDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(ExplorerDiv).apply(this, arguments));
    }
    _createClass(ExplorerDiv, [
        {
            key: "dropHandler",
            value: function dropHandler(dragElement) {
                console.log("drop!");
            }
        },
        {
            key: "dragOutHandler",
            value: function dragOutHandler(dragElement) {
                console.log("drag out");
            }
        },
        {
            key: "dragOverHandler",
            value: function dragOverHandler(dragElement) {
                console.log("drag over");
            }
        },
        {
            key: "getEntriesDiv",
            value: function getEntriesDiv() {
                var _constructor = this.constructor, EntriesDiv = _constructor.EntriesDiv;
                return EntriesDiv;
            }
        },
        {
            key: "getFileNameDragEntryDiv",
            value: function getFileNameDragEntryDiv() {
                var _constructor = this.constructor, FileNameDragEntryDiv = _constructor.FileNameDragEntryDiv;
                return FileNameDragEntryDiv;
            }
        },
        {
            key: "getDirectoryNameDragEntryDiv",
            value: function getDirectoryNameDragEntryDiv() {
                var _constructor = this.constructor, DirectoryNameDragEntryDiv = _constructor.DirectoryNameDragEntryDiv;
                return DirectoryNameDragEntryDiv;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onDrop(this.dropHandler, this);
                this.onDragOut(this.dragOutHandler, this);
                this.onDragOver(this.dragOverHandler, this);
                this.enableDrop();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offDrop(this.dropHandler, this);
                this.offDragOut(this.dragOutHandler, this);
                this.offDragOver(this.dragOverHandler, this);
                this.disableDrop();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var explorerDiv = this; ///
                return(/*#__PURE__*/ React.createElement(_entries.default, {
                    explorerDiv: explorerDiv
                }));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return ExplorerDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ExplorerDiv, "EntriesDiv", _entries.default);
_defineProperty(ExplorerDiv, "FileNameDragEntryDiv", _fileName.default);
_defineProperty(ExplorerDiv, "DirectoryNameDragEntryDiv", _directoryName.default);
_defineProperty(ExplorerDiv, "tagName", "div");
_defineProperty(ExplorerDiv, "defaultProperties", {
    className: "explorer"
});
Object.assign(ExplorerDiv.prototype, _drop.default);
var _default = (0, _easyWithStyle).default(ExplorerDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZXhwbG9yZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgZHJvcE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2Ryb3BcIjtcbmltcG9ydCBFbnRyaWVzRGl2IGZyb20gXCIuLi9kaXYvZW50cmllc1wiO1xuaW1wb3J0IEZpbGVOYW1lRHJhZ0VudHJ5RGl2IGZyb20gXCIuLi9kaXYvZW50cnkvZHJhZy9maWxlTmFtZVwiO1xuaW1wb3J0IERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgZnJvbSBcIi4uL2Rpdi9lbnRyeS9kcmFnL2RpcmVjdG9yeU5hbWVcIjtcblxuY2xhc3MgRXhwbG9yZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZHJvcEhhbmRsZXIoZHJhZ0VsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImRyb3AhXCIpXG4gIH1cblxuICBkcmFnT3V0SGFuZGxlcihkcmFnRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBvdXRcIilcbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihkcmFnRWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBvdmVyXCIpXG4gIH1cblxuICBnZXRFbnRyaWVzRGl2KCkge1xuICBcdGNvbnN0IHsgRW50cmllc0RpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICBcdHJldHVybiBFbnRyaWVzRGl2O1xuXHR9XG5cblx0Z2V0RmlsZU5hbWVEcmFnRW50cnlEaXYoKSB7XG5cdFx0Y29uc3QgeyBGaWxlTmFtZURyYWdFbnRyeURpdiB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuXHRcdHJldHVybiBGaWxlTmFtZURyYWdFbnRyeURpdjtcblx0fVxuXG5cdGdldERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYoKSB7XG5cdFx0Y29uc3QgeyBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG5cdFx0cmV0dXJuIERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXY7XG5cdH1cblxuXHRkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uRHJvcCh0aGlzLmRyb3BIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25EcmFnT3V0KHRoaXMuZHJhZ091dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkRyYWdPdmVyKHRoaXMuZHJhZ092ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZW5hYmxlRHJvcCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZEcm9wKHRoaXMuZHJvcEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3V0KHRoaXMuZHJhZ091dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZEcmFnT3Zlcih0aGlzLmRyYWdPdmVySGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLmRpc2FibGVEcm9wKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICBcdGNvbnN0IGV4cGxvcmVyRGl2ID0gdGhpcztcdC8vL1xuXG4gIFx0cmV0dXJuIChcblxuICBcdFx0PEVudHJpZXNEaXYgZXhwbG9yZXJEaXY9e2V4cGxvcmVyRGl2fSAvPlxuXG5cdFx0KTtcblx0fVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gIFx0dGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cdH1cblxuXHRzdGF0aWMgRW50cmllc0RpdiA9IEVudHJpZXNEaXY7XG5cblx0c3RhdGljIEZpbGVOYW1lRHJhZ0VudHJ5RGl2ID0gRmlsZU5hbWVEcmFnRW50cnlEaXY7XG5cblx0c3RhdGljIERpcmVjdG9yeU5hbWVEcmFnRW50cnlEaXYgPSBEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5RGl2O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImV4cGxvcmVyXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihFeHBsb3JlckRpdi5wcm90b3R5cGUsIGRyb3BNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRXhwbG9yZXJEaXYpYFxuXG4gIGdyaWQtYXJlYTogZXhwbG9yZXItZGl2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxjQUFpQjtJQUVmLEtBQU07SUFFUCxLQUFnQjtJQUNoQixRQUFnQjtJQUNOLFNBQTRCO0lBQ3ZCLGNBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWtGakMsa0VBS3RDOzs7Ozs7O0lBckZNLFdBQVc7Y0FBWCxXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBQ2YsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLFdBQVc7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLEVBQUMsS0FBTzs7OztZQUdyQixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLENBQUMsV0FBVztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsRUFBQyxRQUFVOzs7O1lBR3hCLEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxXQUFXO2dCQUN6QixPQUFPLENBQUMsR0FBRyxFQUFDLFNBQVc7Ozs7WUFHekIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDVyxZQUFnQixRQUFYLFdBQVcsRUFBL0IsVUFBVSxHQUFLLFlBQWdCLENBQS9CLFVBQVU7dUJBRVgsVUFBVTs7OztZQUduQixHQUF1QixHQUF2Qix1QkFBdUI7NEJBQXZCLHVCQUF1QjtvQkFDVyxZQUFnQixRQUFYLFdBQVcsRUFBekMsb0JBQW9CLEdBQUssWUFBZ0IsQ0FBekMsb0JBQW9CO3VCQUVyQixvQkFBb0I7Ozs7WUFHNUIsR0FBNEIsR0FBNUIsNEJBQTRCOzRCQUE1Qiw0QkFBNEI7b0JBQ1csWUFBZ0IsUUFBWCxXQUFXLEVBQTlDLHlCQUF5QixHQUFLLFlBQWdCLENBQTlDLHlCQUF5Qjt1QkFFMUIseUJBQXlCOzs7O1lBR2pDLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7cUJBQ0EsTUFBTSxNQUFNLFdBQVc7cUJBRXZCLFNBQVMsTUFBTSxjQUFjO3FCQUU3QixVQUFVLE1BQU0sZUFBZTtxQkFFL0IsVUFBVTs7OztZQUdqQixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3FCQUNKLE9BQU8sTUFBTSxXQUFXO3FCQUV4QixVQUFVLE1BQU0sY0FBYztxQkFFOUIsV0FBVyxNQUFNLGVBQWU7cUJBRWhDLFdBQVc7Ozs7WUFHbEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTixXQUFXLFFBQVMsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3lEQXhEVCxRQUFnQjtvQkE0RHZCLFdBQVcsRUFBRSxXQUFXOzs7OztZQUt0QyxHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVO3FCQUNKLGFBQWE7Ozs7V0E5RGYsV0FBVzttQkFQTyxLQUFNO2dCQU94QixXQUFXLEdBaUVULFVBQVUsR0FyRUssUUFBZ0I7Z0JBSWpDLFdBQVcsR0FtRVQsb0JBQW9CLEdBdEVLLFNBQTRCO2dCQUd2RCxXQUFXLEdBcUVULHlCQUF5QixHQXZFSyxjQUFpQztnQkFFakUsV0FBVyxHQXVFUixPQUFPLElBQUcsR0FBSztnQkF2RWxCLFdBQVcsR0F5RVIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxRQUFVOztBQUl6QixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBbkZaLEtBQWdCO21CQUpqQixjQUFpQixVQXlGZCxXQUFXIn0=