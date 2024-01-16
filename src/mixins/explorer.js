"use strict";

import { OPEN_CUSTOM_EVENT_TYPE,
         MOVE_CUSTOM_EVENT_TYPE,
         SELECT_CUSTOM_EVENT_TYPE,
         RENAME_CUSTOM_EVENT_TYPE,
         REMOVE_CUSTOM_EVENT_TYPE,
         CREATE_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function onCustomOpen(openCustomHandler, element) {
  const customEventType = OPEN_CUSTOM_EVENT_TYPE,
        customHandler = openCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomOpen(openCustomHandler, element) {
  const customEventType = OPEN_CUSTOM_EVENT_TYPE,
        customHandler = openCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomMove(moveCustomHandler, element) {
  const customEventType = MOVE_CUSTOM_EVENT_TYPE,
        customHandler = moveCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomMove(moveCustomHandler, element) {
  const customEventType = MOVE_CUSTOM_EVENT_TYPE,
        customHandler = moveCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

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

function onCustomRename(renameCustomHandler, element) {
  const customEventType = RENAME_CUSTOM_EVENT_TYPE,
        customHandler = renameCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomRename(renameCustomHandler, element) {
  const customEventType = RENAME_CUSTOM_EVENT_TYPE,
        customHandler = renameCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomCreate(createCustomHandler, element) {
  const customEventType = CREATE_CUSTOM_EVENT_TYPE,
        customHandler = createCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomCreate(createCustomHandler, element) {
  const customEventType = CREATE_CUSTOM_EVENT_TYPE,
        customHandler = createCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSelect(selectCustomHandler, element) {
  const customEventType = SELECT_CUSTOM_EVENT_TYPE,
        customHandler = selectCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSelect(selectCustomHandler, element) {
  const customEventType = SELECT_CUSTOM_EVENT_TYPE,
        customHandler = selectCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

const explorerMixins = {
  onCustomOpen,
  offCustomOpen,
  onCustomMove,
  offCustomMove,
  onCustomRemove,
  offCustomRemove,
  onCustomRename,
  offCustomRename,
  onCustomCreate,
  offCustomCreate,
  onCustomSelect,
  offCustomSelect
};

export default explorerMixins;
