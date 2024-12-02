import { StartFunc as WashingScan } from '../CommonFuncs/ReWashScan.js';

let StartFunc = ({ inFactory, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    let LocalRowpk = inId;

    const WashingScandb = WashingScan();

    let LocalFilterEntryScan = WashingScandb.filter(e => e.FactoryName === LocalFactory && e.VoucherRef === LocalRowpk);
    let LocalReturnData = LocalFilterEntryScan.length;

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
