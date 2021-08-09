"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _path = require("../utilities/path");
var _options = require("../options");
function enableMarker() {
    this.onDragOver(dragOverHandler, this);
}
function disableMarker() {
    this.offDragOver(dragOverHandler, this);
}
function dragOverHandler(dragElement, element) {
    var collapsed = this.isCollapsed();
    if (collapsed) {
        return;
    }
    var path = this.getPath(), explorer = this.getExplorer(), dragEntryItem = dragElement, markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);
    if (dragEntryItemIgnored) {
        return;
    }
    var dragIntoTopmostDirectoriesOnlyOptionPresent = explorer.isOptionPresent(_options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY);
    if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
        var pathTopmostPath = (0, _path).isPathTopmostPath(path);
        if (!pathTopmostPath) {
            return;
        }
    }
    var dragEntryItemName = dragEntryItem.getName(), markerEntryItemPath = markerEntryItem.getPath(), oldMarkerEntryItemPath = markerEntryItemPath, newMarkerEntryItemPath = path === null ? dragEntryItemName : "".concat(path, "/").concat(dragEntryItemName), markerEntryItemExplorer = markerEntryItem.getExplorer(), oldMarkerEntryItemExplorer = markerEntryItemExplorer, newMarkerEntryItemExplorer = explorer; ///
    if (oldMarkerEntryItemExplorer !== newMarkerEntryItemExplorer || oldMarkerEntryItemPath !== newMarkerEntryItemPath) {
        var dragEntryItemType = dragEntryItem.getType(), markerEntryItemPath1 = newMarkerEntryItemPath; ///
        explorer.removeMarker();
        explorer.addMarker(markerEntryItemPath1, dragEntryItemType);
    }
}
var _default = {
    enableMarker: enableMarker,
    disableMarker: disableMarker
};
exports.default = _default;
