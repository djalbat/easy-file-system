"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { INLINE_BLOCK } from "../constants";
import { ENTER_KEY_CODE, ESCAPE_KEY_CODE } from "../keyCodes";

class NameInput extends Element {
  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY_CODE) {
      const { onChange } = this.properties,
            changeHandler = onChange, ///
            html = this.html(),
            name = html;  ///

      changeHandler(name);

      event.preventDefault();
    }

    if (keyCode === ESCAPE_KEY_CODE) {
      const { onCancel } = this.properties,
            cancelHandler = onCancel; ///

      cancelHandler();

      event.preventDefault();
    }
  }

  setName(name) {
    const html = name;  ///

    this.html(html);
  }

  show() {
    const display = INLINE_BLOCK;

    this.display(display);

    this.focus();
  }

  hide() {
    super.hide();
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
          setNameInputName = this.setName.bind(this); ///

    return ({
      showNameInput,
      hideNameInput,
      setNameInputName
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
  
  display: inline-block;
  
`;
