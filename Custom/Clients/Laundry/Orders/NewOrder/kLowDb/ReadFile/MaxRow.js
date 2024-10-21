import { StartFunc as StartFuncPullData } from "../CommonFuncs/CutomTable.js";

let StartFunc = ({ inBranch }) => {
    let LocalReturnData = { KTF: false };
    let LoclainBranch = inBranch;

    let LocalStartFuncPullData = StartFuncPullData({ inTable: LoclainBranch });

    if (LocalStartFuncPullData.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncPullData.KReason;
        return LocalReturnData;
    };
    const db = LocalStartFuncPullData.JsonData;

    if (db.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };

    let maxRow;
    let maxPk = -Infinity;

    for (const row of db) {
        if (row.pk > maxPk) {
            maxPk = row.pk;
            maxRow = row;
        }
    }

    LocalReturnData.JsonData = maxRow;
    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };