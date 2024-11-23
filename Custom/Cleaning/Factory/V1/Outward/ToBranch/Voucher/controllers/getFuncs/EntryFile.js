import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;

    let LocalFromRepo = GetIdFuncRepo({ inId: LocalId });

    res.json(LocalFromRepo);
};

export { GetIdFunc };