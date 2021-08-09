"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extensionFromName = extensionFromName;
exports.nameIsBeforeEntryItemName = nameIsBeforeEntryItemName;
exports.nameWithoutExtensionFromName = nameWithoutExtensionFromName;
var _necessary = require("necessary");
var second = _necessary.arrayUtilities.second;
function extensionFromName(name) {
    var extension = null;
    var matches = name.match(/^.*\.([^.]+)$/);
    if (matches !== null) {
        var secondMatch = second(matches);
        extension = secondMatch; ///
    }
    return extension;
}
function nameIsBeforeEntryItemName(name, entryItemName) {
    var before = name.localeCompare(entryItemName) < 0;
    var nameExtension = extensionFromName(name), entryItemNameExtension = extensionFromName(entryItemName), nameWithoutExtension = nameWithoutExtensionFromName(name), entryItemNameWithoutExtension = nameWithoutExtensionFromName(entryItemName), nameExtensionPresent = nameExtension !== null, entryItemNameExtensionPresent = entryItemNameExtension !== null, nameWithoutExtensionMissing = nameWithoutExtension === null, entryItemNameWithoutExtensionMissing = entryItemNameWithoutExtension === null, extensionsBothPresent = nameExtensionPresent && entryItemNameExtensionPresent, namesWithoutExtensionsBothMissing = nameWithoutExtensionMissing && entryItemNameWithoutExtensionMissing;
    if (namesWithoutExtensionsBothMissing) {
    ///
    } else if (nameWithoutExtensionMissing) {
        before = true;
    } else if (entryItemNameWithoutExtensionMissing) {
        before = false;
    } else {
        if (extensionsBothPresent) {
            var extensionsDiffer = nameExtension !== entryItemNameExtension;
            if (extensionsDiffer) {
                before = nameExtension.localeCompare(entryItemNameExtension) < 0;
            }
        } else if (nameExtensionPresent) {
            before = false;
        } else if (entryItemNameExtensionPresent) {
            before = true;
        }
    }
    return before;
}
function nameWithoutExtensionFromName(name) {
    var nameWithoutExtension = null;
    var matches = name.match(/^(.+)\.[^.]+$/);
    if (matches !== null) {
        var secondMatch = second(matches);
        nameWithoutExtension = secondMatch; ///
    }
    return nameWithoutExtension;
}
