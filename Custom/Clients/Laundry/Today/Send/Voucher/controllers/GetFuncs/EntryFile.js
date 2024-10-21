import {
    GetFuncs as GetFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalParams = req.params;
    let LocalBranch = LocalParams.inBranch

    let LocalFromRepo = GetFuncsRepo({ inBranch: LocalBranch });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs
};