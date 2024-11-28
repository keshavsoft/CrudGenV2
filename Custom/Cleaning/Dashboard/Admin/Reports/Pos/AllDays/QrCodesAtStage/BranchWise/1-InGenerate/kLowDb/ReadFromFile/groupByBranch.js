let StartFunc = ({ inDataAsArray }) => {
    const grouped = inDataAsArray.reduce((result, item) => {
        const key = item.BranchName;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});

    let LocalReturnArray = [];

    for (const [key, value] of Object.entries(grouped)) {
        const LoopInsideQrCodes = value.map(LocalFunc);
        const max = Math.max(...LoopInsideQrCodes);
        // console.log("aaaaaaa : ", max);

        LocalReturnArray.push({
            BranchName: key,
            QrCount: value.length,
            QrMax: max
        })
    };

    return LocalReturnArray;
};

const LocalFunc = (LoopItem) => {
    // console.log("LoopItem : ".LoopItem);

    return LoopItem.QrCodeId;
}

export { StartFunc };
