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
    get extensionFromName () {
        return extensionFromName;
    },
    get nameIsBeforeEntryItemName () {
        return nameIsBeforeEntryItemName;
    },
    get nameWithoutExtensionFromName () {
        return nameWithoutExtensionFromName;
    }
});
const _necessary = require("necessary");
const { second } = _necessary.arrayUtilities;
function extensionFromName(name) {
    let extension = null;
    const matches = name.match(/^.*\.([^.]+)$/);
    if (matches !== null) {
        const secondMatch = second(matches);
        extension = secondMatch; ///
    }
    return extension;
}
function nameIsBeforeEntryItemName(name, entryItemName) {
    let before = name.localeCompare(entryItemName) < 0;
    const nameExtension = extensionFromName(name), entryItemNameExtension = extensionFromName(entryItemName), nameWithoutExtension = nameWithoutExtensionFromName(name), entryItemNameWithoutExtension = nameWithoutExtensionFromName(entryItemName), nameExtensionPresent = nameExtension !== null, entryItemNameExtensionPresent = entryItemNameExtension !== null, nameWithoutExtensionMissing = nameWithoutExtension === null, entryItemNameWithoutExtensionMissing = entryItemNameWithoutExtension === null, extensionsBothPresent = nameExtensionPresent && entryItemNameExtensionPresent, namesWithoutExtensionsBothMissing = nameWithoutExtensionMissing && entryItemNameWithoutExtensionMissing;
    if (namesWithoutExtensionsBothMissing) {
    ///
    } else if (nameWithoutExtensionMissing) {
        before = true;
    } else if (entryItemNameWithoutExtensionMissing) {
        before = false;
    } else {
        if (extensionsBothPresent) {
            const extensionsDiffer = nameExtension !== entryItemNameExtension;
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
    let nameWithoutExtension = null;
    const matches = name.match(/^(.+)\.[^.]+$/);
    if (matches !== null) {
        const secondMatch = second(matches);
        nameWithoutExtension = secondMatch; ///
    }
    return nameWithoutExtension;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuc2lvbkZyb21OYW1lKG5hbWUpIHtcblx0bGV0IGV4dGVuc2lvbiA9IG51bGw7XG5cblx0Y29uc3QgbWF0Y2hlcyA9IG5hbWUubWF0Y2goL14uKlxcLihbXi5dKykkLyk7XG5cblx0aWYgKG1hdGNoZXMgIT09IG51bGwpIHtcblx0XHRjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuXHRcdGV4dGVuc2lvbiA9IHNlY29uZE1hdGNoOyAgLy8vXG5cdH1cblxuXHRyZXR1cm4gZXh0ZW5zaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUlzQmVmb3JlRW50cnlJdGVtTmFtZShuYW1lLCBlbnRyeUl0ZW1OYW1lKSB7XG5cdGxldCBiZWZvcmUgPSAobmFtZS5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWUpIDwgMCk7XG5cblx0Y29uc3QgbmFtZUV4dGVuc2lvbiA9IGV4dGVuc2lvbkZyb21OYW1lKG5hbWUpLFxuXHRcdFx0XHRlbnRyeUl0ZW1OYW1lRXh0ZW5zaW9uID0gZXh0ZW5zaW9uRnJvbU5hbWUoZW50cnlJdGVtTmFtZSksXG5cdFx0XHRcdG5hbWVXaXRob3V0RXh0ZW5zaW9uID0gbmFtZVdpdGhvdXRFeHRlbnNpb25Gcm9tTmFtZShuYW1lKSxcblx0XHRcdFx0ZW50cnlJdGVtTmFtZVdpdGhvdXRFeHRlbnNpb24gPSBuYW1lV2l0aG91dEV4dGVuc2lvbkZyb21OYW1lKGVudHJ5SXRlbU5hbWUpLFxuXHRcdFx0XHRuYW1lRXh0ZW5zaW9uUHJlc2VudCA9IChuYW1lRXh0ZW5zaW9uICE9PSBudWxsKSxcblx0XHRcdFx0ZW50cnlJdGVtTmFtZUV4dGVuc2lvblByZXNlbnQgPSAoZW50cnlJdGVtTmFtZUV4dGVuc2lvbiAhPT0gbnVsbCksXG5cdFx0XHRcdG5hbWVXaXRob3V0RXh0ZW5zaW9uTWlzc2luZyA9IChuYW1lV2l0aG91dEV4dGVuc2lvbiA9PT0gbnVsbCksXG5cdFx0XHRcdGVudHJ5SXRlbU5hbWVXaXRob3V0RXh0ZW5zaW9uTWlzc2luZyA9IChlbnRyeUl0ZW1OYW1lV2l0aG91dEV4dGVuc2lvbiA9PT0gbnVsbCksXG5cdFx0XHRcdGV4dGVuc2lvbnNCb3RoUHJlc2VudCA9IChuYW1lRXh0ZW5zaW9uUHJlc2VudCAmJiBlbnRyeUl0ZW1OYW1lRXh0ZW5zaW9uUHJlc2VudCksXG5cdFx0XHRcdG5hbWVzV2l0aG91dEV4dGVuc2lvbnNCb3RoTWlzc2luZyA9IChuYW1lV2l0aG91dEV4dGVuc2lvbk1pc3NpbmcgJiYgZW50cnlJdGVtTmFtZVdpdGhvdXRFeHRlbnNpb25NaXNzaW5nKTtcblxuXHRpZiAobmFtZXNXaXRob3V0RXh0ZW5zaW9uc0JvdGhNaXNzaW5nKSB7XG5cdFx0Ly8vXG5cdH0gZWxzZSBpZiAobmFtZVdpdGhvdXRFeHRlbnNpb25NaXNzaW5nKSB7XG5cdFx0YmVmb3JlID0gdHJ1ZTtcblx0fSBlbHNlIGlmIChlbnRyeUl0ZW1OYW1lV2l0aG91dEV4dGVuc2lvbk1pc3NpbmcpIHtcblx0XHRiZWZvcmUgPSBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRpZiAoZXh0ZW5zaW9uc0JvdGhQcmVzZW50KSB7XG5cdFx0XHRjb25zdCBleHRlbnNpb25zRGlmZmVyID0gKG5hbWVFeHRlbnNpb24gIT09IGVudHJ5SXRlbU5hbWVFeHRlbnNpb24pO1xuXG5cdFx0XHRpZiAoZXh0ZW5zaW9uc0RpZmZlcikge1xuXHRcdFx0XHRiZWZvcmUgPSAobmFtZUV4dGVuc2lvbi5sb2NhbGVDb21wYXJlKGVudHJ5SXRlbU5hbWVFeHRlbnNpb24pIDwgMCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChuYW1lRXh0ZW5zaW9uUHJlc2VudCkge1xuXHRcdFx0YmVmb3JlID0gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChlbnRyeUl0ZW1OYW1lRXh0ZW5zaW9uUHJlc2VudCkge1xuXHRcdFx0YmVmb3JlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYmVmb3JlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZVdpdGhvdXRFeHRlbnNpb25Gcm9tTmFtZShuYW1lKSB7XG5cdGxldCBuYW1lV2l0aG91dEV4dGVuc2lvbiA9IG51bGw7XG5cblx0Y29uc3QgbWF0Y2hlcyA9IG5hbWUubWF0Y2goL14oLispXFwuW14uXSskLyk7XG5cblx0aWYgKG1hdGNoZXMgIT09IG51bGwpIHtcblx0XHRjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuXHRcdG5hbWVXaXRob3V0RXh0ZW5zaW9uID0gc2Vjb25kTWF0Y2g7ICAvLy9cblx0fVxuXG5cdHJldHVybiBuYW1lV2l0aG91dEV4dGVuc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJleHRlbnNpb25Gcm9tTmFtZSIsIm5hbWVJc0JlZm9yZUVudHJ5SXRlbU5hbWUiLCJuYW1lV2l0aG91dEV4dGVuc2lvbkZyb21OYW1lIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJuYW1lIiwiZXh0ZW5zaW9uIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJlbnRyeUl0ZW1OYW1lIiwiYmVmb3JlIiwibG9jYWxlQ29tcGFyZSIsIm5hbWVFeHRlbnNpb24iLCJlbnRyeUl0ZW1OYW1lRXh0ZW5zaW9uIiwibmFtZVdpdGhvdXRFeHRlbnNpb24iLCJlbnRyeUl0ZW1OYW1lV2l0aG91dEV4dGVuc2lvbiIsIm5hbWVFeHRlbnNpb25QcmVzZW50IiwiZW50cnlJdGVtTmFtZUV4dGVuc2lvblByZXNlbnQiLCJuYW1lV2l0aG91dEV4dGVuc2lvbk1pc3NpbmciLCJlbnRyeUl0ZW1OYW1lV2l0aG91dEV4dGVuc2lvbk1pc3NpbmciLCJleHRlbnNpb25zQm90aFByZXNlbnQiLCJuYW1lc1dpdGhvdXRFeHRlbnNpb25zQm90aE1pc3NpbmciLCJleHRlbnNpb25zRGlmZmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFNZ0JBO2VBQUFBOztRQWNBQztlQUFBQTs7UUFxQ0FDO2VBQUFBOzs7MkJBdkRlO0FBRS9CLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRTFCLFNBQVNKLGtCQUFrQkssSUFBSTtJQUNyQyxJQUFJQyxZQUFZO0lBRWhCLE1BQU1DLFVBQVVGLEtBQUtHLEtBQUssQ0FBQztJQUUzQixJQUFJRCxZQUFZLE1BQU07UUFDckIsTUFBTUUsY0FBY04sT0FBT0k7UUFFM0JELFlBQVlHLGFBQWMsR0FBRztJQUM5QjtJQUVBLE9BQU9IO0FBQ1I7QUFFTyxTQUFTTCwwQkFBMEJJLElBQUksRUFBRUssYUFBYTtJQUM1RCxJQUFJQyxTQUFVTixLQUFLTyxhQUFhLENBQUNGLGlCQUFpQjtJQUVsRCxNQUFNRyxnQkFBZ0JiLGtCQUFrQkssT0FDckNTLHlCQUF5QmQsa0JBQWtCVSxnQkFDM0NLLHVCQUF1QmIsNkJBQTZCRyxPQUNwRFcsZ0NBQWdDZCw2QkFBNkJRLGdCQUM3RE8sdUJBQXdCSixrQkFBa0IsTUFDMUNLLGdDQUFpQ0osMkJBQTJCLE1BQzVESyw4QkFBK0JKLHlCQUF5QixNQUN4REssdUNBQXdDSixrQ0FBa0MsTUFDMUVLLHdCQUF5Qkosd0JBQXdCQywrQkFDakRJLG9DQUFxQ0gsK0JBQStCQztJQUV2RSxJQUFJRSxtQ0FBbUM7SUFDdEMsR0FBRztJQUNKLE9BQU8sSUFBSUgsNkJBQTZCO1FBQ3ZDUixTQUFTO0lBQ1YsT0FBTyxJQUFJUyxzQ0FBc0M7UUFDaERULFNBQVM7SUFDVixPQUFPO1FBQ04sSUFBSVUsdUJBQXVCO1lBQzFCLE1BQU1FLG1CQUFvQlYsa0JBQWtCQztZQUU1QyxJQUFJUyxrQkFBa0I7Z0JBQ3JCWixTQUFVRSxjQUFjRCxhQUFhLENBQUNFLDBCQUEwQjtZQUNqRTtRQUNELE9BQU8sSUFBSUcsc0JBQXNCO1lBQ2hDTixTQUFTO1FBQ1YsT0FBTyxJQUFJTywrQkFBK0I7WUFDekNQLFNBQVM7UUFDVjtJQUNEO0lBRUEsT0FBT0E7QUFDUjtBQUVPLFNBQVNULDZCQUE2QkcsSUFBSTtJQUNoRCxJQUFJVSx1QkFBdUI7SUFFM0IsTUFBTVIsVUFBVUYsS0FBS0csS0FBSyxDQUFDO0lBRTNCLElBQUlELFlBQVksTUFBTTtRQUNyQixNQUFNRSxjQUFjTixPQUFPSTtRQUUzQlEsdUJBQXVCTixhQUFjLEdBQUc7SUFDekM7SUFFQSxPQUFPTTtBQUNSIn0=