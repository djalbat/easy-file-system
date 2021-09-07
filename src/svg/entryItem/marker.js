"use strict";

import withStyle from "easy-with-style";

import { entryItemSVGHeight, markerEntryItemSVGMarginLeft } from "../../styles";

const MarkerEntryItemSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="92 43 32 32" className={`${className} marker`}>
      <g>
        <path style="stroke-width:6" d="m 93,60 h 30" />
      </g>
    </svg>

  );
};

export default withStyle(MarkerEntryItemSVG)`

  fill: none;
  width: auto;
  height: ${entryItemSVGHeight};
  stroke: #000000;
  display: inline;
  margin-left: ${markerEntryItemSVGMarginLeft};
  vertical-align: bottom;
  
`;
