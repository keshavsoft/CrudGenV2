import { StartFunc as CompletionScan } from "../../../../../../../../../binV4/CompletionScan/Show/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inVouherPk }) => {
    let LocalReturnData = CompletionScan();

    let LocalFilteredArray = LocalReturnData.filter(element => {
        return element.VoucherRef === inVouherPk;
    });

    return LocalFilteredArray;
};

export { StartFunc };