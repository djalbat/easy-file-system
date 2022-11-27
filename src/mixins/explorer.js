"use strict";

import { asynchronousUtilities } from "necessary";

import { MOVE_EVENT_TYPE, OPEN_EVENT_TYPE, RENAME_EVENT_TYPE, SELECT_EVENT_TYPE } from "../eventTypes";

const { forEach } = asynchronousUtilities;

function onMove(moveHandler, element) {
  const eventType = MOVE_EVENT_TYPE,
        handler = moveHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offMove(moveHandler, element) {
  const eventType = MOVE_EVENT_TYPE,
        handler = moveHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onOpen(openHandler, element) {
  const eventType = OPEN_EVENT_TYPE,
        handler = openHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offOpen(openHandler, element) {
  const eventType = OPEN_EVENT_TYPE,
        handler = openHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onSelect(selectHandler, element) {
  const eventType = SELECT_EVENT_TYPE,
        handler = selectHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offSelect(selectHandler, element) {
  const eventType = SELECT_EVENT_TYPE,
        handler = selectHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onRename(renameHandler, element) {
  const eventType = RENAME_EVENT_TYPE,
        handler = renameHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offRename(renameHandler, element) {
  const eventType = RENAME_EVENT_TYPE,
        handler = renameHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function callOpenHandlers(filePath) {
  const eventType = OPEN_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener,
        openHandler = handler;  ///

    openHandler.call(element, filePath, this);  ///
  });
}

function callSelectHandlers(path, selected) {
  const eventType = SELECT_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener,
        selectHandler = handler;  ///

    selectHandler.call(element, path, selected, this);  ///
  });
}

function callMoveHandlersAsync(pathMaps, done) {
  const eventType = MOVE_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

  forEach(eventListeners, (eventListener, next) => {
    const { handler, element } = eventListener,
          moveHandler = handler,  ///
          done = next;  ///

    moveHandler.call(element, pathMaps, done);
  }, done);
}

function callRenameHandlersAsync(pathMaps, done) {
  const eventType = RENAME_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

  forEach(eventListeners, (eventListener, next) => {
    const { handler, element } = eventListener,
          renameHandler = handler,  ///
          done = next;  ///

    renameHandler.call(element, pathMaps, done);
  }, done);
}

const eventMixins = {
  onMove,
  offMove,
  onOpen,
  offOpen,
  onSelect,
  offSelect,
  onRename,
  offRename,
  callOpenHandlers,
  callSelectHandlers,
  callMoveHandlersAsync,
  callRenameHandlersAsync
};

export default eventMixins;
