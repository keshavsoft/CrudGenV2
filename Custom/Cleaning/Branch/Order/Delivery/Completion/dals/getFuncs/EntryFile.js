import { StartFunc as GetOrderWithQr } from '../../kLowDb/ReadFileList/GetOrderWithQr.js';

let GetFunc = ({ inOrderId, inBranch }) => {
    return GetOrderWithQr({ inOrderId, inBranch });
};

let GetQrStatusFunc = ({ inBranch }) => {
    return GetOrderWithQr({ inBranch });
};

let GetRowDataFunc = ({ inId }) => {
    return GetOrderWithQr({ inId });
};

export {
    GetFunc, GetQrStatusFunc, GetRowDataFunc
};