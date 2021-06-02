"use strict";

import EntriesDiv from "../../../../div/entries";
import FileNameEntryDiv from "../../../../div/entry/fileName";

const CommonEntriesDiv = (properties) =>

  <EntriesDiv>
    <FileNameEntryDiv fileName="package.json" />
    <FileNameEntryDiv fileName=".gitignore" />
    <FileNameEntryDiv fileName="plain.txt" />
    <FileNameEntryDiv fileName="test.jpg" />
  </EntriesDiv>

;

export default CommonEntriesDiv;
