import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';

let GetAllFuncs = () => {
    return TodayAllQrCodes();
};

export {
    GetAllFuncs
};