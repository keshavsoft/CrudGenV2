import {
    DeleteFuncs as DeleteFuncsRepo
} from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFuncs = (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id

    let LocalFromRepo = DeleteFuncsRepo({ inId: Localid });

    res.status(200).json(LocalFromRepo);
};

export {
    DeleteFuncs
};