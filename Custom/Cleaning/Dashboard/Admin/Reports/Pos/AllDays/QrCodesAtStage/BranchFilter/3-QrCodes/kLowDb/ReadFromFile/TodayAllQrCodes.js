import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranchName }) => {
    const LocalQrCodeData = buildData();

    const LocalFilteredData = LocalQrCodeData.filter(element => {
        return element.BranchName === inBranchName;
    });

    return LocalFilteredData.slice().reverse();
    // return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
