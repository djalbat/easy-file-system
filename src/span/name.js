"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes, arrayUtilities } from "necessary";

import nameSpanMixins from "../mixins/nameSpan";

import { TRUE, CONTENT_EDITABLE } from "../constants";
import { Element, window, document } from "easy";

const { first } = arrayUtilities,
      { ENTER_KEY_CODE, ESCAPE_KEY_CODE } = keyCodes;

class NameSpan extends Element {
  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY_CODE) {
      this.callChangeHandlers();

      event.preventDefault();
    }

    if (keyCode === ESCAPE_KEY_CODE) {
      this.callCancelHandlers();

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
          { childNodes } = domElement,
          firstChildNode = first(childNodes),
          textNode = firstChildNode;  ///

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

    range.setStart(textNode, htmlLength);

    range.setEnd(textNode, htmlLength);

    selection.removeAllRanges();

    selection.addRange(range);

    this.onKeyDown(this.keyDownHandler);
  }

  cancel() {
    this.offKeyDown(this.keyDownHandler);

    this.removeAttribute(CONTENT_EDITABLE, TRUE);
  }

  parentContext() {
    const editNameSpan = this.edit.bind(this), ///
          cancelNameSpan = this.cancel.bind(this), ///
          getNameSpanName = this.getName.bind(this), ///
          setNameSpanName = this.setName.bind(this), ///
          onNameSpanChange = this.onChange.bind(this), ///
          onNameSpanCancel = this.onCancel.bind(this), ///
          offNameSpanChange = this.offChange.bind(this), ///
          offNameSpanCancel = this.offCancel.bind(this); ///

    return ({
      editNameSpan,
      cancelNameSpan,
      getNameSpanName,
      setNameSpanName,
      onNameSpanChange,
      onNameSpanCancel,
      offNameSpanChange,
      offNameSpanCancel
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
