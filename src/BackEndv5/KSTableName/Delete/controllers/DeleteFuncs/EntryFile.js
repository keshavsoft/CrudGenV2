import {
    DeleteFunc as DeleteFuncRepo,
    ReferenceCheckFunc as ReferenceCheckFuncRepo,
    ParamFunc as ParamFuncRepo,
    QueryFunc as QueryFuncRepo
}
    from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await DeleteFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let ReferenceCheckFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await ReferenceCheckFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let ParamFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await ParamFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let QueryFunc = async (req, res) => {
    let LocalId = req.params.Id;

    let LocalFromRepo = await QueryFuncRepo({ inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

export { DeleteFunc, ReferenceCheckFunc, ParamFunc, QueryFunc };