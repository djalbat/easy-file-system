"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";
import { INLINE_BLOCK } from "../constants";

class NameButton extends Button {
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
  }

  didMount() {
    const { onDoubleClick = null } = this.properties,
          doubleClickHandler = onDoubleClick; ///

    this.onDoubleClick(doubleClickHandler, this);
  }

  willUnmount() {
    const { onDoubleClick = null } = this.properties,
          doubleClickHandler = onDoubleClick; ///

    this.offDoubleClick(doubleClickHandler, this);
  }

  parentContext() {
    const showNameButton = this.show.bind(this), ///
          hideNameButton = this.hide.bind(this);  ///

    return ({
      showNameButton,
      hideNameButton
    });
  }

  static ignoredProperties = [
    "onDoubleClick"
  ];

  static defaultProperties = {
    className: "name"
  };
}

export default withStyle(NameButton)`

  border: none;
  outline: none;
  display: inline-block;
  font-size: inherit;
  text-align: left;
  font-weight: inherit;
  font-family: inherit;
  background: transparent;
  
`;
