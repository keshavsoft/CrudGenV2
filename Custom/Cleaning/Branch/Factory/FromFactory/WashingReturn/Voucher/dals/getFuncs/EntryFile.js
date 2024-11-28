// import { StartFunc as GetVoucher } from '../../kLowDb/ReadFileList/GetVoucher.js';

let GetFunc = ({ inFactory }) => {
    console.log("inFactory");    
    // return GetVoucher({ inFactory });
};
let GetQrStatusFunc = ({ inBranch }) => {
    // return GetVoucher({ inBranch });
};

export {
    GetFunc,GetQrStatusFunc
};