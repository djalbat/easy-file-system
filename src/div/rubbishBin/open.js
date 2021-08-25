"use strict";

import RubbishBinDiv from "../../div/rubbishBin"
import OpenRubbishBinSVG from "../../svg/rubbishBin/open";

export default class OpenRubbishBinDiv extends RubbishBinDiv {
  childElements() {
    const { OpenRubbishBinSVG } = this.constructor;

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

  static OpenRubbishBinSVG = OpenRubbishBinSVG;

  static tagName = "div";

  static defaultProperties = {
    className: "open"
  };
}
