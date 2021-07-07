"use strict";

import { window, constants } from "easy";

import { mouseTopFromEvent, mouseLeftFromEvent } from "../utilities/event";
import { BLUR, DRAG, STOP_DRAG, START_DRAG, ESCAPE_KEYCODE } from "../constants";

const dragElement = null;

Object.assign(globalThis, {
  dragElement
});

const { LEFT_MOUSE_BUTTON } = constants;

function onDrag(dragHandler, element) {
  const eventType = DRAG,
        handler = dragHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offDrag(dragHandler, element) {
  const eventType = DRAG,
        handler = dragHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onStopDrag(stopDragHandler, element) {
  const eventType = STOP_DRAG,
        handler = stopDragHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offStopDrag(stopDragHandler, element) {
  const eventType = STOP_DRAG,
        handler = stopDragHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onStartDrag(startDragHandler, element) {
  const eventType = START_DRAG,
        handler = startDragHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offStartDrag(startDragHandler, element) {
  const eventType = START_DRAG,
        handler = startDragHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function enableDrag() {
  const topOffset = null,
        leftOffset = null,
        startMouseTop = null,
        startMouseLeft = null;

  this.setState({
    topOffset,
    leftOffset,
    startMouseTop,
    startMouseLeft
  });

  this.onMouseDown(mouseDownHandler, this);
}

function disableDrag() {
  this.offMouseDown(mouseDownHandler, this);
}

function isDragging() {
  const dragging = this.hasClass("dragging");

  return dragging;
}

function startDrag(mouseTop, mouseLeft) {
  const bounds = this.getBounds(),
        eventType = START_DRAG,
        boundsTop = bounds.getTop(),
        boundsLeft = bounds.getLeft(),
        boundsRight = bounds.getRight(),
        boundsBottom = bounds.getBottom(),
        boundsWidth = boundsRight - boundsLeft,
        boundsHeight = boundsBottom - boundsTop,
        topOffset = Math.floor(boundsHeight / 2),
        leftOffset = Math.floor(boundsWidth / 2),
        dragElement = this, ///
        startMouseTop = mouseTop, ///
        startMouseLeft = mouseLeft; ///

  window.on(BLUR, mouseUpHandler, this); ///

  window.onKeyDown(keyDownHandler, this);

  window.onMouseUp(mouseUpHandler, this);

  window.onMouseMove(mouseMoveHandler, this);

  this.addClass("dragging");

  Object.assign(globalThis, {
    dragElement
  });

  this.setTopOffset(topOffset);

  this.setLeftOffset(leftOffset);

  this.setStartMouseTop(startMouseTop);

  this.setStartMouseLeft(startMouseLeft);

  this.callHandlers(eventType);

  this.drag(mouseTop, mouseLeft);
}

function stopDrag() {
  const { dropElement } = globalThis,
        eventType = STOP_DRAG,
        dragElement = null;

  window.off(BLUR, mouseUpHandler, this);  ///

  window.offKeyDown(keyDownHandler, this);

  window.offMouseUp(mouseUpHandler, this);

  window.offMouseMove(mouseMoveHandler, this);

  if (dropElement !== null) {
    const dragElement = this; ///

    dropElement.drop(dragElement);
  }

  this.callHandlers(eventType);

  Object.assign(globalThis, {
    dragElement
  });

  this.removeClass("dragging");
}

function drag(mouseTop, mouseLeft) {
  const eventType = DRAG,
        scrollTop = window.getScrollTop(),
        scrollLeft = window.getScrollLeft(),
        topOffset = this.getTopOffset(),
        leftOffset = this.getLeftOffset(),
        startMouseTop = this.getStartMouseTop(),
        startMouseLeft = this.getStartMouseLeft(),
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  let top = startMouseTop + relativeMouseTop - topOffset - scrollTop,
      left = startMouseLeft + relativeMouseLeft - leftOffset - scrollLeft;

  top = `${top}px`; ///
  left = `${left}px`; ///

  const css = {
    top,
    left
  };

  this.css(css);

  this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);
}

function callHandlers(eventType, relativeMouseTop, relativeMouseLeft) {
  const eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener;

    handler.call(element, relativeMouseTop, relativeMouseLeft, element);
  });
}

function getTopOffset() {
  const state = this.getState(),
        { topOffset } = state;

  return topOffset;
}

function getLeftOffset() {
  const state = this.getState(),
        { leftOffset } = state;

  return leftOffset;
}

function getStartMouseTop() {
  const state = this.getState(),
      { startMouseTop } = state;

  return startMouseTop;
}

function getStartMouseLeft() {
  const state = this.getState(),
      { startMouseLeft } = state;

  return startMouseLeft;
}

function setTopOffset(topOffset) {
  this.updateState({
    topOffset
  });
}

function setLeftOffset(leftOffset) {
  this.updateState({
    leftOffset
  });
}

function setStartMouseTop(startMouseTop) {
  this.updateState({
    startMouseTop
  });
}

function setStartMouseLeft(startMouseLeft) {
  this.updateState({
    startMouseLeft
  });
}

export default {
  onDrag,
  offDrag,
  onStopDrag,
  offStopDrag,
  onStartDrag,
  offStartDrag,
  enableDrag,
  disableDrag,
  isDragging,
  startDrag,
  stopDrag,
  drag,
  callHandlers,
  getTopOffset,
  getLeftOffset,
  getStartMouseTop,
  getStartMouseLeft,
  setTopOffset,
  setLeftOffset,
  setStartMouseTop,
  setStartMouseLeft
};

function keyDownHandler(event, element) {
  const { keyCode } = event,
        escapeKey = (keyCode === ESCAPE_KEYCODE);

  if (escapeKey) {
    this.stopDrag();

    event.stopPropagation();
  }
}

function mouseUpHandler(event, element) {
  this.stopDrag();

  event.stopPropagation();
}

function mouseDownHandler(event, element) {
  const { button } = event;

  if (button === LEFT_MOUSE_BUTTON) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.startDrag(mouseTop, mouseLeft);
  }

  event.stopPropagation();
}

function mouseMoveHandler(event, element) {
  const dragging = this.isDragging();

  if (dragging) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.drag(mouseTop, mouseLeft);
  }

  event.stopPropagation();
}
