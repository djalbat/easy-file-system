"use strict";

import withStyle from "easy-with-style";

const ClosedRubbishBinSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="60" height="60" viewBox="4 10 60 60" className={`${className} closed-rubbish-bin`}>
      <g>
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 40,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 46,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="m 16,30 v 32 l 2,2 h 32 l 2,-2 V 30" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="M 12,30 H 56" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="m 24,30 -2,-8 h 24 l -2,8" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 22,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 28,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 34,34 V 60" />
      </g>
    </svg>

  );
};

export default withStyle(ClosedRubbishBinSVG)`

  width: 5rem;
  height: 5rem;
  
`;
