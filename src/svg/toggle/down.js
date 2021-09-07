"use strict";

import withStyle from "easy-with-style";

import { toggleSVGHeight } from "../../styles";

const DownToggleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="206 26 32 32" className={`${className} down-toggle`}>
      <g>
        <path style="stroke-width:1px" d="m 222,54 -7,-14 h 14 z" />
      </g>
    </svg>

  );
};

export default withStyle(DownToggleSVG)`

  fill: #000000;
  width: auto;
  height: ${toggleSVGHeight};
  stroke: #000000;
  margin-right: 1rem;
  vertical-align: bottom;
  
`;

