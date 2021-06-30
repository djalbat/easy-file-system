"use strict";

import { EMPTY_STRING } from "../constants";

export function adjustPath(path, name) {
  path = (path !== EMPTY_STRING) ?
          `${path}/${name}` :
             name;

  return path;
}
