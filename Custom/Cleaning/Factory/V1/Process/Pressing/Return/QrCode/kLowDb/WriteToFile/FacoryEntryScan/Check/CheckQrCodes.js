import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId }) => {
    let LocalBranchName = inTable;
    let LocalQrId = inQrId;

    let LocalReturnData = { KTF: false };
    const dbForQrCodes = StartFuncCommonFuncs();
    dbForQrCodes.JsonData = dbForQrCodes.data;

    let LocalRowNeeded = dbForQrCodes.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    let LocalcheckBranchName = dbForQrCodes.find(e => e.location == LocalBranchName);

    if (LocalcheckBranchName === undefined) {
        LocalReturnData.KReason = `Not this Factory :${LocalQrId}`
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFuncForBookings };