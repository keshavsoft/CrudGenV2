const CommonFilterKey = "BranchScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalFilteredArray = inQrcodeArray.filter(element => {
        return element[CommonFilterKey] === false;
    });

    return LocalFilteredArray;
};

export { StartFunc };
