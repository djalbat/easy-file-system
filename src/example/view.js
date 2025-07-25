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

  renameCustomHandler = (event, element, pathMaps, done) => {
    console.log("rename", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  createCustomHandler = (event, element, pathMaps, done) => {
    console.log("create", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  selectCustomHandler = (event, element, path, selected, readOnly) => {
    console.log("select", path, selected, readOnly)
  }

  removeCustomHandler = (event, element, pathMaps, done) => {
    console.log("remove", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  moveCustomHandler = (event, element, pathMaps, done) => {
    console.log("move", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  openCustomHandler = (event, element, filePath) => {
    console.log("open", filePath)
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
      <Button onClick={this.renameSelectedPathButtonClickHandler}>
        Rename selected path
      </Button>,
      <Button onClick={this.createFilePathButtonClickHandler}>
        Create file path
      </Button>,
      <Button onClick={this.createDirectoryPathButtonClickHandler}>
        Create directory path
      </Button>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
