import {
    GetFunc as GetFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};
let GetQrStatusFunc = ({ inBranch }) => {
    return GetQrStatusFuncDal({ inBranch });
};

export {
    GetFunc,GetQrStatusFunc
};