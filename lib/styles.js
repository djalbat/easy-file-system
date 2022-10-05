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
    markerSVGMarginLeft: function() {
        return markerSVGMarginLeft;
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
var markerSVGMarginLeft = "3rem";
var toggleSVGPaddingRight = "1rem";
var dragEntryItemFontSize = "1.2rem";
var entryItemDivMinHeight = "2rem";
var entriesListPaddingLeft = "2rem";
var entryItemDivPaddingTop = "1.25rem";
var directoryNameSVGHeight = "2rem";
var fileNameSVGPaddingLeft = "3rem";
var fileNameSVGPaddingRight = "1rem";
var directoryNameSVGPaddingRight = "1rem";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdIZWlnaHQgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCBleHBsb3JlclBhZGRpbmcgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCB0b2dnbGVTVkdIZWlnaHQgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCBmaWxlTmFtZVNWR0hlaWdodCA9IFwiMnJlbVwiO1xuZXhwb3J0IGNvbnN0IHJ1YmJpc2hCaW5TVkdIZWlnaHQgPSBcIjRyZW1cIjtcbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdNYXJnaW5MZWZ0ID0gXCIzcmVtXCI7XG5leHBvcnQgY29uc3QgdG9nZ2xlU1ZHUGFkZGluZ1JpZ2h0ID0gXCIxcmVtXCI7XG5leHBvcnQgY29uc3QgZHJhZ0VudHJ5SXRlbUZvbnRTaXplID0gXCIxLjJyZW1cIjtcbmV4cG9ydCBjb25zdCBlbnRyeUl0ZW1EaXZNaW5IZWlnaHQgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCBlbnRyaWVzTGlzdFBhZGRpbmdMZWZ0ID0gXCIycmVtXCI7XG5leHBvcnQgY29uc3QgZW50cnlJdGVtRGl2UGFkZGluZ1RvcCA9IFwiMS4yNXJlbVwiO1xuZXhwb3J0IGNvbnN0IGRpcmVjdG9yeU5hbWVTVkdIZWlnaHQgPSBcIjJyZW1cIjtcbmV4cG9ydCBjb25zdCBmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0ID0gXCIzcmVtXCI7XG5leHBvcnQgY29uc3QgZmlsZU5hbWVTVkdQYWRkaW5nUmlnaHQgPSBcIjFyZW1cIjtcbmV4cG9ydCBjb25zdCBkaXJlY3RvcnlOYW1lU1ZHUGFkZGluZ1JpZ2h0ID0gXCIxcmVtXCI7XG4iXSwibmFtZXMiOlsibWFya2VyU1ZHSGVpZ2h0IiwiZXhwbG9yZXJQYWRkaW5nIiwidG9nZ2xlU1ZHSGVpZ2h0IiwiZmlsZU5hbWVTVkdIZWlnaHQiLCJydWJiaXNoQmluU1ZHSGVpZ2h0IiwibWFya2VyU1ZHTWFyZ2luTGVmdCIsInRvZ2dsZVNWR1BhZGRpbmdSaWdodCIsImRyYWdFbnRyeUl0ZW1Gb250U2l6ZSIsImVudHJ5SXRlbURpdk1pbkhlaWdodCIsImVudHJpZXNMaXN0UGFkZGluZ0xlZnQiLCJlbnRyeUl0ZW1EaXZQYWRkaW5nVG9wIiwiZGlyZWN0b3J5TmFtZVNWR0hlaWdodCIsImZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQiLCJmaWxlTmFtZVNWR1BhZGRpbmdSaWdodCIsImRpcmVjdG9yeU5hbWVTVkdQYWRkaW5nUmlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVhQSxlQUFlO2VBQWZBOztJQUNBQyxlQUFlO2VBQWZBOztJQUNBQyxlQUFlO2VBQWZBOztJQUNBQyxpQkFBaUI7ZUFBakJBOztJQUNBQyxtQkFBbUI7ZUFBbkJBOztJQUNBQyxtQkFBbUI7ZUFBbkJBOztJQUNBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyxzQkFBc0I7ZUFBdEJBOztJQUNBQyxzQkFBc0I7ZUFBdEJBOztJQUNBQyxzQkFBc0I7ZUFBdEJBOztJQUNBQyxzQkFBc0I7ZUFBdEJBOztJQUNBQyx1QkFBdUI7ZUFBdkJBOztJQUNBQyw0QkFBNEI7ZUFBNUJBOzs7QUFkTixJQUFNZCxrQkFBa0I7QUFDeEIsSUFBTUMsa0JBQWtCO0FBQ3hCLElBQU1DLGtCQUFrQjtBQUN4QixJQUFNQyxvQkFBb0I7QUFDMUIsSUFBTUMsc0JBQXNCO0FBQzVCLElBQU1DLHNCQUFzQjtBQUM1QixJQUFNQyx3QkFBd0I7QUFDOUIsSUFBTUMsd0JBQXdCO0FBQzlCLElBQU1DLHdCQUF3QjtBQUM5QixJQUFNQyx5QkFBeUI7QUFDL0IsSUFBTUMseUJBQXlCO0FBQy9CLElBQU1DLHlCQUF5QjtBQUMvQixJQUFNQyx5QkFBeUI7QUFDL0IsSUFBTUMsMEJBQTBCO0FBQ2hDLElBQU1DLCtCQUErQiJ9