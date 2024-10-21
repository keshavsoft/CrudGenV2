import {
    GetRowDataFunc as GetRowDataFuncDal,
    GetRowCountFunc as GetRowCountFuncDal

} from '../../dals/GetFuncs/EntryFile.js';

let GetRowDataFunc = ({ inBranch, inId }) => {
    return GetRowDataFuncDal({ inBranch, inId });
};

let GetRowCountFunc = ({ inBranch, inId }) => {
    return GetRowCountFuncDal({ inBranch, inId });
};

export {
    GetRowDataFunc, GetRowCountFunc
};