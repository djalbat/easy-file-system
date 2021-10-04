"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adjustSourceEntryPath = adjustSourceEntryPath;
exports.adjustTargetEntryPath = adjustTargetEntryPath;
exports.nonNullPathFromName = nonNullPathFromName;
var _constants = require("../constants");
function adjustSourceEntryPath(sourceEntryPath, name) {
    if (false) {
    ///
    } else if (sourceEntryPath === _constants.EMPTY_STRING) {
        sourceEntryPath = name; ///
    } else {
        sourceEntryPath = "".concat(sourceEntryPath, "/").concat(name);
    }
    return sourceEntryPath;
}
function adjustTargetEntryPath(targetEntryPath, name) {
    if (false) {
    ///
    } else if (targetEntryPath === null) {
        targetEntryPath = null;
    } else if (targetEntryPath === _constants.EMPTY_STRING) {
        targetEntryPath = name; ///
    } else {
        targetEntryPath = "".concat(targetEntryPath, "/").concat(name);
    }
    return targetEntryPath;
}
function nonNullPathFromName(name) {
    var path = name !== null ? name : _constants.EMPTY_STRING;
    return path;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSkge1xuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IEVNUFRZX1NUUklORykge1xuICAgIHNvdXJjZUVudHJ5UGF0aCA9IG5hbWU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBzb3VyY2VFbnRyeVBhdGggPSBgJHtzb3VyY2VFbnRyeVBhdGh9LyR7bmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZUVudHJ5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdFRhcmdldEVudHJ5UGF0aCh0YXJnZXRFbnRyeVBhdGgsIG5hbWUpIHtcbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbDtcbiAgfSBlbHNlIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IEVNUFRZX1NUUklORykge1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IG5hbWU7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRFbnRyeVBhdGggPSBgJHt0YXJnZXRFbnRyeVBhdGh9LyR7bmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldEVudHJ5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbk51bGxQYXRoRnJvbU5hbWUobmFtZSkge1xuICBjb25zdCBwYXRoID0gKG5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIG5hbWUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICByZXR1cm4gcGF0aDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBSUkscUJBQXFCLEdBQXJCLHFCQUFxQjtRQVlyQixxQkFBcUIsR0FBckIscUJBQXFCO1FBY3JCLG1CQUFtQixHQUFuQixtQkFBbUI7SUE1Qk4sVUFBYztTQUUzQixxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsSUFBSTtRQUNyRCxLQUFLO0lBQ1AsRUFBRyxBQUFILENBQUc7ZUFDTSxlQUFlLEtBTEMsVUFBYztRQU12QyxlQUFlLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7UUFFNUIsZUFBZSxNQUF5QixNQUFJLENBQXZCLGVBQWUsR0FBQyxDQUFDLEdBQU8sTUFBQSxDQUFMLElBQUk7O1dBR3ZDLGVBQWU7O1NBR1IscUJBQXFCLENBQUMsZUFBZSxFQUFFLElBQUk7UUFDckQsS0FBSztJQUNQLEVBQUcsQUFBSCxDQUFHO2VBQ00sZUFBZSxLQUFLLElBQUk7UUFDakMsZUFBZSxHQUFHLElBQUk7ZUFDYixlQUFlLEtBbkJDLFVBQWM7UUFvQnZDLGVBQWUsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztRQUU1QixlQUFlLE1BQXlCLE1BQUksQ0FBdkIsZUFBZSxHQUFDLENBQUMsR0FBTyxNQUFBLENBQUwsSUFBSTs7V0FHdkMsZUFBZTs7U0FHUixtQkFBbUIsQ0FBQyxJQUFJO1FBQ2hDLElBQUksR0FBSSxJQUFJLEtBQUssSUFBSSxHQUNYLElBQUksR0E5Qk8sVUFBYztXQWlDbEMsSUFBSSJ9