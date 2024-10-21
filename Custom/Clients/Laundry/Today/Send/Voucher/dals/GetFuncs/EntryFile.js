import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';

let GetFuncs = ({ inBranch }) => {
    return GetVoucher({ inBranch });
};

export {
    GetFuncs
};