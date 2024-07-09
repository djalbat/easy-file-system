"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../../svg";

import { rubbishBinSVGHeight } from "../../styles";

class OpenRubbishBinSVG extends SVG {
  childElements() {
    return (

      <g>
        <path style="stroke-width:2.83465" d="M 100,34 V 60" />
        <path style="stroke-width:2.83465" d="M 106,34 V 60" />
        <path style="stroke-width:3.77953" d="m 76,30 v 32 l 2,2 h 32 l 2,-2 V 30" />
        <path style="stroke-width:3.77953" d="m 72,24 h 44" />
        <path style="stroke-width:3.77953" d="m 84,24 -2,-8 h 24 l -2,8" />
        <path style="stroke-width:3.77953" d="m 74,30 h 40" />
        <path style="stroke-width:2.83465" d="M 82,34 V 60" />
        <path style="stroke-width:2.83465" d="M 88,34 V 60" />
        <path style="stroke-width:2.83465" d="M 94,34 V 60" />
      </g>

    );
  }

  parentContext() {
    const showOpenRubbishBinSVG = this.show.bind(this), ///
          hideOpenRubbishBinSVG = this.hide.bind(this); ///

    return ({
      showOpenRubbishBinSVG,
      hideOpenRubbishBinSVG
    });
  }

  static tagName = "svg";

  static defaultProperties = {
    width: "60",
    height: "60",
    viewBox: "64 10 60 60",
    className: "open-rubbish-bin"
  };
}

export default withStyle(OpenRubbishBinSVG)`

  fill: none;
  height: ${rubbishBinSVGHeight};
  
`;
