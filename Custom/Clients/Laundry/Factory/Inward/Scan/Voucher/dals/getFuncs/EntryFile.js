// import { StartFunc as GetVoucher } from '../../kLowDb/ReadFromApi/GetVoucher.js';
import { StartFunc as GetVoucherQrStatus } from '../../kLowDb/ReadFileList/GetVoucherQrStatus.js';
import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';
import { StartFunc as withQrDetails } from '../../kLowDb/ReadFileList/withQrDetails.js';

let GetFunc = ({ inFactory }) => {
    return GetVoucher({ inFactory });
};

let GetFilterFactoryFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

let GetQrStatusFunc = ({ inFactory }) => {
    return GetVoucherQrStatus({ inFactory });
};

export {
    GetFunc, GetFilterFactoryFunc, GetQrStatusFunc
};