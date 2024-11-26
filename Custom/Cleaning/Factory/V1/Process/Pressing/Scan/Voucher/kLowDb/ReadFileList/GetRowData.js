import { StartFunc as PressingScan } from '../CommonFuncs/FromApi/PressingScan.js';
import { StartFunc as PressingDC } from '../CommonFuncs/FromApi/PressingDC.js';

let StartFunc = ({ inId }) => {
    let localId = inId;
    let LocalPressingDcData = PressingDC();
    let LocalPressingScanData = PressingScan();
    let LocalReturnData = { KTF: false }

    let LocalFilterDcData = LocalPressingDcData.find(element => element.pk == localId);

    if (LocalFilterDcData === undefined) {
        LocalReturnData.KReason = `No data ${localId}`
        return LocalReturnData;
    };
    let LocalFilterScanDataCount = LocalPressingScanData.filter(element => element.VoucherRef == localId).length;

    LocalReturnData.QrCount = LocalFilterScanDataCount;
    LocalReturnData.AsIs = LocalFilterDcData;
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

export { StartFunc };
