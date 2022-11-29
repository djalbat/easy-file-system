"use strict";

import { pathUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { pathWithoutBottommostNameFromPath } = pathUtilities;

export function nonNullPathWithoutBottommostNameFromPath(path) {
  const pathWithoutBottommostName = pathWithoutBottommostNameFromPath(path),
        nonNullPathWithoutBottommostName = (pathWithoutBottommostName !== null) ?
                                              pathWithoutBottommostName :  ///
                                                EMPTY_STRING;

  return nonNullPathWithoutBottommostName;
}
