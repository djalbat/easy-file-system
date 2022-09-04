"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    markerSVGHeight: function() {
        return markerSVGHeight;
    },
    explorerPadding: function() {
        return explorerPadding;
    },
    toggleSVGHeight: function() {
        return toggleSVGHeight;
    },
    fileNameSVGHeight: function() {
        return fileNameSVGHeight;
    },
    rubbishBinSVGHeight: function() {
        return rubbishBinSVGHeight;
    },
    markerSVGPaddingLeft: function() {
        return markerSVGPaddingLeft;
    },
    toggleSVGPaddingRight: function() {
        return toggleSVGPaddingRight;
    },
    dragEntryItemFontSize: function() {
        return dragEntryItemFontSize;
    },
    entryItemDivMinHeight: function() {
        return entryItemDivMinHeight;
    },
    entriesListPaddingLeft: function() {
        return entriesListPaddingLeft;
    },
    entryItemDivPaddingTop: function() {
        return entryItemDivPaddingTop;
    },
    directoryNameSVGHeight: function() {
        return directoryNameSVGHeight;
    },
    fileNameSVGPaddingLeft: function() {
        return fileNameSVGPaddingLeft;
    },
    fileNameSVGPaddingRight: function() {
        return fileNameSVGPaddingRight;
    },
    directoryNameSVGPaddingRight: function() {
        return directoryNameSVGPaddingRight;
    }
});
var markerSVGHeight = "2rem";
var explorerPadding = "2rem";
var toggleSVGHeight = "2rem";
var fileNameSVGHeight = "2rem";
var rubbishBinSVGHeight = "4rem";
var markerSVGPaddingLeft = "3rem";
var toggleSVGPaddingRight = "1rem";
var dragEntryItemFontSize = "1.2rem";
var entryItemDivMinHeight = "2rem";
var entriesListPaddingLeft = "2rem";
var entryItemDivPaddingTop = "1.25rem";
var directoryNameSVGHeight = "2rem";
var fileNameSVGPaddingLeft = "3rem";
var fileNameSVGPaddingRight = "1rem";
var directoryNameSVGPaddingRight = "1rem";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdIZWlnaHQgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCBleHBsb3JlclBhZGRpbmcgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCB0b2dnbGVTVkdIZWlnaHQgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCBmaWxlTmFtZVNWR0hlaWdodCA9IFwiMnJlbVwiO1xuZXhwb3J0IGNvbnN0IHJ1YmJpc2hCaW5TVkdIZWlnaHQgPSBcIjRyZW1cIjtcbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdQYWRkaW5nTGVmdCA9IFwiM3JlbVwiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNWR1BhZGRpbmdSaWdodCA9IFwiMXJlbVwiO1xuZXhwb3J0IGNvbnN0IGRyYWdFbnRyeUl0ZW1Gb250U2l6ZSA9IFwiMS4ycmVtXCI7XG5leHBvcnQgY29uc3QgZW50cnlJdGVtRGl2TWluSGVpZ2h0ID0gXCIycmVtXCI7XG5leHBvcnQgY29uc3QgZW50cmllc0xpc3RQYWRkaW5nTGVmdCA9IFwiMnJlbVwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5SXRlbURpdlBhZGRpbmdUb3AgPSBcIjEuMjVyZW1cIjtcbmV4cG9ydCBjb25zdCBkaXJlY3RvcnlOYW1lU1ZHSGVpZ2h0ID0gXCIycmVtXCI7XG5leHBvcnQgY29uc3QgZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCA9IFwiM3JlbVwiO1xuZXhwb3J0IGNvbnN0IGZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0ID0gXCIxcmVtXCI7XG5leHBvcnQgY29uc3QgZGlyZWN0b3J5TmFtZVNWR1BhZGRpbmdSaWdodCA9IFwiMXJlbVwiO1xuIl0sIm5hbWVzIjpbIm1hcmtlclNWR0hlaWdodCIsImV4cGxvcmVyUGFkZGluZyIsInRvZ2dsZVNWR0hlaWdodCIsImZpbGVOYW1lU1ZHSGVpZ2h0IiwicnViYmlzaEJpblNWR0hlaWdodCIsIm1hcmtlclNWR1BhZGRpbmdMZWZ0IiwidG9nZ2xlU1ZHUGFkZGluZ1JpZ2h0IiwiZHJhZ0VudHJ5SXRlbUZvbnRTaXplIiwiZW50cnlJdGVtRGl2TWluSGVpZ2h0IiwiZW50cmllc0xpc3RQYWRkaW5nTGVmdCIsImVudHJ5SXRlbURpdlBhZGRpbmdUb3AiLCJkaXJlY3RvcnlOYW1lU1ZHSGVpZ2h0IiwiZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCIsImZpbGVOYW1lU1ZHUGFkZGluZ1JpZ2h0IiwiZGlyZWN0b3J5TmFtZVNWR1BhZGRpbmdSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVBQSxlQUFlO2VBQWZBLGVBQWU7O0lBQ2ZDLGVBQWU7ZUFBZkEsZUFBZTs7SUFDZkMsZUFBZTtlQUFmQSxlQUFlOztJQUNmQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFDakJDLG1CQUFtQjtlQUFuQkEsbUJBQW1COztJQUNuQkMsb0JBQW9CO2VBQXBCQSxvQkFBb0I7O0lBQ3BCQyxxQkFBcUI7ZUFBckJBLHFCQUFxQjs7SUFDckJDLHFCQUFxQjtlQUFyQkEscUJBQXFCOztJQUNyQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBQ3JCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFDdEJDLHNCQUFzQjtlQUF0QkEsc0JBQXNCOztJQUN0QkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBQ3RCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsdUJBQXVCOztJQUN2QkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7OztBQWRsQyxJQUFNZCxlQUFlLEdBQUcsTUFBTSxBQUFDO0FBQy9CLElBQU1DLGVBQWUsR0FBRyxNQUFNLEFBQUM7QUFDL0IsSUFBTUMsZUFBZSxHQUFHLE1BQU0sQUFBQztBQUMvQixJQUFNQyxpQkFBaUIsR0FBRyxNQUFNLEFBQUM7QUFDakMsSUFBTUMsbUJBQW1CLEdBQUcsTUFBTSxBQUFDO0FBQ25DLElBQU1DLG9CQUFvQixHQUFHLE1BQU0sQUFBQztBQUNwQyxJQUFNQyxxQkFBcUIsR0FBRyxNQUFNLEFBQUM7QUFDckMsSUFBTUMscUJBQXFCLEdBQUcsUUFBUSxBQUFDO0FBQ3ZDLElBQU1DLHFCQUFxQixHQUFHLE1BQU0sQUFBQztBQUNyQyxJQUFNQyxzQkFBc0IsR0FBRyxNQUFNLEFBQUM7QUFDdEMsSUFBTUMsc0JBQXNCLEdBQUcsU0FBUyxBQUFDO0FBQ3pDLElBQU1DLHNCQUFzQixHQUFHLE1BQU0sQUFBQztBQUN0QyxJQUFNQyxzQkFBc0IsR0FBRyxNQUFNLEFBQUM7QUFDdEMsSUFBTUMsdUJBQXVCLEdBQUcsTUFBTSxBQUFDO0FBQ3ZDLElBQU1DLDRCQUE0QixHQUFHLE1BQU0sQUFBQyJ9