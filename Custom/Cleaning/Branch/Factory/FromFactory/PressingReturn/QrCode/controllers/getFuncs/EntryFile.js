import {
    GetFunc as GetFuncRepo,
    GetPendingFunc as GetPendingFuncRepo,
    GetScannedFunc as GetScannedFuncRepo,
    GetRowDataFunc as GetRowDataFuncRepo,
    GetRowQrDataFunc as GetRowQrDataFuncRepo,
    GetFromFactoryDcWiseItems as GetFromFactoryDcWiseItemsRepo,
    GetToScanPendingFunc as GetToScanPendingFuncRepo

} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = GetFuncRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = GetPendingFuncRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetScannedFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = GetScannedFuncRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inBranch: LocalBranch, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetRowQrDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowQrDataFuncRepo({ inId: Localid, });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

let GetFromFactoryDcWiseItems = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetFromFactoryDcWiseItemsRepo({ inBranch: LocalBranch, inId: Localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetToScanPendingFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetToScanPendingFuncRepo({ inBranch: LocalBranch, inId: Localid });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc, GetPendingFunc, GetScannedFunc, GetRowDataFunc, GetRowQrDataFunc, GetFromFactoryDcWiseItems, GetToScanPendingFunc
};