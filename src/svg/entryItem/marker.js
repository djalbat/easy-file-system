"use strict";

import withStyle from "easy-with-style";

import { entryItemSVGHeight } from "../../styles";

const MarkerEntryItemSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="92 43 32 32" className={`${className} marker`}>
      <g>
        <path style="fill:none;stroke:#000000;stroke-width:6" d="m 93,60 h 30" />
      </g>
    </svg>

  );
};

export default withStyle(MarkerEntryItemSVG)`

  width: auto;
  height: ${entryItemSVGHeight};
  display: inline;
  vertical-align: bottom;
  
`;
