import { StartFunc as Insert } from "../../../../../../../../../binV4/FactoryOut_DC/Create/kLowDb/WriteTofile/asIs.js";

let StartFunc = ({ inBranchName }) => {
    let LocalBranchName = inBranchName;

    let LocalInsertObject = {};
    LocalInsertObject.BranchName = LocalBranchName;

    let LocalInsert = Insert({ inDataToInsert: LocalInsertObject });

    if (LocalInsert.KTF === true) {
        return LocalInsert.pk
    }

    return false;
};

export { StartFunc };
