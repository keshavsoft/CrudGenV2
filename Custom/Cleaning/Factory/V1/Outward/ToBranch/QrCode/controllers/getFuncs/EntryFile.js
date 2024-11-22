import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;
    let LocalBranchName = LocalParams.inBranchName;

    let LocalFromRepo = GetIdFuncRepo({ inId: LocalId, inBranchName: LocalBranchName });

    res.json(LocalFromRepo);
};

export { GetIdFunc };