"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Explorer from "./explorer";

class View extends Element {
  childElements() {
  	const explorer1 =

            <Explorer label={1}/>

          ,
          explorer2 =

            <Explorer label={2}/>

          ;

		explorer1.addFilePath("directory1/file3.txt");
		explorer2.addFilePath("directory2/file4.txt");

    return ([
      explorer1,
      explorer2
    ]);
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
