const CommonToFactoryFilterKey = "EntryScan";
const CommonWashingScanFilterKey = "WashingScan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonWashingScanFilterKey] === false &&
            element[CommonToFactoryFilterKey] === true &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
