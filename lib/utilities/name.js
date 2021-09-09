"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extensionFromName = extensionFromName;
exports.nameIsBeforeEntryItemName = nameIsBeforeEntryItemName;
exports.nameWithoutExtensionFromName = nameWithoutExtensionFromName;
var _necessary = require("necessary");
var second = _necessary.arrayUtilities.second;
function extensionFromName(name) {
    var extension = null;
    var matches = name.match(/^.*\.([^.]+)$/);
    if (matches !== null) {
        var secondMatch = second(matches);
        extension = secondMatch; ///
    }
    return extension;
}
function nameIsBeforeEntryItemName(name, entryItemName) {
    var before = name.localeCompare(entryItemName) < 0;
    var nameExtension = extensionFromName(name), entryItemNameExtension = extensionFromName(entryItemName), nameWithoutExtension = nameWithoutExtensionFromName(name), entryItemNameWithoutExtension = nameWithoutExtensionFromName(entryItemName), nameExtensionPresent = nameExtension !== null, entryItemNameExtensionPresent = entryItemNameExtension !== null, nameWithoutExtensionMissing = nameWithoutExtension === null, entryItemNameWithoutExtensionMissing = entryItemNameWithoutExtension === null, extensionsBothPresent = nameExtensionPresent && entryItemNameExtensionPresent, namesWithoutExtensionsBothMissing = nameWithoutExtensionMissing && entryItemNameWithoutExtensionMissing;
    if (namesWithoutExtensionsBothMissing) {
    ///
    } else if (nameWithoutExtensionMissing) {
        before = true;
    } else if (entryItemNameWithoutExtensionMissing) {
        before = false;
    } else {
        if (extensionsBothPresent) {
            var extensionsDiffer = nameExtension !== entryItemNameExtension;
            if (extensionsDiffer) {
                before = nameExtension.localeCompare(entryItemNameExtension) < 0;
            }
        } else if (nameExtensionPresent) {
            before = false;
        } else if (entryItemNameExtensionPresent) {
            before = true;
        }
    }
    return before;
}
function nameWithoutExtensionFromName(name) {
    var nameWithoutExtension = null;
    var matches = name.match(/^(.+)\.[^.]+$/);
    if (matches !== null) {
        var secondMatch = second(matches);
        nameWithoutExtension = secondMatch; ///
    }
    return nameWithoutExtension;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsImV4dGVuc2lvbkZyb21OYW1lIiwibmFtZSIsImV4dGVuc2lvbiIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwibmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZSIsImVudHJ5SXRlbU5hbWUiLCJiZWZvcmUiLCJsb2NhbGVDb21wYXJlIiwibmFtZUV4dGVuc2lvbiIsImVudHJ5SXRlbU5hbWVFeHRlbnNpb24iLCJuYW1lV2l0aG91dEV4dGVuc2lvbiIsIm5hbWVXaXRob3V0RXh0ZW5zaW9uRnJvbU5hbWUiLCJlbnRyeUl0ZW1OYW1lV2l0aG91dEV4dGVuc2lvbiIsIm5hbWVFeHRlbnNpb25QcmVzZW50IiwiZW50cnlJdGVtTmFtZUV4dGVuc2lvblByZXNlbnQiLCJuYW1lV2l0aG91dEV4dGVuc2lvbk1pc3NpbmciLCJlbnRyeUl0ZW1OYW1lV2l0aG91dEV4dGVuc2lvbk1pc3NpbmciLCJleHRlbnNpb25zQm90aFByZXNlbnQiLCJuYW1lc1dpdGhvdXRFeHRlbnNpb25zQm90aE1pc3NpbmciLCJleHRlbnNpb25zRGlmZmVyIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksaUJBQWlCLEdBQWpCLGlCQUFpQjtRQWNqQix5QkFBeUIsR0FBekIseUJBQXlCO1FBcUN6Qiw0QkFBNEIsR0FBNUIsNEJBQTRCO0FBdkRiLEdBQVcsQ0FBWCxVQUFXO0FBRTFDLEdBQUssQ0FBRyxNQUFNLEdBRmlCLFVBQVcsZ0JBRWxDLE1BQU07U0FFRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUk7SUFFcEIsR0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSztJQUUxQixFQUFFLEVBQUUsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3RCLEdBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFFbEMsU0FBUyxHQUFHLFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTO0FBQ2pCLENBQUM7U0FFZSx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDL0QsR0FBRyxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxDQUFDO0lBRW5ELEdBQUssQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxHQUN6QyxzQkFBc0IsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLEdBQ3hELG9CQUFvQixHQUFHLDRCQUE0QixDQUFDLElBQUksR0FDeEQsNkJBQTZCLEdBQUcsNEJBQTRCLENBQUMsYUFBYSxHQUMxRSxvQkFBb0IsR0FBSSxhQUFhLEtBQUssSUFBSSxFQUM5Qyw2QkFBNkIsR0FBSSxzQkFBc0IsS0FBSyxJQUFJLEVBQ2hFLDJCQUEyQixHQUFJLG9CQUFvQixLQUFLLElBQUksRUFDNUQsb0NBQW9DLEdBQUksNkJBQTZCLEtBQUssSUFBSSxFQUM5RSxxQkFBcUIsR0FBSSxvQkFBb0IsSUFBSSw2QkFBNkIsRUFDOUUsaUNBQWlDLEdBQUksMkJBQTJCLElBQUksb0NBQW9DO0lBRTNHLEVBQUUsRUFBRSxpQ0FBaUMsRUFBRSxDQUFDO0lBQ3ZDLEVBQUcsQUFBSCxDQUFHO0lBQ0osQ0FBQyxNQUFNLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sR0FBRyxJQUFJO0lBQ2QsQ0FBQyxNQUFNLEVBQUUsRUFBRSxvQ0FBb0MsRUFBRSxDQUFDO1FBQ2pELE1BQU0sR0FBRyxLQUFLO0lBQ2YsQ0FBQyxNQUFNLENBQUM7UUFDUCxFQUFFLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztZQUMzQixHQUFLLENBQUMsZ0JBQWdCLEdBQUksYUFBYSxLQUFLLHNCQUFzQjtZQUVsRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDdEIsTUFBTSxHQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLElBQUksQ0FBQztZQUNsRSxDQUFDO1FBQ0YsQ0FBQyxNQUFNLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sR0FBRyxLQUFLO1FBQ2YsQ0FBQyxNQUFNLEVBQUUsRUFBRSw2QkFBNkIsRUFBRSxDQUFDO1lBQzFDLE1BQU0sR0FBRyxJQUFJO1FBQ2QsQ0FBQztJQUNGLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTTtBQUNkLENBQUM7U0FFZSw0QkFBNEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSTtJQUUvQixHQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLO0lBRTFCLEVBQUUsRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdEIsR0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTztRQUVsQyxvQkFBb0IsR0FBRyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQ3pDLENBQUM7SUFFRCxNQUFNLENBQUMsb0JBQW9CO0FBQzVCLENBQUMifQ==