"use strict";

function addDragEntryItem(pathMap, explorer) {
  const { entryDirectory } = pathMap;

  entryDirectory ?
    this.addDirectoryNameDragEntryItem(pathMap, explorer) :
      this.addFileNameDragEntryItem(pathMap, explorer);
}

function removeDragEntryItem(pathMap, explorer) {
  const { entryDirectory } = pathMap;

  entryDirectory ?
    this.removeDirectoryNameDragEntryItem(pathMap, explorer) :
      this.removeFileNameDragEntryItem(pathMap, explorer);
}

function addFileNameDragEntryItem(pathMap, explorer) {
  const { targetEntryPath } = pathMap;

  if (targetEntryPath === null) {
    return;
  }

  const filePath = targetEntryPath; ///

  this.addFilePath(filePath);
}

function removeFileNameDragEntryItem(pathMap, explorer) {
  const { sourceEntryPath } = pathMap,
        filePath = sourceEntryPath; ///

  explorer.removeFilePath(filePath);
}

function addDirectoryNameDragEntryItem(pathMap, explorer) {
  const { targetEntryPath } = pathMap;

  if (targetEntryPath === null) {
    return;
  }

  const { collapsed } = pathMap,
        directoryPath = targetEntryPath;  ///

  this.addDirectoryPath(directoryPath, collapsed);
}

function removeDirectoryNameDragEntryItem(pathMap, explorer) {
  const { sourceEntryPath } = pathMap,
        directoryPath = sourceEntryPath;  ///

  explorer.removeDirectoryPath(directoryPath);
}

const dragEntryItemMixins = {
  addDragEntryItem,
  removeDragEntryItem,
  addFileNameDragEntryItem,
  removeFileNameDragEntryItem,
  addDirectoryNameDragEntryItem,
  removeDirectoryNameDragEntryItem
};

export default dragEntryItemMixins;
