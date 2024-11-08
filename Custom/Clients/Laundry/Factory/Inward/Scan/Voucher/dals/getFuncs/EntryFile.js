// import { StartFunc as GetVoucher } from '../../kLowDb/ReadFromApi/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';
import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as withQrDetails } from '../../kLowDb/ReadFileList/withQrDetails.js';
import { StartFunc as GetRowData } from '../../kLowDb/ReadFileList/GetRowData.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetFilterFactoryFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetRowDataFunc = ({ inId }) => {
    return GetRowData({ inId });
};

export {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc, GetRowDataFunc
};