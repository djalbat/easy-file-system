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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcC5qcyJdLCJuYW1lcyI6WyJFTVBUWV9TVFJJTkciLCJhZGp1c3RTb3VyY2VQYXRoIiwic291cmNlUGF0aCIsIm5hbWUiLCJhZGp1c3RUYXJnZXRQYXRoIiwidGFyZ2V0UGF0aCIsIm5vbk51bGxQYXRoRnJvbU5hbWUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBSUksZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQVloQixnQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBY2hCLG1CQUFtQixHQUFuQixtQkFBbUI7QUE1Qk4sR0FBYyxDQUFkLFVBQWM7U0FFM0IsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xELEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNWLEVBQUcsQUFBSCxDQUFHO0lBQ0wsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEtBTE0sVUFBYyxlQUtELENBQUM7UUFDdkMsVUFBVSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDekIsQ0FBQyxNQUFNLENBQUM7UUFDTixVQUFVLE1BQW9CLE1BQUksQ0FBbEIsVUFBVSxHQUFDLENBQUMsR0FBTyxNQUFBLENBQUwsSUFBSTtJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVU7QUFDbkIsQ0FBQztTQUVlLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsRCxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDVixFQUFHLEFBQUgsQ0FBRztJQUNMLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQy9CLFVBQVUsR0FBRyxJQUFJO0lBQ25CLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBVSxLQW5CTSxVQUFjLGVBbUJELENBQUM7UUFDdkMsVUFBVSxHQUFHLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDekIsQ0FBQyxNQUFNLENBQUM7UUFDTixVQUFVLE1BQW9CLE1BQUksQ0FBbEIsVUFBVSxHQUFDLENBQUMsR0FBTyxNQUFBLENBQUwsSUFBSTtJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVU7QUFDbkIsQ0FBQztTQUVlLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pDLEdBQUssQ0FBQyxJQUFJLEdBQUksSUFBSSxLQUFLLElBQUksR0FDWCxJQUFJLEdBOUJPLFVBQWM7SUFpQ3pDLE1BQU0sQ0FBQyxJQUFJO0FBQ2IsQ0FBQyJ9