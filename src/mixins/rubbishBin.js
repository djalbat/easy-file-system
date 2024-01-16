"use strict";

import { REMOVE_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function onCustomRemove(removeCustomHandler, element) {
  const customEventType = REMOVE_CUSTOM_EVENT_TYPE,
        customHandler = removeCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomRemove(removeCustomHandler, element) {
  const customEventType = REMOVE_CUSTOM_EVENT_TYPE,
        customHandler = removeCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

const rubbishBinMixins = {
  onCustomRemove,
  offCustomRemove
};

export default rubbishBinMixins;
