import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';

let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};
let GetToScanOnlyFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};

let GetSentFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};

let GetSentAndFactoryScanFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};

export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs,GetSentFuncs,GetSentAndFactoryScanFuncs
};