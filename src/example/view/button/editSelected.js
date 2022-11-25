"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class EditSelectedButton extends Button {
  childElements() {
    return "Edit selected";
  }

  static defaultProperties = {
    className: "edit-selected"
  };
}

export default withStyle(EditSelectedButton)`

  border: 1px solid black;
  cursor: pointer;
  padding: 1rem;
  
`;
