import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/PressingCancelScan.js';

const StartFunc = ({ inQrCodeId }) => {
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalQrCheck = dbForQrCodes.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `Cancel QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };