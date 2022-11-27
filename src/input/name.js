"use strict";

import withStyle from "easy-with-style";  ///

import { arrayUtilities } from "necessary";

import { NONE, INLINE_BLOCK } from "../constants";
import { Element, window, document } from "easy";
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from "../keyCodes";

const { first } = arrayUtilities;

class NameInput extends Element {
  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY_CODE) {
      const { onChange } = this.properties,
            changeHandler = onChange; ///

      changeHandler();

      event.preventDefault();
    }

    if (keyCode === ESCAPE_KEY_CODE) {
      const { onCancel } = this.properties,
            cancelHandler = onCancel; ///

      cancelHandler();

      event.preventDefault();
    }
  }

  getName() {
    const html = this.html(),
          name = html;  ///

    return name;
  }

  setName(name) {
    const html = name;  ///

    this.html(html);
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
          hideNameInput = this.hide.bind(this),
          getNameInputName = this.getName.bind(this), ///
          setNameInputName = this.setName.bind(this), ///
          isNameInputDisplayed = this.isDisplayed.bind(this); ///

    return ({
      showNameInput,
      hideNameInput,
      getNameInputName,
      setNameInputName,
      isNameInputDisplayed
    });
  }

  static tagName = "span";  ///

  static ignoredProperties = [
    "onChange",
    "onCancel"
  ];

  static defaultProperties = {
    role: "textbox",
    className: "name",
    contentEditable: "true"
  };
}

export default withStyle(NameInput)`
  
  outline: none;
  font-size: inherit;
  text-align: left;
  font-weight: inherit;
  font-family: inherit;
  
`;
