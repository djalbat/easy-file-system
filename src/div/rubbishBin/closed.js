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
    const showClosedRubbishBin = this.show.bind(this),
          hideClosedRubbishBin = this.hide.bind(this);

    return ({
      showClosedRubbishBin,
      hideClosedRubbishBin
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "closed-rubbish-bin"
  };
}

export default withStyle(ClosedRubbishBinDiv)`

  width: 10rem;
  height: 10rem;
  
`;