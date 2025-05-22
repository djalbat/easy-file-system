"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get adjustSourceEntryPath () {
        return adjustSourceEntryPath;
    },
    get adjustTargetEntryPath () {
        return adjustTargetEntryPath;
    },
    get sourceEntryPathFromEntryItem () {
        return sourceEntryPathFromEntryItem;
    },
    get targetEntryPathFromEntryItem () {
        return targetEntryPathFromEntryItem;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var _path = require("../utilities/path");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths;
function sourceEntryPathFromEntryItem(entryItem) {
    var path = entryItem.getPath(), nonNullPathWithoutBottommostName = (0, _path.nonNullPathWithoutBottommostNameFromPath)(path), sourceEntryPath = nonNullPathWithoutBottommostName; ///
    return sourceEntryPath;
}
function targetEntryPathFromEntryItem(entryItem) {
    var path = entryItem.getPath(), nonNullPathWithoutBottommostName = (0, _path.nonNullPathWithoutBottommostNameFromPath)(path), targetEntryPath = nonNullPathWithoutBottommostName; ///
    return targetEntryPath;
}
function adjustSourceEntryPath(sourceEntryPath, name) {
    if (false) {
    ///
    } else if (sourceEntryPath === null) {
        sourceEntryPath = null;
    } else if (sourceEntryPath === _constants.EMPTY_STRING) {
        sourceEntryPath = name; ///
    } else {
        sourceEntryPath = concatenatePaths(sourceEntryPath, name);
    }
    return sourceEntryPath;
}
function adjustTargetEntryPath(targetEntryPath, nameSpanName) {
    if (false) {
    ///
    } else if (targetEntryPath === null) {
        targetEntryPath = null;
    } else if (targetEntryPath === _constants.EMPTY_STRING) {
        targetEntryPath = nameSpanName; ///
    } else {
        targetEntryPath = concatenatePaths(targetEntryPath, nameSpanName);
    }
    return targetEntryPath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICBjb25zdCBwYXRoID0gZW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTsgLy8vXG5cbiAgcmV0dXJuIHNvdXJjZUVudHJ5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gIGNvbnN0IHBhdGggPSBlbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lOyAvLy9cblxuICByZXR1cm4gdGFyZ2V0RW50cnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSkge1xuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICBzb3VyY2VFbnRyeVBhdGggPSBudWxsO1xuICB9IGVsc2UgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgc291cmNlRW50cnlQYXRoID0gbmFtZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VFbnRyeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpIHtcbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBudWxsKSB7XG4gICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbDtcbiAgfSBlbHNlIGlmICh0YXJnZXRFbnRyeVBhdGggPT09IEVNUFRZX1NUUklORykge1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IG5hbWVTcGFuTmFtZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHModGFyZ2V0RW50cnlQYXRoLCBuYW1lU3Bhbk5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldEVudHJ5UGF0aDtcbn1cbiJdLCJuYW1lcyI6WyJhZGp1c3RTb3VyY2VFbnRyeVBhdGgiLCJhZGp1c3RUYXJnZXRFbnRyeVBhdGgiLCJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwiZW50cnlJdGVtIiwicGF0aCIsImdldFBhdGgiLCJub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiRU1QVFlfU1RSSU5HIiwibmFtZVNwYW5OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5QmdCQTtlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBOUJBQztlQUFBQTs7UUFRQUM7ZUFBQUE7Ozt5QkFmYzt5QkFFRDtvQkFDNEI7QUFFekQsSUFBTSxBQUFFQyxtQkFBcUJDLHdCQUFhLENBQWxDRDtBQUVELFNBQVNGLDZCQUE2QkksU0FBUztJQUNwRCxJQUFNQyxPQUFPRCxVQUFVRSxPQUFPLElBQ3hCQyxtQ0FBbUNDLElBQUFBLDhDQUF3QyxFQUFDSCxPQUM1RUksa0JBQWtCRixrQ0FBa0MsR0FBRztJQUU3RCxPQUFPRTtBQUNUO0FBRU8sU0FBU1IsNkJBQTZCRyxTQUFTO0lBQ3BELElBQU1DLE9BQU9ELFVBQVVFLE9BQU8sSUFDeEJDLG1DQUFtQ0MsSUFBQUEsOENBQXdDLEVBQUNILE9BQzVFSyxrQkFBa0JILGtDQUFrQyxHQUFHO0lBRTdELE9BQU9HO0FBQ1Q7QUFFTyxTQUFTWixzQkFBc0JXLGVBQWUsRUFBRUUsSUFBSTtJQUN6RCxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJRixvQkFBb0IsTUFBTTtRQUNuQ0Esa0JBQWtCO0lBQ3BCLE9BQU8sSUFBSUEsb0JBQW9CRyx1QkFBWSxFQUFFO1FBQzNDSCxrQkFBa0JFLE1BQU8sR0FBRztJQUM5QixPQUFPO1FBQ0xGLGtCQUFrQlAsaUJBQWlCTyxpQkFBaUJFO0lBQ3REO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNWLHNCQUFzQlcsZUFBZSxFQUFFRyxZQUFZO0lBQ2pFLElBQUksT0FBTztJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlILG9CQUFvQixNQUFNO1FBQ25DQSxrQkFBa0I7SUFDcEIsT0FBTyxJQUFJQSxvQkFBb0JFLHVCQUFZLEVBQUU7UUFDM0NGLGtCQUFrQkcsY0FBZSxHQUFHO0lBQ3RDLE9BQU87UUFDTEgsa0JBQWtCUixpQkFBaUJRLGlCQUFpQkc7SUFDdEQ7SUFFQSxPQUFPSDtBQUNUIn0=