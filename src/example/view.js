"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import ExplorerDiv from "./view/div/explorer";

class View extends Element {
  childElements() {
    return ([

      <ExplorerDiv/>

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
