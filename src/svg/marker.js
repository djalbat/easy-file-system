"use strict";

import withStyle from "easy-with-style";

const MarkerSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="92 43 32 32" className={`${className} marker`}>
      <g>
        <path style="fill:none;stroke:#000000;stroke-width:6" d="m 93,60 h 30" />
      </g>
    </svg>

  );
};

export default withStyle(MarkerSVG)`

  width: 10rem;
  height: 10rem;
  
`;
