import { StartFunc as StartFuncForDatabase } from './ForDatabase/EntryFile.js';

let StartFunc = ({ inFilesArray, inDataPk }) => {
    let LocalFilesArray = inFilesArray;

    let CommonFrom = "src";

    StartFuncForDatabase({
        inFilesArray: LocalFilesArray,
        inFrom: CommonFrom,
        inDataPk
    });
};

export { StartFunc };
