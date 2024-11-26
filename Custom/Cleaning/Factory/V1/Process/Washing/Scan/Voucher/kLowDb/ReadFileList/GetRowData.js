import { StartFunc as BranchDc } from '../CommonFuncs/FromApi/BranchDC.js';
import { StartFunc as EntryScan } from '../CommonFuncs/FromApi/EntryScan.js';

let StartFunc = ({ inId }) => {
    let localId = inId;
    let LocalBranchDcData = BranchDc();
    let LocalEntryScanData = EntryScan();
    let LocalReturnData = { KTF: false }

    let LocalFilterBranchDcData = LocalBranchDcData.find(element => element.pk == localId);

    if (LocalFilterBranchDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };
    let LocalFilterBranchScanDataCount = LocalEntryScanData.filter(element => element.VoucherRef == localId).length;

    LocalReturnData.QrCount = LocalFilterBranchScanDataCount;
    LocalReturnData.AsIs = LocalFilterBranchDcData;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFunc };
