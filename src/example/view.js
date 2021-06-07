"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { ExplorerDiv } from "../index";

class View extends Element {
  childElements() {
  	const explorerDiv =

			<ExplorerDiv/>

		;

		// explorerDiv.addDirectoryPath("explorer/directory1");
		// explorerDiv.addDirectoryPath("explorer/directory2");
		explorerDiv.addFilePath("explorer/directory1/file1.txt");
		explorerDiv.addFilePath("explorer/directory1/file2.txt");
		explorerDiv.addFilePath("explorer/directory2/file3.txt");

		return explorerDiv;
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

  display: grid;
  min-height: 100vh;
      
  grid-template-rows: auto 46rem auto;
  grid-template-columns: auto 46rem auto;  
  grid-template-areas:
  
           ". . ."

       ". explorer-div ."
    
           ". . ."
    
  ;

`;
