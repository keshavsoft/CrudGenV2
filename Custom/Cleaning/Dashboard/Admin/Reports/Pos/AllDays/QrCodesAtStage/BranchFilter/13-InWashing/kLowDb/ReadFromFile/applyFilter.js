const CommonToFactoryFilterKey = "EntryScan";
const CommonWashingScanFilterKey = "WashingScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonWashingScanFilterKey] === false &&
            element[CommonToFactoryFilterKey] === true;
    });

    return LocalFilteredArray;
};

export { StartFunc };
