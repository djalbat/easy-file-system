"use strict";

import { Button, Element } from "easy";

import { Explorer, RubbishBin } from "../index";  ///

export default class View extends Element {
  childElements() {
  	const explorer1 =

            <Explorer onMove={moveHandler} onOpen={openHandler} reference="explorer-1" />

          ,
          explorer2 =

            <Explorer onMove={moveHandler} onOpen={openHandler} reference="explorer-2" ignoredReferences={[ "explorer-1" ]} />

          ;

    explorer1.addFilePath("directory1/file1.txt");
    explorer1.addFilePath("directory1/file2.txt");
    explorer1.addFilePath("directory1/file3.txt");

    explorer2.addFilePath("directory2/file4.txt");
    explorer2.addFilePath("directory2/directory3/file5.txt");

    explorer2.removeFilePath("directory2/directory3/file4.txt", true);

    explorer1.onSelect((path, selected) => {
      explorer2.deselectAllPaths();
    });

    explorer2.onSelect((path, selected) => {
      explorer1.deselectAllPaths();
    });

    return ([

        <Button onClick={(event, element) => {
          clickHandler(explorer1, explorer2);
        }}>
          Edit selected
        </Button>,
        <br/>,
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

function clickHandler(explorer1, explorer2) {
  explorer1.editSelectedPath();
  explorer2.editSelectedPath();
}