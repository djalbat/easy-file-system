"use strict";

import withStyle from "easy-with-style";

const BackgroundDiv = withStyle.div`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
      
`;

export default BackgroundDiv;
