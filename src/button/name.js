"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class NameButton extends Button {
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
  vertical-align: bottom;
  
`;
