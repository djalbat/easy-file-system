"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { DBLCLICK } from "../constants";

class NameButton extends Button {
  didMount() {
    const { onDoubleClick } = this.properties,
          doubleClickHandler = onDoubleClick; ///

    this.on(DBLCLICK, doubleClickHandler, this);
  }

  willUnmount() {
    const { onDoubleClick } = this.properties,
          doubleClickHandler = onDoubleClick; ///

    this.off(DBLCLICK, doubleClickHandler, this);
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
  font-family: inherit;
  background: transparent;
  
`;
