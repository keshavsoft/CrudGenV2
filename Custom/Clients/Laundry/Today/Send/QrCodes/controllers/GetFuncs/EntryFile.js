import {
    GetRowDataFunc as GetRowDataFuncRepo,
    GetRowCountFunc as GetRowCountFuncRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inBranch: LocalinBranch, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

let GetRowCountFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalinBranch = LocalParams.inBranch;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowCountFuncRepo({ inBranch: LocalinBranch, inId: Localid, });

    res.status(200).json(LocalFromRepo);
};

export {
    GetRowDataFunc, GetRowCountFunc
};