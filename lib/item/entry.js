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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _necessary = require("necessary");
const _easy = require("easy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities, { concatenatePaths } = _necessary.pathUtilities;
class EntryItem extends _easy.Element {
    getParentDirectoryNameDragEntryItem() {
        let parentDirectoryNameDragEntryItem = null;
        const height = 2, ascendantDirectoryNameDragEntryItemElements = this.getAscendantElements("li.entry.drag.directory-name", height), ascendantDirectoryNameDragEntryItemElementsLength = ascendantDirectoryNameDragEntryItemElements.length;
        if (ascendantDirectoryNameDragEntryItemElementsLength > 0) {
            const firstAscendantDirectoryNameDragEntryItemElement = first(ascendantDirectoryNameDragEntryItemElements);
            parentDirectoryNameDragEntryItem = firstAscendantDirectoryNameDragEntryItemElement; ///
        }
        return parentDirectoryNameDragEntryItem;
    }
    getPath() {
        let path;
        const name = this.getName(), parentDirectoryNameDragEntryItem = this.getParentDirectoryNameDragEntryItem();
        if (parentDirectoryNameDragEntryItem === null) {
            path = name; ///
        } else {
            const parentDirectoryNameDragEntryItemPath = parentDirectoryNameDragEntryItem.getPath();
            path = concatenatePaths(parentDirectoryNameDragEntryItemPath, name);
        }
        return path;
    }
    getType() {
        const { type } = this.constructor;
        return type;
    }
    getName() {
        const { name } = this.properties;
        return name;
    }
    getExplorer() {
        const { explorer } = this.properties;
        return explorer;
    }
    remove(element = null) {
        super.remove(element);
        if (element === null) {
            this.destroy();
        }
    }
    static tagName = "li";
    static ignoredProperties = [
        "name",
        "explorer"
    ];
    static defaultProperties = {
        className: "entry"
    };
}
const _default = (0, _easywithstyle.default)(EntryItem)`

  width: fit-content;
  display: block;
  list-style: none;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVtL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyeUl0ZW0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKSB7XG4gICAgbGV0IHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtID0gbnVsbDtcblxuICAgIGNvbnN0IGhlaWdodCA9IDIsXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50cyA9IHRoaXMuZ2V0QXNjZW5kYW50RWxlbWVudHMoXCJsaS5lbnRyeS5kcmFnLmRpcmVjdG9yeS1uYW1lXCIsIGhlaWdodCksXG4gICAgICAgICAgYXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50c0xlbmd0aCA9IGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCA9IGZpcnN0KGFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IGZpcnN0QXNjZW5kYW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1FbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgXHRsZXQgcGF0aDtcblxuICBcdGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICBcdFx0XHRwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9IHRoaXMuZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0oKTtcblxuICBcdGlmIChwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSA9PT0gbnVsbCkge1xuICBcdFx0cGF0aCA9IG5hbWU7ICAvLy9cbiAgXHR9IGVsc2Uge1xuICBcdFx0Y29uc3QgcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW1QYXRoID0gcGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0uZ2V0UGF0aCgpO1xuXG4gIFx0XHRwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgsIG5hbWUpO1xuICBcdH1cblxuICBcdHJldHVybiBwYXRoO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IHsgZXhwbG9yZXIgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBleHBsb3JlcjtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50ID0gbnVsbCkge1xuICAgIHN1cGVyLnJlbW92ZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJleHBsb3JlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJlbnRyeVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShFbnRyeUl0ZW0pYFxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJFbnRyeUl0ZW0iLCJFbGVtZW50IiwiZ2V0UGFyZW50RGlyZWN0b3J5TmFtZURyYWdFbnRyeUl0ZW0iLCJwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbSIsImhlaWdodCIsImFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHMiLCJnZXRBc2NlbmRhbnRFbGVtZW50cyIsImFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEFzY2VuZGFudERpcmVjdG9yeU5hbWVEcmFnRW50cnlJdGVtRWxlbWVudCIsImdldFBhdGgiLCJwYXRoIiwibmFtZSIsImdldE5hbWUiLCJwYXJlbnREaXJlY3RvcnlOYW1lRHJhZ0VudHJ5SXRlbVBhdGgiLCJnZXRUeXBlIiwidHlwZSIsInByb3BlcnRpZXMiLCJnZXRFeHBsb3JlciIsImV4cGxvcmVyIiwicmVtb3ZlIiwiZWxlbWVudCIsImRlc3Ryb3kiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUZBOzs7ZUFBQTs7O3NFQWpGc0I7MkJBRXdCO3NCQUV0Qjs7Ozs7O0FBRXhCLE1BQU0sRUFBRUEsS0FBSyxFQUFFLEdBQUdDLHlCQUFjLEVBQzFCLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdDLHdCQUFhO0FBRTFDLE1BQU1DLGtCQUFrQkMsYUFBTztJQUM3QkMsc0NBQXNDO1FBQ3BDLElBQUlDLG1DQUFtQztRQUV2QyxNQUFNQyxTQUFTLEdBQ1RDLDhDQUE4QyxJQUFJLENBQUNDLG9CQUFvQixDQUFDLGdDQUFnQ0YsU0FDeEdHLG9EQUFvREYsNENBQTRDRyxNQUFNO1FBRTVHLElBQUlELG9EQUFvRCxHQUFHO1lBQ3pELE1BQU1FLGtEQUFrRGIsTUFBTVM7WUFFOURGLG1DQUFtQ00saURBQWtELEdBQUc7UUFDMUY7UUFFQSxPQUFPTjtJQUNUO0lBRUFPLFVBQVU7UUFDVCxJQUFJQztRQUVKLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ3JCVixtQ0FBbUMsSUFBSSxDQUFDRCxtQ0FBbUM7UUFFL0UsSUFBSUMscUNBQXFDLE1BQU07WUFDOUNRLE9BQU9DLE1BQU8sR0FBRztRQUNsQixPQUFPO1lBQ04sTUFBTUUsdUNBQXVDWCxpQ0FBaUNPLE9BQU87WUFFckZDLE9BQU9iLGlCQUFpQmdCLHNDQUFzQ0Y7UUFDL0Q7UUFFQSxPQUFPRDtJQUNSO0lBRUFJLFVBQVU7UUFDUixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBRWpDLE9BQU9BO0lBQ1Q7SUFFQUgsVUFBVTtRQUNSLE1BQU0sRUFBRUQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDSyxVQUFVO1FBRWhDLE9BQU9MO0lBQ1Q7SUFFQU0sY0FBYztRQUNaLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDRixVQUFVO1FBRXBDLE9BQU9FO0lBQ1Q7SUFFQUMsT0FBT0MsVUFBVSxJQUFJLEVBQUU7UUFDckIsS0FBSyxDQUFDRCxPQUFPQztRQUViLElBQUlBLFlBQVksTUFBTTtZQUNwQixJQUFJLENBQUNDLE9BQU87UUFDZDtJQUNGO0lBRUEsT0FBT0MsVUFBVSxLQUFLO0lBRXRCLE9BQU9DLG9CQUFvQjtRQUN6QjtRQUNBO0tBQ0QsQ0FBQztJQUVGLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMzQixVQUFVLENBQUM7Ozs7OztBQU1wQyxDQUFDIn0=