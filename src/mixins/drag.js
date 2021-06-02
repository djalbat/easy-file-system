"use strict";

import { window, constants } from "easy";

import { mouseTopFromEvent, mouseLeftFromEvent } from "../utilities/event";
import { BLUR, DRAG, STOP_DRAG, START_DRAG, START_DRAG_DELAY } from "../constants";

const { LEFT_MOUSE_BUTTON } = constants;

const dragElement = null;

Object.assign(globalThis, {
  dragElement
});

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
  const timeout = null,
        topOffset = null,
        leftOffset = null,
        startMouseTop = null,
        startMouseLeft = null;

  this.setState({
    timeout,
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

function isDrag() {
  const drag = this.hasClass("drag");

  return drag;
}

function startWaitingToDrag(mouseTop, mouseLeft) {
  let timeout = this.getTimeout();

  if (timeout === null) {
    timeout = setTimeout(() => {
      this.resetTimeout();

      const mouseOver = this.isMouseOver(mouseTop, mouseLeft);

      if (mouseOver) {
        this.startDrag(mouseTop, mouseLeft);
      }
    }, START_DRAG_DELAY);

    this.updateTimeout(timeout);
  }
}

function stopWaitingToDrag() {
  const timeout = this.getTimeout();

  if (timeout !== null) {
    clearTimeout(timeout);

    this.resetTimeout();
  }
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
        startMouseLeft = mouseLeft, ///
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  this.addClass("drag");

  Object.assign(globalThis, {
    dragElement
  });

  this.setTopOffset(topOffset);

  this.setLeftOffset(leftOffset);

  this.setStartMouseTop(startMouseTop);

  this.setStartMouseLeft(startMouseLeft);

  this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);

  this.drag(mouseTop, mouseLeft);
}

function stopDrag(mouseTop, mouseLeft) {
  const { dropElement } = globalThis,
        eventType = STOP_DRAG,
        dragElement = null, ///
        startMouseTop = this.getStartMouseTop(),
        startMouseLeft = this.getStartMouseLeft(),
        relativeMouseTop = mouseTop - startMouseTop,
        relativeMouseLeft = mouseLeft - startMouseLeft;

  this.callHandlers(eventType, relativeMouseTop, relativeMouseLeft);

  Object.assign(globalThis, {
    dragElement
  });

  if (dropElement !== null) {
    const dragElement = this; ///

    dropElement.drop(dragElement)
  }

  this.removeClass("drag");
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

    handler.call(element, relativeMouseTop, relativeMouseLeft);
  });
}

function isMouseOver(mouseTop, mouseLeft) {
  const bounds = this.getCollapsedBounds(),
        boundsOverlappingMouse = bounds.isOverlappingMouse(mouseTop, mouseLeft),
        mouseOver = boundsOverlappingMouse;  ///

  return mouseOver;
}

function getTimeout() {
  const state = this.getState(),
        { timeout } = state;

  return timeout;
}

function resetTimeout() {
  const timeout = null;

  this.updateTimeout(timeout);
}

function updateTimeout(timeout) {
  this.updateState({
    timeout
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
  isDrag,
  startWaitingToDrag,
  stopWaitingToDrag,
  startDrag,
  stopDrag,
  drag,
  callHandlers,
  isMouseOver,
  getTimeout,
  resetTimeout,
  updateTimeout,
  getTopOffset,
  getLeftOffset,
  getStartMouseTop,
  getStartMouseLeft,
  setTopOffset,
  setLeftOffset,
  setStartMouseTop,
  setStartMouseLeft
};

function mouseUpHandler(event, element) {
  window.off(BLUR, mouseUpHandler, this);  ///

  window.offMouseUp(mouseUpHandler, this);

  window.offMouseMove(mouseMoveHandler, this);

  const drag = this.isDrag();

  if (drag) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.stopDrag(mouseTop, mouseLeft);
  } else {
    this.stopWaitingToDrag();
  }
}

function mouseDownHandler(event, element) {
  const { button } = event;

  window.on(BLUR, mouseUpHandler, this); ///

  window.onMouseUp(mouseUpHandler, this);

  window.onMouseMove(mouseMoveHandler, this);

  if (button === LEFT_MOUSE_BUTTON) {
    const drag = this.isDrag();

    if (!drag) {
      const mouseTop = mouseTopFromEvent(event),
            mouseLeft = mouseLeftFromEvent(event);

      this.startWaitingToDrag(mouseTop, mouseLeft);
    }
  }
}

function mouseMoveHandler(event, element) {
  const drag = this.isDrag();

  if (drag) {
    const mouseTop = mouseTopFromEvent(event),
          mouseLeft = mouseLeftFromEvent(event);

    this.drag(mouseTop, mouseLeft);
  }
}
