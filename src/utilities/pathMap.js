"use strict";

import { EMPTY_STRING } from "../constants";

export function adjustSourcePath(sourcePath, name) {
  if (false) {
    ///
  } else if (sourcePath === EMPTY_STRING) {
    sourcePath = name;  ///
  } else {
    sourcePath = `${sourcePath}/${name}`;
  }

  return sourcePath;
}

export function adjustTargetPath(targetPath, name) {
  if (false) {
    ///
  } else if (targetPath === null) {
    targetPath = null;
  } else if (targetPath === EMPTY_STRING) {
    targetPath = name;  ///
  } else {
    targetPath = `${targetPath}/${name}`;
  }

  return targetPath;
}

export function nonNullPathFromName(name) {
  const path = (name !== null) ?
                  name :  ///
                    EMPTY_STRING;

  return path;
}
