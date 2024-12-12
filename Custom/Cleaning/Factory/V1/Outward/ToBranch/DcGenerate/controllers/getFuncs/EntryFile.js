import { GetIdFunc as GetIdFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetIdFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalId = LocalParams.inId;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = await GetIdFuncRepo({ inId: LocalId,inFactory:LocalFactory });

    res.json(LocalFromRepo);
};

export { GetIdFunc };