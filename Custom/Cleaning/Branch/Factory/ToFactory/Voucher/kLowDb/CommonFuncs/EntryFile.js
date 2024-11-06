import { StartFunc as BranchDc } from './FromApi/BranchDC.js';
import { StartFunc as BranchScan } from './FromApi/BranchScan.js';
import { StartFunc as entryScan } from './FromApi/entryScan.js';

let StartFunc = ({ inBranch }) => {
    let BranchDcdb = BranchDc();
    let BranchScandb = BranchScan();
    let LocalEntryScanData = entryScan();

    let LocalFilterBranchDc = BranchDcdb.filter(e => e.BranchName === inBranch);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inBranchScan: BranchScandb,
        inEntryScanData: LocalEntryScanData
    });

    return jVarLocalTransformedData.slice().reverse();
};

let jFLocalMergeFunc = ({ inBranchDc, inBranchScan, inEntryScanData }) => {
    return inBranchDc.map(loopDc => {
        let LocalFilterData = inBranchScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        let LocalScanFilter = inEntryScanData.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
        loopDc.Date = new Date(loopDc?.Date).toLocaleDateString('en-GB');
        loopDc.BrancScan = LocalFilterData;
        loopDc.ItemDetails = LocalFilterData.length;
        loopDc.EntryScan = LocalScanFilter;
        loopDc.EntryScanCount = LocalScanFilter.length;
        loopDc.EntryDc = LocalScanFilter.length > 0;
        loopDc.TimeSpan = TimeSpan(loopDc?.DateTime);
        return loopDc;
    });
};

function TimeSpan(DateTime) {
    let diffMs = new Date() - new Date(DateTime);
    let diffMonths = Math.floor(diffMs / 2629800000);
    let diffDays = Math.floor((diffMs % 2629800000) / 86400000);
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    let diffMins = Math.round((diffMs % 3600000) / 60000);

    return diffMonths > 0 ? `${diffMonths} months, ${diffDays} days, ${diffHrs} hours, ${diffMins} min` :
        diffDays > 0 ? `${diffDays} days, ${diffHrs} hours, ${diffMins} min` :
            diffHrs > 0 ? `${diffHrs} hours, ${diffMins} min` :
                `${diffMins} min`;
};

export { StartFunc };
