import { StartFunc as FacoryEntryScan } from '../../kLowDb/WriteToFile/FacoryEntryScan/entryFile.js';

let PostFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucherRef }) => {
    let LocalFromLowDb = FacoryEntryScan({ inFactory, inDataInsert, inQrCodeId, inVoucherRef });

    return LocalFromLowDb;
};

export {
    PostFunc
};