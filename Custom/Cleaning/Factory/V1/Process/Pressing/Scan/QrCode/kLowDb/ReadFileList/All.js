import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as PressingScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as PressingCancelScan } from '../CommonFuncs/PressingCancelScan.js';
import { StartFunc as WashingCancelScan } from '../CommonFuncs/WashingCancelScan.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/ReWashScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    Qrdb.read();

    const PressingScandb = PressingScan();
    PressingScandb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    const ReWashScandb = ReWashScan();
    ReWashScandb.read();

    const PressingCancelScandb = PressingCancelScan();
    PressingCancelScandb.read();

    const WashingCancelScandb = WashingCancelScan();
    WashingCancelScandb.read();

    let LocalFilterWashing = WashingScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterPressingScan = PressingScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterPressingCancelScan = PressingCancelScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterEntryScanData = LocalFilterWashing.filter(loopQr =>
        !WashingCancelScandb.data.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
    );

    let LocalFilterQr = Qrdb.data.filter(e => e.location === LocalFactory);


    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterEntryScanData,
        inPressingScan: LocalFilterPressingScan,
        inEntryCancelScan: LocalFilterPressingCancelScan
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inPressingScan, inEntryCancelScan }) => {

    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inPressingScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const CheckEntryReturn = inEntryCancelScan.some(loopEntryReturnScan => loopEntryReturnScan.QrCodeId == loopScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,

            // VoucherNumber: matchedWashingDc?.VoucherNumber,
            // DCDate: new Date(matchedWashingDc?.Date).toLocaleDateString('en-GB'),

            QrCodeId: loopScan.QrCodeId,
            Status: match,
            EntryReturnStatus: CheckEntryReturn,
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
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
// StartFunc({inFactory:"Vizag"})
export { StartFunc };
