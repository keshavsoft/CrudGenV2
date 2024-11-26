const CommonPressingScanFilterKey = "PressingScan";
const CommonWashingScanFilterKey = "WashingScan";

const StartFunc = ({ inQrcodeArray }) => {
    const LocalQrcodeArray = inQrcodeArray;

    const LocalFilteredArray = LocalQrcodeArray.filter(element => {
        return element[CommonPressingScanFilterKey] === false &&
            element[CommonWashingScanFilterKey] === true;
    });

    return LocalFilteredArray;
};

export { StartFunc };
