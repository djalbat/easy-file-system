"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { INLINE_BLOCK } from "../constants";

class NameInput extends Element {
  show() {
    const display = INLINE_BLOCK;

    this.display(display);
  }

  parentContext() {
    const showNameInput = this.show.bind(this), ///
          hideNameInput = this.hide.bind(this); ///

    return ({
      showNameInput,
      hideNameInput
    });
  }

  static tagName = "span";

  static defaultProperties = {
    role: "textbox",
    className: "name",
    contentEditable: "true"
  };
}

export default withStyle(NameInput)`
  
  width: fit-context;
  border: 1px solid black;
  display: inline-block;
  
`;
