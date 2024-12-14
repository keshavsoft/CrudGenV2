import { StartFunc as StartFuncwriteFileFromModal } from './WithChecking/StartFunc.js';
import { StartFuncForBookings as StartFuncCheckQrCodes } from "./Check/CheckQrCodes.js";
import { StartFunc as CheckBrcnchScan } from "./Check/CheckBrcnchScan.js";

let StartFunc = ({ inFactory, inDataInsert, inQrCodeId, inVoucher }) => {

    let LocalTable = inFactory;
    let LocalQrId = inQrCodeId;
    let LocalDataInsert = inDataInsert;
    let LocalVoucher = parseInt(inVoucher);
    let LocalReturnData = { KTF: false };

    let LocalCheckQrCodes = StartFuncCheckQrCodes({ inTable: LocalTable, inQrId: LocalQrId });

    if (LocalCheckQrCodes.KTF === false) {
        LocalReturnData.KReason = LocalCheckQrCodes.KReason
        return LocalReturnData;
    };

    let LocalCheckBrcnchScan = CheckBrcnchScan({ inTable: LocalTable, inQrCodeId: LocalQrId, inVoucher: LocalVoucher });

    if (LocalCheckBrcnchScan.KTF === false) {
        LocalReturnData.KReason = LocalCheckBrcnchScan.KReason
        return LocalReturnData;
    };

    let LocalInsert = StartFuncwriteFileFromModal({ inDataToInsert: LocalDataInsert, inVoucher: LocalVoucher });

    if (LocalInsert.KTF === false) {
        LocalReturnData.KReason = LocalInsert.KReason
        return LocalReturnData;
    };
    LocalReturnData.QrCount = LocalInsert.QrCount;
    LocalReturnData.ScanNo = LocalInsert.ScanNo;
    LocalReturnData.QrData = LocalCheckQrCodes.JsonData;
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };