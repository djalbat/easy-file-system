"use strict";

import withStyle from "easy-with-style";

import { entryItemSVGHeight, dragEntryItemSVGMarginRight } from "../../styles";

const DirectoryNameEntryItemSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="165 25 32 32" className={`${className} directory-name`}>
      <g>
        <path style="stroke-width:4" d="m 168,32 v 22 h 26 V 38 h -26" />
        <path style="stroke-width:4" d="m 166,32 h 12 l 6,6" />
        <path style="stroke-width:4" d="m 169,35 h 11" />
      </g>
    </svg>

  );
};

export default withStyle(DirectoryNameEntryItemSVG)`

  fill: none;
  width: auto;
  height: ${entryItemSVGHeight};
  stroke: #000000;
  display: inline;
  margin-right: ${dragEntryItemSVGMarginRight};
  vertical-align: bottom;
  
`;
