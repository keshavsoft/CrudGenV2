import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/WashingScan.js';

const StartFunc = ({ inTable, inQrCodeId }) => {
    let LocalFactoryName = inTable;
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    
    let LocalQrCheck = dbForQrCodes.find(e => e.QrCodeId == inQrCodeId);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `Sent to washing QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };