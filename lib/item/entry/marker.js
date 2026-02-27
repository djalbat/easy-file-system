"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkerEntryItem;
    }
});
const _entry = /*#__PURE__*/ _interop_require_default(require("../../item/entry"));
const _marker = /*#__PURE__*/ _interop_require_default(require("../../svg/marker"));
const _marker1 = /*#__PURE__*/ _interop_require_default(require("../../div/item/entry/marker"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkerEntryItem extends _entry.default {
    childElements() {
        const { MarkerSVG } = this.constructor;
        return /*#__PURE__*/ React.createElement(_marker1.default, {
            MarkerSVG: MarkerSVG
        });
    }
    static MarkerSVG = _marker.default;
    static defaultProperties = {
        className: "marker"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2VudHJ5L21hcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVudHJ5SXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9lbnRyeVwiO1xuaW1wb3J0IE1hcmtlclNWRyBmcm9tIFwiLi4vLi4vc3ZnL21hcmtlclwiO1xuaW1wb3J0IE1hcmtlckVudHJ5SXRlbURpdiBmcm9tIFwiLi4vLi4vZGl2L2l0ZW0vZW50cnkvbWFya2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlckVudHJ5SXRlbSBleHRlbmRzIEVudHJ5SXRlbSB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBNYXJrZXJTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TWFya2VyRW50cnlJdGVtRGl2IE1hcmtlclNWRz17TWFya2VyU1ZHfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBNYXJrZXJTVkcgPSBNYXJrZXJTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYXJrZXJcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk1hcmtlckVudHJ5SXRlbSIsIkVudHJ5SXRlbSIsImNoaWxkRWxlbWVudHMiLCJNYXJrZXJTVkciLCJNYXJrZXJFbnRyeUl0ZW1EaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs4REFKQzsrREFDQTtnRUFDUzs7Ozs7O0FBRWhCLE1BQU1BLHdCQUF3QkMsY0FBUztJQUNwREMsZ0JBQWdCO1FBQ2QsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztRQUV0QyxxQkFFRSxvQkFBQ0MsZ0JBQWtCO1lBQUNELFdBQVdBOztJQUduQztJQUVBLE9BQU9BLFlBQVlBLGVBQVMsQ0FBQztJQUU3QixPQUFPRSxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==