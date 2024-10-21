import {
    GetFunc as GetFuncDal,
    GetNotEmptyFunc as GetNotEmptyFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetNotEmptyFunc = () => {
    return GetNotEmptyFuncDal();
};

export { GetFunc, GetNotEmptyFunc };