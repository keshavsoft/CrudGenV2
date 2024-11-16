import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';

let StartFunc = ({ inFactory, inId }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;
    let LocalRowpk = inId;

    const WashingScandb = WashingScan();
    WashingScandb.read();

    let LocalFilterEntryScan = WashingScandb.data.filter(e => e.FactoryName === LocalFactory && e.VoucherRef === LocalRowpk);
    let LocalReturnData = LocalFilterEntryScan.length;

    return LocalReturnData;
};

export { StartFunc };
// StartFunc({ inFactory: "Vizag" })
