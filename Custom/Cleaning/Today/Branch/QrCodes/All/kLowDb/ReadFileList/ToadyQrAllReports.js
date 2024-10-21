import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/EntryScan.js';
import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';

let StartFunc = ({ inBranch }) => {
    // let LocalFindValue = "02/09/2024";
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');

    let LocalBranchName = inBranch;

    const Qrdb = QrCodes();
    const BranchScandb = BranchScan();
    const EntryScandb = EntryScan();
    const WashingScandb = WashingScan();

    let LocalFilterQr = Qrdb.filter(e => {
        return new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue && e.BookingData.OrderData.BranchName === LocalBranchName;
    });

    let LocalFilterBranchScan = BranchScandb.filter(e => {
        return new Date(e.DateTime).toLocaleDateString('en-GB') == LocalFindValue && e.BranchName === LocalBranchName;
    });

    let LocalFilterEntryScan = EntryScandb.filter(e => {
        return new Date(e.DateTime).toLocaleDateString('en-GB') == LocalFindValue && e.BranchName === LocalBranchName;
    });

    let LocalFilterWashingScan = WashingScandb.filter(e => {
        return new Date(e.DateTime).toLocaleDateString('en-GB') == LocalFindValue && e.BranchName === LocalBranchName;
    });

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterBranchScan,
        inEntryScandata: LocalFilterEntryScan,
        inWashingScandata: LocalFilterWashingScan
    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScandata, inWashingScandata }) => {

    let jVarLocalReturnObject = inQrData.map(loopQr => {
        const match = inScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const matchEntryScandata = inEntryScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk);
        const matchWashingScandata = inWashingScandata.some(loopScan => loopScan.QrCodeId == loopQr.pk);

        return {
            QrCodeId: loopQr.pk,
            ItemName: loopQr.ItemName,
            Rate: loopQr.Rate,
            FactorySelected: loopQr.FactorySelected,
            OrderNo: loopQr.GenerateReference.ReferncePk,
            DeliveryDateTime: new Date(loopQr.DeliveryDateTime).toLocaleDateString('en-GB'),
            location: loopQr.location,
            OrderDateTime: new Date(loopQr.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            BranchSendStatus: match,
            EntryScanStatus: matchEntryScandata,
            WashingScanStatus: matchWashingScandata,
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
}

export { StartFunc };
