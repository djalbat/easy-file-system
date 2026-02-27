"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FirstExplorer;
    }
});
const _index = require("../../../index");
class FirstExplorer extends _index.Explorer {
    didMount() {
        const readOnly = true;
        this.addFilePath("directory1/file1.txt", readOnly);
        this.addFilePath("directory1/file2.txt", readOnly);
        this.addDirectoryPath("directory1/directory3", readOnly);
    }
    willUnmount() {
    ///
    }
    static defaultProperties = {
        className: "first",
        reference: "first-explorer",
        references: [
            "rubbish-bin",
            "first-explorer"
        ],
        singleClick: true
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZXhwbG9yZXIvZmlyc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEV4cGxvcmVyIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RFeHBsb3JlciBleHRlbmRzIEV4cGxvcmVyIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgcmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgdGhpcy5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTEvZmlsZTEudHh0XCIsIHJlYWRPbmx5KTtcbiAgICB0aGlzLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5MS9maWxlMi50eHRcIiwgcmVhZE9ubHkpO1xuXG4gICAgdGhpcy5hZGREaXJlY3RvcnlQYXRoKFwiZGlyZWN0b3J5MS9kaXJlY3RvcnkzXCIsIHJlYWRPbmx5KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmaXJzdFwiLFxuICAgIHJlZmVyZW5jZTogXCJmaXJzdC1leHBsb3JlclwiLFxuICAgIHJlZmVyZW5jZXM6IFtcbiAgICAgIFwicnViYmlzaC1iaW5cIixcbiAgICAgIFwiZmlyc3QtZXhwbG9yZXJcIlxuICAgIF0sXG4gICAgc2luZ2xlQ2xpY2s6IHRydWVcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGaXJzdEV4cGxvcmVyIiwiRXhwbG9yZXIiLCJkaWRNb3VudCIsInJlYWRPbmx5IiwiYWRkRmlsZVBhdGgiLCJhZGREaXJlY3RvcnlQYXRoIiwid2lsbFVubW91bnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZXMiLCJzaW5nbGVDbGljayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozt1QkFGSTtBQUVWLE1BQU1BLHNCQUFzQkMsZUFBUTtJQUNqREMsV0FBVztRQUNULE1BQU1DLFdBQVc7UUFFakIsSUFBSSxDQUFDQyxXQUFXLENBQUMsd0JBQXdCRDtRQUN6QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyx3QkFBd0JEO1FBRXpDLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUMseUJBQXlCRjtJQUNqRDtJQUVBRyxjQUFjO0lBQ1osR0FBRztJQUNMO0lBRUEsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsWUFBWTtZQUNWO1lBQ0E7U0FDRDtRQUNEQyxhQUFhO0lBQ2YsRUFBRTtBQUNKIn0=