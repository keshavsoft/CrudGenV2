import { StartFunc as QrCodes } from '../CommonFuncs/QrCodes.js';
import { StartFunc as EntryCancelScan } from '../CommonFuncs/EntryCancelScan.js';
import { StartFunc as EntryScan } from '../CommonFuncs/EntryScan.js';

let StartFunc = ({ inFactory, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    let LocalId = inId;
    const QrData = QrCodes();
    const EntryCancelScanData = EntryCancelScan();
    const EntryScanData = EntryScan();

    let LocalFilterCancelScanData = EntryCancelScanData.filter(e => e.FactoryName == LocalFactory);
    let filterData = JFDCMergeFunc({ inEntryScan: EntryScanData, inEntryCancel: LocalFilterCancelScanData });

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inQrData: QrData,
        inEntryScan: filterData
    });

    const getNeedRecords = jVarLocalTransformedData.filter(item => EntryScanData.some(other => other.QrCodeId == item.QrCodeId && item.DCVoucherRef == LocalId))
    let LocalArrayReverseData = getNeedRecords.slice().reverse();
    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inQrData, inEntryScan }) => {
    let jVarLocalReturnObject = inEntryScan.map(loopScan => {
        const matchedRecord = inQrData.find(loopQr => loopQr.pk == loopScan.QrCodeId);

        return {
            OrderNumber: matchedRecord?.GenerateReference.ReferncePk,
            OrderDate: new Date(matchedRecord?.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB'),
            DeliveryDate: new Date(matchedRecord?.DeliveryDateTime).toLocaleDateString('en-GB'),
            ItemName: matchedRecord?.ItemName,
            Rate: matchedRecord?.Rate,
            DCVoucherRef:loopScan?.DCVoucherRef,
            VoucherNumber: loopScan?.VoucherNumber,
            QrCodeId: loopScan.QrCodeId,
            DCDate: new Date(loopScan?.Date).toLocaleDateString('en-GB'),
            BranchName: loopScan?.BranchName,
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

let JFDCMergeFunc = ({ inEntryScan, inEntryCancel }) => {
    return inEntryCancel.map(element => {
        let LocalFilter = inEntryScan.find(qr => qr.QrCodeId == element.QrCodeId);
        return {
            ...element,
            DCVoucherRef: LocalFilter?.VoucherRef
        }
    });
}

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
