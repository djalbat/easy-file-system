"use strict";

import RubbishBinDiv from "../../div/rubbishBin"
import ClosedRubbishBinSVG from "../../svg/rubbishBin/closed";

export default class ClosedRubbishBinDiv extends RubbishBinDiv {
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
    className: "closed"
  };
}
