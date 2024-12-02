const CommonBranchScanFilterKey = "BranchScan";
const CommonToFactoryFilterKey = "EntryScan";

const StartFunc = ({ inQrcodeArray ,inBranchName}) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonBranchScanFilterKey] === true &&
            element[CommonToFactoryFilterKey] === false &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
