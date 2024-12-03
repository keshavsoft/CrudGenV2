import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/FacoryEntryScan/entryFile.js';

let PostFunc = ({ inFactory, inDataInsert,inQrCodeId,inVoucher }) => {
    let LocalFromLowDb = FacoryEntryScan({ inFactory, inDataInsert,inQrCodeId,inVoucher });

    return LocalFromLowDb;
};

export {
    PostFunc
};