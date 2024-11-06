import { StartFunc as BranchDc } from './FromApi/BranchDC.js';
import { StartFunc as BranchScan } from './FromApi/BranchScan.js';
import { StartFunc as entryScan } from './FromApi/entryScan.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranch = inBranch;

    const BranchDcdb = BranchDc();
    const BranchScandb = BranchScan();
    const LocalEntryScanData = entryScan();

    let LocalFilterBranchDc = BranchDcdb.filter(e => e.BranchName === LocalBranch);

    let LocalFilterBranchScan = BranchScandb.filter(e => e.BranchName === LocalBranch);
    let LocalFilterEntryScan = LocalEntryScanData.filter(e => e.BranchName === LocalBranch);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inBranchScan: BranchScandb,
        inEntryScanData: LocalEntryScanData
    });

    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inBranchDc, inBranchScan, inEntryScanData }) => {
    const LocalDcData = LocalFuncMergeBranchScan({ inBranchDc, inBranchScan });

    let jVarLocalReturnObject = LocalDcData.map(loopDc => {
        const LocalFilterData = inBranchScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        const LocalScanFilter = inEntryScanData.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        const LocalScanDc = inEntryScanData.some(loopQr => loopQr.VoucherRef == loopDc.pk);

        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.EntryScan = LocalScanFilter;
        loopDc.EntryScanCount = LocalScanFilter.length;
        loopDc.EntryDc = LocalScanDc;

        loopDc.TimeSpan = TimeSpan({ DateTime: loopDc.DateTime });
        return loopDc
    });

    return jVarLocalReturnObject;
};

let LocalFuncMergeBranchScan = ({ inBranchDc, inBranchScan }) => {
    let jVarLocalReturnObject = inBranchDc.map(loopDc => {
        const LocalFilterData = inBranchScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);

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
