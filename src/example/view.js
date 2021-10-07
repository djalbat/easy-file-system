"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { options, Explorer, RubbishBin } from "../index";  ///

const { REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION,
        DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION } = options;

class View extends Element {
  childElements() {
  	const options = {
            // REMOVE_EMPTY_PARENT_DIRECTORIES_OPTION,
            // DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION
          },
          explorer1 =

            <Explorer onMove={moveHandler} onOpen={openHandler} reference="explorer-1" options={options} />

          ,
          explorer2 =

            <Explorer onMove={moveHandler} onOpen={openHandler} reference="explorer-2" ignoredReferences={[ "explorer-1" ]} />

          ;

    explorer1.addFilePath("directory1/file1.txt");

    explorer2.addFilePath("directory2/file2.txt");

    return ([

        <RubbishBin onRemove={removeHandler} ignoredReferences={[ "explorer-2" ]} />

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
  console.log("move", JSON.stringify(pathMaps, null, "  "))

  done();
}

function removeHandler(pathMaps, done) {
  console.log("remove", JSON.stringify(pathMaps, null, "  "))

  done();
}
