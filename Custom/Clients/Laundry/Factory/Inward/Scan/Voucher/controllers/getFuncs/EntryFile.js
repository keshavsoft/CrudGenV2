import {
    GetFunc as GetFuncRepo,
    GetFilterFactoryFunc as GetFilterFactoryFuncRepo,
    GetQrStatusFunc as GetQrStatusFuncRepo,
    GetRowDataFunc as GetRowDataFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetFilterFactoryFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetFilterFactoryFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetQrStatusFunc = async (req, res) => {
    let LocalParams = req.params;
    let LocalFactory = LocalParams.inFactory;
    let LocalFromRepo = GetQrStatusFuncRepo({ inFactory: LocalFactory });

    res.status(200).json(LocalFromRepo);
};

let GetRowDataFunc = async (req, res) => {
    let LocalParams = req.params;
    let Localid = LocalParams.id;
    let LocalFromRepo = GetRowDataFuncRepo({ inId: Localid });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc, GetRowDataFunc
};