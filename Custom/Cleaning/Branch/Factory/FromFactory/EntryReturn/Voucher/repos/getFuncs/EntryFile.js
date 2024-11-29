import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inBranch }) => {
    return GetFuncDal({ inBranch });
};

let GetQrStatusFunc = ({ inBranch }) => {
    return GetQrStatusFuncDal({ inBranch });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc
};