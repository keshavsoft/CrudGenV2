import { StartFunc as FactoryOut_DC } from "../../../../../../../../../binV4/FactoryOut_DC/CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId }) => {

    let LocalId = inId;
    let LocalReturnData = {};
    LocalReturnData = FactoryOut_DC();

    return LocalReturnData.filter(element => element.VoucherRef == LocalId);
};

export { StartFunc };
