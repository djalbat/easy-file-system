"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SecondExplorer;
    }
});
const _index = require("../../../index");
class SecondExplorer extends _index.Explorer {
    didMount() {
        this.addFilePath("directory2/file4.txt");
        this.addFilePath("directory2/file5.txt");
    }
    willUnmount() {
    ///
    }
    static defaultProperties = {
        className: "first",
        reference: "second-explorer",
        references: [
            "first-explorer"
        ],
        singleClick: false
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZXhwbG9yZXIvc2Vjb25kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFeHBsb3JlciB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY29uZEV4cGxvcmVyIGV4dGVuZHMgRXhwbG9yZXIge1xuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmFkZEZpbGVQYXRoKFwiZGlyZWN0b3J5Mi9maWxlNC50eHRcIik7XG4gICAgdGhpcy5hZGRGaWxlUGF0aChcImRpcmVjdG9yeTIvZmlsZTUudHh0XCIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZpcnN0XCIsXG4gICAgcmVmZXJlbmNlOiBcInNlY29uZC1leHBsb3JlclwiLFxuICAgIHJlZmVyZW5jZXM6IFtcbiAgICAgIFwiZmlyc3QtZXhwbG9yZXJcIlxuICAgIF0sXG4gICAgc2luZ2xlQ2xpY2s6IGZhbHNlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2Vjb25kRXhwbG9yZXIiLCJFeHBsb3JlciIsImRpZE1vdW50IiwiYWRkRmlsZVBhdGgiLCJ3aWxsVW5tb3VudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlcyIsInNpbmdsZUNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3VCQUZJO0FBRVYsTUFBTUEsdUJBQXVCQyxlQUFRO0lBQ2xEQyxXQUFXO1FBQ1QsSUFBSSxDQUFDQyxXQUFXLENBQUM7UUFDakIsSUFBSSxDQUFDQSxXQUFXLENBQUM7SUFDbkI7SUFFQUMsY0FBYztJQUNaLEdBQUc7SUFDTDtJQUVBLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxXQUFXO1FBQ1hDLFlBQVk7WUFDVjtTQUNEO1FBQ0RDLGFBQWE7SUFDZixFQUFFO0FBQ0oifQ==