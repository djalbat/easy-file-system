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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6WyJGT1JXQVJEX1NMQVNIIiwiaXNQYXRoVG9wbW9zdFBhdGgiLCJwYXRoIiwicGF0aExlbmd0aCIsInBhdGhMZW5ndGhGcm9tUGF0aCIsInRvcG1vc3RQYXRoIiwibmFtZXMiLCJzcGxpdCIsIm5hbWVzTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBSUksaUJBQWlCLEdBQWpCLGlCQUFpQjtBQUZILEdBQWMsQ0FBZCxVQUFjO1NBRTVCLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZDLEdBQUssQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxHQUNwQyxXQUFXLEdBQUksVUFBVSxLQUFLLENBQUM7SUFFckMsTUFBTSxDQUFDLFdBQVc7QUFDcEIsQ0FBQztTQUVRLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxVQUFVO0lBRWQsRUFBRSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNsQixVQUFVLEdBQUcsQ0FBQztJQUNoQixDQUFDLE1BQU0sQ0FBQztRQUNOLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FmRSxVQUFjLGlCQWdCbEMsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBRWhDLFVBQVUsR0FBRyxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVTtBQUNuQixDQUFDIn0=