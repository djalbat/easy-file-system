"use strict";

export function adjustPath(path, name) {
  path = (path !== null) ?
          `${path}/${name}` :
             name;

  return path;
}
