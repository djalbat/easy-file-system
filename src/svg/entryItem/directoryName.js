"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { entryItemSVGHeight, dragEntryItemSVGMarginRight } from "../../styles";

class DirectoryNameEntryItemSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:4" d="m 168,32 v 22 h 26 V 38 h -26" />
        <path style="stroke-width:4" d="m 166,32 h 12 l 6,6" />
        <path style="stroke-width:4" d="m 169,35 h 11" />
      </g>

    );
  }

  parentContext() {
    const showDirectoryNameEntryItemSVG = this.show.bind(this), ///
          hideDirectoryNameEntryItemSVG = this.hide.bind(this); ///

    return ({
      showDirectoryNameEntryItemSVG,
      hideDirectoryNameEntryItemSVG
    });
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "165 25 32 32",
    className: "directory-name"
  }
}

export default withStyle(DirectoryNameEntryItemSVG)`

  fill: none;
  width: auto;
  height: ${entryItemSVGHeight};
  stroke: #000000;
  display: inline;
  margin-right: ${dragEntryItemSVGMarginRight};
  vertical-align: bottom;
  
`;
