import {
    GetFunc as GetFuncRepo,
    GetQrStatusFunc as GetQrStatusFuncRepo,
    GetRowDataFunc as GetRowDataFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = GetFuncRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

let GetQrStatusFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = GetQrStatusFuncRepo({ inBranch: LocalBranch });

    return res.status(200).json(LocalFromRepo);
};

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inId: Localid });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc
};