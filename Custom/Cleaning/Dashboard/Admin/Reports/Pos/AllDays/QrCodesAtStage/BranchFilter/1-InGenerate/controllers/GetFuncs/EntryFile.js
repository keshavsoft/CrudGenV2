import {
    GetFuncs as GetFuncsRepo,
    GetAsIsFuncs as GetAsIsFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetFuncs = (req, res) => {
    let LocalBranchName = req.params.inBranchName;
    
    let LocalFromRepo = GetFuncsRepo({ inBranchName: LocalBranchName });
    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

let GetAsIsFuncs = (req, res) => {

    let LocalFromRepo = GetAsIsFuncsRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetFuncs, GetAsIsFuncs
};