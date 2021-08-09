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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0U291cmNlUGF0aChzb3VyY2VQYXRoLCBuYW1lKSB7XG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHNvdXJjZVBhdGggPT09IEVNUFRZX1NUUklORykge1xuICAgIHNvdXJjZVBhdGggPSBuYW1lOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgc291cmNlUGF0aCA9IGAke3NvdXJjZVBhdGh9LyR7bmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RUYXJnZXRQYXRoKHRhcmdldFBhdGgsIG5hbWUpIHtcbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodGFyZ2V0UGF0aCA9PT0gbnVsbCkge1xuICAgIHRhcmdldFBhdGggPSBudWxsO1xuICB9IGVsc2UgaWYgKHRhcmdldFBhdGggPT09IEVNUFRZX1NUUklORykge1xuICAgIHRhcmdldFBhdGggPSBuYW1lOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0UGF0aCA9IGAke3RhcmdldFBhdGh9LyR7bmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25OdWxsUGF0aEZyb21OYW1lKG5hbWUpIHtcbiAgY29uc3QgcGF0aCA9IChuYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBuYW1lIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUlJLGdCQUFnQixHQUFoQixnQkFBZ0I7UUFZaEIsZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQWNoQixtQkFBbUIsR0FBbkIsbUJBQW1CO0lBNUJOLFVBQWM7U0FFM0IsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUk7UUFDM0MsS0FBSztJQUNQLEVBQUcsQUFBSCxDQUFHO2VBQ00sVUFBVSxLQUxNLFVBQWM7UUFNdkMsVUFBVSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O1FBRXZCLFVBQVUsTUFBb0IsTUFBSSxDQUFsQixVQUFVLEdBQUMsQ0FBQyxHQUFPLE1BQUEsQ0FBTCxJQUFJOztXQUc3QixVQUFVOztTQUdILGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJO1FBQzNDLEtBQUs7SUFDUCxFQUFHLEFBQUgsQ0FBRztlQUNNLFVBQVUsS0FBSyxJQUFJO1FBQzVCLFVBQVUsR0FBRyxJQUFJO2VBQ1IsVUFBVSxLQW5CTSxVQUFjO1FBb0J2QyxVQUFVLEdBQUcsSUFBSSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7UUFFdkIsVUFBVSxNQUFvQixNQUFJLENBQWxCLFVBQVUsR0FBQyxDQUFDLEdBQU8sTUFBQSxDQUFMLElBQUk7O1dBRzdCLFVBQVU7O1NBR0gsbUJBQW1CLENBQUMsSUFBSTtRQUNoQyxJQUFJLEdBQUksSUFBSSxLQUFLLElBQUksR0FDWCxJQUFJLEdBOUJPLFVBQWM7V0FpQ2xDLElBQUkifQ==