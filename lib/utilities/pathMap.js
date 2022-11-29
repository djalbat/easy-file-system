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
    sourceEntryPathFromEntryItem: function() {
        return sourceEntryPathFromEntryItem;
    },
    targetEntryPathFromEntryItem: function() {
        return targetEntryPathFromEntryItem;
    },
    adjustSourceEntryPath: function() {
        return adjustSourceEntryPath;
    },
    adjustTargetEntryPath: function() {
        return adjustTargetEntryPath;
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
function adjustTargetEntryPath(targetEntryPath, nameInputName) {
    if (false) {
    ///
    } else if (targetEntryPath === null) {
        targetEntryPath = null;
    } else if (targetEntryPath === _constants.EMPTY_STRING) {
        targetEntryPath = nameInputName; ///
    } else {
        targetEntryPath = concatenatePaths(targetEntryPath, nameInputName);
    }
    return targetEntryPath;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtKGVudHJ5SXRlbSkge1xuICBjb25zdCBwYXRoID0gZW50cnlJdGVtLmdldFBhdGgoKSxcbiAgICAgICAgbm9uTnVsbFBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTsgLy8vXG5cbiAgcmV0dXJuIHNvdXJjZUVudHJ5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldEVudHJ5UGF0aEZyb21FbnRyeUl0ZW0oZW50cnlJdGVtKSB7XG4gIGNvbnN0IHBhdGggPSBlbnRyeUl0ZW0uZ2V0UGF0aCgpLFxuICAgICAgICBub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IG5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lOyAvLy9cblxuICByZXR1cm4gdGFyZ2V0RW50cnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0U291cmNlRW50cnlQYXRoKHNvdXJjZUVudHJ5UGF0aCwgbmFtZSkge1xuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpIHtcbiAgICBzb3VyY2VFbnRyeVBhdGggPSBudWxsO1xuICB9IGVsc2UgaWYgKHNvdXJjZUVudHJ5UGF0aCA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgc291cmNlRW50cnlQYXRoID0gbmFtZTsgIC8vL1xuICB9IGVsc2Uge1xuICAgIHNvdXJjZUVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMoc291cmNlRW50cnlQYXRoLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VFbnRyeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUYXJnZXRFbnRyeVBhdGgodGFyZ2V0RW50cnlQYXRoLCBuYW1lSW5wdXROYW1lKSB7XG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHRhcmdldEVudHJ5UGF0aCA9PT0gbnVsbCkge1xuICAgIHRhcmdldEVudHJ5UGF0aCA9IG51bGw7XG4gIH0gZWxzZSBpZiAodGFyZ2V0RW50cnlQYXRoID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICB0YXJnZXRFbnRyeVBhdGggPSBuYW1lSW5wdXROYW1lOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0RW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyh0YXJnZXRFbnRyeVBhdGgsIG5hbWVJbnB1dE5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldEVudHJ5UGF0aDtcbn1cbiJdLCJuYW1lcyI6WyJzb3VyY2VFbnRyeVBhdGhGcm9tRW50cnlJdGVtIiwidGFyZ2V0RW50cnlQYXRoRnJvbUVudHJ5SXRlbSIsImFkanVzdFNvdXJjZUVudHJ5UGF0aCIsImFkanVzdFRhcmdldEVudHJ5UGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwiZW50cnlJdGVtIiwicGF0aCIsImdldFBhdGgiLCJub25OdWxsUGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSIsIm5vbk51bGxQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgiLCJzb3VyY2VFbnRyeVBhdGgiLCJ0YXJnZXRFbnRyeVBhdGgiLCJuYW1lIiwiRU1QVFlfU1RSSU5HIiwibmFtZUlucHV0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBU2dCQSw0QkFBNEI7ZUFBNUJBOztJQVFBQyw0QkFBNEI7ZUFBNUJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQWNBQyxxQkFBcUI7ZUFBckJBOzs7eUJBckNjO3lCQUVEO29CQUM0QjtBQUV6RCxJQUFNLEFBQUVDLG1CQUFxQkMsd0JBQWEsQ0FBbENEO0FBRUQsU0FBU0osNkJBQTZCTSxTQUFTLEVBQUU7SUFDdEQsSUFBTUMsT0FBT0QsVUFBVUUsT0FBTyxJQUN4QkMsbUNBQW1DQyxJQUFBQSw4Q0FBd0MsRUFBQ0gsT0FDNUVJLGtCQUFrQkYsa0NBQWtDLEdBQUc7SUFFN0QsT0FBT0U7QUFDVDtBQUVPLFNBQVNWLDZCQUE2QkssU0FBUyxFQUFFO0lBQ3RELElBQU1DLE9BQU9ELFVBQVVFLE9BQU8sSUFDeEJDLG1DQUFtQ0MsSUFBQUEsOENBQXdDLEVBQUNILE9BQzVFSyxrQkFBa0JILGtDQUFrQyxHQUFHO0lBRTdELE9BQU9HO0FBQ1Q7QUFFTyxTQUFTVixzQkFBc0JTLGVBQWUsRUFBRUUsSUFBSSxFQUFFO0lBQzNELElBQUksS0FBSyxFQUFFO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSUYsb0JBQW9CLElBQUksRUFBRTtRQUNuQ0Esa0JBQWtCLElBQUk7SUFDeEIsT0FBTyxJQUFJQSxvQkFBb0JHLHVCQUFZLEVBQUU7UUFDM0NILGtCQUFrQkUsTUFBTyxHQUFHO0lBQzlCLE9BQU87UUFDTEYsa0JBQWtCUCxpQkFBaUJPLGlCQUFpQkU7SUFDdEQsQ0FBQztJQUVELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTUixzQkFBc0JTLGVBQWUsRUFBRUcsYUFBYSxFQUFFO0lBQ3BFLElBQUksS0FBSyxFQUFFO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSUgsb0JBQW9CLElBQUksRUFBRTtRQUNuQ0Esa0JBQWtCLElBQUk7SUFDeEIsT0FBTyxJQUFJQSxvQkFBb0JFLHVCQUFZLEVBQUU7UUFDM0NGLGtCQUFrQkcsZUFBZ0IsR0FBRztJQUN2QyxPQUFPO1FBQ0xILGtCQUFrQlIsaUJBQWlCUSxpQkFBaUJHO0lBQ3RELENBQUM7SUFFRCxPQUFPSDtBQUNUIn0=