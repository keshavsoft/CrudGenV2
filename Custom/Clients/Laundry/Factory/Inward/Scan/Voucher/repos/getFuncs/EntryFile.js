import {
    GetFunc as GetFuncDal,
    GetFilterFactoryFunc as GetFilterFactoryFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFactory }) => {
    return GetFuncDal({ inFactory });
};

let GetFilterFactoryFunc = ({ inFactory }) => {
    return GetFilterFactoryFuncDal({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetQrStatusFuncDal({ inFactory });
};

export {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc
};