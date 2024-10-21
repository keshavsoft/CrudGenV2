import { StartFunc as BranchScan } from '../CommonFuncs/EntryCancelScan.js';

let StartFunc = ({ inFactory, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    let LocalRowpk = inId;

    const BranchScandb = BranchScan();
    BranchScandb.read();

    let LocalFilterEntryScan = BranchScandb.data.filter(e => e.FactoryName === LocalFactory && e.VoucherRef === LocalRowpk);
    let LocalReturnData = LocalFilterEntryScan.length;

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
