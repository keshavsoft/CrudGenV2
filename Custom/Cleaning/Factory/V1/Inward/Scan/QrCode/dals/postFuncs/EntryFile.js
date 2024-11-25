import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/FacoryEntryScan/entryFile.js';

let PostFunc = ({ inFactory, inDataInsert,inVoucherRef,inQrCodeId }) => {
    let LocalFromLowDb = FacoryEntryScan({ inFactory, inDataInsert,inVoucherRef,inQrCodeId });

    return LocalFromLowDb;
};

export {
    PostFunc
};