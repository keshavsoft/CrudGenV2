import {
    GetFuncs as GetFuncsDal,
    GetToScanFuncs as GetToScanFuncsDal,
    GetToScanOnlyFuncs as GetToScanOnlyFuncsDal,
    GetSentFuncs as GetSentFuncsDal,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetToScanFuncs = ({ inBranch }) => {
    return GetToScanFuncsDal({ inBranch });
};

let GetToScanOnlyFuncs = ({ inBranch }) => {
    return GetToScanOnlyFuncsDal({ inBranch });
};
let GetSentFuncs = ({ inBranch }) => {
    return GetSentFuncsDal({ inBranch });
};

let GetSentAndFactoryScanFuncs = ({ inBranch }) => {
    return GetSentAndFactoryScanFuncsDal({ inBranch });
};
export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs,GetSentFuncs,
    GetSentAndFactoryScanFuncs
};