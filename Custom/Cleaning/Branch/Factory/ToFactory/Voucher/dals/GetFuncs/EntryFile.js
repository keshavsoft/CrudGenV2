import { StartFunc as ReadFromFiles } from '../../kLowDb/ReadFromFiles/entryFile.js';
import { StartFunc as toScan } from '../../kLowDb/ReadFromFiles/toScan.js';
import { StartFunc as toScanOnly } from '../../kLowDb/ReadFromFiles/toScanOnly.js';
import { StartFunc as sent } from '../../kLowDb/ReadFromFiles/sent.js';
import { StartFunc as SentAndFactoryScan } from '../../kLowDb/ReadFromFiles/SentAndFactoryScan.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFromFiles/GetRowData.js';

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
    return sent({ inBranch });
};

let GetSentAndFactoryScanFuncs = ({ inBranch }) => {
    return SentAndFactoryScan({ inBranch });
};

let GetRowDataFuncs = ({ inId }) => {
    return GetRowData({ inId });
};

export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs, GetSentAndFactoryScanFuncs, GetRowDataFuncs
};