# Easy File System

A file system explorer and a rubbish bin.

The file explorer can be populated with file and directory names. It takes handlers for opening files and for moving and removing files an directories. Removing files and directories is done by dragging them into the rubbish bin. Or the explorer element can be altered programmatically.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy RichTextarea](https://github.com/djalbat/easy-richtextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy-DragAndDrop with [npm](https://www.npmjs.com/):

    npm install easy-file-system

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-file-system.git

...and then install the dependencies with npm from within the project's topmost directory:

    npm install

## Usage

When created, the `Explorer` and `RubbishBin` elements can be passed optional handlers:

```
import { Explorer, RubbishBin } from "easy-file-system";

const explorer =

        <Explorer onMove={moveHandler} onOpen={openHandler} />,

      rubbishBin =

        <RubbishBin onRemove={removeHandler} />
      ;

function moveHandler(pathMaps, done) {
  ...
}

function removeHandler(pathMaps, done) {
  ...
}

function openHandler(filePath) {
 ...
}
```

### Adding and removing files and directories

You can add file or empty directory paths:

```
explorer.addDirectoryPath("Explorer/Directory");
explorer.addFilePath("Explorer/Directory/First file.fls");
explorer.addFilePath("Explorer/Directory/Second file.fls");
```

The `addDirectoryPath()` method has a second, optional `collapsed` argument. The default is `false`. The explorer will add the necessary parent directories for you whenever you add a file. If you try to add a file or directory more than once, nothing will happen.

You can also remove files and non-empty directories programmatically:

```
explorer.removeFilePath("Explorer/Directory/Second file.fls", true);
explorer.removeDirectoryPath("Explorer/Directory", false);
```

You cannot remove the topmost directory, and if you try to remove a file or directory more than once, nothing happens.

### Handling opening files

To open a file, so to speak, double click on the entry. When this happens the requisite handlers will be called with the file's path.

```
function openHandler(filePath) {
  console.log(`Open: '${filePath}'.`)
}
```

### Handling moving files and directories

When file and directory entries are moved, the requisite handlers are invoked with two arguments, namely an array of path maps and a `done` callback method. You *must* call the `done()` method when you are done. Each element of the array of path maps is a mutable plain old JavaScript object with `sourcePath`, `targetPath` and `directory` properties. The `directory` property is set to `true` if the entry is a directory. If you want the entry to be moved, leave the object as-is. If you want the entry to be left in place, change the target path to the source path. If you want the entry to be removed, change the target path to `null`. Simply leaving the array of path maps alone with therefore move the entries as expected.

### Handling removing files and directories
  
This is entirely analogous to moving files and directories. In particular, the use of path maps and callback methods is identical. 

## Styles

Styles are by way of [Easy with Style](https://github.com/djalbat/easy-with-style). If you want to override the styles of child elements of the explorer or rubbish bin, import the default elements, override their styles and then set them as static properties on the parent element. For example, if you want to change the style of the explorer's entries list, import it and change its styles thus...

```
import withStyle from "easy-with-style";  ///

import { EntriesList } from "easy-file-system";

export default withStyle(EntriesList)`

  ...
  
`;
```
... and then attach it to the explorer like so:

```
import { Explorer } from "easy-file-system";

import EntriesList from "../list/entries";

export default class extends Explorer {

  ...
  
  static EntriesList = EntriesList;
}
```

The list of elements that can be attached to the explorer is:

 * `EntriesList`
 * `FileNameDragEntryItem`
 * `FileNameMarkerEntryItem`
 * `DirectoryNameDragEntryItem`
 * `DirectoryNameMarkerEntryItem`

The list of elements that can be attached to the rubbish bin is:

 * `OpenRubbishBinDiv`
 * `ClosedRubbishBinDiv`

Similarly for the directory name drag entry item...

 * `NameButton`
 * `ToggleButton`
 * `DirectoryNameSVG`

... and the file name drag entry item:

* `NameButton`

It is necessary to set a minimum width and height on the explorer in order to make it work when there are no entries present. The default is:

```
  width: fit-content;
  min-width: 10rem;
  min-height: 2rem;
```

Note also the `width` style. The other elements also have default styles that are well worth a close look before attempting to set your own.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
