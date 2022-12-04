"use strict";

import { asynchronousUtilities } from "necessary";

import { REMOVE_EVENT_TYPE } from "../eventTypes";

const { forEach } = asynchronousUtilities;

function onRemove(removeHandler, element) {
  const eventType = REMOVE_EVENT_TYPE,
      handler = removeHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offRemove(removeHandler, element) {
  const eventType = REMOVE_EVENT_TYPE,
        handler = removeHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function callRemoveHandlersAsync(pathMaps, explorer, done) {
  const eventType = REMOVE_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

  forEach(eventListeners, (eventListener, next) => {
    const { handler, element } = eventListener,
          removeHandler = handler,  ///
          done = next;  ///

    removeHandler.call(element, pathMaps, explorer, done);
  }, done);
}

const rubbishBinMixins = {
  onRemove,
  offRemove,
  callRemoveHandlersAsync
};

export default rubbishBinMixins;
