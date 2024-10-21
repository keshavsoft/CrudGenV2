import { StartFunc as GetRowDataById } from '../../kLowDb/ReadFileList/GetRowDataById.js';
import { StartFunc as GetRowCountById } from '../../kLowDb/ReadFileList/GetRowCountById.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowDataById({ inBranch, inId });

    return LocalFromLowDb;
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    let LocalFromLowDb = GetRowCountById({ inBranch, inId });

    return LocalFromLowDb;
};

export {
    GetRowDataFunc, GetRowCountFunc
};