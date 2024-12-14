import {
    GetWithDataFunc as GetWithDataFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

let GetWithDataFunc = async (req, res) => {
    let LocalFromRepo = await GetWithDataFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo);
};

export {
    GetWithDataFunc
};