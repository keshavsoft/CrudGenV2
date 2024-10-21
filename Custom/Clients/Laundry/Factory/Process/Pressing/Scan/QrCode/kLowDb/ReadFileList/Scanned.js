import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as WashingScan } from '../CommonFuncs/PressingScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/WashingScan.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/PressingCancelScan.js';
import { StartFunc as WashingDC } from '../CommonFuncs/PressingDC.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/ReWashScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    Qrdb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    const EntryScandb = EntryScan();
    EntryScandb.read();

    const EntryCancelScandb = EntryCancelScan();
    EntryCancelScandb.read();

    const WashingDCdb = WashingDC();
    WashingDCdb.read();

    const ReWashScandb = ReWashScan();
    ReWashScandb.read();

    let LocalFilterWashingScan = WashingScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterQr = Qrdb.data.filter(e => e.location === LocalFactory);
    let LocalFilterEntryScan = EntryScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterCancelScan = EntryCancelScandb.data.filter(e => e.FactorySelected === LocalFactory);
    let LocalFilterWashingDC = WashingDCdb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterReWashingScan = ReWashScandb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterEntryScanData = LocalFilterEntryScan.filter(loopQr =>
        !LocalFilterCancelScan.some(loopScan => loopScan.QrCodeId == loopQr.QrCodeId)
    );



    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterWashingScan,
        inEntryScan: LocalFilterEntryScanData,
        inEntryCancelScan: LocalFilterCancelScan,
        inWashingDC: LocalFilterWashingDC,
        inRewashScan: LocalFilterReWashingScan

    });
    let localReturnData = getmatchedRecords({ inFromQrData: jVarLocalTransformedData, inEntryScan: LocalFilterEntryScan })

    let LocalArrayReverseData = localReturnData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inEntryScan, inEntryCancelScan, inWashingDC, inRewashScan }) => {
    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const match = inEntryScan.some(loopEntryScan => loopEntryScan.QrCodeId == loopScan.QrCodeId);
        const CheckEntryReturn = inEntryCancelScan.some(loopEntryReturnScan => loopEntryReturnScan.QrCodeId == loopScan.QrCodeId);
        const matchedWashingDC = inWashingDC.find(loopDC => loopDC.pk == loopScan.VoucherRef);
        const matchRewashScan = inRewashScan.some(loopReWashScan => loopReWashScan.QrCodeId == loopScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,

            VoucherNumber: matchedWashingDC?.pk,
            DCDate: new Date(matchedWashingDC?.Date).toLocaleDateString('en-GB'),

            QrCodeId: loopScan.QrCodeId,
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,
            Status: match,
            EntryReturnStarus: CheckEntryReturn,
            ReWashStatus: matchRewashScan,
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
