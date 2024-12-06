import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId }) => {
    let LocalBranchName = inTable;
    let LocalQrId = inQrId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();

    let LocalRowNeeded = dbForQrCodes.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.location !== LocalBranchName) {
        LocalReturnData.KReason = `Not this Factory :${LocalQrId}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalRowNeeded;
    return LocalReturnData;
};

export { StartFuncForBookings };