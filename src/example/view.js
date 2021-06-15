"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { Explorer } from "../index";

class View extends Element {
  childElements() {
  	const explorer =

			<Explorer/>

		;

		explorer.addFilePath("directory1/file3.txt");
		explorer.addFilePath("directory2/file4.txt");

    return explorer;
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 10rem;
      
`;
