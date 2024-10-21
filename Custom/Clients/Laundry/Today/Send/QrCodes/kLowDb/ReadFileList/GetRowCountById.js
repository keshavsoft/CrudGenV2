import { StartFunc as BranchScan } from '../CommonFuncs/BranchScan.js';

let StartFunc = ({ inBranch, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalBranch = inBranch;
    let LocalRowpk = inId;

    const BranchScandb = BranchScan();
    BranchScandb.read();

    let LocalFilterEntryScan = BranchScandb.data.filter(e => e.BranchName === LocalBranch && e.VoucherRef === LocalRowpk);
    let LocalReturnData = LocalFilterEntryScan.length;

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
