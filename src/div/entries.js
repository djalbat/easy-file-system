"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { pathUtilities } from "necessary";

import { FILE_NAME_TYPE, DIRECTORY_NAME_TYPE } from "../types";

const { topmostDirectoryNameFromPath, pathWithoutTopmostDirectoryNameFromPath } = pathUtilities;

class EntriesDiv extends Element {
	getExplorerDiv() {
		const { explorerDiv } = this.properties;

		return explorerDiv;
	}

	getEntryDivs() {
		const childEntryDivElements = this.getChildElements("div.entry"),
					entryDivs = childEntryDivElements;  ///

		return entryDivs;
	}

  isEmpty() {
    const entryDivs = this.getEntryDivs(),
          entryDivsLength = entryDivs.length,
          empty = (entryDivsLength === 0);

    return empty;
  }

  addEntryDiv(entryDiv) {
		const nextEntryDiv = entryDiv,  ///
					previousEntryDiv = this.findEntryDiv((entryDiv) => {
						const nextEntryBeforeEntryDiv = nextEntryDiv.isBefore(entryDiv);

						if (nextEntryBeforeEntryDiv) {
							return true;
						}
					});

		if (previousEntryDiv === null) {
			this.append(entryDiv);
		} else {
			entryDiv.insertBefore(previousEntryDiv);
		}

		entryDiv.didMount && entryDiv.didMount(); ///
	}

  removeEntryDiv(entryDiv) {
    entryDiv.willUnmount && entryDiv.willUnmount();  ///

    entryDiv.remove();
  }

  addFilePath(filePath) {
		let fileNameDragEntryDiv = null;

		const topmostDirectoryName = topmostDirectoryNameFromPath(filePath),
					topmostDirectoryNameDragEntryDiv = this.findTopmostDirectoryNameDragEntryDiv(),
					filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);

		if (topmostDirectoryNameDragEntryDiv !== null) {
			if (filePathWithoutTopmostDirectoryName !== null) {
				const topmostDirectoryNameDragEntryDivName = topmostDirectoryNameDragEntryDiv.getName();

				if (topmostDirectoryName === topmostDirectoryNameDragEntryDivName) {
					filePath = filePathWithoutTopmostDirectoryName; ///

					fileNameDragEntryDiv = topmostDirectoryNameDragEntryDiv.addFilePath(filePath);
				}
			}
		} else {
			if (topmostDirectoryName !== null) {
				let topmostDirectoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(topmostDirectoryName);

				if (topmostDirectoryNameDragEntryDiv === null) {
					const collapsed = true; ///

					topmostDirectoryNameDragEntryDiv = this.createDirectoryNameDragEntryDiv(topmostDirectoryName, collapsed);

					this.addEntryDiv(topmostDirectoryNameDragEntryDiv);
				}

				const filePath = filePathWithoutTopmostDirectoryName; ///

				fileNameDragEntryDiv = topmostDirectoryNameDragEntryDiv.addFilePath(filePath);
			} else {
				const fileName = filePath,  ///
							fileNameDragEntryDivPresent = this.isFileNameDragEntryDivPresent(fileName);

				if (fileNameDragEntryDivPresent) {
					fileNameDragEntryDiv = this.findFileNameDragEntryDiv(fileName);
				} else {
					fileNameDragEntryDiv = this.createFileNameDragEntryDiv(fileName);

					this.addEntryDiv(fileNameDragEntryDiv);
				}
			}
		}

