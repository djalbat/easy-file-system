"use strict";

import withStyle from "easy-with-style";

const UpToggleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="240 30 32 32" className={`${className} up-toggle`}>
      <g>
        <path style="fill:#000000;stroke:#000000;stroke-width:1px" d="m 264,52 -16,8 V 44 Z" />
      </g>
    </svg>

  );
};

export default withStyle(UpToggleSVG)`

  width: 10rem;
  height: 10rem;
  
`;
