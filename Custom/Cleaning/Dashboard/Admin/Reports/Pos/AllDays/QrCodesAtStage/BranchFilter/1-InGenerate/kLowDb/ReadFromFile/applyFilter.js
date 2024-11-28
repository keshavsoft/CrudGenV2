const CommonBranchScanFilterKey = "BranchScan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonBranchScanFilterKey] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
