import { StartFunc as QrCodes } from "../../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js";
import { StartFunc as FactoryOut_QrCodeScan } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId, inBranchName }) => {

    let LocalId = inId;
    let LocalBranchName = inBranchName;
    let LocalFactoryOut_Qr = FactoryOut_QrCodeScan();
   let LocalQrCodesData = QrCodes();

    let LocalFilterData = LocalFactoryOut_Qr.filter(element => element.VoucherRef == LocalId && element.BranchName == LocalBranchName);
    return LocalMergeFunc({ inFactoryOut_Qr: LocalFilterData, inQr: LocalQrCodesData })
};

const LocalMergeFunc = ({ inFactoryOut_Qr, inQr }) => {

    return inFactoryOut_Qr.map(element => {

        let LocalFilterData = inQr.find(Qr => Qr.pk == element.QrCodeId);
        return {
            BranchName: element.BranchName,
            DCDate: element.DCDate,
            FactoryName: element.FactoryName,
            VoucherRef: element.VoucherRef,
            VoucherNumber: element.VoucherNumber,

            ItemName: LocalFilterData?.ItemName,

        };

    });

}


export { StartFunc };
