import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';
import { StartFunc as groupByBranch } from "./groupByBranch.js";

let StartFunc = ({ inBranchName }) => {
    const LocalQrCodeData = buildData();

    return LocalQrCodeData.filter(element => {
        return element.BranchName === inBranchName;
    });

    // return LocalQrCodeData;
    // return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
