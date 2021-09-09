"use strict"

import withStyle from "easy-with-style";

import { Element } from "easy";

import { entryItemSVGHeight, dragEntryItemSVGMarginRight, fileNameEntryItemSVGMarginLeft } from "../../styles";

class FileNameEntryItemSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:4" d="m 142,34 v 8 h 8" />
        <path style="stroke-width:4" d="m 128,34 v 26 h 22 V 42 l -8,-8 z" />
        <path style="stroke-width:4" d="m 143,40 h 3" />
      </g>

    );
  }

  parentContext() {
    const showFileNameEntryItemSVG = this.show.bind(this), ///
          hideFileNameEntryItemSVG = this.hide.bind(this); ///

    return ({
      showFileNameEntryItemSVG,
      hideFileNameEntryItemSVG
    });
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "121 31 32 32",
    className: "file-name"
  }
}

export default withStyle(FileNameEntryItemSVG)`

  fill:none;
  width: auto;
  height: ${entryItemSVGHeight};
  stroke:#000000;
  display: inline;
  margin-left: ${fileNameEntryItemSVGMarginLeft};
  margin-right: ${dragEntryItemSVGMarginRight};
  vertical-align: bottom;
  
`;
