"use strict";

import withStyle from "easy-with-style";

import { entryItemSVGHeight, entryItemSVGMarginTop, entryItemSVGMarginBottom, dragEntryItemSVGMarginRight } from "../../styles";

const FileNameEntryItemSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="121 31 32 32" className={`${className} file-name`}>
      <g>
        <path style="fill:none;stroke:#000000;stroke-width:4" d="m 142,34 v 8 h 8" />
        <path style="fill:none;stroke:#000000;stroke-width:4" d="m 128,34 v 26 h 22 V 42 l -8,-8 z" />
        <path style="fill:none;stroke:#000000;stroke-width:4" d="m 143,40 h 3" />
      </g>
    </svg>

  );
};

export default withStyle(FileNameEntryItemSVG)`

  width: auto;
  height: ${entryItemSVGHeight};
  display: inline;
  margin-top: ${entryItemSVGMarginTop};
  margin-right: ${dragEntryItemSVGMarginRight};
  margin-bottom: ${entryItemSVGMarginBottom};
  vertical-align: bottom;
  
`;
