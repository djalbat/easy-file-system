"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { Explorer, RubbishBin } from "../index";  ///

class View extends Element {
  childElements() {
  	const explorer =

            <Explorer onMove={moveHandler} />

          ;

    explorer.addDirectoryPath("directory1", true);
    explorer.addDirectoryPath("directory2");
    explorer.addFilePath("directory1/file1.txt");
    explorer.addFilePath("directory2/file2.txt");

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
