"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Explorer from "./explorer";

class View extends Element {
  childElements() {
  	const explorer1 =

            <Explorer label={1} onMove={moveHandler1} />

          ,
          explorer2 =

            <Explorer label={2} onMove={moveHandler2} />

          ;

		explorer1.addFilePath("directory1/file3.txt");
    explorer1.addDirectoryPath("directory2");
		explorer2.addFilePath("file4.txt");

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

function moveHandler1(pathMaps, done) {
  ///

  done();
}

function moveHandler2(pathMaps, done) {
  ///

  done();
}
