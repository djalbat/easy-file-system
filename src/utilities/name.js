"use strict";

import { arrayUtilities } from "necessary";

const { second } = arrayUtilities;

export function extensionFromName(name) {
	let extension = null;

	const matches = name.match(/^.*\.([^.]+)$/);

	if (matches !== null) {
		const secondMatch = second(matches);

		extension = secondMatch;  ///
	}

	return extension;
}

export function nameWithoutExtensionFromName(name) {
	let nameWithoutExtension = null;

	const matches = name.match(/^(.+)\.[^.]+$/);

	if (matches !== null) {
		const secondMatch = second(matches);

		nameWithoutExtension = secondMatch;  ///
	}

	return nameWithoutExtension;
}

export function nameIsBeforeEntryDivName(name, entryDivName) {
	let before = (name.localeCompare(entryDivName) < 0);

	const nameExtension = extensionFromName(name),
				entryDivNameExtension = extensionFromName(entryDivName),
				nameWithoutExtension = nameWithoutExtensionFromName(name),
				entryDivNameWithoutExtension = nameWithoutExtensionFromName(entryDivName),
				nameExtensionPresent = (nameExtension !== null),
				entryDivNameExtensionPresent = (entryDivNameExtension !== null),
				nameWithoutExtensionMissing = (nameWithoutExtension === null),
				entryDivNameWithoutExtensionMissing = (entryDivNameWithoutExtension === null),
				extensionsBothPresent = (nameExtensionPresent && entryDivNameExtensionPresent),
				namesWithoutExtensionsBothMissing = (nameWithoutExtensionMissing && entryDivNameWithoutExtensionMissing);

	if (namesWithoutExtensionsBothMissing) {
		///
	} else if (nameWithoutExtensionMissing) {
		before = true;
	} else if (entryDivNameWithoutExtensionMissing) {
		before = false;
	} else {
		if (extensionsBothPresent) {
			const extensionsDiffer = (nameExtension !== entryDivNameExtension);

			if (extensionsDiffer) {
				before = (nameExtension.localeCompare(entryDivNameExtension) < 0);
			}
		} else if (nameExtensionPresent) {
			before = false;
		} else if (entryDivNameExtensionPresent) {
			before = true;
		}
	}

	return before;
}
