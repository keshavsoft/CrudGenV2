import { StartFunc as EntryCancelScan } from '../../../CommonFuncs/EntryCancelScan.js';

const StartFunc = ({ inQrCodeId }) => {
    let LocalQrCodeId = inQrCodeId;

    let LocalReturnData = { KTF: false };
    const LocalEntryCancelScanData = EntryCancelScan();

    let LocalQrCheck = LocalEntryCancelScanData.find(e => e.QrCodeId == LocalQrCodeId);

    if (LocalQrCheck !== undefined) {
        LocalReturnData.KReason = `Cancel QrCode :${LocalQrCodeId}`
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    return LocalReturnData;
};
export { StartFunc };