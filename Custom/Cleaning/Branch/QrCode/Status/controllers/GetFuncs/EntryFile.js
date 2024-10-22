import {
    GetQrFuncs as GetQrFuncsRepo,
    GetAsIsFuncs as GetAsIsFuncsRepo
} from '../../repos/GetFuncs/EntryFile.js';

let GetQrFuncs = (req, res) => {
    let LocalQr = req.params.Qr;
    let LocalFromRepo = GetQrFuncsRepo({ inQr: LocalQr });

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
    GetQrFuncs, GetAsIsFuncs
};