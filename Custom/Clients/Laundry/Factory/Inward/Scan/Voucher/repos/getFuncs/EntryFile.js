import {
    GetFunc as GetFuncDal,
    GetFilterFactoryFunc as GetFilterFactoryFuncDal,
    GetQrStatusFunc as GetQrStatusFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
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

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

export {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc, GetRowDataFunc
};