import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/EntryScan.js';

let StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false };

    const Qrdb = QrCodes();
  
    const WashingScandb = WashingScan();
   
    let LocalBranchScanFilter = WashingScandb.find(e => e.QrCodeId == LocalId);

    if (LocalBranchScanFilter === undefined) {
        LocalReturnData.KReason = "No data"
        return LocalReturnData;
    };
    
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = Qrdb.find(e => e.pk == LocalId);

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inId: "39" })
