import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/TodayAllQrCodes.js';

let GetAllFuncs = ({ inBranchName }) => {
    return TodayAllQrCodes({ inBranchName });
};

export {
    GetAllFuncs
};