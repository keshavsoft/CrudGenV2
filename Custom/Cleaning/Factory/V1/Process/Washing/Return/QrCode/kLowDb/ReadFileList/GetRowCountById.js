import { StartFunc as WashingCancelScan } from '../CommonFuncs/WashingCancelScan.js';

let StartFunc = ({ inFactory, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    let LocalRowpk = inId;

    const BranchScandb = WashingCancelScan();

    let LocalFilterEntryScan = BranchScandb.filter(e => e.FactoryName === LocalFactory && e.VoucherRef === LocalRowpk);
    let LocalReturnData = LocalFilterEntryScan.length;

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
