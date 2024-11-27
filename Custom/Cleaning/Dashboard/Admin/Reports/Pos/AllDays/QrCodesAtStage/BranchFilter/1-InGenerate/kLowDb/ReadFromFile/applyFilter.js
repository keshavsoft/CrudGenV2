const CommonBranchScanFilterKey = "BranchScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonBranchScanFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
