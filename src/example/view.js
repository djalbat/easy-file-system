"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import RubbishBin from "./view/rubbishBin";
import FirstExplorer from "./view/explorer/first";
import SecondExplorer from "./view/explorer/second";
import EditSelectedButton from "./view/button/editSelected";

const { first, second } = arrayUtilities;

export default class View extends Element {
  clickHandler = (event, element) => {
    const firstExplorer = this.getFirstExplorer(),
          secondExplorer = this.getSecondExplorer();

    firstExplorer.editSelectedPath();
    secondExplorer.editSelectedPath();
  }

  openHandler = (filePath) => {
    console.log("open", filePath)
  }

  moveHandler = (pathMaps, done) => {
    console.log("move", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  removeHandler = (pathMaps, done) => {
    console.log("remove", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  pathChangeHandler = (pathMap, callback) => {
    const success = true;

    callback(success);
  }

  getExplorers() {
    const explorerDivChildElements = this.getChildElements("div.explorer"),
          explorers = explorerDivChildElements; ///

    return explorers;
  }

  getFirstExplorer() {
    const explorers = this.getExplorers(),
          firstExplorer = first(explorers);

    return firstExplorer;
  }

  getSecondExplorer() {
    const explorers = this.getExplorers(),
          secondExplorer = second(explorers);

    return secondExplorer;
  }

  childElements() {
    return ([

      <RubbishBin onRemove={this.removeHandler} />,
      <FirstExplorer onMove={this.moveHandler} onOpen={this.openHandler} onPathChange={this.pathChangeHandler} />,
      <SecondExplorer onMove={this.moveHandler} onOpen={this.openHandler} onPathChange={this.pathChangeHandler} />,
      <EditSelectedButton onClick={this.clickHandler} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
