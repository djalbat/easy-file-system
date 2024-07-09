"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { markerSVGHeight, markerSVGMarginLeft } from "../styles";

class MarkerSVG extends SVG {
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
  height: ${markerSVGHeight};
  display: inline;
  margin-left: ${markerSVGMarginLeft};
  
`;
