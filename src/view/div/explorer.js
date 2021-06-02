"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import EntriesDiv from "../div/entries";
import dropMixins from "../../mixins/drop";

class ExplorerDiv extends Element {
  dropHandler(dragElement) {
    console.log("drop!")
  }

  dragOutHandler(dragElement) {
    console.log("drag out")
  }

  dragOverHandler(dragElement) {
    console.log("drag over")
  }

  didMount() {
    this.onDrop(this.dropHandler, this);

    this.onDragOut(this.dragOutHandler, this);

    this.onDragOver(this.dragOverHandler, this);

    this.enableDrop();
  }

  willUnmount() {
    this.offDrop(this.dropHandler, this);

    this.offDragOut(this.dragOutHandler, this);

    this.offDragOver(this.dragOverHandler, this);

    this.disableDrop();
  }

  childElements() {
    return (

      <EntriesDiv/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "explorer"
  };
}

Object.assign(ExplorerDiv.prototype, dropMixins);

export default withStyle(ExplorerDiv)`

  height: 20rem;
  grid-area: explorer-div;
  background-color: red;
      
`;
