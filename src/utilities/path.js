"use strict";

import { FORWARD_SLASH } from "../constants";

export function isPathTopmostPath(path) {
  const pathLength = pathLengthFromPath(path),
        topmostPath = (pathLength === 1);

  return topmostPath;
}

function pathLengthFromPath(path) {
  let pathLength;

  if (path === null) {
    pathLength = 0;
  } else {
    const names = path.split(FORWARD_SLASH),
          namesLength = names.length;

    pathLength = namesLength; ///
  }

  return pathLength;
}