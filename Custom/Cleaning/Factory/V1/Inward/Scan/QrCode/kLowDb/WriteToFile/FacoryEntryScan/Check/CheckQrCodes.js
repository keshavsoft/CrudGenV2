import { StartFunc as returnAsArray } from "../../../../../../../../../../../binV4/QrCodes/Show/kLowDb/PullData/returnAsArray.js";

const StartFuncForBookings = ({ inTable, inQrId }) => {
    let LocalBranchName = inTable;
    let LocalQrId = inQrId;

    let LocalReturnData = { KTF: false };

    const LocalJsonData = returnAsArray();

    let LocalRowNeeded = LocalJsonData.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    let LocalcheckBranchName = LocalJsonData.find(e => e.location == LocalBranchName);

    if (LocalcheckBranchName === undefined) {
        LocalReturnData.KReason = `Not this Factory :${LocalQrId}`
        return LocalReturnData;
    };
    
    LocalReturnData.JsonData = LocalRowNeeded;

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFuncForBookings };