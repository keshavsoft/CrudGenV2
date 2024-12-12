import {
    GetIdFunc as GetIdFuncRepo,
    GetPrintFunc as GetPrintFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = await GetIdFuncRepo({ inId: LocalId, inFactory: LocalFactory });

    res.json(LocalFromRepo);
};

let GetPrintFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;
    let LocalFactory = LocalParams.inFactory;
    let LocalBranch = LocalParams.inBranch;
    let LocalFromRepo = await GetPrintFuncRepo({ inId: LocalId, inFactory: LocalFactory, inBranch: LocalBranch });

    res.json(LocalFromRepo);
};

export { GetIdFunc, GetPrintFunc };