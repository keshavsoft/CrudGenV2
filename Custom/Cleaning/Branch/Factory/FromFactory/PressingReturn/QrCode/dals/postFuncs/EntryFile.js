import { StartFunc as FactoryWashingScan } from '../../kLowDb/WriteToFile/FacoryPressingScan/entryFile.js';

let PostFunc = ({ inFactory, inDataInsert,inQrCodeId,inVoucher }) => {
    let LocalFromLowDb = FactoryWashingScan({ inFactory, inDataInsert,inQrCodeId,inVoucher });

    return LocalFromLowDb;
};

export {
    PostFunc
};