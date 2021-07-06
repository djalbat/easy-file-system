"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { Explorer, RubbishBin } from "../index";  ///

class View extends Element {
  childElements() {
  	const explorer =

            <Explorer onMove={moveHandler} />

          ;

    explorer.addFilePath("directory/file.txt");

    return ([

        <RubbishBin/>

      ,
      explorer

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 10rem;
      
`;

function moveHandler(pathMaps, done) {
  ///

  done();
}

function removeHandler(pathMaps, done) {
  ///

  done();
}
