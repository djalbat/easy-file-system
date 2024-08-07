"use strict"

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { fileNameSVGHeight, fileNameSVGPaddingRight, fileNameSVGPaddingLeft } from "../styles";

class FileNameSVG extends SVG {
  childElements() {
    return (

      <g>
        <path style="stroke-width:4" d="m 142,34 v 8 h 8" />
        <path style="stroke-width:4" d="m 128,34 v 26 h 22 V 42 l -8,-8 z" />
        <path style="stroke-width:4" d="m 143,40 h 3" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "121 31 32 32",
    className: "file-name"
  }
}

export default withStyle(FileNameSVG)`

  fill: none;
  height: ${fileNameSVGHeight};
  display: inline;
  padding-left: ${fileNameSVGPaddingLeft};
  padding-right: ${fileNameSVGPaddingRight};
  
`;
