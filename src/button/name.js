"use strict";

import withStyle from "easy-with-style";  ///

import { Button, eventTypes } from "easy";

const { DBLCLICK_EVENT_TYPE } = eventTypes;

class NameButton extends Button {
  didMount() {
    const { onDoubleClick = null } = this.properties,
          doubleClickHandler = onDoubleClick; ///

    this.on(DBLCLICK_EVENT_TYPE, doubleClickHandler, this);
  }

  willUnmount() {
    const { onDoubleClick = null } = this.properties,
          doubleClickHandler = onDoubleClick; ///

    this.off(DBLCLICK_EVENT_TYPE, doubleClickHandler, this);
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
