"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import OpenRubbishBinSVG from "../../svg/rubbishBin/open";

class OpenRubbishBinDiv extends Element {
  childElements() {
    return (

      <OpenRubbishBinSVG/>

    );
  }

  parentContext() {
    const showOpenRubbishBinDiv = this.show.bind(this),
          hideOpenRubbishBinDiv = this.hide.bind(this);

    return ({
      showOpenRubbishBinDiv,
      hideOpenRubbishBinDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "open-rubbish-bin"
  };
}

export default withStyle(OpenRubbishBinDiv)`

  width: 24rem;
  height: 24rem;
  
`;