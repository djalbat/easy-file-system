"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../../svg";

import { toggleSVGHeight, toggleSVGPaddingRight } from "../../styles";

class DownToggleSVG extends SVG {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1px" d="m 222,54 -7,-14 h 14 z" />
      </g>

    );
  }

  parentContext() {
    const showDownToggleSVG = this.show.bind(this), ///
          hideDownToggleSVG = this.hide.bind(this); ///

    return ({
      showDownToggleSVG,
      hideDownToggleSVG
    });
  }

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "206 26 32 32",
    className: "down-toggle"
  };
}

export default withStyle(DownToggleSVG)`

  height: ${toggleSVGHeight};
  padding-right: ${toggleSVGPaddingRight};
  
`;

