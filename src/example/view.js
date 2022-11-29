"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import Button from "./view/button";
import RubbishBin from "./view/rubbishBin";
import FirstExplorer from "./view/explorer/first";
import SecondExplorer from "./view/explorer/second";

const { first, second } = arrayUtilities;

export default class View extends Element {
  createFilePathButtonClickHandler = (event, element) => {
    const firstExplorer = this.getFirstExplorer();

    firstExplorer.createFilePath();
  }

  createDirectoryPathButtonClickHandler = (event, element) => {
    const Explorer = this.getFirstExplorer();

    Explorer.createDirectoryPath();
  }

  editSelectedPathButtonClickHandler = (event, element) => {
    const firstExplorer = this.getFirstExplorer();

    firstExplorer.editSelectedPath();
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

  renameHandler = (pathMaps, done) => {
    console.log("rename", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  createHandler = (pathMaps, done) => {
    console.log("create", JSON.stringify(pathMaps, null, "  "))

    done();
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
      <FirstExplorer onOpen={this.openHandler}
                     onMove={this.moveHandler}
                     onRemove={this.removeHandler}
                     onRename={this.renameHandler}
                     onCreate={this.createHandler}
      />,
      <SecondExplorer onOpen={this.openHandler}
                      onMove={this.moveHandler}
                      onRemove={this.removeHandler}
                      onRename={this.renameHandler}
                      onCreate={this.createHandler}
      />,
      <Button onClick={this.createFilePathButtonClickHandler}>
        Create file path
      </Button>,
      <Button onClick={this.createDirectoryPathButtonClickHandler}>
        Create directory path
      </Button>,
      <Button onClick={this.editSelectedPathButtonClickHandler}>
        Edit selected path
      </Button>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
