"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { toggleSVGHeight } from "../../styles";

class UpToggleSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1px" d="m 264,50 -14,7 V 44 Z" />
      </g>

    );
  }

  parentContext() {
    const showUpToggleSVG = this.show.bind(this), ///
          hideUpToggleSVG = this.hide.bind(this); ///

    return ({
      showUpToggleSVG,
      hideUpToggleSVG
    });
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "32",
    height: "32",
    viewBox: "240 28 32 32",
    className: "up-toggle"
  };
}

export default withStyle(UpToggleSVG)`

  fill: #000000;
  width: auto;
  height: ${toggleSVGHeight};
  stroke: #000000;
  margin-right: 1rem;
  vertical-align: bottom;
  
`;
