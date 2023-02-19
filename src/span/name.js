"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { INLINE_BLOCK } from "../constants";

class NameSpan extends Element {
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

  parentContext() {
    const showNameSpan = this.show.bind(this), ///
          hideNameSpan = this.hide.bind(this), ///
          getNameSpanName = this.getName.bind(this), ///
          setNameSpanName = this.setName.bind(this);  ///

    return ({
      showNameSpan,
      hideNameSpan,
      getNameSpanName,
      setNameSpanName
    });
  }

  static tagName = "span";

  static defaultProperties = {
    className: "name"
  };
}

export default withStyle(NameSpan)`

  border: none;
  display: inline-block;
  font-size: inherit;
  text-align: left;
  font-weight: inherit;
  font-family: inherit;
  background: transparent;
  
`;
