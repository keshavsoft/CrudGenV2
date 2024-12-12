import {
    GetIdFunc as GetIdFuncDal,
    GetPrintFunc as GetPrintFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetIdFunc = ({ inId, inFactory }) => {
    return GetIdFuncDal({ inId, inFactory });
};

let GetPrintFunc = ({ inId, inFactory, inBranch }) => {
    return GetPrintFuncDal({ inId, inFactory, inBranch });
};

export { GetIdFunc, GetPrintFunc };