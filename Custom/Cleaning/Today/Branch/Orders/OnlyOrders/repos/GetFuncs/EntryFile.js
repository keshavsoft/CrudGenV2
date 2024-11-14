import {
    GetFuncs as GetFuncsDal,
    GetItemsFuncs as GetItemsFuncsDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetItemsFuncs = ({ inBranch }) => {
    return GetItemsFuncsDal({ inBranch });
};

export {
    GetFuncs, GetItemsFuncs
};