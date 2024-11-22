import { StartFunc as FactoryToBranchScan } from "../../../../../../../../../binV4/FactoryToBranchScan/Show/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inVouherPk }) => {
    let LocalReturnData = FactoryToBranchScan();

    let LocalFilteredArray = LocalReturnData.filter(element => {
        return element.VoucherRef === inVouherPk;
    });

    return LocalFilteredArray;
};

export { StartFunc };