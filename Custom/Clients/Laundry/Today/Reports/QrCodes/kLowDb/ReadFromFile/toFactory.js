import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let LocalData = buildData({ inBranch: LocalBranchName });

    let jVarLocalUnScanned = LocalData.filter(element => element.BranchScan === true);

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
