"use strict";

import { pathUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

export function sourceEntryPathFromDragEntryItemPath(dragEntryItemPath) {
  const dragEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(dragEntryItemPath),
        sourceEntryPath = nonNullPathFromName(dragEntryItemPathWithoutBottommostName); ///

  return sourceEntryPath;
}

export function targetEntryPathFromMarkerEntryItemPath(markerEntryItemPath) {
  const markerEntryItemPathWithoutBottommostName = pathWithoutBottommostNameFromPath(markerEntryItemPath),
        targetEntryPath = nonNullPathFromName(markerEntryItemPathWithoutBottommostName); ///

  return targetEntryPath;
}

export function adjustSourceEntryPath(sourceEntryPath, name) {
  if (false) {
    ///
  } else if (sourceEntryPath === EMPTY_STRING) {
    sourceEntryPath = name;  ///
  } else {
    sourceEntryPath = `${sourceEntryPath}/${name}`;
  }

  return sourceEntryPath;
}

export function adjustTargetEntryPath(targetEntryPath, name) {
  if (false) {
    ///
  } else if (targetEntryPath === null) {
    targetEntryPath = null;
  } else if (targetEntryPath === EMPTY_STRING) {
    targetEntryPath = name;  ///
  } else {
    targetEntryPath = `${targetEntryPath}/${name}`;
  }

  return targetEntryPath;
}

function nonNullPathFromName(name) {
  const path = (name !== null) ?
                  name :  ///
                    EMPTY_STRING;

  return path;
}
