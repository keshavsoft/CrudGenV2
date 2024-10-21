import {
    GetFuncs as GetFuncsDal,
    GetRowDataFunc as GetRowDataFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetFuncs = ({ inBranch }) => {
    return GetFuncsDal({ inBranch });
};

let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

export {
    GetFuncs,GetRowDataFunc
};