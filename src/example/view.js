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

            <Explorer onMove={moveHandler} onOpen={openHandler} options={options} />

          ,
          explorer2 =

            <Explorer onMove={moveHandler} onOpen={openHandler} />

          ;

    explorer1.addFilePath("directory1/directory3/file1.txt");

    explorer2.addFilePath("directory2/file2.txt");

    return ([

        <RubbishBin onRemove={removeHandler} />

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

function openHandler(filePath) {
  console.log("open", filePath)
}

function moveHandler(pathMaps, done) {
  console.log("move", JSON.stringify(pathMaps))

  done();
}

function removeHandler(pathMaps, done) {
  console.log("remove", JSON.stringify(pathMaps))

  done();
}
