"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function addDragEntryItem(pathMap, explorer) {
    var entryDirectory = pathMap.entryDirectory;
    entryDirectory ? this.addDirectoryNameDragEntryItem(pathMap, explorer) : this.addFileNameDragEntryItem(pathMap, explorer);
}
function removeDragEntryItem(pathMap, explorer) {
    var entryDirectory = pathMap.entryDirectory;
    entryDirectory ? this.removeDirectoryNameDragEntryItem(pathMap, explorer) : this.removeFileNameDragEntryItem(pathMap, explorer);
}
function addFileNameDragEntryItem(pathMap, explorer) {
    explorer = this; ///
    var targetEntryPath = pathMap.targetEntryPath;
    if (targetEntryPath === null) {
        return;
    }
    var filePath = targetEntryPath; ///
    explorer.addFilePath(filePath);
}
function removeFileNameDragEntryItem(pathMap, explorer) {
    var sourceEntryPath = pathMap.sourceEntryPath;
    if (sourceEntryPath === null) {
        return;
    }
    var filePath = sourceEntryPath; ///
    explorer.removeFilePath(filePath);
}
function addDirectoryNameDragEntryItem(pathMap, explorer) {
    explorer = this; ///
    var targetEntryPath = pathMap.targetEntryPath;
    if (targetEntryPath === null) {
        return;
    }
    var readOnly = pathMap.readOnly, collapsed = pathMap.collapsed, directoryPath = targetEntryPath; ///
    explorer.addDirectoryPath(directoryPath, readOnly, collapsed);
}
function removeDirectoryNameDragEntryItem(pathMap, explorer) {
    var sourceEntryPath = pathMap.sourceEntryPath;
    if (sourceEntryPath === null) {
        return;
    }
    var directoryPath = sourceEntryPath; ///
    explorer.removeDirectoryPath(directoryPath);
}
var dragEntryItemMixins = {
    addDragEntryItem: addDragEntryItem,
    removeDragEntryItem: removeDragEntryItem,
    addFileNameDragEntryItem: addFileNameDragEntryItem,
    removeFileNameDragEntryItem: removeFileNameDragEntryItem,
    addDirectoryNameDragEntryItem: addDirectoryNameDragEntryItem,
    removeDirectoryNameDragEntryItem: removeDirectoryNameDragEntryItem
};
var _default = dragEntryItemMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZHJhZ0VudHJ5SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYWRkRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICBjb25zdCB7IGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gIGVudHJ5RGlyZWN0b3J5ID9cbiAgICB0aGlzLmFkZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSA6XG4gICAgICB0aGlzLmFkZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgY29uc3QgeyBlbnRyeURpcmVjdG9yeSB9ID0gcGF0aE1hcDtcblxuICBlbnRyeURpcmVjdG9yeSA/XG4gICAgdGhpcy5yZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3JlcikgOlxuICAgICAgdGhpcy5yZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRGaWxlTmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgY29uc3QgeyB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGZpbGVQYXRoID0gdGFyZ2V0RW50cnlQYXRoOyAvLy9cblxuICBleHBsb3Jlci5hZGRGaWxlUGF0aChmaWxlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbShwYXRoTWFwLCBleHBsb3Jlcikge1xuICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICBpZiAoc291cmNlRW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZmlsZVBhdGggPSBzb3VyY2VFbnRyeVBhdGg7IC8vL1xuXG4gIGV4cGxvcmVyLnJlbW92ZUZpbGVQYXRoKGZpbGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gYWRkRGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0ocGF0aE1hcCwgZXhwbG9yZXIpIHtcbiAgZXhwbG9yZXIgPSB0aGlzOyAgLy8vXG5cbiAgY29uc3QgeyB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcmVhZE9ubHksIGNvbGxhcHNlZCB9ID0gcGF0aE1hcCxcbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHRhcmdldEVudHJ5UGF0aDsgIC8vL1xuXG4gIGV4cGxvcmVyLmFkZERpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCwgcmVhZE9ubHksIGNvbGxhcHNlZCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtKHBhdGhNYXAsIGV4cGxvcmVyKSB7XG4gIGNvbnN0IHsgc291cmNlRW50cnlQYXRoIH0gPSBwYXRoTWFwO1xuXG4gIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkaXJlY3RvcnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG5cbiAgZXhwbG9yZXIucmVtb3ZlRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcbn1cblxuY29uc3QgZHJhZ0VudHJ5SXRlbU1peGlucyA9IHtcbiAgYWRkRHJhZ0VudHJ5SXRlbSxcbiAgcmVtb3ZlRHJhZ0VudHJ5SXRlbSxcbiAgYWRkRmlsZU5hbWVEcmFnRW50cnlJdGVtLFxuICByZW1vdmVGaWxlTmFtZURyYWdFbnRyeUl0ZW0sXG4gIGFkZERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtLFxuICByZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhZ0VudHJ5SXRlbU1peGlucztcbiJdLCJuYW1lcyI6WyJhZGREcmFnRW50cnlJdGVtIiwicGF0aE1hcCIsImV4cGxvcmVyIiwiZW50cnlEaXJlY3RvcnkiLCJhZGREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImFkZEZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZURyYWdFbnRyeUl0ZW0iLCJyZW1vdmVEaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsInJlbW92ZUZpbGVOYW1lRHJhZ0VudHJ5SXRlbSIsInRhcmdldEVudHJ5UGF0aCIsImZpbGVQYXRoIiwiYWRkRmlsZVBhdGgiLCJzb3VyY2VFbnRyeVBhdGgiLCJyZW1vdmVGaWxlUGF0aCIsInJlYWRPbmx5IiwiY29sbGFwc2VkIiwiZGlyZWN0b3J5UGF0aCIsImFkZERpcmVjdG9yeVBhdGgiLCJyZW1vdmVEaXJlY3RvcnlQYXRoIiwiZHJhZ0VudHJ5SXRlbU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0ZBOzs7ZUFBQTs7O0FBOUVBLFNBQVNBLGlCQUFpQkMsT0FBTyxFQUFFQyxRQUFRO0lBQ3pDLElBQU0sQUFBRUMsaUJBQW1CRixRQUFuQkU7SUFFUkEsaUJBQ0UsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ0gsU0FBU0MsWUFDMUMsSUFBSSxDQUFDRyx3QkFBd0IsQ0FBQ0osU0FBU0M7QUFDN0M7QUFFQSxTQUFTSSxvQkFBb0JMLE9BQU8sRUFBRUMsUUFBUTtJQUM1QyxJQUFNLEFBQUVDLGlCQUFtQkYsUUFBbkJFO0lBRVJBLGlCQUNFLElBQUksQ0FBQ0ksZ0NBQWdDLENBQUNOLFNBQVNDLFlBQzdDLElBQUksQ0FBQ00sMkJBQTJCLENBQUNQLFNBQVNDO0FBQ2hEO0FBRUEsU0FBU0cseUJBQXlCSixPQUFPLEVBQUVDLFFBQVE7SUFDakRBLFdBQVcsSUFBSSxFQUFHLEdBQUc7SUFFckIsSUFBTSxBQUFFTyxrQkFBb0JSLFFBQXBCUTtJQUVSLElBQUlBLG9CQUFvQixNQUFNO1FBQzVCO0lBQ0Y7SUFFQSxJQUFNQyxXQUFXRCxpQkFBaUIsR0FBRztJQUVyQ1AsU0FBU1MsV0FBVyxDQUFDRDtBQUN2QjtBQUVBLFNBQVNGLDRCQUE0QlAsT0FBTyxFQUFFQyxRQUFRO0lBQ3BELElBQU0sQUFBRVUsa0JBQW9CWCxRQUFwQlc7SUFFUixJQUFJQSxvQkFBb0IsTUFBTTtRQUM1QjtJQUNGO0lBRUEsSUFBTUYsV0FBV0UsaUJBQWlCLEdBQUc7SUFFckNWLFNBQVNXLGNBQWMsQ0FBQ0g7QUFDMUI7QUFFQSxTQUFTTiw4QkFBOEJILE9BQU8sRUFBRUMsUUFBUTtJQUN0REEsV0FBVyxJQUFJLEVBQUcsR0FBRztJQUVyQixJQUFNLEFBQUVPLGtCQUFvQlIsUUFBcEJRO0lBRVIsSUFBSUEsb0JBQW9CLE1BQU07UUFDNUI7SUFDRjtJQUVBLElBQVFLLFdBQXdCYixRQUF4QmEsVUFBVUMsWUFBY2QsUUFBZGMsV0FDWkMsZ0JBQWdCUCxpQkFBa0IsR0FBRztJQUUzQ1AsU0FBU2UsZ0JBQWdCLENBQUNELGVBQWVGLFVBQVVDO0FBQ3JEO0FBRUEsU0FBU1IsaUNBQWlDTixPQUFPLEVBQUVDLFFBQVE7SUFDekQsSUFBTSxBQUFFVSxrQkFBb0JYLFFBQXBCVztJQUVSLElBQUlBLG9CQUFvQixNQUFNO1FBQzVCO0lBQ0Y7SUFFQSxJQUFNSSxnQkFBZ0JKLGlCQUFrQixHQUFHO0lBRTNDVixTQUFTZ0IsbUJBQW1CLENBQUNGO0FBQy9CO0FBRUEsSUFBTUcsc0JBQXNCO0lBQzFCbkIsa0JBQUFBO0lBQ0FNLHFCQUFBQTtJQUNBRCwwQkFBQUE7SUFDQUcsNkJBQUFBO0lBQ0FKLCtCQUFBQTtJQUNBRyxrQ0FBQUE7QUFDRjtJQUVBLFdBQWVZIn0=