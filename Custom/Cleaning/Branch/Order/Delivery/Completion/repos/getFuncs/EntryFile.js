import {
    GetFunc as GetFuncDal,
    GetOrderWithQrFunc as GetOrderWithQrFuncDal,
    GetRowDataFunc as GetRowDataFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inOrderId, inBranch }) => {
    return GetFuncDal({ inOrderId, inBranch });
};

let GetOrderWithQrFunc = ({ inOrderId, inBranch  }) => {
    return GetOrderWithQrFuncDal({ inOrderId, inBranch  });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

export {
    GetFunc, GetOrderWithQrFunc, GetRowDataFunc
};