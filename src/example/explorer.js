"use strict";

import withStyle from "easy-with-style";  ///

import { Explorer } from "../index";

export default withStyle(class extends Explorer {
  static ignoredProperties = [
    "label"
  ];
})`

  margin-bottom: 4rem;
  
  :last-child {
    margin-bottom: 0;
  }
  
`;
