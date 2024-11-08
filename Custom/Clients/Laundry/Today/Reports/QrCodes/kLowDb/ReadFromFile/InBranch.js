import { StartFunc as buildData } from '../CommonFuncs/buildData.js';

let StartFunc = ({ inBranch }) => {
    let LocalBranchName = inBranch;

    let jVarLocalTransformedData = buildData({ inBranch: LocalBranchName });
    console.log("jVarLocalTransformedData : ", jVarLocalTransformedData);

    let jVarLocalUnScanned = jVarLocalTransformedData.filter(element => {
        return element.BranchScan === false;
    });

    let LocalArrayReverseData = jVarLocalUnScanned.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
