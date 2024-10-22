import {
    GetAllFuncs as GetAllFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

export {
    GetFuncs
};