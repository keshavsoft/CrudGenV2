import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = () => {
    return GetAllFuncsDal();
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

export {
    GetFuncs, GetAsIsFuncs
};