		return fileNameDragEntryDiv;
	}

  removeFilePath(filePath) {
    const topmostDirectoryName = topmostDirectoryNameFromPath(filePath),
          filePathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(filePath);

    if (topmostDirectoryName !== null) {
      const directoryName = topmostDirectoryName, ///
            directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);

      if (directoryNameDragEntryDiv !== null) {
        filePath = filePathWithoutTopmostDirectoryName; ///

        directoryNameDragEntryDiv.removeFilePath(filePath);

        const explorerDiv = this.getExplorerDiv(),
              removeEmptyParentDirectoriesOptionPresent = true; ///explorerDiv.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);

        if (removeEmptyParentDirectoriesOptionPresent) {
          const topmostDirectoryNameDragEntryDiv = this.findTopmostDirectoryNameDragEntryDiv();

          if (directoryNameDragEntryDiv !== topmostDirectoryNameDragEntryDiv) {
            const directoryNameDragEntryDivEmpty = directoryNameDragEntryDiv.isEmpty();

            if (directoryNameDragEntryDivEmpty) {
              this.removeEntryDiv(directoryNameDragEntryDiv);
            }
          }
        }
      }
    } else {
      const fileName = filePath,  ///
            fileNameDragEntryDiv = this.findFileNameDragEntryDiv(fileName);

      if (fileNameDragEntryDiv !== null) {
        this.removeEntryDiv(fileNameDragEntryDiv);
      }
    }
  }

  addDirectoryPath(directoryPath, collapsed = false) {
    let directoryNameDragEntryDiv = null;

    const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath),
          topmostDirectoryNameDragEntryDiv = this.findTopmostDirectoryNameDragEntryDiv(),
          directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);

    if (topmostDirectoryNameDragEntryDiv !== null) {
      if (directoryPathWithoutTopmostDirectoryName !== null) {
        const topmostDirectoryNameDragEntryDivName = topmostDirectoryNameDragEntryDiv.getName();

        if (topmostDirectoryName === topmostDirectoryNameDragEntryDivName) {
          directoryPath = directoryPathWithoutTopmostDirectoryName; ///

          directoryNameDragEntryDiv = topmostDirectoryNameDragEntryDiv.addDirectoryPath(directoryPath, collapsed);
        }
      }
    } else {
      if (topmostDirectoryName !== null) {
        let topmostDirectoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(topmostDirectoryName);

        if (topmostDirectoryNameDragEntryDiv === null) {
          const collapsed = true; ///

          topmostDirectoryNameDragEntryDiv = this.createDirectoryNameDragEntryDiv(topmostDirectoryName, collapsed);

          this.addEntryDiv(topmostDirectoryNameDragEntryDiv);
        }

        const directoryPath = directoryPathWithoutTopmostDirectoryName; ///

        directoryNameDragEntryDiv = topmostDirectoryNameDragEntryDiv.addDirectoryPath(directoryPath, collapsed);
      } else {
        const directoryName = directoryPath,  ///
              directoryNameDragEntryDivPresent = this.isDirectoryNameDragEntryDivPresent(directoryName);

        if (directoryNameDragEntryDivPresent) {
          directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);
        } else {
          directoryNameDragEntryDiv = this.createDirectoryNameDragEntryDiv(directoryName, collapsed);

          this.addEntryDiv(directoryNameDragEntryDiv);
        }

        directoryNameDragEntryDiv.setCollapsed(collapsed);
      }
    }

    return directoryNameDragEntryDiv;
  }

  removeDirectoryPath(directoryPath) {
    const topmostDirectoryName = topmostDirectoryNameFromPath(directoryPath),
          directoryPathWithoutTopmostDirectoryName = pathWithoutTopmostDirectoryNameFromPath(directoryPath);

    if (topmostDirectoryName !== null) {
      const directoryName = topmostDirectoryName, ///
            directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);

      if (directoryNameDragEntryDiv !== null) {
        directoryPath = directoryPathWithoutTopmostDirectoryName; ///

        directoryNameDragEntryDiv.removeDirectoryPath(directoryPath);

        const explorerDiv = this.getExplorerDiv(),
              removeEmptyParentDirectoriesOptionPresent = true; ///explorerDiv.isOptionPresent(REMOVE_EMPTY_PARENT_DIRECTORIES);

        if (removeEmptyParentDirectoriesOptionPresent) {
          const topmostDirectoryNameDragEntryDiv = this.findTopmostDirectoryNameDragEntryDiv();

          if (directoryNameDragEntryDiv !== topmostDirectoryNameDragEntryDiv) {
            const directoryNameDragEntryDivEmpty = directoryNameDragEntryDiv.isEmpty();

            if (directoryNameDragEntryDivEmpty) {
              this.removeEntryDiv(directoryNameDragEntryDiv);
            }
          }
        }
      }
    } else {
      const directoryName = directoryPath,  ///
            directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName);

      if (directoryNameDragEntryDiv !== null) {
        this.removeEntryDiv(directoryNameDragEntryDiv);
      }
    }
  }

  createFileNameDragEntryDiv(fileName) {
		const name = fileName,	///
					explorerDiv = this.getExplorerDiv(),
					FileNameDragEntryDiv = explorerDiv.getFileNameDragEntryDiv(),
					fileNameDragEntryDiv =

						<FileNameDragEntryDiv name={name} explorerDiv={explorerDiv} />

					;

		return fileNameDragEntryDiv;
	}

	createDirectoryNameDragEntryDiv(directoryName, collapsed) {
		const name = directoryName,	///
					explorerDiv = this.getExplorerDiv(),
					DirectoryNameDragEntryDiv = explorerDiv.getDirectoryNameDragEntryDiv(),
					directoryNameDragEntryDiv =

						<DirectoryNameDragEntryDiv name={name} collapsed={collapsed} explorerDiv={explorerDiv} />

					;

		return directoryNameDragEntryDiv;
	}

	isFileNameDragEntryDivPresent(fileName) {
		const fileNameDragEntryDiv = this.findFileNameDragEntryDiv(fileName),
					fileNameDragEntryDivPresent = (fileNameDragEntryDiv !== null);

		return fileNameDragEntryDivPresent;
	}

	isDirectoryNameDragEntryDivPresent(directoryName) {
		const directoryNameDragEntryDiv = this.findDirectoryNameDragEntryDiv(directoryName),
					directoryNameDragEntryDivPresent = (directoryNameDragEntryDiv !== null);

		return directoryNameDragEntryDivPresent;
	}

	retrieveDragEntryDivPath(dragEntryDiv) {
		let dragEntryDivPath = this.findDragEntryDivPath(dragEntryDiv);

		if (dragEntryDivPath === null) {
			this.someDirectoryNameDragEntryDiv((directoryNameDragEntryDiv) => {
				dragEntryDivPath = directoryNameDragEntryDiv.retrieveDragEntryDivPath(dragEntryDiv);

				if (dragEntryDivPath !== null) {
					const directoryNameDragEntryDivName = directoryNameDragEntryDiv.getName();

					dragEntryDivPath = `${directoryNameDragEntryDivName}/${dragEntryDivPath}`;

					return true;
				}
			});
		}

		return dragEntryDivPath;
	}

	someFileNameDragEntryDiv(callback) { return this.someEntryDivByTypes(callback, FILE_NAME_TYPE); }

	forEachFileNameDragEntryDiv(callback) { this.forEachEntryDivByTypes(callback, FILE_NAME_TYPE); }

	someDirectoryNameDragEntryDiv(callback) { return this.someEntryDivByTypes(callback, DIRECTORY_NAME_TYPE); }

	forEachDirectoryNameDragEntryDiv(callback) { this.forEachEntryDivByTypes(callback, DIRECTORY_NAME_TYPE); }

	forEachEntryDivByTypes(callback, ...types) {
		const entryDivs = this.getEntryDivs();

		entryDivs.forEach((entryDiv) => {
			const entryDivType = entryDiv.getType(),
						typesIncludesEntryDivType = types.includes(entryDivType);

			if (typesIncludesEntryDivType) {
				callback(entryDiv);
			}
		});
	}

	someEntryDivByTypes(callback, ...types) {
		const entryDivs = this.getEntryDivs();

		return entryDivs.some((entryDiv) => {
			const entryDivType = entryDiv.getType(),
						typesIncludesEntryDivType = types.includes(entryDivType);

			if (typesIncludesEntryDivType) {
				const result = callback(entryDiv);

				return result;
			}
		});
	}

	forEachEntryDiv(callback) {
		const entryDivs = this.getEntryDivs();

		entryDivs.forEach((entryDiv) => {
			callback(entryDiv);
		});
	}

	someEntryDiv(callback) {
		const entryDivs = this.getEntryDivs();

		return entryDivs.some((entryDiv) => {
			return callback(entryDiv);
		});
	}

	findDragEntryDivPath(dragEntryDiv) {
		let dragEntryDivPath = null;

		this.someEntryDiv((entryDiv) => {
			if (entryDiv === dragEntryDiv) {  ///
				const entryDivName = entryDiv.getName();

				dragEntryDivPath = entryDivName;  ///

				return true;
			}
		});

		return dragEntryDivPath;
	}

	findDragEntryDiv(name) { return this.findEntryDivByNameAndTypes(name, FILE_NAME_TYPE, DIRECTORY_NAME_TYPE); }

	findFileNameDragEntryDiv(fileName) { return this.findEntryDivByNameAndTypes(fileName, FILE_NAME_TYPE); }

	findDirectoryNameDragEntryDiv(directoryName) { return this.findEntryDivByNameAndTypes(directoryName, DIRECTORY_NAME_TYPE); }

	findTopmostDirectoryNameDragEntryDiv() {
		let topmostDirectoryNameDragEntryDiv = null;

		this.someDirectoryNameDragEntryDiv((directoryNameDragEntryDiv) => {
			const directoryNameDragEntryDivTopmost = directoryNameDragEntryDiv.isTopmost();

			if (directoryNameDragEntryDivTopmost) {
				topmostDirectoryNameDragEntryDiv = directoryNameDragEntryDiv;  ///

				return true;
			}
		});

		return topmostDirectoryNameDragEntryDiv;
	}

	findEntryDivByNameAndTypes(name, ...types) {
		const entryDiv = this.findEntryDivByTypes((entryDiv) => {
			const entryDivName = entryDiv.getName();

			if (entryDivName === name) {
				return true;
			}
		}, ...types);

		return entryDiv;
	}

	findEntryDivByTypes(callback, ...types) {
		const entryDivs = this.getEntryDivs(),
					entryDiv = entryDivs.find((entryDiv) => {
						const entryDivType = entryDiv.getType(),
									typesIncludesEntryDivType = types.includes(entryDivType);

						if (typesIncludesEntryDivType) {
							const result = callback(entryDiv);

							if (result) {
								return true;
							}
						}
					}) || null; ///;

		return entryDiv;
	}

	findEntryDivByName(name) {
		const entryDiv = this.findEntryDiv((entryDiv) => {
			const entryDivName = entryDiv.getName();

			if (entryDivName === name) {
				return true;
			}
		});

		return entryDiv;
	}

	findEntryDiv(callback) {
		const entryDivs = this.getEntryDivs(),
					entryDiv = entryDivs.find(callback) || null; ///

		return entryDiv;
	}

	collapse() {
	  this.addClass("collapsed");
  }

	expand() {
	  this.removeClass("collapsed");
  }

	parentContext() {
		const expandEntriesDiv = this.expand.bind(this),  ///
          collapseEntriesDiv = this.collapse.bind(this),  ///
          isEmpty = this.isEmpty.bind(this),
          addFilePath = this.addFilePath.bind(this),
          removeFilePath = this.removeFilePath.bind(this),
          addDirectoryPath = this.addDirectoryPath.bind(this),
          removeDirectoryPath = this.removeDirectoryPath.bind(this),
          retrieveDragEntryDivPath = this.retrieveDragEntryDivPath.bind(this);

		return ({
      expandEntriesDiv,
      collapseEntriesDiv,
      isEmpty,
			addFilePath,
      removeFilePath,
      addDirectoryPath,
      removeDirectoryPath,
			retrieveDragEntryDivPath
		});
	}

	static tagName = "div";

  static defaultProperties = {
    className: "entries"
  };
}

export default withStyle(EntriesDiv)`

  width: fit-content;
  background-color: red;
  
  .collapsed {
    display: none;
  }
      
`;
