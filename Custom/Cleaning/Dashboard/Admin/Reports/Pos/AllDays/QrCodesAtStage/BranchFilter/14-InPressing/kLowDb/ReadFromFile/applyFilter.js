const CommonPressingScanFilterKey = "PressingScan";
const CommonWashingScanFilterKey = "WashingScan";

const StartFunc = ({ inQrcodeArray, inBranchName }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === false &&
            element[CommonWashingScanFilterKey] === true &&
            element.BranchName === inBranchName;
    });

    return LocalFilteredArray;
};

export { StartFunc };
