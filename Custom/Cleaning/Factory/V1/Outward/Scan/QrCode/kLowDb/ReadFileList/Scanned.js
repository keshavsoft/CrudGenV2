import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as BranchScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/CompletionScan.js';
import { StartFunc as BranchDc } from '../CommonFuncs/CompletionDC.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();

    const BranchScandb = BranchScan();

    const EntryScandb = EntryScan();

    const BranchDcdb = BranchDc();

    let LocalFilterBranchScan = BranchScandb.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterQr = Qrdb;
    let LocalFilterEntryScan = EntryScandb;
    let LocalFilterBranchDc = BranchDcdb;

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterBranchScan,
        inEntryScan: LocalFilterEntryScan,
        inBranchDC: LocalFilterBranchDc
    });
    let localReturnData = getmatchedRecords({ inFromQrData: jVarLocalTransformedData, inEntryScan: LocalFilterEntryScan })

    let LocalArrayReverseData = localReturnData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan, inBranchDC }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const matchedBranchDC = inBranchDC.find(loopDC => loopDC.pk == loopScan.VoucherRef);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            VoucherNumber: matchedBranchDC?.pk,
            DCDate: new Date(matchedBranchDC?.Date).toLocaleDateString('en-GB'),

            QrCodeId: loopScan.QrCodeId,
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,
            Status: match,
            TimeSpan: TimeSpan({ DateTime: loopScan.DateTime })
        };
    }).filter(record => record.MatchedRecord !== null);
    return jVarLocalReturnObject;
};

let getmatchedRecords = ({ inFromQrData, inEntryScan }) => {
    return inFromQrData.filter(loopQr =>
        inEntryScan.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
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
