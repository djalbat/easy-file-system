"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DragEntryItemDiv;
    }
});
const _entry = /*#__PURE__*/ _interop_require_default(require("../../../div/item/entry"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DragEntryItemDiv extends _entry.default {
    clickHandler = (event, element)=>{
        const explorer = this.getExplorer(), dragEntryItem = this.getDragEntryItem();
        explorer.clickDragEntryItem(event, element, dragEntryItem);
    };
    didMount() {
        this.onClick(this.clickHandler);
    }
    willUnmount() {
        this.offClick(this.clickHandler);
    }
    static ignoredProperties = [
        "name",
        "NameSpan"
    ];
    static defaultProperties = {
        className: "drag"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXYvaXRlbS9lbnRyeS9kcmFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cnlJdGVtRGl2IGZyb20gXCIuLi8uLi8uLi9kaXYvaXRlbS9lbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnRW50cnlJdGVtRGl2IGV4dGVuZHMgRW50cnlJdGVtRGl2IHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZXhwbG9yZXIgPSB0aGlzLmdldEV4cGxvcmVyKCksXG4gICAgICAgICAgZHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0RHJhZ0VudHJ5SXRlbSgpO1xuXG4gICAgZXhwbG9yZXIuY2xpY2tEcmFnRW50cnlJdGVtKGV2ZW50LCBlbGVtZW50LCBkcmFnRW50cnlJdGVtKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlcilcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibmFtZVwiLFxuICAgIFwiTmFtZVNwYW5cIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJhZ1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRHJhZ0VudHJ5SXRlbURpdiIsIkVudHJ5SXRlbURpdiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwiZ2V0RHJhZ0VudHJ5SXRlbSIsImNsaWNrRHJhZ0VudHJ5SXRlbSIsImRpZE1vdW50Iiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZJOzs7Ozs7QUFFVixNQUFNQSx5QkFBeUJDLGNBQVk7SUFDeERDLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDckIsTUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQjtRQUUzQ0gsU0FBU0ksa0JBQWtCLENBQUNOLE9BQU9DLFNBQVNHO0lBQzlDLEVBQUM7SUFFREcsV0FBVztRQUNULElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1QsWUFBWTtJQUNoQztJQUVBVSxjQUFjO1FBQ1osSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDWCxZQUFZO0lBQ2pDO0lBRUEsT0FBT1ksb0JBQW9CO1FBQ3pCO1FBQ0E7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=