"use strict";

import { CHANGE_CUSTOM_EVENT_TYPE, CANCEL_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function onCustomChange(changeCustomHandler, element) {
  const customEventType = CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = changeCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomChange(changeCustomHandler, element) {
  const customEventType = CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = changeCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomCancel(cancelCustomHandler, element) {
    const customEventType = CANCEL_CUSTOM_EVENT_TYPE,
          customHandler = cancelCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomCancel(cancelCustomHandler, element) {
    const customEventType = CANCEL_CUSTOM_EVENT_TYPE,
          customHandler = cancelCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

const nameSpanMixins = {
  onCustomChange,
  offCustomChange,
  onCustomCancel,
  offCustomCancel
};

export default nameSpanMixins;
