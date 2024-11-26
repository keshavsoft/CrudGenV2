const CommonFilterKey = "EntryScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalFilteredArray = inQrcodeArray.filter(element => {
        return element[CommonFilterKey] === true;
    });

    return LocalFilteredArray;
};

export { StartFunc };
