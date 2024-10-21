import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as ReWashScan } from '../CommonFuncs/ReWashScan.js';
import { StartFunc as ReWashDC } from '../CommonFuncs/ReWashDC.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const Qrdb = QrCodes();
    Qrdb.read();

    const ReWashDCdb = ReWashDC();
    ReWashDCdb.read();

    const ReWashScandb = ReWashScan();
    ReWashScandb.read();


    let LocalFilterReWashDC = ReWashDCdb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterReWashScan = ReWashScandb.data.filter(e => e.FactoryName === LocalFactory);
    let LocalFilterQr = Qrdb.data.filter(e => e.location === LocalFactory);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: LocalFilterQr,
        inScandata: LocalFilterReWashScan,
        inReWashDC: LocalFilterReWashDC,
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inScandata, inReWashDC }) => {

    let jVarLocalReturnObject = inScandata.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);
        const matchedReWashDC = inReWashDC.find(loopDC => loopDC.pk == loopScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            BranchName: matchedRecord?.BookingData.OrderData.BranchName,

            VoucherNumber: matchedReWashDC?.VoucherRef,
            QrCodeId: loopScan.QrCodeId,
            DCDate: new Date(matchedReWashDC?.Date).toLocaleDateString('en-GB'),
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
