import { StartFunc as WashingScan } from '../CommonFuncs/FromApi/WashingScan.js';
import { StartFunc as WashingDC } from '../CommonFuncs/FromApi/WashingDC.js';

let StartFunc = ({ inId }) => {
    let localId = inId;
    let LocalWashingDcData = WashingDC();
    let LocalWashingScanData = WashingScan();
    let LocalReturnData = { KTF: false }

    let LocalFilterDcData = LocalWashingDcData.find(element => element.pk == localId);

    if (LocalFilterDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };
    let LocalFilterScanDataCount = LocalWashingScanData.filter(element => element.VoucherRef == localId).length;

    LocalReturnData.QrCount = LocalFilterScanDataCount;
    LocalReturnData.AsIs = LocalFilterDcData;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFunc };
