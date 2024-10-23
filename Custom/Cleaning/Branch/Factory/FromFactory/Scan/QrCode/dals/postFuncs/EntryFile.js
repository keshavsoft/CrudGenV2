import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/FacoryEntryScan/entryFile.js';

let PostFunc = ({ inBranch, inDataInsert }) => {
    let LocalFromLowDb = FacoryEntryScan({ inBranch, inDataInsert });

    return LocalFromLowDb;
};

export {
    PostFunc
};