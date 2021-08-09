"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adjustSourcePath = adjustSourcePath;
exports.adjustTargetPath = adjustTargetPath;
exports.nonNullPathFromName = nonNullPathFromName;
var _constants = require("../constants");
function adjustSourcePath(sourcePath, name) {
    if (false) {
    ///
    } else if (sourcePath === _constants.EMPTY_STRING) {
        sourcePath = name; ///
    } else {
        sourcePath = "".concat(sourcePath, "/").concat(name);
    }
    return sourcePath;
}
function adjustTargetPath(targetPath, name) {
    if (false) {
    ///
    } else if (targetPath === null) {
        targetPath = null;
    } else if (targetPath === _constants.EMPTY_STRING) {
        targetPath = name; ///
    } else {
        targetPath = "".concat(targetPath, "/").concat(name);
    }
    return targetPath;
}
function nonNullPathFromName(name) {
    var path = name !== null ? name : _constants.EMPTY_STRING;
    return path;
}
