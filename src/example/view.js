"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { options, Explorer, RubbishBin } from "../index";  ///

const { DRAG_INTO_RUBBISH_BIN_ONLY,
        REMOVE_EMPTY_PARENT_DIRECTORIES,
        DRAG_INTO_TOPMOST_DIRECTORIES_ONLY } = options;

class View extends Element {
  childElements() {
  	const options = {
  	        DRAG_INTO_RUBBISH_BIN_ONLY,
            REMOVE_EMPTY_PARENT_DIRECTORIES,
            DRAG_INTO_TOPMOST_DIRECTORIES_ONLY
          },
          explorer1 =

            <Explorer onMove={moveHandler} options={options} />

          ,
          explorer2 =

            <Explorer onMove={moveHandler} />

          ;

    explorer1.addFilePath("directory1/directory3/file1.txt");

    explorer2.addFilePath("directory2/file2.txt");

    return ([

        <RubbishBin/>

      ,
      explorer1,
      explorer2

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
