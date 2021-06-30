"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import ClosedRubbishBinSVG from "../../svg/rubbishBin/closed";

class ClosedRubbishBinDiv extends Element {
  childElements() {
    return (

      <ClosedRubbishBinSVG/>

    );
  }

  parentContext() {
    const showClosedRubbishBinDiv = this.show.bind(this),
          hideClosedRubbishBinDiv = this.hide.bind(this);

    return ({
      showClosedRubbishBinDiv,
      hideClosedRubbishBinDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "closed-rubbish-bin"
  };
}

export default withStyle(ClosedRubbishBinDiv)`

  width: 24rem;
  height: 24rem;
  
`;