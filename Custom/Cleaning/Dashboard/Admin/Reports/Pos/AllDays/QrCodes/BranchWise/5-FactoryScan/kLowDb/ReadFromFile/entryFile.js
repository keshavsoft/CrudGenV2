import { StartFunc as buildData } from '../../../../CommonFuncs/buildData.js';
import { StartFunc as applyFilter } from "./applyFilter.js";
import { StartFunc as groupByBranch } from "./groupByBranch.js";

let StartFunc = () => {
    const LocalQrCodeData = buildData();
    const LocalFilteredArray = applyFilter({ inQrcodeArray: LocalQrCodeData });

    return groupByBranch({ inDataAsArray: LocalFilteredArray });
};

export { StartFunc };
