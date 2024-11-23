import {
    deleteFunc as deleteFuncRepo

} from '../../repos/DeleteFuncs/EntryFile.js';

let deleteFunc = async (req, res) => {

    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch
    let LocalId = LocalParams.inId

    let LocalFromRepo = await deleteFuncRepo({ inBranch: LocalBranch, inId: LocalId });
    res.json(LocalFromRepo);
};

export { deleteFunc };