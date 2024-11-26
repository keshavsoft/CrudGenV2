import {
    GetAllFuncs as GetAllFuncsDal
} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranchName }) => {
    return GetAllFuncsDal({ inBranchName });
};


export {
    GetFuncs
};