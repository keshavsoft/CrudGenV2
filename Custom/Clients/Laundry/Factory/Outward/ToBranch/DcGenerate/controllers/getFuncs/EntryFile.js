import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;

    let LocalFromRepo = await GetIdFuncRepo({ inId: LocalId });

    res.json(LocalFromRepo);
};

export { GetIdFunc };