import { StartFunc as buildData } from '../../../CommonFuncs/buildData.js';
import { StartFunc as applyFilter } from "./applyFilter.js";

let StartFunc = () => {
    const LocalQrCodeData = buildData();
    const LocalFilteredArray = applyFilter({ inQrcodeArray: LocalQrCodeData });

    let LocalArrayReverseData = LocalFilteredArray.slice().reverse();

    return LocalArrayReverseData;
};

export { StartFunc };
