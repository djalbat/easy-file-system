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

export function nameIsBeforeEntryItemName(name, entryItemName) {
	let before = (name.localeCompare(entryItemName) < 0);

	const nameExtension = extensionFromName(name),
				entryItemNameExtension = extensionFromName(entryItemName),
				nameWithoutExtension = nameWithoutExtensionFromName(name),
				entryItemNameWithoutExtension = nameWithoutExtensionFromName(entryItemName),
				nameExtensionPresent = (nameExtension !== null),
				entryItemNameExtensionPresent = (entryItemNameExtension !== null),
				nameWithoutExtensionMissing = (nameWithoutExtension === null),
				entryItemNameWithoutExtensionMissing = (entryItemNameWithoutExtension === null),
				extensionsBothPresent = (nameExtensionPresent && entryItemNameExtensionPresent),
				namesWithoutExtensionsBothMissing = (nameWithoutExtensionMissing && entryItemNameWithoutExtensionMissing);

	if (namesWithoutExtensionsBothMissing) {
		///
	} else if (nameWithoutExtensionMissing) {
		before = true;
	} else if (entryItemNameWithoutExtensionMissing) {
		before = false;
	} else {
		if (extensionsBothPresent) {
			const extensionsDiffer = (nameExtension !== entryItemNameExtension);

			if (extensionsDiffer) {
				before = (nameExtension.localeCompare(entryItemNameExtension) < 0);
			}
		} else if (nameExtensionPresent) {
			before = false;
		} else if (entryItemNameExtensionPresent) {
			before = true;
		}
	}

	return before;
}
