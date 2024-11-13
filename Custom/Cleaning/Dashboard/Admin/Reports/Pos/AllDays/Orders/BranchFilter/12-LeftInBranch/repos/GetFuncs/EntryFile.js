import {
    GetAllFuncs as GetAllFuncsDal,
    GetAsIsFuncs as GetAsIsFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranchName }) => {
    return GetAllFuncsDal({ inBranchName });
};

let GetAsIsFuncs = () => {
    return GetAsIsFuncsDal();
};

export {
    GetFuncs, GetAsIsFuncs
};