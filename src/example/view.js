"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Explorer from "./explorer";

import { RubbishBin } from "../index";  ///

import MarkerSVG from "../svg/marker";
import FileNameSVG from "../svg/fileName";
import DirectoryNameSVG from "../svg/directoryName";
import UpToggleSVG from "../svg/toggle/up";
import DownToggleSVG from "../svg/toggle/down";

class View extends Element {
  childElements() {
  	// const explorer =
    //
    //         <Explorer onMove={moveHandler} />
    //
    //       ,
    //       rubbishBin =
    //
    //         <RubbishBin onRemove={removeHandler} />
    //
    //       ;
    //
		// explorer.addFilePath("directory/file.txt");

    return ([

      <DirectoryNameSVG/>,
      <FileNameSVG/>,
      <MarkerSVG/>,
      <UpToggleSVG/>,
      <DownToggleSVG/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 10rem;
  position: relative;
      
`;

function moveHandler(pathMaps, done) {
  ///

  done();
}

function removeHandler(pathMaps, done) {
  ///

  done();
}
