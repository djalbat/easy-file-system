"use strict";

import { pathUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { nonNullPathWithoutBottommostNameFromPath } from "../utilities/path";

const { concatenatePaths } = pathUtilities;

export function sourceEntryPathFromEntryItem(entryItem) {
  const path = entryItem.getPath(),
        nonNullPathWithoutBottommostName = nonNullPathWithoutBottommostNameFromPath(path),
        sourceEntryPath = nonNullPathWithoutBottommostName; ///

  return sourceEntryPath;
}

export function targetEntryPathFromEntryItem(entryItem) {
  const path = entryItem.getPath(),
        nonNullPathWithoutBottommostName = nonNullPathWithoutBottommostNameFromPath(path),
        targetEntryPath = nonNullPathWithoutBottommostName; ///

  return targetEntryPath;
}

export function adjustSourceEntryPath(sourceEntryPath, name) {
  if (false) {
    ///
  } else if (sourceEntryPath === null) {
    sourceEntryPath = null;
  } else if (sourceEntryPath === EMPTY_STRING) {
    sourceEntryPath = name;  ///
  } else {
    sourceEntryPath = concatenatePaths(sourceEntryPath, name);
  }

  return sourceEntryPath;
}

export function adjustTargetEntryPath(targetEntryPath, nameSpanName) {
  if (false) {
    ///
  } else if (targetEntryPath === null) {
    targetEntryPath = null;
  } else if (targetEntryPath === EMPTY_STRING) {
    targetEntryPath = nameSpanName;  ///
  } else {
    targetEntryPath = concatenatePaths(targetEntryPath, nameSpanName);
  }

  return targetEntryPath;
}
