import { StartFunc as TodayOrdersWithQrs } from '../../kLowDb/ReadFileList/TodayOrdersWithQrs.js';
import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';

let GetFuncs = ({ inBranch }) => {
    return TodayOrdersWithQrs({ inBranch });
};

let GetRowDataFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inBranch, inId });

    return LocalFromLowDb;
};

export {
    GetFuncs, GetRowDataFunc
};