import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";

import { StartFunc as StartFuncForDatabase } from './ForDatabase/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

    let CommonFrom = "src";

    StartFuncForDatabase({
        inFilesArray: LocalFilesArray,
        inFrom: CommonFrom
    });
};

export { StartFunc };
