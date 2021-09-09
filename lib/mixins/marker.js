"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _path = require("../utilities/path");
var _options = require("../options");
function enableMarker() {
    this.onDragOver(dragOverHandler, this);
}
function disableMarker() {
    this.offDragOver(dragOverHandler, this);
}
function dragOverHandler(dragElement, element) {
    var collapsed = this.isCollapsed();
    if (collapsed) {
        return;
    }
    var path = this.getPath(), explorer = this.getExplorer(), dragEntryItem = dragElement, markerEntryItem = this.retrieveMarkerEntryItem(), dragEntryItemIgnored = dragEntryItem.isIgnored(explorer);
    if (dragEntryItemIgnored) {
        return;
    }
    var dragIntoTopmostDirectoriesOnlyOptionPresent = explorer.isOptionPresent(_options.DRAG_INTO_TOPMOST_DIRECTORIES_ONLY_OPTION);
    if (dragIntoTopmostDirectoriesOnlyOptionPresent) {
        var pathTopmostPath = (0, _path).isPathTopmostPath(path);
        if (!pathTopmostPath) {
            return;
        }
    }
    var dragEntryItemName = dragEntryItem.getName(), markerEntryItemPath = markerEntryItem.getPath(), oldMarkerEntryItemPath = markerEntryItemPath, newMarkerEntryItemPath = path === null ? dragEntryItemName : "".concat(path, "/").concat(dragEntryItemName), markerEntryItemExplorer = markerEntryItem.getExplorer(), oldMarkerEntryItemExplorer = markerEntryItemExplorer, newMarkerEntryItemExplorer = explorer; ///
    if (oldMarkerEntryItemExplorer !== newMarkerEntryItemExplorer || oldMarkerEntryItemPath !== newMarkerEntryItemPath) {
        var dragEntryItemType = dragEntryItem.getType(), markerEntryItemPath = newMarkerEntryItemPath; ///
        explorer.removeMarker();
        explorer.addMarker(markerEntryItemPath, dragEntryItemType);
    }
}
var _default = {
    enableMarker: enableMarker,
    disableMarker: disableMarker
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbWFya2VyLmpzIl0sIm5hbWVzIjpbImlzUGF0aFRvcG1vc3RQYXRoIiwiRFJBR19JTlRPX1RPUE1PU1RfRElSRUNUT1JJRVNfT05MWV9PUFRJT04iLCJlbmFibGVNYXJrZXIiLCJvbkRyYWdPdmVyIiwiZHJhZ092ZXJIYW5kbGVyIiwiZGlzYWJsZU1hcmtlciIsIm9mZkRyYWdPdmVyIiwiZHJhZ0VsZW1lbnQiLCJlbGVtZW50IiwiY29sbGFwc2VkIiwiaXNDb2xsYXBzZWQiLCJwYXRoIiwiZ2V0UGF0aCIsImV4cGxvcmVyIiwiZ2V0RXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtIiwibWFya2VyRW50cnlJdGVtIiwicmV0cmlldmVNYXJrZXJFbnRyeUl0ZW0iLCJkcmFnRW50cnlJdGVtSWdub3JlZCIsImlzSWdub3JlZCIsImRyYWdJbnRvVG9wbW9zdERpcmVjdG9yaWVzT25seU9wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJwYXRoVG9wbW9zdFBhdGgiLCJkcmFnRW50cnlJdGVtTmFtZSIsImdldE5hbWUiLCJtYXJrZXJFbnRyeUl0ZW1QYXRoIiwib2xkTWFya2VyRW50cnlJdGVtUGF0aCIsIm5ld01hcmtlckVudHJ5SXRlbVBhdGgiLCJtYXJrZXJFbnRyeUl0ZW1FeHBsb3JlciIsIm9sZE1hcmtlckVudHJ5SXRlbUV4cGxvcmVyIiwibmV3TWFya2VyRW50cnlJdGVtRXhwbG9yZXIiLCJkcmFnRW50cnlJdGVtVHlwZSIsImdldFR5cGUiLCJyZW1vdmVNYXJrZXIiLCJhZGRNYXJrZXIiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXNCLEdBQW1CLENBQW5CLEtBQW1CO0FBQ0ssR0FBWSxDQUFaLFFBQVk7U0FFN0QsWUFBWSxHQUFHLENBQUM7SUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSTtBQUN2QyxDQUFDO1NBRVEsYUFBYSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSTtBQUN4QyxDQUFDO1NBRVEsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM5QyxHQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXO0lBRWxDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU07SUFDUixDQUFDO0lBRUQsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxJQUNuQixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFDM0IsYUFBYSxHQUFHLFdBQVcsRUFDM0IsZUFBZSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsSUFDOUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRO0lBRTdELEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pCLE1BQU07SUFDUixDQUFDO0lBRUQsR0FBSyxDQUFDLDJDQUEyQyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBM0JwQixRQUFZO0lBNkJwRSxFQUFFLEVBQUUsMkNBQTJDLEVBQUUsQ0FBQztRQUNoRCxHQUFLLENBQUMsZUFBZSxPQS9CUyxLQUFtQixvQkErQlAsSUFBSTtRQUU5QyxFQUFFLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFDckIsTUFBTTtRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxPQUFPLElBQ3pDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxPQUFPLElBQzdDLHNCQUFzQixHQUFHLG1CQUFtQixFQUM1QyxzQkFBc0IsR0FBSSxJQUFJLEtBQUssSUFBSSxHQUNaLGlCQUFpQixNQUNKLE1BQWlCLENBQXpCLElBQUksR0FBQyxDQUFDLEdBQW9CLE1BQUEsQ0FBbEIsaUJBQWlCLEdBQ3pELHVCQUF1QixHQUFHLGVBQWUsQ0FBQyxXQUFXLElBQ3JELDBCQUEwQixHQUFHLHVCQUF1QixFQUNwRCwwQkFBMEIsR0FBRyxRQUFRLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRWpELEVBQUUsRUFBRywwQkFBMEIsS0FBSywwQkFBMEIsSUFBTSxzQkFBc0IsS0FBSyxzQkFBc0IsRUFBRyxDQUFDO1FBQ3ZILEdBQUssQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsT0FBTyxJQUN6QyxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFdkQsUUFBUSxDQUFDLFlBQVk7UUFFckIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUI7SUFDM0QsQ0FBQztBQUNILENBQUM7ZUFFYyxDQUFDO0lBQ2QsWUFBWSxFQUFaLFlBQVk7SUFDWixhQUFhLEVBQWIsYUFBYTtBQUNmLENBQUMifQ==