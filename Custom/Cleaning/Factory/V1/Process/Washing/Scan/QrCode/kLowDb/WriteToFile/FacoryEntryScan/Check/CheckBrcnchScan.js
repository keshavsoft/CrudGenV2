import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/EntryScan.js';

const StartFunc = ({ inTable, inQrCodeId }) => {
    let LocalFactoryName = inTable;
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const LocalEntryScanData = StartFuncCommonFuncs();

    let LocalQrCheck = LocalEntryScanData.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck === undefined) {
        LocalReturnData.KReason = `No QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    if (LocalQrCheck.FactoryName !== LocalFactoryName) {
        LocalReturnData.KReason = `Not this Factory :${LocalFactoryName}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };