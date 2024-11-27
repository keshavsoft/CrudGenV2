import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";
import { StartFunc as CheckBrcnchReturnScan } from "./Check/CheckBrcnchReturnScan.js";

let StartFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucherRef }) => {

    let LocalTable = inFactory;
    let LocalQrId = inQrCodeId;
    let LocalDc = inVoucherRef;
    let LocalDataInsert = inDataInsert;
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchReturnScan = CheckBrcnchReturnScan({ inQrCodeId: LocalQrId });

    if (LocalCheckBrcnchReturnScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchReturnScan.KReason
        return LocalReturnData;
    };
    let localInsert = StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert, inVoucherRef: LocalDc });

    if (localInsert.KTF === false) {
        LocalReturnData.KReason = localInsert.KReason
        return LocalReturnData;
    };

    LocalReturnData.QrCount = localInsert.QrCount;
    LocalReturnData.ScanNo = localInsert.ScanNo;
    LocalReturnData.QrData = LocalCheckQrCodes.JsonData;
    LocalReturnData.KTF = true;

};

export { StartFunc };