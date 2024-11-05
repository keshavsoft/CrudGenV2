import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';
import { StartFunc as toScanOnly } from '../../kLowDb/ReadFromFiles/toScanOnly.js';

let GetFuncs = ({ inBranch }) => {
    return ReadFromFiles({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return toScan({ inBranch });
};
let GetToScanOnlyFuncs = ({ inBranch }) => {
    return toScanOnly({ inBranch });
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