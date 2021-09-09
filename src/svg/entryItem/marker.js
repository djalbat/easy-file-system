"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { entryItemSVGHeight, markerEntryItemSVGMarginLeft } from "../../styles";

class MarkerEntryItemSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:6" d="m 93,60 h 30" />
      </g>

    );
  }

  parentContext() {
    const showMarkerEntryItemSVG = this.show.bind(this),  ///
          hideMarkerEntryItemSVG = this.hide.bind(this);  ///

    return ({
      showMarkerEntryItemSVG,
      hideMarkerEntryItemSVG
    });
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "92 43 32 32",
    className: "marker"
  };
}

export default withStyle(MarkerEntryItemSVG)`

  fill: none;
  width: auto;
  height: ${entryItemSVGHeight};
  stroke: #000000;
  display: inline;
  margin-left: ${markerEntryItemSVGMarginLeft};
  vertical-align: bottom;
  
`;
