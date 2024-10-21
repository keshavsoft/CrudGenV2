import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";
import { StartFunc as ForBackendV4 } from './ForBackendV4/EntryFile.js';
import { StartFunc as ForBackendV5Secured } from './ForBackendV5Secured/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

    LocalFuncForBackEndv4({ inFilesArray: LocalFilesArray });
    LocalFuncForBackEndv5Secured({ inFilesArray: LocalFilesArray });
};

let LocalFuncForBackEndv4 = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/BackEndv4";
    let CommonTo = "binV4";

    ForBackendV4({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });

    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

let LocalFuncForBackEndv5Secured = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src/BackEndv4";
    let CommonTo = "binV5Secured";

    ForBackendV5Secured({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });

    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

export { StartFunc };
