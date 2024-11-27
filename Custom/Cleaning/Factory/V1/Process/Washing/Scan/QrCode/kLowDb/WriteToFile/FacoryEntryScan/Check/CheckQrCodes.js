import { StartFunc as StartFuncCommonFuncs } from '../../../CommonFuncs/QrCodes.js';

const StartFuncForBookings = ({ inTable, inQrId }) => {
    let LocalFactoryName = inTable;
    let LocalQrId = inQrId;

    let LocalReturnData = { KTF: false };
    const LocalQrCodesData = StartFuncCommonFuncs();

    let LocalRowNeeded = LocalQrCodesData.find(e => e.pk == LocalQrId);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = `No Qr Code :${LocalQrId}`
        return LocalReturnData;
    };

    if (LocalRowNeeded.location !== LocalFactoryName) {
        LocalReturnData.KReason = `Not this Factory :${LocalQrId}`
        return LocalReturnData;
    };
    LocalReturnData.JsonData = LocalRowNeeded;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFuncForBookings };