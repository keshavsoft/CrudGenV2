const CommonBranchScanFilterKey = "BranchScan";
const CommonToFactoryFilterKey = "EntryScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonBranchScanFilterKey] === true &&
            element[CommonToFactoryFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
