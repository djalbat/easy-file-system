"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes, arrayUtilities } from "necessary";
import { Element, window, document } from "easy";

import nameSpanMixins from "../mixins/nameSpan";

import { TRUE, CONTENT_EDITABLE } from "../constants";
import {CANCEL_CUSTOM_EVENT_TYPE, CHANGE_CUSTOM_EVENT_TYPE} from "../customEventTypes";

const { first } = arrayUtilities,
      { ENTER_KEY_CODE, ESCAPE_KEY_CODE } = keyCodes;

class NameSpan extends Element {
  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY_CODE) {
      const customEventType = CHANGE_CUSTOM_EVENT_TYPE;

      this.callCustomHandlers(customEventType);

      event.preventDefault();
    }

    if (keyCode === ESCAPE_KEY_CODE) {
      const customEventType = CANCEL_CUSTOM_EVENT_TYPE;

      this.callCustomHandlers(customEventType);

      event.preventDefault();
    }
  }

  getName() {
    const html = this.html(),
          name = html;  ///

    return name;
  }

  setName(name) {
    const domElement = this.getDOMElement(),
          { firstChild } = domElement;

    let textNode;

    if (firstChild !== null) {
      textNode = firstChild;  ///
    } else {
      textNode = document.createTextNode();

      domElement.appendChild(textNode);
    }

    textNode.nodeValue = name;  ///
  }

  edit() {
    this.focus();

    this.addAttribute(CONTENT_EDITABLE, TRUE);

    const html = this.html(),
          range = document.createRange(),
          selection = window.getSelection(),
          domElement = this.getDOMElement(),
          htmlLength = html.length,
          { childNodes } = domElement,
          firstChildNode = first(childNodes),
          textNode = firstChildNode;  ///

    range.setStart(textNode, 0);

    range.setEnd(textNode, htmlLength);

    selection.removeAllRanges();

    selection.addRange(range);

    this.onKeyDown(this.keyDownHandler);
  }

  reset() {
    this.offKeyDown(this.keyDownHandler);

    this.removeAttribute(CONTENT_EDITABLE, TRUE);
  }

  parentContext() {
    const editNameSpan = this.edit.bind(this), ///
          resetNameSpan = this.reset.bind(this), ///
          getNameSpanName = this.getName.bind(this), ///
          setNameSpanName = this.setName.bind(this), ///
          onCustomNameSpanCancel = this.onCustomCancel.bind(this), ///
          offCustomNameSpanCancel = this.offCustomCancel.bind(this), ///
          onCustomNameSpanChange = this.onCustomChange.bind(this), ///
          offCustomNameSpanChange = this.offCustomChange.bind(this); ///

    return ({
      editNameSpan,
      resetNameSpan,
      getNameSpanName,
      setNameSpanName,
      onCustomNameSpanCancel,
      offCustomNameSpanCancel,
      onCustomNameSpanChange,
      offCustomNameSpanChange
    });
  }

  static tagName = "span";  ///

  static defaultProperties = {
    className: "name"
  };
}

Object.assign(NameSpan.prototype, nameSpanMixins);

export default withStyle(NameSpan)`

  border: none;
  display: inline-block;
  font-size: inherit;
  text-align: left;
  background: transparent;
  font-weight: inherit;
  font-family: inherit;

  [contentEditable] {
    border: 1px solid black;
    padding: 4px;
  }
  
`;
