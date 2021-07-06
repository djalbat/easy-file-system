"use strict";

import withStyle from "easy-with-style";

const DownToggleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="206 26 32 32" className={`${className} down-toggle`}>
      <g>
        <path style="fill:#000000;stroke:#000000;stroke-width:1px" d="m 222,56 -8,-16 h 16 z" />
      </g>
    </svg>

  );
};

export default withStyle(DownToggleSVG)`

  width: 10rem;
  height: 10rem;
  
`;
