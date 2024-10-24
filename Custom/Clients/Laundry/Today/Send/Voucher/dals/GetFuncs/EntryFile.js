import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';

let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};

export {
    GetFuncs, GetToScanFuncs
};