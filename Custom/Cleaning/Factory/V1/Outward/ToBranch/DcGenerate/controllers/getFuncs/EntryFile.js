import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;
    let LocalFactory = LocalParams.inFactory;

    let LocalFromRepo = GetIdFuncRepo({ inId: LocalId, inFactory: LocalFactory });

    res.json(LocalFromRepo);
};

export { GetIdFunc };