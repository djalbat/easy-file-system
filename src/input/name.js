"use strict";

import withStyle from "easy-with-style";  ///

import { arrayUtilities } from "necessary";

import nameInputMixins from "../mixins/nameInput";

import { NONE, INLINE_BLOCK } from "../constants";
import { Element, window, document } from "easy";
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from "../keyCodes";

const { first } = arrayUtilities;

class NameInput extends Element {
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

  show() {
    const display = INLINE_BLOCK;

    this.display(display);

    this.focus();

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
  }

  hide() {
    const display = NONE;

    this.display(display);
  }

  didMount() {
    this.onKeyDown(this.keyDownHandler);
  }

  willUnmount() {
    this.offKeyDown(this.keyDownHandler);
  }

  parentContext() {
    const showNameInput = this.show.bind(this), ///
          hideNameInput = this.hide.bind(this), ///
          getNameInputName = this.getName.bind(this), ///
          setNameInputName = this.setName.bind(this), ///
          onNameInputChange = this.onChange.bind(this), ///
          onNameInputCancel = this.onCancel.bind(this), ///
          offNameInputChange = this.offChange.bind(this), ///
          offNameInputCancel = this.offCancel.bind(this), ///
          isNameInputDisplayed = this.isDisplayed.bind(this); ///

    return ({
      showNameInput,
      hideNameInput,
      getNameInputName,
      setNameInputName,
      onNameInputChange,
      onNameInputCancel,
      offNameInputChange,
      offNameInputCancel,
      isNameInputDisplayed
    });
  }

  static tagName = "span";  ///

  static defaultProperties = {
    role: "textbox",
    className: "name",
    contentEditable: "true"
  };
}

Object.assign(NameInput.prototype, nameInputMixins);

export default withStyle(NameInput)`
  
  outline: none;
  font-size: inherit;
  text-align: left;
  font-weight: inherit;
  font-family: inherit;
  border: 1px solid black;
  padding: 4px;
  
`;
