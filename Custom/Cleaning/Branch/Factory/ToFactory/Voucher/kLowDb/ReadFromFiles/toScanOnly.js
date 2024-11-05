import { StartFunc as BranchDc } from '../CommonFuncs/BranchDC.js';
import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';
import { StartFunc as entryScan } from '../CommonFuncs/entryScan.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranch = inBranch;

    const BranchDcdb = BranchDc();

    const EntryScandb = BranchScan();
    const LocalEntryScanData = entryScan();

    let LocalFilterBranchDc = BranchDcdb.filter(e => e.BranchName === LocalBranch);

    let LocalFilterEntryScan = EntryScandb.filter(e => e.BranchName === LocalBranch);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inEntryScan: LocalFilterEntryScan,
        inEntryScanData: LocalFilterEntryScan
    });
    let unmatchedRecords = jVarLocalTransformedData.filter(item1 => !LocalEntryScanData.some(item2 => item2.VoucherRef == item1.pk) );

    let LocalArrayReverseData = unmatchedRecords.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inBranchDc, inEntryScan, inEntryScanData }) => {
    const LocalDcData = LocalFuncMergeBranchScan({ inBranchDc, inEntryScan });

    let jVarLocalReturnObject = LocalDcData.map(loopDc => {
        const LocalFilterData = inEntryScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        const LocalScanFilter = inEntryScanData.filter(loopQr => loopQr.VoucherRef == loopDc.pk);

        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.FactoryScanCount = LocalScanFilter.length;

        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        return loopDc
    });

    return jVarLocalReturnObject;
};

let LocalFuncMergeBranchScan = ({ inBranchDc, inEntryScan }) => {

    let jVarLocalReturnObject = inBranchDc.map(loopDc => {
        const LocalFilterData = inEntryScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);

        loopDc.Date = new Date(loopDc.Date).toLocaleDateString('en-GB'); // dd/mm/yyyy format
        loopDc.BrancScan = LocalFilterData;
        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        return loopDc
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
