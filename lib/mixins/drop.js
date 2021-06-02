"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var dropElement = null;
Object.assign(globalThis, {
    dropElement: dropElement
});
function drop(dragElement) {
    var eventType = _constants.DROP;
    this.callHandlers(eventType, dragElement);
}
function onDrop(dropHandler, element) {
    var eventType = _constants.DROP, handler = dropHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDrop(dropHandler, element) {
    var eventType = _constants.DROP, handler = dropHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOut(dragOutHandler, element) {
    var eventType = _constants.DRAG_OUT, handler = dragOutHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOut(dragOutHandler, element) {
    var eventType = _constants.DRAG_OUT, handler = dragOutHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function onDragOver(dragOverHandler, element) {
    var eventType = _constants.DRAG_OVER, handler = dragOverHandler; ///
    this.addEventListener(eventType, handler, element);
}
function offDragOver(dragOverHandler, element) {
    var eventType = _constants.DRAG_OVER, handler = dragOverHandler; ///
    this.removeEventListener(eventType, handler, element);
}
function enableDrop() {
    this.onMouseOut(mouseOutHandler, this);
    this.onMouseOver(mouseOverHandler, this);
}
function disableDrop() {
    this.offMouseOut(mouseOutHandler, this);
    this.offMouseOver(mouseOverHandler, this);
}
function callHandlers(eventType, dragElement) {
    var eventListeners = this.findEventListeners(eventType);
    eventListeners.forEach(function(eventListener) {
        var handler = eventListener.handler, element = eventListener.element;
        handler.call(element, dragElement);
    });
}
var _default = {
    drop: drop,
    onDrop: onDrop,
    offDrop: offDrop,
    onDragOut: onDragOut,
    offDragOut: offDragOut,
    onDragOver: onDragOver,
    offDragOver: offDragOver,
    enableDrop: enableDrop,
    disableDrop: disableDrop,
    callHandlers: callHandlers
};
exports.default = _default;
function mouseOutHandler(event, element) {
    var dragElement = globalThis.dragElement;
    if (dragElement !== null) {
        var dropElement1 = globalThis.dropElement;
        if (dropElement1 !== null) {
            if (dropElement1 === this) {
                var eventType = _constants.DRAG_OUT;
                this.callHandlers(eventType, dragElement);
                dropElement1 = null;
                Object.assign(globalThis, {
                    dropElement: dropElement1
                });
            }
        }
    }
}
function mouseOverHandler(event, element) {
    var dragElement = globalThis.dragElement;
    if (dragElement !== null) {
        var eventType = _constants.DRAG_OVER, dropElement2 = this; ///
        Object.assign(globalThis, {
            dropElement: dropElement2
        });
        this.callHandlers(eventType, dragElement);
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZHJvcEVsZW1lbnQgPSBudWxsO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgZHJvcEVsZW1lbnRcbn0pO1xuXG5pbXBvcnQgeyBEUk9QLCBEUkFHX09VVCwgRFJBR19PVkVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBkcm9wKGRyYWdFbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERST1A7XG5cbiAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBkcmFnRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcChkcm9wSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QLFxuICAgICAgICBoYW5kbGVyID0gZHJvcEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJvcChkcm9wSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUk9QLFxuICAgICAgICBoYW5kbGVyID0gZHJvcEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25EcmFnT3V0KGRyYWdPdXRIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1VULFxuICAgICAgICBoYW5kbGVyID0gZHJhZ091dEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmRHJhZ091dChkcmFnT3V0SGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09VVCxcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdXRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhZ092ZXIoZHJhZ092ZXJIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfT1ZFUixcbiAgICAgICAgaGFuZGxlciA9IGRyYWdPdmVySGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZEcmFnT3ZlcihkcmFnT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19PVkVSLFxuICAgICAgICBoYW5kbGVyID0gZHJhZ092ZXJIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURyb3AoKSB7XG4gIHRoaXMub25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB0aGlzLm9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlRHJvcCgpIHtcbiAgdGhpcy5vZmZNb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB0aGlzLm9mZk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZHJhZ0VsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXI7XG5cbiAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgZHJhZ0VsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcm9wLFxuICBvbkRyb3AsXG4gIG9mZkRyb3AsXG4gIG9uRHJhZ091dCxcbiAgb2ZmRHJhZ091dCxcbiAgb25EcmFnT3ZlcixcbiAgb2ZmRHJhZ092ZXIsXG4gIGVuYWJsZURyb3AsXG4gIGRpc2FibGVEcm9wLFxuICBjYWxsSGFuZGxlcnNcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgZHJhZ0VsZW1lbnQgfSA9IGdsb2JhbFRoaXM7XG5cbiAgaWYgKGRyYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgbGV0IHsgZHJvcEVsZW1lbnQgfSA9IGdsb2JhbFRoaXM7XG5cbiAgICBpZiAoZHJvcEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChkcm9wRWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09VVDtcblxuICAgICAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIGRyYWdFbGVtZW50KTtcblxuICAgICAgICBkcm9wRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gICAgICAgICAgZHJvcEVsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBkcmFnRWxlbWVudCB9ID0gZ2xvYmFsVGhpcztcblxuICBpZiAoZHJhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBEUkFHX09WRVIsXG4gICAgICAgICAgZHJvcEVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgZHJvcEVsZW1lbnRcbiAgICB9KTtcblxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZHJhZ0VsZW1lbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFROEIsVUFBYztJQU5sRCxXQUFXLEdBQUcsSUFBSTtBQUV4QixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVU7SUFDdEIsV0FBVyxFQUFYLFdBQVc7O1NBS0osSUFBSSxDQUFDLFdBQVc7UUFDakIsU0FBUyxHQUh5QixVQUFjO1NBS2pELFlBQVksQ0FBQyxTQUFTLEVBQUUsV0FBVzs7U0FHakMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPO1FBQzVCLFNBQVMsR0FUeUIsVUFBYyxPQVVoRCxPQUFPLEdBQUcsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUU1QixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87O1NBRzFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTztRQUM3QixTQUFTLEdBaEJ5QixVQUFjLE9BaUJoRCxPQUFPLEdBQUcsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUU1QixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87O1NBRzdDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTztRQUNsQyxTQUFTLEdBdkJ5QixVQUFjLFdBd0JoRCxPQUFPLEdBQUcsY0FBYyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUUvQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87O1NBRzFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsT0FBTztRQUNuQyxTQUFTLEdBOUJ5QixVQUFjLFdBK0JoRCxPQUFPLEdBQUcsY0FBYyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUUvQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87O1NBRzdDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTztRQUNwQyxTQUFTLEdBckN5QixVQUFjLFlBc0NoRCxPQUFPLEdBQUcsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUVoQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87O1NBRzFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsT0FBTztRQUNyQyxTQUFTLEdBNUN5QixVQUFjLFlBNkNoRCxPQUFPLEdBQUcsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUVoQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU87O1NBRzdDLFVBQVU7U0FDWixVQUFVLENBQUMsZUFBZTtTQUMxQixXQUFXLENBQUMsZ0JBQWdCOztTQUcxQixXQUFXO1NBQ2IsV0FBVyxDQUFDLGVBQWU7U0FDM0IsWUFBWSxDQUFDLGdCQUFnQjs7U0FHM0IsWUFBWSxDQUFDLFNBQVMsRUFBRSxXQUFXO1FBQ3BDLGNBQWMsUUFBUSxrQkFBa0IsQ0FBQyxTQUFTO0lBRXhELGNBQWMsQ0FBQyxPQUFPLFVBQUUsYUFBYTtZQUMzQixPQUFPLEdBQWMsYUFBYSxDQUFsQyxPQUFPLEVBQUUsT0FBTyxHQUFLLGFBQWEsQ0FBekIsT0FBTztRQUV4QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXOzs7O0lBS25DLElBQUksRUFBSixJQUFJO0lBQ0osTUFBTSxFQUFOLE1BQU07SUFDTixPQUFPLEVBQVAsT0FBTztJQUNQLFNBQVMsRUFBVCxTQUFTO0lBQ1QsVUFBVSxFQUFWLFVBQVU7SUFDVixVQUFVLEVBQVYsVUFBVTtJQUNWLFdBQVcsRUFBWCxXQUFXO0lBQ1gsVUFBVSxFQUFWLFVBQVU7SUFDVixXQUFXLEVBQVgsV0FBVztJQUNYLFlBQVksRUFBWixZQUFZOzs7U0FHTCxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU87UUFDN0IsV0FBVyxHQUFLLFVBQVUsQ0FBMUIsV0FBVztRQUVmLFdBQVcsS0FBSyxJQUFJO1lBQ2hCLFlBQVcsR0FBSyxVQUFVLENBQTFCLFdBQVc7WUFFYixZQUFXLEtBQUssSUFBSTtnQkFDbEIsWUFBVztvQkFDUCxTQUFTLEdBM0ZtQixVQUFjO3FCQTZGM0MsWUFBWSxDQUFDLFNBQVMsRUFBRSxXQUFXO2dCQUV4QyxZQUFXLEdBQUcsSUFBSTtnQkFFbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUN0QixXQUFXLEVBQVgsWUFBVzs7Ozs7O1NBT1osZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU87UUFDOUIsV0FBVyxHQUFLLFVBQVUsQ0FBMUIsV0FBVztRQUVmLFdBQVcsS0FBSyxJQUFJO1lBQ2hCLFNBQVMsR0E3R3VCLFVBQWMsWUE4RzlDLFlBQVcsUUFBUyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQ3RCLFdBQVcsRUFBWCxZQUFXOzthQUdSLFlBQVksQ0FBQyxTQUFTLEVBQUUsV0FBVyJ9