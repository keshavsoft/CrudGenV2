import { StartFunc as FactoryToBranchDC } from '../CommonFuncs/FromApi/CompletionDC.js';
import { StartFunc as FactoryToBranchScan } from '../CommonFuncs/FromApi/CompletionScan.js';

let StartFunc = ({ inId }) => {
    let localId = inId;
    let LocalFactoryToBranchDCData = FactoryToBranchDC();
    let LocalScanData = FactoryToBranchScan();
    let LocalReturnData = { KTF: false }

    let LocalFilterBranchDcData = LocalFactoryToBranchDCData.find(element => element.pk == localId);

    if (LocalFilterBranchDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };
    let LocalFilterBranchScanDataCount = LocalScanData.filter(element => element.VoucherRef == localId).length;

    LocalReturnData.QrCount = LocalFilterBranchScanDataCount;
    LocalReturnData.AsIs = LocalFilterBranchDcData;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFunc };
