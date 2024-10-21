import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/EntryScan.js';

let StartFunc = ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false };

    const Qrdb = QrCodes();
    Qrdb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    let LocalBranchScanFilter = WashingScandb.data.find(e => e.QrCodeId == LocalId);

    if (LocalBranchScanFilter === undefined) {
        LocalReturnData.KReason = "No data"
        return LocalReturnData;
    };
    
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = Qrdb.data.find(e => e.pk == LocalId);

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inId: "39" })
