import { StartFunc as StartFuncReadBranchFile } from '../CommonFuncs/readBranchFile.js';
import { StartFunc as createDC } from "./createDC.js";
import { StartFunc as FactoryOut_QrCodeScan } from "./FactoryOut_QrCodeScan.js";

let StartFunc = ({ inId, inFactory }) => {
    let LocalVouherPk = inId;
    let LocalFactoryName = inFactory;
    let LocalQrCodeData = StartFuncReadBranchFile({ inVouherPk: LocalVouherPk });

    const result = groupBy(LocalQrCodeData, "BranchName");

    for (const [key, value] of Object.entries(result)) {
        const LoopinsieinsertPk = createDC({ inBranchName: key, inFactory: LocalFactoryName, inId: LocalVouherPk });
        value.VoucherRef = LoopinsieinsertPk;
        FactoryOut_QrCodeScan({ inBulkData: value })
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
