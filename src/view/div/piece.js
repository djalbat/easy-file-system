"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { controller } from "sufficient";

import Move from "../../move";
import dragMixins from "../../mixins/drag";
import Coordinates from "../../coordinates";
import coordinatesMixins from "../../mixins/coordinates";

import { coordinatesFromTopAndLeft } from "../../utilities/coordinates";
import { pieceDivWidth, pieceDivHeight } from "../../styles";

class PieceDiv extends Element {
  constructor(selector, coordinates) {
    super(selector);

    this.coordinates = coordinates;
  }

  getCollapsedBounds() {
    const bounds = this.getBounds(),
          collapsedBounds = bounds;

    return collapsedBounds;
  }

  getCoordinates() {
    return this.coordinates;
  }

  setCoordinates(coordinates) {
    this.coordinates = coordinates;
  }

  stopDragHandler(relativeMouseTop, relativeMouseLeft) {
    const relativeMouseCoordinates = coordinatesFromTopAndLeft(relativeMouseTop, relativeMouseLeft),
          coordinates = this.coordinates.add(relativeMouseCoordinates),
          coordinatesValid = coordinates.areValid();

    coordinatesValid ?
      this.move(coordinates) :
        this.move(this.coordinates);

    controller.unhighlightMoves();

    controller.enablePieceDivsPointerEvents();
  }

  startDragHandler(relativeMouseTop, relativeMouseLeft) {
    controller.disablePieceDivsPointerEvents();
  }

  mouseOutHandler(event, element) {
    controller.unhighlightMoves();
  }

  mouseOverHandler(event, element) {
    const moves = this.generateMoves();

    controller.highlightMoves(moves);
  }

  enablePointerEvents() {
    this.removeClass("no-pointer-events");
  }

  disablePointerEvents() {
    this.addClass("no-pointer-events");
  }

  generateMoves() {
    const moves = [],
          { directions, maximumMagnitude } = this.constructor;

    for (let magnitude = 1; magnitude <= maximumMagnitude; magnitude++) {
      directions.forEach((direction) => {
        const relativeCoordinates = Coordinates.fromMagnitudeAndDirection(magnitude, direction),
              coordinates = this.coordinates.add(relativeCoordinates),
              coordinatesValid = coordinates.areValid();

        if (coordinatesValid) {
          const pieceDiv = this,  ///
                move = Move.fromPieceDivAndCoordinates(pieceDiv, coordinates);

          moves.push(move);
        }
      });
    }

    return moves;
  }

  move(coordinates) {
    this.coordinates = coordinates;

    this.applyCoordinates(this.coordinates);
  }

  didMount() {
    this.enableDrag();

    this.onStopDrag(this.stopDragHandler, this);

    this.onStartDrag(this.startDragHandler, this);

    this.onMouseOut(this.mouseOutHandler, this);

    this.onMouseOver(this.mouseOverHandler, this);

    this.applyCoordinates(this.coordinates);
  }

  willUnmount() {
    this.disableDrag();

    this.offStopDrag(this.stopDragHandler, this);

    this.offStartDrag(this.startDragHandler, this);

    this.offMouseOver(this.mouseOverHandler, this);

    this.offMouseOut(this.mouseOutHandler, this);
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "piece"
  };

  static fromClass(Class, properties) {
    const { coordinates } = properties,
          pieceDiv = Element.fromClass(Class, properties, coordinates);

    return pieceDiv;
  }
}

Object.assign(PieceDiv.prototype, dragMixins);
Object.assign(PieceDiv.prototype, coordinatesMixins);

export default withStyle(PieceDiv)`

  width: ${pieceDivWidth};
  height: ${pieceDivHeight};
  position: absolute;
  
  .drag {
    z-index: 1;
    position: fixed;
  }
  
  .no-pointer-events {
    pointer-events: none;
  }

`;

