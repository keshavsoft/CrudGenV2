import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranchName }) => {
    const LocalQrCodeData = buildData();

    LocalQrCodeData.filter(element => {
        return element.BranchName === inBranchName && element.BranchScan === true;
    });

    return LocalQrCodeData.slice().reverse();
    // return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
