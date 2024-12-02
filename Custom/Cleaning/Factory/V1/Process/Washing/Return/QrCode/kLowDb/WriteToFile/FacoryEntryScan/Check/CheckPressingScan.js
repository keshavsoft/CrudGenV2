import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/pressingScan.js';

const StartFunc = ({ inQrCodeId }) => {
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalQrCheck = dbForQrCodes.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `Sent to pressing QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };