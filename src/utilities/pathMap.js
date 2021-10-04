"use strict";

import { EMPTY_STRING } from "../constants";

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

export function nonNullPathFromName(name) {
  const path = (name !== null) ?
                  name :  ///
                    EMPTY_STRING;

  return path;
}
