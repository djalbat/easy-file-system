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

  openHandler = (filePath, explorer) => {
    console.log("open", filePath)
  }

  moveHandler = (pathMaps, explorer, done) => {
    console.log("move", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  removeHandler = (pathMaps, explorer, done) => {
    console.log("remove", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  renameHandler = (pathMaps, explorer, done) => {
    console.log("rename", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  createHandler = (pathMaps, explorer, done) => {
    console.log("create", JSON.stringify(pathMaps, null, "  "))

    done();
  }

  selectHandler = (path, selected, readOnly, explorer) => {
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

      <RubbishBin onRemove={this.removeHandler} />,
      <FirstExplorer onOpen={this.openHandler}
                     onMove={this.moveHandler}
                     onRemove={this.removeHandler}
                     onRename={this.renameHandler}
                     onCreate={this.createHandler}
                     onSelect={this.selectHandler}
      />,
      <SecondExplorer onOpen={this.openHandler}
                      onMove={this.moveHandler}
                      onRename={this.renameHandler}
                      onRemove={this.removeHandler}
                      onCreate={this.createHandler}
      />,
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
