import { StartFunc as GetOrderWithQr } from '../../kLowDb/ReadFileList/GetOrderWithQr.js';
import { StartFunc as GetOrderSettlementWithQr } from '../../kLowDb/ReadFileList/GetOrderSettlementWithQr.js';

let GetFunc = ({ inOrderId, inBranch }) => {
    return GetOrderWithQr({ inOrderId, inBranch });
};

let GetOrderWithQrFunc = ({ inOrderId, inBranch  }) => {
    return GetOrderSettlementWithQr({ inOrderId, inBranch  });
};

let GetRowDataFunc = ({ inId }) => {
    return GetOrderWithQr({ inId });
};

export {
    GetFunc, GetOrderWithQrFunc, GetRowDataFunc
};