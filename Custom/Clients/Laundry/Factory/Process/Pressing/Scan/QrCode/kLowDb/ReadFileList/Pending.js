import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/WashingScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    Qrdb.read();

    const EntryScandb = EntryScan();
    EntryScandb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    let LocalFilterQr = Qrdb.data.filter(e => e.location === LocalFactory);
    let LocalFilterEntryScan = EntryScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterWashingScandb = WashingScandb.data.filter(e => e.FactoryName === LocalFactory);


    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterEntryScan,
        inEntryScan: LocalFilterWashingScandb
    });
    let localReturnData = getUnmatchedRecords({ inFromQrData: jVarLocalTransformedData, inEntryScan: LocalFilterWashingScandb })

    let LocalArrayReverseData = localReturnData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            // VoucherNumber: loopScan?.VoucherNumber,
            QrCodeId: loopScan.QrCodeId,
            // DCDate: new Date(loopScan?.DCDate).toLocaleDateString('en-GB'),
            BranchName: loopScan?.BranchName,
            Status: match,
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};

let getUnmatchedRecords = ({ inFromQrData, inEntryScan }) => {
    return inFromQrData.filter(loopQr =>
        !inEntryScan.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
    );
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
// StartFunc({ inFactory: "Vizag" })
