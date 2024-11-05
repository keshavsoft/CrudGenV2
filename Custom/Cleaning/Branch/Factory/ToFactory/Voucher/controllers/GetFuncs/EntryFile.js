import {
    GetFuncs as GetFuncsRepo,
    GetToScanFuncs as GetToScanFuncsRepo,
    GetToScanOnlyFuncs as GetToScanOnlyFuncsRepo,
    GetSentFuncs as GetSentFuncsRepo,
    GetSentAndFactoryScanFuncs as GetSentAndFactoryScanFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetToScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetToScanFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};
let GetToScanOnlyFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetToScanOnlyFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};
let GetSentFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetSentFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};
let GetSentAndFactoryScanFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetSentAndFactoryScanFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};
export {
    GetFuncs, GetToScanFuncs, GetToScanOnlyFuncs, GetSentFuncs,
    GetSentAndFactoryScanFuncs
};