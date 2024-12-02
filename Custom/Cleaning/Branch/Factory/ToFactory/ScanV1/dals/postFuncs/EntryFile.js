import { StartFunc as EntryScan } from '../../kLowDb/EntryScan/Scan.js';

let PostFunc = ({ inBranch, inPostBody, inQrCodeId, inVoucherRef }) => {
    return EntryScan({ inBranch, inDataInsert: inPostBody, inQrCodeId, inVoucherRef });
};

export { PostFunc };