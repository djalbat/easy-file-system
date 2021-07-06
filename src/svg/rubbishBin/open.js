"use strict";

import withStyle from "easy-with-style";

const OpenRubbishBinSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="60" height="60" viewBox="64 10 60 60" className={`${className} open-rubbish-bin`}>
      <g>
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 100,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 106,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="m 76,30 v 32 l 2,2 h 32 l 2,-2 V 30" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="m 72,24 h 44" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="m 84,24 -2,-8 h 24 l -2,8" />
        <path style="fill:none;stroke:#000000;stroke-width:3.77953" d="m 74,30 h 40" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 82,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 88,34 V 60" />
        <path style="fill:none;stroke:#000000;stroke-width:2.83465" d="M 94,34 V 60" />
      </g>
    </svg>

  );
};

export default withStyle(OpenRubbishBinSVG)`

  width: 5rem;
  height: 5rem;
  
`;
