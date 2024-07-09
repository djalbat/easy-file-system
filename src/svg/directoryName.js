"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { directoryNameSVGHeight, directoryNameSVGPaddingRight } from "../styles";

class DirectoryNameSVG extends SVG {
  childElements() {
    return (

      <g>
        <path style="stroke-width:4" d="m 168,32 v 22 h 26 V 38 h -26" />
        <path style="stroke-width:4" d="m 166,32 h 12 l 6,6" />
        <path style="stroke-width:4" d="m 169,35 h 11" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "165 25 32 32",
    className: "directory-name"
  }
}

export default withStyle(DirectoryNameSVG)`

  fill: none;
  height: ${directoryNameSVGHeight};
  display: inline;
  padding-right: ${directoryNameSVGPaddingRight};
  
`;
