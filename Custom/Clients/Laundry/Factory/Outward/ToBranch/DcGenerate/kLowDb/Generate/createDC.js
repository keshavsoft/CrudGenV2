import { StartFunc as Insert } from "../../../../../../../../../binV4/FactoryOut_DC/Create/kLowDb/WriteTofile/asIs.js";

let StartFunc = ({ inBranchName, inFactory, inId }) => {
    let LocalBranchName = inBranchName;
    let LocalFactoryName = inFactory;
    let LocalinId = inId;

    let LocalInsertObject = {};
    LocalInsertObject.FactoryName = LocalFactoryName;
    LocalInsertObject.RefDC = LocalinId;
    LocalInsertObject.BranchName = LocalBranchName;

    let LocalInsert = Insert({ inDataToInsert: LocalInsertObject });

    if (LocalInsert.KTF === true) {
        return LocalInsert.pk
    }

    return false;
};

export { StartFunc };
