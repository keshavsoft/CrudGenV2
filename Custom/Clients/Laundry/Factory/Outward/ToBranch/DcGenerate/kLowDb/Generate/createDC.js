import { StartFunc as Insert } from "../../../../../../../../../binV4/FactoryOut_DC/Create/kLowDb/WriteTofile/asIs.js";

let StartFunc = ({ inBranchName }) => {
    let LocalBranchName = inBranchName;

    let LocalInsertObject = {};
    LocalInsertObject.BranchName = LocalBranchName;

    Insert({ inDataToInsert: LocalInsertObject });

    return true;
};

export { StartFunc };
