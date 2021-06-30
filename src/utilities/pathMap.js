"use strict";

import { EMPTY_STRING } from "../constants";

export function adjustPath(path, name) {
  path = (path !== EMPTY_STRING) ?
          `${path}/${name}` :
             name;

  return path;
}

export function nonNullPathFromName(name) {
  const path = (name !== null) ?
                 name :  ///
                   EMPTY_STRING;

  return path;
}
