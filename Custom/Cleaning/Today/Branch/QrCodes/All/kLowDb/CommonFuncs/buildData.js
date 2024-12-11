import { StartFunc as QrCodes } from './QrCodes.js';
import { StartFunc as BranchScan } from './BranchScan.js';
import { StartFunc as BranchDc } from './BranchDc.js';

let StartFunc = ({ inBranch }) => {
    const Qrdb = QrCodes({ inBranch });
    const BranchScandb = BranchScan({ inBranch });
    const BranchDcdb = BranchDc();

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: Qrdb,
        inScandata: BranchScandb, inBranchDC: BranchDcdb
    });

    return jVarLocalTransformedData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inBranchDC }) => {
    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const matchBranchScan = inScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const matchFind = inScandata.find(loopScan => loopScan.QrCodeId == loopQr.pk);
        let LoalBranchDCFindeData = inBranchDC.find(e => e.pk == matchFind?.VoucherRef);

        return {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime:new Date( loopQr.DeliveryDateTime).toLocaleDateString('en-GB'),
            location: loopQr.location,
            OrderDateTime: new Date(loopQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            BranchScan: matchBranchScan,
            VocherNumber: LoalBranchDCFindeData?.pk,
            VoucherDate: LoalBranchDCFindeData?.Date,
            TimeSpan: TimeSpan({ DateTime: loopQr.BookingData.OrderData.Currentdateandtime })
        };
    });
    return jVarLocalReturnObject;
};

function TimeSpan({ DateTime }) {
    var diffMs = new Date() - new Date(DateTime);
    var diffMonths = Math.floor(diffMs / 2629800000); // approximate months (30.44 days)
    var diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    var diffMins = Math.round((diffMs % 3600000) / 60000);

    if (diffMonths > 0) {
        return diffMonths + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffDays > 0) {
        return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min";
    } else if (diffHrs > 0) {
        return diffHrs + " hours, " + diffMins + " min";
    } else {
        return diffMins + " min";
    }
};

export { StartFunc };
