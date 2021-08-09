"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPathTopmostPath = isPathTopmostPath;
var _constants = require("../constants");
function isPathTopmostPath(path) {
    var pathLength = pathLengthFromPath(path), topmostPath = pathLength === 1;
    return topmostPath;
}
function pathLengthFromPath(path) {
    var pathLength;
    if (path === null) {
        pathLength = 0;
    } else {
        var names = path.split(_constants.FORWARD_SLASH), namesLength = names.length;
        pathLength = namesLength; ///
    }
    return pathLength;
}
