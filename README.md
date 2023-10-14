# Easy File System

A file system explorer and a rubbish bin.

The file explorer can be populated with file and directory paths. It takes handlers for opening files, moving and removing entries and so on.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy RichTextarea](https://github.com/djalbat/easy-richtextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy File System with [npm](https://www.npmjs.com/):

    npm install easy-file-system

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-file-system.git

...and then install the dependencies with npm from within the project's topmost directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

When created, the `Explorer` and `RubbishBin` elements can be passed optional handlers:

```
import { Explorer, RubbishBin } from "easy-file-system";

const explorer =

        <Explorer onMove={moveHandler} onOpen={openHandler} />,

      rubbishBin =

        <RubbishBin onRemove={removeHandler} />
      ;

function moveHandler(pathMaps, explorer, done) {
  ...
  
  done();
}

function removeHandler(pathMaps, explorer, done) {
  ...
  
  done();
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

The `addDirectoryPath()` method has a second, optional `collapsed` argument. The default is `false`. The explorer will add the necessary parent directories for you whenever you add a file or directory. If you try to add a file or directory more than once, nothing will happen.

You can also remove files and non-empty directories programmatically:

```
explorer.removeFilePath("Explorer/Directory/Second file.fls");
explorer.removeDirectoryPath("Explorer/Directory");
```

If you try to remove a file or directory more than once, nothing happens.

### Handling opening files

To open a file, so to speak, double-click on the file name. When this happens the requisite handlers will be called with the file's path.

```
function openHandler(filePath, explorer) {
  console.log(`Open: '${filePath}'.`)
}
```

Note that double-clicking on a directory name on the other hand toggle's the entry's collapsed state. Also note that no callback is passed.

### Handling selecting files and directories

Both file and directory entries can be selected by clicking on the entry's icon. A handler can be set that will be called whenever this happens.

```
function selectedHandler(path, selected, expoorer) {
  console.log(`Open: '${path}'.`)
}
```

Again note that no callback is passed.

### Handling moving files and directories

When file and directory entries are moved, the requisite handlers are invoked with three arguments, namely an array of path maps, a reference to the explorer and a `done` callback method. You *must* call the `done()` method when you are done. Each element of the array of path maps is a mutable plain old JavaScript object with `sourceEntryPath`, `targetEntryPath`, `entryDirectory` and `collapsed` properties. The `entryDirectory` property is set to `true` if the entry is a directory. In the case of file path entries, the latter property is set to `null`. If you want the entry to be moved, leave the object as-is. If you want the entry to be left in place, change the source path to `null`. If you want the entry to be removed, change the target path to `null`. Simply leaving the array of path maps alone with therefore move the entries as expected.

### Handling removing files and directories
  
This is entirely analogous to moving files and directories. In particular, the use of path maps and callback methods is essentially identical. 

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

 * `OpenRubbishBinSVG`
 * `ClosedRubbishBinSVG`

Similarly for the directory name drag entry item, ...

 * `NameSpan`
 * `ToggleButton`
 * `DirectoryNameSVG`

...the file name drag entry item...

* `NameSpan`
* `FileNameSVG`

...and the marker entry item:

* `MarkerSVG`

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
