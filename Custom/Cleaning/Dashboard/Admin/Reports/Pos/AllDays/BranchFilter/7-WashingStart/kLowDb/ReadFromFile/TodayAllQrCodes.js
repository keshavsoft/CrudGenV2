import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';

let StartFunc = ({ inBranchName }) => {
    const LocalQrCodeData = buildData();

    return LocalQrCodeData.filter(element => {
        return element.BranchName === inBranchName && element.WashingScan === true;
    });

    // return LocalQrCodeData;
    // return groupByBranch({ inDataAsArray: LocalQrCodeData });
};

export { StartFunc };
