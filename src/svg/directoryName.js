"use strict";

import withStyle from "easy-with-style";

const DirectoryNameSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="32" height="32" viewBox="165 25 32 32" className={`${className} directory-name`}>
      <g>
        <path style="fill:none;stroke:#000000;stroke-width:4" d="m 168,32 v 22 h 26 V 38 h -26" />
        <path style="fill:none;stroke:#000000;stroke-width:4" d="m 166,32 h 12 l 6,6" />
        <path style="fill:none;stroke:#000000;stroke-width:4" d="m 169,35 h 11" />
      </g>
    </svg>

  );
};

export default withStyle(DirectoryNameSVG)`

  width: 10rem;
  height: 10rem;
  
`;
