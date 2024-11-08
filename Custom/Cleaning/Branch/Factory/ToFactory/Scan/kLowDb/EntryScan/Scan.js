import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchDc } from "./Check/CheckBrcnchDc.js";

let StartFunc = ({ inBranch, inDataInsert, inQrCodeId, inVoucherRef }) => {

    let LocalTable = inBranch;
    let LocalQrId = inQrCodeId;
    let LocalDc = inVoucherRef;
    let LocalDataInsert = inDataInsert;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchDc = CheckBrcnchDc({ inDc: LocalDc });

    if (LocalCheckBrcnchDc.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchDc.KReason
        return LocalReturnData;
    };

    let localInsert = StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert, inVoucherRef });

    if (localInsert.KTF === false) {
        LocalReturnData.KReason = localInsert.KReason
        return LocalReturnData;
    };

    LocalReturnData.QrCount = localInsert.QrCount;
    LocalReturnData.ScanNo = localInsert.ScanNo;
    LocalReturnData.QrData = LocalCheckQrCodes.JsonData;
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };
