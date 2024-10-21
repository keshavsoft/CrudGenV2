import { StartFunc as StartFuncReadBranchFile } from '../CommonFuncs/readBranchFile.js';
import { StartFunc as createDC } from "./createDC.js";

let StartFunc = ({ inId }) => {
    let LocalVouherPk = inId;

    let LocalQrCodeData = StartFuncReadBranchFile({ inVouherPk: LocalVouherPk });

    const result = groupBy(LocalQrCodeData, "BranchName");

    for (const [key, value] of Object.entries(result)) {
        createDC({ inBranchName: key });
    };

    return result;
};

function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];

        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        result[groupKey].push(item);
        return result;
    }, {});
};

export { StartFunc };
