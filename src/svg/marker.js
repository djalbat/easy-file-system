"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { markerSVGHeight, markerSVGMarginLeft } from "../styles";

class MarkerSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:6" d="m 93,60 h 30" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "92 43 32 32",
    className: "marker"
  };
}

export default withStyle(MarkerSVG)`

  fill: none;
  width: auto;
  height: ${markerSVGHeight};
  stroke: #000000;
  display: inline;
  margin-left: ${markerSVGMarginLeft};
  
`;
