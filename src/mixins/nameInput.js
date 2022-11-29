"use strict";

import { CHANGE_EVENT_TYPE, CANCEL_EVENT_TYPE } from "../eventTypes";

function onChange(changeHandler, element) {
  const eventType = CHANGE_EVENT_TYPE,
        handler = changeHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offChange(changeHandler, element) {
  const eventType = CHANGE_EVENT_TYPE,
        handler = changeHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function onCancel(cancelHandler, element) {
    const eventType = CANCEL_EVENT_TYPE,
          handler = cancelHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offCancel(cancelHandler, element) {
    const eventType = CANCEL_EVENT_TYPE,
          handler = cancelHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function callChangeHandlers() {
  const eventType = CHANGE_EVENT_TYPE,
        eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener,
          changeHandler = handler;  ///

    changeHandler.call(element);
  });
}

function callCancelHandlers() {
    const eventType = CANCEL_EVENT_TYPE,
          eventListeners = this.findEventListeners(eventType);

  eventListeners.forEach((eventListener) => {
    const { handler, element } = eventListener,
          cancelHandler = handler;  ///

    cancelHandler.call(element);
  });
}

const nameInputMixins = {
  onChange,
  offChange,
  onCancel,
  offCancel,
  callChangeHandlers,
  callCancelHandlers
};

export default nameInputMixins;
