import { StartFunc as WashingDc } from '../CommonFuncs/WashingDc.js';
import { StartFunc as WashingScan } from '../CommonFuncs/WashingScan.js';

let StartFunc = ({ inFactory }) => {
    // let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    let LocalFactory = inFactory;

    const WashingDcdb = WashingDc();
    WashingDcdb.read();

    const WashingScandb = WashingScan();
    WashingScandb.read();

    let LocalFilterBranchDc = WashingDcdb.data.filter(e => e.FactoryName === LocalFactory);

    let LocalFilterEntryScan = WashingScandb.data.filter(e => e.FactoryName === LocalFactory);

    let jVarLocalTransformedData = jFLocalMergeFunc({
        inBranchDc: LocalFilterBranchDc,
        inEntryScan: LocalFilterEntryScan
    });
    let LocalArrayReverseData = jVarLocalTransformedData.slice().reverse();

    return LocalArrayReverseData;
};

let jFLocalMergeFunc = ({ inBranchDc, inEntryScan }) => {

    let jVarLocalReturnObject = inBranchDc.map(loopDc => {
        const LocalFilterData = inEntryScan.filter(loopQr => loopQr.VoucherRef == loopDc.pk);
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
