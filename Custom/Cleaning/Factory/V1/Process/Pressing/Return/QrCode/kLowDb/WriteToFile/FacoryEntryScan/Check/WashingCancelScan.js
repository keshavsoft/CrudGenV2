import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/WashingCancelScan.js';

const StartFunc = ({ inTable, inQrCodeId }) => {
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    dbForQrCodes.JsonData = dbForQrCodes.data;
    // dbForQrCodes.JsonData;

    let LocalQrCheck = dbForQrCodes.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `Cancel QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };