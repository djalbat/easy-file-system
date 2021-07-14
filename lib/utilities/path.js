"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPathTopmostPath = isPathTopmostPath;
var _constants = require("../constants");
function isPathTopmostPath(path) {
    var pathLength = pathLengthFromPath(path), topmostPath = pathLength === 1;
    return topmostPath;
}
function pathLengthFromPath(path) {
    var pathLength;
    if (path === null) {
        pathLength = 0;
    } else {
        var names = path.split(_constants.FORWARD_SLASH), namesLength = names.length;
        pathLength = namesLength; ///
    }
    return pathLength;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SV0FSRF9TTEFTSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3RQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aExlbmd0aCA9IHBhdGhMZW5ndGhGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgdG9wbW9zdFBhdGggPSAocGF0aExlbmd0aCA9PT0gMSk7XG5cbiAgcmV0dXJuIHRvcG1vc3RQYXRoO1xufVxuXG5mdW5jdGlvbiBwYXRoTGVuZ3RoRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aExlbmd0aDtcblxuICBpZiAocGF0aCA9PT0gbnVsbCkge1xuICAgIHBhdGhMZW5ndGggPSAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5hbWVzID0gcGF0aC5zcGxpdChGT1JXQVJEX1NMQVNIKSxcbiAgICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aDtcblxuICAgIHBhdGhMZW5ndGggPSBuYW1lc0xlbmd0aDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aExlbmd0aDtcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUlJLGlCQUFpQixHQUFqQixpQkFBaUI7SUFGSCxVQUFjO1NBRTVCLGlCQUFpQixDQUFDLElBQUk7UUFDOUIsVUFBVSxHQUFHLGtCQUFrQixDQUFDLElBQUksR0FDcEMsV0FBVyxHQUFJLFVBQVUsS0FBSyxDQUFDO1dBRTlCLFdBQVc7O1NBR1gsa0JBQWtCLENBQUMsSUFBSTtRQUMxQixVQUFVO1FBRVYsSUFBSSxLQUFLLElBQUk7UUFDZixVQUFVLEdBQUcsQ0FBQzs7WUFFUixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FmRSxVQUFjLGlCQWdCbEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBRWhDLFVBQVUsR0FBRyxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztXQUd4QixVQUFVIn0=