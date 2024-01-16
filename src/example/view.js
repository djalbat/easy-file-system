"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import Button from "./view/button";
import RubbishBin from "./view/rubbishBin";
import FirstExplorer from "./view/explorer/first";
import SecondExplorer from "./view/explorer/second";

const { first, second } = arrayUtilities;

export default class View extends Element {
  createDirectoryPathButtonClickHandler = (event, element) => {
    const Explorer = this.getFirstExplorer();

    Explorer.createDirectoryPath();
  }

  renameSelectedPathButtonClickHandler = (event, element) => {
    const firstExplorer = this.getFirstExplorer();

    firstExplorer.renameSelectedPath();
  }

  createFilePathButtonClickHandler = (event, element) => {
    const firstExplorer = this.getFirstExplorer();

    firstExplorer.createFilePath();
  }

  renameSelectedButtonClickHandler = (event, element) => {
    const firstExplorer = this.getFirstExplorer();

    firstExplorer.renameSelectedPath();
  }

  openCustomHandler = (filePath, explorer) => {
    console.log("open", filePath)
  }

  moveCustomHandler = (pathMaps, explorer, element, done) => {
    console.log("move", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  removeCustomHandler = (pathMaps, explorer, element, done) => {
    console.log("remove", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  renameCustomHandler = (pathMaps, explorer, element, done) => {
    console.log("rename", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  createCustomHandler = (pathMaps, explorer, element, done) => {
    console.log("create", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  selectCustomHandler = (path, selected, readOnly, explorer) => {
    console.log("select", path, selected, readOnly)
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

      <RubbishBin onCustomRemove={this.removeCustomHandler} />,
      <FirstExplorer onCustomOpen={this.openCustomHandler}
                     onCustomMove={this.moveCustomHandler}
                     onCustomRemove={this.removeCustomHandler}
                     onCustomRename={this.renameCustomHandler}
                     onCustomCreate={this.createCustomHandler}
                     onCustomSelect={this.selectCustomHandler}
      />,
      <SecondExplorer onCustomOpen={this.openCustomHandler}
                      onCustomMove={this.moveCustomHandler}
                      onCustomRename={this.renameCustomHandler}
                      onCustomRemove={this.removeCustomHandler}
                      onCustomCreate={this.createCustomHandler}
      />,
      <Button onClick={this.renameSelectedButtonClickHandler}>
        Rename selected path
      </Button>,
      <Button onClick={this.createFilePathButtonClickHandler}>
        Create file path
      </Button>,
      <Button onClick={this.createDirectoryPathButtonClickHandler}>
        Create directory path
      </Button>,
      <Button onClick={this.renameSelectedPathButtonClickHandler}>
        Rename selected path
      </Button>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
