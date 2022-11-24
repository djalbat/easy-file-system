"use strict";

import { Input } from "easy";

export default class NameInput extends Input {
  parentContext() {
    const showNameInput = this.show.bind(this), ///
          hideNameInput = this.hide.bind(this); ///

    return ({
      showNameInput,
      hideNameInput
    });
  }

  static defaultProperties = {
    className: "name"
  };
}
