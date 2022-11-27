"use strict";

import { pathUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { concatenatePaths, pathWithoutBottommostNameFromPath } = pathUtilities;

export function sourceEntryPathFromEntryItem(entryItem) {
  const entryItemPath = entryItem.getPath(),
        entryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(entryItemPath),
        sourceEntryPath = nonNullPathFromName(entryItemPathWithoutBottommostName); ///

  return sourceEntryPath;
}

export function targetEntryPathFromEntryItem(entryItem) {
  const entryItemPath = entryItem.getPath(),
        entryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(entryItemPath),
        targetEntryPath = nonNullPathFromName(entryItemPathWithoutBottommostName); ///

  return targetEntryPath;
}

export function adjustSourceEntryPath(sourceEntryPath, name) {
  if (false) {
    ///
  } else if (sourceEntryPath === EMPTY_STRING) {
    sourceEntryPath = name;  ///
  } else {
    sourceEntryPath = concatenatePaths(sourceEntryPath, name);
  }

  return sourceEntryPath;
}

export function adjustTargetEntryPath(targetEntryPath, nameInputName) {
  if (false) {
    ///
  } else if (targetEntryPath === null) {
    targetEntryPath = null;
  } else if (targetEntryPath === EMPTY_STRING) {
    targetEntryPath = nameInputName;  ///
  } else {
    targetEntryPath = concatenatePaths(targetEntryPath, nameInputName);
  }

  return targetEntryPath;
}

function nonNullPathFromName(name) {
  const path = (name !== null) ?
                  name :  ///
                    EMPTY_STRING;

  return path;
}
