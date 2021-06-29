"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Explorer from "./explorer";
import RubbishBin from "./rubbishBin";

class View extends Element {
  childElements() {
  	const explorer =

            <Explorer onMove={moveHandler} />

          ,
          rubbishBin =

            <RubbishBin onRemove={removeHandler} />

          ;

		explorer.addFilePath("directory1/file3.txt");
    explorer.addDirectoryPath("directory2");

    return ([
      explorer,
      rubbishBin
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
