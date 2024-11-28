import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/FromApi/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId }) => {
    let LocalBranchName = inTable;
    let LocalQrId = inQrId;
    let LocalReturnData = { KTF: false };
    const QrCodesData = StartFuncCommonFuncs();

    let LocalRowNeeded = QrCodesData.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.BookingData.OrderData.BranchName !== LocalBranchName) {
        LocalReturnData.KReason = `Not this Branch :${LocalQrId}`
        return LocalReturnData;
    };
    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFuncForBookings };