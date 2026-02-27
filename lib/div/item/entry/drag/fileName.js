"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileNameDragEntryItemDiv;
    }
});
const _drag = /*#__PURE__*/ _interop_require_default(require("../../../../div/item/entry/drag"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FileNameDragEntryItemDiv extends _drag.default {
    childElements() {
        const { name, NameSpan, FileNameSVG } = this.properties;
        return [
            /*#__PURE__*/ React.createElement(FileNameSVG, null),
            /*#__PURE__*/ React.createElement(NameSpan, null, name)
        ];
    }
    static ignoredProperties = [
        "FileNameSVG"
    ];
    static defaultProperties = {
        className: "file-name"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnL2ZpbGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRHJhZ0VudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vLi4vLi4vZGl2L2l0ZW0vZW50cnkvZHJhZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTmFtZURyYWdFbnRyeUl0ZW1EaXYgZXh0ZW5kcyBEcmFnRW50cnlJdGVtRGl2IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG5hbWUsIE5hbWVTcGFuLCBGaWxlTmFtZVNWRyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxGaWxlTmFtZVNWRy8+LFxuICAgICAgPE5hbWVTcGFuPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvTmFtZVNwYW4+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIkZpbGVOYW1lU1ZHXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpbGUtbmFtZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRmlsZU5hbWVEcmFnRW50cnlJdGVtRGl2IiwiRHJhZ0VudHJ5SXRlbURpdiIsImNoaWxkRWxlbWVudHMiLCJuYW1lIiwiTmFtZVNwYW4iLCJGaWxlTmFtZVNWRyIsInByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzZEQUZROzs7Ozs7QUFFZCxNQUFNQSxpQ0FBaUNDLGFBQWdCO0lBQ3BFQyxnQkFBZ0I7UUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVU7UUFFdkQsT0FBUTswQkFFTixvQkFBQ0Q7MEJBQ0Qsb0JBQUNELGdCQUNFRDtTQUdKO0lBQ0g7SUFFQSxPQUFPSSxvQkFBb0I7UUFDekI7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=