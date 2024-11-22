import { StartFunc as FactoryOut_QrCodeScan } from "../../../../../../../../../binV4/FactoryOut_QrCodeScan/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId, inBranchName }) => {
    
    let LocalId = inId;
    let LocalBranchName = inBranchName;
    let LocalReturnData = {};
    LocalReturnData = FactoryOut_QrCodeScan();

    return LocalReturnData.filter(element => element.VoucherRef == LocalId && element.BranchName == LocalBranchName);
};

export { StartFunc };
