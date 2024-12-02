import { StartFunc as StartFuncCommonFuncs } from '../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId }) => {
    let LocalBranchName = inTable;
    let LocalQrId = inQrId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.JsonData.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.BookingData.OrderData.BranchName !== LocalBranchName) {
        LocalReturnData.KReason = `Not this Branch :${LocalQrId}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalRowNeeded;
    return LocalReturnData;
};
export { StartFuncForBookings };