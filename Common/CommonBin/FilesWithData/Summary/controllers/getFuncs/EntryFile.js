import {
    GetFunc as GetFuncRepo,
    GetNotEmptyFunc as GetNotEmptyFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.json(LocalFromRepo.JsonData);
};

let GetNotEmptyFunc = async (req, res) => {
    let LocalFromRepo = await GetNotEmptyFuncRepo();

    res.json(LocalFromRepo.JsonData);
};

export { GetFunc, GetNotEmptyFunc };